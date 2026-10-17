export type Language = 'en' | 'fr';

export interface ConsularService {
  id: string;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  description: { en: string; fr: string };
  requirements: { en: string[]; fr: string[] };
  processingTime: { en: string; fr: string };
  officialFeeNote: { en: string; fr: string };
  iconName: string;
  formName?: { en: string; fr: string };
}

export interface Diplomat {
  id: string;
  name: string;
  position: { en: string; fr: string };
  department: { en: string; fr: string };
  bio: { en: string; fr: string };
  responsibilities: { en: string[]; fr: string[] };
}

export interface NewsArticle {
  id: string;
  category: { en: string; fr: string };
  date: { en: string; fr: string };
  headline: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  content: { en: string[]; fr: string[] };
  featured?: boolean;
  location: { en: string; fr: string };
}

export const EMBASSY_INFO = {
  address: {
    line1: '56, Simeon Leenakele Shixungileni',
    box: 'P.O. Box 9140',
    suburb: 'Eros, Windhoek',
    country: 'Namibia',
  },
  phone: '+264 61 256 287',
  fax: '+264 61 256 286',
  emailPlaceholder: 'contact@ambardc-windhoek.cd',
  emergencyNote: {
    en: 'Emergency Duty Officer: +264 61 256 287 (for citizens facing acute distress outside office hours)',
    fr: 'Permanence Consulaire d’Urgence : +264 61 256 287 (pour les compatriotes en situation de détresse majeure)',
  },
  hours: {
    monThu: '09:00 – 16:30',
    friday: '09:00 – 16:00',
    consularWindow: '09:30 – 13:00',
    weekend: 'Closed / Fermé',
  },
  ambassador: {
    name: 'H.E. CHRISTIAN KATOTO',
    nameFr: 'S.E. CHRISTIAN KATOTO',
    title: {
      en: 'Ambassador of the Democratic Republic of the Congo to the Republic of Namibia',
      fr: 'Ambassadeur de la République Démocratique du Congo en République de Namibie',
    },
    shortTitle: {
      en: 'Ambassador of the DRC to Namibia',
      fr: 'Ambassadeur de la RDC en Namibie',
    },
    messageGreeting: {
      en: 'Welcome to the official digital platform of the Embassy of the Democratic Republic of the Congo in the Republic of Namibia.',
      fr: 'Bienvenue sur la plateforme numérique officielle de l’Ambassade de la République Démocratique du Congo en République de Namibie.',
    },
    fullMessageParagraphs: {
      en: [
        'It is an immense honor to welcome you to the official digital portal of the Embassy of the Democratic Republic of the Congo in the Republic of Namibia.',
        'The Democratic Republic of the Congo and the Republic of Namibia share deep, enduring bonds forged through history, regional solidarity, and a common dedication to peace, sovereignty, and sustainable development within the Southern African Development Community (SADC).',
        'Our diplomatic mission is firmly committed to elevating our bilateral partnership, expanding trade and investment channels, and fostering vibrant educational and cultural exchanges.',
        'To our Congolese compatriots living, working, or studying across Namibia: this Embassy is your home away from home. We are dedicated to providing modern, transparent, and respectful consular services that dignify our citizens and protect their rights.',
        'To our Namibian partners and prospective visitors: we invite you to discover the extraordinary wealth, cultural dynamism, and strategic economic opportunities offered by the heart of Africa.',
      ],
      fr: [
        'C’est un immense honneur de vous accueillir sur le portail numérique officiel de l’Ambassade de la République Démocratique du Congo en République de Namibie.',
        'La République Démocratique du Congo et la République de Namibie partagent des liens profonds et durables, forgés par l’histoire, la solidarité régionale et un attachement commun à la paix, à la souveraineté et au développement durable au sein de la SADC.',
        'Notre mission diplomatique est résolument engagée à approfondir notre partenariat bilatéral, en développant les échanges commerciaux et la coopération culturelle et scientifique.',
        'À nos compatriotes congolais établis en Namibie : cette Ambassade est votre maison commune. Nous nous engageons à vous offrir des services consulaires diligents, transparents et respectueux de la dignité républicaine.',
        'À nos partenaires namibiens et futurs visiteurs : nous vous invitons à découvrir le formidable potentiel et la vitalité culturelle du cœur de l’Afrique.',
      ],
    },
  },
};

