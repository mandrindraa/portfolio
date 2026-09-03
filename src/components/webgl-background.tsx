"use client";

import { useEffect, useRef } from "react";
import { useTheme } from '@teispace/next-themes';

const VERTEX_SRC = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `
precision highp float;

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform vec3 uLineColor;
uniform float uLineAlpha;
uniform vec3 uGlowColor;
uniform float uGlowAlpha;

// Screen-space grid with antialiased 1px lines
float gridLines(vec2 fragCoord, float cell) {
  vec2 coord = fragCoord / cell;
  vec2 g = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
  float line = min(g.x, g.y);
  return 1.0 - clamp(line, 0.0, 1.0);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;

  float minorCell = 48.0;
  float majorCell = 240.0;

  float minor = gridLines(fragCoord, minorCell) * 0.35;
  float major = gridLines(fragCoord, majorCell);

  float gridMask = clamp(minor + major, 0.0, 1.0);

  vec2 mousePx = uMouse * uResolution;
  float dist = distance(fragCoord, mousePx);
  float radius = min(uResolution.x, uResolution.y) * 0.32;
  radius *= 1.0 + 0.04 * sin(uTime * 0.35);
  float glow = exp(-(dist * dist) / (2.0 * radius * radius));

  vec3 color = uLineColor * gridMask * uLineAlpha;
  color += uGlowColor * glow * uGlowAlpha;
  float alpha = gridMask * uLineAlpha + glow * uGlowAlpha;

  gl_FragColor = vec4(color, alpha);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function readCssColor(varName: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return value || fallback;
}

function parseTriple(value: string): [number, number, number] {
  const parts = value.split(",").map((n) => parseFloat(n.trim()) / 255);
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    return [parts[0], parts[1], parts[2]];
  }
  return [1, 1, 1];
}

export function WebglBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const gl = (canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: true,
    }) || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;

    if (!gl) return;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uLineColor = gl.getUniformLocation(program, "uLineColor");
    const uLineAlpha = gl.getUniformLocation(program, "uLineAlpha");
    const uGlowColor = gl.getUniformLocation(program, "uGlowColor");
    const uGlowAlpha = gl.getUniformLocation(program, "uGlowAlpha");

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !gl) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    const mouseTarget = { x: 0.5, y: 0.42 };
    const mouseCurrent = { x: 0.5, y: 0.42 };

    function onPointerMove(e: PointerEvent) {
      mouseTarget.x = e.clientX / window.innerWidth;
      mouseTarget.y = 1 - e.clientY / window.innerHeight;
    }
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    let lineColor: [number, number, number] = [1, 1, 1];
    let lineAlpha = 0.05;
    let glowColor: [number, number, number] = [0.36, 0.55, 1];
    let glowAlpha = 0.2;

    function readThemeColors() {
      lineColor = parseTriple(readCssColor("--canvas-line", "255,255,255"));
      lineAlpha = parseFloat(readCssColor("--canvas-line-alpha", "0.05"));
      glowColor = parseTriple(readCssColor("--canvas-glow", "92,140,255"));
      glowAlpha = parseFloat(readCssColor("--canvas-glow-alpha", "0.2"));
    }
    readThemeColors();

    let rafId = 0;
    let visible = document.visibilityState === "visible";
    const start = performance.now();

    function frame(now: number) {
      rafId = requestAnimationFrame(frame);
      if (!visible || !gl || !canvas) return;

      const lerp = reduceMotion ? 1 : 0.06;
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * lerp;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * lerp;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseCurrent.x, mouseCurrent.y);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform3f(uLineColor, lineColor[0], lineColor[1], lineColor[2]);
      gl.uniform1f(uLineAlpha, lineAlpha);
      gl.uniform3f(uGlowColor, glowColor[0], glowColor[1], glowColor[2]);
      gl.uniform1f(uGlowAlpha, glowAlpha);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    rafId = requestAnimationFrame(frame);

    function onVisibility() {
      visible = document.visibilityState === "visible";
    }
    document.addEventListener("visibilitychange", onVisibility);

    // Re-read theme colors whenever the resolved theme changes (see effect below)
    const observer = new MutationObserver(readThemeColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
    // resolvedTheme is read live via CSS vars (MutationObserver), but we
    // still want the effect to double check colors right after a toggle.
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
