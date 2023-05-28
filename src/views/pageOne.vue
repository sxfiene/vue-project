<template>
    <div class="page1">
    <button @click="add(obj1)">
        Add object1
    </button>

    <button @click="add(obj2)">
        Add object2
    </button>

    <button @click="add(obj3)">
        Add object3
    </button>

        <button @click="incremente">
            INC
        </button>


        {{ cart }}
        <br>
        {{ state }}
        <br>
        {{ mavar }}

    </div>
</template>

<script setup>
import {useCart} from "@/composables/useCart";

const {cart, state, add, incremente, mavar} = useCart();
const obj1 = {"titre": "t1", "desc": "desc1"}
const obj2 = {"titre": "t2", "desc": "desc2"}
const obj3 = {"titre": "t3", "desc": "desc3"}


</script>

<style scoped>
    button{
        border : 1px solid black;
        border-radius: 5px;
        padding: 10px;
    }
</style>