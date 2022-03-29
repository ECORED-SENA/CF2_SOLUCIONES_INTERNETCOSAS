<template lang="pug">
.cardClick
  .row.mb-5.justify-content-center.align-items-start
    .col-xl-3.mb-lg-0.mb-3(v-for="(card, index) in cards" :key="index+'card'")
      .card-container(@click='mostrarTexto(index)' )
        .card-container__card-top.px-5.py-4(:class='card.class')
          h3.mb-0.text-center(v-html='card.titulo')
        .card-container__card-text(:class="[card.classText, activeIndex == index+1  ? 'active':'']" )
          p(v-html="card.texto")
        .card-container__card-bottom.px-5.py-3(:class='card.class')
          img(:src='card.img')
</template>

<script>
export default {
  name: 'CardClick',
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    activeIndex: 0,
    isActive: false,
  }),
  mounted() {},
  methods: {
    mostrarTexto(index) {
      const nuevoIndex = index + 1
      if (this.activeIndex == nuevoIndex) {
        this.activeIndex = 0
      } else {
        this.activeIndex = nuevoIndex
      }
    },
  },
}
</script>

<style lang="sass">
.card-container
  justify-content: center
  display: flex
  flex-direction: column
  &__card-top
    z-index: 1
    display: flex
    justify-content: center
    align-items: center
    border-radius: 20px 20px 0 0
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)
    &:hover
      cursor: pointer
  &__card-bottom
    img
      width: 97px
    margin: 0 auto
    width: 90%
    display: flex
    justify-content: center
    align-items: center
    border-radius:  0 0 20px 20px

  &__card-text
    p
      opacity: 0
      display: none
    transition: all 0.2s ease-in-out
    overflow: hidden
    height: 0
    margin: 0 auto
    display: flex
    background-color: #C6FCFF
    width: 90%
.active
  p
    opacity: 1
    display: block
  padding: 20px !important
  height: 100% !important
  transition: all 0.2s ease-in-out
.bg
  &__1
    background-color: #C6FCFF
  &__2
    background-color: #FFE1E4
  &__3
    background-color: #FFF7DF
  &__4
    background-color: #E1CEF0
.bg-card
  &__1
    background-color: #01D1DD
  &__2
    background-color: #FF6B79
  &__3
    background-color: #FFD85F
  &__4
    background-color: #662C91
    h3
      color: $white
</style>