export const DIPLOMATIC_TEAM: Diplomat[] = [
  {
    id: 'lievin-muyumba',
    name: 'MR. LIEVIN MUYUMBA',
    position: {
      en: 'Minister Counsellor',
      fr: 'Ministre Conseiller',
    },
    department: {
      en: 'Chancery & Political Affairs',
      fr: 'Chancellerie et Affaires Politiques',
    },
    bio: {
      en: 'Senior diplomat supporting the Head of Mission in political relations, strategic bilateral dialogue, and multilateral coordination.',
      fr: 'Diplomate de carrière appuyant le Chef de Mission dans la conduite des relations politiques et de la concertation bilatérale.',
    },
    responsibilities: {
      en: [
        'Supervision of bilateral diplomatic correspondence',
        'Liaison with the Namibian Ministry of International Relations and Cooperation (MIRCO)',
        'Regional peace and SADC coordination',
      ],
      fr: [
        'Supervision de la correspondance diplomatique bilatérale',
        'Liaison avec le Ministère namibien des Relations Internationales (MIRCO)',
        'Suivi des dossiers régionaux et de la SADC',
      ],
    },
  },
  {
    id: 'kennedy-besako',
    name: 'MR. KENNEDY BESAKO',
    position: {
      en: 'First Counsellor',
      fr: 'Premier Conseiller',
    },
    department: {
      en: 'Economic & Trade Cooperation',
      fr: 'Coopération Économique et Commerciale',
    },
    bio: {
      en: 'Leads trade facilitation, institutional economic partnerships, and strategic investment promotion between the DRC and Namibia.',
      fr: 'En charge du développement des échanges économiques, des partenariats commerciaux et des investissements.',
    },
    responsibilities: {
      en: [
        'Promotion of DRC-Namibia trade corridors and Walvis Bay port transit',
        'Facilitation of investor delegations and business chambers',
        'Joint Permanent Commissions on Cooperation',
      ],
      fr: [
        'Promotion des corridors commerciaux et de la desserte de Walvis Bay',
        'Accompagnement des délégations d’investisseurs',
        'Suivi de la Commission Mixte Permanente de Coopération',
      ],
    },
  },
  {
    id: 'elysee-nsombe',
    name: 'MRS. ELYSEE NSOMBE',
    position: {
      en: 'Second Counsellor',
      fr: 'Deuxième Conseiller',
    },
    department: {
      en: 'Consular Affairs & Diaspora Relations',
      fr: 'Affaires Consulaires et Relations Diaspora',
    },
    bio: {
      en: 'Directs the consular section, overseeing vital registration, document legalizations, and citizen welfare in Namibia.',
      fr: 'Dirige la section consulaire, supervisant l’état civil, la délivrance des actes officiels et l’assistance à la communauté.',
    },
    responsibilities: {
      en: [
        'Supervision of consular registries and diaspora community engagement',
        'Adjudication of entry visa applications and document legalizations',
        'Protection of citizen rights and social assistance',
      ],
      fr: [
        'Supervision du registre consulaire et dialogue avec la diaspora',
        'Instruction des demandes de visa et légalisation d’actes',
        'Protection des droits des ressortissants et assistance consulaire',
      ],
    },
  },
  {
    id: 'guy-felix-munumwey',
    name: 'MR. GUY FELIX MUNUMWEY',
    position: {
      en: 'First Secretary',
      fr: 'Premier Secrétaire',
    },
    department: {
      en: 'Cultural, Academic & Public Diplomacy',
      fr: 'Diplomatie Culturelle et Universitaire',
    },
    bio: {
      en: 'Manages bilateral educational partnerships, university student records, cultural diplomacy, and chancery protocol operations.',
      fr: 'Supervise la coopération universitaire, le suivi des étudiants congolais, le rayonnement culturel et le protocole.',
    },
    responsibilities: {
      en: [
        'Management of academic agreements and Congolese student welfare in Namibia',
        'Cultural exchange programs and heritage promotion',
        'Protocol coordination for official state visits',
      ],
      fr: [
        'Suivi des étudiants congolais et des partenariats universitaires',
        'Promotion culturelle et rayonnement du patrimoine national',
        'Coordination protocolaire des délégations officielles',
      ],
    },
  },
];

