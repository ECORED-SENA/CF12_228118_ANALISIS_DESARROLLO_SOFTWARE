<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-md-0.pb-0
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-4.align-items-center
      .col-md-2
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 145px;")
      .col-md-10
        p.mb-0 Este componente formativo abordará los conceptos y técnicas que respaldan el desarrollo de la interfaz gráfica de un producto de #[em software]. Se iniciará con una introducción teórica sobre el sistema de navegación e interacción de las aplicaciones. A partir de esta base, se revisará el proceso de construcción de la interfaz gráfica mediante un caso práctico, comenzando con un boceto y luego avanzando a la maquetación con herramientas de prototipado rápido y tecnologías #[em front-end].

    .fondo-personalizado-1.pos-1
      .fondo-personalizado-1__contenido
        .row.mb-4.align-items-center
          .col-lg-8
            .fondo-color-sistema-i.borde-10.p-4.mb-4
              p.mb-0 Además, se destacará el uso del #[em framework CSS Materialize], el cual proporciona una interfaz dinámica, usable y de fácil aprendizaje. Se brindarán herramientas y recursos para facilitar el desarrollo de futuros proyectos de #[em software].
            .fondo-color-primario.borde-10.p-4
              p.mb-0.text-white Abordar un objetivo sin una planificación adecuada puede resultar en un análisis menos efectivo, generando así una discrepancia entre el producto entregado y las expectativas del cliente o los usuarios finales. Esto es particularmente crítico en el desarrollo de aplicaciones móviles, donde la interacción con el usuario ofrece desafíos únicos. Una planificación inadecuada puede resultar en frustración para el usuario o el cliente, y en el mejor de los casos, en un exceso de esfuerzo o incumplimiento de los plazos establecidos.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 400px;")

        p.mb-4 Establecer los requisitos del sistema de manera precisa es esencial para diseñar adecuadamente la interacción con el usuario, optimizando así el tiempo y maximizando la inversión. Por ello, se recomienda realizar dos actividades fundamentales antes de empezar a codificar:

        .row.justify-content-center.pb-5
          .col-lg-6
            .fondo-color-primario.borde-18.px-4.px-md-5.py-3.mb-4
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 71px;")
                .col
                  p.mb-0.text-white Determinar con precisión los requerimientos (el alcance) del sistema.
            .fondo-color-sistema-j.borde-18.px-4.px-md-5.py-3
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/4.svg",style="max-width: 71px;")
                .col
                  p.mb-0.text-white Diseñar o prototipar el sistema de manera que se proporcione una visión clara de cómo interactuará con el usuario.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
