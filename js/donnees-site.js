/* =====================================================================
   RAPHAËL DOUCET — PORTFOLIO · DONNÉES DU SITE
   Fichier unique partagé par toutes les pages.
   Pour remplacer une photo : renseigner « fichier » (URL d’une image
   optimisée web, ~2400 px sur le grand côté, JPEG ou WebP).
   Tant que « fichier » est vide, un emplacement identifié s’affiche.
   ===================================================================== */
window.RD = {

  /* ---------- Coordonnées ---------- */
  site: {
    email: 'raphael1doucet56@gmail.com',
    telephone: '06 95 24 33 08',
    instagram: '_raphael_visual',
    localisation: 'Gourin, Bretagne, France',
    photoAccueil: 'accueil-01',
    cadrageAccueil: 'center bottom'
  },

  /* ---------- Accueil : quelques images en aperçu (3 conseillées) ---------- */
  apercuAccueil: ['merleac-08', 'bretagne-04', 'portrait-01'],

  /* ---------- Page Portfolio : les catégories (ordre d’affichage) ----------
     couverture = id de la photo qui représente la catégorie. */
  /* Photos « archives » (ancien site, couple / grossesse) : conservées mais
     retirées de la page Portrait à la demande de Raphaël (3 nov. 2026). */
  categories: [
    { id: 'sport',        titre: 'Sport',        description: 'Photographie sportive et action.',          page: 'sport.html',        couverture: 'merleac-06' },
    { id: 'evenementiel', titre: 'Événementiel', description: 'Reportages et événements.',                 page: 'evenementiel.html', couverture: 'cornouaille-03' },
    { id: 'portrait',     titre: 'Portrait',     description: 'Portraits et photographie humaine.',        page: 'portrait.html',     couverture: 'portrait-01' },
    { id: 'bretagne',     titre: 'Bretagne',     description: 'Paysages, patrimoine et littoral breton.',  page: 'Bretagne.dc.html',     couverture: 'bretagne-01' },
    { id: 'animalier',    titre: 'Animalier',    description: 'Photographie animalière.',                  page: 'animalier.html',    couverture: 'animalier-01' }
  ],

  /* ---------- Reportages (pages Sport et Événementiel) ----------
     Chaque reportage a sa propre page (champ « page »).
     Pour ajouter un reportage : copier un bloc, changer l’id,
     donner cet id aux photos concernées (champ « projet »)
     — la page du reportage est créée dans le canvas. */
  projets: [
    {
      id: 'merleac-2026',
      page: 'reportage-merleac-2026.html',
      categorie: 'sport',
      surtitre: 'Reportage · Septembre 2026',
      titre: 'MERLÉAC 2026',
      sousTitre: 'Championnat de France de Moto de Côte',
      texte: 'Reportage photographique réalisé lors du Championnat de France de Moto de Côte à Merléac en septembre 2026.',
      couverture: 'merleac-01'
    },
    {
      id: 'cross-country-2024',
      page: 'reportage-cross-country-2024.html',
      categorie: 'sport',
      surtitre: 'Reportage · Novembre 2024',
      titre: 'CROSS-COUNTRY 2024',
      sousTitre: 'Course de cross-country',
      texte: '',
      couverture: 'sport-25'
    },
    {
      id: 'guingamp-feminines-2024',
      page: 'reportage-guingamp-feminines-2024.html',
      categorie: 'sport',
      surtitre: 'Reportage · Octobre 2024',
      titre: 'GUINGAMP FÉMININES 2024',
      sousTitre: 'Match de football féminin · En Avant Guingamp',
      texte: '',
      couverture: 'guingamp-match-03'
    },
    {
      id: 'festival-cornouaille',
      page: 'reportage-festival-cornouaille.html',
      categorie: 'evenementiel',
      surtitre: 'Reportage',
      titre: 'FESTIVAL DE CORNOUAILLE',
      sousTitre: 'Quimper, Bretagne',
      texte: '',
      couverture: 'cornouaille-03'
    },
    {
      id: 'fete-sainte-julienne',
      page: 'reportage-fete-sainte-julienne.html',
      categorie: 'evenementiel',
      surtitre: 'Reportage',
      titre: 'FÊTE SAINTE-JULIENNE',
      sousTitre: 'Pardon breton autour d’une chapelle',
      texte: '',
      couverture: 'sainte-julienne-01'
    },
    {
      id: 'courses-tondeuse-glomel-2024',
      page: 'reportage-tondeuse-glomel-2024.html',
      categorie: 'evenementiel',
      surtitre: 'Reportage · 2024',
      titre: 'COURSES DE TRACTEUR TONDEUSE',
      sousTitre: 'Glomel, 2024',
      texte: '',
      couverture: 'tondeuse-glomel-01'
    },
    {
      id: 'en-attendant',
      page: 'reportage-en-attendant.html',
      categorie: 'portrait',
      surtitre: 'Séance · Grossesse',
      titre: 'EN ATTENDANT',
      sousTitre: 'Une séance autour de l’attente, de la complicité et des premiers instants d’une nouvelle histoire.',
      texte: '',
      couverture: 'en-attendant-06'
    }
  ],

  /* ---------- Vidéos ----------
     Vide = la page Vidéo affiche « Bientôt disponible ».
     Pour l’activer, ajouter un projet :
     { titre: '…', description: '…', miniature: 'URL image 16:9',
       lien: 'https://www.youtube.com/watch?v=… ou https://vimeo.com/…' } */
  videos: [],

  /* ---------- Photographies ----------
     id, fichier, titre, description, lieu, date (facultatifs sauf id)
     categorie : accueil | sport | evenementiel | portrait | bretagne | animalier | apropos
     projet    : id du reportage (sport / événementiel)
     format    : 'plein' = pleine largeur (Bretagne, reportages)
     lieu      : sur la page Bretagne, les photos sont regroupées par lieu
                 dès que ce champ est renseigné (Penmarc’h, Saint-Guénolé…)
     ratio     : proportions de l’emplacement vide (la vraie photo garde son ratio)
     alt       : texte alternatif (sinon généré automatiquement) */
  photos: [
    { id: 'accueil-01', fichier: 'images/accueil-01.jpg', titre: '', alt: 'Ligne de sapins sous un ciel blanc — photographie de Raphaël Doucet', categorie: 'accueil', ratio: '2560/1439' },  // DSC02144

    /* Reportage MERLÉAC 2026 — une seule galerie, dans l’ordre ci-dessous.
       Ajouter une photo : copier une ligne, nouvel id, nouveau « fichier ».
       format: 'plein' = image affichée sur toute la largeur. */
    { id: 'merleac-01', fichier: 'images/merleac-01.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', format: 'plein', ratio: '2048/1152' },
    { id: 'merleac-02', fichier: 'images/merleac-02.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1024' },
    { id: 'merleac-03', fichier: 'images/merleac-03.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1151' },
    { id: 'merleac-04', fichier: 'images/merleac-04.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1009' },
    { id: 'merleac-05', fichier: 'images/merleac-05.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1024' },
    { id: 'merleac-06', fichier: 'images/merleac-06.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', format: 'plein', ratio: '2048/1151' },
    { id: 'merleac-07', fichier: 'images/merleac-07.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1151' },
    { id: 'merleac-08', fichier: 'images/merleac-08.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1151' },
    { id: 'merleac-09', fichier: 'images/merleac-09.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1151' },
    { id: 'merleac-10', fichier: 'images/merleac-10.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1151' },
    { id: 'merleac-11', fichier: 'images/merleac-11.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', format: 'plein', ratio: '2048/1152' },
    { id: 'merleac-12', fichier: 'images/merleac-12.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1151' },
    { id: 'merleac-13', fichier: 'images/merleac-13.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1151' },
    { id: 'merleac-14', fichier: 'images/merleac-14.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1024' },
    { id: 'merleac-15', fichier: 'images/merleac-15.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', ratio: '2048/1365' },
    { id: 'merleac-16', fichier: 'images/merleac-16.jpg', titre: '', lieu: 'Merléac', date: 'Septembre 2026', categorie: 'sport', projet: 'merleac-2026', format: 'plein', ratio: '2048/1151' },

    /* Reportage FESTIVAL DE CORNOUAILLE — une seule galerie, dans l’ordre ci-dessous.
       Ajouter une photo : copier une ligne, nouvel id, nouveau « fichier ». */
    { id: 'cornouaille-01', fichier: 'images/cornouaille-01.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', format: 'plein', ratio: '2048/1151' },
    { id: 'cornouaille-02', fichier: 'images/cornouaille-02.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/2048' },
    { id: 'cornouaille-03', fichier: 'images/cornouaille-03.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/1151' },
    { id: 'cornouaille-04', fichier: 'images/cornouaille-04.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/1151' },
    { id: 'cornouaille-05', fichier: 'images/cornouaille-05.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/1151' },
    { id: 'cornouaille-06', fichier: 'images/cornouaille-06.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', format: 'plein', ratio: '2048/1152' },
    { id: 'cornouaille-07', fichier: 'images/cornouaille-07.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/1152' },
    { id: 'cornouaille-08', fichier: 'images/cornouaille-08.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/1152' },
    { id: 'cornouaille-09', fichier: 'images/cornouaille-09.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', format: 'plein', ratio: '2048/1151' },
    { id: 'cornouaille-10', fichier: 'images/cornouaille-10.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/1151' },
    { id: 'cornouaille-11', fichier: 'images/cornouaille-11.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/1152' },
    { id: 'cornouaille-12', fichier: 'images/cornouaille-12.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', format: 'plein', ratio: '2048/1152' },
    { id: 'cornouaille-13', fichier: 'images/cornouaille-13.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '2048/2048' },
    { id: 'cornouaille-14', fichier: 'images/cornouaille-14.jpg', titre: '', lieu: 'Quimper', date: '', categorie: 'evenementiel', projet: 'festival-cornouaille', ratio: '1151/2048' },

    /* Reportage FÊTE SAINTE-JULIENNE — une seule galerie, dans l’ordre ci-dessous. */
    { id: 'sainte-julienne-01', fichier: 'images/sainte-julienne-01.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', format: 'plein', ratio: '2048/1365' },
    { id: 'sainte-julienne-02', fichier: 'images/sainte-julienne-02.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '1365/2048' },
    { id: 'sainte-julienne-03', fichier: 'images/sainte-julienne-03.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '1152/2048' },
    { id: 'sainte-julienne-04', fichier: 'images/sainte-julienne-04.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', format: 'plein', ratio: '2048/1365' },
    { id: 'sainte-julienne-05', fichier: 'images/sainte-julienne-05.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '2048/2048' },
    { id: 'sainte-julienne-06', fichier: 'images/sainte-julienne-06.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '2048/2048' },
    { id: 'sainte-julienne-07', fichier: 'images/sainte-julienne-07.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', format: 'plein', ratio: '2048/1365' },
    { id: 'sainte-julienne-08', fichier: 'images/sainte-julienne-08.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '2048/2048' },
    { id: 'sainte-julienne-09', fichier: 'images/sainte-julienne-09.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '2048/2048' },
    { id: 'sainte-julienne-10', fichier: 'images/sainte-julienne-10.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '1365/2048' },
    { id: 'sainte-julienne-11', fichier: 'images/sainte-julienne-11.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '1152/2048' },
    { id: 'sainte-julienne-12', fichier: 'images/sainte-julienne-12.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', format: 'plein', ratio: '2048/1024' },
    { id: 'sainte-julienne-13', fichier: 'images/sainte-julienne-13.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '1365/2048' },
    { id: 'sainte-julienne-14', fichier: 'images/sainte-julienne-14.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '1152/2048' },
    { id: 'sainte-julienne-16', fichier: 'images/sainte-julienne-16.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '2048/2048' },
    { id: 'sainte-julienne-17', fichier: 'images/sainte-julienne-17.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', ratio: '2048/2048' },
    { id: 'sainte-julienne-18', fichier: 'images/sainte-julienne-18.jpg', titre: '', lieu: '', date: '', categorie: 'evenementiel', projet: 'fete-sainte-julienne', format: 'plein', ratio: '2048/1152' },

    /* Reportage COURSES DE TRACTEUR TONDEUSE — Glomel 2024. Une seule galerie. */
    { id: 'tondeuse-glomel-01', fichier: 'images/tondeuse-glomel-01.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', format: 'plein', ratio: '2048/1024' },
    { id: 'tondeuse-glomel-02', fichier: 'images/tondeuse-glomel-02.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/2048' },
    { id: 'tondeuse-glomel-03', fichier: 'images/tondeuse-glomel-03.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/2048' },
    { id: 'tondeuse-glomel-04', fichier: 'images/tondeuse-glomel-04.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', format: 'plein', ratio: '2048/1024' },
    { id: 'tondeuse-glomel-05', fichier: 'images/tondeuse-glomel-05.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/1365' },
    { id: 'tondeuse-glomel-06', fichier: 'images/tondeuse-glomel-06.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/1365' },
    { id: 'tondeuse-glomel-07', fichier: 'images/tondeuse-glomel-07.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', format: 'plein', ratio: '2048/1024' },
    { id: 'tondeuse-glomel-08', fichier: 'images/tondeuse-glomel-08.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/1024' },
    { id: 'tondeuse-glomel-09', fichier: 'images/tondeuse-glomel-09.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/1024' },
    { id: 'tondeuse-glomel-10', fichier: 'images/tondeuse-glomel-10.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', format: 'plein', ratio: '2048/1024' },
    { id: 'tondeuse-glomel-11', fichier: 'images/tondeuse-glomel-11.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/1365' },
    { id: 'tondeuse-glomel-12', fichier: 'images/tondeuse-glomel-12.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/1365' },
    { id: 'tondeuse-glomel-13', fichier: 'images/tondeuse-glomel-13.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/1365' },
    { id: 'tondeuse-glomel-14', fichier: 'images/tondeuse-glomel-14.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', ratio: '2048/2048' },
    { id: 'tondeuse-glomel-15', fichier: 'images/tondeuse-glomel-15.jpg', titre: '', lieu: 'Glomel', date: '2024', categorie: 'evenementiel', projet: 'courses-tondeuse-glomel-2024', format: 'plein', ratio: '2048/1024' },

    /* Projet EN ATTENDANT (Portrait · séance grossesse) — une seule galerie.
       Ajouter une photo : copier une ligne avec projet: 'en-attendant'.
       Sans aucune photo, le projet n’apparaît pas. */
    { id: 'en-attendant-01', fichier: 'images/en-attendant-01.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', format: 'plein', ratio: '2048/1151' },
    { id: 'en-attendant-02', fichier: 'images/en-attendant-02.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '2048/1151' },
    { id: 'en-attendant-03', fichier: 'images/en-attendant-03.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '2048/1151' },
    { id: 'en-attendant-04', fichier: 'images/en-attendant-04.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '1151/2048' },
    { id: 'en-attendant-05', fichier: 'images/en-attendant-05.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '1151/2048' },
    { id: 'en-attendant-06', fichier: 'images/en-attendant-06.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', format: 'plein', ratio: '2048/1151' },
    { id: 'en-attendant-07', fichier: 'images/en-attendant-07.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '1152/2048' },
    { id: 'en-attendant-08', fichier: 'images/en-attendant-08.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '681/1210' },
    { id: 'en-attendant-09', fichier: 'images/en-attendant-09.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '2048/2048' },
    { id: 'en-attendant-10', fichier: 'images/en-attendant-10.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '1463/1463' },
    { id: 'en-attendant-11', fichier: 'images/en-attendant-11.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', format: 'plein', ratio: '2048/1152' },
    { id: 'en-attendant-12', fichier: 'images/en-attendant-12.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '2048/1151' },
    { id: 'en-attendant-13', fichier: 'images/en-attendant-13.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '2048/1152' },
    { id: 'en-attendant-14', fichier: 'images/en-attendant-14.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '1152/2048' },
    { id: 'en-attendant-15', fichier: 'images/en-attendant-15.jpg', titre: '', lieu: '', date: '', categorie: 'portrait', projet: 'en-attendant', ratio: '2048/2048' },
    { id: 'portrait-01', fichier: 'images/portrait-01.jpg', titre: '', lieu: '', date: '', categorie: 'archives', serie: 'Couple / Grossesse', alt: 'Photo en noir et blanc de deux mains de couple qui se tiennent, alliance visible, bord de mer breton en arrière-plan', ratio: '1800/1800' },
    { id: 'portrait-02', fichier: 'images/portrait-02.jpg', titre: '', lieu: '', date: '', categorie: 'archives', serie: 'Couple / Grossesse', alt: 'Photo en noir et blanc d\'un couple marchant main dans la main vers la mer sur une plage rocheuse, effet artistique', ratio: '1800/1012' },
    { id: 'portrait-03', fichier: 'images/portrait-03.jpg', titre: '', lieu: '', date: '', categorie: 'archives', serie: 'Couple / Grossesse', alt: 'Photo aux tons bleu-vert d\'un couple s\'enlaçant face à la mer, effet artistique, littoral rocheux', ratio: '1800/900' },
    { id: 'portrait-04', fichier: 'images/portrait-04.jpg', titre: '', lieu: '', date: '', categorie: 'archives', serie: 'Couple / Grossesse', alt: 'Photo en noir et blanc en gros plan d\'un ventre de femme enceinte, mains formant un cœur', ratio: '1800/1800' },
    { id: 'portrait-05', fichier: 'images/portrait-05.jpg', titre: '', lieu: '', date: '', categorie: 'archives', serie: 'Couple / Grossesse', alt: 'Photo d\'un couple enceinte s\'enlaçant tendrement sur une plage, pieds nus dans le sable, ciel bleu', ratio: '1012/1800' },
    { id: 'portrait-06', fichier: 'images/portrait-06.jpg', titre: '', lieu: '', date: '', categorie: 'archives', serie: 'Couple / Grossesse', alt: 'Photo d\'un couple enceinte se tenant la main sur une plage, falaise et mer en arrière-plan', ratio: '1800/1012' },

    { id: 'bretagne-01', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', format: 'plein', ratio: '16/9' },
    { id: 'bretagne-02', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', ratio: '3/2' },
    { id: 'bretagne-03', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', ratio: '3/2' },
    { id: 'bretagne-04', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', format: 'plein', ratio: '2/1' },
    { id: 'bretagne-05', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', ratio: '2/3' },
    { id: 'bretagne-06', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', ratio: '2/3' },
    { id: 'bretagne-07', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', format: 'plein', ratio: '16/9' },
    { id: 'bretagne-08', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', ratio: '3/2' },
    { id: 'bretagne-09', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', ratio: '3/2' },
    { id: 'bretagne-10', fichier: '', titre: '', lieu: '', date: '', categorie: 'bretagne', format: 'plein', ratio: '21/9' },
    { id: 'animalier-01', fichier: 'images/animalier-01.jpg', titre: '', lieu: '', date: '', categorie: 'animalier', serie: 'Animaux domestiques', alt: 'Portrait en gros plan d\'un chat Maine Coon crème et roux aux yeux ambrés, oreilles à pinceaux, fond sombre', ratio: '1200/1800' },
    { id: 'animalier-02', fichier: 'images/animalier-02.jpg', titre: '', lieu: '', date: '', categorie: 'animalier', serie: 'Animaux domestiques', alt: 'Photo en noir et blanc d\'un chat allongé sur le dos sur un plaid à motifs, une patte levée', ratio: '1800/1200' },
    { id: 'animalier-03', fichier: 'images/animalier-03.jpg', titre: '', lieu: '', date: '', categorie: 'animalier', serie: 'Animaux domestiques', alt: 'Portrait en gros plan d\'un chaton tigré gris aux yeux clairs, sur un plaid à motifs', ratio: '1200/1800' },
    { id: 'animalier-04', fichier: 'images/animalier-04.jpg', titre: '', lieu: '', date: '', categorie: 'animalier', serie: 'Animaux domestiques', alt: 'Photo en noir et blanc d\'un chaton et d\'un chat adulte à poil long assis côte à côte sur un lit', ratio: '1800/1405' },
    { id: 'animalier-05', fichier: '', titre: '', lieu: '', date: '', categorie: 'animalier', ratio: '4/5' },
    { id: 'animalier-06', fichier: 'images/animalier-06.jpg', titre: '', lieu: '', date: '', categorie: 'animalier', serie: 'Animaux domestiques', alt: 'Portrait d\'un rottweiler la tête levée devant un mur de pierre', ratio: '1200/1800' },
    { id: 'animalier-07', fichier: '', titre: '', lieu: '', date: '', categorie: 'animalier', ratio: '2/3' },
    { id: 'animalier-08', fichier: '', titre: '', lieu: '', date: '', categorie: 'animalier', ratio: '3/2' },

    { id: 'guingamp-match-01', fichier: 'images/guingamp-match-01.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse de l\'En Avant Guingamp portant le numéro 9, maillot rouge, vue de dos, adversaire en bleu flou à l\'arrière-plan, sous la pluie', ratio: '1200/1800' },
    { id: 'guingamp-match-02', fichier: 'images/guingamp-match-02.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse portant le numéro 11, maillot rouge, vue de dos, remplaçantes assises sur le banc en arrière-plan', ratio: '1800/900' },
    { id: 'guingamp-match-03', fichier: 'images/guingamp-match-03.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse de l\'En Avant Guingamp en duel avec deux adversaires en bleu, action de dribble sous la pluie', ratio: '1800/1077' },
    { id: 'guingamp-match-04', fichier: 'images/guingamp-match-04.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse portant le brassard de capitaine et le numéro 8, maillot rouge, courant devant ses coéquipières, vue de dos', ratio: '1800/1476' },
    { id: 'guingamp-match-05', fichier: 'images/guingamp-match-05.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse de l\'En Avant Guingamp portant le numéro 2, maillot Celtigel, frappant le ballon en pleine extension, bras écartés', ratio: '1800/900' },
    { id: 'guingamp-match-06', fichier: 'images/guingamp-match-06.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Portrait de la capitaine de l\'En Avant Guingamp, maillot rouge et noir floqué Celtigel, brassard de capitaine, vue de face', ratio: '1200/1800' },
    { id: 'guingamp-match-07', fichier: 'images/guingamp-match-07.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse portant le numéro 8 tirant un coup franc, adversaires en bleu formant un mur, bras levés pour se protéger le visage', ratio: '1800/900' },
    { id: 'guingamp-match-08', fichier: 'images/guingamp-match-08.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Photo en noir et blanc en gros plan du numéro 1 floqué sur un maillot', ratio: '688/688' },
    { id: 'guingamp-match-09', fichier: 'images/guingamp-match-09.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse portant le numéro 5, maillot rouge à manches longues, courant sur le terrain, adversaire en bleu en arrière-plan', ratio: '1800/900' },
    { id: 'guingamp-match-10', fichier: 'images/guingamp-match-10.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse de l\'En Avant Guingamp portant le numéro 9, maillot Celtigel, coéquipière numéro 10 courant derrière elle', ratio: '1102/1800' },
    { id: 'guingamp-match-11', fichier: 'images/guingamp-match-11.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Groupe de joueuses de l\'En Avant Guingamp s\'échauffant devant le banc de touche rouge, capitaine au brassard au premier plan', ratio: '1800/1012' },
    { id: 'guingamp-match-12', fichier: 'images/guingamp-match-12.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Portrait de la joueuse portant le numéro 4, maillot Celtigel, debout devant les cages, regard vers l\'objectif', ratio: '1800/1440' },
    { id: 'guingamp-match-13', fichier: 'images/guingamp-match-13.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Joueuse portant le numéro 10, maillot rouge et noir, en pleine course, gardienne en vert visible près des cages à l\'arrière-plan', ratio: '1800/1399' },
    { id: 'guingamp-match-14', fichier: 'images/guingamp-match-14.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Arbitre assistant brandissant le drapeau de touche, maillot vert clair, short noir', ratio: '1012/1800' },
    { id: 'guingamp-match-15', fichier: 'images/guingamp-match-15.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Photo en noir et blanc avec effet de filé, joueuse portant le numéro 8 en pleine course, coéquipières floues à l\'arrière-plan', ratio: '1800/1013' },
    { id: 'guingamp-match-16', fichier: 'images/guingamp-match-16.jpg', titre: '', lieu: '', date: 'Octobre 2024', categorie: 'sport', projet: 'guingamp-feminines-2024', serie: 'Football — Match Guingamp Féminines', alt: 'Gardienne de but vue de dos, maillot vert numéro 1, gants de gardien, joueuses en action à l\'arrière-plan', ratio: '1800/1013' },
    { id: 'sport-12', fichier: 'images/sport-12.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Coureur de cross vu de dos portant le maillot rose BGA orné du drapeau breton, franchissant la ligne d\'arrivée sous la pluie', ratio: '1800/900' },
    { id: 'sport-13', fichier: 'images/sport-13.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Trois jeunes coureurs de cross marchant après l\'arrivée, dossards du C.J.F. Saint-Malo et de l\'ALCP Carhaix', ratio: '1800/1076' },
    { id: 'sport-14', fichier: 'images/sport-14.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Photo en noir et blanc d\'un peloton de quatre coureuses de cross en pleine action, dossard numéro 32', ratio: '1800/900' },
    { id: 'sport-15', fichier: 'images/sport-15.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Coureuse de cross vue de dos portant le maillot orange de l\'ALCP Carhaix, devant une forêt aux couleurs automnales', ratio: '1800/900' },
    { id: 'sport-16', fichier: 'images/sport-16.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Coureuse du SCO Angers Athlé célébrant son arrivée bras écartés, couverte de boue, sous les applaudissements du public', ratio: '1800/1013' },
    { id: 'sport-17', fichier: 'images/sport-17.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Photo en noir et blanc d\'un coureur de cross de profil portant un bandeau, en pleine course', ratio: '1800/1200' },
    { id: 'sport-18', fichier: 'images/sport-18.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Coureur portant le dossard 77 franchissant un obstacle en bois lors d\'une course de cross en forêt', ratio: '1800/1112' },
    { id: 'sport-19', fichier: 'images/sport-19.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Groupe de jeunes coureurs de cross en pleine course sur terrain boueux, dossards de l\'ALCP Carhaix et de Quimper Athlétisme', ratio: '1800/1046' },
    { id: 'sport-20', fichier: 'images/sport-20.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Deux jeunes coureurs de cross assis au sol après l\'arrivée, jambes couvertes de boue, dossard de l\'A.P.L.O. Lorient', ratio: '1800/900' },
    { id: 'sport-21', fichier: 'images/sport-21.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Photo en noir et blanc de trois coureurs de cross en pleine action, dossards de Brest Triathlon et Groupama', ratio: '1800/900' },
    { id: 'sport-22', fichier: 'images/sport-22.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Coureur de cross en pleine foulée, éclairé par une lumière rasante, dossard Brest Triathlon', ratio: '1168/1800' },
    { id: 'sport-23', fichier: 'images/sport-23.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Coureur des Athletic Clubs du Littoral 44 traversant une flaque de boue en pleine éclaboussure, dossard 88', ratio: '1012/1800' },
    { id: 'sport-24', fichier: 'images/sport-24.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Coureur en sprint final dans la boue, dossard 68, banderole Leclerc en arrière-plan', ratio: '1800/1800' },
    { id: 'sport-25', fichier: 'images/sport-25.jpg', titre: '', lieu: '', date: 'Novembre 2024', categorie: 'sport', projet: 'cross-country-2024', serie: 'Cross-country', alt: 'Groupe de coureurs de cross en plein sprint dans la boue, éclaboussures, dossards 481 et 474', ratio: '1800/1384' },
    { id: 'portrait-raphael', fichier: '', categorie: 'apropos', ratio: '4/5' }
  ]
};
