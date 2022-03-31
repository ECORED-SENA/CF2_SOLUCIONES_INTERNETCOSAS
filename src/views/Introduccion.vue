<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El papel de la computación en la nube en el internet de las cosas es fundamental cuando millones y millones de sensores generan todo tipo de señales que se convierten en información valiosa que puede ser utilizada en cualquier momento en el tiempo y desde cualquier lugar y la computación en la nube lo hace posible. Así, los datos se adquieren usando tecnologías y protocolos de comunicación, se extraen, se limpian y, por último, se analizan e interpretan haciendo que las empresas tomen sus mejores decisiones en aras de su propio éxito.
    
    .bg-video.p-5
      .row.justify-content-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/VEjj9cEyDRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
