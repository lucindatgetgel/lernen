<template>
    <section class="hero-section">
        <div class="section-content">
            <div class="hero-details">
                <h2 class="title">Hey, ich bin Lucinda</h2>
                <h3 class="subtitle">Webentwicklerin</h3>
                <p class="description">
                    Websites, die funktionieren, performen und begeistern – genau mein Ding. Ich bringe deine Ideen ins Web und sorge für einen reibungslosen Ablauf von Code bis Launch.
                </p>
                <div class="buttons">
                    <a
                        href="#about"
                        class="button about-me"
                    >
                        <NuxtLink to="/about">mehr über mich</NuxtLink>
                    </a>
                    <a
                        href="#contact"
                        class="button contact-us"
                    >
                        <NuxtLink to="/contact">Kontakt</NuxtLink>
                    </a>
                </div>
            </div>
            <div class="hero-image-wrapper">
                <img
                    src="assets/images/lucinda-tgetgel.jpg"
                    alt="Portrait Lucinda Tgetgel"
                    class="hero-image"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style scoped>
.hero-section {
    height: 100vh;
    background: var(--primary-color);
    padding-left: 25px;
}

.hero-section .section-content {
    display: flex;
    padding-top: 40px;
    align-items: center;
    min-height: 100vh;
    justify-content: space-between;
}

.hero-section .hero-details {
    color: var(--white-color);
}

.hero-section .hero-details .title {
    font-size: var(--font-size-xxl);
    color: var(--secondary-color);
    font-family: "Miniver", sans-serif;
}

.hero-section .hero-details .subtitle {
    margin-top: 8px;
    max-width: 70%;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
}

.hero-section .hero-details .description {
    max-width: 70%;
    margin: 24px 0 40px;
    font-size: var(--font-size-m);
}

.hero-section .hero-details .buttons {
    display: flex;
    gap: 23px;
}

.hero-section .hero-details .button {
    padding: 10px 25px;
    display: block;
    border: 2px solid var(--secondary-color);
    border-radius: var(--border-radius-s);
    background: var(--secondary-color);
    color: var(--primary-color);
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    transition: 0.3s ease;
}

.hero-section .hero-details .button a {
    color: var(--white-color);
}

.hero-section .hero-details .button:hover,
.hero-section .hero-details .contact-us {
    color: var(--white-color);
    border-color: var(--white-color);
    background: transparent;
}

.hero-section .hero-details .contact-us:hover {
    color: var(--primary-color);
    background: var(--secondary-color);
    border-color: transparent;
}

.hero-section .hero-image-wrapper {
    width: 1000px;
    height: 420px;
    border-radius: 50%;
    overflow: hidden;
}

.hero-section .hero-image-wrapper .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


@media screen and (max-width: 900px) {

    .hero-section .section-content {
        text-align: center;
        gap: 50px;
        padding: 30px 20px 20px;
        justify-content: center;
        flex-direction: column-reverse;
    }

    .hero-section .hero-details :is(.subtitle, .description),
    .about-section .about-details,
    .contact-section .contact-form {
        max-width: 100%;
    }

    .hero-section .hero-details .buttons {
        justify-content: center;
    }

    .hero-section .hero-image-wrapper {
        width: 250px;
        height: 250px;
    }
}

@media screen and (max-width: 640px) {
    .hero-section .hero-image-wrapper {
        max-width: 80%;
    }
}
</style>
