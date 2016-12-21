<template lang="html">
  <div class="modal">
    <div class="row">
      <button class="m-btn m-btn--danger" @click="open">modal</button>
    </div>
    <div class="m-modal m-modal--lg bounce-landing">
      <div class="m-modal__dialog">
        <div class="m-modal__cotent">
          <div class="m-modal__header">
            <button class="close" @click="close">&times;</button>
            <h4 class="m-modal__title">提示</h4>
          </div>
          <div class="m-modal__body">
            <p>有逼格的程序员社区</p>
          </div>
          <div class="m-modal__footer">
            <button class="m-btn m-btn--secondary" @click="close">关闭</button>
            <button class="m-btn m-btn--primary" @click="close">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    open(){
      const $dom = '<div class="m-modal-backdrop in"></div>'
      $('body').append($dom)
      $('.m-modal').addClass('in')
    },
    close(){
      $('.m-modal').removeClass('in')
      $('.m-modal-backdrop').remove()
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
