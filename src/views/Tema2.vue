<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistema de interacción en plataformas de #[em software]

    p.mb-4(data-aos="fade") Este sistema se define como un conjunto de componentes que responden a las necesidades de los usuarios al navegar por una plataforma de software. En otras palabras, comprende el diseño de cada acción que un usuario puede realizar en un sitio web o aplicación, tales como hacer clic, #[em scrolling] o utilizar gestos (como ampliar o disminuir el tamaño). Cada acción desencadena una respuesta específica en la aplicación desarrollada, a lo que se le denomina sistema de interacción.

    .row.mb-5
      .col-lg-5(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-left")
        .fondo-color-sistema-k.p-4.borde-12.mb-3
          p.mb-5 Adicionalmente, en las páginas de interacción, se permite a los usuarios escribir, dibujar, editar, borrar y ejecutar todo tipo de acciones. Estas pueden ser muy simples, como la página de inicio de Google, o muy complejas, integrando múltiples elementos de interacción.
        .fondo-color-primario.p-3.py-md-1.borde-12.mb-2.px-4.pe-md-5
          .row.align-items-center
            .col 
              p.mb-0.text-white Las páginas simples son aquellas en las que la sencillez es fundamental.
            .col-md-auto.order-first.order-md-last
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 68px;")
        .fondo-color-sistema-j.p-1.borde-12.px-4.pe-md-5.py-3
          .row.align-items-center
            .col 
              p.mb-0.text-white Las páginas más complejas suelen requerir un periodo de aprendizaje más extenso para que los usuarios se familiaricen con ellas y puedan aprovecharlas al máximo.
            .col-md-auto.order-first.order-md-last
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 68px;")

    p.mb-5(data-aos="fade-right") En la actualidad, muchos de los sitios más visitados presentan características adaptadas a los cambios tecnológicos recientes en la movilidad de los dispositivos. Según el artículo de la Digital Guide de IONOS (2021):

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.fondo-color-primario.p-4.mb-5
      figure.mb-4.mb-lg-0.position-relative.figura-deco-1(data-aos="fade-right")
        img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 284px;min-width: 284px;")
      .p-4.p-lg-5.cont_1_1(data-aos="fade-left")
        p.mb-0.my-3 Las páginas web deben ser hoy en día más eficientes e intuitivas para poder subsistir en un mercado #[em online] extremadamente competitivo, ya sea desde un PC de escritorio, una #[em tablet] o un teléfono móvil. El diseño recargado de la década de los años 2000 ha pasado a la historia: ahora la prioridad es concentrarse en lo esencial.
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="zoom-in-out")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Tendencias actuales en diseño web
    
    p.mb-5(data-aos="fade-right") Esta tendencia se ha consolidado en la realidad actual, donde se observa que la gran mayoría de las consultas y actividades se realizan a través de Internet.

    .row.mb-5
      .col-lg-8(data-aos="fade-up")
        p.mb-5 Ejemplos comunes incluyen #[b pedir un domicilio, realizar pagos o transacciones bancarias, leer un libro, consultar el correo electrónico o asistir a reuniones virtuales]. De manera natural, los diseños e interacciones están siendo orientados hacia el enfoque móvil, influenciados por la experiencia y cultura de los usuarios.
        
        .row.mb-5(data-aos="fade-down")
          .col-auto.d-none.d-lg-block 
            figure
              img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 100px;")
          .col 
            p.mb-0 En este contexto, es crucial que las páginas web sean fáciles de usar, ya que la usabilidad y accesibilidad se convierten en elementos decisivos dentro del marco del diseño responsivo.
        
        .fondo-personalizado-3.py-4.ps-3.pe-4.borde-5
          .row.align-items-center 
            .col-md-auto
              .d-flex.mb-4.mb-md-0
                .burbuja-1.fondo-color-acento-contenido.mx-auto
                  figure
                    img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 74px;")
            .col 
              p.mb-0.text-white El diseño web moderno permite que una página o sitio web #[span.fw-bold.color-acento-contenido "responda o reaccione"] adecuadamente al dispositivo utilizado por la persona, asegurando una presentación correcta del contenido. Es importante entender que no se trata solo de adaptar el contenido, sino de modificar la interfaz en general para mejorar la usabilidad y, por ende, la experiencia del usuario.
      .col-lg-4.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 389px;")
    
    p.mb-0(data-aos="fade-left") Con esta perspectiva, y abordando de manera sucinta estos conceptos, se propone como caso de estudio la estructura y maquetación de la interfaz de un servicio de publicación de #[em posts]. Para ello, el primer recurso que se utilizará será una herramienta de prototipado rápido llamada Balsamiq Mockups, la cual se detallará en el siguiente apartado.

</template>

<script>
export default {
  name: 'Tema2',
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
