export default {
  global: {
    componenteFormativo: 'Diseño y construcción de interfaces web',
    descripcionCurso:
      'Este componente formativo ofrece herramientas para la construcción de interfaces gráficas, especialmente en entornos web. Se presentarán conceptos y una guía básica para desarrollar un proyecto desde cero utilizando una estrategia de caso de estudio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistema de navegación en plataformas <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de interacción en plataformas de <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estructura de la interfaz de la aplicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Construcción de la estructura del <em>front-end</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis de requerimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Diseño gráfico: herramientas de prototipado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Principios básicos de usabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Componentes de <em>software</em>',
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Seguridad',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: '<em>API Firebase</em>',
            hash: 't_8_1',
          },
          {
            numero: '8.3',
            titulo: 'Herramientas',
            hash: 't_8_3',
          },
        ],
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema de interacción en plataformas de <em>software</em>',
      referencia:
        'UXTips. (2018). ¿Qué es Arquitectura de la Información? [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=twVvK1eYmig',
    },
    {
      tema: 'Estructura de la interfaz de la aplicación',
      referencia:
        'yReyALD. (2020). BALSAMIQ MOCKUPS / Instalación y maquetación de una aplicación móvil - FACIL (música GOT de fondo) [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=idX3aFx67Vc',
    },
    {
      tema: 'Estructura de la interfaz de la aplicación',
      referencia:
        'Bluuweb! (2018). Materialize CSS Material Design Framework [Curso tutorial Español] [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YJKWkUi2r5g',
    },
    {
      tema: 'Construcción de la estructura del <em>front-end</em>',
      referencia: 'Materialize.Zip (1.0.0). (2021). [Framework CSS].',
      tipo: 'Archivo',
      link:
        'https://github.com/Dogfalo/materialize/releases/download/1.0.0/materialize-v1.0.0.zip',
    },
    {
      tema: 'Construcción de la estructura del <em>front-end</em>',
      referencia: 'Materialize. (2021). Getting Started - Materialize.',
      tipo: 'Guía de instalación',
      link: 'https://materializecss.com/getting-started.html',
    },
    {
      tema: 'Diseño gráfico: herramientas de prototipado',
      referencia:
        'FalconMasters. (2018). <em>Curso de Adobe XD | 1. Introducción y que Aprenderemos en el Curso</em> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5HfqCSm9k3Y&feature=youtu.be',
    },
    {
      tema: 'Diseño gráfico: herramientas de prototipado',
      referencia:
        'EDteam. (2017). <em>Minicurso de Balsamiq Mockups (1) - Los wireframes y la interfaz</em>. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4WqfxF1QjTM&feature=youtu.be',
    },
    {
      tema: 'Diseño gráfico: herramientas de prototipado',
      referencia:
        'Aprende, G. (2020). <em>COMO USAR CANVA: Canva tutorial - Aprende a diseñar FÁCIL y de manera PROFESIONAL</em>. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kdE6ZmT_5MI',
    },
    {
      tema: 'Diseño gráfico: herramientas de prototipado',
      referencia:
        'Conde, J. (2016). <em>01.- Material Design con Android Studio. ¿Qué es Material Design?</em> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wt0Jzc9UHNw',
    },
    {
      tema: '<em>API Firebase</em>',
      referencia:
        'Novato, P. (2019). <em>Firebase 01.- Que es Firebase</em>. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0Bhrwc8VfGw',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'la accesibilidad web hace referencia a un diseño web que permite que las personas con cierta limitación puedan percibir, entender, navegar e interactuar con la Web, aportando a su vez contenidos. La accesibilidad web además beneficia a otras personas, incluyendo a adultos mayores que han visto mermadas sus habilidades a consecuencia de la edad.',
    },
    {
      termino: 'Material Design',
      significado:
        'se puede entender como un lineamiento o principio de diseño enfocado en la visualización del sistema operativo Android. Este concepto también abarca para el diseño en la web y en cualquier plataforma. Fue desarrollado por Google.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'dentro del contexto de la informática y tecnologías, es un concepto utilizado para mencionar la facilidad con que las personas pueden utilizar una herramienta <em>software</em> particular o cualquier otro objeto tecnológico fabricado por humanos con el fin de alcanzar un objetivo concreto o satisfacer una necesidad.',
    },
    {
      termino: '<em>Wereable</em>',
      significado:
        'dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
    {
      termino: '<em>Wireframing</em>',
      significado:
        'es un esquema de página o plano de pantalla, como guía visual que representa el esqueleto o estructura visual de una interfaz.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aula formativa. (2019, julio 29). ¿Qué es el Material Design?. [Web log post]. blog.aulaformativa.com',
      link: 'https://blog.aulaformativa.com/que-es-el-material-design',
    },
    {
      referencia:
        'Calvo, L. (2015). Sistemas de navegación. Sistemas de Navegación, Madrid, España.',
      link: '',
    },
    {
      referencia:
        'Curso Wordpress. (2014). Mapa del Sitio, Navegación y Contenidos. Curso WordPress Gratis.',
      link:
        'https://cursowpress.wordpress.com/mapa-del-sitio-y-estrategia-de-navegacion/',
    },
    {
      referencia:
        'Ferraris, J. C. (2018). Patrones básicos de Navegación en Apps Móviles. Medium.',
      link:
        'https://medium.com/@juancaferraris/patrones-b%C3%A1sicos-de-navegaci%C3%B3n-en-apps-m%C3%B3viles-5b0b160ed1bb',
    },
    {
      referencia:
        'IONOS. (2021). Tendencias de diseño web. IONOS Digital Guide.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/diseno-web/tendencias-de-diseno-web/',
    },
    {
      referencia: 'Material.io. (2021). Material Design.',
      link:
        'https://material.io/design/color/the-color-system.html#color-usage-and-palettes',
    },
    {
      referencia: 'Materialize. (2021). Getting Started - Materialize.',
      link: 'https://materializecss.com/getting-started.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Muñoz de la Rosa',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
