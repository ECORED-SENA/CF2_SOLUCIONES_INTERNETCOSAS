<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conectividad IoT
    p.mb-5 El IoT, o internet de las cosas, consiste en conectar a internet cualquier dispositivo teniendo en cuenta tres aspectos fundamentales: captura de datos (telemetría, geoposicionamiento), tratamiento de datos (<em>Business Intelligence, Machine Learning…</em>) y transformación del negocio.
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-5.p-5(data-aos="fade-right"): img(src="@/assets/curso/0.svg")
      .col-lg-7.p-5(data-aos="fade-left")
        p.w-75 Los dispositivos IoT generan grandes cantidades de datos digitales que contienen información de los usuarios, y las máquinas de análisis del <em>Big Data</em> y las plataformas en la nube pueden acceder a esos datos para generar información relevante y útil para los consumidores.
          br
          br
          |Para lo anterior se necesita una arquitectura global IoT que se compone de los siguientes componentes, trabajando conjuntamente:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Cosas" :icono="require('@/assets/curso/18.svg')")
        .row
          .col-md-3
            figure
              img(src='@/assets/curso/11.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h4 Cosas 
            p IoT inicia con sensores conectados a las cosas para recolectar los datos y actuadores para realizar acciones correspondientes  a los comandos recibidos desde la nube.
      .py-4.py-md-5(titulo="Gateway " :icono="require('@/assets/curso/19.svg')")
        .row
          .col-md-3
            figure
              img(src='@/assets/curso/12.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h4 <em>Gateway</em> 
            p Es usado para filtrado, preprocesamiento y comunicación con la nube y viceversa. 
      .py-4.py-md-5(titulo="Cloud Gateway" :icono="require('@/assets/curso/20.svg')")
        .row
          .col-md-3
            figure
              img(src='@/assets/curso/13.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h4 <em>Cloud Gateway</em>
            p Se usa para transmitir datos entre otros <em>gateway</em> y los servidores centrales IoT 
      .py-4.py-md-5(titulo="Data Lake" :icono="require('@/assets/curso/21.svg')")
        .row
          .col-md-3
            figure
              img(src='@/assets/curso/14.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h4 <em>Data Lake</em>
            p Repositorio de almacenamiento que contiene datos en bruto. 
      .py-4.py-md-5(titulo="<em>Big data Warehouse</em> " :icono="require('@/assets/curso/22.svg')")
        .row
          .col-md-3
            figure
              img(src='@/assets/curso/15.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h4 <em>Big data Warehouse</em>
            p Se usa para recopilar datos valiosos. 
      .py-4.py-md-5(titulo="Aplicaciones de control" :icono="require('@/assets/curso/23.svg')")
        .row
          .col-md-3
            figure
              img(src='@/assets/curso/16.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h4 Aplicaciones de control
            p Se emplea para enviar datos a los actuadores. 
      .py-4.py-md-5(titulo="Aplicaciones de usuario" :icono="require('@/assets/curso/24.svg')")
        .row
          .col-md-3
            figure
              img(src='@/assets/curso/17.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0
            h4 Aplicaciones de usuario
            p Habilita a los usuarios el monitoreo de los datos y toma de decisiones sobre el control de dispositivos conectados.
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Protocolos de conexión  
    p.mb-5 A continuación, se estudiarán los diferentes protocolos de conexión.
    h3 Modelo OSI 
    p.mb-5 El modelo de interconexión de sistemas abiertos (OSI, por sus siglas en inglés), es un modelo de red creado por la ISO (Organización Internacional de Normalización) y se compone de siete capas:
    TabsA.color-acento-botones.mb-5
      .tarjeta.bg-amarillo--claro.p-4(titulo="7. Aplicación")
        h4 Aplicación
        p Esta es la capa que los usuarios ven y sirve de interfaz entre las aplicaciones donde generamos los datos y el resto de la red. Los datos a transmitir son generados por una aplicación. No nos referimos a las aplicaciones mismas, sino a los procesos que funcionan a nivel de <em>software</em> en nuestro aplicativo; por ejemplo: enviar un mensaje con WhatsApp, ver un video, enviar un correo, Twitter, navegador <em>web</em>.
      .tarjeta.bg-amarillo--claro.p-4(titulo="6. Presentación")
        h4 Presentación
        p Se encarga de traducir el formato que deseamos ver e implementa mecanismos de codificación como ASCII o Unicode para representar los datos a un formato que las computadoras entienden, se traduce lenguaje de alto nivel a lenguaje binario. Por ejemplo: si queremos ver una imagen, esta capa se encarga de dicha acción.
      .tarjeta.bg-amarillo--claro.p-4(titulo="5. Sesión")
        h4 Sesión
        p Maneja la conversación entre dos equipos (<em>hosts</em>) y establece el camino para las aplicaciones que se van a comunicar entre el dispositivo emisor y el receptor; el diálogo de establecer mantener y cerrar se llama sesión.
      .tarjeta.bg-amarillo--claro.p-4(titulo="4. Transporte")
        h4 Transporte
        p Segmenta los datos en paquete, se hace en el dispositivo emisor y el dispositivo receptor hace todo lo contrario; a este al proceso se le conoce como segmentación y reensamblaje. Los datos son particionados, puesto que las redes tienen anchos de banda limitados.
      .tarjeta.bg-amarillo--claro.p-4(titulo="3. Red")
        h4 Red
        p Una de las capas más importantes es la capa 3, pues determina la mejor ruta para que un mensaje llegue a otro dispositivo. Es una capa de direccionamiento y enrutamiento que no toca el contenido de los datos, sino que les agrega a dicho contenido direcciones IP origen e IP destino; cada dispositivo en el mundo tiene una dirección.
          br
          br
          |En esta capa también se hace enrutamiento, para ello se usan los routers.
      .tarjeta.bg-amarillo--claro.p-4(titulo="2. Enlace de datos")
        h4 Enlace de datos
        p Toma toda la información y la traduce en información binaria, además, se divide en dos subcapas:
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | LLC (<em>Logic Link Control</em>) , MAC (<em>Media Access Control</em>). 
          li 
            i.fas.fa-circle
            | LLC comunica el <em>software</em> de la red con el <em>hardware</em> de la misma por medio de <em>drivers</em> de tarjeta de red, una vez se realiza la comunicación se envían los datos a la MAC (se agrega un direccionamiento físico), la IP indica en qué red en el mundo se encuentra el dispositivo y la dirección MAC dice cuál es el dispositivo de la red.
      .tarjeta.bg-amarillo--claro.p-4(titulo="1. Física")
        h4 Física
        p Envía la información de la capa de enlace de datos. Como los datos no pueden viajar como números o código binario, estos son codificados en señales (eléctricas, lumínicas o de ondas) dependiendo del tipo de medio de comunicación que conecte a nuestro dispositivo emisor o receptor. El trabajo de codificación lo realiza la tarjeta de red o NIC. Los datos pueden viajar por cables de cobre, fibra óptica o por el espacio como un tipo de onda, usando redes inalámbricas como el <em>wifi</em>.
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Protocolos de comunicación MQTT
    p.mb-5 Es un protocolo simple para la transmisión de mensajes cortos de telemetría y control, desde o hacia una red de sensores / actuadores, es un protocolo de comunicación de máquina a máquina, <em>machine to machine</em> o M2M; este protocolo se localiza en las capas superiores del modelo OSI. 
      br
      br
      |Existe un estándar MQTT a cargo del organismo OASIS que actualmente cuenta con la versión 5 del 7 de marzo de 2019; el protocolo MQTT se basa en el modelo de comunicación productor - consumidor.
    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Protocolo MQTT
    .row.justify-content-center.mb-5.p-5
      .col-lg-10: img(src='@/assets/curso/5.svg')
    p.mb-5 La estrategia comunicativa se basa en la publicación de mensajes específicos (<em>topics</em>) y la suscripción a esos mensajes. Estos mensajes son una trama de datos con un <em>payload</em> que contiene la información real para el servidor o para el resto de nodos. En una red de sensores esta información contiene valores medidos por los sensores, tales como temperatura, humedad, estado, etc.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El <em>broker</em> es el encargado de saber quién está en la red, qué mensajes puede enviar y envía mensajes de un lado a otro.
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-5.p-5(data-aos="fade-right"): img(src="@/assets/curso/7.jpg")
      .col-lg-7.p-5(data-aos="fade-left")
        p Cuando existe una aplicación o un nodo que publicará un mensaje, no se necesita saber nada acerca del nodo que recibirá y consumirá el mensaje. Con el protocolo MQTT la única dirección y puerto que se necesitan conocer es la del <em>broker</em> de mensajes.
          br
          br
          |<b>Quien publica y quien recibe no necesitan estar conectados a la vez, porque el <em>broker</em> tiene la capacidad de almacenar mensajes</b>, aunque en la mayoría de los casos los mensajes se consumen en tiempo real, generalmente sucede con clientes que no están sincrónicamente conectados. 
          br
          br
          |En resumen, <b>el protocolo MQTT se basa en que alguien publica un mensaje con el identificador de un <em>topic </em>específico</b> , el <em>broker</em> distribuye el mensaje a todos los clientes (aplicaciones o dispositivos) que están suscritos a ese <em>topic</em> y esos clientes reciben y consumen los datos de esos mensajes.
          br
          br
          |MQTT se usa actualmente en autos, casas y ciudades inteligentes, así como en fábricas, productos de consumo, etcétera.
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          h5.text-center En conclusión, se puede desarrollar una aplicación que envía información, sin necesidad de saber qué usuario o aplicación la va a utilizar. 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Computación en la nube
    p.mb-5 La computación en la nube o <em>cloud computing</em> son tecnologías que ofrecen servicios mediante conexión a internet desde cualquier punto y en cualquier momento. Presentan características únicas al servicio del internet de las cosas, ofreciendo recolección, almacenamiento y gestión de los datos recogidos por los dispositivos, además de alta disponibilidad. 
      br
      br
      |La computación en la nube ofrece tres posibilidades en cuanto a modelos de servicio, a saber:
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/8.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h3.mb-1 SaaS 
              p (<em>Software</em> como un servicio)
              p Aplicaciones que se ejecutan en la nube, en este caso para el usuario es invisible la infraestructura de red, almacenamiento, servidores, sistemas operativos y la nube asegura correcto funcionamiento del aplicativo. Ejemplos de este modelo son Google Docs, Gmail, Dropbox.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/9.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h3.mb-1 PaaS
              p (Plataforma como un servicio)
              p En este caso la nube alberga todo lo necesario para construir y entregar aplicaciones basadas en la nube, en este caso el usuario puede controlar la aplicación, pero no puede administrar la infraestructura subyacente de la nube. Ejemplos de este modelo son Openshift y Google App Engine.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style="height: 476px;")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/10.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h3.mb-1 IaaS 
              p (Infraestructura como un servicio)
              p En este modelo se proporciona a las empresas servidores, almacenamiento, redes y centros de datos listos para su uso; el proveedor se encarga de la comunicación, el procesamiento o el almacenamiento.
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Pasarelas de <em>cloud</em> para IoT
    p.mb-5 Debido a la necesidad de gestionar de forma ágil y eficiente la alta cantidad de datos que generan los dispositivos IoT, han nacido plataformas de computación en la nube orientadas a IoT. Ahora se ampliará la información al respecto.
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta ")
      .row(titulo="Kaa Iot")
        .col-md-3
          figure
            img(src='@/assets/curso/25.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p Plataforma multipropósito, flexible de código abierto y lista para producción y establecer soluciones de IoT de extremo a extremo, aplicaciones conectadas y dispositivos inteligentes, ofrece control y supervisión de dispositivos en tiempo real, recopila y analiza datos de sensores, gestiona cantidad infinita de dispositivos en tiempo real, admite uso de protocolos abiertos como MQTT y CoAP.
      .row(titulo="OpenIoT")
        .col-md-3
          figure
            img(src='@/assets/curso/26.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p Plataforma <em>middleware</em> de código abierto que unifica IoT con los servicios de computación en la nube, proporciona servicios de registro, implementación y descubrimiento de sensores, monitoreo de dispositivos, visualización de información, desarrollo de aplicaciones sencillas.
      .row(titulo="ThingSpeak")
        .col-md-3
          figure
            img(src='@/assets/curso/27.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p Plataforma de código abierto que permite captura de datos de sensores, almacenamiento en la nube, visualización y análisis de los mismos, con los datos recogidos crea alertas y se comunica a través de servicios de la red, como Twitter, correo, etc.
      .row(titulo="AWS IoT")
        .col-md-3
          figure
            img(src='@/assets/curso/28.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p Servicio no <em>opensource</em> para IoT de Amazon, proporciona <em>gateway</em> de dispositivos, agente de mensajes MQTT, y ofrece servicios de seguridad e identidad, registro de dispositivos.
      .row(titulo="AZURE IoT")
        .col-md-3
          figure
            img(src='@/assets/curso/29.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p Plataforma creada por Microsoft que ofrece a los usuarios la creación de soluciones IoT acordes con sus necesidades.
      .row(titulo="Google Cloud IoT")
        .col-md-3
          figure
            img(src='@/assets/curso/30.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p Ofrece herramientas que posibilitan la conexión de dispositivos como procesamiento, almacenamiento y análisis de datos en la nube.
    h3 IoT en la nube
    p.mb-5 A continuación, se implementará un modelo basado en cuatro capas donde se pueden observar cuatro componentes principales. 
    CardClick(:cards='cards').mb-5
    
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Adquisición de datos en la nube
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-5.p-5(data-aos="fade-right"): img(src="@/assets/curso/20.jpg")
      .col-lg-7.p-5(data-aos="fade-left")
        p Para el objetivo final de los datos recogidos provenientes de la capa de percepción (sensores y otros dispositivos), es necesario describir patrones y correlaciones en tiempo real para impactar en forma positiva a las empresas en su toma de decisiones, como, por ejemplo, la analítica de datos en IoT puede controlar la producción, la temperatura en procesos industriales, monitorear la salud de los pacientes, etcétera.
          br
          br
          |Aquí entra el concepto del <em>Big Data</em> que, según el Instituto Nacional de Estándares y Tecnologías (NIST), consiste de un extenso conjunto de datos principalmente con características de volumen, variedad, velocidad y variabilidad que requieren una arquitectura escalable para un almacenamiento, manipulación y análisis eficientes.
          br
          br
          |Según la Unión Internacional de Telecomunicaciones (ITU-T), el <em>Big Data</em> es un paradigma para habilitar la colección, almacenamiento, gestión, análisis y visualización –potencialmente con limitaciones de tiempo real–, de un extenso conjunto de datos con características heterogéneas. 
          br
          br
          | Las características principales que definen el <em>Big Data</em> son volumen, velocidad y variedad. Otros autores agregan dos características más que son veracidad y valor. 
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/31.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-3(x="20%" y="20%" numero="")
        .h5.mb-2 Velocidad 
        p Implica que los datos son generados con muy alta frecuencia y cambian constantemente, en el caso de IoT las medidas captadas por los sensores se realizan con mucha frecuencia.
      .tarjeta.color-acento-contenido.p-3(x="75%" y="20%" numero="")
        .h5.mb-2 Variedad 
        p Indica los diferentes tipos de datos recolectados, pueden ser texto, imágenes, videos, audios o logs, estructurados o no estructurados, los datos de IoT pueden ser almacenados en formatos JSON.
      .tarjeta.color-acento-contenido.p-3(x="20%" y="50%" numero="")
        .h5.mb-2 Veracidad
        p Indica el grado de fiabilidad de la información, es clave hacer un filtrado con la tecnología del <em>Big Data</em> de lo que puede ser falso o no.
      .tarjeta.color-acento-contenido.p-3(x="60%" y="47%" numero="")
        .h5.mb-2 Volumen 
        p Indica la gran cantidad de datos recolectada de diferentes fuentes de datos, esta cantidad de datos se mide en <em>terabytes</em>(tb), <em>petabytes</em> (PB), incluso a los EB, en el caso de IoT provienen de sensores y dispositivos inteligentes.
      .tarjeta.color-acento-contenido.p-3(x="70%" y="70%" numero="")
        .h5.mb-2 Valor
        p Hace referencia a la información útil de verdad que se puede extraer de los datos. Esa misma ayudará a las empresas  a generar un valor agregado para tu negocio, que se convierte en conocimiento y en una acción o decisión. 
    p.mb-5 Para soportar los modelos de datos, se han desarrollado varias plataformas del <b><em>Big Data</em> como <em>Hadoop, Apache Spark, Apache Flinkm, Apache Storm</em></b>.
      br
      br
      |El objetivo del <em>Big Data</em> es extraer la mayor cantidad de valor, información o conocimiento de los grandes volúmenes de datos para lograr conclusiones acertadas y mejorar la toma de decisiones. El proceso de análisis de datos está compuesto por una extracción, limpieza, transformación, modelado y visualización de los datos. 
    .titulo-sexto.color-acento-contenido
      h5 Figura 2
      span Proceso del <em>Big Data</em>
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-11: img(src='@/assets/curso/32.svg')
</template>

<script>
import Muestras from '../components/Muestras'
import CardClick from '../components/card-click'
export default {
  name: 'Tema1',
  components: {
    Muestras,
    CardClick,
  },
  data: () => ({
    isActive: false,
    indicadorTarjetaFlip: true,
    cards: [
      {
        titulo: 'Nodo cliente',
        texto:
          'Es la capa de percepción que permite obtener o enviar datos al mundo físico o virtual mediante sensores o actuadores, sensores como temperatura, humedad, estado de un dispositivo, sensores lumínicos, etc.',
        img: require('@/assets/curso/card1.svg'),
        class: 'bg-card__1',
        classText: 'bg__1',
      },
      {
        titulo: 'Broker MQTT',
        texto:
          'Es un elemento  primordial para realizar el envío de los datos entre los clientes, debe estar en constante funcionamiento y ser visible a red externa. <br><br>Entre muchos <em>brokers</em> públicos existen dos bastante usados y disponibles:<br><br> <b>Mosquito Broker:</b> servicio gratuito destinado a la realización de pruebas.<br><br> <b>Cloud MQTT:</b> servicio de pago y asegura disponibilidad del servicio.',
        img: require('@/assets/curso/card2.svg'),
        class: 'bg-card__2',
        classText: 'bg__2',
      },
      {
        titulo: 'Nodo servidor',
        texto:
          'Este nodo cuenta  con funciones de servidor <em>web</em> y base de datos y como cliente MQTT suscrito a los topics de interés y almacena información en la base de datos.',
        img: require('@/assets/curso/card3.svg'),
        class: 'bg-card__3',
        classText: 'bg__3',
      },
      {
        titulo: 'Usuarios finales',
        texto:
          'Cualquier usuario del servicio que disponga de un terminal con acceso a internet podrá acceder a la aplicación <em>web</em> y visualizar la información proveniente de los sensores de manera sencilla.',
        img: require('@/assets/curso/card4.svg'),
        class: 'bg-card__4',
        classText: 'bg__4',
      },
    ],
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarTexto() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="sass">
.bg-amarillo--claro
  background-color: #FFF7DF
.lista-ul--color li > i:first-of-type
  color: #01D1DD
.bloque-texto-g.color-secundario
  background-color: #1B4733
.bloque-texto-g__img
  width: 65%
.tarjeta-flip__contenido
  h3,p
    color: $color-sistema-texto !important
.acordion__activo
  background-color: #E1CEF0
.tabs-b__tab
  background-color: #E0F1F2
.tabs-a__tab
  background-color: #DCDCDC
</style>
