<template>
  <div>
    <h1>MayUI</h1>
    <p>maywzp的UI</p>
    <v-buttons></v-buttons>
    <v-button-group></v-button-group>
    <v-alert></v-alert>
    <v-breadcrumb></v-breadcrumb>
    <v-form></v-form>
    <v-input-group></v-input-group>
  </div>
</template>

<script>
  import vButtons from './components/v-buttons.vue';
  import vButtonGroup from './components/v-button-group.vue';
  import vAlert from './components/v-alert.vue';
  import vBreadcrumb from './components/v-breadcrumb.vue';
  import vForm from './components/v-form.vue';
  import vInputGroup from './components/v-input-group.vue';
  export default {
    name: 'app',
    components: { vButtons, vButtonGroup, vAlert, vBreadcrumb, vForm, vInputGroup}
  };
</script>

<style media="screen">
  /**{margin: 0;padding: 0;border: 0;outline: 0}*/
  body{padding: 40px !important;}
  .row{margin: 10px 0;}
  body>div>div{margin: 20px 0;}
</style>