// Exactly 6 Primary Services for the refined Consular Section
export const PRIMARY_CONSULAR_SERVICES: ConsularService[] = [
  {
    id: 'visa',
    title: {
      en: 'Visa Services',
      fr: 'Services des Visas',
    },
    subtitle: {
      en: 'Tourist, Business, Official & Transit entry visas',
      fr: 'Visas de tourisme, affaires, officiel et transit',
    },
    description: {
      en: 'Official entry visas issued for foreign nationals and Namibian residents traveling to the Democratic Republic of the Congo.',
      fr: 'Délivrance des visas d’entrée en RDC pour les citoyens namibiens et résidents étrangers pour motifs officiels, professionnels ou privés.',
    },
    requirements: {
      en: [
        'Passport valid for at least 6 months with minimum 2 blank pages',
        'Completed and signed official Visa Application Form',
        'Two recent passport-sized color photographs (35mm x 45mm)',
        'Legalized invitation letter or confirmed hotel booking in the DRC',
        'Yellow Fever International Certificate of Vaccination (mandatory)',
        'Round-trip flight booking or itinerary',
      ],
      fr: [
        'Passeport valide d’au moins 6 mois avec au moins 2 pages vierges',
        'Formulaire officiel de visa dûment complété et signé',
        'Deux photos d’identité récentes sur fond blanc (35mm x 45mm)',
        'Lettre d’invitation légalisée ou réservation d’hôtel en RDC',
        'Certificat international de vaccination contre la fièvre jaune (obligatoire)',
        'Réservation ou billet d’avion aller-retour',
      ],
    },
    processingTime: {
      en: '5 to 7 working days (Express: 48 hours)',
      fr: '5 à 7 jours ouvrables (Express : 48 heures)',
    },
    officialFeeNote: {
      en: 'Official fee schedule to be confirmed directly with the chancery.',
      fr: 'Tarifs officiels à confirmer directement auprès de la chancellerie.',
    },
    iconName: 'Stamp',
    formName: {
      en: 'DRC Visa Application Form (PDF)',
      fr: 'Formulaire de Demande de Visa RDC (PDF)',
    },
  },
  {
    id: 'passport',
    title: {
      en: 'Passport Services',
      fr: 'Services des Passeports',
    },
    subtitle: {
      en: 'Biometric passport enrollment, renewals & emergency laissez-passer',
      fr: 'Enrôlement biométrique, renouvellement et laissez-passer',
    },
    description: {
      en: 'Biometric enrollment and renewal processing for ordinary Congolese passports, and emergency travel laissez-passer for urgent departures.',
      fr: 'Enrôlement biométrique et renouvellement des passeports ordinaires congolais, et délivrance de laissez-passer d’urgence.',
    },
    requirements: {
      en: [
        'Proof of Congolese nationality (expired passport or birth certificate)',
        'Valid Consular Registration Card issued by the Embassy',
        'Four standard passport photographs adhering to ICAO biometrics standards',
        'Police declaration certificate if previous passport was lost or stolen',
        'Physical attendance for digital biometric capture at Chancery',
      ],
      fr: [
        'Preuve de nationalité congolaise (ancien passeport ou acte de naissance)',
        'Carte d’immatriculation consulaire en cours de validité',
        'Quatre photos d’identité conformes aux normes biométriques OACI',
        'Déclaration de perte de la police en cas de passeport égaré ou volé',
        'Présence physique requise pour la prise d’empreintes et photo biométrique',
      ],
    },
    processingTime: {
      en: 'Centralized production via Kinshasa (3–6 weeks)',
      fr: 'Production centralisée à Kinshasa (3 à 6 semaines)',
    },
    officialFeeNote: {
      en: 'Statutory fees fixed by ministerial decree; to be confirmed at the chancery.',
      fr: 'Frais réglementaires fixés par arrêté ministériel ; à confirmer à la chancellerie.',
    },
    iconName: 'BookUser',
    formName: {
      en: 'Passport Enrollment Form & Checklist (PDF)',
      fr: 'Formulaire d’Enrôlement Passeport (PDF)',
    },
  },
  {
    id: 'registration',
    title: {
      en: 'Consular Registration',
      fr: 'Immatriculation Consulaire',
    },
    subtitle: {
      en: 'Registration of Congolese nationals residing in the Republic of Namibia',
      fr: 'Enregistrement des ressortissants congolais établis en Namibie',
    },
    description: {
      en: 'Official registration for Congolese citizens residing, working, or studying in Namibia. Essential for consular protection and subsequent civil acts.',
      fr: 'Enregistrement officiel des citoyens congolais établis en Namibie. Indispensable pour la protection consulaire et la délivrance des actes.',
    },
    requirements: {
      en: [
        'Valid Congolese passport or proof of nationality',
        'Valid Namibian residence, work, or study permit',
        'Two recent passport-sized photographs',
        'Proof of address in Namibia (utility bill or lease)',
        'Proof of occupation, employment, or student enrollment',
      ],
      fr: [
        'Passeport congolais en cours de validité ou preuve de nationalité',
        'Titre de séjour, permis de travail ou permis d’études namibien',
        'Deux photos d’identité récentes',
        'Justificatif de domicile en Namibie',
        'Attestation d’emploi ou certificat d’inscription universitaire',
      ],
    },
    processingTime: {
      en: 'Issued within 24 to 48 hours upon file verification',
      fr: 'Délivrée sous 24 à 48 heures après vérification des pièces',
    },
    officialFeeNote: {
      en: 'Nominal administrative fee; to be confirmed by the Embassy.',
      fr: 'Frais administratifs statutaires ; à confirmer par l’Ambassade.',
    },
    iconName: 'BadgeCheck',
    formName: {
      en: 'Consular Registration Form (PDF)',
      fr: 'Fiche d’Immatriculation Consulaire (PDF)',
    },
  },
  {
    id: 'legalization',
    title: {
      en: 'Legalization & Authentication',
      fr: 'Légalisation & Authentification',
    },
    subtitle: {
      en: 'Official authentication of academic deeds, powers of attorney & commercial acts',
      fr: 'Certification conforme de diplômes, procurations et actes commerciaux',
    },
    description: {
      en: 'Authentication of public and private documents executed in the DRC for use in Namibia, and certification of Namibian deeds for legal use in the DRC.',
      fr: 'Certification de conformité et légalisation des actes publics et privés destinés à produire des effets juridiques en RDC ou en Namibie.',
    },
    requirements: {
      en: [
        'Original document and one clear photocopy',
        'For Namibian documents: Prior certification by Namibian Foreign Ministry (MIRCO)',
        'For DRC documents: Prior legalization by DRC Foreign Affairs in Kinshasa',
        'Valid identification of the applicant',
      ],
      fr: [
        'Document original accompagné d’une photocopie lisible',
        'Pour les actes namibiens : Authentification préalable par le MIRCO',
        'Pour les actes congolais : Légalisation préalable par les Affaires Étrangères à Kinshasa',
        'Pièce d’identité valide du demandeur',
      ],
    },
    processingTime: {
      en: '2 to 3 working days',
      fr: '2 à 3 jours ouvrables',
    },
    officialFeeNote: {
      en: 'Fee per document type; to be confirmed by the Embassy.',
      fr: 'Droits de chancellerie par acte ; à confirmer par l’Ambassade.',
    },
    iconName: 'FileCheck',
    formName: {
      en: 'Legalization Submission Slip (PDF)',
      fr: 'Bordereau de Légalisation d’Actes (PDF)',
    },
  },
  {
    id: 'civil-status',
    title: {
      en: 'Civil Status',
      fr: 'État Civil',
    },
    subtitle: {
      en: 'Birth registration, marriage transcripts, death records & certificates',
      fr: 'Transcription d’actes de naissance, mariage et décès',
    },
    description: {
      en: 'Transcription and recording of vital life events of Congolese nationals in Namibia into the official civil registers of the Democratic Republic of the Congo.',
      fr: 'Enregistrement et transcription des actes de naissance, mariage et décès survenus en territoire namibien dans les registres d’état civil de la RDC.',
    },
    requirements: {
      en: [
        'Original Namibian civil status certificate issued by Home Affairs',
        'Consular registration card of the parents or spouses',
        'Valid Congolese passports of the parties',
      ],
      fr: [
        'Acte original délivré par l’état civil namibien (Home Affairs)',
        'Cartes consulaires des parents ou des conjoints',
        'Passeports congolais valides des parties concernées',
      ],
    },
    processingTime: {
      en: '3 to 5 working days',
      fr: '3 à 5 jours ouvrables',
    },
    officialFeeNote: {
      en: 'Statutory fees per civil deed; to be confirmed by the Embassy.',
      fr: 'Frais statutaires par acte ; à confirmer par l’Ambassade.',
    },
    iconName: 'Users',
  },
  {
    id: 'emergency-assistance',
    title: {
      en: 'Emergency Assistance',
      fr: 'Assistance d’Urgence',
    },
    subtitle: {
      en: 'Citizen protection, medical repatriation coordination & emergency support',
      fr: 'Protection consulaire, rapatriement et urgences citoyennes',
    },
    description: {
      en: 'Consular protection and rapid assistance for Congolese citizens experiencing severe distress, acute hospitalization, arrest, or urgent repatriation in Namibia.',
      fr: 'Assistance consulaire d’urgence pour les citoyens congolais en situation de détresse majeure, hospitalisation, détention ou rapatriement en Namibie.',
    },
    requirements: {
      en: [
        'Immediate notification via the Chancery hotline: +264 61 256 287',
        'Identity details of the citizen in distress',
        'Location details (hospital, precinct, or port of entry)',
      ],
      fr: [
        'Signalement immédiat au standard consulaire : +264 61 256 287',
        'Identité précise du compatriote concerné',
        'Localisation exacte (hôpital, commissariat ou poste frontière)',
      ],
    },
    processingTime: {
      en: 'Immediate mobilization',
      fr: 'Mobilisation consulaire immédiate',
    },
    officialFeeNote: {
      en: 'Protection protocol under Vienna Convention on Consular Relations.',
      fr: 'Protocole de protection souveraine selon la Convention de Vienne.',
    },
    iconName: 'ShieldAlert',
  },
];

