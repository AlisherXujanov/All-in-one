<script setup>
import ContactImg from "@/assets/images/FooterImg/contact-img.png"
import HeadingVue from '@/components/HeadingVue.vue'

const submitForm = (e) => {
  console.log('Form submitted')
}
</script>

<template>
  <div class="contacts-page-wrapper">
    <heading-vue heading="Contact" path="Contact . Pages . Contact page" />

    <div class="contact-details">
      <div class="left">
        <h2>Information About us</h2>
        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
          mattis aliquam,
          malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
          vitae lobortis quis bibendum quam.</p>
        <div class="colors">
          <span class="indigo"></span>
          <span class="red"></span>
          <span class="cyan"></span>
        </div>
      </div>
      <div class="right">
        <h2>Contact Way</h2>
        <div class="different-contacts">
          <div class="contact-way">
            <span class="indigo"></span>
            <p class="text-muted">
              Tel:877 676767
              <br>
              E-Mail: shop@store.com
            </p>
          </div>
          <div class="contact-way">
            <span class="red"></span>
            <p class="text-muted">Support Forum <br> For over 24hr</p>
          </div>
          <div class="contact-way">
            <span class="orange"></span>
            <p class="text-muted">20 Margaret st, London <br> Great britain, 3NM98-LK</p>
          </div>
          <div class="contact-way">
            <span class="green"></span>
            <p class="text-muted">Free standard shipping on all orders.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-form">
      <div class="left">
        <h2>Get In Touch</h2>
        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid velit minus
          architecto voluptas quos alias cupiditate accusantium qui atque!</p>
        <form @submit.prevent="submitForm">
          <div>
            <input id="contact-name" type="text" placeholder="First name*" required>
            <input id="contact-email" type="email" placeholder="Your email" required>
          </div>
          <div>
            <input id="contact-subject" type="text" placeholder="Subject*">
          </div>
          <div>
            <textarea id="contact-message" placeholder="Type your message" rows="8"></textarea>
          </div>
          <div>
            <button>Send Mail</button>
          </div>
        </form>
      </div>
      <div class="right">
        <img :src="ContactImg" alt="Contact Image">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.contacts-page-wrapper {
  h2 {
    color: $dark-blue;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    color: $dark-blue;
    margin-bottom: 20px;
  }

  .contact-details {
    padding: 50px 200px;
    @include grid(2, 1fr, 80px);

    .left {
      .colors {
        @include flex($justify: flex-start);

        span {
          @include circle(25px);

          &.indigo {
            background-color: $violet-blue;
          }

          &.red {
            background-color: $magenta;
          }

          &.cyan {
            background-color: $cyan;
          }
        }
      }
    }

    .right {
      .different-contacts {
        @include grid(2, 1fr, 20px);

        .contact-way {
          @include grid(2, 1fr, 0);
          grid-template-columns: 70px 1fr;

          span {
            @include circle(50px);

            &.indigo {
              background-color: $violet-blue;
            }

            &.red {
              background-color: $magenta;
            }

            &.orange {
              background-color: $orange;
            }

            &.green {
              background-color: $green-light;
            }
          }
        }
      }
    }
  }

  .contact-form {
    padding: 50px 50px 50px 100px;
    @include grid(2, 1fr, 80px);

    .left {
      form {
        div {
          margin-bottom: 20px;
        }

        div:first-child {
          @include grid(2, 1fr, 10px);
        }

        textarea,
        input {
          width: 100%;
          background-color: $light;
          border: 1px solid $text-color-transparent;
          border-radius: 5px;
          padding: 10px 20px;
        }

        button {
          padding: 10px 35px;
          border-radius: 5px;
          cursor: pointer;
          color: $light;
          background-color: $red;
        }
      }
    }
  }

  @media (max-width: $xx-large) {
    .contact-details {
      padding: 50px 100px;
    }
  }

  @media (max-width: $x-large) {
    .contact-details {
      grid-template-columns: 1fr 2fr;
    }

    .contact-form {
      padding: 50px 30px 50px 100px;
      @include grid(2, 1fr, 50px);

      .right {
        img {
          width: 650px;
        }
      }
    }
  }

  @media (max-width: $large) {
    .contact-details {
      padding: 50px 10px 50px 100px;
      gap: 60px;
    }

    .contact-form {
      padding: 50px 0px 100px 100px;
      @include grid(2, 1fr, 50px);

      .right {
        img {
          width: 550px;
        }
      }
    }
  }

  @media (max-width: $medium) {
    .contact-details {
      padding: 30px;
      grid-template-columns: 1fr;
    }

    .contact-form {
      padding: 30px;
      @include grid(1, 1fr, 50px);
      @include flex(center, center);

      .right {
        img {
          scale: 1;
        }
      }
    }
  }

  @media (max-width: $small) {
    .contact-details {
      .right {
        .different-contacts {
          grid-template-columns: 1fr;
        }
      }
    }

    .contact-form {

      .right {
        img {
          scale: 0.8;
        }
      }
    }
  }
}
</style>
