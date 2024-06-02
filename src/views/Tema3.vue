<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estructura de la interfaz de la aplicación

    .row.align-items-end.mb-5
      .col-lg-7
        p.mb-0 La estructura de la interfaz de la aplicación está diseñada para ofrecer una experiencia de usuario óptima, combinando funcionalidad con estética visual. Cada elemento está pensado para garantizar una navegación intuitiva y accesible, desde los wireframes iniciales hasta los mockups finales que definen el aspecto y la operatividad del sistema.

        .cont-titulo-decorativo.p-2.mt-5
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Caso de estudio sobre el servicio de publicación de #[em posts]

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 505px;")

    .fondo-color-sistema-m.mx-n4.mx-md-n5
      .row.align-items-center
        .col-lg-auto
          figure
            img.mx-auto(src="@/assets/curso/temas/24.png")
        .col 
          p.mb-0.p-4.ps-lg-0.pe-lg-5 Cuando se inicia un nuevo proyecto de #[em software], es habitual realizar #[em sketches], bocetos o dibujos rápidos para obtener una visión preliminar de cómo será la interfaz gráfica del sistema. Este proceso es muy beneficioso para los equipos de desarrolladores y diseñadores, ya que les permite plasmar una visión concreta de lo que será el proyecto. Todo comienza con un boceto en papel. Durante esta etapa, se hacen cambios y correcciones, se descartan ideas y se generan otras mejores. Estos #[em sketches] se transforman gradualmente en el prototipo final del proyecto, finalmente evolucionando en #[em Mockups]. A este proceso se le conoce como #[em Wireframing], que consiste en crear la estructura de una interfaz gráfica.
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Instalación de Balsamiq
    
    .row.mb-5
      .col-lg-7
        p.mb-0 Una de las herramientas más efectivas para crear prototipos, bocetos o #[em wireframes] es Balsamiq #[em Mockups]. Para comenzar a utilizar Balsamiq, se optará por el modo de servicio en la nube (versión de prueba), disponible en: #[a.color-sistema-l(href="https://balsamiq.cloud/",target="_blank") https://balsamiq.cloud/], la instalación es muy sencilla: basta con registrarse y hacer clic en "nuevo proyecto", como se presenta a continuación:
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 505px;")
    
    .slider-personalizado-1.py-5(data-aos="flip-up")
      img.imgf-1(src="@/assets/curso/temas/55.png")
      img.imgf-2(src="@/assets/curso/temas/56.png")
      img.imgf-3(src="@/assets/curso/temas/57.png")
      .slider-personalizado-1__contenido.p-3.pe-lg-5.pt-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-11
              .row
                .col-lg-7.mb-4.mb-lg-0
                  h4.mb-5.color-sistema-l Registro
                  p.mb-0 Ingrese a Balsamiq Cloud: para registrarse, ingrese su correo electrónico corporativo y seleccione 'Start Trial', accediendo así a una prueba gratuita de 30 días.

                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 491px;")
          .row.justify-content-center
            .col-lg-11
              .row
                .col-lg-7.mb-4.mb-lg-0
                  h4.mb-5.color-sistema-l Creación del primer proyecto
                  p.mb-0 Para iniciar un nuevo proyecto en Balsamiq Cloud, haga clic en el ícono '+' situado en la esquina superior izquierda de su espacio de trabajo.

                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 491px;")
          .row.justify-content-center
            .col-lg-11
              .row
                .col-lg-7.mb-4.mb-lg-0
                  h4.mb-5.color-sistema-l Renombrar proyecto
                  p.mb-0 Para cambiar el nombre de su proyecto en Balsamiq Cloud, escriba el nuevo nombre en el cuadro de texto y haga clic en "Rename Project".

                .col-lg-5
                  figure
                    img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 491px;")

    .cont-titulo-decorativo.p-2.mt-5.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Diseño de la estructura de la interfaz

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
