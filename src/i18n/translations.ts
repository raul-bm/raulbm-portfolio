export type Lang = "es" | "en";

export type Dict = {
  nav: {
    home: string;
    projects: string;
    about: string;
    skills: string;
    contact: string;
  };
  hero: {
    badge: string;
    hello: string;
    subPre: string;
    subBold1: string;
    subMid: string;
    subBold2: string;
    subPost: string;
    cv: string;
    window: string;
    roleLabel: string;
    roleValue: string;
    lookingLabel: string;
    lookingValue: string;
  };
  about: {
    title: string;
    subTitle: string;
    text: string;
    year1: string;
    textYear1: string;
    year2: string;
    textYear2: string;
    year3: string;
    textYear3: string;
    year4: string;
    textYear4: string;
    final: string;
  };
  skills: {
    subTitle: string;
    skillsTitle1: string;
    skillsTitle2: string;
    skillsTitle3: string;
    skillsTitle4: string;
  };
  contact: {
    title: string;
    subTitle: string;
    text: string;
    final: string;
    form: {
      nameTitle: string;
      namePlaceholder: string;
      emailTitle: string;
      emailPlaceholder: string;
      messageTitle: string;
      messagePlaceholder: string;
      button: string;
      finalMessage: string;
      error: string;
    };
  };
  footer: {
    made: string;
  };
  projectsUI: {
    title: string;
    subTitle: string;
    text: string;
    showing: string;
    of: string;
    projectsWord: string;
    showMore: string;
    showLess: string;
    viewProject: string;
    featured: string;
    inProgress: string;
    techTitle: string;
    linksTitle: string;
    demo: string;
    repo: string;
    video: string;
  };
  projectsDetails: Record<
    string,
    {
      title: string;
      category: string;
      role: string;
      short: string;
      description: string[];
    }
  >;
};

