<template>
    <button @click="showObj()">
        Show object
    </button>
    {{ cart }}
    <br>
    {{ state }}
    <br>
    {{ mavar }}
</template>

<script setup>
import {useCart} from "@/composables/useCart";

const {cart, state, showObj, mavar} = useCart();

</script>

<style scoped>
</style>