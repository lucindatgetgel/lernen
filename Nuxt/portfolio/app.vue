<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  // app-level configurations
}
</script>

<style>
/* Globale Styles oder Layout-Styles */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

:root {
  --white-color: #fff;
  --dark-color: #252525;
  --primary-color: #243b53;
  --secondary-color: #7bb0d2;
  --light-blue-color: #f4f7fa;
  --medium-gray-color: #ccc;

  --font-size-xs: 0.75rem;
  --font-size-s: 1.25rem;
  --font-size-m: 1.5rem;
  --font-size-l: 1.75rem;
  --font-size-xl: 2rem;
  --font-size-xxl: 3rem;

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --border-radius-s: 8px;
  --border-radius-m: 30px;
  --border-radius-circle: 50%;

  --site-max-width: 1300px;
}

html {
  scroll-behavior: smooth;
}

/* Weitere globale Stile */
ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}

img {
  width: 100%;
}

section {
  height: 100vh;
}

footer {
  height: auto;
  scroll-snap-align: start;
}

:where(section, footer) .section-content {
  margin: 0 auto;
  padding: 20px;
  max-width: var(--site-max-width);
}

section .section-title {
  text-align: center;
  padding: 60px 0;
  text-transform: uppercase;
  font-size: var(--font-size-xl);
}

section .section-title::after {
  content: "";
  width: 80px;
  height: 5px;
  display: block;
  margin: 10px auto 0;
  background: var(--secondary-color);
  border-radius: var(--border-radius-s);
}

@media screen and (max-width: 900px) {
  :root {
    --font-size-s: 0.75rem;
    --font-size-m: 1rem;
    --font-size-l: 1.3rem;
    --font-size-xl: 1.5rem;
    --font-size-xxl: 1.8rem;
  }
}

@media screen and (max-width: 640px) {
  :root {
    --font-size-s: 0.7rem;
    --font-size-m: 0.9rem;
    --font-size-l: 1.2rem;
    --font-size-xl: 1.4rem;
    --font-size-xxl: 1.7rem;
  }
}
</style>
