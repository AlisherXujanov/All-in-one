<script setup>
import { computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'


const createMode = ref(false)
const editMode = ref(false)

const dishForm = reactive({
    name: '',
    description: '',
    price: '',
    id: '',
})


const store = useStore()
const count = computed(() => store.state.count)

async function fetchDishes() {
    await store.dispatch('fetchDishes')
}

const dishes = computed(() => store.state.dishes)

// CRUD  => Create, Read, Update, Delete
// 1. Create => POST
// 2. Read   => GET
// 3. Update => PUT
// 4. Delete => DELETE
async function submitForm(e) {
    for (let k in dishForm) {
        if (dishForm[k] === '') {
            alert('Please fill all the fields')
            return
        }
    }

    if (editMode.value == true) {
        await store.dispatch('editDish', dishForm)
    } else if (createMode.value == true) {
        await store.dispatch('createDish', dishForm)
    }

    dishForm.name = ''
    dishForm.description = ''
    dishForm.price = ''

    await fetchDishes()
    createMode.value = false
    editMode.value = false
}


function editDishFn(dish) {
    dishForm.name = dish.name
    dishForm.description = dish.description
    dishForm.price = dish.price
    dishForm.id = dish.id
    editMode.value = true
}

</script>

<template>
    <div class="about-page-wrapper">
        <h1 class="page-title">ABOUT</h1>

        <div class="box">
            <h1>Count: {{ count }}</h1>
            <button @click="() => store.commit('decrement', { amount: 2 })">- Decrement</button>
            <button @click="() => store.commit('increment', { amount: 4 })">+ Incement</button>
            <hr>
            <button @click="fetchDishes">Fetch dishes</button>
            <button
                @click="(e) => { createMode = !createMode; editMode = false }"
                :class="{ 'active': createMode || editMode }"
            >
                {{ createMode || editMode ? 'Hide form' : 'Create dish' }}
            </button>


            <div v-if="createMode || editMode">
                <form @submit.prevent="submitForm" class="dish-form">
                    <h2>{{ editMode ? 'Edit dish' : 'Create dish' }}</h2>
                    <input type="text" placeholder="Dish name" v-model="dishForm.name">
                    <textarea placeholder="Dish description" v-model="dishForm.description"></textarea>
                    <input type="number" placeholder="Dish price" v-model="dishForm.price">
                    <button type="submit">
                        {{ editMode ? 'Edit dish' : 'Create dish' }}
                    </button>
                </form>
            </div>
            <div v-else>
                <div v-if="dishes.length > 0">
                    <ul>
                        <li v-for="dish in dishes" :key="dish.id">
                            <button class="edit-btn" @click="editDishFn(dish)">✍🏻</button>
                            <h3>{{ dish.name }}</h3>
                            <p>{{ dish.description }}</p>
                            <p>{{ dish.price }}</p>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <h3>No dishes found</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-page-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .box {
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #333;
        height: 300px;
        overflow: auto;

        ul {
            margin-top: 20px;
        }

        li {
            padding: 10px;
            border-bottom: 1px solid #ccc;
            color: snow;
            background-color: #111;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        button {
            &.active {
                background-color: $green;
                color: snow;
            }
        }

        form {
            @include flex(column, $gap: 10px);

            input,
            button,
            textarea {
                width: 100%;
                display: block;
                padding: 10px 20px;
                border-radius: 5px;
            }
        }

        .edit-btn {
            background-color: #cabfbf80;
            width: 20px;
            height: 40px;
            border-radius: 50%;
            border: none;
            color: snow;
            cursor: pointer;
            @include flex();
            float: right;

            &:hover {
                background-color: $green;
            }
        }
    }
}
</style>
