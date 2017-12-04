import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HelloWorld from '@/components/hello_world/HelloWorld.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'bootstrap-sass/assets/javascripts/bootstrap'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Constructor().$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$el.querySelector('.hello h1').textContent)
    {{#if_eq runner "karma"}}.to.equal('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{#if_eq runner "karma"}}it('assert should be installed', () => {
    assert.isTrue(true){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
