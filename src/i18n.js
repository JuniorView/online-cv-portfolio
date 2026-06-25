import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects",
        experience: "Experience",
        skills: "Skills",
        resume: "Resume"
      },
      hero: {
        subtitle: "Computer Science Student | Web Development & AI",
        location: "Darmstadt, DE",
        semester: "5. Semester",
        projectsCount: "7+ GitHub Projects",
        downloadBtn: "Download Resume",
        contactBtn: "Contact Me"
      },
      about: {
        title: "About.",
        p1_start: "I am an engaged computer science student in my 5th semester with solid knowledge in ",
        p1_highlight: "Software Engineering, Web/Software Development, Artificial Intelligence",
        p1_end: " and data structures.",
        p2: "My motivation and willingness to continuously learn make me a valuable team member, always striving to find and implement innovative solutions. I combine my passion for clean code with the latest advancements in Machine Learning to build modern and intelligent applications."
      },
      projects: {
        title: "The GitHub Showcase.",
        subtitle: "Selection of academic and personal projects",
        viewGithub: "View on GitHub",
        items: [
          {
            title: "Semantic Image Search",
            desc: "Multimodal image search system (text/image) integrating advanced models and FAISS indexing.",
            tech: ["CLIP", "OpenCLIP", "FAISS", "Python"],
            link: "https://github.com/JuniorView/semantic-image-search"
          },
          {
            title: "AI Drawing Recognition",
            desc: "Interactive drawing game with sketch recognition via CNN trained on QuickDraw.",
            tech: ["Python", "Tkinter", "CNN", "Machine Learning"],
            link: "https://github.com/JuniorView/ai-drawing-recognition"
          },
          {
            title: "Event Planner Fullstack",
            desc: "Complete event management platform with weather integration and containerized architecture.",
            tech: ["React", "TypeScript", "Express", "MongoDB", "Docker"],
            link: "https://github.com/JuniorView/event-planner-fullstak"
          },
          {
            title: "Production-Grade WebApp",
            desc: "Production-level web application featuring a RESTful API, JWT authentication, and dynamic routing.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://github.com/JuniorView/fullstack-webapp-portfolio-project"
          },
          {
            title: "PizzaServe API",
            desc: "Backend API system designed to efficiently manage pizzeria operations, orders, and deliveries.",
            tech: ["API REST", "Backend", "Python"],
            link: "https://github.com/JuniorView/PizzaServeAPI"
          },
          {
            title: "Booking App",
            desc: "Simplified booking application developed in an academic setting to explore deep software logic.",
            tech: ["C++", "Qt", "JSON", "GeoJSON"],
            link: "https://github.com/JuniorView/Booking-App"
          },
          {
            title: "Gilded Rose Refactoring",
            desc: "Advanced code restructuring exercise based on the famous 'Gilded Rose' kata, focused on maintainability.",
            tech: ["Clean Code", "Refactoring", "Tests"],
            link: "https://github.com/JuniorView/Gilded-Rose-Practice"
          }
        ]
      },
      experience: {
        title: "Experience.",
        items: [
          {
            period: "03/2025 – Present",
            role: "Pflichtpraktikum (AI Software Development)",
            company: "GalloVerde GmbH & Co. KG, Darmstadt",
            desc: "Developing an AI-driven, vector-based image search system for blomus.com. Text-to-Image (Laravel + Ollama) and Image-to-Image (FastAPI + SigLIP) pipelines."
          },
          {
            period: "03/2024 – 06/2024",
            role: "Working Student",
            company: "PaperScan24, Mühltal",
            desc: "Digital archiving and sorting of documents according to customer specifications. Developed Python scripts for automating internal processes."
          },
          {
            period: "05/2023 – 12/2023",
            role: "Working Student in Production",
            company: "EUROAPI, Frankfurt am Main",
            desc: "Support in chemical-technical production processes. Team collaboration to implement process engineering in a GMP environment."
          }
        ]
      },
      skills: {
        title: "The Dashboard.",
        subtitle: "Technical overview and proficiency",
        items: [
          { name: "Python", level: 95, iconUrl: "https://cdn.simpleicons.org/python/7B61FF", subskills: ["FastAPI", "PyTorch", "HuggingFace", "Machine Learning"] },
          { name: "React / JS", level: 85, iconUrl: "https://cdn.simpleicons.org/react/7B61FF", subskills: ["HTML & CSS", "Vite", "TypeScript"] },
          { name: "C++ (OOP)", level: 80, iconUrl: "https://cdn.simpleicons.org/cplusplus/7B61FF", subskills: ["Qt", "Algorithms", "Data Structures"] },
          { name: "Laravel / PHP", level: 85, iconUrl: "https://cdn.simpleicons.org/laravel/7B61FF", subskills: ["MVC Pattern", "Livewire", "Eloquent ORM"] },
          { name: "SQL / DBs", level: 85, iconUrl: "https://cdn.simpleicons.org/postgresql/7B61FF", subskills: ["PostgreSQL", "pgvector", "MongoDB"] },
          { name: "Docker / DevOps", level: 75, iconUrl: "https://cdn.simpleicons.org/docker/7B61FF", subskills: ["CI/CD", "GitLab Pipeline"] },
          { name: "Git / GitLab", level: 85, iconUrl: "https://cdn.simpleicons.org/git/7B61FF", subskills: ["Version Control", "GitHub"] },
          { name: "Code Quality", level: 70, iconUrl: "https://cdn.simpleicons.org/sonarqube/7B61FF", subskills: ["SonarQube", "Graylog", "Clean Code"] },
          { name: "MS Office", level: 85, iconUrl: "https://cdn.simpleicons.org/microsoftoffice/7B61FF", subskills: ["Word", "Excel", "PowerPoint"] },
          { name: "Soft Skills", level: 95, iconUrl: "https://cdn.simpleicons.org/wechat/7B61FF", subskills: ["Communication", "Teamwork"] }
        ]
      },
      education: {
        title: "The Foundations.",
        items: [
          {
            year: "2022 – Present",
            degree: "Bachelor Informatik",
            school: "Hochschule Darmstadt",
            desc: "Specialization: Softwaretechnik, Software Engineering, Datenbanksysteme."
          },
          {
            year: "2020",
            degree: "Abitur der Sekundarbildung (Serie C)",
            school: "Cameroon",
            desc: "Specialties: Mathematics and Physics."
          }
        ]
      },
      contact: {
        title: "Let's work together.",
        subtitle: "An internship opportunity or an ambitious project? Let's discuss it.",
        sendMessage: "Send a message"
      },
      footer: {
        online: "Online"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: "À propos",
        projects: "Projets",
        experience: "Expérience",
        skills: "Compétences",
        resume: "CV"
      },
      hero: {
        subtitle: "Étudiant en Informatique | Développement Web & IA",
        location: "Darmstadt, DE",
        semester: "5. Semester",
        projectsCount: "7+ Projets GitHub",
        downloadBtn: "Télécharger CV",
        contactBtn: "Me contacter"
      },
      about: {
        title: "À propos.",
        p1_start: "Je suis un étudiant engagé en informatique au 5ème semestre avec de solides connaissances en ",
        p1_highlight: "Software Engineering, développement Web/Logiciel, Intelligence Artificielle",
        p1_end: " et structures de données.",
        p2: "Ma motivation et ma volonté de me développer continuellement font de moi un membre d'équipe précieux, toujours à la recherche de solutions innovantes et performantes. Je combine ma passion pour le code propre (Clean Code) avec les dernières avancées en Machine Learning pour créer des applications modernes et intelligentes."
      },
      projects: {
        title: "La Vitrine GitHub.",
        subtitle: "Sélection de projets académiques et personnels",
        viewGithub: "Voir sur GitHub",
        items: [
          {
            title: "Semantic Image Search",
            desc: "Système de recherche d'images multimodale (texte/image) intégrant des modèles avancés et l'indexation FAISS.",
            tech: ["CLIP", "OpenCLIP", "FAISS", "Python"],
            link: "https://github.com/JuniorView/semantic-image-search"
          },
          {
            title: "AI Drawing Recognition",
            desc: "Jeu de dessin interactif avec reconnaissance de croquis par CNN entraîné sur QuickDraw.",
            tech: ["Python", "Tkinter", "CNN", "Machine Learning"],
            link: "https://github.com/JuniorView/ai-drawing-recognition"
          },
          {
            title: "Event Planner Fullstack",
            desc: "Plateforme complète de gestion d'événements avec météo et architecture conteneurisée.",
            tech: ["React", "TypeScript", "Express", "MongoDB", "Docker"],
            link: "https://github.com/JuniorView/event-planner-fullstak"
          },
          {
            title: "Production-Grade WebApp",
            desc: "Application web niveau production avec API RESTful, authentification JWT et routage dynamique.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://github.com/JuniorView/fullstack-webapp-portfolio-project"
          },
          {
            title: "PizzaServe API",
            desc: "Système backend sous forme d'API pour la gestion des commandes et livraisons d'une pizzeria.",
            tech: ["API REST", "Backend", "Python"],
            link: "https://github.com/JuniorView/PizzaServeAPI"
          },
          {
            title: "Booking App",
            desc: "Application de réservation explorant la logique logicielle approfondie et la gestion de données.",
            tech: ["C++", "Qt", "JSON", "GeoJSON"],
            link: "https://github.com/JuniorView/Booking-App"
          },
          {
            title: "Gilded Rose Refactoring",
            desc: "Exercice avancé de restructuration de code axé sur la maintenabilité et le clean code.",
            tech: ["Clean Code", "Refactoring", "Tests"],
            link: "https://github.com/JuniorView/Gilded-Rose-Practice"
          }
        ]
      },
      experience: {
        title: "Expérience.",
        items: [
          {
            period: "03/2025 – Présent",
            role: "Pflichtpraktikum (Développement logiciel IA)",
            company: "GalloVerde GmbH & Co. KG, Darmstadt",
            desc: "Développement d'un système de recherche d'images vectoriel basé sur l'IA pour blomus.com. Pipelines Text-to-Image (Laravel + Ollama) et Image-to-Image (FastAPI + SigLIP)."
          },
          {
            period: "03/2024 – 06/2024",
            role: "Étudiant Travailleur",
            company: "PaperScan24, Mühltal",
            desc: "Archivage numérique et tri de dossiers. Développement de scripts Python pour l'automatisation de processus internes."
          },
          {
            period: "05/2023 – 12/2023",
            role: "Étudiant Travailleur en Production",
            company: "EUROAPI, Frankfurt am Main",
            desc: "Soutien aux processus de production technico-chimiques dans un environnement BPF (GMP)."
          }
        ]
      },
      skills: {
        title: "Le Tableau de Bord.",
        subtitle: "Aperçu technique et maîtrise",
        items: [
          { name: "Python", level: 95, iconUrl: "https://cdn.simpleicons.org/python/7B61FF", subskills: ["FastAPI", "PyTorch", "HuggingFace", "Machine Learning"] },
          { name: "React / JS", level: 85, iconUrl: "https://cdn.simpleicons.org/react/7B61FF", subskills: ["HTML & CSS", "Vite", "TypeScript"] },
          { name: "C++ (OOP)", level: 80, iconUrl: "https://cdn.simpleicons.org/cplusplus/7B61FF", subskills: ["Qt", "Algorithmes", "Structures de données"] },
          { name: "Laravel / PHP", level: 85, iconUrl: "https://cdn.simpleicons.org/laravel/7B61FF", subskills: ["Pattern MVC", "Livewire", "Eloquent ORM"] },
          { name: "SQL / BDD", level: 85, iconUrl: "https://cdn.simpleicons.org/postgresql/7B61FF", subskills: ["PostgreSQL", "pgvector", "MongoDB"] },
          { name: "Docker / DevOps", level: 75, iconUrl: "https://cdn.simpleicons.org/docker/7B61FF", subskills: ["CI/CD", "GitLab Pipeline"] },
          { name: "Git / GitLab", level: 85, iconUrl: "https://cdn.simpleicons.org/git/7B61FF", subskills: ["Version Control", "GitHub"] },
          { name: "Code Quality", level: 70, iconUrl: "https://cdn.simpleicons.org/sonarqube/7B61FF", subskills: ["SonarQube", "Graylog", "Clean Code"] },
          { name: "MS Office", level: 85, iconUrl: "https://cdn.simpleicons.org/microsoftoffice/7B61FF", subskills: ["Word", "Excel", "PowerPoint"] },
          { name: "Soft Skills", level: 95, iconUrl: "https://cdn.simpleicons.org/wechat/7B61FF", subskills: ["Communication", "Travail d'équipe"] }
        ]
      },
      education: {
        title: "Les Fondations.",
        items: [
          {
            year: "2022 – Présent",
            degree: "Bachelor Informatik",
            school: "Hochschule Darmstadt",
            desc: "Spécialisation: Softwaretechnik, Software Engineering, Datenbanksysteme."
          },
          {
            year: "2020",
            degree: "Abitur der Sekundarbildung (Série C)",
            school: "Cameroun",
            desc: "Spécialités : Mathématiques et Physique."
          }
        ]
      },
      contact: {
        title: "Travaillons ensemble.",
        subtitle: "Une opportunité de stage ou un projet ambitieux ? Discutons-en.",
        sendMessage: "Envoyer un message"
      },
      footer: {
        online: "En ligne"
      }
    }
  },
  de: {
    translation: {
      nav: {
        about: "Über mich",
        projects: "Projekte",
        experience: "Erfahrung",
        skills: "Kenntnisse",
        resume: "Lebenslauf"
      },
      hero: {
        subtitle: "Informatikstudent | Webentwicklung & KI",
        location: "Darmstadt, DE",
        semester: "5. Semester",
        projectsCount: "7+ GitHub Projekte",
        downloadBtn: "Lebenslauf laden",
        contactBtn: "Kontaktieren"
      },
      about: {
        title: "Über mich.",
        p1_start: "Ich bin ein engagierter und lernbereiter Informatikstudent im 5. Semester mit umfassenden Kenntnissen in den Bereichen ",
        p1_highlight: "Software Engineering, Software/Web-Entwicklung, KI",
        p1_end: " sowie Algorithmen und Datenstrukturen.",
        p2: "Meine Motivation und Bereitschaft, mich kontinuierlich weiterzuentwickeln, machen mich zu einem wertvollen Teammitglied, das stets bestrebt ist, innovative Lösungen zu finden und umzusetzen. Ich kombiniere meine Leidenschaft für sauberen Code mit den neuesten Entwicklungen im maschinellen Lernen."
      },
      projects: {
        title: "GitHub Portfolio.",
        subtitle: "Auswahl akademischer und persönlicher Projekte",
        viewGithub: "Auf GitHub ansehen",
        items: [
          {
            title: "Semantic Image Search",
            desc: "Multimodales Bildsuchsystem (Text/Bild) zur Integration fortschrittlicher Modelle und FAISS-Indizierung.",
            tech: ["CLIP", "OpenCLIP", "FAISS", "Python"],
            link: "https://github.com/JuniorView/semantic-image-search"
          },
          {
            title: "AI Drawing Recognition",
            desc: "Interaktives Zeichen-Spiel mit Skizzenerkennung über ein mit QuickDraw trainiertes CNN.",
            tech: ["Python", "Tkinter", "CNN", "Machine Learning"],
            link: "https://github.com/JuniorView/ai-drawing-recognition"
          },
          {
            title: "Event Planner Fullstack",
            desc: "Umfassende Event-Management-Plattform mit Wetterintegration und containerisierter Architektur.",
            tech: ["React", "TypeScript", "Express", "MongoDB", "Docker"],
            link: "https://github.com/JuniorView/event-planner-fullstak"
          },
          {
            title: "Production-Grade WebApp",
            desc: "Webanwendung auf Produktionsniveau mit RESTful API, JWT-Authentifizierung und dynamischem Routing.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://github.com/JuniorView/fullstack-webapp-portfolio-project"
          },
          {
            title: "PizzaServe API",
            desc: "Backend-API-System zur effizienten Verwaltung von Pizzeria-Abläufen, Bestellungen und Lieferungen.",
            tech: ["API REST", "Backend", "Python"],
            link: "https://github.com/JuniorView/PizzaServeAPI"
          },
          {
            title: "Booking App",
            desc: "Vereinfachte Buchungsanwendung, entwickelt im akademischen Umfeld zur Erforschung tiefer Softwarelogik.",
            tech: ["C++", "Qt", "JSON", "GeoJSON"],
            link: "https://github.com/JuniorView/Booking-App"
          },
          {
            title: "Gilded Rose Refactoring",
            desc: "Fortgeschrittene Code-Refactoring-Übung basierend auf dem 'Gilded Rose' Kata (Fokus auf Clean Code).",
            tech: ["Clean Code", "Refactoring", "Tests"],
            link: "https://github.com/JuniorView/Gilded-Rose-Practice"
          }
        ]
      },
      experience: {
        title: "Erfahrung.",
        items: [
          {
            period: "03/2025 – pres.",
            role: "Pflichtpraktikum (KI-Softwareentwicklung)",
            company: "GalloVerde GmbH & Co. KG, Darmstadt",
            desc: "Entwicklung eines KI-gestützten, vektorbasierten Bildsuchsystems. Text-zu-Bild-Suche (Laravel + Ollama) und Bild-zu-Bild-Suche (FastAPI + SigLIP)."
          },
          {
            period: "03/2024 – 06/2024",
            role: "Sachbearbeiter – Werkstudent",
            company: "PaperScan24, Mühltal",
            desc: "Digitale Archivierung, Sortierung von Akten nach Kundenvorgaben. Entwicklung von Python-Skripten zur Automatisierung interner Prozesse."
          },
          {
            period: "05/2023 – 12/2023",
            role: "Werkstudent in der Produktion",
            company: "EUROAPI, Frankfurt am Main",
            desc: "Unterstützung bei chemisch-technischen Produktionsprozessen. Zusammenarbeit im Team zur Umsetzung von Verfahrenstechniken im GMP-Umfeld."
          }
        ]
      },
      skills: {
        title: "Kenntnisse.",
        subtitle: "Technischer Überblick und Kompetenz",
        items: [
          { name: "Python", level: 95, iconUrl: "https://cdn.simpleicons.org/python/7B61FF", subskills: ["FastAPI", "PyTorch", "HuggingFace", "Machine Learning"] },
          { name: "React / JS", level: 85, iconUrl: "https://cdn.simpleicons.org/react/7B61FF", subskills: ["HTML & CSS", "Vite", "TypeScript"] },
          { name: "C++ (OOP)", level: 80, iconUrl: "https://cdn.simpleicons.org/cplusplus/7B61FF", subskills: ["Qt", "Algorithmen", "Datenstrukturen"] },
          { name: "Laravel / PHP", level: 85, iconUrl: "https://cdn.simpleicons.org/laravel/7B61FF", subskills: ["MVC Pattern", "Livewire", "Eloquent ORM"] },
          { name: "SQL / DBs", level: 85, iconUrl: "https://cdn.simpleicons.org/postgresql/7B61FF", subskills: ["PostgreSQL", "pgvector", "MongoDB"] },
          { name: "Docker / DevOps", level: 75, iconUrl: "https://cdn.simpleicons.org/docker/7B61FF", subskills: ["CI/CD", "GitLab Pipeline"] },
          { name: "Git / GitLab", level: 85, iconUrl: "https://cdn.simpleicons.org/git/7B61FF", subskills: ["Versionskontrolle", "GitHub"] },
          { name: "Code Quality", level: 70, iconUrl: "https://cdn.simpleicons.org/sonarqube/7B61FF", subskills: ["SonarQube", "Graylog", "Clean Code"] },
          { name: "MS Office", level: 85, iconUrl: "https://cdn.simpleicons.org/microsoftoffice/7B61FF", subskills: ["Word", "Excel", "PowerPoint"] },
          { name: "Soft Skills", level: 95, iconUrl: "https://cdn.simpleicons.org/wechat/7B61FF", subskills: ["Kommunikation", "Teamfähigkeit"] }
        ]
      },
      education: {
        title: "Bildungsweg.",
        items: [
          {
            year: "2022 – pres.",
            degree: "Bachelor Informatik",
            school: "Hochschule Darmstadt",
            desc: "Schwerpunkt: Softwaretechnik, Software Engineering, Datenbanksysteme."
          },
          {
            year: "2020",
            degree: "Abitur der Sekundarbildung (Serie C)",
            school: "Kamerun",
            desc: "Schwerpunkte: Mathematik und Physik."
          }
        ]
      },
      contact: {
        title: "Kontakt aufnehmen.",
        subtitle: "Eine Praktikumsmöglichkeit oder ein ehrgeiziges Projekt? Lassen Sie uns darüber sprechen.",
        sendMessage: "Nachricht senden"
      },
      footer: {
        online: "Online"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
