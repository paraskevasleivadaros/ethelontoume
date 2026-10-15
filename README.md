# ethelontoume
A website built on React and hosted on GitHub Pages to support the mission of **Εθελοντούμε**, a Greek non-profit organization that raises awareness and provides support for children, teenagers, and adults with disabilities.

![ethelontoume-cover](static/img/logo2.png)

## 🛠️ Tech Stack
[![MDX](https://skillicons.dev/icons?i=md)](https://mdxjs.com/)
[![React](https://skillicons.dev/icons?i=react)](https://react.dev)
[![Vercel](https://skillicons.dev/icons?i=vercel)](https://vercel.com)
[![CSS](https://skillicons.dev/icons?i=css)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML](https://skillicons.dev/icons?i=html)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JS](https://skillicons.dev/icons?i=js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🚀 Deploy Your Own
This project is a fully customized [Docusaurus](https://docusaurus.io) site, deployed on GitHub Pages. It was developed specifically for **Εθελοντούμε**, with several customizations to fit the needs of the organization and the people it supports.

Live site: https://paraskevasleivadaros.github.io/ethelontoume/

1. In the repository's **Settings > Pages**, set **Source** to **GitHub Actions**.
2. Commit and push the deployment configuration to `main`.
3. Watch **Actions > Deploy GitHub Pages** for the build and deployment result.

Subsequent pushes to `main` deploy automatically. You can also use **Run workflow** from the workflow's Actions page.

To verify the production build locally:

```shell
npm ci
npm run build
```

To publish at `https://paraskevasleivadaros.github.io/` instead, use a repository named `paraskevasleivadaros.github.io` and change `baseUrl` to `/` and `projectName` to `paraskevasleivadaros.github.io` in `docusaurus.config.js`.

### How We Got Started
The project was initially created using the [Docusaurus CLI](https://v2.docusaurus.io/docs/installation#scaffold-project-website):

```shell
npx create-docusaurus@latest my-website classic
```

It was then adapted and extended to reflect the content and visual identity of **ethelontoume**.

## 🍴 Forking this repo
Feel free to fork this repo and use it for your own projects. And if you like it, a ⭐️ would mean a lot. Thank you!
