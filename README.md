# Streamer Website

Plantilla de sitio web para creadores de contenido. Reúne en un solo lugar sus plataformas, contenido, agenda y canales de contacto, con una interfaz adaptable y fácil de personalizar.

Desarrollada por **Yozora**: [GitHub](https://github.com/GreatLordYozora).

> Esta es una plantilla en desarrollo, no una plataforma de streaming ni una red social. Los textos, enlaces, fechas e imágenes actuales son datos de ejemplo y deben reemplazarse antes de publicar.

## Objetivo

Construir un hub digital para la marca personal de un streamer: ayudar a sus seguidores a descubrir contenido y eventos, encontrar sus redes y ponerse en contacto. El alcance futuro contempla notificaciones, administración de contenido y una tienda externa; el comercio electrónico se considera una segunda fase.

## Funcionalidades

### Implementadas

- Página de inicio con bienvenida, presentación del creador, contenido destacado, enlaces y acceso a Discord.
- Navegación principal adaptable y barra de enlaces a plataformas en la sección de bienvenida.
- Calendario mensual interactivo: permite cambiar de mes, marca las fechas con eventos y filtra las tarjetas por mes.
- Tarjetas de eventos con información ampliada en un modal y enlace a la plataforma correspondiente.
- Sección desplegable de fechas destacadas para consultar próximos eventos.
- Página de contacto con formularios configurables por categoría: sugerencias, colaboraciones y propuestas comerciales.
- Metadatos por página, URL canónica y etiquetas para compartir en redes (Open Graph y Twitter Cards).

### Pendientes y siguientes fases

- Suscripción a notificaciones de eventos o publicaciones.
- Panel de administración para editar contenido, eventos, enlaces y promociones.
- CTA y subsistema de merchandising conectado a una tienda externa.
- Analítica para medir interacciones y conversiones.
- Backend y persistencia para formularios, notificaciones y administración.

## Tecnologías

- [Astro](https://astro.build/) para las páginas y componentes.
- [Tailwind CSS](https://tailwindcss.com/) y [DaisyUI](https://daisyui.com/) para los estilos y componentes de interfaz.
- [astro-icon](https://github.com/natemoo-re/astro-icon) para iconos.
- TypeScript para los datos tipados del sitio.

## Requisitos

- Node.js `>=22.12.0`.
- npm.

## Personalización

La mayor parte del contenido vive en archivos de datos, separado de la presentación:

| Contenido                                 | Archivo                           |
| ----------------------------------------- | --------------------------------- |
| Presentación y enlaces principales        | `src/data/home/heroData.ts`       |
| Biografía, datos y estadísticas           | `src/data/home/aboutMeData.ts`    |
| Contenido destacado                       | `src/data/home/featuredData.ts`   |
| Redes, comunidades y plataformas          | `src/data/home/linksData.ts`      |
| Fechas, horarios e información de eventos | `src/data/home/calendarData.ts`   |
| Invitación a Discord                      | `src/data/home/discordData.ts`    |
| Formularios y campos de contacto          | `src/data/contact/contactData.ts` |
| Navegación, identidad y pie de página     | `src/data/layout/`                |

Antes de publicar:

1. Reemplaza el contenido de ejemplo y las URL de redes en `src/data/`.
2. Actualiza las imágenes en `src/assets/` y las miniaturas de eventos.
3. Configura el dominio de producción en `astro.config.mjs` (`site`) y revisa los títulos y descripciones de las páginas.
4. Conecta los formularios a un endpoint o proveedor de correo; los formularios actuales solo presentan la interfaz.

## Estructura

```text
src/
	assets/       Imágenes y miniaturas
	components/   Secciones, navegación y formularios Astro
	data/         Contenido configurable del sitio
	layouts/      Layout base y metadatos
	pages/        Página principal y ruta de contacto
	styles/       Estilos globales y tema
```
