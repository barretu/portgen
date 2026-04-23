// ════════════════════════════════════════════════════════
// TOOL i18n — translate the wizard UI itself
// ════════════════════════════════════════════════════════
const TOOL_I18N = {
  pt: {
    // Step titles & subtitles
    s1_title: 'Configure seu portfólio',
    s1_sub: 'Escolha o formato, tema e os idiomas antes de preencher o conteúdo.',
    s2_title: 'Informações pessoais',
    s2_sub: 'Seus dados de identificação. Aparecem no header e no currículo.',
    s3_title: 'Sobre mim',
    s3_sub: 'Uma apresentação sua — quem você é, o que faz e o que te motiva.',
    s4_title: 'Formação acadêmica',
    s4_sub: 'Adicione seus cursos, graduações e especializações.',
    s5_title: 'Experiência profissional',
    s5_sub: 'Empregos, freelas, estágios — qualquer experiência relevante.',
    s6_title: 'Projetos',
    s6_sub: 'Mostre o que você já construiu. Projetos pessoais e acadêmicos também contam!',
    s7_title: 'Habilidades',
    s7_sub: 'Escreva uma habilidade e pressione Enter ou , para adicionar.',
    s8_title: 'Certificados',
    s8_sub: 'Cursos, certificações e conquistas que valem mencionar.',
    s9_title: 'Links e redes extras',
    s9_sub: 'Adicione links que queira destacar no seu portfólio além dos já informados.',
    s10_title: 'Paleta de cores',
    s10_sub: 'Arraste o slider para escolher a cor base e selecione uma harmonia.',
    s11_title: 'Pronto para gerar! 🚀',
    s11_sub: 'Revise o resumo abaixo e clique para criar seu portfólio.',
    // Labels
    layout_label: 'Estrutura do portfólio',
    layout_landing: 'Landing Page', layout_landing_desc: 'Todas as seções em uma única página com navegação por âncora',
    layout_multi: 'Multi-página', layout_multi_desc: 'Cada seção em uma página separada, navegação via header',
    theme_label: 'Tema do portfólio gerado',
    theme_dark: '🌙 Escuro', theme_light: '☀️ Claro', theme_both: '🌗 Ambos (com toggle)',
    lang_label: 'Idiomas do portfólio',
    lang_hint: 'Português é sempre incluído. Selecione os idiomas extras que desejar — o visitante poderá alternar entre eles.',
    fullname: 'Nome completo', fullname_ph: 'Ex: Ana Clara Santos',
    jobtitle: 'Título profissional', jobtitle_ph: 'Ex: Desenvolvedora Front-End',
    email: 'E-mail', email_ph: 'Ex: ana@email.com',
    phone: 'Telefone', phone_ph: 'Ex: +55 11 99999-0000',
    linkedin: 'LinkedIn', linkedin_ph: 'https://linkedin.com/in/seuperfil',
    github: 'GitHub', github_ph: 'https://github.com/seuusuario',
    location: 'Localização', location_ph: 'Digite sua cidade ou região...',
    website: 'Website / portfólio extra', website_ph: 'https://seusite.com',
    photo_label: 'Foto de perfil',
    photo_hint: 'Clique para enviar uma foto (JPG, PNG)',
    photo_loaded: 'Foto carregada! Clique para trocar.',
    about_label: 'Texto "Sobre mim"',
    about_ph: 'Escreva um parágrafo apresentando você, sua trajetória, interesses e diferenciais profissionais...',
    // Education
    institution: 'Instituição', institution_ph: 'Ex: Universidade Federal de Pernambuco',
    course: 'Curso', course_ph: 'Ex: Engenharia de Software',
    degree: 'Grau', period: 'Período', period_ph: 'Ex: 2022 – 2026',
    desc_optional: 'Descrição', edu_desc_ph: 'Áreas de foco, atividades relevantes, projetos de destaque...',
    add_education: '+ Adicionar formação',
    // Experience
    company: 'Empresa', company_ph: 'Ex: Empresa de Tecnologia S.A.',
    role: 'Cargo', role_ph: 'Ex: Desenvolvedor Full Stack',
    period_exp_ph: 'Ex: Mar 2023 – Atual',
    type: 'Tipo', exp_desc_ph: 'Descreva suas principais atividades, tecnologias usadas e conquistas...',
    add_exp: '+ Adicionar experiência',
    // Projects
    proj_name: 'Nome do projeto', proj_name_ph: 'Ex: Sistema de Gerenciamento',
    proj_tech: 'Tecnologias usadas', proj_tech_ph: 'Ex: React, Node.js, PostgreSQL',
    proj_desc_ph: 'O que é o projeto, qual problema resolve e qual foi o seu papel?',
    proj_repo: 'Link do repositório', proj_repo_ph: 'https://github.com/usuario/repositorio',
    proj_live: 'Link ao vivo', proj_live_ph: 'https://meu-projeto.vercel.app',
    add_proj: '+ Adicionar projeto',
    // Skills
    tech_skills: 'Habilidades técnicas', tech_ph: 'Ex: JavaScript, React, Python...',
    soft_skills: 'Soft skills', soft_ph: 'Ex: Liderança, Comunicação, Trabalho em equipe...',
    lang_skills: 'Idiomas', lang_ph: 'Ex: Português (nativo), Inglês (B2)...',
    // Certs
    cert_name: 'Nome do certificado', cert_name_ph: 'Ex: Fundamentos de Cloud Computing',
    cert_issuer: 'Emissor', cert_issuer_ph: 'Ex: AWS, Google, Coursera',
    cert_date: 'Data', cert_date_ph: 'Ex: Jun 2024',
    cert_link: 'Link', add_cert: '+ Adicionar certificado',
    // Extra links
    behance_ph: 'https://behance.net/seuperfil', dribbble_ph: 'https://dribbble.com/seuperfil',
    youtube_ph: 'https://youtube.com/@seucanal', extra_link_ph: 'https://...',
    extra_label_ph: 'Rótulo do link (Ex: Kaggle, Medium, Lattes...)',
    // Color
    color_base: 'Arraste para escolher a cor base', color_harmony: 'Harmonia de cores',
    color_preview: 'Prévia da paleta',
    palette_labels: ['Primária', 'Secundária', 'Acento', 'Destaque'],
    // Nav
    back_start: '← Início', back: '← Voltar', next: 'Continuar →', generate: '✨ Gerar Portfólio',
    // Summary
    you: 'Você', settings: 'Configurações', palette: 'Paleta',
    // Degree options
    degrees: ['Graduação','Técnico','Pós-graduação','MBA','Mestrado','Doutorado','Bootcamp','Curso Livre'],
    exp_types: ['CLT','PJ','Freelance','Estágio','Voluntário'],
    // Optional
    optional: 'opcional', required: '*',
    // toast
    toast_gen: '✨ Gerando seu portfólio...',
  },
  en: {
    s1_title: 'Configure your portfolio',
    s1_sub: 'Choose the format, theme and languages before filling in your content.',
    s2_title: 'Personal information',
    s2_sub: 'Your identification data. These appear in the header and resume.',
    s3_title: 'About me',
    s3_sub: 'An introduction — who you are, what you do and what drives you.',
    s4_title: 'Education',
    s4_sub: 'Add your courses, degrees and specializations.',
    s5_title: 'Work experience',
    s5_sub: 'Jobs, freelance, internships — any relevant experience.',
    s6_title: 'Projects',
    s6_sub: 'Show what you have built. Personal and academic projects count too!',
    s7_title: 'Skills',
    s7_sub: 'Type a skill and press Enter or , to add.',
    s8_title: 'Certificates',
    s8_sub: 'Courses, certifications and achievements worth mentioning.',
    s9_title: 'Extra links & networks',
    s9_sub: 'Add links you want to highlight beyond those already provided.',
    s10_title: 'Color palette',
    s10_sub: 'Drag the slider to choose your base color and select a harmony.',
    s11_title: 'Ready to generate! 🚀',
    s11_sub: 'Review the summary below and click to create your portfolio.',
    layout_label: 'Portfolio structure',
    layout_landing: 'Landing Page', layout_landing_desc: 'All sections on a single page with anchor navigation',
    layout_multi: 'Multi-page', layout_multi_desc: 'Each section on its own page, navigation via header',
    theme_label: 'Portfolio theme',
    theme_dark: '🌙 Dark', theme_light: '☀️ Light', theme_both: '🌗 Both (with toggle)',
    lang_label: 'Portfolio languages',
    lang_hint: 'Portuguese is always included. Select extra languages — the visitor can switch between them.',
    fullname: 'Full name', fullname_ph: 'e.g. John Michael Smith',
    jobtitle: 'Professional title', jobtitle_ph: 'e.g. Front-End Developer',
    email: 'Email', email_ph: 'e.g. john@email.com',
    phone: 'Phone', phone_ph: 'e.g. +1 555 000-0000',
    linkedin: 'LinkedIn', linkedin_ph: 'https://linkedin.com/in/yourprofile',
    github: 'GitHub', github_ph: 'https://github.com/yourusername',
    location: 'Location', location_ph: 'Type your city or region...',
    website: 'Website / extra portfolio', website_ph: 'https://yoursite.com',
    photo_label: 'Profile photo',
    photo_hint: 'Click to upload a photo (JPG, PNG)',
    photo_loaded: 'Photo loaded! Click to change.',
    about_label: 'About me text',
    about_ph: 'Write a paragraph introducing yourself, your background, interests and professional highlights...',
    institution: 'Institution', institution_ph: 'e.g. MIT',
    course: 'Course', course_ph: 'e.g. Computer Science',
    degree: 'Degree', period: 'Period', period_ph: 'e.g. 2022 – 2026',
    desc_optional: 'Description', edu_desc_ph: 'Focus areas, relevant activities, notable projects...',
    add_education: '+ Add education',
    company: 'Company', company_ph: 'e.g. Tech Company Inc.',
    role: 'Role', role_ph: 'e.g. Full Stack Developer',
    period_exp_ph: 'e.g. Mar 2023 – Present',
    type: 'Type', exp_desc_ph: 'Describe your main activities, technologies used and achievements...',
    add_exp: '+ Add experience',
    proj_name: 'Project name', proj_name_ph: 'e.g. Management System',
    proj_tech: 'Technologies used', proj_tech_ph: 'e.g. React, Node.js, PostgreSQL',
    proj_desc_ph: 'What is the project, what problem does it solve and what was your role?',
    proj_repo: 'Repository link', proj_repo_ph: 'https://github.com/user/repo',
    proj_live: 'Live link', proj_live_ph: 'https://my-project.vercel.app',
    add_proj: '+ Add project',
    tech_skills: 'Technical skills', tech_ph: 'e.g. JavaScript, React, Python...',
    soft_skills: 'Soft skills', soft_ph: 'e.g. Leadership, Communication...',
    lang_skills: 'Languages', lang_ph: 'e.g. English (native), Spanish (B2)...',
    cert_name: 'Certificate name', cert_name_ph: 'e.g. Cloud Computing Fundamentals',
    cert_issuer: 'Issuer', cert_issuer_ph: 'e.g. AWS, Google, Coursera',
    cert_date: 'Date', cert_date_ph: 'e.g. Jun 2024',
    cert_link: 'Link', add_cert: '+ Add certificate',
    behance_ph: 'https://behance.net/yourprofile', dribbble_ph: 'https://dribbble.com/yourprofile',
    youtube_ph: 'https://youtube.com/@yourchannel', extra_link_ph: 'https://...',
    extra_label_ph: 'Link label (e.g. Kaggle, Medium, Dev.to...)',
    color_base: 'Drag to choose base color', color_harmony: 'Color harmony',
    color_preview: 'Palette preview',
    palette_labels: ['Primary', 'Secondary', 'Accent', 'Highlight'],
    back_start: '← Home', back: '← Back', next: 'Continue →', generate: '✨ Generate Portfolio',
    you: 'You', settings: 'Settings', palette: 'Palette',
    degrees: ['Bachelor','Technical','Post-graduation','MBA','Master\'s','PhD','Bootcamp','Short course'],
    exp_types: ['Full-time','Freelance','Contract','Internship','Volunteer'],
    optional: 'optional', required: '*',
    toast_gen: '✨ Generating your portfolio...',
  },
  es: {
    s1_title: 'Configura tu portafolio',
    s1_sub: 'Elige el formato, tema e idiomas antes de rellenar tu contenido.',
    s2_title: 'Información personal',
    s2_sub: 'Tus datos de identificación. Aparecen en el encabezado y en el currículum.',
    s3_title: 'Sobre mí',
    s3_sub: 'Una presentación tuya — quién eres, qué haces y qué te motiva.',
    s4_title: 'Formación académica',
    s4_sub: 'Agrega tus cursos, carreras y especializaciones.',
    s5_title: 'Experiencia profesional',
    s5_sub: 'Trabajos, freelance, prácticas — cualquier experiencia relevante.',
    s6_title: 'Proyectos',
    s6_sub: 'Muestra lo que has construido. ¡Los proyectos personales y académicos también cuentan!',
    s7_title: 'Habilidades',
    s7_sub: 'Escribe una habilidad y presiona Enter o , para agregarla.',
    s8_title: 'Certificados',
    s8_sub: 'Cursos, certificaciones y logros que vale mencionar.',
    s9_title: 'Links y redes adicionales',
    s9_sub: 'Agrega enlaces que quieras destacar en tu portafolio.',
    s10_title: 'Paleta de colores',
    s10_sub: 'Arrastra el slider para elegir el color base y selecciona una armonía.',
    s11_title: '¡Listo para generar! 🚀',
    s11_sub: 'Revisa el resumen y haz clic para crear tu portafolio.',
    layout_label: 'Estructura del portafolio',
    layout_landing: 'Landing Page', layout_landing_desc: 'Todas las secciones en una sola página con navegación por ancla',
    layout_multi: 'Multi-página', layout_multi_desc: 'Cada sección en su propia página, navegación por encabezado',
    theme_label: 'Tema del portafolio',
    theme_dark: '🌙 Oscuro', theme_light: '☀️ Claro', theme_both: '🌗 Ambos (con toggle)',
    lang_label: 'Idiomas del portafolio',
    lang_hint: 'El Portugués siempre está incluido. Selecciona los idiomas extra que desees.',
    fullname: 'Nombre completo', fullname_ph: 'Ej: Ana García López',
    jobtitle: 'Título profesional', jobtitle_ph: 'Ej: Desarrolladora Front-End',
    email: 'Correo electrónico', email_ph: 'Ej: ana@correo.com',
    phone: 'Teléfono', phone_ph: 'Ej: +34 600 000 000',
    linkedin: 'LinkedIn', linkedin_ph: 'https://linkedin.com/in/tuperfil',
    github: 'GitHub', github_ph: 'https://github.com/tuusuario',
    location: 'Ubicación', location_ph: 'Escribe tu ciudad o región...',
    website: 'Sitio web / portafolio extra', website_ph: 'https://tusitio.com',
    photo_label: 'Foto de perfil',
    photo_hint: 'Haz clic para subir una foto (JPG, PNG)',
    photo_loaded: '¡Foto cargada! Haz clic para cambiar.',
    about_label: 'Texto "Sobre mí"',
    about_ph: 'Escribe un párrafo presentándote, tu trayectoria, intereses y diferenciales...',
    institution: 'Institución', institution_ph: 'Ej: Universidad Autónoma de Madrid',
    course: 'Carrera', course_ph: 'Ej: Ingeniería Informática',
    degree: 'Grado', period: 'Período', period_ph: 'Ej: 2022 – 2026',
    desc_optional: 'Descripción', edu_desc_ph: 'Áreas de enfoque, actividades relevantes...',
    add_education: '+ Agregar formación',
    company: 'Empresa', company_ph: 'Ej: Empresa de Tecnología S.A.',
    role: 'Cargo', role_ph: 'Ej: Desarrollador Full Stack',
    period_exp_ph: 'Ej: Mar 2023 – Actual',
    type: 'Tipo', exp_desc_ph: 'Describe tus actividades, tecnologías y logros...',
    add_exp: '+ Agregar experiencia',
    proj_name: 'Nombre del proyecto', proj_name_ph: 'Ej: Sistema de Gestión',
    proj_tech: 'Tecnologías usadas', proj_tech_ph: 'Ej: React, Node.js, PostgreSQL',
    proj_desc_ph: '¿Qué es el proyecto y cuál fue tu rol?',
    proj_repo: 'Enlace del repositorio', proj_repo_ph: 'https://github.com/usuario/repo',
    proj_live: 'Enlace en vivo', proj_live_ph: 'https://mi-proyecto.vercel.app',
    add_proj: '+ Agregar proyecto',
    tech_skills: 'Habilidades técnicas', tech_ph: 'Ej: JavaScript, React, Python...',
    soft_skills: 'Habilidades blandas', soft_ph: 'Ej: Liderazgo, Comunicación...',
    lang_skills: 'Idiomas', lang_ph: 'Ej: Español (nativo), Inglés (B2)...',
    cert_name: 'Nombre del certificado', cert_name_ph: 'Ej: Fundamentos de Cloud Computing',
    cert_issuer: 'Emisor', cert_issuer_ph: 'Ej: AWS, Google, Coursera',
    cert_date: 'Fecha', cert_date_ph: 'Ej: Jun 2024',
    cert_link: 'Enlace', add_cert: '+ Agregar certificado',
    behance_ph: 'https://behance.net/tuperfil', dribbble_ph: 'https://dribbble.com/tuperfil',
    youtube_ph: 'https://youtube.com/@tucanal', extra_link_ph: 'https://...',
    extra_label_ph: 'Etiqueta del enlace (Ej: Kaggle, Medium...)',
    color_base: 'Arrastra para elegir el color base', color_harmony: 'Armonía de colores',
    color_preview: 'Vista previa de la paleta',
    palette_labels: ['Primario', 'Secundario', 'Acento', 'Destacado'],
    back_start: '← Inicio', back: '← Volver', next: 'Continuar →', generate: '✨ Generar Portafolio',
    you: 'Tú', settings: 'Configuración', palette: 'Paleta',
    degrees: ['Licenciatura','Técnico','Postgrado','MBA','Maestría','Doctorado','Bootcamp','Curso libre'],
    exp_types: ['Tiempo completo','Freelance','Contrato','Prácticas','Voluntario'],
    optional: 'opcional', required: '*',
    toast_gen: '✨ Generando tu portafolio...',
  },
  fr: {
    s1_title: 'Configurez votre portfolio',
    s1_sub: 'Choisissez le format, le thème et les langues avant de remplir votre contenu.',
    s2_title: 'Informations personnelles',
    s2_sub: 'Vos données d\'identification. Elles apparaissent dans l\'en-tête et le CV.',
    s3_title: 'À propos de moi',
    s3_sub: 'Une présentation de vous — qui vous êtes, ce que vous faites et ce qui vous motive.',
    s4_title: 'Formation',
    s4_sub: 'Ajoutez vos cours, diplômes et spécialisations.',
    s5_title: 'Expérience professionnelle',
    s5_sub: 'Emplois, freelance, stages — toute expérience pertinente.',
    s6_title: 'Projets',
    s6_sub: 'Montrez ce que vous avez construit. Les projets personnels comptent aussi !',
    s7_title: 'Compétences',
    s7_sub: 'Saisissez une compétence et appuyez sur Entrée ou , pour l\'ajouter.',
    s8_title: 'Certifications',
    s8_sub: 'Cours, certifications et réalisations à mentionner.',
    s9_title: 'Liens et réseaux supplémentaires',
    s9_sub: 'Ajoutez les liens que vous souhaitez mettre en avant.',
    s10_title: 'Palette de couleurs',
    s10_sub: 'Faites glisser le curseur pour choisir la couleur de base et sélectionnez une harmonie.',
    s11_title: 'Prêt à générer ! 🚀',
    s11_sub: 'Vérifiez le résumé ci-dessous et cliquez pour créer votre portfolio.',
    layout_label: 'Structure du portfolio',
    layout_landing: 'Landing Page', layout_landing_desc: 'Toutes les sections sur une seule page avec navigation par ancre',
    layout_multi: 'Multi-page', layout_multi_desc: 'Chaque section sur sa propre page, navigation via l\'en-tête',
    theme_label: 'Thème du portfolio',
    theme_dark: '🌙 Sombre', theme_light: '☀️ Clair', theme_both: '🌗 Les deux (avec toggle)',
    lang_label: 'Langues du portfolio',
    lang_hint: 'Le Portugais est toujours inclus. Sélectionnez les langues supplémentaires souhaitées.',
    fullname: 'Nom complet', fullname_ph: 'Ex : Marie Dupont',
    jobtitle: 'Titre professionnel', jobtitle_ph: 'Ex : Développeuse Front-End',
    email: 'Email', email_ph: 'Ex : marie@email.com',
    phone: 'Téléphone', phone_ph: 'Ex : +33 6 00 00 00 00',
    linkedin: 'LinkedIn', linkedin_ph: 'https://linkedin.com/in/votreprofil',
    github: 'GitHub', github_ph: 'https://github.com/votreutilisateur',
    location: 'Localisation', location_ph: 'Saisissez votre ville ou région...',
    website: 'Site web / portfolio supplémentaire', website_ph: 'https://votresite.com',
    photo_label: 'Photo de profil',
    photo_hint: 'Cliquez pour télécharger une photo (JPG, PNG)',
    photo_loaded: 'Photo chargée ! Cliquez pour changer.',
    about_label: 'Texte "À propos de moi"',
    about_ph: 'Rédigez un paragraphe vous présentant, votre parcours, vos intérêts et vos atouts professionnels...',
    institution: 'Établissement', institution_ph: 'Ex : Université Paris-Saclay',
    course: 'Cursus', course_ph: 'Ex : Génie Logiciel',
    degree: 'Diplôme', period: 'Période', period_ph: 'Ex : 2022 – 2026',
    desc_optional: 'Description', edu_desc_ph: 'Domaines d\'étude, activités, projets notables...',
    add_education: '+ Ajouter une formation',
    company: 'Entreprise', company_ph: 'Ex : Entreprise Tech SAS',
    role: 'Poste', role_ph: 'Ex : Développeur Full Stack',
    period_exp_ph: 'Ex : Mar 2023 – Présent',
    type: 'Type', exp_desc_ph: 'Décrivez vos activités, technologies et réalisations...',
    add_exp: '+ Ajouter une expérience',
    proj_name: 'Nom du projet', proj_name_ph: 'Ex : Système de gestion',
    proj_tech: 'Technologies utilisées', proj_tech_ph: 'Ex : React, Node.js, PostgreSQL',
    proj_desc_ph: 'Qu\'est-ce que le projet et quel a été votre rôle ?',
    proj_repo: 'Lien du dépôt', proj_repo_ph: 'https://github.com/utilisateur/repo',
    proj_live: 'Lien en direct', proj_live_ph: 'https://mon-projet.vercel.app',
    add_proj: '+ Ajouter un projet',
    tech_skills: 'Compétences techniques', tech_ph: 'Ex : JavaScript, React, Python...',
    soft_skills: 'Compétences douces', soft_ph: 'Ex : Leadership, Communication...',
    lang_skills: 'Langues', lang_ph: 'Ex : Français (natif), Anglais (B2)...',
    cert_name: 'Nom de la certification', cert_name_ph: 'Ex : Fondamentaux du Cloud Computing',
    cert_issuer: 'Émetteur', cert_issuer_ph: 'Ex : AWS, Google, Coursera',
    cert_date: 'Date', cert_date_ph: 'Ex : Juin 2024',
    cert_link: 'Lien', add_cert: '+ Ajouter une certification',
    behance_ph: 'https://behance.net/votreprofil', dribbble_ph: 'https://dribbble.com/votreprofil',
    youtube_ph: 'https://youtube.com/@votrechaine', extra_link_ph: 'https://...',
    extra_label_ph: 'Libellé du lien (Ex : Kaggle, Medium...)',
    color_base: 'Faites glisser pour choisir la couleur de base', color_harmony: 'Harmonie des couleurs',
    color_preview: 'Aperçu de la palette',
    palette_labels: ['Primaire', 'Secondaire', 'Accent', 'Mise en valeur'],
    back_start: '← Accueil', back: '← Retour', next: 'Continuer →', generate: '✨ Générer le Portfolio',
    you: 'Vous', settings: 'Paramètres', palette: 'Palette',
    degrees: ['Licence','BTS/IUT','Master','MBA','Master recherche','Doctorat','Bootcamp','Formation courte'],
    exp_types: ['CDI','Freelance','CDD','Stage','Bénévole'],
    optional: 'optionnel', required: '*',
    toast_gen: '✨ Génération de votre portfolio...',
  }
};

