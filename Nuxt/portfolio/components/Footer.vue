<template>
  <footer class="footer-section">
    <div class="section-content">
      <p class="copyright-text">© 2025 Lucinda Tgetgel</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>


<style scoped>
.footer-section {
  background: var(--dark-color);
  font-size: var(--font-size-s);
}

.footer-section .section-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-section .section-content .copyright-text {
  color: var(--white-color);
}

@media screen and (max-width: 640px) {
  .footer-section .section-content {
    flex-direction: column;
    gap: 15px;
    font-size: var(--font-size-s);
  }
}
</style>
