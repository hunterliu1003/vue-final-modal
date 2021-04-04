import { enableAutoDestroy } from '@vue/test-utils'
import { afterTransition, createClosedModal, createOpenedModal, initDynamicModal, transitionStub } from './utils'

enableAutoDestroy(afterEach)

describe('VueFinalModal.vue', () => {
  describe('default props', () => {
    it('value', async () => {
      const { wrapper } = await createOpenedModal()
      expect(wrapper.find('.vfm').isVisible()).toBe(true)
    })
    it('ssr: true', async () => {
      const { wrapper } = await createClosedModal()
      expect(wrapper.find('.vfm').exists()).toBe(true)
    })
    it('lockScroll: true', async () => {
      await createOpenedModal()
      expect(document.body.style.overflow).toBe('hidden')
    })
    it('hideOverlay: false', async () => {
      const { wrapper } = await createOpenedModal()
      expect(wrapper.find('.vfm__overlay').isVisible()).toBe(true)
    })
    it('clickToClose: true', async done => {
      const { wrapper } = await createOpenedModal()
      wrapper.find('.vfm__container').trigger('click')
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(false)
        done()
      })
    })
    it('escToClose: false', async done => {
      const { wrapper } = await createOpenedModal()
      wrapper.find('.vfm__container').trigger('keydown.esc')
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(true)
        done()
      })
    })
    it('preventClick: false', async () => {
      const { wrapper } = await createOpenedModal()
      expect(wrapper.find('.vfm').classes('vfm--prevent-none')).toBe(false)
      expect(wrapper.find('.vfm__content').classes('vfm--prevent-auto')).toBe(false)
    })
    it('focusRetain: true', async () => {
      const { wrapper } = await createOpenedModal()
      expect(document.activeElement === wrapper.find('.vfm__container').vm.$el).toBe(true)
    })
  })
  describe('specific props', () => {
    it('lockScroll: false', async () => {
      await createOpenedModal({
        lockScroll: false
      })
      expect(document.body.style.overflow).not.toBe('hidden')
    })
    it('ssr: false', async () => {
      const { wrapper } = await createClosedModal({
        ssr: false
      })
      expect(wrapper.find('.vfm').exists()).toBe(false)
    })
    it('classes', async () => {
      const testClass = 'test-class'
      const { wrapper } = await createClosedModal({
        classes: testClass
      })
      expect(wrapper.find('.vfm__container').classes()).toContain(testClass)
    })
    it('styles', async () => {
      const testStyle = 'background: rgb(255, 255, 255);'
      const { wrapper } = await createClosedModal({
        styles: testStyle
      })
      expect(wrapper.find('.vfm__container').attributes('style')).toContain(testStyle)
    })
    it('overlayClass', async () => {
      const testClass = 'test-class'
      const { wrapper } = await createClosedModal({
        overlayClass: testClass
      })
      expect(wrapper.find('.vfm__overlay').classes()).toContain(testClass)
    })
    it('overlayStyle', async () => {
      const testStyle = 'background: rgb(255, 255, 255);'
      const { wrapper } = await createClosedModal({
        overlayStyle: testStyle
      })
      expect(wrapper.find('.vfm__overlay').attributes('style')).toContain(testStyle)
    })
    it('contentClass', async () => {
      const testClass = 'test-class'
      const { wrapper } = await createClosedModal({
        contentClass: testClass
      })
      expect(wrapper.find('.vfm__content').classes()).toContain(testClass)
    })
    it('contentStyle with object', async () => {
      const testStyle = { background: 'rgb(255, 255, 255)' }
      const { wrapper } = await createOpenedModal({
        contentStyle: testStyle
      })
      const style = wrapper.find('.vfm__content').attributes('style')
      Object.keys(testStyle).forEach(key => {
        expect(style).toContain(`${key}: ${testStyle[key]};`)
      })
    })
    it('contentStyle with array object', async () => {
      const testStyle = [{ background: 'rgb(255, 255, 255)' }]
      const { wrapper } = await createOpenedModal({
        contentStyle: testStyle
      })
      const style = wrapper.find('.vfm__content').attributes('style')
      testStyle.forEach(item => {
        Object.keys(item).forEach(key => {
          expect(style).toContain(`${key}: ${item[key]};`)
        })
      })
    })
    it('hideOverlay: true', async done => {
      const { wrapper } = await createOpenedModal({
        hideOverlay: true
      })
      expect(wrapper.find('.vfm__overlay').isVisible()).toBe(false)
      wrapper.setProps({ hideOverlay: false })
      afterTransition(() => {
        expect(wrapper.find('.vfm__overlay').isVisible()).toBe(true)
        wrapper.setProps({ hideOverlay: true })
        afterTransition(() => {
          expect(wrapper.find('.vfm__overlay').isVisible()).toBe(false)
          done()
        })
      })
    })
    it('clickToClose: false', async done => {
      const { wrapper } = await createOpenedModal({
        clickToClose: false
      })
      wrapper.find('.vfm__container').trigger('click')
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(true)
        done()
      })
    })
    it('escToClose: true', async done => {
      const { wrapper } = await createOpenedModal({
        escToClose: true
      })
      wrapper.find('.vfm__container').trigger('keydown.esc')
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(false)
        done()
      })
    })
    it('preventClick: true', async () => {
      const { wrapper } = await createOpenedModal({
        preventClick: true
      })
      expect(wrapper.find('.vfm').classes('vfm--prevent-none')).toBe(true)
      expect(wrapper.find('.vfm__content').classes('vfm--prevent-auto')).toBe(true)
    })
    it('attach: HTMLElement', async () => {
      const elem = document.createElement('div')
      document.body.appendChild(elem)
      const { wrapper } = await createOpenedModal({
        attach: elem
      })
      expect(wrapper.vm.$el.parentNode === elem).toBe(true)
    })
    it('attach: querySelector', async () => {
      const elem = document.createElement('div')
      elem.className = 'attach-to-here'
      document.body.appendChild(elem)
      const { wrapper } = await createOpenedModal({
        attach: '.attach-to-here'
      })
      expect(wrapper.vm.$el.parentNode === elem).toBe(true)
    })
    it('attach: wrong querySelector', async () => {
      global.console.warn = jest.fn()
      const spy = jest.spyOn(global.console, 'warn')
      const attach = '.selector-not-exist-in-dom'
      const { wrapper } = await createClosedModal({
        attach
      })
      wrapper.setProps({ value: true })
      afterTransition(() => {
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy.mock.calls[0][0]).toContain(attach)
      })
    })
    it('focusRetain: false', async () => {
      const { wrapper } = await createOpenedModal({
        focusRetain: false
      })
      expect(document.activeElement === wrapper.find('.vfm__container').vm.$el).toBe(false)
    })
    it('focusTrap: true', async done => {
      const { wrapper } = await createOpenedModal({
        focusTrap: true
      })
      expect(document.activeElement === wrapper.find('.vfm__container').vm.$el).toBe(true)
      wrapper.setProps({ value: false })
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(false)
        done()
      })
    })
    it('zIndexAuto', async () => {
      const { wrapper } = await createOpenedModal({
        zIndexAuto: false
      })
      expect(wrapper.attributes('style')).not.toContain('z-index')
    })
    it('zIndexBase', async () => {
      const zIndexBase = 2000
      const zIndexStyle = `z-index: ${zIndexBase};`
      const { wrapper } = await createOpenedModal({
        zIndexBase: zIndexBase
      })
      expect(wrapper.attributes('style')).toContain(zIndexStyle)
    })
    it('zIndex', async () => {
      const zIndex = 3000
      const zIndexStyle = `z-index: ${zIndex};`
      const { wrapper } = await createOpenedModal({
        zIndex
      })
      expect(wrapper.attributes('style')).toContain(zIndexStyle)
    })
    it('transition is string', async () => {
      const transition = 'vfm-test-transition'
      const { wrapper } = await createClosedModal(
        {
          transition
        },
        {},
        {},
        { transition: transitionStub() }
      )
      const transitionComponent = wrapper
        .findComponent({
          ref: 'vfmTransition'
        })
        .attributes()
      expect(transitionComponent.name).toEqual(transition)
    })
    it('transition is an object', async () => {
      const transition = {
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-class': 'translate-y-0'
      }
      const { wrapper } = await createClosedModal(
        {
          transition
        },
        {},
        {},
        { transition: transitionStub() }
      )
      const transitionComponent = wrapper
        .findComponent({
          ref: 'vfmTransition'
        })
        .attributes()
      expect(transitionComponent).toEqual(expect.objectContaining(transition))
    })
    it('overlayTransition is string', async () => {
      const overlayTransition = 'vfm-test-overlay-transition'
      const { wrapper } = await createClosedModal(
        {
          overlayTransition
        },
        {},
        {},
        { transition: transitionStub() }
      )
      const transitionComponent = wrapper
        .findComponent({
          ref: 'vfmOverlayTransition'
        })
        .attributes()
      expect(transitionComponent.name).toEqual(overlayTransition)
    })
    it('overlayTransition is an object', async () => {
      const overlayTransition = {
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-class': 'translate-y-0'
      }
      const { wrapper } = await createClosedModal(
        {
          overlayTransition
        },
        {},
        {},
        { transition: transitionStub() }
      )

      const transitionComponent = wrapper
        .findComponent({
          ref: 'vfmOverlayTransition'
        })
        .attributes()
      expect(transitionComponent).toEqual(expect.objectContaining(overlayTransition))
    })
  })

  describe('API', () => {
    it('show static modal', async done => {
      const { wrapper, $vfm } = await createClosedModal({
        name: 'testModal'
      })
      $vfm.show('testModal')
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(true)
        done()
      })
    })
    it('show dynamic modal', async done => {
      const { wrapper, $vfm } = await initDynamicModal()
      const dynamicOptions = {}
      $vfm.show(dynamicOptions)
      afterTransition(() => {
        expect(wrapper.find('.vfm').exists()).toBe(true)
        done()
      })
    })
    it('show dynamic modal with string slot', async done => {
      const { wrapper, $vfm } = await initDynamicModal()
      const string = 'testVueFinalModal'
      const dynamicOptions = {
        slots: {
          default: string
        }
      }
      $vfm.show(dynamicOptions)
      afterTransition(() => {
        expect(wrapper.find('.vfm').html()).toContain(string)
        done()
      })
    })
    it('hide modal', async done => {
      const { wrapper, $vfm } = await createOpenedModal({
        name: 'testModal'
      })
      $vfm.hide('testModal')
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(false)
        done()
      })
    })
    it('hide modals', async done => {
      const { wrapper, $vfm } = await initDynamicModal()
      $vfm.show({ bind: { name: 'modal1' } })
      $vfm.show({ bind: { name: 'modal2' } })
      afterTransition(() => {
        $vfm.hide('modal1', 'modal2')
        afterTransition(() => {
          expect(wrapper.find('.vfm').exists()).toBe(false)
          done()
        })
      })
    })
    it('hide all modals', async done => {
      const { wrapper, $vfm } = await initDynamicModal()
      $vfm.show({ bind: { name: 'modal1' } })
      $vfm.show({ bind: { name: 'modal2' } })
      afterTransition(() => {
        $vfm.hideAll()
        afterTransition(() => {
          expect(wrapper.find('.vfm').exists()).toBe(false)
          done()
        })
      })
    })
    it('toggle opened modal', async done => {
      const { wrapper, $vfm } = await createOpenedModal({
        name: 'testModal'
      })
      $vfm.toggle('testModal', false)
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(false)
        done()
      })
    })
    it('toggle closed modal', async done => {
      const { wrapper, $vfm } = await createClosedModal({
        name: 'testModal'
      })
      $vfm.toggle('testModal', true)
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(true)
        done()
      })
    })
    it('toggle dynamic modal', async done => {
      const { wrapper, $vfm } = await initDynamicModal()
      $vfm.show({ bind: { name: 'testModal' } })
      afterTransition(() => {
        $vfm.toggle('testModal')
        afterTransition(() => {
          expect(wrapper.find('.vfm').exists()).toBe(false)
          done()
        })
      })
    })
    it('get modals', async done => {
      const { $vfm } = await initDynamicModal()
      $vfm.show({ bind: { name: 'testModal1' } })
      $vfm.show({ bind: { name: 'testModal2' } })
      afterTransition(() => {
        expect($vfm.get('testModal1').length).toBe(1)
        done()
      })
    })
  })

  describe('events', () => {
    it('all events', async done => {
      const clickOutside = jest.fn()
      const beforeOpen = jest.fn()
      const opened = jest.fn()
      const beforeClose = jest.fn()
      const closed = jest.fn()

      const { wrapper } = await createOpenedModal(
        {},
        {
          'click-outside'() {
            clickOutside()
          },
          'before-open'() {
            beforeOpen()
          },
          opened() {
            opened()
          },
          'before-close'() {
            beforeClose()
          },
          closed() {
            closed()
          }
        }
      )
      wrapper.find('.vfm__container').trigger('click')
      afterTransition(() => {
        expect(clickOutside).toHaveBeenCalled()
        expect(beforeOpen).toHaveBeenCalled()
        expect(opened).toHaveBeenCalled()
        expect(beforeClose).toHaveBeenCalled()
        expect(closed).toHaveBeenCalled()
        done()
      })
    })

    it('stop beforeOpen', async done => {
      const { wrapper } = await createClosedModal(
        {},
        {
          'before-open'(event) {
            event.stop()
          }
        }
      )
      wrapper.setProps({ value: true })
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(false)
        done()
      })
    })

    it('stop beforeClose', async done => {
      const { wrapper } = await createOpenedModal(
        {},
        {
          'before-close'(event) {
            event.stop()
          }
        }
      )
      wrapper.setProps({ value: false })
      afterTransition(() => {
        expect(wrapper.find('.vfm').isVisible()).toBe(true)
        done()
      })
    })

    it('avoid modal reset params after modal was closed', async done => {
      const { wrapper, $vfm } = await createClosedModal(
        {
          name: 'testModal'
        },
        {
          closed(event) {
            event.stop()
          }
        }
      )
      const params = {
        test: 123
      }
      $vfm.show('testModal', params)
      afterTransition(() => {
        $vfm.hide('testModal')
        afterTransition(() => {
          expect(wrapper.vm.params === params).toBe(true)
          done()
        })
      })
    })
  })
})
