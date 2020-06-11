import Vue from 'vue'
import CatSelector from '@/components/CatSelector'

describe('CatSelector.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CatSelector)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Web Tech Stack Selector')
  })
})
