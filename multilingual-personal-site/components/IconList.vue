<template>
  <div class="icon-list">
    <icon-list-item v-for="item in listItems" :key="item.id" :icon="item.icon" :text="item.text" />
  </div>
</template>

<script>
import IconListItem from '~/components/IconListItem.vue'

export default {
  components: {
    IconListItem
  },
  props: {
    listItems: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
