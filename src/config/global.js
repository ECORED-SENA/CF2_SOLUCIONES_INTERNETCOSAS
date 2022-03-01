export default {
  global: {
    componenteFormativo: 'Computación en la nube IoT',
    descripcionCurso:
      'En este componente formativo se conocerán los protocolos de comunicación involucrados en IoT tales como modelo OSI, modelo TCP-IP, protocolo MQTT y los conceptos de computación en la nube necesarios para realizar una práctica de captura de señales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conectividad IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Protocolos de conexión ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Protocolo de comunicación MQTT',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Computación en la nube ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Pasarelas de <em>cloud</em> para IoT',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Adquisición de datos en la nube ',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
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
  referencias: [
    {
      referencia:
        'Educar para el cambio.com (s.f.). ¿Qué es arduino y para qué sirve? ',
      link:
        'https://educarparaelcambio.com/arduino/que-es-arduino-y-para-que-sirve/',
    },
    {
      referencia: 'Edureka. (2019). Learn IoT In 4 Hours. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
    },
    {
      referencia:
        'Fazt (2020). Raspberry Pi, Curso para principiantes. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ra6kNSIB1uA',
    },
    {
      referencia:
        'Gandomi, H. (2015). Beyond the hype: Big data concepts, methods, and analytics. International. Journal of Information Management, 35(2), ',
      link: 'https://doi.org/10.1016/j.ijinfomgt.2014.10.007',
    },
    {
      referencia:
        'Hernández, L. (2019). Guía de introducción a MQTT con ESP8266 y Raspberry Pi. ',
      link: 'https://programarfacil.com/esp8266/mqtt-esp8266-raspberry-pi/',
    },
    {
      referencia:
        'Ingenieria e Instalaciones Industriales del Maresme. (2017). ¿Qué es MQTT? ',
      link: 'https://www.indelmar.com/?p=1140',
    },
    {
      referencia:
        'Init. (2020). Arduino curso desde cero con ejemplos, prácticas y ejercicios. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=4yOZPsv9I2U',
    },
    {
      referencia: 'IoT Bytes Bits and Bytes of IoT. (2017). Let’s decipher IoT',
      link: 'https://iotbytes.wordpress.com',
    },
    {
      referencia:
        'Pallavi, S., & Sarangi, S. (2016). Internet of Things: Architectures, Protocols, and Applications. Journal of Electrical and Computer Engineering, Article ID 9324035.',
      link: 'https://doi.org/10.1155/2017/9324035',
    },
    {
      referencia:
        'Rajesh, S., Gehlot, A., Raj Gupta, L., Singh B., & Swain, M. (2020). Internet of Things with Raspberry Pi and Arduino. Taylor & Francis Group.',
      link: '',
    },
    {
      referencia:
        'Sarabia, D. (2020). Arquitectura de análisis de datos generados por el internet de las cosas (IoT) en tiempo real. [Tesis doctoral]. Universidad Politécnica de Valencia.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actuador',
      significado:
        'componente que emplea la energía recibida para activar el funcionamiento de un proceso automatizado.',
    },
    {
      termino: 'Arduino',
      significado:
        'plataforma de desarrollo basada en una placa electrónica de <em>hardware</em> libre que incorpora un microcontrolador reprogramable y una serie de pines hembra.',
    },
    {
      termino: '<em>Cloud computing</em>',
      significado:
        'red de servicios remotos conectados a internet para almacenar, administrar y procesar datos, servidores, bases de datos, redes y <em>software</em>.',
    },
    {
      termino: 'IoT',
      significado: 'internet de las cosas.',
    },
    {
      termino: 'M2M',
      significado:
        'tecnología que permite que dos dispositivos intercambien información entre sí.',
    },
    {
      termino: 'Microcontrolador',
      significado:
        'circuito integrado programable, capaz de ejecutar las órdenes grabadas en su memoria.',
    },
    {
      termino: 'MQTT',
      significado:
        'protocolo de comunicación enfocado a la conectividad <em>machine to machine</em> (M2M).',
    },
    {
      termino: 'OSI',
      significado:
        'protocolo de interconexión de sistemas abiertos, introducido por la ISO para promover la interoperabilidad entre múltiples fabricantes.',
    },
    {
      termino: '<em>Raspberry pi</em>',
      significado:
        'ordenador de placa única u ordenadores de placa simple de bajo costo desarrollado en el Reino Unido por la <em>Raspberry Pi Foundation.</em>',
    },
    {
      termino: 'Sensor',
      significado:
        'dispositivo que está capacitado para detectar acciones o estímulos externos y responder en consecuencia.',
    },
    {
      termino: '<em>Smart cities</em>',
      significado: 'ciudades inteligentes.',
    },
    {
      termino: 'TCP-IP',
      significado:
        'protocolo de transmisión de internet, permite la comunicación entre redes interconectadas formadas por equipos con distintas arquitecturas de <em>hardware</em> y sistemas operativos.',
    },
    {
      termino: '<em>Wearables</em>',
      significado:
        'conjunto de aparatos y dispositivos electrónicos que se incorporan en alguna parte de nuestro cuerpo interactuando de forma continua con el usuario y con otros dispositivos con la finalidad de realizar alguna función concreta.',
    },
  ],
  complementario: [
    {
      texto: 'Edureka. (2019). Learn IoT In 4 Hours. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
    },
    {
      texto:
        'Hernández, L. (2019). Guía de introducción a MQTT con ESP8266 y <em>Raspberry Pi</em>',
      tipo: 'Pagina <em>web</em>',
      link: 'https://programarfacil.com/esp8266/mqtt-esp8266-raspberry-pi/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Hector Henry Jurado Soto',
        cargo: 'Experto temático - Contratista',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca ',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
