import Vue, { PluginObject, VNodeData, Component, AsyncComponent } from 'vue'
import './lib'

export class VueFinalModalComponant extends Vue {
  $refs: {
    vfmContainer: HTMLDivElement,
    vfmContent: HTMLDivElement
  }
}

export interface DynamicModalOptions {
  /**
   * modal component
   */
  component?: string | Component | AsyncComponent
  /**
   * bind props and attrs to modal
   */
  bind?: {[key: string]: any}
  /**
   * register events to modal
   */
  on?: VNodeData['on']
  /**
   * modal component slot
   * 
   * @example
   * ```js
   * {
   *   slot: {
   *     default: {
   *       component: 'RegistedComponentName'
   *       bind: {
   *         yourPropsKey: propsValue
   *       }
   *     }
   *   }
   * }
   * ```
   */
  slots?: {
    [key: string]: {
      component: string | Component | AsyncComponent
      bind: {[key: string]: any}
    }
  }
}

export interface VueFinalModalProperty {
  readonly openedModals: VueFinalModalComponant[]
  readonly modals: VueFinalModalComponant[],
  get(name: string): VueFinalModalComponant | undefined

  show(name: string, params?: any): void
  show(options: DynamicModalOptions, params?: any): void

  hide(name: string): void
  hideAll(): void
  toggle(name: string, params?: any): void
  toggle(name: string, show?: boolean, params?: any): void
}


declare module 'vue/types/vue' {
  interface Vue {
    readonly $vfm: VueFinalModalProperty
  }
}

export interface VfmOptions {
  componentName: string,
  key: string
}

declare const VfmPlugin: () => PluginObject<VfmOptions>

export default VfmPlugin