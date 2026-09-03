import Link from "next/link";
import "./globals.css";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#fbf9fc] px-6 text-center text-[#1b1b1e]">
        <h1 className="text-3xl font-semibold">This route doesn&apos;t resolve.</h1>
        <p className="max-w-sm text-[#444748]">
          The page you&apos;re looking for has moved, or never existed.
        </p>
        <Link href="/en" className="underline">
          Back to home
        </Link>
      </body>
    </html>
  );
}
