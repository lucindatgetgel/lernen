<template>
<section class="about-section" id="about">
        <div class="section-content">
          <div class="about-details">
            <h2 class="section-title">Über mich</h2>
            <p class="text">Nach einer Ausbildung im Bankwesen und einer spannenden Zeit im Marketing habe ich gemerkt, dass ich eine Herausforderung 
              brauche, die Strategie, Kreativität und Technik verbindet. So bin ich zur Webentwicklung gekommen. Als Projektleiterin 
              startete ich bei Code Crush und erarbeite mir nun parallel die technischen Skills, um selbst zu coden. <br><br>
              Abseits der digitalen Welt suche ich auf der Rennstrecke beim Motocross den Nervenkitzel. Adrenalin und Geschwindigkeit sind mein Ausgleich zur Präzision des Codes. <br><br>     
              Egal ob Webentwicklung, Social Media oder kreative Konzepte – ich liebe es, Ideen zu entwickeln, sie zum Leben zu erwecken
              und Projekte mit voranzutreiben. <br><br>           
              Lass uns gemeinsam etwas Cooles erschaffen! 🚀</p>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>


<style scoped>
.about-section {
  display: flex;
  height: 100vh;
  padding: 120px 0;
  background: var(--light-blue-color);
  align-items: center;
  justify-content: center;
}

.about-section .section-content {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
}

.about-section .about-details {
  max-width: 75%;
}

.about-section .about-details .section-title {
  padding: 0;
}

.about-section .about-details .text {
  line-height: 25px;
  margin: 50px 0 0;
  text-align: center;
  font-size: var(--font-size-m);
}

@media screen and (max-width: 900px) {
.about-section .section-content {
    gap: 70px;
    flex-direction: column-reverse;
  }

  .about-section .about-image-wrapper .about-image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    max-width: 250px;
  }
}

</style>