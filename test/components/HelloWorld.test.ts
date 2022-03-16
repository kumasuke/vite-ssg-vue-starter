import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HelloWorld from '../../src/components/HelloWorld.vue'

describe('HellowWorld.vue', () => {
  it('should render', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello World!' } })
    expect(wrapper.text()).toContain('Hello World!')
  })

  it('should be interactive', async() => {
    const wrapper = mount(HelloWorld, { props: { msg: '' } })
    expect(wrapper.get('button').text()).toContain('count is: 0')

    await wrapper.get('button').trigger('click')

    expect(wrapper.get('button').text()).toContain('count is: 1')
  })
})
