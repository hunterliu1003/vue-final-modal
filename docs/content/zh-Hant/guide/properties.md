---
title: 屬性（Properties）
description: 'Vue Final Modal 是一個無渲染、可堆疊、可拆卸且輕巧的 modal 元件。'
category: 導覽
position: 4
---

## `name`

- 型別： `String`
- 預設： `null`

這個 modal 的名字，用於使用 [API](/zh-Hant/api)  `$vfm.show(name)`、`$vfm.hide(name)` 等。

<alert>如果要使用 `$vfm.show(name)` 打開 modal，`v-model` 是必須給的。</alert>

## `ssr`

- 型別： `Boolean`
- 預設： `true`

啟用伺服器渲染（Server-Side Rendering）。

## `classes`

- 型別： `[String, Object, Array]`
- 預設： `''`

針對 modal 的容器（container）自訂 class。

## `contentClass`

- 型別： `[String, Object, Array]`
- 預設： `''`

針對 modal 的內容（content）自訂 class。

## `overlayClass`

- 型別： `[String, Object, Array]`
- 預設： `''`

針對 modal 的外層（overlay）自訂 class。

## `styles`

- 型別： `[String, Object, Array]`
- 預設： `''`

針對 modal 的容器（container）自訂樣式。

## `contentStyle`

- 型別： `[Object, Array]`
- 預設： `{}`

針對 modal 的內容（content）自訂樣式。

## `overlayStyle`

- 型別： `[String, Object, Array]`
- 預設： `''`

針對 modal 的外層（overlay）自訂樣式。

## `transition`

- 型別： `[String, Object]`
- 預設： `'vfm'`

設定 modal 的容器（container）轉場 CSS。

<show-code text="Show default transition CSS">

```css
.vfm-enter-active,
.vfm-leave-active {
  transition: opacity 0.2s;
}
.vfm-enter,
.vfm-leave-to {
  opacity: 0;
}
```

</show-code>

<show-code text="Show example transition Object" class="pt-2">

```vue
<template>
  <vue-final-modal
    :transition="{
      'enter-active-class': 'transition duration-200 ease-in-out transform',
      'enter-class': 'translate-y-full',
      'enter-to-class': 'translate-y-0',
      'leave-active-class': 'transition duration-200 ease-in-out transform',
      'leave-to-class': 'translate-y-full',
      'leave-class': 'translate-y-0'
    }"
  >
    ...modal content
  </vue-final-modal>
</template>
```

</show-code>

## `overlayTransition`

- 型別： `[String, Object]`
- 預設： `'vfm'`

設定 modal 的外層（overlay）轉場 CSS。

<show-code text="Show default transition CSS">

```css
.vfm-enter-active,
.vfm-leave-active {
  transition: opacity 0.2s;
}
.vfm-enter,
.vfm-leave-to {
  opacity: 0;
}
```

</show-code>

<show-code text="Show example transition Object" class="pt-2">

```vue
<template>
  <vue-final-modal
    :transition="{
      'enter-active-class': 'transition duration-200 ease-in-out transform',
      'enter-class': 'translate-y-full',
      'enter-to-class': 'translate-y-0',
      'leave-active-class': 'transition duration-200 ease-in-out transform',
      'leave-to-class': 'translate-y-full',
      'leave-class': 'translate-y-0'
    }"
  >
    ...modal content
  </vue-final-modal>
</template>
```

</show-code>

## `lockScroll`

- 型別： `Boolean`
- 預設： `true`

當 modal 起打開時，禁用 body 上的捲軸。

<alert>使用了 [`body-scroll-lock`](https://github.com/willmcpo/body-scroll-lock) 來實作這個功能。 </alert>

## `hideOverlay`

- 型別： `Boolean`
- 預設： `false`

隱藏 modal 的外層（overlay）。

## `clickToClose`

- 型別： `Boolean`
- 預設： `true`

當點擊 modal 的外層（overlay）時，是否關閉 modal。

## `escToClose`

- 型別： `Boolean`
- 預設： `false`

是否能透過按下 `esc` 鍵關閉 modal。

## `preventClick`

- 型別： `Boolean`
- 預設： `false`


外層（overlay）的點擊事件不會被禁用。<br />
設定 `vue-final-modal` 的根元素的樣式是否添加 `pointer-events: none;`。

## `attach`

- 型別： `Any`
- 預設： `false`

使該元件放進指定 DOM 中。

1. 設定為 `false` 則不會啟用這項功能。
2. 如果設定的是字串，必須是 `querySelector` 合法參數的任何字串，例如：`'body'`、`'#app'`。
3. 如果設定的是物件，必須是有效的 `Node` 物件，例如：`this.$refs.container`。

## `zIndexAuto`

- 型別： `Boolean`
- 預設： `true`

根據 `zIndexBase` 的值自動綁定到 `z-index` 上，並且每當往上堆疊一個 modal 就會加 `2`。如果 `zIndex` 有被設定，`zIndexAuto` 與 `zIndexBase` 則會被忽略。


## `zIndexBase`

- 型別： `[String, Number]`
- 預設： `1000`

根據 `zIndexBase` 的值自動計算 `z-index`。如果 `zIndex` 有被設定，`zIndexAuto` 與 `zIndexBase` 則會被忽略。

## `zIndex`

- 型別： `[String, Number]`
- 預設： `false`

針對該 modal 指定特定的 `z-index`。如果 `zIndex` 有被設定，`zIndexAuto` 與 `zIndexBase` 則會被忽略。

## `focusRetain`

- 型別： `Boolean`
- 預設： `true`

在 modal 進到畫面後，將焦點放到 `vfm__container` 上。

## `focusTrap`

- 型別： `Boolean`
- 預設： `false`

啟動焦點限制（focus trap）則表示只有在 modal 中的輸入框（input）與按鈕（buttons）可以裡用 Tab 鍵去切換焦點（用了非常簡單的焦點限制工具實現）。

## `drag`

- 型別： `Boolean`
- 預設： `false`

啟動可拖曳的 modal。

## `fitParent`

- 型別： `Boolean`
- 預設： `false`

拖曳不超過 `.vfm__container` 的範圍。

## `dragSelector`

- 型別： `[Boolean, String]`
- 預設： `false`

只有透過 `querySelectorAll(string)` 選出的元素可點擊拖曳 modal.

## `keepChangedStyle`

- 型別： `Boolean`
- 預設： `false`

modal 關閉後保留 drag 和 resize 更改的樣式。

## `resizeDirections`

- 型別： `Array`
- 預設： `[]`
- 合法值: `['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']`

設置可調整 modal 大小的方向。
