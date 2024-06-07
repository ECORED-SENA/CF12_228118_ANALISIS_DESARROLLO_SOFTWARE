<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 1
      h1 Sistema de navegación en plataformas #[em software]
    
    .fondo-personalizado-2.pos-1.mb-5
      .fondo-personalizado-2__contenido.pb-5
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-10
            .fondo-color-sistema-k.p-4.borde-14
              .row.align-items-center 
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 112px;")
                .col 
                  p.mb-4 Un sistema de navegación permite que los usuarios se desplacen libremente por las distintas secciones de una plataforma. No se trata simplemente de un aspecto menor de la navegación.
                  p.mb-0 Considérese dos situaciones hipotéticas:

        .row.justify-content-center
          .col-lg-4.mb-5(data-aos="fade-right")
            .tarjeta-img-1
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/8.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p.text-white Un aficionado a la lectura entra en una biblioteca buscando una edición antigua del Quijote.
          .col-lg-4.mb-5(data-aos="fade-left")
            .tarjeta-img-1
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/9.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p.text-white Un joven empresario visita una web de viajes en busca de un vuelo de ida y vuelta a Perú.
        
        .row.mb-5 
          .col-lg-7.mb-4.mb-lg-0
            .row.mb-4(data-aos="fade-right")
              .col-auto.d-none.d-md-block
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 85px;")
              .col 
                p.mb-0 Estos escenarios presentan cómo diferentes personas acceden a la información según sus necesidades específicas. Por lo tanto, antes de diseñar cualquier sistema de navegación, ya sea web o móvil, es crucial entender cómo buscan información los usuarios.
            .fondo-color-primario.borde-9.px-4.px-lg-5.py-3(data-aos="flip-up")
              p-mb-0.text-white A continuación, se explorará cómo se realiza la búsqueda de información y la navegación en sitios web y dispositivos móviles:
          .col-lg-5(data-aos="fade-right")
            figure
              img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 505px;")

        .slider-personalizado-1.py-5(data-aos="flip-up")
          img.imgf-1(src="@/assets/curso/temas/55.png")
          img.imgf-2(src="@/assets/curso/temas/56.png")
          img.imgf-3(src="@/assets/curso/temas/57.png")
          .slider-personalizado-1__contenido.p-3.pe-lg-5.pt-5
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-lg-11
                  .row.align-items-center
                    .col-lg-7.mb-4.mb-lg-0
                      h4.mb-5 #[span.color-sistema-l A.] En busca de la información
                      p.mb-0 Saber cómo buscan las personas información online presenta problemas y desafíos. La disponibilidad inmediata de los recursos en la red permite a las personas cambiar el rumbo de su búsqueda sobre la marcha. Existe una estrategia de búsqueda, en la cual a medida que se localiza nueva información, el curso de la investigación de la persona puede variar. Se suele buscar con agilidad, y es frecuente que los usuarios puedan vagar de una página a otra con el peligro de perderse en la profundidad de una jerarquía web. La manera de buscar y la frecuencia con la que el usuario puede perderse en este proceso son aspectos que deben ser tenidos en cuenta a la hora de diseñar los sistemas de navegación web (Calvo, 2015).

                    .col-lg-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 491px;")
              .row.justify-content-center
                .col-lg-11
                  .row.align-items-center
                    .col-lg-7.mb-4.mb-lg-0
                      h4.mb-5 #[span.color-sistema-l B.] Navegar por sitios web
                      p.mb-0 La información no solo se busca, se experimenta. El término «experiencia» implica que las emociones juegan un papel clave junto con la conducta y la cognición. Las personas ya no pueden ser vistas como seres racionales que se comportan de forma sistemática y ordenada a la hora de buscar información, teniendo en cuenta su papel crítico en la web. Al respecto muchos de los sitios tienen en la barra de navegación etiquetas o secciones con los siguientes títulos (Inicio, servicios, nosotros, acerca de y contactos), esta distribución del contenido que hace parte de la arquitectura de la información de un sistema interactivo #[em software] debe evaluarse, inicialmente.

                    .col-lg-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 491px;")
              .row.justify-content-center
                .col-lg-11
                  .row.align-items-center
                    .col-lg-7.mb-4.mb-lg-0
                      h4.mb-5 #[span.color-sistema-l C.] Patrón tradicional para el diseño de navegación de un sitio web
                      p.mb-0 Se debe tener siempre presente que el diseño de la navegación influye en gran medida en la experiencia de los usuarios al interactuar con el sitio. Por un lado, los diseñadores deben dedicar el tiempo necesario para familiarizarse con los patrones de búsqueda de sus usuarios, sus emociones, reacciones, entre otros. Por otro lado, este conocimiento facilita a los diseñadores la selección del tipo de navegación más adecuada para el sitio, permitiéndoles elegir entre diversas opciones disponibles.

                    .col-lg-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 491px;")
              .row.justify-content-center
                .col-lg-11
                  .row.align-items-center
                    .col-lg-7.mb-4.mb-lg-0
                      h4.mb-5 #[span.color-sistema-l D.] Navegar por aplicaciones móviles
                      p.mb-0 La navegación en aplicaciones móviles debe ser intuitiva y fácil de recordar, tanto para usuarios nuevos como para quienes ya la han usado previamente, asegurando que puedan moverse con facilidad entre las distintas secciones o vistas. Sin embargo, diseñar una navegación que sea fácil de descubrir y usar, representa un desafío debido a las limitaciones de las pantallas pequeñas y la necesidad de priorizar el contenido sobre los componentes de la interfaz. Aunque existen diversos patrones de navegación diseñados para abordar estos problemas, cada uno presenta desafíos de usabilidad en ciertos aspectos, según Ferraris (2018).

                    .col-lg-5
                      figure
                        img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 491px;")
    
    .row(data-aos="fade-left")
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Es necesario implementar al menos una técnica de prototipado rápido para facilitar la navegación entre las vistas del #[em software] y mejorar la interacción. Existe una correlación evidente entre la navegación a través de las diversas vistas de un sitio o aplicación y las acciones que debe realizar el usuario, conocido comúnmente como sistemas de interacción.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
