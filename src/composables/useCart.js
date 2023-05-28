import {ref, computed, reactive} from "vue";

const cart = reactive([]);
const state = ref({panier: 5});
const mavar = ref(0);
export function useCart() {
    const showObj = ()=>{
        for (let i = 0; i<cart.value.length; i++) {
            console.log(cart.value[i])
        }
    }

    function add(o) {
        cart.push(o)
        console.log(o)
    }

    const incremente = ()=>{
        mavar.value = 10
        console.log(mavar.value)
    }

    return{
        cart: computed(() => cart),
        state: computed(() => state.value),
        mavar: mavar,
        showObj,
        add,
        incremente
    }
}


