import { createLocalVue, mount } from '@vue/test-utils'
// import Vue from 'vue/dist/vue.esm.js'
// import 'vue-template-compiler'
import MuttVue from '@mutt/widgets-vue'

import App from '@/App.vue'


const localVue = createLocalVue()
localVue.use(MuttVue)

describe('App.vue', () => {
  test('should render correctly', async () => {
    const wrapper = mount(App, { localVue })

    // await wrapper.vm.$nextTick()

    expect(wrapper.element).toMatchSnapshot()
  })
})
