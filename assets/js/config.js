// ===========================================================
// 🎯 PORTFOLIO CONFIG — EDIT THIS FILE
// ===========================================================
// Fill in YOUR information below. The template reads from here
// and builds the portfolio automatically.
// ===========================================================

const CONFIG = {
  // ── LANGUAGE ──────────────────────────────────────────────
  // 'fa' = Persian (RTL) | 'en' = English (LTR) | 'both' = Toggle button
  lang: 'both',

  // ── PERSONAL INFO ─────────────────────────────────────────
  name: {
    fa: 'علی کاظمی',
    en: 'Ali Kazemi'
  },
  title: {
    fa: 'دانشمند داده و مهندس یادگیری ماشین',
    en: 'Data Scientist & ML Engineer'
  },
  bio: {
    fa: 'مهندس پزشکی حیات با تخصص در علم داده، یادگیری ماشین و توسعه وب. تحلیل داده، مدل‌سازی پیش‌بینی، ابزارهای هوشمند.',
    en: 'Biomedical engineer specialized in data science, ML, and web dev. Predictive modeling, data analysis, smart tooling.'
  },
  about: {
    fa: 'فارغ‌التحصیل مهندسی پزشکی حیات (BME) با علاقه عمیق به علم داده، یادگیری ماشین و توسعه نرم‌افزار. روی پروژه‌های متنوعی کار کرده‌ام: پیش‌بینی قیمت مسکن، تحلیل نرخ ضربان قلب، پایپ‌لاین کامل ML، شبکه‌های عصبی هایپرگراف برای تشخیص آلزایمر، و تحلیل آمادگی ایالت‌ها برای خودروهای خودران.',
    en: "Biomedical Engineering (BME) graduate passionate about data science, machine learning, and software development. Worked on housing price prediction, heart rate analysis, full ML pipelines, hypergraph neural networks for Alzheimer's diagnosis, and autonomous vehicle readiness analysis."
  },
  resumeUrl: '/resume.pdf',  // Link to download CV

  // ── STATS ─────────────────────────────────────────────────
  stats: [
    { value: '10+', label_fa: 'پروژه ML', label_en: 'ML Projects' },
    { value: 'C1',  label_fa: 'آلمانی',   label_en: 'German' },
    { value: '8',   label_fa: 'گواهینامه', label_en: 'Certificates' },
  ],

  // ── PROFILE PHOTO ─────────────────────────────────────────
  // Put your photo in assets/img/profile.jpg
  profileImg: 'assets/img/profile.jpg',

  // ── SOCIAL LINKS ──────────────────────────────────────────
  social: [
    { icon: 'uil-linkedin-alt', url: 'https://linkedin.com/in/alikazemi' },
    { icon: 'uil-github-alt',   url: 'https://github.com/Arefmtl' },
    { icon: 'uil-twitter-alt',  url: 'https://twitter.com' },
  ],

  // ── SKILLS ────────────────────────────────────────────────
  // Categories with progress bars (0–100)
  skills: [
    {
      icon: 'uil-brackets-curly',
      title_fa: 'برنامه‌نویسی و ML',
      title_en: 'Programming & ML',
      subtitle_fa: 'زبان‌ها و کتابخانه‌ها',
      subtitle_en: 'Languages & Libraries',
      items: [
        { name: 'Python',           pct: 95 },
        { name: 'Pandas / NumPy',   pct: 90 },
        { name: 'Scikit-learn',     pct: 85 },
        { name: 'PyTorch',          pct: 70 },
        { name: 'SQL',              pct: 60 },
      ]
    },
    {
      icon: 'uil-server-network',
      title_fa: 'فریم‌ورک و ابزار',
      title_en: 'Frameworks & Tools',
      subtitle_fa: 'توسعه و استقرار',
      subtitle_en: 'Dev & Deploy',
      items: [
        { name: 'Git / GitHub',       pct: 90 },
        { name: 'GitHub Actions',     pct: 75 },
        { name: 'HTML / CSS / JS',    pct: 80 },
        { name: 'Flask',              pct: 70 },
        { name: 'Tailwind CSS',       pct: 75 },
      ]
    },
    {
      icon: 'uil-chart',
      title_fa: 'تخصصی',
      title_en: 'Specialized',
      subtitle_fa: 'حوزه‌های تخصصی',
      subtitle_en: 'Domain Expertise',
      items: [
        { name: 'Classification / Regression', pct: 90 },
        { name: 'Clustering',                  pct: 85 },
        { name: 'Deep Learning',               pct: 70 },
        { name: 'NLP / GenAI',                 pct: 75 },
        { name: 'Geospatial Analysis',         pct: 70 },
      ]
    },
  ],

  // ── EDUCATION ─────────────────────────────────────────────
  education: [
    {
      title_fa: 'مهندسی پزشکی حیات',
      title_en: 'B.Eng. Biomedical Engineering',
      subtitle_fa: 'دانشگاه علوم پزشکی شیراز',
      subtitle_en: 'Shiraz University of Medical Sciences',
      date: '2019 – 2024'
    },
  ],

  // ── WORK EXPERIENCE ───────────────────────────────────────
  experience: [
    {
      title_fa: 'فریلنسر علم داده',
      title_en: 'Freelance Data Scientist',
      subtitle_fa: 'مشاريع مستقل',
      subtitle_en: 'Independent Projects',
      date: 'Jul 2025 – Present',
      align: 'right'
    },
    {
      title_fa: 'کارآموز فناوری اطلاعات',
      title_en: 'IT Intern',
      subtitle_fa: 'Digitalyst Agency، شیراز',
      subtitle_en: 'Digitalyst Agency, Shiraz',
      date: 'Jan 2024 – Jun 2025',
      align: 'left'
    },
    {
      title_fa: 'توسعه‌دهنده وردپرس',
      title_en: 'WordPress Developer',
      subtitle_fa: 'مشتریان متنوع',
      subtitle_en: 'Various Clients',
      date: '2023 – 2024',
      align: 'right'
    },
  ],

  // ── PROJECTS (PORTFOLIO CAROUSEL) ─────────────────────────
  projects: [
    {
      title_fa: 'TOOL-BOX: پایپ‌لاین ML',
      title_en: 'TOOL-BOX: ML Pipeline',
      desc_fa: 'پایپ‌لاین کامل یادگیری ماشین: بارگذاری داده → EDA → پیش‌پردازش → آموزش مدل → ارزیابی → تفسیر SHAP/LIME → خروجی. رابط کاربری با Tailwind + Chart.js.',
      desc_en: 'End-to-end ML pipeline: data → EDA → preprocessing → training → evaluation → SHAP/LIME interpretation → export. Interactive UI.',
      tech: 'Python, Flask, Tailwind, Chart.js',
      github: 'https://github.com/Arefmtl/TOOL-BOX',
      demo: '/toolbox/',  // set null to hide demo button
    },
    {
      title_fa: 'تشخیص آلزایمر با fMRI',
      title_en: "Alzheimer's Diagnosis via fMRI",
      desc_fa: 'پایپ‌لاین یادگیری عمیق: DICOM→NIfTI → استخراج ویژگی از ۴۸ ناحیه مغزی → ساخت گراف → VHGAE → GAN → HGNN برای تشخیص AD vs CN vs MCI.',
      desc_en: 'Deep learning pipeline: DICOM→NIfTI → ROI extraction (48 regions) → graphs → VHGAE → GAN → HGNN classification (AD vs CN vs MCI).',
      tech: 'PyTorch, Nilearn, NiBabel',
      github: 'https://github.com/Arefmtl/ADNI-Alzheimer-diagnosis',
      demo: null,
    },
    {
      title_fa: 'تحلیل آمادگی AV در فلوریدا',
      title_en: 'Florida AV Readiness Analysis',
      desc_fa: 'بررسی آمادگی ۳۱ شهرستان فلوریدا برای خودروهای خودران. شاخص ترکیبی (فیزیکی + دیجیتال + اجتماعی). ۹ الگوریتم خوشه‌بندی، ۶ دسته‌بند، ANOVA.',
      desc_en: 'AV readiness for 31 rural Florida counties. Composite index (Physical + Digital + Social). 9 clustering algos, 6 classifiers, ANOVA validation.',
      tech: 'GeoPandas, XGBoost, LightGBM',
      github: 'https://github.com/Arefmtl/Florida-AV-readiness-analysis',
      demo: null,
    },
    {
      title_fa: 'پیش‌بینی قیمت مسکن',
      title_en: 'Housing Price Prediction',
      desc_fa: 'مدل رگرسیون پیش‌بینی قیمت خانه بر اساس ویژگی‌های جمعیتی و جغرافیایی. EDA کامل، پیش‌پردازش، مقایسه مدل‌ها.',
      desc_en: 'Regression model for house prices. Full EDA, preprocessing, model comparison.',
      tech: 'Python, Scikit-learn, Pandas',
      github: 'https://github.com/Arefmtl/Housing-Price-Prediction',
      demo: null,
    },
    {
      title_fa: 'پیش‌بینی نرخ ضربان قلب',
      title_en: 'Heart Rate Prediction',
      desc_fa: 'کلاسیفیکیشن و رگرسیون برای پیش‌بینی ضربان قلب از سیگنال‌های فیزیولوژیک. پردازش سیگنال، استخراج ویژگی.',
      desc_en: 'Classification & regression for heart rate from physiological signals. Signal processing, feature extraction.',
      tech: 'Python, Time Series, Signal Processing',
      github: 'https://github.com/Arefmtl/HeartRate-Prediction',
      demo: null,
    },
    {
      title_fa: 'پیش‌بینی دیابت',
      title_en: 'Diabetes Prediction',
      desc_fa: 'دسته‌بندی باینری ریسک دیابت با داده‌های بالینی. مهندسی ویژگی، بالانس کلاس‌ها، ارزیابی پزشکی.',
      desc_en: 'Binary classification for diabetes risk. Feature engineering, class balancing, medical metrics.',
      tech: 'Python, Medical AI, Imbalanced Data',
      github: 'https://github.com/Arefmtl/Diabetes-Prediction',
      demo: null,
    },
    {
      title_fa: 'حافظه اشتراکی هرمس',
      title_en: 'Hermes Shared Memory',
      desc_fa: 'پل رایگان ابری بین عامل‌های هوش مصنوعی — Cloudflare Workers + KV. ارتباط عامل به عامل.',
      desc_en: 'Free cloud bridge between AI agents — Cloudflare Workers + KV. Agent-to-agent communication.',
      tech: 'Cloudflare Workers, KV, JavaScript',
      github: 'https://github.com/Arefmtl/hermes-shared-memory-',
      demo: null,
    },
    {
      title_fa: 'داشبورد ربات تلگرام',
      title_en: 'Telegram Bot Dashboard',
      desc_fa: 'ربات تلگرام + پنل مدیریت — Cloudflare Workers + Next.js. تولید محتوای هوش مصنوعی، دانلود یوتیوب/اسپاتیفای.',
      desc_en: 'Telegram bot + admin panel — Cloudflare Workers, Next.js. AI content generation, YouTube/Spotify download.',
      tech: 'Cloudflare Workers, Next.js, AI',
      github: 'https://github.com/Arefmtl/arefera_admin_panel',
      demo: null,
    },
  ],

  // ── CERTIFICATES ──────────────────────────────────────────
  // Put cert images in assets/img/certs/<filename>
  certificates: [
    {
      title: 'Generative AI Career Essentials',
      subtitle: 'Microsoft & LinkedIn — Jan 2025',
      img: 'assets/img/certs/coursera.svg',   // ← replace with your image path
      url: '#',                                // ← replace with real URL
    },
    {
      title: 'Machine Learning',
      subtitle: 'Stanford University (Coursera) — Mar 2024',
      img: 'assets/img/certs/coursera.svg',
      url: '#',
    },
    {
      title: 'Data Science in Stratified Healthcare',
      subtitle: 'U. of Edinburgh (Coursera) — Mar 2024',
      img: 'assets/img/certs/coursera.svg',
      url: '#',
    },
    {
      title: 'One Million Prompters',
      subtitle: 'Prompt Engineering for AI — Jan 2025',
      img: 'assets/img/certs/sololearn.svg',
      url: '#',
    },
    {
      title: 'Machine Learning',
      subtitle: 'Sololearn — Apr 2024',
      img: 'assets/img/certs/sololearn.svg',
      url: '#',
    },
    {
      title: 'Data Analytics with AI',
      subtitle: 'Sololearn — Jul 2025',
      img: 'assets/img/certs/sololearn.svg',
      url: '#',
    },
    {
      title: 'Python for Beginners',
      subtitle: 'Sololearn — Dec 2022',
      img: 'assets/img/certs/sololearn.svg',
      url: '#',
    },
    {
      title: 'Coding Foundations',
      subtitle: 'Sololearn — Feb 2024',
      img: 'assets/img/certs/sololearn.svg',
      url: '#',
    },
  ],

  // ── CONTACT INFO ──────────────────────────────────────────
  contact: {
    phone: '+98 902 200 88 09',
    email: 'arefkazemi42@gmail.com',
    location_fa: 'شیراز، ایران',
    location_en: 'Shiraz, Iran',
  },
};
