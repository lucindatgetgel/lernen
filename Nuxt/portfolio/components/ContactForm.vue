<template>
<section class="contact-section" id="contact">
        <h2 class="section-title">Kontakt</h2>
        <div class="section-content">
          <ul class="contact-info-list">
            <li class="contact-info">
              <i class="fa-solid fa-location-crosshairs"></i>
              <p>Chur, Schweiz</p>
            </li>
            <li class="contact-info">
              <i class="fa-regular fa-envelope"></i>
              <p>lucinda@codecrush.ch</p>
            </li>
            <li class="contact-info">
              <i class="fa-solid fa-phone"></i>
              <p>+41 78 868 87 03</p>
            </li>
          </ul>
          <form action="#" class="contact-form">
            <input type="text" placeholder="Vor- und Nachname" class="form-input" required />
            <input type="email" placeholder="E-Mail" class="form-input" required />
            <textarea placeholder="Hey Lucinda..." class="form-input" required></textarea>
            <button type="submit" class="button submit-button">Absenden</button>
          </form>
        </div>
      </section>
</template>

<script>
export default {
    name: 'ContactForm'
}
</script>


<style scoped>
.contact-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 100px;
  background: var(--light-blue-color);
}

.contact-section .section-content {
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: space-between;
}

.contact-section .contact-info-list .contact-info {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
}

.contact-section .contact-info-list .contact-info i {
  font-size: var(--font-size-m);
}

.contact-section .contact-form .form-input {
  width: 100%;
  height: 50px;
  padding: 0 12px;
  outline: none;
  margin-bottom: 16px;
  font-size: var(--font-size-s);
  border-radius: var(--border-radius-s);
  border: 1px solid var(--medium-gray-color);
}

.contact-section .contact-form {
  max-width: 50%;
  margin-right: 30px;
}

.contact-section .contact-form textarea.form-input {
  height: 100px;
  padding: 12px;
  resize: vertical;
}

.contact-section .contact-form .form-input:focus {
  border-color: var(--secondary-color);
}

.contact-section .contact-form .submit-button {
  padding: 10px 28px;
  outline: none;
  margin-top: 10px;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius-s);
  background: var(--primary-color);
  color: var(--white-color);
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  transition: 0.3s ease;
}

.contact-section .contact-form .submit-button:hover {
  color: var(--primary-color);
  background: transparent;
}

@media screen and (max-width: 900px) {
.contact-section .section-content {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    width: 90%;
  }

  .contact-section .section-content .contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 0;
  }

  .contact-section .section-content .contact-form .button {
    width: 150px;
    }

  .contact-section .contact-info-list .contact-info {
  margin: 0;
  }
}

@media screen and (max-width: 640px) {
  .contact-section .section-content {
    width: 90%; 
  }

  .contact-section .section-content .contact-form {
  margin: 0;
 }
  .contact-section .section-content .contact-form .form-input {
    font-size: var(--font-size-m);
    width: 100%; 
  }
}
</style>