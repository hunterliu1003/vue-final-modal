---
title: Events
description: 'Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.'
category: Guide
position: 5
fullscreen: true
---

**Example**:

<v-events></v-events>

<show-code open class="pt-4">

```vue
<template>
  <vue-final-modal
    @click-outside="clickOutside"
    @before-open="beforeOpen"
    @opened="opened"
    @before-close="beforeClose"
    @closed="closed"
  >
    ...modal content
  </vue-final-modal>
</template>
```

</show-code>

## `@click-outside`

- Emits while modal container on click.

<alert>

If prop [`clickToClose`](/guide/properties#clicktoclose) is `false`, the event will still be emitted.

</alert>

## `@before-open`

- Emits while modal is still invisible, but before transition starting.

<alert>Further opening of the modal can be blocked from this event listener by calling `event.stop()`.</alert>

## `@opened`

- Emits after modal became visible and transition ended.

## `@before-close`

- Emits before modal is going to be closed.

<alert>Further closing of the modal can be blocked from this event listener by calling `event.stop()`.</alert>

## `@closed`

- Emits right before modal is destroyed.

<alert>Further after the modal was closed, you can avoid the modal to reset the [`params`](/guide/params) to empty object by calling `event.stop()`.</alert>

## `@drag:start`

- Emits on drag start.

## `@drag:move`

- Emits on drag move.

## `@drag:end`

- Emits on drag end.