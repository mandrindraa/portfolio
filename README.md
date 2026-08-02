# Mandrindra — Portfolio

Portfolio personnel construit avec **Next.js 15** (App Router) + **TypeScript** +
**Tailwind CSS**, implémentant le design system *Aurelian Minimalist*
(`aurelian_minimalist.md`) : Playfair Display + Inter, palette charcoal / or
mat, grille éditoriale, animations au scroll.

Contenu bilingue **FR / EN** (bouton dans la nav, persistant via
`localStorage`), avec le français par défaut.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # sert le build de production
```

> Le premier build télécharge Playfair Display et Inter depuis Google Fonts
> (via `next/font/google`) — une connexion internet est nécessaire au moment
> du build/dev.

## Structure

```
app/
  layout.tsx        # fonts, <LanguageProvider>, Navbar, Footer
  page.tsx           # Accueil
  projects/page.tsx  # Projets
  about/page.tsx      # À propos
  contact/page.tsx    # Contact (formulaire -> mailto)
  globals.css
components/
  Navbar.tsx, Footer.tsx, Reveal.tsx, PlaceholderArt.tsx
lib/
  LanguageContext.tsx   # contexte + hook useLanguage()
  content/
    fr.ts, en.ts         # tout le texte du site, par langue
    types.ts             # forme du contenu (Content)
tailwind.config.ts        # tokens transcrits depuis aurelian_minimalist.md
```

Pour changer un texte : éditer `lib/content/fr.ts` (et son équivalent dans
`en.ts`). Aucune chaîne n'est codée en dur dans les pages.

## À personnaliser avant mise en ligne

Tout fonctionne déjà, mais quelques éléments sont volontairement des
placeholders à remplacer :

- **Email de contact** : `hello@mandrindra.mg` dans `lib/content/fr.ts` et
  `en.ts` (`home.ctaEmail`, `contact.email`) — remplace par ta vraie adresse.
- **CV** : le bouton "CV / Resume" pointe vers `/resume.pdf`. Ajoute un
  fichier `resume.pdf` dans `public/`.
- **Réseaux** : `lib/content/fr.ts` / `en.ts` → `contact.links` contient
  GitHub et le portfolio (`mandrindraa.vercel.app`). Ajoute LinkedIn ou autres
  si besoin.
- **Visuels** : chaque image est actuellement un `<PlaceholderArt />` (bloc
  dégradé + initiales, aucune dépendance externe). Remplace-les par de vraies
  captures d'écran de projets avec `next/image` quand tu les auras.
- **Formulaire de contact** : `app/contact/page.tsx` ouvre le client mail via
  un lien `mailto:` pré-rempli. Pour un vrai envoi serveur, branche une route
  API (Resend, Formspree, etc.) à la place du `window.location.href`.

## Sécurité des dépendances

`npm audit` peut afficher des alertes sur `next`/`postcss` : le projet utilise
`next@15.5.22`, la dernière version corrigée disponible au moment de la
rédaction. Ces alertes proviennent du chevauchement de nombreux avis de
sécurité historiques dans la base npm et ne reflètent pas nécessairement une
vulnérabilité active sur cette version. Pense simplement à faire
`npm outdated` / `npm audit` de temps en temps et à mettre à jour `next` vers
le dernier patch de sa branche.
