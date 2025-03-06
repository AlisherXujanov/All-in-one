<script setup>
import Img1 from "../assets/images/FooterImg/footer-img-1.png";
import Img2 from "../assets/images/FooterImg/footer-img-2.png";
import Img3 from "../assets/images/FooterImg/footer-img-3.png";

// Footer navigation data
const footerSections = [
  {
    title: 'Categories',
    links: [
      { text: 'Category 1', to: '#' },
      { text: 'Category 2', to: '#' },
      { text: 'Category 3', to: '#' },
      { text: 'Category 4', to: '#' },
    ]
  },
  {
    title: 'Customer Care',
    links: [
      { text: 'Help Center', to: '#' },
      { text: 'How to Buy', to: '#' },
      { text: 'Returns & Refunds', to: '#' },
      { text: 'Contact Us', to: '#' },
    ]
  },
  {
    title: 'Pages',
    links: [
      { text: 'Home', to: '#' },
      { text: 'About', to: '#' },
      { text: 'Shop', to: '#' },
      { text: 'Contact', to: '#' },
    ]
  }
];

const socialImages = [
  { src: Img1, alt: 'Social 1', link: null },
  { src: Img2, alt: 'Instagram', link: 'https://www.instagram.com/olimxon__313/' },
  { src: Img3, alt: 'Social 3', link: null }
];
</script>

<template>
  <footer>
    <div class="footer">
      <div class="description">
        <!-- Newsletter Section -->
        <div class="newsletter">
          <h1>Brand Name</h1>
          <div class="subscribe">
            <input class="email" type="email" placeholder="Enter your email" aria-label="Email subscription" />
            <button class="sign-up">Sign Up</button>
          </div>
          <address>
            <span>Contact Info</span>
            123 Main Street, City, Country
          </address>
        </div>

        <!-- Navigation Sections -->
        <div class="footer-nav">
          <div v-for="(section, index) in footerSections" :key="index" class="footer-section">
            <h4>{{ section.title }}</h4>
            <ul>
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <RouterLink :to="link.to">{{ link.text }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Section -->
    <div class="social">
      <div class="copyright">© {{ new Date().getFullYear() }} All Rights Reserved</div>
      <div class="social-icons">
        <div v-for="(image, index) in socialImages" :key="index">
          <a v-if="image.link" :href="image.link" target="_blank" rel="noopener noreferrer">
            <img :src="image.src" :alt="image.alt" />
          </a>
          <img v-else :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// Variables
$newsletter-padding-desktop: 55px 190px 0px;
$newsletter-padding-tablet: 40px 100px;
$newsletter-padding-mobile: 20px;

.footer {
  background-color: #EEEFFB;
  padding: $newsletter-padding-desktop;
  color: $light-blue;

  .description {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 30px;
  }
}

// Newsletter Styles
.newsletter {
  h1 {
    color: $black;
    font-size: 35px;
    margin-bottom: 20px;
  }

  address {
    margin: 30px 15px;
    font-style: normal;

    span {
      display: block;
      margin: 10px 0;
    }
  }

  .subscribe {
    display: flex;
    gap: 10px;
    margin: 15px 0;
  }

  .email {
    padding: 17px;
    border: none;
    border-radius: 5px;
    background-color: #fff;

    &:focus {
      outline: 4px solid rgba(251, 46, 134, 0.2);
      border-color: $red;
    }
  }

  .sign-up {
    padding: 17px;
    border: none;
    border-radius: 5px;
    background-color: $red;
    color: $light;
    cursor: pointer;
    transition: background-color 0.3s ease;

    @include darken_bg_on_hover($red);
  }
}

// Footer Navigation Styles
.footer-nav {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  flex-wrap: wrap;

  .footer-section {
    flex: 1;
    min-width: 150px;

    h4 {
      margin-bottom: 30px;
      color: $black;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 20px;

        a {
          color: #8A8FB9;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: $red;
          }

          &:active {
            color: blue;
          }
        }
      }
    }
  }
}

// Social Section Styles
.social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background-color: $violet;
  padding: 5px 15px;
  color: $violet-light;
  text-align: center;

  .social-icons {
    @include flex();

    img {
      cursor: pointer;
      transition: transform 0.3s ease;
      margin: 0 10px;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

// Responsive Styles
@media (max-width: $x-large) {
  .footer {
    padding: $newsletter-padding-tablet;

    .description {
      grid-template-columns: 1fr 1.5fr;
    }

    .newsletter h1 {
      font-size: 30px;
    }
  }
}

@media (max-width: $large) {
  .footer {
    padding: 30px 50px;

    .description {
      grid-template-columns: 1fr 1fr;
    }

    .newsletter h1 {
      font-size: 28px;
    }

    .footer-nav {
      font-size: 14px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
  }
}

@media (max-width: $medium) {
  .footer {
    padding: $newsletter-padding-mobile;

    .description {
      grid-template-columns: 1fr;
    }

    .newsletter h1 {
      font-size: 24px;
    }
  }
}

@media (max-width: $small) {
  .footer {
    padding: 10px;

    .newsletter h1 {
      font-size: 20px;
    }

    .footer-nav {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  .social {
    grid-template-columns: 1fr;
    gap: 15px;

    img {
      width: 30px;
      height: 30px;
      margin: 5px;
    }
  }
}
</style>