// Active tool language
let toolLang = 'pt';
let T = TOOL_I18N.pt; // shortcut

// ════════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════════
const state = {
  layoutType: 'landing',
  theme: 'dark',
  portfolioLangs: ['pt'],
  hue: 215,
  harmony: 'complementar',
  photo: null,
  location: '',
};

// ════════════════════════════════════════════════════════
// TOOL THEME
// ════════════════════════════════════════════════════════
let toolTheme = 'dark';
function initToolTheme() {
  const saved = localStorage.getItem('portgen-theme') || 'dark';
  toolTheme = saved;
  document.documentElement.setAttribute('data-theme', toolTheme);
  updateThemeIcon();
}
function toggleToolTheme() {
  toolTheme = toolTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', toolTheme);
  localStorage.setItem('portgen-theme', toolTheme);
  updateThemeIcon();
}
function updateThemeIcon() {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.textContent = toolTheme === 'dark' ? '☀️' : '🌙';
}

// ════════════════════════════════════════════════════════
// TOOL LANGUAGE
// ════════════════════════════════════════════════════════
function setToolLang(btn) {
  toolLang = btn.dataset.lang;
  T = TOOL_I18N[toolLang];
  document.querySelectorAll('.tool-lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === toolLang));
  // Update trigger display
  const flagEl = document.getElementById('toolLangFlag');
  const codeEl = document.getElementById('toolLangCode');
  if (flagEl) flagEl.textContent = btn.dataset.flag || '';
  if (codeEl) codeEl.textContent = toolLang.toUpperCase();
  // Close dropdown
  document.getElementById('toolLangDropdown').classList.remove('open');
  applyToolI18n();
  applyLandingI18n();
}

function toggleLangDropdown(e) {
  e.stopPropagation();
  document.getElementById('toolLangDropdown').classList.toggle('open');
}

function applyLandingI18n() {
  // Footer copy
  const footerCopy = document.getElementById('footerCopy');
  if (footerCopy) {
    const footerTexts = {
      pt: 'Feito por Thony Barreto · CESAR School 2026.1 · Turma B',
      en: 'Made by Thony Barreto · CESAR School 2026.1 · Class B',
      es: 'Hecho por Thony Barreto · CESAR School 2026.1 · Clase B',
      fr: 'Fait par Thony Barreto · CESAR School 2026.1 · Classe B',
    };
    footerCopy.textContent = footerTexts[toolLang] || footerTexts.pt;
  }
  // Footer portfolio link
  const footerPortTexts = { pt: 'Portfólio', en: 'Portfolio', es: 'Portafolio', fr: 'Portfolio' };
  const footerPortEl = document.querySelector('[data-i18n="footer_portfolio"]');
  if (footerPortEl) footerPortEl.textContent = footerPortTexts[toolLang] || footerPortTexts.pt;

  // Landing hero & sections
  const landingI18n = {
    pt: {
      badge: 'Ferramenta gratuita · 100% no navegador',
      h1: 'Crie seu portfólio<br>profissional em <em>minutos</em>',
      desc: 'O <strong>PortGen</strong> guia você por um formulário inteligente e gera um site de portfólio completo — com design moderno, paleta de cores personalizada, currículo pronto para imprimir e suporte a múltiplos idiomas. Sem código. Sem cadastro.',
      cta1: '✨ Criar meu portfólio', cta2: '📖 Como publicar meu portfólio',
      howTitle: 'Como funciona', howSub: 'Em apenas 4 passos você tem um portfólio pronto para publicar',
      steps: [['Configure','Escolha o layout, tema, idiomas e paleta de cores do seu portfólio.'],['Preencha','Adicione suas experiências, projetos, habilidades e certificados.'],['Gere','Clique em gerar e seu portfólio abre em uma nova aba, pronto para uso.'],['Publique','Salve o arquivo HTML e hospede gratuitamente no GitHub Pages ou Vercel.']],
    },
    en: {
      badge: 'Free tool · 100% in your browser',
      h1: 'Create your professional<br>portfolio in <em>minutes</em>',
      desc: '<strong>PortGen</strong> guides you through a smart form and generates a complete portfolio website — modern design, custom color palette, print-ready resume, and multi-language support. No code. No signup.',
      cta1: '✨ Create my portfolio', cta2: '📖 How to publish my portfolio',
      howTitle: 'How it works', howSub: 'In just 4 steps you have a portfolio ready to publish',
      steps: [['Configure','Choose the layout, theme, languages and color palette for your portfolio.'],['Fill in','Add your experiences, projects, skills and certificates.'],['Generate','Click generate and your portfolio opens in a new tab, ready to use.'],['Publish','Save the HTML file and host it for free on GitHub Pages or Vercel.']],
    },
    es: {
      badge: 'Herramienta gratuita · 100% en el navegador',
      h1: 'Crea tu portafolio<br>profesional en <em>minutos</em>',
      desc: '<strong>PortGen</strong> te guía por un formulario inteligente y genera un sitio de portafolio completo — diseño moderno, paleta de colores personalizada, currículum listo para imprimir y soporte multiidioma. Sin código. Sin registro.',
      cta1: '✨ Crear mi portafolio', cta2: '📖 Cómo publicar mi portafolio',
      howTitle: 'Cómo funciona', howSub: 'En solo 4 pasos tienes un portafolio listo para publicar',
      steps: [['Configura','Elige el diseño, tema, idiomas y paleta de colores de tu portafolio.'],['Rellena','Agrega tus experiencias, proyectos, habilidades y certificados.'],['Genera','Haz clic en generar y tu portafolio se abre en una nueva pestaña.'],['Publica','Guarda el archivo HTML y alójalo gratis en GitHub Pages o Vercel.']],
    },
    fr: {
      badge: 'Outil gratuit · 100% dans le navigateur',
      h1: 'Créez votre portfolio<br>professionnel en <em>minutes</em>',
      desc: '<strong>PortGen</strong> vous guide à travers un formulaire intelligent et génère un site portfolio complet — design moderne, palette de couleurs personnalisée, CV prêt à imprimer et support multilingue. Sans code. Sans inscription.',
      cta1: '✨ Créer mon portfolio', cta2: '📖 Comment publier mon portfolio',
      howTitle: 'Comment ça marche', howSub: 'En seulement 4 étapes, vous avez un portfolio prêt à publier',
      steps: [['Configurez','Choisissez la mise en page, le thème, les langues et la palette de couleurs.'],['Remplissez','Ajoutez vos expériences, projets, compétences et certifications.'],['Générez','Cliquez sur générer et votre portfolio s\'ouvre dans un nouvel onglet.'],['Publiez','Enregistrez le fichier HTML et hébergez-le gratuitement sur GitHub Pages ou Vercel.']],
    },
  };
  const li = landingI18n[toolLang] || landingI18n.pt;

  // Badge
  const badge = document.querySelector('.hero-badge');
  if (badge) { const dot = badge.querySelector('::before'); badge.childNodes.forEach(n => { if (n.nodeType === 3) n.textContent = li.badge; }); }
  // Try simpler approach for badge
  const heroBadgeEl = document.querySelector('.hero-badge');
  if (heroBadgeEl) heroBadgeEl.innerHTML = li.badge;

  // H1
  const h1 = document.querySelector('.hero-landing h1');
  if (h1) h1.innerHTML = li.h1;

  // Desc
  const desc = document.querySelector('.hero-landing p.hero-desc');
  if (desc) desc.innerHTML = li.desc;

  // CTAs
  const cta1 = document.querySelector('.cta-primary');
  if (cta1) cta1.textContent = li.cta1;
  const cta2 = document.querySelector('.cta-secondary');
  if (cta2) cta2.textContent = li.cta2;

  // How section
  const howH2 = document.querySelector('.how-section h2');
  if (howH2) howH2.textContent = li.howTitle;
  const howSub = document.querySelector('.how-section .section-sub');
  if (howSub) howSub.textContent = li.howSub;

  // Step cards
  const stepCards = document.querySelectorAll('.step-card');
  li.steps.forEach((s, i) => {
    if (stepCards[i]) {
      const h4 = stepCards[i].querySelector('h4');
      const p  = stepCards[i].querySelector('p');
      if (h4) h4.textContent = s[0];
      if (p)  p.textContent  = s[1];
    }
  });
}

function applyToolI18n() {
  // Step titles & subtitles
  for (let i = 1; i <= 11; i++) {
    const step = document.querySelector(`.step[data-step="${i}"]`);
    if (!step) continue;
    const title = step.querySelector('.step-title');
    const sub   = step.querySelector('.step-subtitle');
    if (title) title.textContent = T[`s${i}_title`] || '';
    if (sub)   sub.innerHTML    = T[`s${i}_sub`]   || '';
  }

  // Step 1 – layout cards, theme buttons, lang buttons
  setEl('#layoutLandingTitle', T.layout_landing);
  setEl('#layoutLandingDesc',  T.layout_landing_desc);
  setEl('#layoutMultiTitle',   T.layout_multi);
  setEl('#layoutMultiDesc',    T.layout_multi_desc);
  setEl('#layoutLabel',        T.layout_label);
  setEl('#themeLabel',         T.theme_label);
  setEl('#langLabel',          T.lang_label);
  setEl('#langHint',           T.lang_hint);
  setBtn('theme-dark',  T.theme_dark);
  setBtn('theme-light', T.theme_light);
  setBtn('theme-both',  T.theme_both);

  // Step 2
  setLabel('fullName',      T.fullname,  T.required); setPH('fullName',      T.fullname_ph);
  setLabel('jobTitle',      T.jobtitle,  T.required); setPH('jobTitle',      T.jobtitle_ph);
  setLabel('email',         T.email,     T.required); setPH('email',         T.email_ph);
  setLabel('phone',         T.phone,     null,  T.optional); setPH('phone',  T.phone_ph);
  setLabel('linkedin',      T.linkedin,  T.required); setPH('linkedin',      T.linkedin_ph);
  setLabel('github',        T.github,    null,  T.optional); setPH('github', T.github_ph);
  setLabel('locationInput', T.location,  T.required); setPH('locationInput', T.location_ph);
  setLabel('website',       T.website,   null,  T.optional); setPH('website', T.website_ph);

  // Step 3
  setEl('#photoLabelEl',  T.photo_label);
  setPH('about', T.about_ph);
  setEl('#aboutLabelEl', T.about_label);
  const photoText = document.getElementById('photoText');
  if (photoText && photoText.textContent.indexOf('!') === -1) photoText.textContent = T.photo_hint;

  // Step 7 (skills)
  setPH('techTagsInput', T.tech_ph);
  setPH('softTagsInput', T.soft_ph);
  setPH('langTagsInput', T.lang_ph);

  // Step 9 (extra links)
  setPH('behance',       T.behance_ph);
  setPH('dribbble',      T.dribbble_ph);
  setPH('youtube',       T.youtube_ph);
  setPH('extraLink',     T.extra_link_ph);
  setPH('extraLinkLabel',T.extra_label_ph);

  // Step 10 (colors)
  setEl('#colorBaseLabel',    T.color_base);
  setEl('#colorHarmonyLabel', T.color_harmony);
  setEl('#colorPreviewLabel', T.color_preview);
  updatePalettePreview();

  // All nav buttons
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[key]) el.textContent = T[key];
  });

  // Re-render cards with new labels
  refreshCardLabels();
}

