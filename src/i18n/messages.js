export const SUPPORTED_LOCALES = ['fr', 'en', 'mg']

export const localeOptions = [
  { value: 'fr', label: 'Français', short: 'FR' },
  { value: 'en', label: 'English', short: 'EN' },
  { value: 'mg', label: 'Malagasy', short: 'MG' },
]

export const messages = {
  fr: {
    meta: {
      title: 'Onenantsoa Ranaivo — Développeur web junior',
      description:
        'Portfolio de Ranaivo Andry Ny Avo Onenantsoa, développeur web junior à Antananarivo. Applications web et mobiles avec Vue.js, Node.js et PostgreSQL. Master 2 en cours.',
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      journey: 'Parcours',
      projects: 'Projets',
      contact: 'Contact',
    },
    ui: {
      menu: 'Menu',
      close: 'Fermer',
      theme: 'Thème',
      theme_system: 'Système',
      theme_light: 'Clair',
      theme_dark: 'Sombre',
      language: 'Langue',
      cv: 'CV',
      back_top: 'Retour en haut',
      skip: 'Aller au contenu',
    },
    hero: {
      status: 'Disponible en journée — Master 2 en cours',
      name: 'Onenantsoa Ranaivo',
      role: 'Développeur web junior',
      pitch:
        "Je construis des applications web et mobiles complètes : une interface Vue.js qui se prend en main sans mode d'emploi, une API Node.js solide et une base PostgreSQL bien modélisée.",
      cta_projects: 'Voir mes projets',
      cta_cv: 'Télécharger le CV',
      email: 'Écrire un email',
      full_name: 'Ranaivo Andry Ny Avo Onenantsoa',
      facts: {
        location: 'Basé à',
        location_value: 'Antananarivo, Madagascar',
        study: 'Formation',
        study_value: 'Master 2 informatique, Université Adventiste Zurcher',
        stack: 'Stack principale',
        stack_value: 'Vue.js · Node.js · PostgreSQL',
        looking: 'Je recherche',
        looking_value: 'Stage ou alternance, en journée',
        availability: 'Disponibilité',
        availability_value: 'En journée — cours en ligne de 19 h à 21 h',
      },
      photo_alt: 'Portrait de Ranaivo Andry Ny Avo Onenantsoa',
      elsewhere: 'Retrouvez-moi',
    },
    about: {
      title: 'Du besoin au déploiement',
      lead: "Je suis en deuxième année de Master informatique à l'Université Adventiste Zurcher, et je développe des applications web et mobiles de bout en bout — de la maquette à la mise en production.",
      profile: 'Dynamique, persévérant et déterminé — j’aime travailler en équipe.',
      p1: "Mon travail commence par comprendre le problème : qui utilise l'outil, à quelle fréquence, et ce qui doit tenir en une seule action. Vient ensuite le code — Vue.js et Quasar pour l'interface, Node.js et Express pour l'API, PostgreSQL ou MongoDB pour les données, Kotlin et Room quand le projet est mobile.",
      p2: "J'aime les interfaces lisibles, les bases de données propres et les projets menés jusqu'au bout. Le détail qui compte le plus reste le même : quelqu'un doit pouvoir utiliser ce que j'ai livré sans qu'on lui explique.",
      focus_title: 'Ce qui me motive',
      focus_items: {
        clarity: 'Des interfaces simples, même quand le métier est complexe.',
        quality: 'Un code structuré, relu, testé sur de vrais cas.',
        team: 'Le travail en équipe, la revue et le partage de ce que j’apprends.',
      },
      schedule_title: 'Rythme actuel',
      schedule_text:
        'Master 2 en cours : les cours se suivent en ligne de 19 h à 21 h. Mes journées restent donc libres pour un stage ou une alternance, et mes soirées sont consacrées à la formation.',
      stats: {
        projects: 'Projets livrés',
        stacks: 'Technologies pratiquées',
        internships: 'Stages effectués',
        languages: 'Langues parlées',
      },
    },
    skills: {
      title: 'Compétences',
      lead: 'Les outils avec lesquels je travaille au quotidien, du prototype à la mise en production.',
      groups: {
        frontend: {
          title: 'Frontend',
          items: {
            vue: 'Vue.js',
            quasar: 'Quasar',
            javascript: 'JavaScript',
            html: 'HTML / CSS',
          },
        },
        backend: {
          title: 'Backend',
          items: { node: 'Node.js', express: 'Express' },
        },
        data: {
          title: 'Données',
          items: { postgres: 'PostgreSQL', mongo: 'MongoDB' },
        },
        mobile: {
          title: 'Mobile',
          items: { kotlin: 'Kotlin + Room', react_native: 'React Native' },
        },
        systems: {
          title: 'Systèmes & outils',
          items: {
            linux: 'Linux Ubuntu',
            network: 'Maintenance système et réseau',
            office: 'Outils bureautiques',
            git: 'Git / GitHub',
          },
        },
      },
    },
    preview: {
      label: 'Aperçu protégé',
      title: 'Captures non affichables',
      note: 'Les visuels de ce projet sont protégés par le droit d’auteur : ils ne peuvent pas être affichés ici. Le code reste accessible.',
      count: 'captures protégées',
    },
    journey: {
      title: 'Parcours',
      lead: "Formation, expériences professionnelles et certifications, dans l'ordre où elles se sont enchaînées.",
      education: 'Formation',
      experience: 'Expérience professionnelle',
      certifications: 'Certifications',
      verify: 'Voir le profil',
      items: {
        master: {
          period: "2026 — aujourd'hui",
          title: 'Master 2 en informatique',
          place: 'Université Adventiste Zurcher',
          detail:
            "Cours en ligne de 19 h à 21 h, à côté d'un stage ou d'une alternance en journée.",
        },
        licence: {
          period: '2023 — 2025',
          title: 'Licence en informatique',
          place: 'Université Adventiste Zurcher',
        },
        bac: {
          period: '2020 — 2022',
          title: 'Baccalauréat série D',
          place: 'Collège Saint Michel Itaosy',
        },
        tresorerie: {
          period: '11 Août 2026 — 11 Octobre 2026',
          title: 'Stage de développement',
          place:
            "Trésorerie ministérielle de l'Éducation — Ministère de l'Économie et des Finances",
          detail:
            "Développement d'une application de numérisation de documents avec Vue.js et Node.js.",
        },
        nexthope: {
          period: 'Juillet — septembre 2024',
          title: 'Stage de développement',
          place: 'NEXTHOPE',
          detail: "Développement d'une application de gestion du recrutement connectée à Odoo.",
        },
        imra: {
          period: '4 — 29 septembre 2023',
          title: "Stage d'observation",
          place: 'IMRA',
          detail: "Découverte du réseau et de l'infrastructure informatique de l'entreprise.",
        },
        userfeel: {
          period: '',
          title: "Testeur d'expérience utilisateur certifié",
          place: 'Userfeel',
        },
      },
    },
    missions: {
      nexthope: [
        'Développement d’une application de gestion du recrutement',
        'Connexion de l’application à Odoo',
      ],
      imra: [
        'Observation du réseau de l’entreprise',
        'Découverte de l’infrastructure informatique',
      ],
    },
    projects: {
      title: 'Projets',
      lead: 'Trois applications livrées : finances personnelles, suivi du temps et numérisation de documents.',
      code: 'Voir le code',
      gallery_label: 'Aperçus du projet',
      badge_label: 'Badge',
      items: {
        moneywise: {
          kind: 'Application Android',
          summary:
            'Gestion financière personnelle : suivi des dépenses, budget par catégorie et historique complet, consultable hors ligne grâce à Room.',
        },
        timesheet: {
          kind: 'Application web',
          summary:
            "Suivi du temps de travail : saisie des heures, tableau de bord par projet et export des données, du front Vue.js jusqu'à la base PostgreSQL.",
        },
        docscan: {
          name: 'Numérisation de documents',
          kind: 'Application professionnelle',
          summary:
            "Application de numérisation de documents développée pendant un stage à la Trésorerie ministérielle de l'Éducation : import, traitement et archivage des documents, avec Vue.js et Node.js.",
        },
      },
    },
    languages: {
      title: 'Langues',
      lead: 'Je travaille en français et en malagasy, et je continue à progresser en anglais.',
      items: {
        mg: { name: 'Malagasy', note: 'Langue maternelle' },
        fr: { name: 'Français', note: 'Deuxième langue' },
        en: { name: 'Anglais', note: 'Niveau intermédiaire' },
      },
    },
    contact: {
      title: 'Parlons de votre projet',
      lead: 'Une offre de stage, une collaboration ou simplement une question ? Écrivez-moi, je vous réponds.',
      email_label: 'Email',
      phone_label: 'Téléphone',
      copy_email: "Copier l'adresse",
      copied: 'Adresse copiée',
      location_label: 'Localisation',
      location: 'Antananarivo, Madagascar',
      socials: 'Ailleurs',
      form: {
        name: 'Nom',
        name_placeholder: 'Votre nom',
        email: 'Email',
        email_placeholder: 'vous@exemple.com',
        message: 'Message',
        message_placeholder: 'Ce que vous aimeriez construire…',
        submit: 'Envoyer le message',
        sending: 'Envoi…',
        success: 'Message envoyé. Merci !',
        error: "L'envoi a échoué. Réessayez ou écrivez-moi directement par email.",
        fallback: 'Votre logiciel de messagerie vient de s’ouvrir avec le message prérempli.',
      },
      privacy: 'Vos informations servent uniquement à vous répondre.',
    },
    footer: {
      note: 'Conçu et développé par Onenantsoa.',
      built_with: 'Vue.js · Quasar · Motion',
      rights: 'Tous droits réservés',
      userfeel: 'Testeur UX sur Userfeel',
    },
    notFound: {
      title: 'Cette page n’existe pas',
      text: 'La page demandée a été déplacée ou n’a jamais existé. Le portfolio, lui, est toujours là.',
      action: "Retour à l'accueil",
    },
  },

  en: {
    meta: {
      title: 'Onenantsoa Ranaivo — Junior web developer',
      description:
        'Portfolio of Ranaivo Andry Ny Avo Onenantsoa, junior web developer in Antananarivo. Web and mobile applications built with Vue.js, Node.js and PostgreSQL. Currently in the second year of a master’s degree.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      journey: 'Path',
      projects: 'Work',
      contact: 'Contact',
    },
    ui: {
      menu: 'Menu',
      close: 'Close',
      theme: 'Theme',
      theme_system: 'System',
      theme_light: 'Light',
      theme_dark: 'Dark',
      language: 'Language',
      cv: 'Résumé',
      back_top: 'Back to top',
      skip: 'Skip to content',
    },
    hero: {
      status: 'Available during the day — master’s year 2 in progress',
      name: 'Onenantsoa Ranaivo',
      role: 'Junior web developer',
      pitch:
        'I build complete web and mobile applications: a Vue.js interface people can use without instructions, a reliable Node.js API, and a PostgreSQL schema that holds up.',
      cta_projects: 'See my work',
      cta_cv: 'Download résumé',
      email: 'Send an email',
      full_name: 'Ranaivo Andry Ny Avo Onenantsoa',
      facts: {
        location: 'Based in',
        location_value: 'Antananarivo, Madagascar',
        study: 'Studying',
        study_value: 'MSc year 2, Université Adventiste Zurcher',
        stack: 'Main stack',
        stack_value: 'Vue.js · Node.js · PostgreSQL',
        looking: 'Looking for',
        looking_value: 'An internship or work-study placement, daytime',
        availability: 'Availability',
        availability_value: 'Daytime — online classes from 7 to 9 pm',
      },
      photo_alt: 'Portrait of Ranaivo Andry Ny Avo Onenantsoa',
      elsewhere: 'Find me online',
    },
    about: {
      title: 'From the problem to production',
      lead: 'I am in the second year of my computer science master’s at Université Adventiste Zurcher, and I build web and mobile applications end to end — from the first sketch to production.',
      profile: 'Energetic, persistent and determined — I like working in a team.',
      p1: 'My work starts with understanding the problem: who uses the tool, how often, and what has to fit into a single action. Then comes the code — Vue.js and Quasar for the interface, Node.js and Express for the API, PostgreSQL or MongoDB for the data, Kotlin and Room when the project is mobile.',
      p2: 'I care about legible interfaces, clean databases and projects carried through to the end. The detail that matters most never changes: someone has to be able to use what I shipped without being taught.',
      focus_title: 'What drives me',
      focus_items: {
        clarity: 'Simple interfaces, even when the domain is not.',
        quality: 'Structured code, reviewed and tested on real cases.',
        team: 'Working in a team, reviewing, and sharing what I learn.',
      },
      schedule_title: 'Current pace',
      schedule_text:
        'Master’s year 2 in progress: classes are held online from 7 to 9 pm. My days stay free for an internship or a work-study placement, and my evenings go to the degree.',
      stats: {
        projects: 'Projects shipped',
        stacks: 'Technologies used',
        internships: 'Internships',
        languages: 'Languages spoken',
      },
    },
    skills: {
      title: 'Skills',
      lead: 'The tools I work with day to day, from prototype to production.',
      groups: {
        frontend: {
          title: 'Frontend',
          items: {
            vue: 'Vue.js',
            quasar: 'Quasar',
            javascript: 'JavaScript',
            html: 'HTML / CSS',
          },
        },
        backend: {
          title: 'Backend',
          items: { node: 'Node.js', express: 'Express' },
        },
        data: {
          title: 'Data',
          items: { postgres: 'PostgreSQL', mongo: 'MongoDB' },
        },
        mobile: {
          title: 'Mobile',
          items: { kotlin: 'Kotlin + Room', react_native: 'React Native' },
        },
        systems: {
          title: 'Systems & tools',
          items: {
            linux: 'Ubuntu Linux',
            network: 'System and network maintenance',
            office: 'Office tools',
            git: 'Git / GitHub',
          },
        },
      },
    },
    preview: {
      label: 'Protected preview',
      title: 'Screenshots not displayable',
      note: 'The visuals for this project are protected by copyright, so they cannot be shown here. The code is still available.',
      count: 'protected screenshots',
    },
    journey: {
      title: 'Path',
      lead: 'Education, professional experience and certifications, in the order they happened.',
      education: 'Education',
      experience: 'Professional experience',
      certifications: 'Certifications',
      verify: 'View profile',
      items: {
        master: {
          period: '2026 — present',
          title: 'MSc year 2 in Computer Science',
          place: 'Université Adventiste Zurcher',
          detail:
            'Online classes from 7 to 9 pm, alongside a daytime internship or work-study placement.',
        },
        licence: {
          period: '2023 — 2025',
          title: 'BSc in Computer Science',
          place: 'Université Adventiste Zurcher',
        },
        bac: {
          period: '2020 — 2022',
          title: 'Baccalauréat, science track',
          place: 'Collège Saint Michel Itaosy',
        },
        tresorerie: {
          period: '11 August — 11 October',
          title: 'Software development intern',
          place: 'Ministerial Treasury of Education — Ministry of Economy and Finance',
          detail: 'Built a document scanning application with Vue.js and Node.js.',
        },
        nexthope: {
          period: 'July — September 2024',
          title: 'Software development intern',
          place: 'NEXTHOPE',
          detail: 'Built a recruitment management application connected to Odoo.',
        },
        imra: {
          period: '4 — 29 September 2023',
          title: 'Observation intern',
          place: 'IMRA',
          detail: 'Explored the company network and IT infrastructure.',
        },
        userfeel: {
          period: '',
          title: 'Certified user experience tester',
          place: 'Userfeel',
        },
      },
    },
    missions: {
      nexthope: ['Built a recruitment management application', 'Connected the application to Odoo'],
      imra: ['Observed the company network', 'Explored the IT infrastructure'],
    },
    projects: {
      title: 'Work',
      lead: 'Three applications shipped: personal finance, time tracking and document scanning.',
      code: 'View the code',
      gallery_label: 'Project screenshots',
      badge_label: 'Badge',
      items: {
        moneywise: {
          kind: 'Android application',
          summary:
            'Personal finance management: expense tracking, budgets by category and a full history available offline thanks to Room.',
        },
        timesheet: {
          kind: 'Web application',
          summary:
            'Working time tracking: time entry, a dashboard per project and data export, from the Vue.js front end down to PostgreSQL.',
        },
        docscan: {
          name: 'Document scanning',
          kind: 'Professional application',
          summary:
            'Document scanning application built during an internship at the ministerial Treasury of Education: import, processing and archiving of documents, with Vue.js and Node.js.',
        },
      },
    },
    languages: {
      title: 'Languages',
      lead: 'I work in French and Malagasy, and I keep improving my English.',
      items: {
        mg: { name: 'Malagasy', note: 'Native speaker' },
        fr: { name: 'French', note: 'Second language' },
        en: { name: 'English', note: 'Intermediate' },
      },
    },
    contact: {
      title: 'Let’s talk about your project',
      lead: 'An internship, a collaboration, or just a question? Write to me and I will answer.',
      email_label: 'Email',
      phone_label: 'Phone',
      copy_email: 'Copy the address',
      copied: 'Address copied',
      location_label: 'Location',
      location: 'Antananarivo, Madagascar',
      socials: 'Elsewhere',
      form: {
        name: 'Name',
        name_placeholder: 'Your name',
        email: 'Email',
        email_placeholder: 'you@example.com',
        message: 'Message',
        message_placeholder: 'What you would like to build…',
        submit: 'Send the message',
        sending: 'Sending…',
        success: 'Message sent. Thank you!',
        error: 'Sending failed. Try again or email me directly.',
        fallback: 'Your mail app just opened with the message ready to send.',
      },
      privacy: 'Your details are only used to reply to you.',
    },
    footer: {
      note: 'Designed and built by Onenantsoa.',
      built_with: 'Vue.js · Quasar · Motion',
      rights: 'All rights reserved',
      userfeel: 'UX tester on Userfeel',
    },
    notFound: {
      title: 'This page does not exist',
      text: 'The page you asked for moved, or never existed. The portfolio is still here.',
      action: 'Back to home',
    },
  },

  mg: {
    meta: {
      title: 'Onenantsoa Ranaivo — Mpampivelatra web tanora',
      description:
        "Portfolio an'i Ranaivo Andry Ny Avo Onenantsoa, mpampivelatra web tanora any Antananarivo. Rindrankajy web sy finday amin'ny Vue.js, Node.js ary PostgreSQL. Taona faharoa amin'ny Master.",
    },
    nav: {
      home: 'Fandraisana',
      about: 'Momba ahy',
      skills: 'Fahaiza-manao',
      journey: 'Dingana',
      projects: 'Tetikasa',
      contact: 'Fifandraisana',
    },
    ui: {
      menu: 'Menio',
      close: 'Hidio',
      theme: 'Loko',
      theme_system: 'Rafitra',
      theme_light: 'Mazava',
      theme_dark: 'Maizina',
      language: 'Fiteny',
      cv: 'CV',
      back_top: 'Hiverina any ambony',
      skip: 'Hankany amin’ny votoaty',
    },
    hero: {
      status: 'Misy fotoana amin’ny andro — Master 2 mandeha',
      name: 'Onenantsoa Ranaivo',
      role: 'Mpampivelatra web tanora',
      pitch:
        'Manangana rindrankajy web sy finday feno aho: interface Vue.js azo ampiasaina tsy mila fanazavana, API Node.js matanjaka ary tahiry PostgreSQL voarindra tsara.',
      cta_projects: 'Jereo ny tetikasa',
      cta_cv: 'Alaivo ny CV',
      email: 'Mandefasa mailaka',
      full_name: 'Ranaivo Andry Ny Avo Onenantsoa',
      facts: {
        location: 'Mipetraka ao',
        location_value: 'Antananarivo, Madagasikara',
        study: 'Fanabeazana',
        study_value: 'Master 2 informatika, Université Adventiste Zurcher',
        stack: 'Stack ampiasaina',
        stack_value: 'Vue.js · Node.js · PostgreSQL',
        looking: 'Mitady',
        looking_value: 'Stage na fifandimbiasam-piofanana, amin’ny andro',
        availability: 'Fotoana malalaka',
        availability_value: 'Amin’ny andro — lesona an-tserasera 19 h – 21 h',
      },
      photo_alt: 'Sarin’i Ranaivo Andry Ny Avo Onenantsoa',
      elsewhere: 'Hitanao ahy eto',
    },
    about: {
      title: 'Manomboka amin’ny filàna ka hatramin’ny famoahana',
      lead: 'Manohy ny taona faharoa amin’ny Master informatika ao amin’ny Université Adventiste Zurcher aho, ary manangana rindrankajy web sy finday manontolo — manomboka amin’ny drafitra ka hatramin’ny fampiasana azy.',
      profile: 'Mavitrika, maharitra ary tapa-kevitra — tia miara-miasa aho.',
      p1: 'Manomboka amin’ny fahazoana ny olana ny asako: iza no mampiasa ny fitaovana, impiry, ary inona no tsy maintsy vita amin’ny hetsika iray. Avy eo ny code — Vue.js sy Quasar ho an’ny interface, Node.js sy Express ho an’ny API, PostgreSQL na MongoDB ho an’ny angona, Kotlin sy Room raha finday ny tetikasa.',
      p2: 'Tia interface mazava, tahiry angona madio ary tetikasa vita hatramin’ny farany aho. Ny antsipiriany tena zava-dehibe dia tsy miova: tsy maintsy afaka mampiasa izay natolotro ny olona iray, tsy mila fanazavana.',
      focus_title: 'Izay mandrisika ahy',
      focus_items: {
        clarity: 'Interface tsotra, na dia sarotra aza ny asa.',
        quality: 'Code voarindra, dinihina ary andramana amin’ny tena tranga.',
        team: 'Fiaraha-miasa, fanaraha-maso ary fizarana izay ianarako.',
      },
      schedule_title: 'Fandaharam-potoana ankehitriny',
      schedule_text:
        'Master 2 mandeha: atao an-tserasera ny lesona amin’ny 19 h – 21 h. Malalaka ny androko hanaovana stage na fifandimbiasam-piofanana, ary ny hariva no atokana ho an’ny fianarana.',
      stats: {
        projects: 'Tetikasa vita',
        stacks: 'Teknolojia nampiasaina',
        internships: 'Stage natao',
        languages: 'Fiteny fantatra',
      },
    },
    skills: {
      title: 'Fahaiza-manao',
      lead: 'Ireo fitaovana ampiasako isan’andro, manomboka amin’ny prototype ka hatramin’ny famoahana.',
      groups: {
        frontend: {
          title: 'Frontend',
          items: {
            vue: 'Vue.js',
            quasar: 'Quasar',
            javascript: 'JavaScript',
            html: 'HTML / CSS',
          },
        },
        backend: {
          title: 'Backend',
          items: { node: 'Node.js', express: 'Express' },
        },
        data: {
          title: 'Angona',
          items: { postgres: 'PostgreSQL', mongo: 'MongoDB' },
        },
        mobile: {
          title: 'Finday',
          items: { kotlin: 'Kotlin + Room', react_native: 'React Native' },
        },
        systems: {
          title: 'Rafitra & fitaovana',
          items: {
            linux: 'Linux Ubuntu',
            network: 'Fikojakojana rafitra sy tambajotra',
            office: 'Fitaovana birao',
            git: 'Git / GitHub',
          },
        },
      },
    },
    preview: {
      label: 'Sary voatokana',
      title: 'Tsy azo aseho ny sary',
      note: 'Voatokana amin’ny zon’olona ny sarin’ity tetikasa ity ka tsy azo aseho eto. Ny code kosa azo jerena.',
      count: 'sary voatokana',
    },
    journey: {
      title: 'Dingana',
      lead: 'Fanabeazana, traikefa matihanina ary fanamarinana, araka ny filaharan’izy ireo.',
      education: 'Fanabeazana',
      experience: 'Traikefa matihanina',
      certifications: 'Fanamarinana',
      verify: 'Jereo ny profil',
      items: {
        master: {
          period: '2026 — ankehitriny',
          title: 'Master 2 amin’ny informatika',
          place: 'Université Adventiste Zurcher',
          detail:
            'Lesona an-tserasera 19 h – 21 h, miaraka amin’ny stage na fifandimbiasam-piofanana amin’ny andro.',
        },
        licence: {
          period: '2023 — 2025',
          title: 'Licence amin’ny informatika',
          place: 'Université Adventiste Zurcher',
        },
        bac: {
          period: '2020 — 2022',
          title: 'Baccalauréat série D',
          place: 'Collège Saint Michel Itaosy',
        },
        tresorerie: {
          period: '11 aogositra — 11 oktobra',
          title: 'Stage amin’ny fampivelarana',
          place: "Trésorerie ministérielle de l'Éducation — Minisiteran'ny Toekarena sy ny Vola",
          detail: 'Fampivelarana rindrankajy fanisana antontan-taratasy amin’ny Vue.js sy Node.js.',
        },
        nexthope: {
          period: 'Jolay — septambra 2024',
          title: 'Stage amin’ny fampivelarana',
          place: 'NEXTHOPE',
          detail:
            'Fampivelarana rindrankajy hitantanana ny fandraisana mpiasa mifandray amin’ny Odoo.',
        },
        imra: {
          period: '4 — 29 septambra 2023',
          title: 'Stage fandinihana',
          place: 'IMRA',
          detail: 'Fandinihana ny tambajotra sy ny fotodrafitrasa informatika ao amin’ny orinasa.',
        },
        userfeel: {
          period: '',
          title: 'Mpitsapa traikefa mpampiasa voamarina',
          place: 'Userfeel',
        },
      },
    },
    missions: {
      nexthope: [
        'Fampivelarana rindrankajy hitantanana ny fandraisana mpiasa',
        'Fampifandraisana ny rindrankajy amin’ny Odoo',
      ],
      imra: [
        'Fandinihana ny tambajotran’ny orinasa',
        'Fahafantarana ny fotodrafitrasa informatika',
      ],
    },
    projects: {
      title: 'Tetikasa',
      lead: 'Rindrankajy telo vita: fitantanana vola, fanarahana ora ary fanisana antontan-taratasy.',
      code: 'Jereo ny code',
      gallery_label: 'Sarin’ny tetikasa',
      badge_label: 'Badge',
      items: {
        moneywise: {
          kind: 'Rindrankajy Android',
          summary:
            'Fitantanana vola manokana: fanaraha-maso ny fandaniana, tetibola isaky ny sokajy ary tantara feno azo jerena tsy misy internet amin’ny alalan’ny Room.',
        },
        timesheet: {
          kind: 'Rindrankajy web',
          summary:
            'Fanarahana ny ora fiasana: fampidirana ora, tableau de bord isaky ny tetikasa ary fanondranana angona, manomboka amin’ny Vue.js ka hatramin’ny PostgreSQL.',
        },
        docscan: {
          name: 'Fanisana antontan-taratasy',
          kind: 'Rindrankajy matihanina',
          summary:
            'Rindrankajy fanisana antontan-taratasy novolavolaina nandritra ny stage tao amin’ny Trésorerie ministérielle de l’Éducation: fampidirana, fanodinana ary fitahirizana antontan-taratasy, amin’ny Vue.js sy Node.js.',
        },
      },
    },
    languages: {
      title: 'Fiteny',
      lead: 'Miasa amin’ny teny frantsay sy malagasy aho, ary manohy mianatra anglisy.',
      items: {
        mg: { name: 'Malagasy', note: 'Fiteny nibeazana' },
        fr: { name: 'Frantsay', note: 'Fiteny faharoa' },
        en: { name: 'Anglisy', note: 'Antonony' },
      },
    },
    contact: {
      title: 'Andao hiresaka ny tetikasanao',
      lead: 'Misy tolotra stage, fiaraha-miasa, na fanontaniana fotsiny? Manorata amiko, hamaly aho.',
      email_label: 'Mailaka',
      phone_label: 'Telefaona',
      copy_email: 'Adikao ny adiresy',
      copied: 'Voadika ny adiresy',
      location_label: 'Toerana',
      location: 'Antananarivo, Madagasikara',
      socials: 'Any amin’ny hafa',
      form: {
        name: 'Anarana',
        name_placeholder: 'Ny anaranao',
        email: 'Mailaka',
        email_placeholder: 'ianao@ohatra.com',
        message: 'Hafatra',
        message_placeholder: 'Izay tianao hatao…',
        submit: 'Alefa ny hafatra',
        sending: 'Mandefa…',
        success: 'Nalefa ny hafatra. Misaotra!',
        error: 'Tsy nahomby ny fandefasana. Andramo indray na manorata mailaka mivantana.',
        fallback: 'Nosokafana ny mpandefa mailaka miaraka amin’ny hafatra efa vonona.',
      },
      privacy: 'Ny mombamomba anao dia ampiasaina hamaliana anao ihany.',
    },
    footer: {
      note: 'Noforonina sy novolavolain’i Onenantsoa.',
      built_with: 'Vue.js · Quasar · Motion',
      rights: 'Zo rehetra voatokana',
      userfeel: 'Mpitsapa UX ao amin’ny Userfeel',
    },
    notFound: {
      title: 'Tsy misy ity pejy ity',
      text: 'Nafindra toerana na tsy nisy mihitsy ny pejy nangatahinao. Ny portfolio kosa mbola eto.',
      action: 'Hiverina any amin’ny fandraisana',
    },
  },
}
