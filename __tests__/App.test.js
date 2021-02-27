import { mount } from "@vue/test-utils"
import App from "@/App"

describe('Test', () => {
  test('является компонентом Vue', () => {
    const wrapper = mount(App)
    expect(wrapper.vm).toBeTruthy()
  })
})