function setEl(sel, text) {
  const el = document.querySelector(sel);
  if (el && text !== undefined) el.textContent = text;
}
function setPH(id, ph) {
  const el = document.getElementById(id);
  if (el && ph) el.placeholder = ph;
}
function setLabel(inputId, labelText, req, opt) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const wrap = input.closest('.field');
  if (!wrap) return;
  const lbl = wrap.querySelector('label');
  if (!lbl) return;
  lbl.textContent = labelText + ' ';
  if (req) {
    const sp = document.createElement('span');
    sp.className = 'req'; sp.textContent = req;
    lbl.appendChild(sp);
  }
  if (opt) {
    const sp = document.createElement('span');
    sp.className = 'optional-badge'; sp.textContent = opt;
    lbl.appendChild(sp);
  }
}
function setBtn(dataValue, text) {
  const btn = document.querySelector(`.toggle-btn[data-value="${dataValue}"]`);
  if (btn) btn.textContent = text;
}

// Refresh dynamic card placeholders (new cards will already use T)
function refreshCardLabels() {
  // nothing needed for existing cards as placeholders are set at creation time
  // Future cards will use current T
}

// ════════════════════════════════════════════════════════
// VIEWS: LANDING ↔ TOOL
// ════════════════════════════════════════════════════════
function showTool() {
  document.getElementById('landingPage').classList.remove('active');
  document.getElementById('toolView').classList.add('active');
  document.getElementById('stepIndicatorWrap').style.display = 'flex';
  document.getElementById('progressBarWrap').classList.add('visible');
  window.scrollTo({ top: 0 });
  updateProgress();
}
function showLanding() {
  document.getElementById('toolView').classList.remove('active');
  document.getElementById('landingPage').classList.add('active');
  document.getElementById('stepIndicatorWrap').style.display = 'none';
  document.getElementById('progressBarWrap').classList.remove('visible');
  window.scrollTo({ top: 0 });
}

