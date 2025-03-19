<template>
    <header>
        <nav class="navbar">
            <a
                href="#"
                class="nav-logo"
            >
                <h2 class="logo-text">
                    <NuxtLink to="/">Lucinda Tgetgel</NuxtLink>
                </h2>
            </a>
            <ul class="nav-menu">
                <button
                    ref="menuCloseButton"
                    id="menu-close-button"
                    class="fas fa-times"
                    aria-label="Menü schliessen"
                ></button>
                <li class="nav-item">
                    <NuxtLink
                        to="/about"
                        class="nav-link"
                    >Über mich</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink
                        to="/portfolio"
                        class="nav-link"
                    >Portfolio</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink
                        to="/testimonials"
                        class="nav-link"
                    >Testimonials</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink
                        to="/contact"
                        class="nav-link"
                    >Kontakt</NuxtLink>
                </li>
            </ul>
            <button
                ref="menuOpenButton"
                class="fas fa-bars"
                id="menu-open-button"
                aria-label="Menü öffnen"
            ></button>
        </nav>
    </header>
</template>


<script>
export default {
    name: 'Header',
    mounted () {
        const navbarLinks = document.querySelectorAll('.nav-menu .nav-link') // alle Links im nav-menu auswählen
        const menuOpenButton = this.$refs.menuOpenButton
        const menuCloseButton = this.$refs.menuCloseButton

        // Menü öffnen, wenn man auf das Burger-Icon klickt
        menuOpenButton.addEventListener("click", () => {
            document.body.classList.toggle("show-mobile-menu")
        })

        // Menü schliessen, bei Klick auf das Kreuz
        menuCloseButton.addEventListener("click", () => {
            document.body.classList.remove("show-mobile-menu")
        })

        // Menü schliessen, wenn man auf einen Menüpunkt klickt
        navbarLinks.forEach(link => {
            link.addEventListener("click", () => {
                document.body.classList.remove("show-mobile-menu")
            })
        })
    }
}
</script>


<style scoped>
/* Navbar */
header {
    z-index: 5;
    width: 100%;
    position: fixed;
    background: var(--primary-color);
}

header .navbar {
    display: flex;
    padding: 20px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    max-width: var(--site-max-width);
}

.navbar .nav-logo .logo-text {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-semibold);
}

.navbar .nav-logo .logo-text a {
    color: var(--white-color);
}

.navbar .nav-menu {
    gap: 10px;
    display: flex;
}

.navbar .nav-menu .nav-link {
    padding: 10px 18px;
    font-size: var(--font-size-m);
    color: var(--white-color);
    text-decoration: none;
}

.navbar .nav-menu .nav-link:hover {
    text-decoration: underline 5px var(--secondary-color);
    text-underline-offset: 5px;
}

.navbar :where(#menu-open-button, #menu-close-button) {
    display: none;
}

.fas.fa-bars,
.fas.fa-times {
    display: none;
    /* Burger-Icon und Kreuz-Icon standardmässig ausblenden */
}

@media screen and (max-width: 1024px) {
    .navbar .nav-menu .nav-link {
        padding: 10px;
        font-size: var(--font-size-s);
    }
}

@media screen and (max-width: 900px) {
    :root {
        --font-size-s: 0.75rem;
        --font-size-m: 1rem;
        --font-size-l: 1.3rem;
        --font-size-xl: 1.5rem;
        --font-size-xxl: 1.8rem;
    }

    /* Mobile Menu */
    body.show-mobile-menu {
        overflow: hidden;
    }

    body.show-mobile-menu header::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.2);
    }

    /* Burger Menu Button */
    .navbar #menu-open-button {
        font-size: var(--font-size-l);
        display: block;
        color: white;
        /* Weiss für das Burger-Menü */
    }

    /* Close Menu Button (X) */
    .navbar #menu-close-button {
        font-size: var(--font-size-l);
        display: none;
        /* Standardmässig ausgeblendet */
        color: black;
        /* Schwarz für das Kreuz */
    }

    /* Hover-Effekt für Burger-Icon */
    .navbar #menu-open-button:hover {
        color: var(--secondary-color) !important;
    }

    /* Styling für das Menu */
    .navbar .nav-menu {
        display: block;
        background: var(--light-blue-color);
        position: fixed;
        top: 0;
        left: -400px;
        height: 100%;
        width: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 100px;
        transition: left 0.2s ease;
        margin-top: 0 !important;
    }

    /* Wenn Menü geöffnet, wird es angezeigt */
    body.show-mobile-menu .nav-menu {
        left: 0;
    }

    /* Links im Menü */
    .navbar .nav-menu .nav-link {
        display: block;
        margin-top: 17px;
        padding: 10px 22px;
        color: var(--dark-color);
        font-size: var(--font-size-l);
    }

    .navbar .nav-menu .nav-link a {
        color: var(--dark-color);
    }

    /* Logo Text */
    .navbar .nav-logo .logo-text {
        font-size: var(--font-size-xl);
    }

    /* Wenn Menü geöffnet ist: Burger-Icon ausblenden, Kreuz-Icon anzeigen */
    body.show-mobile-menu #menu-open-button {
        display: none;
    }

    body.show-mobile-menu #menu-close-button {
        display: block;
    }
}

@media screen and (max-width: 640px) {
    .navbar .nav-menu {
        width: 100%;
        left: -740px;
    }
}
</style>
