# VannyDev Portfolio

The portfolio uses the Next.js App Router. The homepage contains the original
single-page sections: Home, About, Work, Competitions, Gallery, and Contact.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` and
`npm run build` to validate changes.

## Project structure

- `app/page.tsx` — server-rendered portfolio markup and structured data
- `app/layout.tsx` — global metadata, fonts, and shared document layout
- `app/globals.css` — portfolio styles
- `public/assets/` — images, logos, and project/competition thumbnails
- `public/scripts/main.js` — progressive enhancements and interactive UI

The former multi-page placeholder URLs redirect to their matching homepage
sections.
