<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Análisis de requerimientos
    
    .fondo-personalizado-5.pos-3.mb-5
      .fondo-personalizado-5__contenido
        .row.mb-5 
          .col-lg-8
            p.mb-5 El desarrollo de aplicaciones móviles va más allá de la mera codificación o programación; también implica analizar y comprender las necesidades del cliente, crear modelos que faciliten el proceso de desarrollo, planificar el proyecto y otras actividades relacionadas.
            .fondo-color-sistema-k.p-4.borde-13
              p.mb-0 La aplicación de técnicas para elicitar requisitos permite identificar las fuentes de estos con los interesados en el sistema (#[em stakeholders]). Sin embargo, estas actividades pueden llevar a que el cliente o los usuarios excedan lo que realmente necesitan o que no consideren las limitaciones a nivel de #[em hardware, software], presupuesto, tiempo o requisitos. Por lo tanto, es fundamental conocer con detalle lo que se pretende alcanzar y las necesidades reales a cubrir. Así, se deben detallar y modificar los requisitos básicos elicitados, lo cual se logra mediante el consenso de las partes involucradas.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 393px;")
        
        .row.mb-5.pb-3
          .col-auto.d-none.d-lg-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 100px;")
          .col
            p.mb-0 Se deben responder las siguientes preguntas: #[span.color-sistema-l ¿Qué es lo prioritario?], #[span.color-sistema-l ¿qué es esencial?] y #[span.color-sistema-l ¿para cuándo se requiere?] Esto se especifica de alguna manera y luego se revisa o válida para garantizar que la comprensión del problema por parte del analista coincida con la de los demás participantes.
        
        .row.justify-content-center.mb-5
          .col-lg-6.col-md-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 9.] Esquema de acuerdos
            figure
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/48.svg",style="max-width: 610px;",alt="El esquema de acuerdos presenta las relaciones del cliente inversionista, quien a partir de necesidades y recursos contrata a analistas para que de respuesta a necesidades de usuarios a través de suministro de hardware y software.")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/49.svg",style="max-width: 610px;",alt="El esquema de acuerdos presenta las relaciones del cliente inversionista, quien a partir de necesidades y recursos contrata a analistas para que de respuesta a necesidades de usuarios a través de suministro de hardware y software.")
        
        .row.pt-5.mb-5
          .col-auto.d-none.d-md-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 85px;")
          .col
            p.mb-0 Cuando los sistemas no son tan complejos en su enlace, como suele ser el caso para aplicaciones móviles, se recomienda el empleo de historias de usuario. Sin embargo, se sugiere revisar algunos aspectos que no son fáciles de identificar en un proceso de licitación de requisitos y que se mencionan a continuación, ya que están enmarcados en el contexto de aplicaciones móviles.
        
        .slider-personalizado-1.py-5(data-aos="flip-up")
          .slider-personalizado-1__contenido.p-3.pe-lg-5.pt-5
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-lg-11
                  .row
                    .col-lg-7.mb-4.mb-lg-0
                      h4.mb-4.color-sistema-l Aspecto físico o de #[em hardware]
                      ul.lista-ul.lista-personalizada-1.espacio-1
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿En qué dispositivos debe funcionar la aplicación? Por ejemplo: móvil, #[em tablet, smartwatch], etc.
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Qué tipo de aplicación es la solución óptima: nativa, web o híbrida?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span En el caso de las aplicaciones nativas, ¿qué sistema operativo se utilizará? Android, iOS, Windows Phone, etc.
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span En el caso de las aplicaciones web, ¿qué navegadores y versiones deben ser compatibles con las funcionalidades?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Cuántos usuarios simultáneos debe soportar el sistema?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Existen restricciones en el nivel de acceso a internet (ancho de banda o consumo de datos) o requerimientos de seguridad específicos?

                    .col-lg-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 491px;") 
              .row.justify-content-center
                .col-lg-11
                  .row
                    .col-lg-7.mb-4.mb-lg-0
                      h4.mb-4.color-sistema-l Interfaz de usuario
                      ul.lista-ul.lista-personalizada-1.espacio-1
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿La información de entrada es proporcionada por los usuarios o existen otras fuentes? En caso afirmativo, ¿cuáles?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿La salida o consumo de información implica la interacción con uno o más sistemas?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Existe algún formato preestablecido que deben seguir los datos?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Hay alguna aplicación de referencia que pueda servir como guía para el proyecto?

                    .col-lg-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 491px;") 
              .row.justify-content-center
                .col-lg-11
                  .row
                    .col-lg-7.mb-4.mb-lg-0
                      h4.mb-4.color-sistema-l Aspectos humanos
                      ul.lista-ul.lista-personalizada-1.espacio-1
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Qué perfil de población utilizará la aplicación?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Hay diferentes tipos de usuarios con roles distintos?
                        li
                          i.far.fa-dot-circle.col-color-primario(style="font-size: 0.7rem;")
                          span ¿Qué tipo de capacitación o entrenamiento necesitará cada perfil de usuario?

                    .col-lg-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/52.png",style="max-width: 491px;")

    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 Cuando un requisito o un conjunto de ellos forma parte de todo un ecosistema tecnológico en el que intervienen distintos tipos de aplicaciones (web, de escritorio, móviles, interacciones con otros sistemas de proveedores, clientes o socios), como ocurre, por ejemplo, con los sistemas bancarios que disponen de aplicaciones móviles, aplicaciones web, terminales de escritorio y portales para asociados, las historias de usuario no siempre ofrecen una visión completa de la complejidad del problema.
        .fondo-color-sistema-k.borde-13.p-3
          .row.align-items-center 
            .col-md-auto
              .d-flex.mb-4.mb-md-0
                .burbuja-1.fondo-color-acento-contenido.mx-auto
                  figure
                    img.mx-auto(src="@/assets/curso/temas/53.svg",style="max-width: 93px;")
            .col 
              p.mb-0 Estos sistemas generalmente cuentan con lo que se denomina #[b "Reglas de Negocio"] o un #[b "Conjunto de Reglas de Negocio"] que describen las políticas, operaciones, normativas, definiciones y restricciones que rigen en una organización. Dichas reglas son fundamentales para los sistemas de información o aplicaciones, ya que consideran los factores críticos para alcanzar los objetivos misionales del cliente. En algunos casos, incluso se requiere de un glosario de términos específicos del negocio para poder especificar dichas reglas de forma adecuada.
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 502px;")
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .fondo-personalizado-6.py-4.ps-3.pe-4.borde-11
          .row.align-items-center 
            .col-md-auto
              .d-flex.mb-4.mb-md-0
                .burbuja-1.fondo-color-acento-contenido.mx-auto
                  figure
                    img.mx-auto(src="@/assets/curso/temas/59.svg",style="max-width: 50px;")
            .col
              p.mb-4.fw-bold.text-white Por ejemplo
              p.mb-0.text-white Una regla de negocio podría ser: un cliente al que se factura más de 10,000 al año se clasifica como cliente de tipo A; a los clientes de tipo A se les aplica un descuento del 10 % en pedidos que superen los 3,000.
    
    p.mb-5 Las reglas de negocio pueden llegar a ser tan complejas como las operaciones del cliente. En situaciones de esta índole, se sugiere el uso de artefactos como los casos de uso para definir con detalle la especificación del sistema. Para guiar el proceso, se proponen algunos artefactos a elaborar:

    


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
