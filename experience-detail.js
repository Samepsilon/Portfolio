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
    fullContent: `As a Senior Frontend Engineer at Tech Company, I took ownership of the complete redesign of our main product dashboard. The old dashboard was slow, unintuitive, and caused significant user friction.

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
- Built a reusable component library with TypeScript for type safety
- Maîtrise renforcée de Python et découverte d’outils spécialisés (IRaMuTeQ, R).
- Bonne compréhension du fonctionnement d’un laboratoire public et de ses contraintes.`,
gallery: [
  "stage-1.jpg",
  "stage-2.jpg",
  "stage-3.jpg",
  "stage-4.jpg",
],
  },
  {
    id: 2,
    title: "Présidence d'une Association",
    company: "ESAIP Innov'Lab",
    period: "2023 - 2025",
    highlights: ["Full Stack", "PostgreSQL", "Real-time Features", "Performance Optimization"],
    fullContent: `During my time at Startup, I wore many hats as a full-stack developer, building products from scratch and scaling existing ones to handle more users and data.

Key Achievements:
- Architected and built 3 full-stack applications from ground up using React and Node.js
- Implemented real-time collaboration features using WebSocket technology
- Optimized database queries and implemented caching strategies, resulting in 50% faster API responses
- Built and maintained CI/CD pipelines for automated testing and deployment

Technical Stack:
- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express.js, PostgreSQL
- Infrastructure: Docker, GitHub Actions, AWS

Key Projects:
- Collaborative project management tool with real-time updates
- Analytics dashboard processing millions of data points
- Multi-tenant SaaS platform with role-based access control`,
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2020 - 2021",
    highlights: ["Frontend Development", "CSS", "JavaScript", "Client Collaboration"],
    fullContent: `As a Junior Developer at Digital Agency, I gained practical experience working with diverse clients and technologies. This role was instrumental in developing my problem-solving skills and understanding of client requirements.

Key Achievements:
- Delivered 15+ client projects on time and within budget
- Maintained a 95%+ client satisfaction rating through attention to detail and communication
- Built responsive websites following accessibility standards (WCAG 2.1)
- Collaborated effectively with designers, backend developers, and project managers

Responsibilities:
- Converted design mockups into pixel-perfect responsive implementations
- Wrote clean, maintainable JavaScript and CSS
- Implemented animations and interactive features
- Participated in code reviews and followed best practices

Technologies Used:
- HTML5, CSS3, JavaScript (ES6+)
- WordPress, Shopify
- jQuery, Bootstrap`,
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
  const skillsContainer = document.getElementById("detailSkills")
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
