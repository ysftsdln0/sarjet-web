'use client';

import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Zap, 
  Smartphone, 
  Filter, 
  Clock, 
  ChevronDown,
  Play,
  Mail,
  Github,
  Twitter,
  Linkedin,
  User,
  Sun,
  Moon,
  Menu,
  X,
  Download,
  Search,
  Navigation,
  Battery,
  Star,
  ChevronRight
} from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const aboutRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const howItWorksInView = useInView(howItWorksRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'EN', name: 'English', flag: 'US' },
    { code: 'TR', name: 'Türkçe', flag: 'TR' }
  ];

  // Translation content
  const translations = {
    EN: {
      nav: {
        features: 'Features',
        howItWorks: 'How it Works',
        about: 'About',
        developer: 'Developer',
        faq: 'FAQ'
      },
      hero: {
        title: 'Find EV Charging\nStations Instantly',
        subtitle: 'Discover nearby charging stations, check real-time availability, and power up your electric vehicle journey across Istanbul.',
        downloadAndroid: 'Download for Android',
        watchDemo: 'Watch demo',
        announcement: 'New: Android early access is live'
      },
      features: {
        title: 'Powerful Features',
        subtitle: 'Everything you need for seamless EV charging',
        realTime: {
          title: 'Real-time Location',
          description: 'Find charging stations near you with precise GPS integration and live updates.'
        },
        availability: {
          title: 'Live Availability',
          description: 'Check real-time charging port availability before you arrive.'
        },
        filtering: {
          title: 'Smart Filtering',
          description: 'Filter by connector type, charging speed, and distance to find the perfect station.'
        }
      },
      howItWorks: {
        title: 'How Şarjet Works',
        subtitle: 'Three simple steps to power up your journey',
        step1: {
          title: 'Open & Search',
          description: 'Open Şarjet and let us find charging stations around your location.'
        },
        step2: {
          title: 'Choose & Navigate',
          description: 'Select the best station based on availability, distance, and your preferences.'
        },
        step3: {
          title: 'Charge & Go',
          description: 'Arrive at your chosen station and start charging with confidence.'
        }
      },
      about: {
        title: 'About Şarjet',
        description1: 'Şarjet is born from the vision of making electric vehicle adoption seamless and accessible for everyone in Turkey. Starting in Istanbul and expanding nationwide, we\'re building the future of sustainable transportation.',
        description2: 'Our mission is to eliminate range anxiety and make EV charging as simple as finding the nearest gas station. With real-time data from OpenChargeMap and intuitive design, we\'re powering the electric revolution one charge at a time.'
      },
      developer: {
        title: 'About the Developer',
        content: 'Hello! I\'m Yusuf Efe Taşdelen, a 19-year-old university student. In this era where electric vehicles are becoming widespread, I noticed that finding charging stations is still not easy enough for users. To solve this need, I developed Şarjet from scratch - a mobile application that allows electric vehicle owners to easily find nearby charging stations on a map.\n\nIn this project that I developed alone, real-time data is pulled from the OpenChargeMap API and the most suitable stations are listed according to users\' locations. Although it currently focuses on Istanbul, my goal is to make Şarjet usable throughout Turkey.\n\nAs a university student, I continue to work on taking this project I developed with limited resources even further and continuously improving the user experience. Your opinions and feedback are very valuable to me!',
        socialContact: 'Connect with me:'
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: {
          question: 'Is Şarjet free to use?',
          answer: 'Yes, Şarjet is completely free to download and use. Find charging stations without any subscription fees.'
        },
        q2: {
          question: 'Which cities are supported?',
          answer: 'Currently, we support Istanbul with comprehensive coverage. We\'re expanding to other Turkish cities soon.'
        },
        q3: {
          question: 'How accurate is the real-time data?',
          answer: 'We integrate with OpenChargeMap API to provide the most up-to-date information available for each charging station.'
        }
      },
      cta: {
        title: 'Ready to Power Your Journey?',
        subtitle: 'Join thousands of EV drivers who trust Şarjet for their charging needs.',
        downloadAndroid: 'Download for Android'
      },
      trusted: {
        title: 'Powered by and featured on'
      },
      footer: {
        copyright: '© 2025 Şarjet'
      }
    },
    TR: {
      nav: {
        features: 'Özellikler',
        howItWorks: 'Nasıl Çalışır',
        about: 'Hakkımızda',
        developer: 'Geliştirici',
        faq: 'SSS'
      },
      hero: {
        title: 'EV Şarj İstasyonlarını\nAnında Bulun',
        subtitle: 'Yakınınızdaki şarj istasyonlarını keşfedin, gerçek zamanlı müsaitlik durumunu kontrol edin ve İstanbul\'daki elektrikli araç yolculuğunuza güç katın.',
        downloadAndroid: 'Android için İndir',
        watchDemo: 'Demoyu izle',
        announcement: 'Yeni: Android erken erişim yayında'
      },
      features: {
        title: 'Güçlü Özellikler',
        subtitle: 'Sorunsuz EV şarjı için ihtiyacınız olan her şey',
        realTime: {
          title: 'Gerçek Zamanlı Konum',
          description: 'Hassas GPS entegrasyonu ve canlı güncellemelerle yakınınızdaki şarj istasyonlarını bulun.'
        },
        availability: {
          title: 'Canlı Müsaitlik',
          description: 'Varmadan önce gerçek zamanlı şarj portu müsaitlik durumunu kontrol edin.'
        },
        filtering: {
          title: 'Akıllı Filtreleme',
          description: 'Konnektör tipine, şarj hızına ve mesafeye göre filtreleyerek mükemmel istasyonu bulun.'
        }
      },
      howItWorks: {
        title: 'Şarjet Nasıl Çalışır',
        subtitle: 'Yolculuğunuza güç katmak için üç basit adım',
        step1: {
          title: 'Aç & Ara',
          description: 'Şarjet\'i açın ve konumunuzun etrafındaki şarj istasyonlarını bulmamıza izin verin.'
        },
        step2: {
          title: 'Seç & Yönlen',
          description: 'Müsaitlik, mesafe ve tercihlerinize göre en iyi istasyonu seçin.'
        },
        step3: {
          title: 'Şarj Et & Git',
          description: 'Seçtiğiniz istasyona varın ve güvenle şarj etmeye başlayın.'
        }
      },
      about: {
        title: 'Şarjet Hakkında',
        description1: 'Şarjet, Türkiye\'deki herkes için elektrikli araç kullanımını sorunsuz ve erişilebilir hale getirme vizyonundan doğmuştur. İstanbul\'da başlayıp ülke geneline yayılarak, sürdürülebilir ulaşımın geleceğini inşa ediyoruz.',
        description2: 'Misyonumuz menzil kaygısını ortadan kaldırmak ve EV şarjını en yakın benzin istasyonunu bulmak kadar basit hale getirmektir. OpenChargeMap\'ten gerçek zamanlı veri ve sezgisel tasarımla, elektrikli devrimi her seferinde bir şarjla güçlendiriyoruz.'
      },
      developer: {
        title: 'Geliştirici Hakkında',
        content: 'Merhaba! Ben Yusuf Efe Taşdelen, 19 yaşında bir üniversite öğrencisiyim. Elektrikli araçların yaygınlaştığı bu dönemde, şarj istasyonlarını bulmanın kullanıcılar için hâlâ yeterince kolay olmadığını fark ettim. Bu ihtiyacı çözmek için sıfırdan geliştirdiğim Şarjet, elektrikli araç sahiplerinin yakındaki şarj istasyonlarını harita üzerinden kolayca bulmalarını sağlayan bir mobil uygulamadır.\n\nTek başıma geliştirdiğim bu projede, OpenChargeMap API\'sinden gerçek zamanlı veriler çekiliyor ve kullanıcıların konumlarına göre en uygun istasyonlar listeleniyor. Şu an İstanbul odaklı çalışsa da, hedefim Şarjet\'i Türkiye genelinde kullanılabilir hale getirmek.\n\nÜniversite öğrencisi olarak sınırlı kaynaklarla geliştirdiğim bu projeyi daha da ileri taşımak ve kullanıcı deneyimini sürekli iyileştirmek için çalışıyorum. Görüşleriniz ve geri bildirimleriniz benim için çok değerli!',
        socialContact: 'Benimle iletişime geçin:'
      },
      faq: {
        title: 'Sık Sorulan Sorular',
        q1: {
          question: 'Şarjet kullanımı ücretsiz mi?',
          answer: 'Evet, Şarjet tamamen ücretsizdir. Hiçbir abonelik ücreti ödemeden şarj istasyonlarını bulabilirsiniz.'
        },
        q2: {
          question: 'Hangi şehirler destekleniyor?',
          answer: 'Şu anda İstanbul\'u kapsamlı bir şekilde destekliyoruz. Yakında diğer Türk şehirlerine de genişliyoruz.'
        },
        q3: {
          question: 'Gerçek zamanlı veriler ne kadar doğru?',
          answer: 'Her şarj istasyonu için mevcut en güncel bilgileri sağlamak üzere OpenChargeMap API\'si ile entegre oluyoruz.'
        }
      },
      cta: {
        title: 'Yolculuğunuza Güç Katmaya Hazır mısınız?',
        subtitle: 'Şarj ihtiyaçları için Şarjet\'e güvenen binlerce EV sürücüsüne katılın.',
        downloadAndroid: 'Android için İndir'
      },
      trusted: {
        title: 'Güç aldığımız ve yer aldığımız platformlar'
      },
      footer: {
        copyright: '© 2025 Şarjet'
      }
    }
  };

  const t = translations[selectedLanguage as keyof typeof translations];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check system theme preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} min-h-screen transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isScrolled ? (isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200') : 'bg-transparent'} backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'border-b' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-[#0055A5] to-[#00b4d8] p-2 rounded-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">Şarjet</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
                className={`font-medium hover:text-[#0055A5] transition-colors cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {t.nav.features}
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                className={`font-medium hover:text-[#0055A5] transition-colors cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {t.nav.howItWorks}
              </a>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className={`font-medium hover:text-[#0055A5] transition-colors cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {t.nav.about}
              </a>
              <a 
                href="#developer" 
                onClick={(e) => { e.preventDefault(); scrollToSection('developer'); }}
                className={`font-medium hover:text-[#0055A5] transition-colors cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {t.nav.developer}
              </a>
              <a 
                href="#faq" 
                onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
                className={`font-medium hover:text-[#0055A5] transition-colors cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {t.nav.faq}
              </a>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-[#f97316]" />
                ) : (
                  <Moon className="h-5 w-5 text-[#0055A5]" />
                )}
              </button>
              
              {/* Language Dropdown */}
              <div className="relative language-dropdown">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl border ${isDarkMode ? 'border-slate-700 hover:border-[#0055A5] bg-slate-800' : 'border-slate-300 hover:border-[#0055A5] bg-slate-50'} transition-colors`}
                >
                  <ReactCountryFlag 
                    countryCode={languages.find(lang => lang.code === selectedLanguage)?.flag || 'US'} 
                    svg 
                    style={{ width: '20px', height: '15px' }} 
                  />
                  <span className="text-sm font-medium">{selectedLanguage}</span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute right-0 mt-2 w-40 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-xl shadow-xl z-50`}
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.code);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-[#0055A5]/10 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                          selectedLanguage === language.code ? (isDarkMode ? 'bg-[#0055A5]/20' : 'bg-[#0055A5]/10') : ''
                        }`}
                      >
                        <ReactCountryFlag 
                          countryCode={language.flag} 
                          svg 
                          style={{ width: '20px', height: '15px' }} 
                        />
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-xl hover:bg-slate-700/50 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} py-4`}
            >
              <div className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
                  className="font-medium hover:text-[#0055A5] transition-colors"
                >
                  {t.nav.features}
                </a>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                  className="font-medium hover:text-[#0055A5] transition-colors"
                >
                  {t.nav.howItWorks}
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                  className="font-medium hover:text-[#0055A5] transition-colors"
                >
                  {t.nav.about}
                </a>
                <a 
                  href="#developer" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('developer'); }}
                  className="font-medium hover:text-[#0055A5] transition-colors"
                >
                  {t.nav.developer}
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
                  className="font-medium hover:text-[#0055A5] transition-colors"
                >
                  {t.nav.faq}
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(248, 250, 252, 0.95)'} 0%, ${isDarkMode ? 'rgba(30, 41, 59, 0.85)' : 'rgba(226, 232, 240, 0.85)'} 100%), url('/hero-bg-modern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient glow orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #00b4d8 0%, transparent 60%)' }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 60%)' }} />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Announcement */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mx-auto w-max mb-6 rounded-full border ${isDarkMode ? 'border-slate-700 bg-slate-900/60' : 'border-slate-200 bg-white/70'} backdrop-blur px-4 py-2 text-sm flex items-center gap-2`}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[#00b4d8]" />
            <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{t.hero.announcement}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#0055A5] via-[#00b4d8] to-[#f97316] bg-clip-text text-transparent">
                  {t.hero.title.split('\n')[0]}
                </span>
                <br />
                <span className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {t.hero.title.split('\n')[1]}
                </span>
              </h1>
              <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  className="group bg-gradient-to-r from-[#0055A5] to-[#00b4d8] hover:from-[#00b4d8] hover:to-[#f97316] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>{t.hero.downloadAndroid}</span>
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <button
                  className={`${isDarkMode ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10' : 'bg-slate-900 text-white hover:bg-slate-800'} px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all inline-flex items-center gap-3 justify-center`}
                  onClick={() => scrollToSection('how-it-works')}
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6" />
                  {t.hero.watchDemo}
                </button>
              </div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className={`w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-[2.5rem] ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-100/80'} backdrop-blur border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} flex items-center justify-center shadow-2xl`}>
                <div className={`w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-[#0055A5]/20 to-[#00b4d8]/20 flex items-center justify-center ${isDarkMode ? 'shadow-2xl shadow-[#0055A5]/20' : 'shadow-2xl shadow-slate-500/20'}`}>
                  <Zap className="h-20 w-20 sm:h-28 sm:w-28 text-[#00b4d8]" />
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 bg-[#f97316] p-3 sm:p-4 rounded-2xl shadow-lg"
              >
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 bg-[#0055A5] p-3 sm:p-4 rounded-2xl shadow-lg"
              >
                <Battery className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('features')}
          >
            <ChevronDown className="h-8 w-8 text-[#0055A5]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By / Logo wall */}
      <section className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} py-8 sm:py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-center text-xs sm:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-4 sm:mb-6`}>{t.trusted.title}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-4 sm:gap-6 opacity-80">
            {[
              { src: '/vercel.svg', alt: 'Vercel' },
              { src: '/next.svg', alt: 'Next.js' },
              { src: '/globe.svg', alt: 'Open Data' },
              { src: '/window.svg', alt: 'Web App' },
              { src: '/appicon.png', alt: 'Şarjet App' },
              { src: '/file.svg', alt: 'Docs' }
            ].map((logo, i) => (
              <div key={i} className={`flex justify-center items-center py-2 sm:py-3 ${isDarkMode ? 'brightness-150' : 'brightness-100'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="h-6 sm:h-8 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features"
        ref={featuresRef}
        className={`py-16 sm:py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto`}>
              {t.features.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: MapPin,
                title: t.features.realTime.title,
                description: t.features.realTime.description,
                color: 'from-[#0055A5] to-[#00b4d8]'
              },
              {
                icon: Clock,
                title: t.features.availability.title,
                description: t.features.availability.description,
                color: 'from-[#00b4d8] to-[#f97316]'
              },
              {
                icon: Filter,
                title: t.features.filtering.title,
                description: t.features.filtering.description,
                color: 'from-[#f97316] to-[#0055A5]'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`group ${isDarkMode ? 'bg-slate-900 hover:bg-slate-900/80' : 'bg-white hover:bg-slate-50'} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border ${isDarkMode ? 'border-slate-700 hover:border-[#0055A5]' : 'border-slate-200 hover:border-[#0055A5]'}`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm sm:text-base`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        id="how-it-works"
        ref={howItWorksRef}
        className={`py-16 sm:py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.howItWorks.title}
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto`}>
              {t.howItWorks.subtitle}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0055A5] to-[#f97316] rounded-full"></div>
            
            <motion.div
              variants={stagger}
              initial="initial"
              animate={howItWorksInView ? "animate" : "initial"}
              className="space-y-12 sm:space-y-16"
            >
              {[
                {
                  number: '01',
                  icon: Search,
                  title: t.howItWorks.step1.title,
                  description: t.howItWorks.step1.description,
                  side: 'left'
                },
                {
                  number: '02',
                  icon: Navigation,
                  title: t.howItWorks.step2.title,
                  description: t.howItWorks.step2.description,
                  side: 'right'
                },
                {
                  number: '03',
                  icon: Zap,
                  title: t.howItWorks.step3.title,
                  description: t.howItWorks.step3.description,
                  side: 'left'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center text-center lg:text-left ${step.side === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''}`}
                >
                  <div className={`lg:w-1/2 ${step.side === 'right' ? 'lg:pl-8 xl:pl-16' : 'lg:pr-8 xl:pr-16'} mb-8 lg:mb-0`}>
                    <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} p-6 sm:p-8 rounded-3xl border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4`}>
                          {step.number}
                        </div>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00b4d8] to-[#f97316] rounded-2xl flex items-center justify-center`}>
                          <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">{step.title}</h3>
                      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm sm:text-base`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className={`w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#0055A5] to-[#f97316] rounded-full border-4 ${isDarkMode ? 'border-slate-900' : 'border-white'}`}></div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        ref={aboutRef}
        className={`py-16 sm:py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className={`text-base sm:text-lg lg:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                {t.about.description1}
              </p>
              <p className={`text-base sm:text-lg lg:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                {t.about.description2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Section */}
      <section 
        id="developer"
        className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                {t.developer.title}
              </h2>
              
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} p-8 md:p-12 rounded-3xl border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-8 whitespace-pre-line text-left`}>
                  {t.developer.content}
                </div>
                
                <div className={`border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-300'} pt-8`}>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-4 font-medium`}>
                    {t.developer.socialContact}
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a href="mailto:yusufefe@sarjet.com" className="group">
                      <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700 hover:bg-[#0055A5]' : 'bg-slate-200 hover:bg-[#0055A5]'} transition-colors`}>
                        <Mail className="h-6 w-6 group-hover:text-white" />
                      </div>
                    </a>
                    <a href="https://github.com/ysftsdln0" target="_blank" rel="noopener noreferrer" className="group">
                      <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700 hover:bg-[#0055A5]' : 'bg-slate-200 hover:bg-[#0055A5]'} transition-colors`}>
                        <Github className="h-6 w-6 group-hover:text-white" />
                      </div>
                    </a>
                    <a href="#" className="group">
                      <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700 hover:bg-[#0055A5]' : 'bg-slate-200 hover:bg-[#0055A5]'} transition-colors`}>
                        <Linkedin className="h-6 w-6 group-hover:text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq"
        className={`py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.faq.title}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: t.faq.q1.question, a: t.faq.q1.answer },
              { q: t.faq.q2.question, a: t.faq.q2.answer },
              { q: t.faq.q3.question, a: t.faq.q3.answer }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} p-6 md:p-8 rounded-2xl border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} hover:border-[#0055A5] transition-colors`}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0055A5] to-[#f97316] bg-clip-text text-transparent">
              {t.cta.title}
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-10 max-w-2xl mx-auto`}>
              {t.cta.subtitle}
            </p>
            
            <motion.button
              className="group bg-gradient-to-r from-[#0055A5] to-[#00b4d8] hover:from-[#00b4d8] hover:to-[#f97316] text-white px-12 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-6 w-6" />
              <span>{t.cta.downloadAndroid}</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'} border-t py-16 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-[#0055A5] to-[#00b4d8] p-2 rounded-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">Şarjet</span>
              </div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-md leading-relaxed`}>
                {selectedLanguage === 'EN' 
                  ? 'Making electric vehicle charging simple and accessible for everyone. Power your journey with confidence.'
                  : 'Elektrikli araç şarjını herkes için basit ve erişilebilir hale getiriyoruz. Yolculuğunuza güvenle güç katın.'
                }
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {selectedLanguage === 'EN' ? 'Contact' : 'İletişim'}
              </h4>
              <div className="space-y-3">
                <a href="mailto:contact@sarjet.com" className={`${isDarkMode ? 'text-slate-300 hover:text-[#00b4d8]' : 'text-slate-600 hover:text-[#0055A5]'} transition-colors flex items-center`}>
                  <Mail className="h-4 w-4 mr-2" />
                  contact@sarjet.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {selectedLanguage === 'EN' ? 'Follow Us' : 'Bizi Takip Edin'}
              </h4>
              <div className="flex space-x-4">
                <a href="https://github.com/ysftsdln0/sarjet-web" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-slate-400 hover:text-[#00b4d8]' : 'text-slate-500 hover:text-[#0055A5]'} transition-colors`}>
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-[#00b4d8]' : 'text-slate-500 hover:text-[#0055A5]'} transition-colors`}>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-[#00b4d8]' : 'text-slate-500 hover:text-[#0055A5]'} transition-colors`}>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} text-center ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} transition-colors duration-300`}>
            <p>{t.footer.copyright}</p>
            <p className="mt-2 text-sm">
              {selectedLanguage === 'EN' 
                ? 'Made with ❤️ for a sustainable future'
                : 'Sürdürülebilir bir gelecek için ❤️ ile yapıldı'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
