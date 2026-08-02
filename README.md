# BodyStrong

Landing page para el gimnasio BodyStrong. Estilo motivacional y cercano, pensado para público general y principiantes.

## Stack

- React 19 + Vite
- Estilos con CSS puro (variables de diseño en `src/estilos/global.css`)

## Estructura

- `src/paginas/`: páginas de la aplicación (Inicio, Clases, Planes, Contacto) con React Router
- `src/componentes/secciones/`: secciones de la página (Encabezado, Inicio, Clases, Planes, Galería, Testimonios, Ubicación, Instagram, PieDePagina)
- `src/componentes/ui/`: componentes reutilizables (Aparecer, Icono, Logotipo, CabeceraPagina)
- `src/datos/contenido.js`: textos, planes, clases e imágenes
- `src/estilos/global.css`: sistema de diseño completo (paleta, tipografía y estilos)

## Comandos

- `npm run dev`: servidor de desarrollo
- `npm run build`: compilación de producción
- `npm run preview`: previsualización del build
- `npm run lint`: revisión con oxlint