// 3 Bilateral Pillars
export const BILATERAL_PILLARS = [
  {
    id: 'diplomatic-cooperation',
    iconName: 'Handshake',
    title: { en: 'Diplomatic Cooperation', fr: 'Coopération Diplomatique' },
    desc: {
      en: 'Permanent diplomatic dialogue, mutual respect, and united African leadership within SADC and the African Union.',
      fr: 'Dialogue politique permanent, respect mutuel et concertation étroite au sein de la SADC et de l’Union Africaine.',
    },
  },
  {
    id: 'trade-economic',
    iconName: 'TrendingUp',
    title: { en: 'Trade & Economic Relations', fr: 'Échanges & Relations Économiques' },
    desc: {
      en: 'Promoting trade corridors, joint investment, and strategic maritime logistics through the Port of Walvis Bay.',
      fr: 'Développement des corridors commerciaux, investissements croisés et desserte portuaire via Walvis Bay.',
    },
  },
  {
    id: 'culture-regional',
    iconName: 'Globe2',
    title: { en: 'Culture & Regional Solidarity', fr: 'Culture & Solidarité Régionale' },
    desc: {
      en: 'University student exchanges, shared heritage, and deep fraternity between the Congolese and Namibian peoples.',
      fr: 'Mobilité universitaire, mise en valeur du patrimoine partagé et fraternité indéfectible entre nos peuples.',
    },
  },
];

