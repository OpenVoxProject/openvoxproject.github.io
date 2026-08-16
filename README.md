# openvoxproject.org

The [OpenVox](https://openvoxproject.org) website — a static marketing site built with
[Jekyll](https://jekyllrb.com/) for page templates/content and [Vite](https://vite.dev/) for JS/CSS bundling,
on top of the [`@openvoxproject/voxblocks`](https://www.npmjs.com/package/@openvoxproject/voxblocks) web
component library.

## Local development

Prerequisites: Node.js 26+ and Ruby 3.4+ with Bundler.

```console
npm install
bundle install
npm run dev
```

`npm run dev` runs Vite in watch mode and `jekyll serve --livereload` concurrently; the site is served at
<http://localhost:4000>.

If you don't have Node or Ruby installed, you can still build and view the site with only Docker (no
livereload — rebuild the image to see changes) using the commands under [Deployment](#deployment).

## Building

Vite must run before Jekyll — it bundles `src/` into `assets/` and writes `_data/manifest.json`, which the
default layout uses to look up hashed asset filenames:

```console
npm run build
bundle exec jekyll build
```

The finished site lands in `_site/`.

## Project layout

- `index.html`, `products.html`, etc. — Jekyll pages using the `default` layout
- `_products/` — one Markdown file per product, rendered as cards and pages from its front matter plus its
  Markdown body (the body becomes the card text and the product page's hero description). To add a product,
  copy an entire existing file (e.g. `_products/openvox.md`) to a new `_products/*.md` and edit both the
  front matter and the body; no template changes needed.
- `src/` — JS and CSS bundled by Vite (`main.js` imports voxblocks components as a side effect)
- `_layouts/`, `_includes/` — Jekyll templates

## Deployment

Pushes to `main` deploy to GitHub Pages via [deploy.yml](.github/workflows/deploy.yml). A multi-stage
[Dockerfile](Dockerfile) (Node → Jekyll → nginx, serving on port 8080) is also built and published to
ghcr.io by [docker-publish.yml](.github/workflows/docker-publish.yml) on pushes to `main` and `v*.*.*` tags:

```console
docker build -t openvox-site .
docker run -p 8080:8080 openvox-site
```
