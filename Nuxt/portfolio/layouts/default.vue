<!-- filepath: /layouts/default.vue -->
<template>
    <div>
        <Header />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
/* layout styles */
</style>
