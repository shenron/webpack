import $ from 'jquery'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export default {
  mounted{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    $('[data-toggle="tooltip"]').tooltip('show'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
