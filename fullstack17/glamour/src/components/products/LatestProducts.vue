<script setup>
import { reactive } from 'vue';

// defineProps({
//   products: {
//     type: Array,
//     required: true
//   }
// })

const products = reactive([
    { id: 1, name: "Comfort Handy Craft", price: 42, oldPrice: 65, salePrice: 10 },
    { id: 2, name: "Comfort Handy Craft", price: 42, oldPrice: 65, salePrice: 10 },
    { id: 3, name: "Comfort Handy Craft", price: 42, oldPrice: 65, salePrice: 10 },
    { id: 4, name: "Comfort Handy Craft", price: 42, oldPrice: 65, salePrice: 10 },
    { id: 5, name: "Comfort Handy Craft", price: 42, oldPrice: 65, salePrice: 10 },
    { id: 6, name: "Comfort Handy Craft", price: 42, oldPrice: 65, salePrice: 10 },
])
</script>

<template>
    <section class="latest-products">
        <h2>Latest Products</h2>
        <nav class="product-tabs">
            <a href="#">New Arrival</a>
            <a href="#">Best Seller</a>
            <a href="#">Featured</a>
            <a href="#">Special Offer</a>
        </nav>
        <div class="products-grid">
            <div v-for="item in products" :key="item.id" class="product-card">
                <div class="product-image">
                    <span v-if="item.salePrice" class="sale-badge">Sale</span>
                </div>
                <h4>{{ item.name }}</h4>
                <p class="product-price">
                    <span v-if="item.salePrice" class="old-price">{{ item.price }}</span>
                    {{ item.salePrice || item.price }}
                </p>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
.latest-products {
    text-align: center;
    padding: 40px;

    .product-tabs {
        a {
            margin: 0 10px;
            color: #222;
            text-decoration: none;
            font-weight: bold;
        }
    }

    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
        align-items: stretch;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }

        .product-card {
            background: #fff;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            min-height: 100%;

            h4 {
                margin: 10px 0;
            }

            .product-image {
                position: relative;
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    max-height: 150px;
                    object-fit: contain;
                }

                .sale-badge {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: red;
                    color: white;
                    padding: 5px 10px;
                    font-size: 12px;
                    border-radius: 5px;
                }
            }

            .product-price {
                margin-top: auto;

                .old-price {
                    text-decoration: line-through;
                    color: red;
                    margin-right: 5px;
                }
            }
        }
    }
}