// 3 Visual Cards for Discover DRC (including merged Business & Investment)
export const DISCOVER_DRC_3_CARDS = [
  {
    id: 'culture-heritage',
    title: { en: 'Culture & Heritage', fr: 'Culture & Patrimoine' },
    subtitle: { en: 'Rumba, Arts & Sovereign Identity', fr: 'Rumba, Arts & Identité Souveraine' },
    desc: {
      en: 'From Congolese Rumba—inscribed on the UNESCO Intangible Cultural Heritage list—to world-renowned contemporary plastic arts, literature, and vibrant creative expression.',
      fr: 'De la Rumba Congolaise, inscrite au patrimoine culturel immatériel de l’UNESCO, aux grands maîtres des arts plastiques contemporains et au rayonnement culturel mondial.',
    },
    keyPoint: { en: 'UNESCO Intangible Cultural Heritage', fr: 'Patrimoine Culturel Immatériel UNESCO' },
  },
  {
    id: 'tourism-nature',
    title: { en: 'Tourism & Nature', fr: 'Tourisme & Merveilles Naturelles' },
    subtitle: { en: 'Virunga, the Congo Basin & Rivers', fr: 'Virunga, Bassin du Congo & Grands Fleuves' },
    desc: {
      en: 'Five UNESCO World Heritage sanctuaries, the snow-capped Rwenzori Mountains, mountain gorillas, and the Congo Basin—the vital second lung of our planet.',
      fr: 'Cinq sites classés au patrimoine mondial de l’UNESCO, les sommets des monts Rwenzori, les gorilles de montagne et le Bassin du Congo, deuxième poumon de la Terre.',
    },
    keyPoint: { en: 'Earth’s Second Lung & Biodiversity', fr: 'Deuxième Poumon Planétaire & Biodiversité' },
  },
  {
    id: 'business-investment',
    title: { en: 'Business & Investment', fr: 'Affaires & Investissements Stratégiques' },
    subtitle: { en: 'Critical Minerals, Energy & Free Trade', fr: 'Minéraux Critiques, Énergie & Libre-Échange' },
    desc: {
      en: 'Global leader in cobalt and high-grade copper, monumental clean hydropower potential at Grand Inga, fertile agricultural basins, and favorable tax regimes via ANAPI.',
      fr: 'Premier producteur mondial de cobalt et cuivre de haute teneur, potentiel hydroélectrique colossal du Grand Inga, terres arables et facilités d’investissement via l’ANAPI.',
    },
    keyPoint: { en: '70% World Cobalt & Inga Clean Power', fr: '70% du Cobalt Mondial & Énergie Inga' },
  },
];