// ════════════════════════════════════════════════════════
// PROGRESS BAR
// ════════════════════════════════════════════════════════
function updateProgress() {
  const pct = ((currentStep - 1) / (STEPS - 1)) * 100;
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = pct + '%';
}

// ════════════════════════════════════════════════════════
// WIZARD NAVIGATION
// ════════════════════════════════════════════════════════
const STEPS = 11;
let currentStep = 1;

function goStep(n) {
  const prev = currentStep;
  const current = document.querySelector(`.step[data-step="${prev}"]`);
  const next    = document.querySelector(`.step[data-step="${n}"]`);
  if (!next) return;

  // Remove animation classes
  current.classList.remove('active','go-forward','go-backward');
  current.style.display = 'none';

  currentStep = n;
  next.style.display = 'block';
  next.classList.remove('go-forward','go-backward','active');
  // Trigger reflow
  void next.offsetWidth;
  next.classList.add('active', n > prev ? 'go-forward' : 'go-backward');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateIndicator();
  updateProgress();
  if (n === 11) buildSummary();

  // Init color picker on step 10
  if (n === 10) {
    setTimeout(() => {
      drawHueCanvas();
      if (!hueListenersAdded) initHueCanvas();
      renderHarmonyGrid();
      updatePalettePreview();
    }, 50);
  }
}

function updateIndicator() {
  const ind = document.getElementById('stepIndicator');
  if (!ind) return;
  ind.innerHTML = '';
  for (let i = 1; i <= STEPS; i++) {
    const d = document.createElement('div');
    d.className = 'step-dot' + (i === currentStep ? ' active' : i < currentStep ? ' done' : '');
    if (i < currentStep) {
      d.title = `Step ${i}`;
      d.addEventListener('click', () => goStep(i));
    }
    ind.appendChild(d);
  }
}

// ════════════════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════════════════
function showToast(msg, type = '', duration = 2500) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(el._timer);
  el._timer = setTimeout(() => { el.classList.remove('show'); }, duration);
}

// ════════════════════════════════════════════════════════
// TOGGLE SELECTORS
// ════════════════════════════════════════════════════════
function selectToggle(el) {
  const target = el.dataset.target;
  const val    = el.dataset.value;
  document.querySelectorAll(`.toggle-btn[data-target="${target}"]`).forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  state[target] = val;
}
function selectBigChoice(el) {
  const target = el.dataset.target;
  const val    = el.dataset.value;
  document.querySelectorAll(`.big-choice-card[data-target="${target}"]`).forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  state[target] = val;
}
function toggleLang(el) {
  const val = el.dataset.value;
  if (val === 'pt') return;
  if (state.portfolioLangs.includes(val)) {
    state.portfolioLangs = state.portfolioLangs.filter(l => l !== val);
    el.classList.remove('selected');
  } else {
    state.portfolioLangs.push(val);
    el.classList.add('selected');
  }
}

// ════════════════════════════════════════════════════════
// PHOTO — drag & drop support
// ════════════════════════════════════════════════════════
function handlePhoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  loadPhotoFile(file);
}
function loadPhotoFile(file) {
  if (!file.type.startsWith('image/')) { showToast('Arquivo inválido. Use JPG ou PNG.', 'error'); return; }
  const reader = new FileReader();
  reader.onload = ev => {
    state.photo = ev.target.result;
    const prev = document.getElementById('photoPreview');
    prev.src = ev.target.result;
    prev.style.display = 'block';
    document.getElementById('photoIcon').style.display = 'none';
    document.getElementById('photoText').textContent = T.photo_loaded;
  };
  reader.readAsDataURL(file);
}
function initDragDrop() {
  const area = document.querySelector('.photo-upload-area');
  if (!area) return;
  area.addEventListener('dragover', e => { e.preventDefault(); area.classList.add('drag-over'); });
  area.addEventListener('dragleave', () => area.classList.remove('drag-over'));
  area.addEventListener('drop', e => {
    e.preventDefault(); area.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) loadPhotoFile(file);
  });
}

// ════════════════════════════════════════════════════════
// LOCATION AUTOCOMPLETE
// ════════════════════════════════════════════════════════
let locationDebounce = null;
let locationSelected = false;

