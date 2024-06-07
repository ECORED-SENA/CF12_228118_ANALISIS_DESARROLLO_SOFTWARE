<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Principios básicos de usabilidad
    
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        .fondo-color-sistema-r.p-4.borde-13
          p.mb-0 La usabilidad es un término que evalúa la calidad de la experiencia de usuario al interactuar con un producto o sistema. Se mide a través del análisis de la relación entre las herramientas diseñadas y los usuarios que las emplean, con el objetivo de determinar la eficiencia y efectividad en el uso de los elementos ofrecidos en las interfaces y en el cumplimiento de las tareas que se realizan mediante ellas. Por tanto, la usabilidad puede definirse como la disciplina que estudia el diseño de aplicaciones móviles o sitios web para facilitar una interacción fácil, fluida e intuitiva por parte de los usuarios.
      .col-lg-4(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/82.png",style="max-width: 400px;")
    
    .fondo-color-sistema-k.px-4.py-2.borde-13.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-md-auto 
          .burbuja-1.fondo-color-acento-contenido.mx-auto
            figure
              img.mx-auto(src="@/assets/curso/temas/83.svg",style="max-width: 93px;")
        .col 
          p.mb-0 Existen varios aspectos relacionados con el uso de aplicaciones y cómo las personas interactúan con ellas. Estos estudios han derivado en un conjunto de criterios para evaluar dichos aspectos, funcionando como un mecanismo de validación. Esta validación se realiza considerando diversos factores, entre los que se incluyen los siguientes:
    
    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .p-3.fondo-personalizado-8(titulo="<h4>Facilidad de aprendizaje </h4>" :icono="require('@/assets/curso/temas/84.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Facilidad de aprendizaje
                p.mb-0 Se puede emplear una unidad de tiempo para determinar lo que demoran los usuarios en usarla de manera correcta y, realizar las operaciones básicas y comunes.
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/85.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-8(titulo="<h4>Facilidad y eficiencia de uso</h4>" :icono="require('@/assets/curso/temas/84.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Facilidad y eficiencia de uso
                p.mb-0 Se puede usar una unidad de tiempo para establecer cuánto tiempo se demora un usuario en realizar una operación completa de su quehacer con la herramienta de trabajo.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/87.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-8(titulo="<h4>Facilidad de recordar el funcionamiento</h4>" :icono="require('@/assets/curso/temas/84.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Facilidad de recordar el funcionamiento
                p.mb-0 La capacidad de recordar las características y la forma de uso de un sistema se debe usar para volver a emplearlo en el futuro.
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/88.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-8(titulo="<h4>Frecuencia y gravedad de errores</h4>" :icono="require('@/assets/curso/temas/84.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Frecuencia y gravedad de errores
                p.mb-0 Los mensajes de error se proporcionan a los usuarios para apoyarlos cuando deban enfrentar errores que se cometan en el sistema.
                p.mb-0 #[b Ejemplo de un error predeterminado.] Suponga que en un sistema de facturación se intenta hacer una factura sin relacionar al menos un producto o servicio a facturar.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/89.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-8(titulo="<h4>Satisfacción subjetiva</h4>" :icono="require('@/assets/curso/temas/84.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Satisfacción subjetiva
                p.mb-0 Indica lo satisfechos que quedan los usuarios después de haber usado el sistema, debido al diseño presentado y es subjetiva porque depende de la percepción de cada usuario.
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/90.png",style="max-width: 400px;")
    
    p.mb-5(data-aos="zoom-in-out") Los anteriores aspectos aplican en principio a cualquier tipo de aplicación, web o móvil, sin embargo, el compendio de buenas prácticas para aplicaciones móviles se destaca por aspectos como los relacionados a continuación:

    .row.justify-content-center
      .col-lg-10
        .fondo-personalizado-9
          img.imgf-1(src="@/assets/curso/temas/91.png")
          img.imgf-2(src="@/assets/curso/temas/92.png")
          img.imgf-3(src="@/assets/curso/temas/93.png")
          .fondo-personalizado-9__contenido.p-4.pb-5(data-aos="fade")
            PasosB.pasos-personalizado-1
              .row.mb-5.pt-3(titulo="")
                .col-md-6.mb-4.mb-md-0.ps-lg-5
                  h3.mb-4.p-1.color-acento-contenido Definir con simplicidad y claridad la estructura de los contenidos
                  p.mb-0.text-white Generalmente la recomendación es organizarlos de acuerdo con una jerarquía y consistencia temática o según las relaciones y procesos de negocio de la aplicación.
                .col-md-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/94.png",style="max-width: 295px;")
              .row.mb-5.pt-3(titulo="")
                .col-md-6.mb-4.mb-md-0.ps-lg-5
                  h3.mb-4.p-1.color-acento-contenido Establecer un diseño "limpio"
                  p.mb-0.text-white Utilizar una tipografía correcta, imágenes y recursos gráficos que faciliten al usuario encontrar lo que busca, separando los contenidos con una clasificación lógica.
                .col-md-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/95.png",style="max-width: 295px;")
              .row.mb-5.pt-3(titulo="")
                .col-md-6.mb-4.mb-md-0.ps-lg-5
                  h3.mb-4.p-1.color-acento-contenido Ceder el control al usuario
                  p.mb-0.text-white Los usuarios no experimentan una sensación positiva si se sienten perdidos en algún momento mientras interactúan con el sistema. Se debe garantizar que el usuario sepa dónde se encuentra y cómo acceder a otro enlace o funcionalidad.
                .col-md-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/96.png",style="max-width: 295px;")
              .row.mb-5.pt-3(titulo="")
                .col-md-6.mb-4.mb-md-0.ps-lg-5
                  h3.mb-4.p-1.color-acento-contenido Facilitar la interacción
                  p.mb-0.text-white Permitir que el usuario pueda desarrollar varias acciones de forma fácil e intuitiva contribuye a la satisfacción; sin embargo, si estas opciones no se presentan con un diseño limpio, se puede lograr un efecto adverso.
                .col-md-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/97.png",style="max-width: 295px;")
              .row.mb-5.pt-3(titulo="")
                .col-md-6.mb-4.mb-md-0.ps-lg-5
                  h3.mb-4.p-1.color-acento-contenido Simplificar y sintetizar
                  p.mb-0.text-white La regla básica para aplicar este principio es: "todo lo que no es necesario, sobra". Con ello se evita sobrecargar el sistema con información u operaciones superfluas.
                .col-md-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/98.png",style="max-width: 295px;")
              .row.mb-5.pt-3(titulo="")
                .col-md-6.mb-4.mb-md-0.ps-lg-5
                  h3.mb-4.p-1.color-acento-contenido Adaptar para todo tipo de dispositivos
                  p.mb-0.text-white Otro elemento básico es la adaptabilidad a diferentes dispositivos.
                .col-md-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/99.png",style="max-width: 295px;")

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