// News articles (1 featured + 2 smaller)
export const NEWS_STORIES: NewsArticle[] = [
  {
    id: 'tshisekedi-cooperation',
    category: { en: 'Diplomacy', fr: 'Diplomatie' },
    date: { en: 'October 12, 2026', fr: '12 Octobre 2026' },
    location: { en: 'Kinshasa · Windhoek', fr: 'Kinshasa · Windhoek' },
    featured: true,
    headline: {
      en: 'President Félix Tshisekedi Reaffirms Strategic Cooperation with Southern African Partners',
      fr: 'Le Président Félix Tshisekedi Réaffirme la Coopération Stratégique avec les Partenaires d’Afrique Australe',
    },
    excerpt: {
      en: 'The Head of State highlights the DRC’s commitment to regional economic integration, cross-border infrastructure, and strong bilateral ties with Namibia.',
      fr: 'Le Chef de l’État souligne l’engagement de la RDC pour l’intégration économique régionale, les infrastructures transfrontalières et les liens fraternels avec la Namibie.',
    },
    content: {
      en: [
        'His Excellency Félix Antoine Tshisekedi Tshilombo, President of the Democratic Republic of the Congo, has underscored the strategic imperative of deepening cooperation with fraternal Southern African nations, with particular emphasis on Namibia as an essential maritime gateway and valued diplomatic partner.',
        'During high-level diplomatic deliberations, the President highlighted mutual economic synergies in mining, energy transition minerals, and cross-border transport logistics connecting southern DRC to the deep-water Port of Walvis Bay.',
        'The Embassy in Windhoek remains actively engaged in operationalizing these presidential directives, fostering closer institutional ties with Namibian authorities.',
      ],
      fr: [
        'Son Excellence Félix Antoine Tshisekedi Tshilombo, Président de la République Démocratique du Congo, a réaffirmé l’impératif stratégique d’approfondir la coopération avec les nations d’Afrique australe, soulignant le rôle clé de la Namibie comme façade maritime.',
        'Lors d’échanges de haut niveau, le Chef de l’État a mis en exergue les synergies bilatérales dans les minéraux critiques de la transition énergétique et la logistique portuaire via Walvis Bay.',
        'L’Ambassade à Windhoek poursuit activement l’opérationnalisation de ces orientations présidentielles.',
      ],
    },
  },
  {
    id: 'ambassador-mirco',
    category: { en: 'Embassy News', fr: 'Actualités Ambassade' },
    date: { en: 'September 28, 2026', fr: '28 Septembre 2026' },
    location: { en: 'Windhoek, Namibia', fr: 'Windhoek, Namibie' },
    headline: {
      en: 'Ambassador Christian Katoto Holds Bilateral Consultations with Namibian Foreign Ministry',
      fr: 'L’Ambassadeur Christian Katoto en Concertation avec le Ministère Namibien des Affaires Étrangères',
    },
    excerpt: {
      en: 'Discussions centered on preparations for the Joint Permanent Commission on Cooperation and consular facilitation for travelers.',
      fr: 'Les entretiens ont porté sur la préparation de la Commission Mixte Permanente de Coopération et la facilitation consulaire.',
    },
    content: {
      en: [
        'Ambassador Christian Katoto held strategic working sessions at the Ministry of International Relations and Cooperation (MIRCO) in Windhoek.',
        'Both delegations reviewed the upcoming bilateral commission agenda, focusing on logistics corridors, trade facilitation, and academic agreements.',
      ],
      fr: [
        'L’Ambassadeur Christian Katoto s’est entretenu avec les hauts responsables du MIRCO à Windhoek.',
        'Les deux délégations ont examiné les priorités de la prochaine session mixte : corridors logistiques, échanges commerciaux et coopération universitaire.',
      ],
    },
  },
  {
    id: 'consular-walvis-bay',
    category: { en: 'Consular Notice', fr: 'Avis Consulaire' },
    date: { en: 'September 14, 2026', fr: '14 Septembre 2026' },
    location: { en: 'Walvis Bay · Erongo', fr: 'Walvis Bay · Erongo' },
    headline: {
      en: 'Consular Outreach Mission Announced for the Congolese Community in the Erongo Region',
      fr: 'Mission Consulaire Foraine Programmée pour la Communauté Congolaise de l’Erongo',
    },
    excerpt: {
      en: 'Mobile consular officers will deploy to Walvis Bay to provide passport enrollment, consular registration, and document certifications.',
      fr: 'Une équipe consulaire mobile sera déployée à Walvis Bay pour l’enrôlement aux passeports, l’immatriculation et les légalisations.',
    },
    content: {
      en: [
        'In line with the mission of accessible citizen services, the Embassy announces a mobile consular desk in Walvis Bay for Congolese nationals in the coastal region.',
        'The mobile delegation will handle biometric passport pre-enrollment and consular registrations.',
      ],
      fr: [
        'Conformément à la politique de proximité, l’Ambassade déploiera une mission foraine à Walvis Bay pour les ressortissants congolais de la région côtière.',
        'Les agents procéderont au pré-enrôlement biométrique et aux démarches d’immatriculation consulaire.',
      ],
    },
  },
];

