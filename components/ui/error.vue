<template>
    <div :class="[
        'w-5 h-5 absolute right-25px -translate-y10 transition-opacity group',
        active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        error.type === 'message' ? 'top-.11' : 'top-.5'
    ]">
        <div :class="[
            error.trigger ? 'transform-balloon-active opacity-100' : 'transform-balloon-closed',
            'absolute bottom-full w-32 px-2 py-3 rounded shadow text-left opacity-0 block pointer-events-none transition-800 transition-opacity-transform bg-dark',
            'group-hover:transform-balloon-active group-hover:opacity-100 group-hover:pointer-events-auto',
            'after:empty-content after:absolute after:bottom-0 after:left-.5 after:transform-balloon-triangle after:w-0 after:h-0 after:border-triangle'
        ]">
            <p class="text-tiny text-white">{{error.message}}</p>
        </div>
        <div :class="{shake: error.trigger}">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve">
                <g fill="#de0707">
                    <path d="M11,22c6.1,0,11-4.9,11-11S17.1,0,11,0S0,4.9,0,11C0,17.1,4.9,22,11,22z M11,2.2c4.9,0,8.8,4,8.8,8.8c0,4.9-4,8.8-8.8,8.8
                        c-4.9,0-8.8-4-8.8-8.8C2.2,6.1,6.1,2.2,11,2.2z"/>
                    <path d="M11,13.4c0.6,0,1.1-0.5,1.1-1.1V6.4c0-0.6-0.5-1.1-1.1-1.1S9.9,5.8,9.9,6.4v5.8C9.9,12.9,10.4,13.4,11,13.4z"/>
                    <path d="M11,16.7c0.6,0,1.1-0.5,1.1-1.1v-0.2c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1v0.2C9.9,16.2,10.4,16.7,11,16.7z"/>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showError: false
        }
    },
    props: ['error', 'active']
}
</script>