// Get experience ID from URL
const params = new URLSearchParams(window.location.search)
const experienceId = params.get("id")

// Experience data
const experiences = [
  {
    id: 1,
    title: "Stage de recherche",
    company: "AgrosParisTech - INRAE",
    period: "Juin - Juillet 2025",
    highlights: ["Python", "IRaMuTeQ", "IA", "Recherche Scientifique"],
    fullContent: `Dans le cadre de mes étude, j'ai effectué un stage de 2 mois dans un laboratoire de recherche, dans le département de sociologie. J'y ai effectué divers mission en tant qu'assistant a la recherche

    Missions principales:
  - Analyse lexicographique des contributions publiques (CNDP – façades maritimes) → Extraction, traitement et analyse de corpus textuels via Python et IRaMuTeQ.
  - Contribution à un outil pédagogique “Brevet IA” Relecture, correction et amélioration d’un site d’apprentissage sur l’intelligence artificielle.
  - Recherche et compilation de documents administratifs (MRAe) → Centralisation d’avis et de réponses environnementales pour un autre projet de recherche.

Compétences techniques:
  - Python (scripts de transformation de données) nettoyage des données
  - IRaMuTeQ classification, AFC, analyses de similitude
  - Mise en place de protocole expérimental, documentation des étapes, traçabilité

Compétences transversales:
 - reproduction d’un protocole scientifique
 - Capacité d’interprétation, esprit critique sur la qualité des données
 - Autonomie, organisation du travail, gestion du temps

Compétences métiers
 - Forte autonomie et capacité d’adaptation dans un environnement de recherche.
 - Développement d’outils d’automatisation pour le prétraitement et la préparation de corpus.
 - Application d’outils d’analyse statistique et lexicométrique pour extraire des tendances.
 - Contribution à la diffusion scientifique par la production de supports (graphiques, protocoles, documentation).
 - Capacité à adapter des méthodes issues de la recherche à un nouveau jeu de données.

Bilan Final:
- Maîtrise renforcée de Python et découverte d’outils spécialisés (IRaMuTeQ, R).
- Bonne compréhension du fonctionnement d’un laboratoire public et de ses contraintes.`,
gallery: [
  "DiagSim.png",
  "Nuage.png",
  "Diagramme_Alceste.png",
],
  },
  {
    id: 2,
    title: "Présidence d'une Association",
    company: "ESAIP Innov'Lab",
    period: "2023 - 2025",
    highlights: ["Animation", "Impression 3D", "Real-time Features", "Performance Optimization"],
    fullContent: `Innov'Lab est une association Fab Lab au sein de l'ESAIP. Au sein de cette association, j'ai occupé les role de responsable de la communication, puis de Vice Président et finalement j'ai été élue Président durant l'anné 2025-2026.

Les projets que auquel j'ai participé! 
- Projet Drone 
- Recylotron 
- Esaip Repair
- Imprimante 3D
- Borne d'Arcade

Compétence technique:
- impression 3D (modélisation, impression, entretient)
- éléctronique
- Robotique & drone  

Compétence associative et relationelle:
- animation de séance
- Responsabilité
- présidence  `,
gallery: [
  "DiagSim.png",
  "Nuage.png",
  "Diagramme_Alceste.png",
],

},

]

// Load experience details
function loadExperienceDetails() {
  const experience = experiences.find((exp) => exp.id === Number.parseInt(experienceId))

  if (!experience) {
    document.body.innerHTML = '<div class="container"><h1>Experience not found</h1></div>'
    return
  }

  document.getElementById("detailTitle").textContent = experience.title
  document.getElementById("detailCompany").textContent = experience.company
  document.getElementById("detailPeriod").textContent = experience.period
  document.getElementById("detailContent").textContent = experience.fullContent

  // Skills
  const skillsContainer = document.getElemDentById("detailSkills")
  skillsContainer.innerHTML = experience.highlights.map((skill) => `<span>${skill}</span>`).join("")

  // Gallery
  const galleryContainer = document.getElementById("detailGallery")

  if (experience.gallery && experience.gallery.length > 0) {
    galleryContainer.innerHTML = experience.gallery
      .map(
        (img) => `
          <div class="gallery-item">
            <img src="image/${img}" alt="${experience.title} image" loading="lazy">
          </div>
        `
      )
      .join("")
  } else {
    galleryContainer.innerHTML = `<p>Aucune image disponible pour ce projet.</p>`
  }

  // Navigation
  const currentIndex = experiences.findIndex((exp) => exp.id === experience.id)
  const prevExp = currentIndex > 0 ? experiences[currentIndex - 1] : null
  const nextExp = currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null

  if (prevExp) {
    const prevLink = document.getElementById("navPrev")
    prevLink.href = `experience-detail.html?id=${prevExp.id}`
    prevLink.style.display = "block"
    document.getElementById("prevTitle").textContent = prevExp.title
  }

  if (nextExp) {
    const nextLink = document.getElementById("navNext")
    nextLink.href = `experience-detail.html?id=${nextExp.id}`
    nextLink.style.display = "block"
    document.getElementById("nextTitle").textContent = nextExp.title
  }
}

// Load on page load
document.addEventListener("DOMContentLoaded", loadExperienceDetails)
