<template>
  <section
    class="portfolio-section"
    id="portfolio"
  >
    <h2 class="section-title">Portfolio</h2>
    <div class="section-content">
      <div class="portfolio-item">
        <div class="portfolio-item-inner">
          <img
            src="assets/images/portfolio-item.jpg"
            alt="Project 1"
          >
          <div class="overlay">
            <div class="text">
              <h3>Firmenname</h3>
              <p>Webseite</p>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-item-inner">
          <img
            src="assets/images/portfolio-item.jpg"
            alt="Project 2"
          >
          <div class="overlay">
            <div class="text">
              <h3>Firmenname</h3>
              <p>Webseite</p>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-item-inner">
          <img
            src="assets/images/portfolio-item.jpg"
            alt="Project 3"
          >
          <div class="overlay">
            <div class="text">
              <h3>Firmenname</h3>
              <p>Webseite</p>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-item-inner">
          <img
            src="assets/images/portfolio-item.jpg"
            alt="Project 3"
          >
          <div class="overlay">
            <div class="text">
              <h3>Firmenname</h3>
              <p>Webseite</p>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-item-inner">
          <img
            src="assets/images/portfolio-item.jpg"
            alt="Project 3"
          >
          <div class="overlay">
            <div class="text">
              <h3>Firmenname</h3>
              <p>Webseite</p>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-item-inner">
          <img
            src="assets/images/portfolio-item.jpg"
            alt="Project 3"
          >
          <div class="overlay">
            <div class="text">
              <h3>Firmenname</h3>
              <p>Webseite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioGrid'
}
</script>


<style scoped>
.portfolio-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
  height: auto;
}

.portfolio-section .section-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* Responsives Grid */
  gap: 30px;
  /* Abstand zwischen Grid-Inhälte */
  max-width: 1200px;
  /* Adjust as needed */
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

.portfolio-item {
  position: relative;
  overflow: hidden;
}

.portfolio-item-inner {
  position: relative;
  width: 100%;
  padding-top: 100%;
}

.portfolio-item-inner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s ease;
}

.portfolio-item-inner:hover img {
  transform: scale(1.05);
  /* Zoom effect */
}

.portfolio-item-inner .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(36, 59, 83, 0.5);
  /* leicht Transparenter Hinterhrund */
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio-item-inner:hover .overlay {
  opacity: 1;
}

.portfolio-item-inner .overlay .text {
  color: #fff;
  text-align: center;
}

.portfolio-item-inner .overlay .text h3 {
  font-size: var(--font-size-l);
}

.portfolio-item-inner .overlay .text p {
  font-size: var(--font-size-s);
}

@media screen and (max-width: 1024px) {
  .portfolio-section .portfolio-list {
    gap: 60px;
  }

  .portfolio-section .portfolio-list .portfolio-item {
    width: calc(100% / 3 - 60px);
  }

  .portfolio-section {
    height: auto;
  }
}

@media screen and (max-width: 900px) {
  .portfolio-section {
    height: auto;
  }

  .portfolio-section .portfolio-list {
    gap: 30px;
  }

  .portfolio-section .portfolio-list .portfolio-item {
    width: calc(100% / 2 - 30px);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .portfolio-section .portfolio-list .portfolio-item .portfolio-image {
    margin-top: 25px;
    max-width: 200px;
  }
}

@media screen and (max-width: 640px) {

  .portfolio-section .portfolio-list .portfolio-item,
  .gallery-section .gallery-list .gallery-item {
    width: 100%;
  }

  .portfolio-section .portfolio-list {
    gap: 60px;
  }
}
</style>