export const translations: Record<Lang, Dict> = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Sobre mí",
      skills: "Skills",
      contact: "Contacto",
    },
    hero: {
      badge: "Abierto a oportunidades",
      hello: "Hola, soy",
      subPre: "Desarrollador",
      subBold1: "web",
      subMid: "y de",
      subBold2: "videojuegos",
      subPost: ". Construyo juegos y aplicaciones completas.",
      cv: "Descargar CV",
      window: "quien-soy.js",
      roleLabel: "rol",
      roleValue: "Desarrollador Web y de Videojuegos",
      lookingLabel: "buscando",
      lookingValue: "Trabajo como Desarrollador Junior",
    },
    about: {
      title: "Sobre mí",
      subTitle: "De SMR a los videojuegos",
      text: "Empecé en sistemas (SMR), me especialicé en desarrollo web (DAW) y aterricé en el mundo del videojuego con un grado en diseño y desarrollo de videojuegos. Ahora curso un máster en diseño y programación de videojuegos mientras sigo construyendo proyectos.",
      year1: "2025 – hoy",
      textYear1: "Máster en Diseño y Programación de Videojuegos",
      year2: "2021 – 2025",
      textYear2: "Grado en Diseño y Desarrollo de Videojuegos",
      year3: "2019 – 2021",
      textYear3: "FP Superior DAW - Desarrollo de Aplicaciones Web",
      year4: "2017 – 2019",
      textYear4: "FP Media SMR - Sistemas Microinformáticos y Redes",
      final: "España · abierto a remoto",
    },
    skills: {
      subTitle: "Tecnologías que uso",
      skillsTitle1: "Lenguajes",
      skillsTitle2: "Web",
      skillsTitle3: "Videojuegos",
      skillsTitle4: "Herramientas",
    },
    contact: {
      title: "Contacto",
      subTitle: "¿Hablamos?",
      text: "Si buscas a alguien con muchas ganas de aprender, escríbeme.",
      final: "España · abierto a remoto",
      form: {
        nameTitle: "Nombre",
        namePlaceholder: "Tu nombre",
        emailTitle: "Email",
        emailPlaceholder: "tu@email.com",
        messageTitle: "Mensaje",
        messagePlaceholder: "Cuéntame sobre la oferta...",
        button: "Enviar mensaje",
        finalMessage: "¡Gracias! Te responderé pronto.",
        error: "Error al enviar. Escríbeme a rbenitezmillet@gmail.com",
      },
    },
    footer: {
      made: "Hecho con React",
    },
    projectsUI: {
      title: "Proyectos",
      subTitle: "Lo que he construido",
      text: "Haz clic en cualquier proyecto para ver capturas, GIFs y enlaces.",
      showing: "Mostrando",
      of: "de",
      projectsWord: "proyectos",
      showMore: "Mostrar más proyectos",
      showLess: "Mostrar menos proyectos",
      viewProject: "Ver proyecto",
      featured: "DESTACADO",
      inProgress: "EN PROGRESO",
      techTitle: "Tecnologías",
      linksTitle: "Enlaces",
      demo: "Demo",
      repo: "Código",
      video: "Vídeo",
    },
    projectsDetails: {
      "app-parking-react-native": {
        title: "App Parking (React-Native)",
        category: "App",
        role: "Full-stack",
        short:
          'Adaptación de la web app "App Parking" a una app nativa con React-Native.',
        description: [
          "Adaptacion de la web app ya creada a una app nativa con React-native.",
          "Backend igual al de la web app ya creada.",
        ],
      },
      "app-parking": {
        title: "App Parking",
        category: "Web App",
        role: "Full-stack",
        short:
          "Web App para crear pines en dónde el usuario ha aparcado. Con gestión de usuarios, API REST, backend y frontend.",
        description: [
          "Desarrollo full-stack de una web app para recordar dónde aparcas el coche.",
          "Con mapa interactivo usando Leaflet, creación de pines, grupos y amigos, y compartición de ubicaciones en tiempo real mediante WebSockets. Incluye autenticación con Google OAuth y una interfaz trilingüe.",
        ],
      },
      "web-bellamapi": {
        title: "Web y Servidor bellamapi.es",
        category: "Web",
        role: "Colaborador y Mantenedor (full-stack)",
        short: "Colaboración y mantenimiento de un sitio web en producción.",
        description: [
          "Colaboro en el desarollo y mantenimiento de una página web en producción y su servidor: corrección de errores, actualizaciones importantes, etc.",
        ],
      },
      "videogame-libro-magico": {
        title: "El Libro Mágico de Alimentos",
        category: "Videojuego",
        role: "Programador",
        short: "Videojuego educativo para niños",
        description: [
          "Videojuego educativo para niños.",
          'Creado para la asignatura "Fundamentos para el Diseño de Videojuegos Didácticos" del grado de Diseño y Desarrollo de Videojuegos.',
        ],
      },
      "videogame-party-drinker": {
        title: "Party Drinker",
        category: "Videojuego",
        role: "Programador",
        short: "Videojuego creado en 2 días para la UJI Game Jam 2026",
        description: ["Videojuego creado en 2 días para la UJI Game Jam 2026."],
      },
      "videogame-secretos-altura": {
        title: "Los secretos de Altura",
        category: "Videojuego",
        role: "Programador",
        short:
          "Videojuego creado para un proyecto de tres asignaturas para el grado. Colaborando con el pueblo de Altura por su historia.",
        description: [
          "Se creó un videojuego en colaboración con el pueblo de Altura para un proyecto del Grado de Diseño y Desarrollo de Videojuegos.",
        ],
      },
      "videogame-trick-or-treat": {
        title: "Trick or Treat - Kill Your Beat",
        category: "Videojuego",
        role: "Programador",
        short: "Videojuego creado en 2 días para la UJI Game Jam 2024.",
        description: ["Videojuego creado en 2 días para la UJI Game Jam 2024."],
      },
      "bot-telegram-alarmas": {
        title: "Bot de Telegram",
        category: "Bot Telegram",
        role: "Programador principal",
        short: "Creación de un bot de Telegram para enviar alarmas a usuarios.",
        description: [
          "Creación de un bot de Telegram con Node.js y MySQL para emitir alertas de monitorización remota vía Telegram",
        ],
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Open to work",
      hello: "Hi, I'm",
      subPre: "",
      subBold1: "Web",
      subMid: "and",
      subBold2: "Videogame",
      subPost: "Developer. I make vidoegames and full apps.",
      cv: "Download CV",
      window: "who-i-am.js",
      roleLabel: "role",
      roleValue: "Web and Videogame Developer",
      lookingLabel: "lookingFor",
      lookingValue: "Job as Junior Developer",
    },
    about: {
      title: "About me",
      subTitle: "From Microcomputer Systems to Video Games",
      text: "I started in systems (Microcomputer Systems and Networks), specialized in Web Development and moved into Video Games with a degree in Video Game Design and Development. I'm now studying a master's in Video Game Design and Programming while I keep building projects.",
      year1: "2025 – today",
      textYear1: "Master's in Video Game Design and Programming",
      year2: "2021 – 2025",
      textYear2: "Degree in Video Game Design and Development",
      year3: "2019 – 2021",
      textYear3:
        "Higher Technician in Web Application Development (FP Superior DAW)",
      year4: "2017 – 2019",
      textYear4:
        "Technician in Microcomputer Systems and Networks (FP Media SMR)",
      final: "Spain · open to work remotely",
    },
    skills: {
      subTitle: "Technologies I use",
      skillsTitle1: "Languages",
      skillsTitle2: "Web",
      skillsTitle3: "Video Games",
      skillsTitle4: "Tools",
    },
    contact: {
      title: "Contact",
      subTitle: "Can we talk?",
      text: "If you look for someone eager to learn, write me.",
      final: "Spain · open to work remotely",
      form: {
        nameTitle: "Name",
        namePlaceholder: "Your name",
        emailTitle: "Email",
        emailPlaceholder: "your@email.com",
        messageTitle: "Message",
        messagePlaceholder: "Tell me about the offer...",
        button: "Send message",
        finalMessage: "Thanks! I'll respond to you as soon as possible.",
        error: "Error at sending message. Write me at rbenitezmillet@gmail.com",
      },
    },
    footer: {
      made: "Made with React",
    },
    projectsUI: {
      title: "Projects",
      subTitle: "What I made",
      text: "Click on any project to see a description, images, GIFs and links.",
      showing: "Showing",
      of: "of",
      projectsWord: "projects",
      showMore: "Show more projects",
      showLess: "Show less projects",
      viewProject: "View project",
      featured: "FEATURED",
      inProgress: "IN PROGRESS",
      techTitle: "Technologies",
      linksTitle: "Links",
      demo: "Demo",
      repo: "Code",
      video: "Video",
    },
    projectsDetails: {
      "app-parking-react-native": {
        title: "App Parking (React-Native)",
        category: "App",
        role: "Full-stack",
        short:
          'Adaptation of the "App Parking" web app to a native app with React-Native.',
        description: [
          "Adaptation of the existing web app to a native app with React-Native.",
          "Same backend as the existing web app.",
        ],
      },
      "app-parking": {
        title: "App Parking",
        category: "Web App",
        role: "Full-stack",
        short:
          "Web app to create pins for where you parked. With user management, REST API, backend and frontend.",
        description: [
          "Full-stack development of a web app to remember where you park your car.",
          "With interactive map using Leaflet, pin creation, groups and friends, and real-time location sharing via WebSockets. Includes Google OAuth authentication and a trilingual interface.",
        ],
      },
      "web-bellamapi": {
        title: "bellamapi.es Website and Server",
        category: "Web",
        role: "Collaborator and Maintainer (full-stack)",
        short: "Collaboration and maintenance of a production website.",
        description: [
          "I collaborate in the development and maintenance of a production website and its server: bug fixes, major updates, etc.",
        ],
      },
      "videogame-libro-magico": {
        title: "El Libro Mágico de Alimentos",
        category: "Video Game",
        role: "Programmer",
        short: "Educational video game for kids",
        description: [
          "Educational video game for kids.",
          'Created for the "Fundamentals of Educational Video Game Design" course of the Video Game Design and Development degree.',
        ],
      },
      "videogame-party-drinker": {
        title: "Party Drinker",
        category: "Video Game",
        role: "Programmer",
        short: "Video Game created in 2 days for the UJI Game Jam 2026",
        description: [
          "Video Game created in 2 days for the UJI Game Jam 2026.",
        ],
      },
      "videogame-secretos-altura": {
        title: "Los secretos de Altura",
        category: "Video Game",
        role: "Programmer",
        short:
          "Video Game created for a three-course degree project. In collaboration with the town of Altura for its history.",
        description: [
          "Video Game created in collaboration with the town of Altura for a Video Game Design and Development degree project.",
        ],
      },
      "videogame-trick-or-treat": {
        title: "Trick or Treat - Kill Your Beat",
        category: "Video Game",
        role: "Programmer",
        short: "Video Game created in 2 days for the UJI Game Jam 2024.",
        description: [
          "Video Game created in 2 days for the UJI Game Jam 2024.",
        ],
      },
      "bot-telegram-alarmas": {
        title: "Telegram Bot",
        category: "Telegram Bot",
        role: "Lead Developer",
        short: "Creation of a Telegram bot to send alerts to users.",
        description: [
          "Creation of a Telegram Bot with Node.js and MySQL to send remote monitoring alerts via Telegram",
        ],
      },
    },
  },
};
