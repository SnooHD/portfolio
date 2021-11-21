<template>
<div class="relative shadow-window overflow-hidden rounded-md">
    <div class="bg-dark w-full py-3 px-4 flex space-x-2">
        <div v-for="i in 3" :key="`window-traffic-light-${i}`" class="rounded-full bg-dark-light w-2.5 h-2.5"></div>
    </div>
    <slot />
</div>
</template>