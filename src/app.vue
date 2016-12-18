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
    <v-list-group></v-list-group>
    <v-media></v-media>
    <v-table></v-table>
    <v-tag></v-tag>
    <v-card></v-card>
    <v-jumbotron></v-jumbotron>
    <v-pagination></v-pagination>
    <v-display></v-display>
  </div>
</template>

<script>
  import vButtons from './components/v-buttons.vue';
  import vButtonGroup from './components/v-button-group.vue';
  import vAlert from './components/v-alert.vue';
  import vBreadcrumb from './components/v-breadcrumb.vue';
  import vForm from './components/v-form.vue';
  import vInputGroup from './components/v-input-group.vue';
  import vListGroup from './components/v-list-group.vue';
  import vMedia from './components/v-media.vue';
  import vTable from './components/v-table.vue';
  import vTag from './components/v-tag.vue';
  import vCard from './components/v-card.vue';
  import vJumbotron from './components/v-jumbotron.vue';
  import vPagination from './components/v-pagination.vue';
  import vDisplay from './components/v-display.vue';
  export default {
    name: 'app',
    components: { vButtons, vButtonGroup, vAlert, vBreadcrumb, vForm, vInputGroup, vListGroup, vMedia, vTable, vTag, vCard, vJumbotron, vPagination, vDisplay}
  };
</script>

<style media="screen">
  /**{margin: 0;padding: 0;border: 0;outline: 0}*/
  body{padding: 40px !important;}
  .row{margin: 10px 0;}
  body>div>div{margin: 20px 0;}
</style>
