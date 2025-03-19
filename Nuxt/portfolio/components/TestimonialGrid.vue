<template>
  <section
    class="testimonials-section"
    id="testimonials"
  >
    <h2 class="section-title">Testimonials</h2>
    <div class="section-content">
      <client-only>
        <Swiper
          :modules="[Navigation, Pagination]"
          :loop="true"
          :grabCursor="true"
          :spaceBetween="25"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :navigation="true"
          :breakpoints="{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          class="swiper"
        >
          <SwiperSlide
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial"
          >
            <img
              src="assets/images/user.png"
              alt="User"
              class="user-image"
            />
            <h3 class="name">{{ testimonial.name }}</h3>
            <i class="feedback">"{{ testimonial.feedback }}"</i>
          </SwiperSlide>
        </Swiper>
      </client-only>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

// Testimonials-Daten
const testimonials = ref([
  { name: "Max Mustermann", feedback: "Super Service! Alles perfekt!" },
  { name: "Lisa Müller", feedback: "Mega tolle Arbeit, vielen Dank!" },
  { name: "John Doe", feedback: "Absolut empfehlenswert, gerne wieder!" }
])
</script>

<style scoped>
/* Testimonials section */
.testimonials-section {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 50px 0 100px;
  background: var(--light-blue-color);
}

.testimonials-section .section-title {
  margin-top: 10vh;
}

.testimonials-section .testimonial {
  user-select: none;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.testimonials-section .testimonial .user-image {
  width: 180px;
  height: 180px;
  margin-bottom: 50px;
  object-fit: cover;
  border-radius: var(--border-radius-circle);
}

.testimonials-section .testimonial .name {
  margin-bottom: 16px;
  font-size: var(--font-size-m);
}

.testimonials-section .testimonial .feedback {
  line-height: 25px;
}

/* Swiper Styles */
.testimonials-section .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  opacity: 1;
  background: var(--secondary-color);
}

.testimonials-section .swiper-slide-button {
  color: var(--secondary-color);
  margin-top: 50px;
  transition: 0.3s ease;
}

.testimonials-section .swiper-slide-button:hover {
  color: var(--primary-color);
}

.testimonials-section .swiper {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.testimonials-section .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
}

.testimonials-section .swiper-wrapper {
  display: flex;
  align-items: stretch;
}

@media screen and (max-width: 900px) {
  .testimonial-section {
    height: auto;
  }
}

@media screen and (max-width: 640px) {
  .testimonials-section .slider-wrapper {
    margin: 0 0 30px;
  }

  .testimonials-section .swiper-slide-button {
    display: none;
  }
}

@media (max-width: 768px) {
  .testimonials-section .swiper-slide {
    padding: 10px;
  }

  .testimonials-section .testimonial {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .testimonials-section .testimonial {
    max-width: 100%;
  }
}
</style>
