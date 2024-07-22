<template>
  <span
    class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-red-600/10"
    ><a :href="path">{{ title }}</a></span
  >
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  path: string
}>()
</script>
