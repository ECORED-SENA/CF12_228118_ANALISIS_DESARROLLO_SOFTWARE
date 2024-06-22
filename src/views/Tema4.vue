<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Construcción de la estructura del #[em front-end]
    
    .row.align-items-end.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-0 Para el desarrollo de la estructura del #[em front-end], que en el ámbito de este componente formativo se limita exclusivamente a las tecnologías de HTML5 y CSS3, se utilizará el #[em framework] de maquetación llamado Materialize. Este #[em framework] CSS permite crear sitios y aplicaciones web siguiendo los principios de #[em Material Design]. La versión estándar del #[em framework] incluye CSS y JavaScript, con los estilos CSS listos para usar.
        p.mb-4 Además, Materialize incorpora buenas prácticas para el desarrollo del #[em front-end], lo que contribuye a que la aplicación sea más eficiente y rápida en su despliegue. Por otra parte, es un #[em framework] #[em responsive], lo que significa que se adapta a cualquier tamaño de dispositivo.
        .borde-13.p-4.fondo-color-sistema-n
          p.mb-0 A continuación, se detallan los pasos para la instalación y manejo del #[em framework] (Materialize, 2021):
      .col-lg-5(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 525px;")
    
    .fondo-personalizado-5.pos-1
      .fondo-personalizado-5__contenido
        .borde-20.fondo-color-primario.px-4.py-2.d-inline-block.mb-5
          h4.mb-0.text-white.fw-bold A) Instalación de Materialize:
        
        .row.mb-5
          .col-lg-7
            p.mb-4(data-aos="fade-up") Existen varias formas de instalar el #[em framework]. En este caso, se utilizará la descarga de los archivos, disponible en el enlace proporcionado en la sección de material de apoyo con el nombre #[b "Descarga de archivos Materialize"].
            .fondo-color-sistema-o.p-4.borde-13(data-aos="fade-down")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 74px;")
                .col 
                  p.mb-0 Una vez descargada la carpeta, se encontrará una estructura de directorios muy similar a la guía que presenta Materialize en su página web.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade")
              img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 502px;",alt="Código de estructura de directorios de Materialize")
        
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Estructura de directorios de Materialize
            figure
              img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 610px;", alt="Código de estructura de directorios de Materialize.")

        .borde-20.fondo-color-primario.px-4.py-2.d-inline-block.mb-5.mt-5(data-aos="fade-right")
          h4.mb-0.text-white.fw-bold B) Proyecto de Materialize en Visual Studio Code
        
        p.mb-5(data-aos="fade-left") Ahora, lo siguiente que debe hacerse es incorporar o referenciar esa carpeta desde un entorno de desarrollo integrado. Para este ejemplo, se utilizará Visual Studio Code, como se presenta  a continuación:

        .row.justify-content-center.pb-4.mb-4(data-aos="fade")
          .col-lg-4.col-md-9
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Proyecto de Materialize en Visual Studio Code
            figure
              img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 399px;",alt="Imagen de la manera de incorporar o llamar a esa carpeta desde un entorno de desarrollo integrado en Visual Studio Code.")

    .borde-20.fondo-color-primario.px-4.py-2.d-inline-block.mb-4(data-aos="zoom-in-out")
      h4.mb-0.text-white.fw-bold C)	Configuración del proyecto
    
    .fondo-personalizado-5.pos-2
      .fondo-personalizado-5__contenido
        p.mb-5.pt-4(data-aos="fade-up") Siguiendo la guía proporcionada por el #[em framework], que puede consultarse en el enlace indicado en la sección de material de apoyo con el nombre "Guía rápida de Materialize", se crea un archivo llamado index.html en la raíz de la estructura de directorios. Este archivo contendrá la siguiente información, incluyendo las referencias a los archivos de estilos y JavaScript que proporcionan el funcionamiento y la apariencia a la interfaz desarrollada:

        .row.justify-content-center.mb-5(data-aos="zoom-in-out")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.] Archivo index.html de la guía de Materialize
            figure
              img.me-auto(src="@/assets/curso/temas/40.svg",style="max-width: 715px;",alt=" Vista de Archivo index.html de la guía de Materialize.")
        
        .borde-20.fondo-color-primario.px-4.py-2.d-inline-block.mb-5.mt-5(data-aos="fade")
          h4.mb-0.text-white.fw-bold D)	Desarrollo del proyecto (primera vista)
        
        p.mb-0(data-aos="fade-left") Hasta el momento, tanto el #[em framework] como el entorno para crear las vistas del caso de estudio están preparados en este componente formativo. Por lo tanto, es necesario referirse nuevamente a la primera vista diseñada para revisar los componentes necesarios para el desarrollo.
        p.mb-4 En la primera vista, se requiere lo siguiente:

        ul.lista-ul.lista-personalizada-1.mb-5(data-aos="fade-right")
          li
            i.fas.fa-code.color-sistema-l
            span Título.
          li
            i.fas.fa-code.color-sistema-l
            span Formulario que consta de dos cajas de texto y un botón.

        .row.justify-content-center.pt-5.mb-5
          .col-lg-8
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "section no-pad-bot"] id="index-banner"&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "container"]&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;&lt;br&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 #[span.col-color-sistema-t class]=#[span.color-acento-contenido "header center orange-text"]&gt;Publica tu Post&lt;/h1&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "row center"]&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 #[span.col-color-sistema-t class]=#[span.color-acento-contenido "header col s12 light"]&gt;Un ejemplo de maquetación
                  br
                  | utilizando el framework de Materialize&lt;/h5&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;&lt;br&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  br
                  | &bull;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;

        .row.mb-5.pt-5
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-up")
            p.mb-4 Para esta maquetación, es necesario dimensionar el #[em grid] o rejilla, lo cual ayuda a mantener el contenido de manera organizada y estructurada. Para lograrlo, se utiliza la clase #[em "container"], que centra el contenido de la página y ocupa aproximadamente el 70% del ancho de la ventana, lo que ayuda a centrar y contener el contenido de la página.
            .fondo-color-sistema-o.p-4.borde-13
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 74px;")
                .col 
                  p.mb-0 Además, en el código se muestra el uso de colores. Por ejemplo, el título de la página utiliza el atributo #[em "orange-text"], que proporciona el color naranja al texto "Publica tu #[em Post]", como se presenta a continuación:
          .col-lg-5(data-aos="fade-down")
            figure
              img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 502px;")
    
    .fondo-personalizado-5.pos-4
      .fondo-personalizado-5__contenido
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-5
              p.mb-0 #[b Figura 6.] Publica tu #[em post]
            figure
              img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 610px;",alt="Un ejemplo de maquetación utilizando framework de Materialize.")

        p.mb-5(data-aos="zoom-in-out") Ahora continúa el desarrollo del formulario, el cual consta de dos (2) inputs: uno destinado al título del #[em post] y otro al área de texto, tal como se presenta a continuación:

        .row.justify-content-center.pt-5.mb-5.pb-5
          .col-lg-6
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.ps-5
                code
                  | &lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "row"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "container"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form #[span.col-color-sistema-t class]=#[span.color-acento-contenido "col s12"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "row"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "input-field col offset-s4 s4"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input #[span.col-color-sistema-t placeholder]=#[span.color-acento-contenido "Título del Post"] #[span.col-color-sistema-t id]=#[span.color-acento-contenido "tituloPost"]
                  br
                  | #[span.col-color-sistema-t type]=#[span.color-acento-contenido "text"] #[span.col-color-sistema-t class]=#[span.color-acento-contenido "validate"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label #[span.col-color-sistema-t for]=#[span.color-acento-contenido "tituloPost"]&gt;Título del Post&lt;/label&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "row"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "input-field col offset-s4 s4"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea #[span.col-color-sistema-t placeholder]=#[span.color-acento-contenido "Título del Post"] #[span.col-color-sistema-t id]=#[span.color-acento-contenido "textarea1"]
                  br
                  | #[span.col-color-sistema-t class]=#[span.color-acento-contenido "materialize-textarea"]&gt;&lt;/textarea&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label #[span.col-color-sistema-t for]=#[span.color-acento-contenido "textarea1"]&gt;Contenido del Post&lt;/label&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button #[span.col-color-sistema-t class]=#[span.color-acento-contenido "btn waves-effect waves-light col offset-s4]
                  br
                  | #[span.color-acento-contenido s4"] #[span.col-color-sistema-t type]=#[span.color-acento-contenido "submit"] #[span.col-color-sistema-t name]=#[span.color-acento-contenido "action"]&gt;Enviar
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i #[span.col-color-sistema-t class]=#[span.color-acento-contenido "material-icons right"]&gt;send&lt;/i&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  br
                  | &lt;/div&gt;
              

        .borde-20.fondo-color-primario.px-4.py-2.d-inline-block.mb-5
          h4.mb-0.text-white.fw-bold(data-aos="fade") E) Resultado de la primera vista
        
        .row.mb-5
          .col-lg-7(data-aos="fade-right")
            p.mb-0 Como se puede observar en el código, se sigue utilizando la estructura tradicional de un formulario en HTML. Lo que varía son los atributos de las clases que se utilizan para centrar los #[em inputs] o mejorar la apariencia de cada objeto de interacción. Por ejemplo, el atributo "col offset-s4 s4" se emplea en cada una de las etiquetas, lo que permite que cada componente del formulario se encuentre centrado.
          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 502px;")
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-6.col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Resultado de la primera vista
        figure
          img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 610px;",alt='Ejemplo gráfico del resultado de la primera vista, en cada componente del formulario para "centrarlo".')

    .borde-20.fondo-color-primario.px-4.py-2.d-inline-block.mb-5.mt-5(data-aos="fade-right")
      h4.mb-0.text-white.fw-bold F) Desarrollo de la segunda vista
    
    p.mb-1(data-aos="fade-left") Para esta parte se utiliza el concepto de listas en HTML, como se presenta en el siguiente código de HTML:

    .fondo-personalizado-5
      .fondo-personalizado-5__contenido.py-5(data-aos="zoom-in-out")
        .row.justify-content-center.pt-5.mb-5.pb-3
          .col-lg-5
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code
                  | &lt;div #[span.col-color-sistema-t class]=#[span.color-acento-contenido "container"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;ul #[span.col-color-sistema-t class]=#[span.color-acento-contenido "collection"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li #[span.col-color-sistema-t class]=#[span.color-acento-contenido "collection-item avatar"]&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i #[span.col-color-sistema-t class]=#[span.color-acento-contenido "material-icons circle"]&gt;face&lt;/i&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span #[span.col-color-sistema-t class]=#[span.color-acento-contenido "title"]&gt;Título del Post&lt;/span&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Este es un contenido para el primer Post de prueba
                  br
                  | &lt;br&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i&gt;Fecha de publicación: 1 junio de 2021&lt;/i&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a #[span.col-color-sistema-t href]=#[span.color-acento-contenido "#"] #[span.col-color-sistema-t class]=#[span.color-acento-contenido "secondary-content"]&gt;&lt;i #[span.col-color-sistema-t class]=#[span.color-acento-contenido "material-]
                  br
                  | #[span.color-acento-contenido icons"]&gt;grade&lt;/i&gt;&lt;/a&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;/ul&gt;
                  br
                  | &lt;/div&gt;


    
    .cont-titulo-decorativo.p-2.mb-5(data-aos="flip-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 G) Resultado de la segunda vista
    
    p.mb-5(data-aos="fade") En el código HTML anterior, se muestra la estructura estándar de una lista desordenada, con los únicos cambios relacionados con el uso de los atributos propios del #[em framework]. Por lo tanto, el resultado esperado se presenta en la siguiente figura:
    
    .row.justify-content-center(data-aos="zoom-in-out")
      .col-lg-6.col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 8.] Resultado de la segunda vista
        figure
          img.mx-auto(src="@/assets/curso/temas/46.svg",style="max-width: 610px;",alt="Ejemplo gráfico del resultado de la segunda vista, uso de los atributos que hacen parte de la naturaleza del framework.")



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
