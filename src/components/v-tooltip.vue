<template lang="html">
    <div class="tooltip">
      <button class="m-btn m-btn--secondary" data-toggle="tooltip" data-placement="top" title="Top Show" @mouseover="over">Top</button>
      <button class="m-btn m-btn--secondary">Bottom</button>
      <button class="m-btn m-btn--secondary">Left</button>
      <button class="m-btn m-btn--secondary">Right</button>
      <div class="m-tooltip m-tooltip--top">
        <div class="m-tooltip__inner">
          Top Show
        </div>
      </div>
    </div>
</template>
<style media="screen">
  .tooltip{position: relative}
</style>
<script>
    export default {
      data(){
        return {

        }
      },
      mounted(){

      },
      methods: {
        over(e){
          const $el = $(e.toElement)
          const tilte = $el.attr('title')
          const placement = $el.data('placement')
          const $dom = `<div class="m-tooltip m-tooltip--top in"><div class="m-tooltip__inner">${tilte}</div></div>`
          // $el.append($dom)
        },
        top(){
          $('.m-tooltip--top').addClass('in')
        }
      }
    }
</script>
