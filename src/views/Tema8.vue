<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Componentes de #[em software]

    p.mb-5 Los sistemas de información se componen de diversos elementos que, operando conjuntamente bajo premisas definidas, logran el objetivo de mantener en operación dichos sistemas. A continuación, se detallan algunos de estos elementos esenciales para garantizar la continuidad del funcionamiento del sistema.

    .row 
      .col-lg-8.mb-5
        .cont-titulo-decorativo.p-2.mb-5
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Licenciamiento
        
        p.mb-4 Una aceptación inequívoca de este contrato se realiza cuando se descarga e instala el #[em software] a través del medio oficial de distribución del producto. Es decir, aunque no se firme un documento de manera explícita, las acciones descritas en el contrato (generalmente: descarga, instalación, configuración) que implican la aceptación de las condiciones, son consideradas legalmente como equivalentes a la firma de un contrato de licencia.
      .col-lg-4.mb-5.mb-lg-0
        figure
          img.mx-auto(src="@/assets/curso/temas/100.svg",style="max-width: 400px;")

    .row.mt-lg-n5.mb-5
      .col-12
        .cont-titulo-decorativo.p-2.mb-5
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Tipos de licencia de #[em software]
      
        p.mb-0 En Colombia, la normativa que regula las licencias de software está contenida en la Ley 603 de 2000, conocida como la ley de licencias de software o Ley para el cumplimiento de las licencias de software. Las licencias se clasifican según el uso final y las libertades que el autor concede sobre su producto al usuario final. Por lo tanto, es crucial conocer los tipos de licenciamiento:
    
    ImagenInfografica.color-acento-botones.imagen-infografica-personalizada-1.mb-5(data-aos="zoom-in-out")
      template(v-slot:imagen)
        figure
          img.mx-auto(src="@/assets/curso/temas/101.svg",style="max-width: 1100px;")

      .tarjeta.fondo-color-sistema-m.p-3.borde-9(x="66%" y="4%" numero="+")
        .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") #[em Software] propietario
        p También llamado "#[em software] de código cerrado", es aquel en el que el autor no transmite ninguno de los derechos de ejecución, copia, modificación, cesión o redistribución al comprador, sino que solo establece las condiciones bajo las cuales el usuario puede utilizar el programa.
      .tarjeta.fondo-color-sistema-m.p-3.borde-9(x="20%" y="5%" numero="+")
        .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") #[em Shareware]
        p Consiste en la distribución de una versión gratuita y limitada en sus funciones respecto de la aplicación que es de pago. Con esta licencia, se le permite al usuario su uso por un tiempo y funciones delimitadas, pero cuando el tiempo finaliza, el usuario deberá pagar o desinstalar el programa.
      .tarjeta.fondo-color-sistema-m.p-3.borde-9(x="7%" y="55%" numero="+")
        .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") #[em Freeware]
        p Este tipo de licencia permite la instalación y uso gratuito de la aplicación y todos sus componentes sin que requiera alguna suscripción; hacer el registro es opcional pero no tiene costo o pago, sin embargo, el código fuente se mantiene limitado.
      .tarjeta.fondo-color-sistema-m.p-3.borde-9(x="43%" y="88%" numero="+")
        .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") #[em OEM (Original Equipment Manufacturer)]
        p Esta licencia tiene la condición de que el programa debe instalarse en un equipo nuevo, por lo que generalmente aplica a los sistemas operativos.
      .tarjeta.fondo-color-sistema-m.p-3.borde-9(x="78%" y="53%" numero="+")
        .h5.mb-4.fondo-color-primario.text-white.p-2.d-inline-block(style="min-width: 212px;") Licencia corporativa por volumen
        p La licencia que las empresas suelen adquirir establece un número específico de dispositivos, en los cuales el programa puede ser instalado y utilizado dentro de la misma organización.

    p.mb-0 El incumplimiento del uso de #[em software] no licenciado puede acarrear sanciones administrativas de hasta 200 salarios mínimos legales mensuales vigentes (200 SMMLV) para todos los administradores de la empresa, según lo estipulado por la Superintendencia de Sociedades.

    Separador

    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Seguridad

    .fondo-personalizado-4.pos-3
      .fondo-personalizado-4__contenido.pb-5
        .row.mb-4
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 La seguridad de las aplicaciones se refiere a las medidas implementadas a nivel de aplicación, incluida la codificación, cuyo objetivo es prevenir el acceso no autorizado, así como el robo o secuestro de datos o códigos dentro de la aplicación. Esto abarca las consideraciones de seguridad que se deben tener en cuenta durante el desarrollo y diseño de aplicaciones, además de los sistemas y técnicas empleados para proteger las aplicaciones una vez distribuidas.
            .fondo-color-sistema-k.p-4.borde-13
              .row.align-items-center
                .col-md-auto
                  .d-flex
                    .burbuja-1.fondo-color-acento-contenido.mx-auto.mb-4.mb-md-0
                      figure
                        img.mx-auto(src="@/assets/curso/temas/102.svg",style="max-width: 81px;")
                .col 
                  p.mb-0 Para asegurar las aplicaciones, es fundamental incluir medidas en el #[em hardware], #[em software] y procedimientos que minimicen las vulnerabilidades de seguridad. La estrategia de publicación de servicios de información requiere el uso de un conjunto de protocolos o procedimientos, y para garantizar la seguridad, es esencial realizar pruebas pertinentes.
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/103.png",style="max-width: 400px;")

        .fondo-color-sistema-r.p-4.borde-24.mb-5
          .row.align-items-center
            .col-md-auto 
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/104.svg",style="max-width: 58px;")
            .col 
              p.mb-0 La seguridad de las aplicaciones implica desarrollar, incorporar y probar características de seguridad destinadas a proteger las aplicaciones de amenazas, como la modificación y el acceso no autorizados. Es crucial asegurar esto, ya que las aplicaciones modernas suelen estar disponibles a través de múltiples redes y conectadas a la nube, lo que incrementa las vulnerabilidades a las que están expuestas.
    
    TabsA.tab-a-personalizado-1.color-acento-botones.mb-5
      .tarjeta.fondo-color-sistema-n.borde-10.p-5(titulo="Autenticación")
        h4.mb-5 Autenticación 
        p Procedimientos casi indispensables en el desarrollo de una aplicación para asegurar que solo accedan los usuarios autorizados. Esto comúnmente se logra mediante un nombre de usuario y contraseña, pero también puede incluir métodos adicionales como huellas dactilares, reconocimiento facial o de voz, conocido como autenticación de múltiples factores.
      .tarjeta.fondo-color-sistema-n.borde-10.p-5(titulo="Autorización")
        h4.mb-5 Autorización 
        p Una vez autenticado el usuario, es crucial validar que tenga los permisos necesarios para acceder a la aplicación o sus componentes. La autorización se verifica después de la autenticación.
      .tarjeta.fondo-color-sistema-n.borde-10.p-5(titulo="Cifrado")
        h4.mb-5 Cifrado 
        p Técnica que transforma la información para su transmisión de tal manera que solo el emisor y el receptor puedan descifrar el contenido real de los datos, siendo una práctica común en sistemas que utilizan Internet para la transferencia de datos.
      .tarjeta.fondo-color-sistema-n.borde-10.p-5(titulo="Registro de incidencias")
        h4.mb-5 Registro de incidencias 
        p En caso de vulneraciones de seguridad, el registro puede ayudar a identificar quién ha accedido a los datos, cómo y cuándo. Se deben utilizar archivos de registro con toda la información relacionada para facilitar esta tarea.
    
    p.mb-5 En conclusión, los tipos básicos de seguridad de la aplicación son la autenticación, el cifrado y el registro de incidencias. Sin embargo, según el contexto del funcionamiento de la aplicación, se deben considerar otros aspectos relevantes.

    .row 
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/105.png",style="max-width: 400px;")
      .col-lg-8
        AcordionA.acordion-personalizado-1.mb-5(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="Seguridad de las aplicaciones en la nube")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Las aplicaciones móviles y las aplicaciones web que requieren servicios en la nube enfrentan desafíos adicionales propios del entorno, como el hecho de que los recursos muchas veces son compartidos. Existen dispositivos a nivel de infraestructura, como los identificadores de intrusos y los cortafuegos, cuya finalidad es identificar usos no autorizados de los recursos de red utilizados por las aplicaciones en la nube.
          div.ms-md-5(titulo="Seguridad de las aplicaciones móviles")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Los dispositivos móviles generalmente transmiten y reciben información de la red pública de internet, haciéndolos vulnerables a ataques. Existen técnicas como el establecimiento de una Red Privada Virtual (VPN, #[em Virtual Private Network]), que consiste en cifrar los protocolos de comunicación y todo el contenido que pasa a través de ellos, creando así una red privada sobre una red pública. 
          div.ms-md-5(titulo="Controles de seguridad de las aplicaciones")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Los controles de seguridad son técnicas que mejoran la seguridad de una aplicación a nivel de codificación para hacerla menos vulnerable a las amenazas. Estas técnicas de desarrollo a menudo establecen lineamientos específicos. Por ejemplo, al trabajar con Android Studio, la metodología de trabajo obliga a cumplir con ciertos principios de codificación para mejorar la seguridad de las aplicaciones móviles frente a intrusiones.
          div.ms-md-5(titulo="Pruebas de seguridad de las aplicaciones")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Es indispensable realizar pruebas de seguridad en las aplicaciones durante el proceso de desarrollo de #[em software] para garantizar que no existan vulnerabilidades en cada versión antes de ser liberada al público.
    
    Separador

    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2 #[em API Firebase]
    
    .row.mb-5
      .col-lg-8
        p.mb-0 Las organizaciones están adoptando modelos de arquitectura de #[em software] basados en microservicios. Un microservicio es un servicio pequeño destinado a una función específica, y para realizar procesos más complejos, se coordinan múltiples microservicios. Esto permite que el mismo servicio, aunque publicado en internet, no sea para usuarios finales sino para su uso por aplicaciones. De esta manera, una aplicación móvil puede utilizar ese servicio de la misma forma que una aplicación web o un #[em chatbot].
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/106.png",style="max-width: 400px;")
    
    .row.justify-content-center 
      .col-lg-10
        PasosA.pasos-personalizado-a-1.color-primario.mb-5(tipo="n")
          .row.align-items-end
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-4 Definición de #[em API]
              p Imaginemos que una empresa necesita que sus clientes registren solicitudes a través de una página web, una aplicación móvil y un #[em chatbot]. La principal ventaja de los microservicios es que, si se desea cambiar una regla de negocio, como aplicar ciertos descuentos, no es necesario modificar los tres sistemas, sino solo los microservicios involucrados. Estos se publican mediante una API (Interfaz de Programación de Aplicaciones), que es un conjunto de subrutinas, funciones y procedimientos que se ofrecen para ser utilizados por otro #[em software], actuando como una capa de abstracción que oculta los detalles de codificación.
            .col-lg-5
              figure
                img.mx-auto(src='@/assets/curso/temas/107.png',style="max-width: 295px;")
          .row.align-items-end
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src='@/assets/curso/temas/108.png',style="max-width: 287px;")
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-4.text-start #[em Firebase]
              p.text-start Es una plataforma en la nube de Google para el desarrollo de aplicaciones web y móviles, creada en 2011 y adquirida por Google en 2014. Su principal función es facilitar la creación de aplicaciones web y móviles, proporcionando herramientas que agilizan el desarrollo sin sacrificar calidad ni seguridad. Para utilizar los servicios de Firebase, es necesario consumir la API proporcionada por Google.

    .fondo-personalizado-10.mb-5
      .fondo-personalizado-10__contenido.pt-5.pb-4
        .row.pt-5.align-items-center
          .col-lg-8
            p.mb-0 La herramienta principal de #[em Firebase] son las bases de datos en tiempo real, alojadas en la nube y de tipo NoSQL en formato JSON. Este servicio permite alojar y gestionar datos de la aplicación en tiempo real, manteniéndolos actualizados incluso si el usuario no realiza ninguna acción. #[em Firebase] también envía automáticamente eventos que activan funcionalidades de las aplicaciones cuando los datos cambian, lo que facilita el desarrollo de aplicaciones con funcionalidades en tiempo real.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/110.svg",style="max-width: 400px;")

    .row.mb-5
      .col-auto.d-none.d-lg-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 100px;")
      .col
        p.mb-0 En cuanto a seguridad, #[em Firebase] ofrece un sistema de autenticación que permite tanto el inicio de sesión mediante correo electrónico y contraseña, como el acceso utilizando perfiles de otros sistemas externos, generalmente redes sociales.
    
    .p-4.fondo-personalizado-6.borde-11.mb-5(data-aos="flip-up")
      .row
        .col-auto(style="margin: auto;")
          .burbuja-1.fondo-color-acento-contenido.mx-auto
            figure
              img.mx-auto(src="@/assets/curso/temas/111.svg",style="max-width: 47px;")
        .col-lg.mb-4.mb-md-0.col-md-6
          h4.color-acento-contenido Creación de una base de datos en #[em Firebase]
          p.mb-0.text-white El proceso básico para crear una base de datos en #[em Firebase], se presenta en el siguiente Anexo. 
        .col-md-auto.text-center(style="place-self:center;")
          a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_Creacion_de_una_base_de_datos_en_Firebase.docx')" target="_blank")
            span(style="color:initial;") Descargar
            i.fas.fa-file-download(style="color:initial;")

    .fondo-color-sistema-r.p-4.borde-24.mb-4
      .row.align-items-center
        .col-md-auto 
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/104.svg",style="max-width: 58px;")
        .col 
          p.mb-0 Uno de los principales inconvenientes de #[em Firebase] podría ser la necesidad de realizar pagos, ya que no todas sus funcionalidades son gratuitas y la versión sin costo limita el número de usuarios. Sin embargo, para proyectos en sus primeras etapas, la versión gratuita de #[em Firebase] suele ser más que suficiente.
    
    Separador

    #t_8_3.titulo-segundo.color-acento-contenido.mb-lg-0
      h2 8.3 Herramientas

    .row.align-items-center
      .col-lg-9
        p.mb-0 Durante el desarrollo de proyectos que emplean microservicios, las pruebas de #[em API] son esenciales para garantizar la ejecución, funcionalidad, confiabilidad y seguridad de la aplicación, tanto en la fase de desarrollo como en la de consumo de la #[em API]. A continuación, se presentan varias herramientas de libre distribución que facilitan el proceso de prueba y diseño de #[em APIS] publicadas a través de los diferentes protocolos web.
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/112.svg",style="max-width: 292px;")
    
    p(style="color: red;") impornatnteee

    .fondo-color-sistema-r.p-4.borde-24.mb-4
      .row.align-items-center
        .col-md-auto 
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/104.svg",style="max-width: 58px;")
        .col 
          p.mb-0 Se puede concluir que existe una amplia variedad de herramientas disponibles para todas las fases de desarrollo e implementación de aplicaciones web y móviles. Estas herramientas ofrecen diversos tipos de licenciamiento, y muchas de ellas son de libre distribución, lo que permite iniciar un proyecto sin incurrir en costos iniciales significativos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
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
}
</script>

<style lang="sass"></style>
