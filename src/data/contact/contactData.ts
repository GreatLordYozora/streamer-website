export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "date"
  | "textarea"
  | "select";

export interface FormField {
  name: string;
  label: string;
  type: InputType;
  placeholder: string;
  required?: boolean;
  options?: string[];
}

export interface ContactFormConfig {
  id: string;
  title: string;
  description: string;
  icon: string;
  fields: FormField[];
}

export const contactData: Record<string, ContactFormConfig> = {
  general: {
    id: "general",
    title: "SUGERENCIAS Y FEEDBACK",
    description:
      "Comparte tus ideas, comentarios o propuestas de mejora para el canal y la web.",
    icon: "miscellaneous/lightbulb",
    fields: [
      {
        name: "suggestionType",
        label: "TIPO DE SUGERENCIA",
        type: "select",
        placeholder: "Selecciona una opción...",
        options: [
          "Contenido / Streams",
          "Mejoras para el Sitio Web",
          "Sección / Dinámica Nueva",
          "Otro",
        ],
        required: true,
      },
      {
        name: "nickname",
        label: "NOMBRE / ALIAS",
        type: "text",
        placeholder: "Tu nombre o usuario (opcional)",
        required: false,
      },
      {
        name: "email",
        label: "CORREO ELECTRÓNICO",
        type: "email",
        placeholder: "ejemplo@correo.com",
        required: false,
      },
      {
        name: "message",
        label: "DESCRIPCIÓN DE LA SUGERENCIA",
        type: "textarea",
        placeholder: "Escribe tu mensaje aquí...",
        required: true,
      },
    ],
  },

  collaboration: {
    id: "collaboration",
    title: "COLABORACIÓN CREADORES",
    description:
      "Canal directo para streamers y creadores que quieran organizar eventos o co-op streams.",
    icon: "miscellaneous/handshake",
    fields: [
      {
        name: "creatorName",
        label: "NOMBRE O ALIAS DE CREADOR",
        type: "text",
        placeholder: "Tu nombre o usuario",
        required: true,
      },
      {
        name: "channelUrl",
        label: "ENLACE AL CANAL PRINCIPAL",
        type: "url",
        placeholder: "https://plataforma.com/tu_canal",
        required: true,
      },
      {
        name: "collabType",
        label: "TIPO DE COLABORACIÓN",
        type: "select",
        placeholder: "Selecciona una opción...",
        options: [
          "Co-op Stream / Juego conjunto",
          "Podcast / Entrevista",
          "Evento Especial / Torneo",
          "Otro",
        ],
        required: true,
      },
      {
        name: "followers",
        label: "AUDIENCIA / PROMEDIO APROX.",
        type: "text",
        placeholder: "Ej. 50 espectadores prom. / 5k seguidores",
        required: false,
      },
      {
        name: "contactInfo",
        label: "CORREO O DISCORD DE CONTACTO",
        type: "text",
        placeholder: "ejemplo@correo.com o usuario_discord",
        required: true,
      },
      {
        name: "proposal",
        label: "PROPUESTA / IDEA DEL STREAM",
        type: "textarea",
        placeholder: "Describe tu idea o propuesta...",
        required: true,
      },
    ],
  },

  business: {
    id: "business",
    title: "PATROCINIO Y MARCAS",
    description:
      "Espacio formal para marcas, sponsors y agencias comerciales.",
    icon: "miscellaneous/mail",
    fields: [
      {
        name: "company",
        label: "EMPRESA / MARCA / AGENCIA",
        type: "text",
        placeholder: "Nombre de la entidad o marca",
        required: true,
      },
      {
        name: "contactName",
        label: "NOMBRE DEL REPRESENTANTE",
        type: "text",
        placeholder: "Nombre y cargo",
        required: true,
      },
      {
        name: "email",
        label: "CORREO CORPORATIVO",
        type: "email",
        placeholder: "contacto@empresa.com",
        required: true,
      },
      {
        name: "website",
        label: "SITIO WEB / REDES DE LA MARCA",
        type: "url",
        placeholder: "https://sitioweb.com",
        required: false,
      },
      {
        name: "campaignType",
        label: "TIPO DE ACCIÓN COMERCIAL",
        type: "select",
        placeholder: "Selecciona una opción...",
        options: [
          "Integración / Mención en Stream",
          "Sponsorship a Largo Plazo",
          "Review de Producto / Unboxing",
          "Sorteo / Giveaway",
          "Otro",
        ],
        required: true,
      },
      {
        name: "budget",
        label: "PRESUPUESTO ESTIMADO",
        type: "select",
        placeholder: "Selecciona una opción...",
        options: [
          "< $500 USD",
          "$500 - $1,500 USD",
          "$1,500 - $3,000 USD",
          "+ $3,000 USD",
          "A convenir",
        ],
        required: true,
      },
      {
        name: "timeline",
        label: "PLAZO ESTIMADO / FECHA",
        type: "text",
        placeholder: "Ej. Mes de Octubre / A corto plazo",
        required: false,
      },
      {
        name: "details",
        label: "DETALLES DE LA PROPUESTA",
        type: "textarea",
        placeholder: "Escribe los detalles o requerimientos...",
        required: true,
      },
    ],
  },
};