<template>
  <div>
    <figure class="rounded-xl bg-gray-950 p-8 md:flex md:p-0 dark:bg-slate-800">
      <img
        class="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-xl"
        :src="info.picture"
        alt=""
        width="384"
        height="512"
      />
      <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
        <blockquote>
          <p class="text-lg font-medium text-white"><slot> </slot></p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">{{ info.name }}</div>
          <div class="text-slate-700 dark:text-slate-500">{{ info.fish }}</div>
        </figcaption>
      </div>
    </figure>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  info: {
    name: string
    picture: string
    fish: string
  }
}>()
</script>