function onLocationInput(e) {
  const val = e.target.value.trim();
  state.location = val;
  locationSelected = false;
  clearTimeout(locationDebounce);
  const dropdown = document.getElementById('locationDropdown');
  const spinner  = document.getElementById('locationSpinner');
  if (val.length < 3) { dropdown.classList.remove('open'); return; }
  spinner.style.display = 'block';
  locationDebounce = setTimeout(async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(val)}&format=json&addressdetails=1&limit=6&accept-language=pt`;
      const res  = await fetch(url, { headers: { 'Accept-Language': 'pt' } });
      const data = await res.json();
      spinner.style.display = 'none';
      renderLocationOptions(data);
    } catch {
      spinner.style.display = 'none';
      dropdown.classList.remove('open');
    }
  }, 400);
}
function renderLocationOptions(results) {
  const dropdown = document.getElementById('locationDropdown');
  dropdown.innerHTML = '';
  if (!results.length) { dropdown.classList.remove('open'); return; }
  results.forEach(r => {
    const a = r.address || {};
    const city    = a.city || a.town || a.village || a.municipality || '';
    const state_  = a.state || a.region || '';
    const country = a.country || '';
    const mainLabel = [city, state_].filter(Boolean).join(', ') || r.display_name.split(',')[0];
    const div = document.createElement('div');
    div.className = 'location-option';
    div.innerHTML = `<span class="loc-main">${mainLabel}</span><span class="loc-sub">${country}</span>`;
    div.addEventListener('mousedown', e => {
      e.preventDefault();
      document.getElementById('locationInput').value = mainLabel + (country ? ', ' + country : '');
      state.location = document.getElementById('locationInput').value;
      locationSelected = true;
      dropdown.classList.remove('open');
    });
    dropdown.appendChild(div);
  });
  dropdown.classList.add('open');
}
function onLocationBlur() {
  setTimeout(() => { document.getElementById('locationDropdown').classList.remove('open'); }, 150);
}

// ════════════════════════════════════════════════════════
// REPEATER CARDS
// ════════════════════════════════════════════════════════
let cardCounters = { education: 0, exp: 0, project: 0, cert: 0 };

function educationCard(id) {
  return `<div class="repeater-card" id="edu-${id}">
    <button class="remove-btn" onclick="removeCard('edu-${id}')">✕</button>
    <div class="row-2">
      <div class="field"><label>${T.institution}</label><input type="text" placeholder="${T.institution_ph}" data-field="institution" /></div>
      <div class="field"><label>${T.course}</label><input type="text" placeholder="${T.course_ph}" data-field="course" /></div>
    </div>
    <div class="row-2">
      <div class="field"><label>${T.degree}</label><select data-field="degree">${T.degrees.map(d=>`<option>${d}</option>`).join('')}</select></div>
      <div class="field"><label>${T.period}</label><input type="text" placeholder="${T.period_ph}" data-field="period" /></div>
    </div>
    <div class="field"><label>${T.desc_optional} <span class="optional-badge">${T.optional}</span></label><textarea rows="2" placeholder="${T.edu_desc_ph}" data-field="description"></textarea></div>
  </div>`;
}
function expCard(id) {
  return `<div class="repeater-card" id="exp-${id}">
    <button class="remove-btn" onclick="removeCard('exp-${id}')">✕</button>
    <div class="row-2">
      <div class="field"><label>${T.company}</label><input type="text" placeholder="${T.company_ph}" data-field="company" /></div>
      <div class="field"><label>${T.role}</label><input type="text" placeholder="${T.role_ph}" data-field="role" /></div>
    </div>
    <div class="row-2">
      <div class="field"><label>${T.period}</label><input type="text" placeholder="${T.period_exp_ph}" data-field="period" /></div>
      <div class="field"><label>${T.type}</label><select data-field="type">${T.exp_types.map(t=>`<option>${t}</option>`).join('')}</select></div>
    </div>
    <div class="field"><label>${T.desc_optional}</label><textarea rows="3" placeholder="${T.exp_desc_ph}" data-field="description"></textarea></div>
  </div>`;
}
function projectCard(id) {
  return `<div class="repeater-card" id="proj-${id}">
    <button class="remove-btn" onclick="removeCard('proj-${id}')">✕</button>
    <div class="row-2">
      <div class="field"><label>${T.proj_name}</label><input type="text" placeholder="${T.proj_name_ph}" data-field="name" /></div>
      <div class="field"><label>${T.proj_tech}</label><input type="text" placeholder="${T.proj_tech_ph}" data-field="tech" /></div>
    </div>
    <div class="field"><label>${T.desc_optional}</label><textarea rows="2" placeholder="${T.proj_desc_ph}" data-field="description"></textarea></div>
    <div class="row-2">
      <div class="field"><label>${T.proj_repo} <span class="optional-badge">${T.optional}</span></label><input type="url" placeholder="${T.proj_repo_ph}" data-field="repo" /></div>
      <div class="field"><label>${T.proj_live} <span class="optional-badge">${T.optional}</span></label><input type="url" placeholder="${T.proj_live_ph}" data-field="live" /></div>
    </div>
  </div>`;
}
function certCard(id) {
  return `<div class="repeater-card" id="cert-${id}">
    <button class="remove-btn" onclick="removeCard('cert-${id}')">✕</button>
    <div class="row-2">
      <div class="field"><label>${T.cert_name}</label><input type="text" placeholder="${T.cert_name_ph}" data-field="name" /></div>
      <div class="field"><label>${T.cert_issuer}</label><input type="text" placeholder="${T.cert_issuer_ph}" data-field="issuer" /></div>
    </div>
    <div class="row-2">
      <div class="field"><label>${T.cert_date}</label><input type="text" placeholder="${T.cert_date_ph}" data-field="date" /></div>
      <div class="field"><label>${T.cert_link} <span class="optional-badge">${T.optional}</span></label><input type="url" placeholder="https://..." data-field="link" /></div>
    </div>
  </div>`;
}

function addCard(listId, templateFn) {
  const type = { educationList: 'education', expList: 'exp', projectList: 'project', certList: 'cert' }[listId];
  const id = ++cardCounters[type];
  const wrap = document.getElementById(listId);
  const div = document.createElement('div');
  div.innerHTML = templateFn(id);
  wrap.appendChild(div.firstElementChild);
}
function removeCard(cardId) {
  const el = document.getElementById(cardId);
  if (!el) return;
  el.style.animation = 'none';
  el.style.transition = 'opacity .2s, transform .2s';
  el.style.opacity = '0';
  el.style.transform = 'scale(.95)';
  setTimeout(() => el.remove(), 200);
}
function collectCards(listId, fields) {
  const cards = document.querySelectorAll(`#${listId} .repeater-card`);
  return Array.from(cards).map(card => {
    const obj = {};
    fields.forEach(f => { const el = card.querySelector(`[data-field="${f}"]`); obj[f] = el ? el.value : ''; });
    return obj;
  });
}

// ════════════════════════════════════════════════════════
// TAG INPUT
// ════════════════════════════════════════════════════════
const tagStores = { techTags: [], softTags: [], langTags: [] };

