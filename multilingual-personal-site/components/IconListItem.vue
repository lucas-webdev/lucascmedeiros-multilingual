<template>
  <div class="icon-list-item">
    <span
      :class="icon"
      class="icon-list-item__text"
    />
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default () {
        return ''
      }
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
</style>
