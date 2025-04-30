<script setup>
import HeadingVue from '@/components/HeadingVue.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { BsArrowRight } from '@kalimahapps/vue-icons'

const store = useStore()

const features = [
  { title: 'Quality Products', description: 'We source only the finest materials and partner with skilled artisans to create exceptional pieces.' },
  { title: 'Sustainable Fashion', description: 'Our commitment to sustainability drives us to use eco-friendly materials and ethical production methods.' },
  { title: 'Customer First', description: 'We prioritize customer satisfaction with excellent service and hassle-free returns.' },
  { title: 'Global Reach', description: 'Serving customers worldwide with fast shipping and local support.' }
]

const stats = [
  { number: '10K+', label: 'Happy Customers' },
  { number: '500+', label: 'Products' },
  { number: '50+', label: 'Countries' },
  { number: '24/7', label: 'Support' }
]
</script>

<template>
  <div class="about-page">
    <heading-vue heading="About Us" path="Home . Pages . About Us" />

    <div class="about-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-text">
          <h2>Welcome to Glamour</h2>
          <p>Your destination for premium fashion and lifestyle products. We believe in bringing you the latest trends
            while maintaining the highest standards of quality and sustainability.</p>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop"
            alt="Glamour Fashion Store" />
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2>Why Choose Us</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <BsArrowRight class="feature-icon" />
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <h3>{{ stat.number }}</h3>
          <p>{{ stat.label }}</p>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <h2>Our Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"
              alt="Team Member 1" />
            <h3>Sarah Johnson</h3>
            <p>Founder & CEO</p>
          </div>
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
              alt="Team Member 2" />
            <h3>Michael Chen</h3>
            <p>Creative Director</p>
          </div>
          <div class="team-member">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop"
              alt="Team Member 3" />
            <h3>Emma Davis</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";
.about-page {
  .about-content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .hero-section {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-top: 2rem;

    .hero-text {
      h2 {
        color: $dark-blue;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
      }

      p {
        color: $text-color-transparent;
        font-size: 1.1rem;
        line-height: 1.6;
      }
    }

    .hero-image {
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .features-section {
    max-width: 1440px;
    margin: 0 auto;

    h2 {
      color: $dark-blue;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          color: $violet;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        h3 {
          color: $dark-blue;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        p {
          color: $text-color-transparent;
          line-height: 1.6;
        }
      }
    }
  }

  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    background: $violet-lighter;
    padding: 3rem;
    border-radius: 8px;

    .stat-card {
      text-align: center;

      h3 {
        color: $violet;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: $text-color-transparent;
        font-size: 1.1rem;
      }
    }
  }

  .team-section {
    h2 {
      color: $dark-blue;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .team-member {
        text-align: center;

        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin-bottom: 1rem;
          object-fit: cover;
        }

        h3 {
          color: $dark-blue;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        p {
          color: $text-color-transparent;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about-page {
    padding: 1rem;

    .hero-section {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .stats-section {
      padding: 2rem;
    }
  }
}
</style>