function handleTag(e, containerId) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    const inputId = containerId + 'Input';
    const input = document.getElementById(inputId);
    const val = input.value.trim().replace(/,$/, '');
    if (!val) return;
    if (!tagStores[containerId].includes(val)) {
      tagStores[containerId].push(val);
      renderTags(containerId);
    }
    input.value = '';
  }
}
function renderTags(containerId) {
  const wrap  = document.getElementById(containerId);
  const input = document.getElementById(containerId + 'Input');
  wrap.innerHTML = '';
  tagStores[containerId].forEach(tag => {
    const el = document.createElement('div');
    el.className = 'tag';
    const safe = tag.replace(/'/g, "\\'");
    el.innerHTML = `${escapeHtml(tag)}<button type="button" onclick="removeTag('${containerId}','${safe}')">✕</button>`;
    wrap.appendChild(el);
  });
  wrap.appendChild(input);
}
function removeTag(containerId, tagValue) {
  tagStores[containerId] = tagStores[containerId].filter(t => t !== tagValue);
  renderTags(containerId);
}
function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ════════════════════════════════════════════════════════
// CHAR COUNTER for about textarea
// ════════════════════════════════════════════════════════
function initCharCounter() {
  const ta = document.getElementById('about');
  if (!ta) return;
  const counter = document.createElement('div');
  counter.className = 'char-counter';
  counter.id = 'aboutCounter';
  ta.parentElement.style.position = 'relative';
  ta.parentElement.appendChild(counter);
  const update = () => {
    const len = ta.value.length;
    counter.textContent = len + ' chars';
    counter.className = 'char-counter' + (len > 800 ? ' over' : len > 600 ? ' warn' : '');
  };
  ta.addEventListener('input', update);
  update();
}

// ════════════════════════════════════════════════════════
// COLOR PICKER
// ════════════════════════════════════════════════════════
let selectedHue = 215;
let selectedHarmony = 'complementar';
let hueListenersAdded = false;

const harmonies = [
  { name: 'Complementar',  key: 'complementar',  offsets: [0, 180] },
  { name: 'Análoga',       key: 'analoga',        offsets: [0, 30, 60] },
  { name: 'Tríade',        key: 'triade',         offsets: [0, 120, 240] },
  { name: 'Monocromática', key: 'monocromatica',  offsets: [0, 0, 0] },
];

function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function getHarmonyColors(hue, harmony) {
  const h = harmonies.find(h => h.key === harmony);
  if (!h) return [];
  if (harmony === 'monocromatica') return [
    hslToHex(hue, 70, 55), hslToHex(hue, 60, 40),
    hslToHex(hue, 50, 25), hslToHex(hue, 80, 70),
  ];
  return h.offsets.map((o, i) => hslToHex((hue + o) % 360, 70 - i * 5, 55 - i * 5));
}

function drawHueCanvas() {
  const canvas = document.getElementById('hueCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth || 600;
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  for (let i = 0; i <= 360; i += 10) grad.addColorStop(i / 360, `hsl(${i},80%,55%)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  updateThumb();
}
function initHueCanvas() {
  drawHueCanvas();
  if (hueListenersAdded) return;
  hueListenersAdded = true;
  const canvas = document.getElementById('hueCanvas');
  let dragging = false;
  const onMove = x => {
    const rect = canvas.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    selectedHue = Math.round(pct * 360);
    state.hue = selectedHue;
    updateThumb();
    renderHarmonyGrid();
    updatePalettePreview();
  };
  canvas.addEventListener('mousedown', e => { dragging = true; onMove(e.clientX); });
  canvas.addEventListener('mousemove', e => { if (dragging) onMove(e.clientX); });
  document.addEventListener('mouseup', () => dragging = false);
  canvas.addEventListener('touchstart', e => onMove(e.touches[0].clientX), { passive: true });
  canvas.addEventListener('touchmove', e => { onMove(e.touches[0].clientX); e.preventDefault(); }, { passive: false });
}
function updateThumb() {
  const canvas = document.getElementById('hueCanvas');
  const thumb  = document.getElementById('hueThumb');
  if (!canvas || !thumb) return;
  const pct  = selectedHue / 360;
  const rect = canvas.getBoundingClientRect();
  thumb.style.left = (pct * (rect.width || canvas.offsetWidth)) + 'px';
  thumb.style.background = `hsl(${selectedHue},80%,55%)`;
}
function renderHarmonyGrid() {
  const grid = document.getElementById('harmonyGrid');
  if (!grid) return;
  grid.innerHTML = '';
  harmonies.forEach(h => {
    const colors = getHarmonyColors(selectedHue, h.key);
    const card = document.createElement('div');
    card.className = 'harmony-card' + (selectedHarmony === h.key ? ' selected' : '');
    card.innerHTML = `<div class="swatches">${colors.map(c => `<span style="background:${c}"></span>`).join('')}</div><small>${h.name}</small>`;
    card.onclick = () => {
      selectedHarmony = h.key;
      state.harmony = h.key;
      document.querySelectorAll('.harmony-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      updatePalettePreview();
    };
    grid.appendChild(card);
  });
}
function updatePalettePreview() {
  const preview = document.getElementById('palettePreview');
  if (!preview) return;
  const colors = getHarmonyColors(selectedHue, selectedHarmony);
  const labels = (T && T.palette_labels) ? T.palette_labels : ['Primária','Secundária','Acento','Destaque'];
  preview.innerHTML = colors.map((c, i) =>
    `<div class="palette-swatch" style="background:${c}" data-label="${labels[i] || ''}"></div>`
  ).join('');
}

// ════════════════════════════════════════════════════════
// TUTORIAL MODAL
// ════════════════════════════════════════════════════════
function openTutorial() { document.getElementById('tutorialModal').classList.add('open'); }
function closeTutorial() { document.getElementById('tutorialModal').classList.remove('open'); }

// ════════════════════════════════════════════════════════
// SUMMARY (step 11)
// ════════════════════════════════════════════════════════
function buildSummary() {
  const name  = document.getElementById('fullName').value || '—';
  const title = document.getElementById('jobTitle').value || '—';
  const layoutLabel = state.layoutType === 'landing' ? (T.layout_landing || 'Landing Page') : (T.layout_multi || 'Multi-página');
  const themeLabel  = { dark: T.theme_dark, light: T.theme_light, both: T.theme_both }[state.theme] || '';
  const langMap = { pt: '🇧🇷 PT', en: '🇺🇸 EN', es: '🇪🇸 ES', fr: '🇫🇷 FR' };
  const langsLabel  = state.portfolioLangs.map(l => langMap[l]).join(' · ');
  const palette     = getHarmonyColors(state.hue, state.harmony);

  document.getElementById('summary').innerHTML = `
    <div style="display:flex;gap:1.5rem;flex-wrap:wrap;">
      <div style="flex:1;min-width:180px">
        <div style="color:var(--text-muted);font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">${T.you}</div>
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:1.15rem;font-weight:700">${escapeHtml(name)}</div>
        <div style="color:var(--text-muted);font-size:.88rem;margin-top:.15rem">${escapeHtml(title)}</div>
      </div>
      <div style="flex:1;min-width:180px">
        <div style="color:var(--text-muted);font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">${T.settings}</div>
        <div style="font-size:.88rem;display:flex;flex-direction:column;gap:.3rem">
          <span>📐 ${layoutLabel}</span>
          <span>${themeLabel}</span>
          <span>🌐 ${langsLabel}</span>
        </div>
      </div>
      <div style="flex:1;min-width:180px">
        <div style="color:var(--text-muted);font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">${T.palette}</div>
        <div style="display:flex;gap:6px;margin-top:.25rem">
          ${palette.map(c => `<div style="width:30px;height:30px;border-radius:8px;background:${c};transition:transform .2s" onmouseenter="this.style.transform='scale(1.2)'" onmouseleave="this.style.transform=''"></div>`).join('')}
        </div>
        <div style="font-size:.78rem;color:var(--text-muted);margin-top:.4rem">${harmonies.find(h => h.key === state.harmony)?.name || ''}</div>
      </div>
    </div>`;
}

// ════════════════════════════════════════════════════════
// GENERATE PORTFOLIO
// ════════════════════════════════════════════════════════
function generatePortfolio() {
  showToast(T.toast_gen, '', 3000);
  setTimeout(() => {
    const data = {
      ...state,
      fullName:     document.getElementById('fullName').value,
      jobTitle:     document.getElementById('jobTitle').value,
      email:        document.getElementById('email').value,
      phone:        document.getElementById('phone').value,
      linkedin:     document.getElementById('linkedin').value,
      github:       document.getElementById('github').value || '',
      location:     document.getElementById('locationInput').value || state.location,
      website:      document.getElementById('website').value,
      behance:      document.getElementById('behance').value,
      dribbble:     document.getElementById('dribbble').value,
      youtube:      document.getElementById('youtube').value,
      extraLink:    document.getElementById('extraLink').value,
      extraLinkLabel: document.getElementById('extraLinkLabel').value,
      about:        document.getElementById('about').value,
      education:    collectCards('educationList', ['institution','course','degree','period','description']),
      experience:   collectCards('expList',       ['company','role','period','type','description']),
      projects:     collectCards('projectList',   ['name','tech','description','repo','live']),
      certificates: collectCards('certList',      ['name','issuer','date','link']),
      techSkills:   [...tagStores.techTags],
      softSkills:   [...tagStores.softTags],
      langSkills:   [...tagStores.langTags],
      palette:      getHarmonyColors(selectedHue, selectedHarmony),
      hue:          selectedHue,
      harmony:      selectedHarmony,
    };
    const html = buildPortfolioHTML(data);
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    window.open(URL.createObjectURL(blob), '_blank');
  }, 300);
}

// ════════════════════════════════════════════════════════
// PORTFOLIO HTML BUILDER
// ════════════════════════════════════════════════════════
function buildPortfolioHTML(d) {
  const isLanding = d.layoutType === 'landing';
  const isDark    = d.theme === 'dark' || d.theme === 'both';
  const [c1, c2, c3, c4] = d.palette;

  const i18nAll = {
    pt: { about:'Sobre mim', education:'Formação', experience:'Experiência', projects:'Projetos', skills:'Habilidades', certificates:'Certificados', contact:'Contato', downloadResume:'Baixar Currículo (PDF)', techSkills:'Habilidades Técnicas', softSkills:'Soft Skills', languages:'Idiomas', viewProject:'Ver projeto', viewRepo:'Repositório', viewCert:'Ver certificado', issuedBy:'Emitido por', toggleTheme:'Alternar tema', hello:'👋 Olá, eu sou' },
    en: { about:'About Me', education:'Education', experience:'Experience', projects:'Projects', skills:'Skills', certificates:'Certificates', contact:'Contact', downloadResume:'Download Resume (PDF)', techSkills:'Technical Skills', softSkills:'Soft Skills', languages:'Languages', viewProject:'View Project', viewRepo:'Repository', viewCert:'View Certificate', issuedBy:'Issued by', toggleTheme:'Toggle theme', hello:'👋 Hi, I am' },
    es: { about:'Sobre mí', education:'Formación', experience:'Experiencia', projects:'Proyectos', skills:'Habilidades', certificates:'Certificados', contact:'Contacto', downloadResume:'Descargar CV (PDF)', techSkills:'Habilidades Técnicas', softSkills:'Habilidades Blandas', languages:'Idiomas', viewProject:'Ver proyecto', viewRepo:'Repositorio', viewCert:'Ver certificado', issuedBy:'Emitido por', toggleTheme:'Cambiar tema', hello:'👋 Hola, soy' },
    fr: { about:'À propos', education:'Formation', experience:'Expérience', projects:'Projets', skills:'Compétences', certificates:'Certifications', contact:'Contact', downloadResume:'Télécharger le CV (PDF)', techSkills:'Compétences Techniques', softSkills:'Compétences Douces', languages:'Langues', viewProject:'Voir le projet', viewRepo:'Dépôt', viewCert:'Voir la certification', issuedBy:'Délivré par', toggleTheme:'Changer de thème', hello:'👋 Bonjour, je suis' },
  };

  const primaryLang = 'pt';
  const t           = i18nAll[primaryLang];
  const extraLangs  = (d.portfolioLangs || ['pt']).filter(l => l !== 'pt');

  const lightVars = `--bg:#f0f4f9;--bg2:#ffffff;--surface:#e4ecf5;--border:#c0d0e0;--text:#0d1520;--text-muted:#5a7090;`;
  const darkVars  = `--bg:#0b0f1a;--bg2:#111827;--surface:#1a2030;--border:#2a3448;--text:#e8edf5;--text-muted:#7a8ba8;`;

  const sections = ['about','education','experience','projects','skills','certificates','contact'];

  const navLinks = sections.map(s =>
    `<a href="${isLanding ? '#' + s : '#'}" class="nav-link" data-page="${s}">${t[s] || s}</a>`
  ).join('');

  const langSwitcher = extraLangs.length > 0
    ? `<div class="lang-switcher" id="langSwitcher">
        <button class="lang-btn active" onclick="switchLang('pt')" data-lang="pt">PT</button>
        ${extraLangs.map(l => `<button class="lang-btn" onclick="switchLang('${l}')" data-lang="${l}">${l.toUpperCase()}</button>`).join('')}
       </div>` : '';

  const themeToggle = d.theme === 'both'
    ? `<button class="theme-toggle" id="themeToggle" onclick="toggleTheme()" title="${t.toggleTheme}"><span id="themeIcon">☀️</span></button>` : '';

  function sW(id, content, lang) {
    if (isLanding) return `<section id="${lang && lang !== 'pt' ? id+'-'+lang : id}" class="section"${lang ? ` data-lang-section="${lang}"` : ''}${lang && lang !== 'pt' ? ' style="display:none"' : ''}>${content}</section>`;
    return `<div class="page" id="${lang && lang !== 'pt' ? 'page-'+id+'-'+lang : 'page-'+id}" data-lang-section="${lang||'pt'}" style="${lang && lang !== 'pt' ? 'display:none' : (isLanding ? '' : 'display:none')}">${content}</div>`;
  }

  function multiLang(id, buildFn) {
    const pt = sW(id, buildFn(t), 'pt');
    if (!extraLangs.length) return pt;
    return pt + '\n' + extraLangs.map(lang => sW(id, buildFn(i18nAll[lang] || t), lang)).join('\n');
  }

  const aboutContent    = tl => `<div class="section-inner"><h2 class="sec-title">${tl.about}</h2><div class="about-grid">${d.photo?`<div class="about-photo-wrap"><img src="${d.photo}" class="about-photo" alt="${d.fullName}" /></div>`:''}<div class="about-text"><p>${d.about}</p>${d.location?`<div class="about-meta">📍 ${d.location}</div>`:''}</div></div></div>`;
  const educationContent = tl => `<div class="section-inner"><h2 class="sec-title">${tl.education}</h2><div class="timeline">${d.education.map(e=>`<div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><div class="tl-header"><div><div class="tl-title">${e.course||''}</div><div class="tl-sub">${e.institution||''} · ${e.degree||''}</div></div><div class="tl-period">${e.period||''}</div></div>${e.description?`<p class="tl-desc">${e.description}</p>`:''}</div></div>`).join('')}</div></div>`;
  const experienceContent= tl => `<div class="section-inner"><h2 class="sec-title">${tl.experience}</h2><div class="timeline">${d.experience.map(e=>`<div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><div class="tl-header"><div><div class="tl-title">${e.role||''}</div><div class="tl-sub">${e.company||''} · ${e.type||''}</div></div><div class="tl-period">${e.period||''}</div></div>${e.description?`<p class="tl-desc">${e.description}</p>`:''}</div></div>`).join('')}</div></div>`;
  const projectsContent = tl => `<div class="section-inner"><h2 class="sec-title">${tl.projects}</h2><div class="projects-grid">${d.projects.map(p=>`<div class="project-card"><div class="project-name">${p.name||''}</div><div class="project-tech">${p.tech||''}</div><p class="project-desc">${p.description||''}</p><div class="project-links">${p.live?`<a href="${p.live}" target="_blank" class="plink">${tl.viewProject} ↗</a>`:''} ${p.repo?`<a href="${p.repo}" target="_blank" class="plink plink-ghost">${tl.viewRepo}</a>`:''}</div></div>`).join('')}</div></div>`;
  const skillsContent   = tl => `<div class="section-inner"><h2 class="sec-title">${tl.skills}</h2>${d.techSkills.length?`<div class="skills-group"><h3>${tl.techSkills}</h3><div class="skills-tags">${d.techSkills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div></div>`:''} ${d.softSkills.length?`<div class="skills-group"><h3>${tl.softSkills}</h3><div class="skills-tags">${d.softSkills.map(s=>`<span class="skill-tag skill-soft">${s}</span>`).join('')}</div></div>`:''} ${d.langSkills.length?`<div class="skills-group"><h3>${tl.languages}</h3><div class="skills-tags">${d.langSkills.map(s=>`<span class="skill-tag skill-lang">${s}</span>`).join('')}</div></div>`:''}</div>`;
  const certsContent    = tl => `<div class="section-inner"><h2 class="sec-title">${tl.certificates}</h2><div class="certs-grid">${d.certificates.map(c=>`<div class="cert-card"><div class="cert-icon">🎓</div><div class="cert-name">${c.name||''}</div><div class="cert-issuer">${tl.issuedBy}: ${c.issuer||''}</div><div class="cert-date">${c.date||''}</div>${c.link?`<a href="${c.link}" target="_blank" class="cert-link">${tl.viewCert} ↗</a>`:''}</div>`).join('')}</div></div>`;
  const contactContent  = tl => `<div class="section-inner"><h2 class="sec-title">${tl.contact}</h2><div class="contact-grid">${d.email?`<a href="mailto:${d.email}" class="contact-card"><span class="contact-icon contact-email-icon">✉</span><span>${d.email}</span></a>`:''} ${d.phone?`<a href="tel:${d.phone}" class="contact-card"><span class="contact-icon">📞</span><span>${d.phone}</span></a>`:''} ${d.linkedin?`<a href="${d.linkedin}" target="_blank" class="contact-card contact-linkedin"><span class="contact-icon contact-li-icon">in</span><span>LinkedIn</span></a>`:''} ${d.github?`<a href="${d.github}" target="_blank" class="contact-card contact-github"><span class="contact-icon contact-gh-icon"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg></span><span>GitHub</span></a>`:''} ${d.website?`<a href="${d.website}" target="_blank" class="contact-card"><span class="contact-icon">🌐</span><span>Website</span></a>`:''} ${d.behance?`<a href="${d.behance}" target="_blank" class="contact-card"><span class="contact-icon">🎨</span><span>Behance</span></a>`:''} ${d.dribbble?`<a href="${d.dribbble}" target="_blank" class="contact-card"><span class="contact-icon">🏀</span><span>Dribbble</span></a>`:''} ${d.youtube?`<a href="${d.youtube}" target="_blank" class="contact-card"><span class="contact-icon">▶</span><span>YouTube</span></a>`:''} ${d.extraLink?`<a href="${d.extraLink}" target="_blank" class="contact-card"><span class="contact-icon">🔗</span><span>${d.extraLinkLabel||'Link'}</span></a>`:''}</div><div style="text-align:center;margin-top:2.5rem"><button class="resume-btn" onclick="openResume()">${tl.downloadResume}</button></div></div>`;

  const allSections = [
    multiLang('about',        aboutContent),
    multiLang('education',    educationContent),
    multiLang('experience',   experienceContent),
    multiLang('projects',     projectsContent),
    multiLang('skills',       skillsContent),
    multiLang('certificates', certsContent),
    multiLang('contact',      contactContent),
  ].join('\n');

  const multiPageScript = !isLanding ? `
    const _pages=['about','education','experience','projects','skills','certificates','contact'];
    function showPage(id,lang){
      lang=lang||currentLang;
      _pages.forEach(sid=>{
        ['','pt',...${JSON.stringify(extraLangs)}].forEach(l=>{
          const el=document.getElementById('page-'+sid+(l&&l!=='pt'?'-'+l:''));
          if(el)el.style.display='none';
        });
      });
      const suffix=(lang&&lang!=='pt')?'-'+lang:'';
      const target=document.getElementById('page-'+id+suffix)||document.getElementById('page-'+id);
      if(target)target.style.display='block';
      document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===id));
      window.scrollTo({top:0,behavior:'smooth'});
    }
    document.querySelectorAll('.nav-link').forEach(a=>{
      a.addEventListener('click',e=>{e.preventDefault();showPage(a.dataset.page);});
    });
    showPage('about');
  ` : `
    document.querySelectorAll('.nav-link').forEach(a=>{
      a.addEventListener('click',e=>{
        e.preventDefault();
        const suffix=(currentLang&&currentLang!=='pt')?'-'+currentLang:'';
        const el=document.getElementById(a.dataset.page+suffix)||document.getElementById(a.dataset.page);
        if(el)el.scrollIntoView({behavior:'smooth'});
        document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));
        a.classList.add('active');
      });
    });
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          const base=en.target.id.replace(/-[a-z]{2}$/,'');
          document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===base));
        }
      });
    },{threshold:.35});
    document.querySelectorAll('.section').forEach(s=>obs.observe(s));
  `;

  const langScript = extraLangs.length > 0 ? `
    let currentLang='pt';
    function switchLang(lang){
      currentLang=lang;
      document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
      document.querySelectorAll('[data-lang-section]').forEach(el=>{
        el.style.display=(el.getAttribute('data-lang-section')===lang)?'':'none';
      });
      ${isLanding ? `document.querySelectorAll('.nav-link').forEach(a=>{const base=a.dataset.page;a.href='#'+(lang!=='pt'?base+'-'+lang:base);});` : ''}
    }
  ` : `let currentLang='pt';`;

  const themeScript = d.theme === 'both' ? `
    let _dark=true;
    function toggleTheme(){_dark=!_dark;document.documentElement.setAttribute('data-theme',_dark?'dark':'light');document.getElementById('themeIcon').textContent=_dark?'☀️':'🌙';}
  ` : '';

  function buildResumeHTML(d) {
    return `<!DOCTYPE html>
<html lang="pt">
<head>
<!-- PortGen Resume | ATS-Optimized | Generated by PortGen by Thony Barros | CESAR School 2026.1 | Turma B -->
<meta charset="UTF-8"/>
<title>${d.fullName} — Currículo</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Plus Jakarta Sans',Arial,sans-serif;font-size:11pt;color:#111;background:#fff;max-width:800px;margin:0 auto;padding:2.5rem 3rem;line-height:1.5}
.resume-header{margin-bottom:1.5rem;border-bottom:2px solid #111;padding-bottom:1rem}
.resume-name{font-family:'Bricolage Grotesque',Arial,sans-serif;font-size:22pt;font-weight:800;letter-spacing:-.02em}
.resume-title{font-size:12pt;color:#444;margin-top:.2rem}
.resume-contacts{display:flex;flex-wrap:wrap;gap:.5rem .75rem;margin-top:.5rem;font-size:9.5pt;color:#333}
.resume-contacts a{color:#333;text-decoration:none}
h2{font-size:10pt;font-weight:700;text-transform:uppercase;letter-spacing:.1em;border-bottom:1px solid #ccc;padding-bottom:.2rem;margin:1.5rem 0 .75rem;color:#111}
.res-item{margin-bottom:1rem}
.res-item-header{display:flex;justify-content:space-between}
.res-item-title{font-weight:600;font-size:10.5pt}
.res-item-sub{font-size:9.5pt;color:#555;margin-top:.1rem}
.res-item-period{font-size:9.5pt;color:#555;white-space:nowrap}
.res-item-desc{font-size:9.5pt;margin-top:.3rem;color:#333}
.tags-line{display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.5rem}
.tag-ats{font-size:9pt;border:1px solid #bbb;padding:.1rem .5rem;border-radius:3px}
.about-text{font-size:10pt;color:#333;margin-bottom:.5rem}
@media print{body{padding:1.5rem 2rem}button{display:none}}
</style>
</head>
<body>
<div class="resume-header">
  <div class="resume-name">${d.fullName}</div>
  <div class="resume-title">${d.jobTitle}</div>
  <div class="resume-contacts">
    ${d.email?`<span>✉ <a href="mailto:${d.email}">${d.email}</a></span>`:''}
    ${d.phone?`<span>📞 ${d.phone}</span>`:''}
    ${d.location?`<span>📍 ${d.location}</span>`:''}
    ${d.linkedin?`<span>🔗 <a href="${d.linkedin}">${d.linkedin}</a></span>`:''}
    ${d.github?`<span>⌥ <a href="${d.github}">${d.github}</a></span>`:''}
    ${d.website?`<span>🌐 <a href="${d.website}">${d.website}</a></span>`:''}
  </div>
</div>
${d.about?`<h2>Resumo Profissional</h2><p class="about-text">${d.about}</p>`:''}
${d.techSkills.length?`<h2>Habilidades</h2><div class="tags-line">${[...d.techSkills,...d.softSkills].map(s=>`<span class="tag-ats">${s}</span>`).join('')}</div>`:''}
${d.experience.length?`<h2>Experiência Profissional</h2>${d.experience.map(e=>`<div class="res-item"><div class="res-item-header"><span class="res-item-title">${e.role}</span><span class="res-item-period">${e.period}</span></div><div class="res-item-sub">${e.company} · ${e.type}</div>${e.description?`<div class="res-item-desc">${e.description}</div>`:''}</div>`).join('')}`:''}
${d.education.length?`<h2>Formação Acadêmica</h2>${d.education.map(e=>`<div class="res-item"><div class="res-item-header"><span class="res-item-title">${e.course}</span><span class="res-item-period">${e.period}</span></div><div class="res-item-sub">${e.institution} · ${e.degree}</div>${e.description?`<div class="res-item-desc">${e.description}</div>`:''}</div>`).join('')}`:''}
${d.projects.length?`<h2>Projetos</h2>${d.projects.map(p=>`<div class="res-item"><div class="res-item-title">${p.name}</div><div class="res-item-sub">${p.tech}</div>${p.description?`<div class="res-item-desc">${p.description}</div>`:''}</div>`).join('')}`:''}
${d.certificates.length?`<h2>Certificados</h2>${d.certificates.map(c=>`<div class="res-item"><div class="res-item-header"><span class="res-item-title">${c.name}</span><span class="res-item-period">${c.date}</span></div><div class="res-item-sub">${c.issuer}</div></div>`).join('')}`:''}
${d.langSkills.length?`<h2>Idiomas</h2><div class="tags-line">${d.langSkills.map(l=>`<span class="tag-ats">${l}</span>`).join('')}</div>`:''}
<div style="margin-top:2rem;text-align:center">
  <button onclick="window.print()" style="padding:.6rem 1.8rem;background:#111;color:#fff;border:none;border-radius:6px;font-size:10pt;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;">🖨️ Imprimir / Salvar como PDF</button>
  <p style="margin-top:.5rem;font-size:8.5pt;color:#888">No diálogo de impressão, selecione "Salvar como PDF" e defina margens como "Nenhuma" ou "Mínima"</p>
</div>
</body></html>`;
  }

  const pCSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--c1:${c1};--c2:${c2};--c3:${c3||c1};--c4:${c4||c2};--radius:14px;--radius-lg:22px;${isDark?darkVars:lightVars}}
[data-theme="dark"]{${darkVars}}[data-theme="light"]{${lightVars}}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;-webkit-font-smoothing:antialiased}
.nav{position:sticky;top:0;z-index:100;background:var(--bg2);border-bottom:1px solid var(--border);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:60px;backdrop-filter:blur(12px)}
.nav-brand{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:1.1rem;color:var(--text);text-decoration:none}
.nav-brand span{color:var(--c1)}
.nav-links{display:flex;gap:1.5rem;align-items:center;list-style:none;overflow-x:auto}
.nav-link{font-size:.875rem;font-weight:500;color:var(--text-muted);text-decoration:none;transition:color .2s;white-space:nowrap;cursor:pointer;border:none;background:none;font-family:'Plus Jakarta Sans',sans-serif;padding:0}
.nav-link:hover,.nav-link.active{color:var(--c1)}
.nav-right{display:flex;align-items:center;gap:.75rem}
.theme-toggle{background:var(--surface);border:1px solid var(--border);border-radius:999px;width:36px;height:36px;cursor:pointer;font-size:.9rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.lang-switcher{display:flex;gap:.35rem}
.lang-btn{padding:.25rem .6rem;border-radius:999px;border:1px solid var(--border);background:var(--surface);color:var(--text-muted);font-family:'Plus Jakarta Sans',sans-serif;font-size:.75rem;font-weight:600;cursor:pointer;transition:all .2s}
.lang-btn.active{border-color:var(--c1);color:var(--c1)}
.hero{padding:5rem 2rem 4rem;max-width:900px;margin:0 auto;display:flex;align-items:center;gap:3rem;flex-wrap:wrap}
.hero-text{flex:1;min-width:260px}
.hero-eyebrow{font-size:.8rem;text-transform:uppercase;letter-spacing:.12em;color:var(--c1);font-weight:600;margin-bottom:.75rem}
.hero-name{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(2.2rem,6vw,3.8rem);font-weight:800;line-height:1.05;letter-spacing:-.03em;margin-bottom:.75rem}
.hero-name em{color:var(--c1);font-style:normal}
.hero-title{font-size:1.15rem;color:var(--text-muted);margin-bottom:2rem}
.hero-ctas{display:flex;gap:.75rem;flex-wrap:wrap}
.btn-hero{padding:.75rem 1.6rem;border-radius:999px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.9rem;font-weight:500;text-decoration:none;cursor:pointer;border:none;transition:all .2s}
.btn-hero-primary{background:var(--c1);color:#fff;box-shadow:0 4px 20px rgba(0,0,0,.25)}
.btn-hero-primary:hover{transform:translateY(-2px)}
.btn-hero-ghost{background:var(--surface);color:var(--text);border:1px solid var(--border)}
.btn-hero-ghost:hover{border-color:var(--c1);color:var(--c1)}
${d.photo?`.hero-photo-wrap{position:relative}.hero-photo{width:220px;height:220px;border-radius:50%;object-fit:cover;border:4px solid var(--c1);box-shadow:0 0 0 12px rgba(0,0,0,.08),0 20px 60px rgba(0,0,0,.2)}`:''}
.section,.page{padding:5rem 2rem;max-width:900px;margin:0 auto}
.sec-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(1.6rem,4vw,2.2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:2.5rem;position:relative;display:inline-block}
.sec-title::after{content:'';position:absolute;bottom:-6px;left:0;width:40px;height:3px;background:var(--c1);border-radius:2px}
.section-inner{max-width:840px;margin:0 auto}
.about-grid{display:flex;gap:2.5rem;align-items:flex-start;flex-wrap:wrap}
.about-photo-wrap{flex-shrink:0}
.about-photo{width:140px;height:140px;border-radius:50%;object-fit:cover;border:3px solid var(--c1)}
.about-text{flex:1;min-width:240px;font-size:1.05rem;line-height:1.8}
.about-meta{margin-top:1rem;color:var(--text-muted);font-size:.9rem}
.timeline{position:relative;padding-left:2rem}
.timeline::before{content:'';position:absolute;left:6px;top:0;bottom:0;width:2px;background:var(--border)}
.timeline-item{position:relative;margin-bottom:2rem}
.timeline-dot{position:absolute;left:-1.725rem;top:.4rem;width:14px;height:14px;border-radius:50%;background:var(--c1);border:2px solid var(--bg);box-shadow:0 0 0 3px var(--c1)}
.timeline-content{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem;transition:border-color .2s}
.timeline-content:hover{border-color:var(--c1)}
.tl-header{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;margin-bottom:.5rem}
.tl-title{font-weight:600;font-size:1rem}
.tl-sub{color:var(--text-muted);font-size:.875rem;margin-top:.2rem}
.tl-period{font-size:.8rem;color:var(--c1);background:rgba(0,0,0,.12);padding:.2rem .7rem;border-radius:999px;white-space:nowrap;font-weight:500}
.tl-desc{color:var(--text-muted);font-size:.9rem;margin-top:.5rem}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.25rem}
.project-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;transition:transform .2s,border-color .2s;display:flex;flex-direction:column;gap:.6rem}
.project-card:hover{transform:translateY(-4px);border-color:var(--c1)}
.project-name{font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:1.05rem}
.project-tech{font-size:.78rem;color:var(--c1);font-weight:500}
.project-desc{color:var(--text-muted);font-size:.9rem;flex:1}
.project-links{display:flex;gap:.6rem;flex-wrap:wrap;margin-top:.5rem}
.plink{font-size:.8rem;font-weight:500;text-decoration:none;padding:.35rem .85rem;border-radius:999px;background:var(--c1);color:#fff;transition:opacity .2s}
.plink:hover{opacity:.85}
.plink-ghost{background:var(--surface);color:var(--text);border:1px solid var(--border)}
.skills-group{margin-bottom:1.75rem}
.skills-group h3{font-family:'Bricolage Grotesque',sans-serif;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:.75rem}
.skills-tags{display:flex;flex-wrap:wrap;gap:.5rem}
.skill-tag{padding:.35rem .9rem;border-radius:999px;font-size:.875rem;font-weight:500;background:rgba(0,0,0,.1);border:1px solid var(--border);transition:all .2s;cursor:default}
.skill-tag:hover{border-color:var(--c1);transform:translateY(-1px)}
.skill-soft{border-color:var(--c2);color:var(--c2)}
.skill-lang{border-color:var(--c3);color:var(--c3)}
.certs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem}
.cert-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:1.25rem;transition:all .2s}
.cert-card:hover{border-color:var(--c1);transform:translateY(-2px)}
.cert-icon{font-size:1.5rem;margin-bottom:.5rem}
.cert-name{font-weight:600;font-size:.95rem;margin-bottom:.3rem}
.cert-issuer{font-size:.8rem;color:var(--text-muted)}
.cert-date{font-size:.8rem;color:var(--c1);margin:.25rem 0}
.cert-link{font-size:.8rem;color:var(--c1);text-decoration:none;font-weight:500}
.contact-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem}
.contact-card{display:flex;align-items:center;gap:.75rem;padding:1rem 1.25rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);text-decoration:none;color:var(--text);font-size:.9rem;font-weight:500;transition:all .2s}
.contact-card:hover{border-color:var(--c1);transform:translateY(-2px)}
.contact-icon{width:36px;height:36px;border-radius:50%;background:var(--border);display:flex;align-items:center;justify-content:center;font-size:.9rem;font-weight:700;flex-shrink:0}
.contact-li-icon{background:#0a66c2;color:#fff;font-size:.75rem;font-weight:700}
.contact-gh-icon{background:#24292e;color:#fff;padding:6px}
.contact-gh-icon svg{width:18px;height:18px;fill:#fff}
.resume-btn{padding:1rem 2.5rem;background:var(--c1);color:#fff;border:none;border-radius:999px;font-family:'Plus Jakarta Sans',sans-serif;font-size:1rem;font-weight:600;cursor:pointer;box-shadow:0 4px 24px rgba(0,0,0,.2);transition:all .2s}
.resume-btn:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.25)}
footer{text-align:center;padding:2rem;color:var(--text-muted);font-size:.8rem;border-top:1px solid var(--border)}
@media(max-width:640px){.nav-links{gap:1rem}.hero{padding:3rem 1.25rem 2.5rem}.section,.page{padding:3rem 1.25rem}}
  `;

  return `<!DOCTYPE html>
<html lang="pt" data-theme="${isDark ? 'dark' : 'light'}">
<head>
<!-- PortGen by Thony Barros | CESAR School 2026.1 | Turma B | portgen-v2.0 -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${d.fullName} — Portfólio</title>
<meta name="description" content="${d.jobTitle} — ${d.about.slice(0, 120)}..." />
<style>${pCSS}</style>
</head>
<body>
<nav class="nav">
  <a class="nav-brand" href="#">${d.fullName.split(' ')[0]}<span>.</span></a>
  <ul class="nav-links">${navLinks}</ul>
  <div class="nav-right">${langSwitcher}${themeToggle}</div>
</nav>
<div class="hero">
  <div class="hero-text">
    <div class="hero-eyebrow">${t.hello}</div>
    <h1 class="hero-name">${d.fullName.split(' ').map((w,i)=>i===0?`<em>${w}</em>`:w).join(' ')}</h1>
    <p class="hero-title">${d.jobTitle}</p>
    <div class="hero-ctas">
      ${d.linkedin?`<a href="${d.linkedin}" target="_blank" class="btn-hero btn-hero-primary">LinkedIn ↗</a>`:''}
      ${d.github?`<a href="${d.github}" target="_blank" class="btn-hero btn-hero-ghost">GitHub</a>`:''}
      ${d.website?`<a href="${d.website}" target="_blank" class="btn-hero btn-hero-ghost">Website</a>`:''}
    </div>
  </div>
  ${d.photo?`<div class="hero-photo-wrap"><img src="${d.photo}" class="hero-photo" alt="${d.fullName}" /></div>`:''}
</div>
${allSections}
<footer><p>${d.fullName} · ${new Date().getFullYear()}</p></footer>
<script>
${langScript}
${multiPageScript}
${themeScript}
function openResume(){
  const blob=new Blob([${JSON.stringify(buildResumeHTML(d))}],{type:'text/html;charset=utf-8'});
  window.open(URL.createObjectURL(blob),'_blank');
}
<\/script>
</body>
</html>`;
}

// ════════════════════════════════════════════════════════
// SCROLL REVEAL (landing page sections)
// ════════════════════════════════════════════════════════
function initScrollReveal() {
  const targets = document.querySelectorAll('.feature-card, .step-card, .how-section h2, .how-section .section-sub');
  targets.forEach(el => el.classList.add('scroll-reveal'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
  }, { threshold: 0.1 });
  targets.forEach(el => obs.observe(el));
}

// ════════════════════════════════════════════════════════
// ADD data-i18n attributes to nav buttons so applyToolI18n works
// ════════════════════════════════════════════════════════
function tagNavButtons() {
  // Tag all nav buttons with data-i18n so we can update them
  document.querySelectorAll('.nav-bar .btn-ghost[onclick*="showLanding"]').forEach(b => b.setAttribute('data-i18n', 'back_start'));
  document.querySelectorAll('.nav-bar .btn-ghost[onclick*="goStep"]').forEach(b => b.setAttribute('data-i18n', 'back'));
  document.querySelectorAll('.nav-bar .btn-primary').forEach(b => b.setAttribute('data-i18n', 'next'));
  const genBtn = document.querySelector('.btn-generate');
  if (genBtn) genBtn.setAttribute('data-i18n', 'generate');
}

// ════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════
window.addEventListener('load', () => {
  initToolTheme();
  showLanding();

  // Wire logo → reload
  document.getElementById('logoLink').addEventListener('click', e => {
    e.preventDefault();
    if (document.getElementById('toolView').classList.contains('active')) {
      showLanding();
    } else {
      window.location.reload();
    }
  });

  updateIndicator();

  // Pre-populate initial cards
  addCard('educationList', educationCard);
  addCard('expList',       expCard);
  addCard('projectList',   projectCard);
  addCard('certList',      certCard);

  // Drag & drop for photo
  initDragDrop();

  // Char counter
  initCharCounter();

  // Scroll reveal
  initScrollReveal();

  // Tag nav buttons for i18n
  tagNavButtons();

  // Close location dropdown on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.location-search-wrap')) {
      const dd = document.getElementById('locationDropdown');
      if (dd) dd.classList.remove('open');
    }
    // Close lang dropdown on outside click
    if (!e.target.closest('.tool-lang-dropdown')) {
      const ld = document.getElementById('toolLangDropdown');
      if (ld) ld.classList.remove('open');
    }
  });

  // Close modal on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeTutorial();
  });
});