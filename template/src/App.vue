<template>
  <div id="app">
    <div class="col-md-6">
      <img src="./assets/logo.png">
      {{#router}}
      <router-view></router-view>
      {{else}}
      <helloWorld></helloWorld>
      {{/router}}
    </div>
    <div class="col-md-6">
      <p>FontAwesome is available <i class="fa fa-exclamation" aria-hidden="true"></i></p>
      <p><a href="#" data-toggle="tooltip" v-on:click.stop.prevent title="Hooray!">Bootstrap is available</a> <i class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></i></p>
    </div>
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/hello_world/HelloWorld.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    HelloWorld{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="scss">
// bootstrap
$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
@import './node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';

// font awesome
$fa-font-path: '../node_modules/font-awesome/fonts/';
@import '../node_modules/font-awesome/scss/font-awesome';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
