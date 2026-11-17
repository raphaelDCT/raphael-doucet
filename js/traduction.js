/* =====================================================================
   RAPHAËL DOUCET — TRADUCTION FR / EN
   Le site est écrit en français. Ce fichier l’affiche en anglais :
   - automatiquement si le navigateur du visiteur n’est pas en français ;
   - ou quand le visiteur choisit « EN » dans le menu (choix mémorisé).
   Pour ajouter ou corriger une traduction : compléter DICT ci-dessous
   (texte français exact à gauche, anglais à droite).
   ===================================================================== */
(function () {
  'use strict';
  if (window.__rdI18n) return;   /* une seule instance par page */
  window.__rdI18n = true;
  var KEY = 'rd-lang';

  var DICT = {
    /* ---------- Navigation, pied de page ---------- */
    'Accueil': 'Home',
    'Portfolio': 'Portfolio',
    'Vidéo': 'Video',
    'À propos': 'About',
    'Contact': 'Contact',
    'Menu': 'Menu',
    'Ouvrir le menu': 'Open menu',
    'Fermer le menu': 'Close menu',
    'Navigation principale': 'Main navigation',
    'Navigation mobile': 'Mobile navigation',
    'Pied de page': 'Footer',
    'Fil d’Ariane': 'Breadcrumb',
    'Poursuivre la visite': 'Keep exploring',
    'Raphaël Doucet — Photographe · Vidéaste': 'Raphaël Doucet — Photographer · Filmmaker',
    'Raphaël Doucet — Photographe': 'Raphaël Doucet — Photographer',
    'Raphaël Doucet · Bretagne, France — Toutes les photographies sont protégées par le droit d’auteur. Reproduction interdite sans autorisation.':
      'Raphaël Doucet · Brittany, France — All photographs are protected by copyright. No reproduction without permission.',
    'Instagram @': 'Instagram @',

    /* ---------- Accueil ---------- */
    'Présentation': 'Introduction',
    'Photographe · Vidéaste': 'Photographer · Filmmaker',
    'Photo et vidéo : sport, événementiel, portrait et Bretagne.': 'Photo and video: sport, events, portraits and Brittany.',
    'Découvrir le portfolio': 'View the portfolio',
    'Me contacter': 'Get in touch',
    'En bref': 'At a glance',
    'Basé en': 'Based in',
    'Bretagne': 'Brittany',
    'Disponible': 'Available',
    'Partout en France': 'Throughout France',
    'Images': 'Work',
    'Photo & vidéo': 'Photo & video',
    'Mes univers photographiques': 'What I photograph',
    'Quatre façons de raconter un moment, de la compétition à l’intime.': 'Four ways to tell a moment, from competition to intimacy.',
    'Tout le portfolio': 'Full portfolio',
    'Sport': 'Sport',
    'Événement': 'Events',
    'Événementiel': 'Events',
    'Portrait': 'Portrait',
    'Animalier': 'Wildlife',
    'Photographie sportive et action': 'Sports and action photography',
    'Festivals, manifestations et événements': 'Festivals, gatherings and events',
    'Portraits, couples et moments personnels': 'Portraits, couples and personal moments',
    'Animaux et photographie de nature': 'Animals and nature photography',
    'Reportages': 'Stories',
    'Projets récents': 'Recent projects',
    'Des séries complètes, du premier repérage à la dernière image.': 'Complete series, from the first scouting to the last frame.',
    'Voir le reportage': 'View the story',
    'Prestations': 'Services',
    'Ce que je vous propose': 'What I offer',
    'Pour les clubs, organisateurs, entreprises et particuliers.': 'For clubs, organisers, businesses and individuals.',
    'Couverture sportive': 'Sports coverage',
    'Matchs, courses et compétitions : l’action, l’émotion et les coulisses.': 'Matches, races and competitions: the action, the emotion and what happens behind the scenes.',
    'Voir le sport →': 'See sport →',
    'Reportage événementiel': 'Event coverage',
    'Festivals, fêtes locales et manifestations racontés en série.': 'Festivals, local celebrations and gatherings told as a series.',
    'Voir les événements →': 'See events →',
    'Séance portrait': 'Portrait session',
    'Portraits, couples et grossesse, en extérieur ou sur le littoral breton.': 'Portraits, couples and maternity, outdoors or on the Breton coast.',
    'Voir les portraits →': 'See portraits →',
    'Création vidéo': 'Video production',
    'Contenus vidéo pour les réseaux, les événements et les marques.': 'Video content for social media, events and brands.',
    'Voir la vidéo →': 'See video →',
    'Le photographe': 'The photographer',
    'Qui suis-je ?': 'About me',
    'Photographe et vidéaste indépendant basé en Bretagne.': 'Independent photographer and filmmaker based in Brittany.',
    'Mon approche repose sur l’observation, la recherche de moments forts et une attention particulière portée à la lumière, au mouvement et à l’ambiance. Je suis disponible pour des projets en Bretagne et partout en France.':
      'My approach is built on observation, on looking for the moments that matter, and on close attention to light, movement and atmosphere. I’m available for projects in Brittany and throughout France.',
    'Observation': 'Observation',
    'Anticiper le moment plutôt que le provoquer.': 'Anticipating the moment rather than forcing it.',
    'Lumière': 'Light',
    'Composer avec la lumière naturelle, quelle qu’elle soit.': 'Working with natural light, whatever it brings.',
    'Mouvement': 'Movement',
    'Garder l’énergie et l’ambiance de l’instant.': 'Keeping the energy and atmosphere of the moment.',
    'En savoir plus': 'Learn more',

    /* ---------- Portfolio, catégories ---------- */
    'Mon travail, organisé par catégorie. Choisissez une catégorie pour découvrir les galeries et les reportages.':
      'My work, organised by category. Choose a category to explore the galleries and stories.',
    'Explorer': 'Explore',
    'Photographie sportive et action.': 'Sports and action photography.',
    'Reportages et événements.': 'Stories and events.',
    'Portraits et photographie humaine.': 'Portraits and people photography.',
    'Paysages, patrimoine et littoral breton.': 'Landscapes, heritage and the Breton coast.',
    'Photographie animalière.': 'Wildlife photography.',
    'Photographie sportive et action. Reportages réalisés en compétition.': 'Sports and action photography. Stories shot during competitions.',
    'Reportages et événements : l’action, les participants, les moments importants, les détails, l’ambiance et les scènes spontanées.':
      'Stories and events: the action, the people, the key moments, the details, the atmosphere and the unplanned scenes.',
    'Paysages, patrimoine et littoral breton — Penmarc’h, Saint-Guénolé, la côte finistérienne, les Monts d’Arrée.':
      'Landscapes, heritage and the Breton coast — Penmarc’h, Saint-Guénolé, the Finistère coastline, the Monts d’Arrée.',
    '01 — Sport': '01 — Sport',
    '02 — Événementiel': '02 — Events',
    '03 — Portrait': '03 — Portrait',
    '04 — Bretagne': '04 — Brittany',
    '05 — Animalier': '05 — Wildlife',
    'Catégorie suivante →': 'Next category →',
    'Découvrir aussi →': 'See also →',
    '← Retour': '← Back',
    '← Retour à': '← Back to',
    'Autres images': 'More images',
    'Autres lieux': 'Other places',
    'Galerie en cours de préparation.': 'Gallery coming soon.',

    /* ---------- Reportages (données) ---------- */
    'Reportage': 'Story',
    'Séance': 'Session',
    'Grossesse': 'Maternity',
    'US MONTAGNARDE': 'US MONTAGNARDE',
    'Match de football': 'Football match',
    'Reportage photographique réalisé lors d’une rencontre de football de l’US Montagnarde, mettant en lumière les joueurs, les actions et les temps forts du match.':
      'Photo report from a US Montagnarde football match, highlighting the players, the action and the key moments of the game.',
    "Joueur de l'US Montagnarde à l'échauffement, mains sur le visage": "US Montagnarde player warming up, hands on his face",
    "Les deux équipes se saluent avant le coup d'envoi": "Both teams greet each other before kick-off",
    "Joueur de l'US Montagnarde souriant vers l'objectif avant le match": "US Montagnarde player smiling at the camera before the match",
    "Joueurs enlacés en noir et blanc avant la rencontre": "Players embracing before the match, in black and white",
    "Joueurs de l'US Montagnarde devant le banc de touche": "US Montagnarde players in front of the bench",
    "Joueur de l'US Montagnarde face à un adversaire devant le but": "US Montagnarde player facing an opponent in front of the goal",
    "Duel pour le ballon près du poteau de corner": "Battle for the ball near the corner flag",
    "Joueur de dos en noir et blanc, numéro 12": "Player seen from behind in black and white, number 12",
    "Duel aérien entre joueurs et gardien dans la surface": "Aerial duel between players and the goalkeeper in the box",
    "Joueurs des deux équipes en place avant un coup franc": "Players from both teams lining up before a free kick",
    "Tacle et lutte pour le ballon en pleine action": "Tackle and fight for the ball in full action",
    "Joueur numéro 11 de l'US Montagnarde de dos, lumière de fin d'après-midi": "US Montagnarde number 11 seen from behind in late afternoon light",
    "Joueur numéro 12 assis sur la pelouse, en noir et blanc": "Number 12 sitting on the pitch, in black and white",
    "Joueur numéro 9 de dos en noir et blanc": "Number 9 seen from behind in black and white",
    "Joueur de l'US Montagnarde le long de la clôture en fin de match": "US Montagnarde player along the fence at the end of the match",
    "Joueurs de l'US Montagnarde en mur avant un coup franc": "US Montagnarde players forming a wall before a free kick",
    "Duel au corps à corps pour le ballon": "Shoulder-to-shoulder battle for the ball",
    "Course vers le ballon sur toute la largeur du terrain": "Players racing for the ball across the pitch",
    "Vue d'ensemble du terrain pendant une phase de jeu": "Wide view of the pitch during play",
    "Joueur numéro 12 de l'US Montagnarde devant le but adverse": "US Montagnarde number 12 in front of the opposing goal",
    "Jambes de deux joueurs au contact, en noir et blanc": "Two players' legs in contact, in black and white",
    "Le gardien en saut, vu depuis le bord du terrain": "The goalkeeper leaping, seen from the sideline",
    "Phase de jeu en fin d'après-midi": "Play in the late afternoon",
    "Joueur numéro 10 de l'US Montagnarde conduisant le ballon": "US Montagnarde number 10 dribbling the ball",
    "Joueurs des deux équipes pendant un arrêt de jeu": "Players from both teams during a break in play",
    "Joueur de l'US Montagnarde revenant en position": "US Montagnarde player walking back into position",
    "Portrait en noir et blanc d'un bouledogue allongé dans l'herbe, yeux fermés et langue sortie, sous-bois en arrière-plan": "Black and white portrait of a bulldog lying in the grass, eyes closed and tongue out, woodland behind",
    "Sous-bois d'automne : fougères rousses, hêtre doré et grands résineux traversés par la lumière": "Autumn woodland: russet ferns, a golden beech and tall conifers with light streaming through",
    'Mentions légales': 'Legal notice',
    'Éditeur du site': 'Site publisher',
    'Hébergeur': 'Hosting provider',
    'Propriété intellectuelle': 'Intellectual property',
    'Politique de confidentialité': 'Privacy policy',
    'Cette page est rédigée en français, conformément au droit français.': 'This legal notice is provided in French, in accordance with French law.',
    'MERLÉAC 2026': 'MERLÉAC 2026',
    'Championnat de France de Moto de Côte': 'French Motorcycle Hill Climb Championship',
    'Reportage photographique réalisé lors du Championnat de France de Moto de Côte à Merléac en septembre 2026.':
      'Photo story shot at the French Motorcycle Hill Climb Championship in Merléac, September 2026.',
    'CROSS-COUNTRY 2024': 'CROSS-COUNTRY 2024',
    'Course de cross-country': 'Cross-country race',
    'GUINGAMP FÉMININES 2024': 'GUINGAMP WOMEN 2024',
    'Match de football féminin · En Avant Guingamp': 'Women’s football match · En Avant Guingamp',
    'FESTIVAL DE CORNOUAILLE': 'CORNOUAILLE FESTIVAL',
    'Quimper, Bretagne': 'Quimper, Brittany',
    'FÊTE SAINTE-JULIENNE': 'SAINTE-JULIENNE FEAST',
    'Pardon breton autour d’une chapelle': 'A Breton pardon around a chapel',
    'COURSES DE TRACTEUR TONDEUSE': 'LAWN MOWER RACING',
    'EN ATTENDANT': 'EXPECTING',
    'Une séance autour de l’attente, de la complicité et des premiers instants d’une nouvelle histoire.':
      'A session about anticipation, closeness and the first moments of a new story.',

    /* ---------- Galerie, visionneuse ---------- */
    'Visionneuse photo — Échap pour fermer': 'Photo viewer — press Esc to close',
    'Fermer la photo': 'Close photo',
    'Fermer (Échap)': 'Close (Esc)',
    'Image précédente': 'Previous image',
    'Image suivante': 'Next image',
    'Afficher en grand': 'View larger',
    'Photographie sportive': 'Sports photography',
    'Photographie événementielle': 'Event photography',
    'Photographie de portrait': 'Portrait photography',
    'Photographie de Bretagne': 'Photography of Brittany',
    'Photographie animalière': 'Wildlife photography',
    'Photographie': 'Photography',
    'Photographie de Raphaël Doucet': 'Photograph by Raphaël Doucet',
    'Ligne de sapins sous un ciel blanc — photographie de Raphaël Doucet': 'A line of fir trees under a white sky — photograph by Raphaël Doucet',

    /* ---------- Vidéo ---------- */
    'Raconter en': 'Stories in',
    'mouvement.': 'motion.',
    'Reportages, sport, portraits et contenus pour les réseaux : la même attention à la lumière et au moment juste, en images animées.':
      'Stories, sport, portraits and social media content: the same attention to light and to the right moment, in moving images.',
    'Showreel': 'Showreel',
    'Lire le showreel': 'Play the showreel',
    'Voir le showreel (nouvel onglet)': 'Watch the showreel (opens in a new tab)',
    'Une sélection de mes réalisations récentes': 'A selection of my recent work',
    'Catégories vidéo': 'Video categories',
    'Reportage & événementiel': 'Stories & events',
    'Festivals, fêtes locales et manifestations, racontés de l’installation au dernier rappel.':
      'Festivals, local celebrations and gatherings, told from the set-up to the final encore.',
    'Portrait & entreprise': 'Portraits & businesses',
    'Faire connaître une personne, un club ou un savoir-faire, avec sa propre voix.': 'Introducing a person, a club or a craft, in their own voice.',
    'L’intensité du match ou de la course, au plus près de l’action et des athlètes.': 'The intensity of the match or the race, close to the action and the athletes.',
    'Réseaux sociaux': 'Social media',
    'Des formats courts et verticaux, pensés pour être vus jusqu’au bout.': 'Short vertical formats, made to be watched to the end.',
    'PENMARC’H — Entre terre et mer': 'PENMARC’H — Between land and sea',
    'Penmarc’h, Finistère': 'Penmarc’h, Finistère',
    'Entre les terres bretonnes et l’Atlantique, Penmarc’h vit au rythme du vent, des marées et de ceux qui font vivre ce territoire. Des ruelles silencieuses à l’aube aux phares face à l’océan et aux bateaux qui rejoignent le port, une immersion photographique et cinématographique dans une Bretagne façonnée par la mer et par le temps.':
      'Between the Breton countryside and the Atlantic, Penmarc’h lives to the rhythm of the wind, the tides and the people who keep it alive. From quiet lanes at dawn to lighthouses facing the ocean and boats heading back to harbour, a photographic and cinematic immersion in a Brittany shaped by the sea and by time.',
    'Matériel': 'Gear',
    'Voir sur': 'Watch on',
    'Lire': 'Play',
    'Prestations vidéo': 'Video services',
    'Formats proposés': 'Formats',
    'Chaque format est adapté à votre diffusion : site, réseaux sociaux, écran géant ou archive.':
      'Each format is tailored to where it will be shown: website, social media, big screen or archive.',
    'Aftermovie': 'Aftermovie',
    'Le résumé rythmé de votre événement, livré en quelques jours.': 'A fast-paced recap of your event, delivered within a few days.',
    'Un récit plus long qui suit les gens, les coulisses et les temps forts.': 'A longer film that follows the people, the behind-the-scenes and the highlights.',
    'Capsule réseaux': 'Social clip',
    'Formats verticaux courts pour Instagram, TikTok et Reels.': 'Short vertical formats for Instagram, TikTok and Reels.',
    'Portrait vidéo': 'Video portrait',
    'Interview ou présentation d’un club, d’un artisan, d’une entreprise.': 'An interview or introduction to a club, a craftsperson or a business.',
    'Un projet vidéo ?': 'A video project?',
    'À venir': 'Coming soon',

    /* ---------- À propos ---------- */
    'Raphaël Doucet — Photographe professionnel indépendant': 'Raphaël Doucet — Independent professional photographer',
    'Basé en Bretagne, je photographie le sport, l’événementiel, le portrait et les paysages, avec une approche centrée sur la lumière, le mouvement et les moments forts.':
      'Based in Brittany, I photograph sport, events, portraits and landscapes, with an approach centred on light, movement and the moments that matter.',
    'Disponible en Bretagne et partout en France.': 'Available in Brittany and throughout France.',
    'Compétences': 'Skills',
    'Reportage photo': 'Photo stories',
    'Paysage': 'Landscape',
    'Photographie documentaire': 'Documentary photography',
    'Prise de vue': 'Filming',
    'Plans stabilisés': 'Stabilised shots',
    'Drone': 'Drone',
    'Montage': 'Editing',
    'Étalonnage': 'Colour grading',
    'Création de contenu': 'Content creation',
    'Post-production': 'Post-production',
    'Retouche photo': 'Photo retouching',
    'Traitement RAW': 'RAW processing',
    'Montage vidéo': 'Video editing',
    'Équipement': 'Equipment',
    'Portrait de Raphaël Doucet, photographe': 'Portrait of Raphaël Doucet, photographer',

    /* ---------- Contact ---------- */
    'Un projet ?': 'Got a project?',
    'Parlons-en.': 'Let’s talk.',
    'Quelques mots sur votre projet suffisent. Je vous réponds personnellement, au plus vite.': 'A few words about your project are enough. I’ll reply personally, as soon as I can.',
    'Envoyer un message': 'Send a message',
    'Nom': 'Name',
    'Votre nom': 'Your name',
    'Email': 'Email',
    'vous@exemple.fr': 'you@example.com',
    'Type de projet': 'Type of project',
    'Autre': 'Other',
    'Message': 'Message',
    'Date, lieu, ce que vous imaginez…': 'Date, place, what you have in mind…',
    'Ne pas remplir': 'Leave blank',
    'Envoyer le message': 'Send message',
    'Envoi en cours…': 'Sending…',
    'Vos informations servent uniquement à vous répondre.': 'Your details are only used to reply to you.',
    'L’envoi n’a pas abouti. Réessayez dans un instant, ou écrivez-moi à': 'The message couldn’t be sent. Please try again in a moment, or email me at',
    'Message envoyé.': 'Message sent.',
    'Merci': 'Thank you',
    ', j’ai bien reçu votre demande. Je reviens vers vous très vite à l’adresse indiquée.': ', I’ve received your request. I’ll get back to you very soon at the address you gave.',
    'Envoyer un autre message': 'Send another message',
    'Aperçu : l’envoi réel s’active en renseignant la clé du service de formulaire.': 'Preview: real sending turns on once the form service key is added.',
    'Photographe professionnel': 'Professional photographer',
    'Bretagne · partout en France': 'Brittany · throughout France',
    'Ou directement': 'Or directly',
    'Coordonnées': 'Contact details',
    'Coordonnées directes': 'Direct contact',
    'Téléphone': 'Phone',
    'Instagram': 'Instagram',

    /* ---------- Titres d’onglet et descriptions (Google) ---------- */
    'Raphaël Doucet — Photographe et vidéaste en Bretagne': 'Raphaël Doucet — Photographer and filmmaker in Brittany',
    'Portfolio de Raphaël Doucet, photographe professionnel indépendant basé en Bretagne. Photographie sportive, événementielle, portrait, paysage et création de contenu.':
      'Portfolio of Raphaël Doucet, an independent professional photographer based in Brittany, France. Sports, events, portraits, landscapes and content creation.',
    'Portfolio — Raphaël Doucet, photographe en Bretagne': 'Portfolio — Raphaël Doucet, photographer in Brittany',
    'Portfolio de Raphaël Doucet, photographe en Bretagne : sport, événementiel, portrait, Bretagne et animalier.': 'Portfolio of Raphaël Doucet, photographer in Brittany: sport, events, portraits, Brittany and wildlife.',
    'Vidéo — Raphaël Doucet, vidéaste en Bretagne': 'Video — Raphaël Doucet, filmmaker in Brittany',
    'Vidéo par Raphaël Doucet, basé en Bretagne : reportages événementiels, sport, portraits et contenus pour les réseaux sociaux.': 'Video by Raphaël Doucet, based in Brittany: event films, sport, portraits and social media content.',
    'À propos — Raphaël Doucet, photographe en Bretagne': 'About — Raphaël Doucet, photographer in Brittany',
    'Contact — Raphaël Doucet, photographe en Bretagne': 'Contact — Raphaël Doucet, photographer in Brittany',
    'Contactez Raphaël Doucet, photographe professionnel indépendant basé en Bretagne, disponible partout en France.': 'Contact Raphaël Doucet, an independent professional photographer based in Brittany, available throughout France.',
    'Sport — Raphaël Doucet, photographe en Bretagne': 'Sport — Raphaël Doucet, photographer in Brittany',
    'Événementiel — Raphaël Doucet, photographe en Bretagne': 'Events — Raphaël Doucet, photographer in Brittany',
    'Portrait — Raphaël Doucet, photographe en Bretagne': 'Portrait — Raphaël Doucet, photographer in Brittany',
    'Bretagne — Raphaël Doucet, photographe en Bretagne': 'Brittany — Raphaël Doucet, photographer in Brittany',
    'Animalier — Raphaël Doucet, photographe en Bretagne': 'Wildlife — Raphaël Doucet, photographer in Brittany',
    'Merléac 2026 — Championnat de France de Moto de Côte · Raphaël Doucet': 'Merléac 2026 — French Motorcycle Hill Climb Championship · Raphaël Doucet',
    'Festival de Cornouaille — Quimper · Raphaël Doucet': 'Cornouaille Festival — Quimper · Raphaël Doucet',
    'Fête Sainte-Julienne — Pardon breton · Raphaël Doucet': 'Sainte-Julienne Feast — Breton pardon · Raphaël Doucet',
    'Courses de tracteur tondeuse — Glomel 2024 · Raphaël Doucet': 'Lawn mower racing — Glomel 2024 · Raphaël Doucet',
    'En attendant — Séance grossesse · Raphaël Doucet': 'Expecting — Maternity session · Raphaël Doucet',
    /* ---------- Fusion des deux versions : pages Prestations, Projets, localisation ---------- */
    "Projets": "Projects",
    "Prestations": "Services",
    "Galeries": "Galleries",
    "Basé à": "Based in",
    "Gourin, Bretagne": "Gourin, Brittany",
    "Gourin, Bretagne, France": "Gourin, Brittany, France",
    "Toutes les prestations": "All services",
    "Photographe et vidéaste indépendant basé à Gourin, en Bretagne.": "Independent photographer and filmmaker based in Gourin, Brittany.",
    "Raphaël Doucet — Photographe et vidéaste à Gourin, Bretagne": "Raphaël Doucet — Photographer and filmmaker in Gourin, Brittany",
    "Raphaël Doucet, photographe et vidéaste indépendant basé à Gourin, en Bretagne : sport, événementiel, portrait, grossesse, animalier, paysage et vidéo. Devis personnalisé, déplacements partout en France.": "Raphaël Doucet, independent photographer and filmmaker based in Gourin, Brittany: sport, events, portraits, maternity, pets, landscapes and video. Custom quotes, available throughout France.",
    "Raphaël Doucet · Gourin, Bretagne, France — Toutes les photographies sont protégées par le droit d’auteur. Reproduction interdite sans autorisation.": "Raphaël Doucet · Gourin, Brittany, France — All photographs are protected by copyright. No reproduction without permission.",
    "Raphaël Doucet — Photographe et vidéaste indépendant": "Raphaël Doucet — Independent photographer and filmmaker",
    "Basé à Gourin, en Bretagne, je photographie le sport, l’événementiel, le portrait, l’animalier et les paysages, et je réalise des films en vidéo, avec une approche centrée sur la lumière, le mouvement et les moments forts.": "Based in Gourin, Brittany, I photograph sport, events, portraits, pets and landscapes, and I make films, with an approach centred on light, movement and the moments that matter.",
    "Mon approche privilégie des images naturelles et authentiques, avec une attention particulière portée aux atmosphères, aux émotions et aux territoires.": "My approach favours natural, authentic images, with particular attention to atmosphere, emotion and place.",
    "Déplacements partout en France, avec frais de déplacement.": "Available anywhere in France, travel fees apply.",
    "À propos — Raphaël Doucet, photographe et vidéaste à Gourin, Bretagne": "About — Raphaël Doucet, photographer and filmmaker in Gourin, Brittany",
    "Décrivez votre projet en quelques mots : je vous réponds personnellement, avec un devis personnalisé et sans engagement.": "Describe your project in a few words: I’ll reply personally with a custom, no-obligation quote.",
    "Photographe et vidéaste indépendant": "Independent photographer and filmmaker",
    "Gourin, Bretagne, France · déplacements partout en France": "Gourin, Brittany, France · available throughout France",
    "Type de prestation": "Type of service",
    "Contact et devis — Raphaël Doucet, photographe et vidéaste à Gourin, Bretagne": "Contact and quotes — Raphaël Doucet, photographer and filmmaker in Gourin, Brittany",
    "Demandez un devis personnalisé à Raphaël Doucet, photographe et vidéaste indépendant basé à Gourin (Bretagne), déplacements partout en France.": "Request a custom quote from Raphaël Doucet, independent photographer and filmmaker based in Gourin, Brittany, available throughout France.",
    "Prestations — Raphaël Doucet, photographe et vidéaste à Gourin, Bretagne": "Services — Raphaël Doucet, photographer and filmmaker in Gourin, Brittany",
    "Prestations photo et vidéo de Raphaël Doucet, photographe et vidéaste indépendant à Gourin (Bretagne) : sport, portrait, grossesse, animalier, événementiel, paysage, lieux, professionnels. Devis personnalisé.": "Photo and video services by Raphaël Doucet, independent photographer and filmmaker in Gourin, Brittany: sport, portraits, maternity, pets, events, landscapes, locations and businesses. Custom quotes.",
    "Ce que je": "What I",
    "propose.": "offer.",
    "Photographe et vidéaste indépendant, je vous accompagne en photo comme en vidéo, pour les particuliers comme pour les professionnels. Chaque projet est unique : je vous propose un devis personnalisé, sans engagement.": "As an independent photographer and filmmaker, I work in both photo and video, for individuals and businesses alike. Every project is different: I’ll send you a custom, no-obligation quote.",
    "Déplacements": "Travel",
    "Partout en France, avec frais de déplacement": "Anywhere in France, travel fees apply",
    "Tarifs": "Rates",
    "Sur devis personnalisé": "Custom quote",
    "Portrait animalier": "Pet portraits",
    "Paysage & patrimoine": "Landscape & heritage",
    "Photographie de lieux": "Location photography",
    "Prestations pour professionnels": "Services for professionals",
    "Pour": "For",
    "Demander un devis": "Request a quote",
    "Voir le sport": "See sport",
    "Voir les portraits": "See portraits",
    "Voir « En attendant »": "See “Expecting”",
    "Voir l’animalier": "See pets & wildlife",
    "Voir les événements": "See events",
    "Voir les vidéos": "See videos",
    "Matchs, courses et compétitions : l’action, l’intensité et l’émotion, au plus près des athlètes, de l’échauffement jusqu’au podium.": "Matches, races and competitions: the action, the intensity and the emotion, close to the athletes, from the warm-up to the podium.",
    "Clubs, organisateurs, sportifs": "Clubs, organisers, athletes",
    "Des portraits naturels et sincères, en lumière naturelle, en extérieur ou sur le littoral breton, pour vous, votre couple ou votre famille.": "Natural, honest portraits in natural light, outdoors or on the Breton coast, for you, your partner or your family.",
    "Particuliers, couples, familles": "Individuals, couples, families",
    "Une séance douce pour garder la trace de l’attente, en solo ou en couple, au bord de la mer ou en pleine nature.": "A gentle session to remember the wait, on your own or as a couple, by the sea or out in nature.",
    "Futurs parents": "Parents-to-be",
    "Le caractère de votre animal de compagnie, photographié chez vous ou en extérieur, avec patience et discrétion.": "Your pet’s personality, photographed at home or outdoors, with patience and discretion.",
    "Propriétaires d’animaux": "Pet owners",
    "Festivals, fêtes locales, manifestations : un reportage complet qui raconte l’ambiance, les gens, les temps forts et les détails.": "Festivals, local celebrations, gatherings: complete coverage that tells the atmosphere, the people, the highlights and the details.",
    "Associations, comités, organisateurs": "Associations, committees, organisers",
    "Les paysages, le patrimoine et les territoires de Bretagne et d’ailleurs, pour la communication, l’édition ou le tirage.": "Landscapes, heritage and places in Brittany and beyond, for communication, publishing or prints.",
    "Collectivités, offices de tourisme, particuliers": "Local authorities, tourist offices, individuals",
    "Mettre en valeur un lieu, à l’intérieur comme à l’extérieur : gîte, commerce, salle, bâtiment ou patrimoine bâti.": "Showing a place at its best, inside and out: holiday home, shop, venue, building or heritage site.",
    "Hébergements, commerces, propriétaires": "Accommodation, shops, owners",
    "Des images pour votre communication : portraits, activité, savoir-faire et événements, pour le site, les réseaux sociaux ou la presse.": "Images for your communication: portraits, activity, craft and events, for your website, social media or the press.",
    "Entreprises, artisans, associations, collectivités": "Businesses, craftspeople, associations, local authorities",
    "Aftermovie, reportage, capsule pour les réseaux ou portrait vidéo : des films tournés et montés par mes soins, avec prises de vue au drone.": "Aftermovie, documentary, social media clip or video portrait: films I shoot and edit myself, including drone footage.",
    "Événements, entreprises, associations, particuliers": "Events, businesses, associations, individuals",
    "Déroulé": "Process",
    "Comment ça se passe": "How it works",
    "Un échange simple et direct, du premier message à la livraison des images.": "A simple, direct exchange, from the first message to the delivery of the images.",
    "Votre demande": "Your request",
    "Par le formulaire, par email ou par téléphone, en quelques mots.": "Through the form, by email or by phone, in just a few words.",
    "L’échange": "The conversation",
    "Nous précisons ensemble vos besoins, la date, le lieu et l’usage des images.": "Together we define your needs, the date, the place and how the images will be used.",
    "Le devis": "The quote",
    "Je vous envoie une proposition personnalisée et détaillée, sans engagement.": "I send you a detailed, custom proposal, with no obligation.",
    "La prise de vue": "The shoot",
    "Séance photo, reportage ou tournage, sur place ou en extérieur.": "Photo session, coverage or filming, on location or outdoors.",
    "La livraison": "Delivery",
    "Photos sélectionnées et retouchées, ou film monté, en haute définition.": "Selected and edited photos, or an edited film, in high definition.",
    "Un projet en tête ?": "Have a project in mind?",
    "Décrivez-le en quelques mots, je vous réponds personnellement.": "Describe it in a few words and I’ll reply personally.",
    "photographie de Raphaël Doucet": "photograph by Raphaël Doucet",
    "Projets — Raphaël Doucet, photographe et vidéaste à Gourin, Bretagne": "Projects — Raphaël Doucet, photographer and filmmaker in Gourin, Brittany",
    "Reportages et séries photographiques de Raphaël Doucet, photographe et vidéaste à Gourin (Bretagne) : sport, événements, portrait, animalier.": "Photo stories and series by Raphaël Doucet, photographer and filmmaker in Gourin, Brittany: sport, events, portraits, pets.",
    "Reportages complets et séries photographiques, en Bretagne et ailleurs.": "Complete stories and photo series, in Brittany and beyond.",
    "Séries photo": "Photo series",
    "Voir la série": "View the series",
    "Portraits animaliers et photographie de nature.": "Pet portraits and nature photography.",
    "Football — Match Guingamp Féminines": "Football — Guingamp Women's Match",

    /* ---------- Descriptions des photos reprises de l’ancien site (FR → EN d’origine) ---------- */
    "Cime d'une forêt de sapins bretonne en contre-jour, sous un ciel clair": "Backlit treetops of a Breton fir forest under a clear sky",
    "Football": "Football",
    "Match Guingamp Féminines": "Guingamp Women's Match",
    "Cross-country": "Cross-country",
    "Couple / Grossesse": "Couple / Maternity",
    "Animaux domestiques": "Domestic animals",
    "Joueuse de l'En Avant Guingamp portant le numéro 9, maillot rouge, vue de dos, adversaire en bleu flou à l'arrière-plan, sous la pluie": "En Avant Guingamp player wearing number 9, red jersey, back view, blurred opponent in blue in the background, in the rain",
    "Joueuse portant le numéro 11, maillot rouge, vue de dos, remplaçantes assises sur le banc en arrière-plan": "Player wearing number 11, red jersey, back view, substitutes sitting on the bench in the background",
    "Joueuse de l'En Avant Guingamp en duel avec deux adversaires en bleu, action de dribble sous la pluie": "En Avant Guingamp player challenged by two opponents in blue, dribbling in the rain",
    "Joueuse portant le brassard de capitaine et le numéro 8, maillot rouge, courant devant ses coéquipières, vue de dos": "Player wearing the captain’s armband and number 8, red jersey, running ahead of her teammates, back view",
    "Joueuse de l'En Avant Guingamp portant le numéro 2, maillot Celtigel, frappant le ballon en pleine extension, bras écartés": "En Avant Guingamp player wearing number 2, Celtigel jersey, striking the ball in full extension, arms spread",
    "Portrait de la capitaine de l'En Avant Guingamp, maillot rouge et noir floqué Celtigel, brassard de capitaine, vue de face": "Portrait of En Avant Guingamp's captain, red and black Celtigel jersey, captain's armband, front view",
    "Joueuse portant le numéro 8 tirant un coup franc, adversaires en bleu formant un mur, bras levés pour se protéger le visage": "Player wearing number 8 taking a free kick, opponents in blue forming a wall, arms raised to protect their faces",
    "Photo en noir et blanc en gros plan du numéro 1 floqué sur un maillot": "Black and white close-up photo of the number 1 printed on a jersey",
    "Joueuse portant le numéro 5, maillot rouge à manches longues, courant sur le terrain, adversaire en bleu en arrière-plan": "Player wearing number 5, long-sleeved red jersey, running on the pitch, opponent in blue in the background",
    "Joueuse de l'En Avant Guingamp portant le numéro 9, maillot Celtigel, coéquipière numéro 10 courant derrière elle": "En Avant Guingamp player wearing number 9, Celtigel jersey, teammate number 10 running behind her",
    "Groupe de joueuses de l'En Avant Guingamp s'échauffant devant le banc de touche rouge, capitaine au brassard au premier plan": "Group of En Avant Guingamp players warming up in front of the red dugout, captain with armband in the foreground",
    "Portrait de la joueuse portant le numéro 4, maillot Celtigel, debout devant les cages, regard vers l’objectif": "Portrait of the player wearing number 4, Celtigel jersey, standing in front of the goal, looking at the camera",
    "Joueuse portant le numéro 10, maillot rouge et noir, en pleine course, gardienne en vert visible près des cages à l’arrière-plan": "Player wearing number 10, red and black jersey, running at full speed, goalkeeper in green visible near the goal in the background",
    "Arbitre assistant brandissant le drapeau de touche, maillot vert clair, short noir": "Assistant referee raising the touchline flag, light green jersey, black shorts",
    "Photo en noir et blanc avec effet de filé, joueuse portant le numéro 8 en pleine course, coéquipières floues à l’arrière-plan": "Black and white motion-blur photo, player wearing number 8 running at full speed, blurred teammates in the background",
    "Gardienne de but vue de dos, maillot vert numéro 1, gants de gardien, joueuses en action à l’arrière-plan": "Goalkeeper seen from behind, green jersey number 1, goalkeeper gloves, players in action in the background",
    "Coureur de cross vu de dos portant le maillot rose BGA orné du drapeau breton, franchissant la ligne d'arrivée sous la pluie": "Cross-country runner seen from behind wearing the pink BGA jersey decorated with the Breton flag, crossing the finish line in the rain",
    "Trois jeunes coureurs de cross marchant après l’arrivée, dossards du C.J.F. Saint-Malo et de l’ALCP Carhaix": "Three young cross-country runners walking after the finish, bibs from C.J.F. Saint-Malo and ALCP Carhaix",
    "Photo en noir et blanc d'un peloton de quatre coureuses de cross en pleine action, dossard numéro 32": "Black and white photo of a pack of four female cross-country runners in action, bib number 32",
    "Coureuse de cross vue de dos portant le maillot orange de l'ALCP Carhaix, devant une forêt aux couleurs automnales": "Cross-country runner seen from behind wearing the orange ALCP Carhaix jersey, in front of a forest in autumn colours",
    "Coureuse du SCO Angers Athlé célébrant son arrivée bras écartés, couverte de boue, sous les applaudissements du public": "SCO Angers Athlé runner celebrating her finish with arms spread, covered in mud, to the crowd’s applause",
    "Photo en noir et blanc d'un coureur de cross de profil portant un bandeau, en pleine course": "Black and white photo of a cross-country runner in profile wearing a headband, running at full speed",
    "Coureur portant le dossard 77 franchissant un obstacle en bois lors d'une course de cross en forêt": "Runner wearing bib 77 clearing a wooden obstacle during a cross-country race in the forest",
    "Groupe de jeunes coureurs de cross en pleine course sur terrain boueux, dossards de l'ALCP Carhaix et de Quimper Athlétisme": "Group of young cross-country runners racing on muddy ground, bibs from ALCP Carhaix and Quimper Athlétisme",
    "Deux jeunes coureurs de cross assis au sol après l'arrivée, jambes couvertes de boue, dossard de l'A.P.L.O. Lorient": "Two young cross-country runners sitting on the ground after the finish, legs covered in mud, bib from A.P.L.O. Lorient",
    "Photo en noir et blanc de trois coureurs de cross en pleine action, dossards de Brest Triathlon et Groupama": "Black and white photo of three cross-country runners in action, bibs from Brest Triathlon and Groupama",
    "Coureur de cross en pleine foulée, éclairé par une lumière rasante, dossard Brest Triathlon": "Cross-country runner at full stride, lit by low raking light, Brest Triathlon bib",
    "Coureur des Athletic Clubs du Littoral 44 traversant une flaque de boue en pleine éclaboussure, dossard 88": "Athletic Clubs du Littoral 44 runner splashing through a puddle of mud, bib 88",
    "Coureur en sprint final dans la boue, dossard 68, banderole Leclerc en arrière-plan": "Runner in the final sprint through the mud, bib 68, Leclerc banner in the background",
    "Groupe de coureurs de cross en plein sprint dans la boue, éclaboussures, dossards 481 et 474": "Group of cross-country runners sprinting through the mud, splashing, bibs 481 and 474",
    "Photo en noir et blanc de deux mains de couple qui se tiennent, alliance visible, bord de mer breton en arrière-plan": "Black and white photo of a couple’s hands holding each other, wedding ring visible, Breton seaside in the background",
    "Photo en noir et blanc d'un couple marchant main dans la main vers la mer sur une plage rocheuse, effet artistique": "Black and white photo of a couple walking hand in hand towards the sea on a rocky beach, artistic effect",
    "Photo aux tons bleu-vert d'un couple s'enlaçant face à la mer, effet artistique, littoral rocheux": "Blue-green toned photo of a couple embracing facing the sea, artistic effect, rocky coastline",
    "Photo en noir et blanc en gros plan d'un ventre de femme enceinte, mains formant un cœur": "Black and white close-up photo of a pregnant woman’s belly, hands forming a heart",
    "Photo d'un couple enceinte s'enlaçant tendrement sur une plage, pieds nus dans le sable, ciel bleu": "Photo of an expecting couple tenderly embracing on a beach, barefoot in the sand, blue sky",
    "Photo d'un couple enceinte se tenant la main sur une plage, falaise et mer en arrière-plan": "Photo of an expecting couple holding hands on a beach, cliff and sea in the background",
    "Portrait en gros plan d'un chat Maine Coon crème et roux aux yeux ambrés, oreilles à pinceaux, fond sombre": "Close-up portrait of a cream and red Maine Coon cat with amber eyes, lynx-tip ears, dark background",
    "Photo en noir et blanc d'un chat allongé sur le dos sur un plaid à motifs, une patte levée": "Black and white photo of a cat lying on its back on a patterned blanket, one paw raised",
    "Portrait en gros plan d'un chaton tigré gris aux yeux clairs, sur un plaid à motifs": "Close-up portrait of a grey tabby kitten with light eyes, on a patterned blanket",
    "Photo en noir et blanc d'un chaton et d'un chat adulte à poil long assis côte à côte sur un lit": "Black and white photo of a kitten and an adult long-haired cat sitting side by side on a bed",
    "Portrait d'un rottweiler la tête levée devant un mur de pierre": "Portrait of a rottweiler with its head raised in front of a stone wall"
  };

  var MONTHS = { janvier: 'January', 'février': 'February', mars: 'March', avril: 'April', mai: 'May', juin: 'June', juillet: 'July', 'août': 'August', septembre: 'September', octobre: 'October', novembre: 'November', 'décembre': 'December' };

  /* Règles pour les textes composés à partir des données */
  function rule(s) {
    var m;
    if ((m = /^(\d+) images?$/.exec(s))) return m[1] + (m[1] === '1' ? ' image' : ' images');
    if ((m = /^(\d+) vidéos?$/.exec(s))) return m[1] + (m[1] === '1' ? ' video' : ' videos');
    if ((m = /^(\d+) reportages?$/.exec(s))) return m[1] + (m[1] === '1' ? ' story' : ' stories');
    if ((m = /^(\d+) séries?$/.exec(s))) return m[1] + ' series';
    if ((m = /^([A-Za-zéû]+) (\d{4})$/.exec(s)) && MONTHS[m[1].toLowerCase()]) return MONTHS[m[1].toLowerCase()] + ' ' + m[2];
    if ((m = /^Afficher en grand : (.+)$/.exec(s))) return 'View larger: ' + tr(m[1]);
    if ((m = /^Voir la vidéo « (.+) » \(nouvel onglet\)$/.exec(s))) return 'Watch “' + tr(m[1]) + '” (opens in a new tab)';
    if ((m = /^Miniature de la vidéo « (.+) »$/.exec(s))) return 'Thumbnail of “' + tr(m[1]) + '”';
    return null;
  }

  /* Traduit une chaîne entière, sinon morceau par morceau (séparateurs « — » « · » « , ») */
  function tr(s) {
    if (Object.prototype.hasOwnProperty.call(DICT, s)) return DICT[s];
    var r = rule(s);
    if (r != null) return r;
    var seps = [' — ', ' · '];
    for (var i = 0; i < seps.length; i++) {
      if (s.indexOf(seps[i]) > 0) {
        var parts = s.split(seps[i]);
        var changed = false;
        var out = parts.map(function (p) { var t = tr(p); if (t !== p) changed = true; return t; });
        if (changed) return out.join(seps[i]);
      }
    }
    return s;
  }

  function translateValue(v) {
    var t = v.trim();
    if (!t) return v;
    var en = tr(t);
    if (en === t) return v;
    var lead = v.slice(0, v.indexOf(t)), trail = v.slice(v.indexOf(t) + t.length);
    return lead + en + trail;
  }

  /* ---------- Langue courante ---------- */
  function detect() {
    try { var s = localStorage.getItem(KEY); if (s === 'fr' || s === 'en') return s; } catch (e) {}
    /* Robots des moteurs de recherche (Google…) : toujours la version française */
    if (/bot|crawl|spider|slurp|google|bing|yandex|baidu|duckduck|facebookexternalhit|whatsapp|lighthouse/i.test(navigator.userAgent || '')) return 'fr';
    var l = (navigator.languages && navigator.languages[0]) || navigator.language || 'fr';
    return /^fr/i.test(l) ? 'fr' : 'en';
  }
  var lang = detect();

  /* Mémoire des originaux, pour revenir au français sans recharger */
  var origText = new WeakMap(), lastText = new WeakMap();
  var origAttr = new WeakMap();
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };

  function skipEl(el) { return !el || SKIP[el.tagName] || (el.closest && el.closest('[data-no-i18n]')); }

  function doText(n) {
    if (skipEl(n.parentElement)) return;
    var cur = n.nodeValue;
    if (lastText.get(n) === cur) return;            /* déjà traduit par nous */
    origText.set(n, cur);
    if (lang !== 'en') return;
    var en = translateValue(cur);
    if (en !== cur) { lastText.set(n, en); n.nodeValue = en; }
  }
  function doAttrs(el) {
    if (el.nodeType !== 1 || (el.closest && el.closest('[data-no-i18n]'))) return;
    var store = origAttr.get(el);
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], v = el.getAttribute(a);
      if (v == null || !v.trim()) continue;
      if (store && store[a] && store[a].en === v) continue;
      if (!store) { store = {}; origAttr.set(el, store); }
      var en = lang === 'en' ? translateValue(v) : v;
      store[a] = { fr: v, en: en };
      if (en !== v) el.setAttribute(a, en);
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    if (root.nodeType === 1) doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    var n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }
  function doHead() {
    if (!document.head) return;
    var t = document.querySelector('title');
    if (t && t.firstChild) doText(t.firstChild);
    var m = document.querySelector('meta[name="description"]');
    if (m) {
      var c = m.getAttribute('content') || '';
      if (!m.__rdFr || (m.__rdEn !== c)) m.__rdFr = c;
      var en = lang === 'en' ? tr(m.__rdFr) : m.__rdFr;
      m.__rdEn = en; if (c !== en) m.setAttribute('content', en);
    }
  }
  function revertAll() {
    var w = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) {
        if (origText.has(n) && lastText.get(n) === n.nodeValue) { var o = origText.get(n); lastText.delete(n); n.nodeValue = o; }
      } else {
        var st = origAttr.get(n);
        if (st) for (var a in st) { if (n.getAttribute(a) === st[a].en) n.setAttribute(a, st[a].fr); st[a].en = st[a].fr; }
      }
    }
    doHead();
  }

  var obs = new MutationObserver(function (recs) {
    if (lang !== 'en') return;
    for (var i = 0; i < recs.length; i++) {
      var r = recs[i];
      if (r.type === 'characterData') doText(r.target);
      else if (r.type === 'attributes') doAttrs(r.target);
      else for (var j = 0; j < r.addedNodes.length; j++) walk(r.addedNodes[j]);
    }
    doHead();
  });
  obs.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });

  function apply() {
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'en') { walk(document.documentElement); doHead(); } else revertAll();
  }

  window.RDlang = function () { return lang; };
  window.RDsetLang = function (l) {
    if (l !== 'fr' && l !== 'en') return;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    if (l === lang) return;
    lang = l;
    apply();
    try { window.dispatchEvent(new CustomEvent('rd-lang', { detail: l })); } catch (e) {}
  };
  window.RDtr = function (s) { return lang === 'en' ? tr(s) : s; };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