// Gallery sneak-peek images
export const GALLERY_PREVIEW = [
  {
    id: 'g1',
    title: { en: 'Bilateral Consultations at MIRCO', fr: 'Consultations Bilatérales au MIRCO' },
    location: 'Windhoek',
    date: '2026',
  },
  {
    id: 'g2',
    title: { en: 'Commemoration of 66th Independence Day', fr: 'Célébration du 66ème Anniversaire de l’Indépendance' },
    location: 'Official Residence',
    date: 'June 30, 2026',
  },
  {
    id: 'g3',
    title: { en: 'Consular Engagement in Walvis Bay', fr: 'Dialogue Consulaire à Walvis Bay' },
    location: 'Erongo',
    date: '2026',
  },
];

export const OFFICIAL_NOTICE = {
  headline: {
    en: 'Important consular information and embassy announcements.',
    fr: 'Informations consulaires importantes et avis officiels de l’Ambassade.',
  },
  fullNotice: {
    en: 'The Embassy informs the public that the consular window at 56, Simeon Leenakele Shixungileni, Eros, Windhoek is open Monday to Thursday from 09:30 to 13:00 for passport collections, visa applications, and document legalizations. Appointments must be scheduled in advance.',
    fr: 'L’Ambassade informe le public que le guichet consulaire au 56, Simeon Leenakele Shixungileni, Eros, Windhoek est ouvert du lundi au jeudi de 09h30 à 13h00 pour les retraits de passeports, dépôts de visa et légalisations. Les rendez-vous préalables sont requis.',
  },
  refCode: 'AMBA-RDC-WNK/NOT-2026',
};
