# Portafolio — Denis Rodriguez

Portafolio personal de [Denisio04](https://github.com/denisio04) — desarrollador
frontend y diseñador web freelance. Sitio construido con **React 19 + Vite 7**.

## Características

- **Bilingüe**: inglés/español con selector de idioma
- **Temas**: dark (por defecto) y light
- **Secciones**: Home, Proyectos, Sobre mí y Contacto
- **Contacto**: email (mailto) y WhatsApp
- **SEO**: meta description, Open Graph y Twitter Card
- **Deploy**: GitHub Pages vía `gh-pages`

## Desarrollo

```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo → http://localhost:5173
npm run build   # genera la build de producción en dist/
npm run preview # previsualiza la build localmente
```

## Publicar

```bash
npm run deploy  # build + publish de dist/ en GitHub Pages
```

El sitio queda en: https://denisio04.github.io

## Estructura

```
src/
  App.jsx                 # estado global (sección activa, tema, idioma)
  translations.js         # textos EN/ES (incluye el índice de proyectos)
  components/             # una sección + sus estilos por componente
public/
  CV_Denis_Rodriguez_Frontend_Dev.pdf
  icon.png
```