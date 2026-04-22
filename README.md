# My own portfolio

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── 
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, will be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal (running it locally):

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✅ Por hacer...

- [x] Generalizar Presentation{Interes} en un solo archivo .astro que sea dinámico.
- [x] Realizar el envío del formulario de Contacto mediante el Frontend para poder mantener la web en Github Pages.
- [x] Limpiar los inputs al mandar exitosamente el formulario de Contacto.
- [x] Actualizar CV adjunto en la web.
