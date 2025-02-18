<script setup>
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { reactive, ref } from 'vue';



const booking = reactive({
    fullname: '',
    count_of_people: 1,
    date: ''
});
const disabled = ref(false)
const loading = ref(false)


async function handleSubmit(e) {
    const URL = 'http://localhost:3000/reservations'
    const newReservation = {
        fullname: booking.fullname,
        count_of_people: booking.count_of_people,
        date: booking.date
    }
    disabled.value = true
    loading.value = true
    // const response = await fetch(URL, {})

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReservation)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("OOps! Something went wrong")
        console.log(error)
    }

    disabled.value = false
    loading.value = false
    booking.fullname = ''
    booking.count_of_people = 1
    booking.date = ''
};
</script>

<template>
    <div class="about-page-wrapper">
        <div class="left-book">
            <h1 class="page-title">Book a table</h1>
        </div>

        <div v-if="loading" class="loading-spinner">
            <LoadingSpinner />
        </div>

        <div class="right-book">
            <h1>Reservation</h1>
            <p>Secure your spot at Qitchen, where exceptional sushi and a <br> remarkable dining experience await.</p>
            <form @submit.prevent="handleSubmit" class="form">
                <input type="text" v-model="booking.fullname" placeholder="Full Name" required>
                <input type="number" v-model="booking.count_of_people" placeholder="Number of guests" min="1" required>
                <input type="date" v-model="booking.date" required>
                <button type="submit" v-on:click.enter="handleSubmit" :disabled="disabled">BOOK NOW</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-page-wrapper {
    height: 100vh;
    width: 100%;
    padding: 20px;
    @include grid(2);

    @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    .left-book {
        padding: 50px;
        background: url(../assets/Images/ratatouillePics/Book.png);
        background-size: cover;
        background-position: center;
        background-color: rgb(0, 0, 0, 0.2);
        border-radius: 20px;

    }

    .right-book {
        border: $middle solid 1px;
    }

    .right-book h1 {
        margin-top: 5%;
        color: $heading-color;
        font-family: "Forum", serif;
        font-size: 3em;
        font-weight: lighter;
        margin-bottom: 30%;
        text-align: center;
    }

    .right-book p {
        font-family: "Open Sans", serif;
        color: $heading-color;
        text-align: center;
        font-size: large;
        position: relative;
        bottom: 27%;
    }

    input,
    button {
        display: block;
        margin: 10px auto;
        position: relative;
        bottom: 200px;
        width: 65%;
        padding: 15px;
        border-radius: 10px;
        border: solid 1px $middle;
        background-color: $midnight;

        &:disabled {
            background-color: $middle;
            cursor: not-allowed;
        }
    }

    input {
        color: $middle;
    }

    button {
        background-color: $heading-color;
        border: none;
        color: $brown;
        font-size: large;
    }


    .loading-spinner {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 100vh;
        background-color: rgb(0,0,0,  0.8);
        color: white;
        @include flex();
    }
}
</style>
