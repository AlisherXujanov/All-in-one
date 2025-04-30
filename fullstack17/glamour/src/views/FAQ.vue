<script setup>
import HeadingVue from '@/components/HeadingVue.vue'
import { reactive } from 'vue'
import emailjs from '@emailjs/browser';

const form = reactive({
  name: '',
  subject: '',
  message: ''
})

function submit(e) {
  emailjs
    .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
      name: form.name,
      subject: form.subject,
      message: form.message,
      time: new Date().toLocaleString()
    }, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED...', err);
      },
    );
}


</script>

<template>
  <div>
    <HeadingVue heading="FAQ" path="Home . Pages . Faq" />
    <main>
      <div class="left">
        <h2>Frequently Asked Questions</h2>
        <p class="bold">What payment methods do you accept?</p>
        <p class="small">We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners.</p>

        <p class="bold">What is your shipping policy?</p>
        <p class="small">We offer free standard shipping on orders over $50. Express shipping is available for an additional fee. Delivery times vary by location, typically 3-7 business days for standard shipping.</p>

        <p class="bold">What is your return policy?</p>
        <p class="small">We offer a 30-day return window for all unused items in their original packaging. Returns are free with our prepaid shipping label. Refunds are processed within 5-7 business days.</p>

        <p class="bold">How do I track my order?</p>
        <p class="small">Once your order ships, you'll receive a tracking number via email. You can use this number to track your package through our website or the courier's tracking system.</p>
      </div>
      <div class="right">
        <form @submit.prevent="submit">
          <h4>Ask a Question</h4>
          <input type="text" placeholder="Your name*" v-model="form.name" name="name">
          <input type="text" placeholder="Subject*" v-model="form.subject" name="subject">
          <textarea cols="30" rows="7" placeholder="Type Your Message*" v-model="form.message" name="message"></textarea>
          <button type="submit">Send Mail</button>
        </form>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  width: 70%;
  margin: 0 auto;
  @include grid(2, 1fr, 20px);
  padding: 100px 0;

  .left {
    margin-right: 40px;

    p.bold {
      font-weight: 600;
      color: $dark-blue;
    }

    h2 {
      margin-bottom: 50px;
      color: $dark-blue;
    }

    p.small {
      font-size: 13px;
      color: $text-color-transparent;
    }
  }

  .right {
    background-color: $violet-lighter;
    padding: 50px 40px;

    input,
    textarea {
      width: 100%;
      margin-bottom: 30px;
      font-size: 14px;
      background-color: $light;
      border-radius: 5px;
      outline: 2px solid $text-color-transparent;
      border: none;
      color: $dark-blue;

    }

    input::placeholder,
    textarea::placeholder {
      color: $text-color-transparent;
    }

    textarea {
      padding: 10px;
      margin-bottom: 23px;
    }

    input {
      padding-left: 10px;
    }

    h4 {
      margin-bottom: 70px;
      color: $dark-blue;
    }

    button {
      border-radius: 5px;
      padding: 10px 35px;
      background-color: $red;
      color: $light;
    }
  }
}

@media (max-width: $large) {
  main {
    width: 80%;
  }
}

@media (max-width: $medium) {
  main {
    width: 90%;
  }
}

@media (max-width: $small) {
  main {
    width: 90%;
    @include grid(1, 1fr, 20px);

  }
}
</style>
