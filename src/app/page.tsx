'use client';

<<<<<<< HEAD
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
=======
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
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
  ChevronRight,
  Shield,
  Globe,
<<<<<<< HEAD
  Users,
  BarChart3,
  Sparkles,
  Award,
  TrendingUp,
  Target,
  Heart,
  CheckCircle,
  Loader2
=======
  Sparkles,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  MapIcon,
  Gauge
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
} from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false); // Changed to false for development
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
=======
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3

  // Refs for scroll animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const howItWorksInView = useInView(howItWorksRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });

<<<<<<< HEAD
  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Initialize app on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for reduced motion preference
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);
      
      // Simulate loading with realistic timing
      const timer = setTimeout(() => setIsLoading(false), 1500);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        clearTimeout(timer);
      };
    } else {
      // For SSR, just set loading to false after a short delay
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array - runs only once
=======
  // Scroll progress
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3

  // Handle scroll for sticky header
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
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
        badge: 'Revolutionary EV Charging Solution',
        title: 'Find EV Charging\nStations Instantly',
<<<<<<< HEAD
        subtitle: 'Discover nearby charging stations, check real-time availability, and power up your electric vehicle journey across Istanbul.',
        downloadAndroid: 'Download for Android',
        watchDemo: 'Watch demo',
        announcement: 'New: Android early access is live',
        badge: 'Free & Open Source',
        stats: {
          users: '10K+',
          usersLabel: 'Active Users',
          stations: '500+',
          stationsLabel: 'Charging Stations',
          coverage: '99%',
          coverageLabel: 'Istanbul Coverage'
=======
        subtitle: 'Discover nearby charging stations, check real-time availability, and power up your electric vehicle journey across Istanbul with confidence.',
        downloadAndroid: 'Download for Android',
        watchDemo: 'Watch Demo',
        stats: {
          stations: '500+ Stations',
          users: '10K+ Users',
          cities: '1 City'
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        }
      },
      features: {
        title: 'Powerful Features',
        subtitle: 'Everything you need for seamless EV charging experience',
        realTime: {
          title: 'Real-time Location',
          description: 'Find charging stations near you with precise GPS integration and live updates that keep you informed.'
        },
        availability: {
          title: 'Live Availability',
          description: 'Check real-time charging port availability before you arrive, saving time and reducing frustration.'
        },
        filtering: {
          title: 'Smart Filtering',
<<<<<<< HEAD
          description: 'Filter by connector type, charging speed, and distance to find the perfect station.'
        },
        offline: {
          title: 'Offline Maps',
          description: 'Access station data even without internet connection for uninterrupted journeys.'
        },
        navigation: {
          title: 'Turn-by-turn Navigation',
          description: 'Integrated GPS navigation to guide you directly to your chosen charging station.'
        },
        notifications: {
          title: 'Smart Notifications',
          description: 'Get notified about charging completion, new stations, and important updates.'
=======
          description: 'Filter by connector type, charging speed, and distance to find the perfect station for your needs.'
        },
        navigation: {
          title: 'Turn-by-Turn Navigation',
          description: 'Get precise directions to your chosen charging station with integrated navigation support.'
        },
        notifications: {
          title: 'Smart Notifications',
          description: 'Receive alerts about charging status, new stations, and important updates in real-time.'
        },
        offline: {
          title: 'Offline Access',
          description: 'Access previously viewed stations and basic information even when you\'re offline.'
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        }
      },
      stats: {
        title: 'Trusted by EV Drivers Across Istanbul',
        subtitle: 'Join thousands of satisfied users who have made charging simple',
        sessions: '50K+',
        sessionsLabel: 'Charging Sessions',
        saved: '2.5M',
        savedLabel: 'Minutes Saved',
        rating: '4.8/5',
        ratingLabel: 'App Store Rating',
        carbon: '1.2K tons',
        carbonLabel: 'CO2 Saved'
      },
      howItWorks: {
        title: 'How Şarjet Works',
        subtitle: 'Three simple steps to power up your journey',
        step1: {
          title: 'Open & Search',
          description: 'Open Şarjet and let us find charging stations around your location with advanced filtering options.'
        },
        step2: {
          title: 'Choose & Navigate',
          description: 'Select the best station based on availability, distance, and your preferences with detailed information.'
        },
        step3: {
          title: 'Charge & Go',
          description: 'Arrive at your chosen station and start charging with confidence, knowing all the details beforehand.'
        }
      },
      stats: {
        title: 'Trusted by EV Drivers',
        subtitle: 'Join thousands of satisfied users who rely on Şarjet daily',
        downloads: '10,000+',
        downloadsLabel: 'App Downloads',
        stations: '500+',
        stationsLabel: 'Charging Stations',
        rating: '4.8',
        ratingLabel: 'User Rating',
        uptime: '99.9%',
        uptimeLabel: 'Service Uptime'
      },
      about: {
        title: 'About Şarjet',
<<<<<<< HEAD
        subtitle: 'Building the future of electric mobility in Turkey',
        description1: 'Şarjet is born from the vision of making electric vehicle adoption seamless and accessible for everyone in Turkey. Starting in Istanbul and expanding nationwide, we\'re building the future of sustainable transportation.',
        description2: 'Our mission is to eliminate range anxiety and make EV charging as simple as finding the nearest gas station. With real-time data from OpenChargeMap and intuitive design, we\'re powering the electric revolution one charge at a time.',
        values: [
          {
            title: 'Accessibility',
            description: 'Making EV charging accessible to everyone, everywhere.'
          },
          {
            title: 'Innovation',
            description: 'Leveraging cutting-edge technology for better user experience.'
          },
          {
            title: 'Sustainability',
            description: 'Supporting the transition to clean, sustainable transportation.'
          }
        ]
      },
      developer: {
        title: 'About the Developer',
        content: 'Hello! I\'m Yusuf Efe Taşdelen, a 19-year-old university student. In this era where electric vehicles are becoming widespread, I noticed that finding charging stations is still not easy enough for users. To solve this need, I developed Şarjet from scratch - a mobile application that allows electric vehicle owners to easily find nearby charging stations on a map.\n\nIn this project that I developed alone, real-time data is pulled from the OpenChargeMap API and the most suitable stations are listed according to users\' locations. Although it currently focuses on Istanbul, my goal is to make Şarjet usable throughout Turkey.\n\nAs a university student, I continue to work on taking this project I developed with limited resources even further and continuously improving the user experience. Your opinions and feedback are very valuable to me!',
        socialContact: 'Connect with me:',
        achievements: [
          'Solo Developer',
          '10K+ Downloads',
          'Open Source Contributor',
          'University Student'
        ]
=======
        subtitle: 'Building the future of electric mobility',
        description1: 'Şarjet is born from the vision of making electric vehicle adoption seamless and accessible for everyone in Turkey. Starting in Istanbul and expanding nationwide, we\'re building the future of sustainable transportation.',
        description2: 'Our mission is to eliminate range anxiety and make EV charging as simple as finding the nearest gas station. With real-time data from OpenChargeMap and intuitive design, we\'re powering the electric revolution one charge at a time.',
        values: {
          innovation: {
            title: 'Innovation',
            description: 'Cutting-edge technology for seamless EV charging experience'
          },
          sustainability: {
            title: 'Sustainability',
            description: 'Supporting the transition to clean, electric transportation'
          },
          accessibility: {
            title: 'Accessibility',
            description: 'Making EV charging information available to everyone'
          }
        }
      },
      developer: {
        title: 'Meet the Developer',
        name: 'Yusuf Efe Taşdelen',
        role: 'Founder & Developer',
        content: 'Hello! I\'m Yusuf Efe Taşdelen, a 19-year-old university student passionate about sustainable technology. In this era where electric vehicles are becoming widespread, I noticed that finding charging stations is still not easy enough for users.\n\nTo solve this need, I developed Şarjet from scratch - a mobile application that allows electric vehicle owners to easily find nearby charging stations on a map. In this project that I developed alone, real-time data is pulled from the OpenChargeMap API and the most suitable stations are listed according to users\' locations.\n\nAlthough it currently focuses on Istanbul, my goal is to make Şarjet usable throughout Turkey. As a university student, I continue to work on taking this project I developed with limited resources even further and continuously improving the user experience.',
        socialContact: 'Connect with me:',
        achievements: {
          title: 'Achievements',
          items: [
            '10,000+ app downloads',
            'Featured in tech blogs',
            'Growing user community',
            'Continuous development'
          ]
        }
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about Şarjet',
        q1: {
          question: 'Is Şarjet free to use?',
          answer: 'Yes, Şarjet is completely free to download and use. Find charging stations without any subscription fees or hidden costs.'
        },
        q2: {
          question: 'Which cities are supported?',
<<<<<<< HEAD
          answer: 'Currently, we support Istanbul with comprehensive coverage. We\'re expanding to other Turkish cities soon, starting with Ankara and Izmir.'
        },
        q3: {
          question: 'How accurate is the real-time data?',
          answer: 'We integrate with OpenChargeMap API and verified charging networks to provide the most up-to-date information available for each charging station.'
        },
        q4: {
          question: 'Can I use the app offline?',
          answer: 'Yes, Şarjet caches station data for offline use, so you can access basic station information even without an internet connection.'
        },
        q5: {
          question: 'How do I report incorrect station information?',
          answer: 'You can report issues directly through the app or contact us via email. We review and update station information regularly.'
=======
          answer: 'Currently, we support Istanbul with comprehensive coverage of all major charging stations. We\'re actively working on expanding to other Turkish cities.'
        },
        q3: {
          question: 'How accurate is the real-time data?',
          answer: 'We integrate with OpenChargeMap API and other reliable sources to provide the most up-to-date information available for each charging station.'
        },
        q4: {
          question: 'Can I use the app offline?',
          answer: 'Yes, you can access previously viewed stations and basic information even when you\'re offline, though real-time updates require an internet connection.'
        },
        q5: {
          question: 'How often is the data updated?',
          answer: 'Our data is updated in real-time whenever possible, with automatic syncing every few minutes to ensure you have the latest information.'
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        }
      },
      cta: {
        title: 'Ready to Power Your Journey?',
        subtitle: 'Join thousands of EV drivers who trust Şarjet for their charging needs.',
        downloadAndroid: 'Download for Android',
        features: [
          'Real-time station availability',
          'Turn-by-turn navigation',
          'Smart filtering options',
          'Offline access capability'
        ]
      },
      trusted: {
        title: 'Powered by and featured on'
      },
      footer: {
        copyright: '© 2025 Şarjet',
<<<<<<< HEAD
        links: {
          product: 'Product',
          features: 'Features',
          pricing: 'Pricing',
          support: 'Support',
          company: 'Company',
          aboutUs: 'About Us',
          careers: 'Careers',
=======
        description: 'Making electric vehicle charging simple and accessible for everyone.',
        links: {
          product: 'Product',
          features: 'Features',
          howItWorks: 'How it Works',
          support: 'Support',
          faq: 'FAQ',
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
          contact: 'Contact',
          legal: 'Legal',
          privacy: 'Privacy Policy',
          terms: 'Terms of Service'
        }
      }
    },
    // Turkish translations with same structure
    TR: {
      nav: {
        features: 'Özellikler',
        howItWorks: 'Nasıl Çalışır',
        about: 'Hakkımızda',
        developer: 'Geliştirici',
        faq: 'SSS'
      },
      hero: {
        badge: 'Devrimci EV Şarj Çözümü',
        title: 'EV Şarj İstasyonlarını\nAnında Bulun',
<<<<<<< HEAD
        subtitle: 'Yakınınızdaki şarj istasyonlarını keşfedin, gerçek zamanlı müsaitlik durumunu kontrol edin ve İstanbul\'daki elektrikli araç yolculuğunuza güç katın.',
        downloadAndroid: 'Android için İndir',
        watchDemo: 'Demoyu izle',
        announcement: 'Yeni: Android erken erişim yayında',
        badge: 'Ücretsiz ve Açık Kaynak',
        stats: {
          users: '10B+',
          usersLabel: 'Aktif Kullanıcı',
          stations: '500+',
          stationsLabel: 'Şarj İstasyonu',
          coverage: '99%',
          coverageLabel: 'İstanbul Kapsamı'
=======
        subtitle: 'Yakınınızdaki şarj istasyonlarını keşfedin, gerçek zamanlı müsaitlik durumunu kontrol edin ve İstanbul\'daki elektrikli araç yolculuğunuza güvenle güç katın.',
        downloadAndroid: 'Android için İndir',
        watchDemo: 'Demo İzle',
        stats: {
          stations: '500+ İstasyon',
          users: '10K+ Kullanıcı',
          cities: '1 Şehir'
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        }
      },
      features: {
        title: 'Güçlü Özellikler',
        subtitle: 'Sorunsuz EV şarj deneyimi için ihtiyacınız olan her şey',
        realTime: {
          title: 'Gerçek Zamanlı Konum',
          description: 'Hassas GPS entegrasyonu ve sizi bilgilendiren canlı güncellemelerle yakınınızdaki şarj istasyonlarını bulun.'
        },
        availability: {
          title: 'Canlı Müsaitlik',
          description: 'Varmadan önce gerçek zamanlı şarj portu müsaitlik durumunu kontrol ederek zaman kazanın ve hayal kırıklığını azaltın.'
        },
        filtering: {
          title: 'Akıllı Filtreleme',
<<<<<<< HEAD
          description: 'Konnektör tipine, şarj hızına ve mesafeye göre filtreleyerek mükemmel istasyonu bulun.'
        },
        offline: {
          title: 'Çevrimdışı Haritalar',
          description: 'İnternet bağlantısı olmadan bile istasyon verilerine erişin.'
        },
        navigation: {
          title: 'Adım Adım Navigasyon',
          description: 'Seçtiğiniz şarj istasyonuna doğrudan yönlendiren entegre GPS navigasyonu.'
        },
        notifications: {
          title: 'Akıllı Bildirimler',
          description: 'Şarj tamamlanması, yeni istasyonlar ve önemli güncellemeler hakkında bildirim alın.'
=======
          description: 'Konnektör tipine, şarj hızına ve mesafeye göre filtreleyerek ihtiyaçlarınıza mükemmel istasyonu bulun.'
        },
        navigation: {
          title: 'Adım Adım Navigasyon',
          description: 'Entegre navigasyon desteği ile seçtiğiniz şarj istasyonuna hassas yol tarifi alın.'
        },
        notifications: {
          title: 'Akıllı Bildirimler',
          description: 'Şarj durumu, yeni istasyonlar ve önemli güncellemeler hakkında gerçek zamanlı uyarılar alın.'
        },
        offline: {
          title: 'Çevrimdışı Erişim',
          description: 'Çevrimdışı olduğunuzda bile daha önce görüntülenen istasyonlara ve temel bilgilere erişin.'
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        }
      },
      stats: {
        title: 'İstanbul Genelindeki EV Sürücüleri Tarafından Güvenilir',
        subtitle: 'Şarj etmeyi basit hale getiren binlerce memnun kullanıcıya katılın',
        sessions: '50B+',
        sessionsLabel: 'Şarj Oturumu',
        saved: '2.5M',
        savedLabel: 'Dakika Tasarruf',
        rating: '4.8/5',
        ratingLabel: 'Uygulama Puanı',
        carbon: '1.2K ton',
        carbonLabel: 'CO2 Tasarrufu'
      },
      howItWorks: {
        title: 'Şarjet Nasıl Çalışır',
        subtitle: 'Yolculuğunuza güç katmak için üç basit adım',
        step1: {
          title: 'Aç & Ara',
          description: 'Şarjet\'i açın ve gelişmiş filtreleme seçenekleriyle konumunuzun etrafındaki şarj istasyonlarını bulmamıza izin verin.'
        },
        step2: {
          title: 'Seç & Yönlen',
          description: 'Detaylı bilgilerle müsaitlik, mesafe ve tercihlerinize göre en iyi istasyonu seçin.'
        },
        step3: {
          title: 'Şarj Et & Git',
          description: 'Tüm detayları önceden bilerek seçtiğiniz istasyona varın ve güvenle şarj etmeye başlayın.'
        }
      },
      stats: {
        title: 'EV Sürücülerinin Güvendiği',
        subtitle: 'Günlük olarak Şarjet\'e güvenen binlerce memnun kullanıcıya katılın',
        downloads: '10.000+',
        downloadsLabel: 'Uygulama İndirmesi',
        stations: '500+',
        stationsLabel: 'Şarj İstasyonu',
        rating: '4,8',
        ratingLabel: 'Kullanıcı Puanı',
        uptime: '%99,9',
        uptimeLabel: 'Hizmet Çalışma Süresi'
      },
      about: {
        title: 'Şarjet Hakkında',
<<<<<<< HEAD
        subtitle: 'Türkiye\'de elektrikli mobilite geleceğini inşa ediyoruz',
        description1: 'Şarjet, Türkiye\'deki herkes için elektrikli araç kullanımını sorunsuz ve erişilebilir hale getirme vizyonundan doğmuştur. İstanbul\'da başlayıp ülke geneline yayılarak, sürdürülebilir ulaşımın geleceğini inşa ediyoruz.',
        description2: 'Misyonumuz menzil kaygısını ortadan kaldırmak ve EV şarjını en yakın benzin istasyonunu bulmak kadar basit hale getirmektir. OpenChargeMap\'ten gerçek zamanlı veri ve sezgisel tasarımla, elektrikli devrimi her seferinde bir şarjla güçlendiriyoruz.',
        values: [
          {
            title: 'Erişilebilirlik',
            description: 'EV şarjını herkese, her yerde erişilebilir hale getirmek.'
          },
          {
            title: 'İnovasyon',
            description: 'Daha iyi kullanıcı deneyimi için son teknoloji kullanmak.'
          },
          {
            title: 'Sürdürülebilirlik',
            description: 'Temiz, sürdürülebilir ulaşıma geçişi desteklemek.'
          }
        ]
      },
      developer: {
        title: 'Geliştirici Hakkında',
        content: 'Merhaba! Ben Yusuf Efe Taşdelen, 19 yaşında bir üniversite öğrencisiyim. Elektrikli araçların yaygınlaştığı bu dönemde, şarj istasyonlarını bulmanın kullanıcılar için hâlâ yeterince kolay olmadığını fark ettim. Bu ihtiyacı çözmek için sıfırdan geliştirdiğim Şarjet, elektrikli araç sahiplerinin yakındaki şarj istasyonlarını harita üzerinden kolayca bulmalarını sağlayan bir mobil uygulamadır.\n\nTek başıma geliştirdiğim bu projede, OpenChargeMap API\'sinden gerçek zamanlı veriler çekiliyor ve kullanıcıların konumlarına göre en uygun istasyonlar listeleniyor. Şu an İstanbul odaklı çalışsa da, hedefim Şarjet\'i Türkiye genelinde kullanılabilir hale getirmek.\n\nÜniversite öğrencisi olarak sınırlı kaynaklarla geliştirdiğim bu projeyi daha da ileri taşımak ve kullanıcı deneyimini sürekli iyileştirmek için çalışıyorum. Görüşleriniz ve geri bildirimleriniz benim için çok değerli!',
        socialContact: 'Benimle iletişime geçin:',
        achievements: [
          'Solo Geliştirici',
          '10B+ İndirme',
          'Açık Kaynak Katkıcı',
          'Üniversite Öğrencisi'
        ]
=======
        subtitle: 'Elektrikli mobilite geleceğini inşa ediyoruz',
        description1: 'Şarjet, Türkiye\'deki herkes için elektrikli araç kullanımını sorunsuz ve erişilebilir hale getirme vizyonundan doğmuştur. İstanbul\'da başlayıp ülke geneline yayılarak, sürdürülebilir ulaşımın geleceğini inşa ediyoruz.',
        description2: 'Misyonumuz menzil kaygısını ortadan kaldırmak ve EV şarjını en yakın benzin istasyonunu bulmak kadar basit hale getirmektir. OpenChargeMap\'ten gerçek zamanlı veri ve sezgisel tasarımla, elektrikli devrimi her seferinde bir şarjla güçlendiriyoruz.',
        values: {
          innovation: {
            title: 'İnovasyon',
            description: 'Sorunsuz EV şarj deneyimi için son teknoloji'
          },
          sustainability: {
            title: 'Sürdürülebilirlik',
            description: 'Temiz, elektrikli ulaşıma geçişi destekleme'
          },
          accessibility: {
            title: 'Erişilebilirlik',
            description: 'EV şarj bilgilerini herkese ulaştırma'
          }
        }
      },
      developer: {
        title: 'Geliştiriciyle Tanışın',
        name: 'Yusuf Efe Taşdelen',
        role: 'Kurucu & Geliştirici',
        content: 'Merhaba! Ben Yusuf Efe Taşdelen, sürdürülebilir teknolojiye tutkulu 19 yaşında bir üniversite öğrencisiyim. Elektrikli araçların yaygınlaştığı bu dönemde, şarj istasyonlarını bulmanın kullanıcılar için hâlâ yeterince kolay olmadığını fark ettim.\n\nBu ihtiyacı çözmek için sıfırdan geliştirdiğim Şarjet, elektrikli araç sahiplerinin yakındaki şarj istasyonlarını harita üzerinden kolayca bulmalarını sağlayan bir mobil uygulamadır. Tek başıma geliştirdiğim bu projede, OpenChargeMap API\'sinden gerçek zamanlı veriler çekiliyor ve kullanıcıların konumlarına göre en uygun istasyonlar listeleniyor.\n\nŞu an İstanbul odaklı çalışsa da, hedefim Şarjet\'i Türkiye genelinde kullanılabilir hale getirmek. Üniversite öğrencisi olarak sınırlı kaynaklarla geliştirdiğim bu projeyi daha da ileri taşımak ve kullanıcı deneyimini sürekli iyileştirmek için çalışıyorum.',
        socialContact: 'Benimle iletişime geçin:',
        achievements: {
          title: 'Başarılar',
          items: [
            '10.000+ uygulama indirmesi',
            'Teknoloji bloglarında öne çıkarıldı',
            'Büyüyen kullanıcı topluluğu',
            'Sürekli geliştirme'
          ]
        }
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      },
      faq: {
        title: 'Sık Sorulan Sorular',
        subtitle: 'Şarjet hakkında bilmeniz gereken her şey',
        q1: {
          question: 'Şarjet kullanımı ücretsiz mi?',
          answer: 'Evet, Şarjet tamamen ücretsizdir. Hiçbir abonelik ücreti veya gizli maliyet olmadan şarj istasyonlarını bulabilirsiniz.'
        },
        q2: {
          question: 'Hangi şehirler destekleniyor?',
<<<<<<< HEAD
          answer: 'Şu anda İstanbul\'u kapsamlı bir şekilde destekliyoruz. Ankara ve İzmir\'le başlayarak diğer Türk şehirlerine de yakında genişliyoruz.'
        },
        q3: {
          question: 'Gerçek zamanlı veriler ne kadar doğru?',
          answer: 'Her şarj istasyonu için mevcut en güncel bilgileri sağlamak üzere OpenChargeMap API\'si ve doğrulanmış şarj ağları ile entegre oluyoruz.'
        },
        q4: {
          question: 'Uygulamayı çevrimdışı kullanabilir miyim?',
          answer: 'Evet, Şarjet çevrimdışı kullanım için istasyon verilerini önbelleğe alır, böylece internet bağlantısı olmadan da temel istasyon bilgilerine erişebilirsiniz.'
        },
        q5: {
          question: 'Yanlış istasyon bilgisini nasıl rapor ederim?',
          answer: 'Sorunları doğrudan uygulama üzerinden rapor edebilir veya e-posta ile bize ulaşabilirsiniz. İstasyon bilgilerini düzenli olarak gözden geçirir ve güncelleriz.'
=======
          answer: 'Şu anda İstanbul\'u tüm büyük şarj istasyonlarının kapsamlı bir şekilde destekliyoruz. Diğer Türk şehirlerine genişlemek için aktif olarak çalışıyoruz.'
        },
        q3: {
          question: 'Gerçek zamanlı veriler ne kadar doğru?',
          answer: 'Her şarj istasyonu için mevcut en güncel bilgileri sağlamak üzere OpenChargeMap API\'si ve diğer güvenilir kaynaklarla entegre oluyoruz.'
        },
        q4: {
          question: 'Uygulamayı çevrimdışı kullanabilir miyim?',
          answer: 'Evet, çevrimdışı olduğunuzda bile daha önce görüntülenen istasyonlara ve temel bilgilere erişebilirsiniz, ancak gerçek zamanlı güncellemeler internet bağlantısı gerektirir.'
        },
        q5: {
          question: 'Veriler ne sıklıkla güncelleniyor?',
          answer: 'Verilerimiz mümkün olduğunca gerçek zamanlı güncellenir, en son bilgilere sahip olmanızı sağlamak için birkaç dakikada bir otomatik senkronizasyon yapılır.'
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        }
      },
      cta: {
        title: 'Yolculuğunuza Güç Katmaya Hazır mısınız?',
        subtitle: 'Şarj ihtiyaçları için Şarjet\'e güvenen binlerce EV sürücüsüne katılın.',
        downloadAndroid: 'Android için İndir',
        features: [
          'Gerçek zamanlı istasyon müsaitliği',
          'Adım adım navigasyon',
          'Akıllı filtreleme seçenekleri',
          'Çevrimdışı erişim özelliği'
        ]
      },
      trusted: {
        title: 'Güç aldığımız ve yer aldığımız platformlar'
      },
      footer: {
        copyright: '© 2025 Şarjet',
<<<<<<< HEAD
        links: {
          product: 'Ürün',
          features: 'Özellikler',
          pricing: 'Fiyatlandırma',
          support: 'Destek',
          company: 'Şirket',
          aboutUs: 'Hakkımızda',
          careers: 'Kariyer',
=======
        description: 'Elektrikli araç şarjını herkes için basit ve erişilebilir hale getiriyoruz.',
        links: {
          product: 'Ürün',
          features: 'Özellikler',
          howItWorks: 'Nasıl Çalışır',
          support: 'Destek',
          faq: 'SSS',
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
          contact: 'İletişim',
          legal: 'Yasal',
          privacy: 'Gizlilik Politikası',
          terms: 'Hizmet Şartları'
        }
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
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 60 },
    animate: { opacity: 1, y: 0 },
<<<<<<< HEAD
    transition: { duration: prefersReducedMotion ? 0.2 : 0.6 }
=======
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.1
      }
    }
  };

<<<<<<< HEAD
  const shimmer = {
    initial: { backgroundPosition: '-200% 0' },
    animate: prefersReducedMotion ? {} : { 
      backgroundPosition: '200% 0',
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const magnetic = {
    rest: { scale: 1 },
    hover: { scale: prefersReducedMotion ? 1 : 1.05 },
    pressed: { scale: prefersReducedMotion ? 1 : 0.95 }
  };

  const glowPulse = {
    animate: prefersReducedMotion ? {} : {
      boxShadow: [
        '0 0 20px rgba(0, 180, 216, 0.3)',
        '0 0 40px rgba(0, 180, 216, 0.6)',
        '0 0 20px rgba(0, 180, 216, 0.3)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  // Animated Counter Component
  const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (statsInView && !hasAnimated) {
        setHasAnimated(true);
        const timer = setInterval(() => {
          setCount(prev => {
            const increment = Math.ceil(end / (duration * 60));
            if (prev + increment >= end) {
              clearInterval(timer);
              return end;
            }
            return prev + increment;
          });
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [statsInView, end, duration, hasAnimated]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  // Magnetic Button Component
  const MagneticButton = ({ children, className = '', onClick, ...props }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.button
        className={`relative overflow-hidden ${className}`}
        variants={magnetic}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onClick}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial="initial"
          animate={isHovered ? "animate" : "initial"}
          variants={shimmer}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
          }}
        />
        {children}
      </motion.button>
    );
  };

  // Glass Card Component
  const GlassCard = ({ children, className = '', ...props }: any) => (
    <motion.div
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl ${className}`}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );

  return (
    <div className={`${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} min-h-screen transition-colors duration-300`}>
      {/* Enhanced Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0055A5] via-[#00b4d8] to-[#f97316]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center relative z-10"
            >
              {/* Main Loading Circle */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <motion.div
                  className="absolute inset-0 border-4 border-white/20 rounded-full"
                />
                <motion.div
                  className="absolute inset-0 border-4 border-transparent border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap className="h-8 w-8 text-white drop-shadow-lg" />
                </motion.div>
              </div>

              {/* Brand Text */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">
                  Şarjet
                </h1>
                <motion.div
                  className="h-1 w-16 bg-white/60 rounded-full mx-auto mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.p
                  className="text-white/90 text-lg font-medium"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  {selectedLanguage === 'EN' 
                    ? 'Powering your electric journey...' 
                    : 'Elektrikli yolculuğunuza güç katıyoruz...'
                  }
                </motion.p>
              </motion.div>

              {/* Loading Dots */}
              <motion.div 
                className="flex justify-center space-x-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-white/60 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
=======
  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  return (
    <div className={`${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} min-h-screen transition-colors duration-500 relative overflow-x-hidden`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0055A5]/20 to-[#00b4d8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#f97316]/20 to-[#00b4d8]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isScrolled ? (isDarkMode ? 'glass-dark' : 'glass') : 'bg-transparent'} z-50 transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-[#0055A5] to-[#00b4d8] p-3 rounded-2xl shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] rounded-2xl blur opacity-50 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                Şarjet
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { key: 'features', label: t.nav.features },
                { key: 'how-it-works', label: t.nav.howItWorks },
                { key: 'about', label: t.nav.about },
                { key: 'developer', label: t.nav.developer },
                { key: 'faq', label: t.nav.faq }
              ].map((item, index) => (
                <motion.a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.key); }}
                  className={`relative font-medium transition-all duration-300 cursor-pointer group ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-slate-100/50 hover:bg-slate-200/50'} transition-all duration-300 backdrop-blur-sm border ${isDarkMode ? 'border-slate-700/50' : 'border-slate-300/50'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-[#f97316]" />
                ) : (
                  <Moon className="h-5 w-5 text-[#0055A5]" />
                )}
              </motion.button>
              
              {/* Language Dropdown */}
              <div className="relative language-dropdown">
                <motion.button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-2xl border ${isDarkMode ? 'border-slate-700/50 hover:border-[#0055A5]/50 bg-slate-800/50' : 'border-slate-300/50 hover:border-[#0055A5]/50 bg-slate-50/50'} transition-all duration-300 backdrop-blur-sm`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ReactCountryFlag 
                    countryCode={languages.find(lang => lang.code === selectedLanguage)?.flag || 'US'} 
                    svg 
                    style={{ width: '20px', height: '15px' }} 
                  />
                  <span className="text-sm font-medium">{selectedLanguage}</span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </motion.button>
                
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className={`absolute right-0 mt-2 w-44 ${isDarkMode ? 'glass-dark' : 'glass'} rounded-2xl shadow-2xl z-50 overflow-hidden`}
                  >
                    {languages.map((language, index) => (
                      <motion.button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.code);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center space-x-3 w-full px-4 py-3 text-sm transition-all duration-300 ${
                          selectedLanguage === language.code 
                            ? 'bg-[#0055A5]/20 text-[#00b4d8]' 
                            : `hover:bg-[#0055A5]/10 ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <ReactCountryFlag 
                          countryCode={language.flag} 
                          svg 
                          style={{ width: '20px', height: '15px' }} 
                        />
                        <span>{language.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleMobileMenu}
<<<<<<< HEAD
                className="lg:hidden p-2 rounded-xl hover:bg-slate-700/50 transition-colors relative"
=======
                className="lg:hidden p-3 rounded-2xl hover:bg-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
                aria-label="Toggle mobile menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
<<<<<<< HEAD
                <div className="w-6 h-6 relative flex flex-col justify-center">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 0 : -6
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-6 h-0.5 bg-current transform origin-center"
                  />
                  <motion.span
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-6 h-0.5 bg-current"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? 0 : 6
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-6 h-0.5 bg-current transform origin-center"
                  />
                </div>
=======
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              </motion.button>
            </div>
          </div>

<<<<<<< HEAD
          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`lg:hidden border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} py-4 backdrop-blur-md`}
              >
                <motion.div 
                  className="flex flex-col space-y-4"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {[
                    { key: 'features', href: '#features', label: t.nav.features, icon: Sparkles },
                    { key: 'how-it-works', href: '#how-it-works', label: t.nav.howItWorks, icon: TrendingUp },
                    { key: 'about', href: '#about', label: t.nav.about, icon: Globe },
                    { key: 'developer', href: '#developer', label: t.nav.developer, icon: User },
                    { key: 'faq', href: '#faq', label: t.nav.faq, icon: BarChart3 }
                  ].map((item) => (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.key); }}
                      className={`font-medium hover:text-[#0055A5] transition-colors flex items-center space-x-3 p-3 rounded-xl ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <item.icon className="h-5 w-5 text-[#00b4d8]" />
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
=======
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'} py-6 mobile-menu-overlay`}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { key: 'features', label: t.nav.features },
                  { key: 'how-it-works', label: t.nav.howItWorks },
                  { key: 'about', label: t.nav.about },
                  { key: 'developer', label: t.nav.developer },
                  { key: 'faq', label: t.nav.faq }
                ].map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={`#${item.key}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.key); }}
                    className="font-medium hover:text-[#0055A5] transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
<<<<<<< HEAD
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, ${isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(248, 250, 252, 0.95)'} 0%, ${isDarkMode ? 'rgba(30, 41, 59, 0.85)' : 'rgba(226, 232, 240, 0.85)'} 100%), url('/hero-bg-modern.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
=======
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute inset-0 noise-overlay"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#f97316] to-[#00b4d8] rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Gradient glow orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #00b4d8 0%, transparent 60%)' }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 60%)' }} />

        {/* Hero Content */}
<<<<<<< HEAD
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Dynamic Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {/* Announcement Badge */}
            <GlassCard className="px-4 py-2 text-sm flex items-center gap-2">
              <motion.span 
                className="inline-flex h-2 w-2 rounded-full bg-[#00b4d8]"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {t.hero.announcement}
              </span>
            </GlassCard>

            {/* Free Badge */}
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-[#00b4d8] to-[#f97316] rounded-full text-white text-xs font-semibold"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {t.hero.badge}
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
              style={{ y: textY }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-[#0055A5] via-[#00b4d8] to-[#f97316] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  {t.hero.title.split('\n')[0]}
                </motion.span>
                <br />
                <span className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {t.hero.title.split('\n')[1]}
                </span>
              </motion.h1>
              
              <motion.p 
                className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mb-8 lg:max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {[
                  { value: t.hero.stats.users, label: t.hero.stats.usersLabel, icon: Users },
                  { value: t.hero.stats.stations, label: t.hero.stats.stationsLabel, icon: Zap },
                  { value: t.hero.stats.coverage, label: t.hero.stats.coverageLabel, icon: Target }
                ].map((stat, index) => (
                  <GlassCard key={index} className="p-4 text-center group">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-[#00b4d8] group-hover:scale-110 transition-transform" />
                    <div className="text-xl sm:text-2xl font-bold text-[#00b4d8] mb-1">
                      {stat.value}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {stat.label}
                    </div>
                  </GlassCard>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <MagneticButton
                  className="group bg-gradient-to-r from-[#0055A5] to-[#00b4d8] hover:from-[#00b4d8] hover:to-[#f97316] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 inline-flex items-center gap-3 justify-center"
                  variants={glowPulse}
                  animate="animate"
                >
                  <Download className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  <span>{t.hero.downloadAndroid}</span>
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>

                <MagneticButton
                  className={`group ${isDarkMode ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' : 'bg-slate-900/10 text-slate-900 border border-slate-200 hover:bg-slate-900/20'} px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all inline-flex items-center gap-3 justify-center backdrop-blur-sm`}
                  onClick={() => scrollToSection('how-it-works')}
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  {t.hero.watchDemo}
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Modern Hero Visual */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
              style={{ y: backgroundY }}
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0055A5]/20 via-[#00b4d8]/30 to-[#f97316]/20 blur-3xl animate-pulse" />
                
                {/* Rotating Ring */}
                <motion.div 
                  className="absolute inset-8 border-2 border-gradient-to-r from-[#0055A5] via-[#00b4d8] to-[#f97316] rounded-full opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: `conic-gradient(from 0deg, transparent, #00b4d8, transparent)`
                  }}
                />
                
                {/* Main Logo Container */}
                <motion.div
                  className="absolute inset-16 sm:inset-20 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <motion.div
                    className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#0055A5] to-[#00b4d8] rounded-3xl flex items-center justify-center shadow-2xl"
                    animate={{
                      boxShadow: [
                        '0 20px 60px rgba(0, 180, 216, 0.4)',
                        '0 25px 80px rgba(0, 180, 216, 0.6)',
                        '0 20px 60px rgba(0, 180, 216, 0.4)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Zap className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute -top-4 -right-4 p-4 rounded-2xl shadow-2xl bg-gradient-to-br from-[#f97316] to-[#ff6b35]"
                >
                  <MapPin className="h-6 w-6 text-white drop-shadow-lg" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 25, 0],
                    rotate: [0, -360, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                  }}
                  className="absolute -bottom-4 -left-4 p-4 rounded-2xl shadow-2xl bg-gradient-to-br from-[#0055A5] to-[#0066cc]"
                >
                  <Battery className="h-6 w-6 text-white drop-shadow-lg" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 15, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                  className="absolute top-1/4 -left-8 p-3 rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#0099cc] shadow-lg"
                >
                  <Sparkles className="h-5 w-5 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, -12, 0],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 3
                  }}
                  className="absolute bottom-1/4 -right-8 p-3 rounded-xl bg-gradient-to-br from-[#f97316] to-[#e6680f] shadow-lg"
                >
                  <Star className="h-5 w-5 text-white" />
                </motion.div>
              </div>
=======
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0055A5]/20 to-[#00b4d8]/20 backdrop-blur-sm border border-[#0055A5]/30 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-[#00b4d8]" />
              <span className="text-sm font-medium text-[#00b4d8]">{t.hero.badge}</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <motion.span 
                className="block bg-gradient-to-r from-[#0055A5] via-[#00b4d8] to-[#f97316] bg-clip-text text-transparent gradient-animate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t.hero.title.split('\n')[0]}
              </motion.span>
              <motion.span 
                className={`block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {t.hero.title.split('\n')[1]}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t.hero.subtitle}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                className="group magnetic-btn bg-gradient-to-r from-[#0055A5] to-[#00b4d8] hover:from-[#00b4d8] hover:to-[#f97316] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 min-w-[250px] justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-6 w-6" />
                <span>{t.hero.downloadAndroid}</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 border-2 ${isDarkMode ? 'border-slate-700 hover:border-[#0055A5] text-slate-300 hover:text-white hover:bg-slate-800/50' : 'border-slate-300 hover:border-[#0055A5] text-slate-600 hover:text-slate-900 hover:bg-slate-50/50'} backdrop-blur-sm`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="h-5 w-5" />
                <span>{t.hero.watchDemo}</span>
              </motion.button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {[
                { value: t.hero.stats.stations, label: 'Charging Stations' },
                { value: t.hero.stats.users, label: 'Active Users' },
                { value: t.hero.stats.cities, label: 'Cities Covered' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mt-1`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer p-2"
            onClick={() => scrollToSection('features')}
          >
            <ChevronDown className="h-8 w-8 text-[#0055A5] opacity-70" />
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

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className={`py-20 sm:py-28 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-white via-slate-50 to-white'} relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${isDarkMode ? '00b4d8' : '0055A5'}' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.stats.title}
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto`}>
              {t.stats.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                value: 50000,
                suffix: '+',
                label: t.stats.sessionsLabel,
                icon: Zap,
                color: 'from-[#0055A5] to-[#00b4d8]'
              },
              {
                value: 2.5,
                suffix: 'M',
                label: t.stats.savedLabel,
                icon: Clock,
                color: 'from-[#00b4d8] to-[#f97316]'
              },
              {
                value: 4.8,
                suffix: '/5',
                label: t.stats.ratingLabel,
                icon: Star,
                color: 'from-[#f97316] to-[#ff6b35]'
              },
              {
                value: 1200,
                suffix: ' tons',
                label: t.stats.carbonLabel,
                icon: Heart,
                color: 'from-[#ff6b35] to-[#0055A5]'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <GlassCard className={`p-6 sm:p-8 text-center h-full group-hover:scale-105 transition-all duration-500 ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50/50'}`}>
                  {/* Icon with animated background */}
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center relative overflow-hidden`}
                    animate={{
                      boxShadow: statsInView ? [
                        '0 0 30px rgba(0, 180, 216, 0.3)',
                        '0 0 50px rgba(0, 180, 216, 0.5)',
                        '0 0 30px rgba(0, 180, 216, 0.3)'
                      ] : '0 0 30px rgba(0, 180, 216, 0.3)'
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={statsInView ? {
                        x: '200%',
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }
                      } : {}}
                    />
                    <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10" />
                  </motion.div>

                  {/* Animated Counter */}
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0055A5] to-[#00b4d8]">
                    <AnimatedCounter 
                      end={stat.value} 
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  </div>
                  
                  {/* Progress bar */}
                  <motion.div 
                    className={`w-full h-2 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} rounded-full mb-4 overflow-hidden`}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={statsInView ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </motion.div>

                  <p className={`text-sm sm:text-base font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {[
                { icon: Shield, text: selectedLanguage === 'EN' ? 'Secure & Private' : 'Güvenli ve Özel' },
                { icon: Award, text: selectedLanguage === 'EN' ? 'Award Winning' : 'Ödül Sahibi' },
                { icon: CheckCircle, text: selectedLanguage === 'EN' ? 'Verified Data' : 'Doğrulanmış Veri' },
                { icon: Globe, text: selectedLanguage === 'EN' ? 'Open Source' : 'Açık Kaynak' }
              ].map((trust, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-800/50 text-slate-300' : 'bg-white/50 text-slate-600'} backdrop-blur-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <trust.icon className="h-4 w-4 text-[#00b4d8]" />
                  <span className="text-sm font-medium">{trust.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section 
        id="features"
        ref={featuresRef}
<<<<<<< HEAD
        className={`scroll-mt-20 py-20 sm:py-28 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300 relative overflow-hidden`}
=======
        className={`py-32 relative ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'} transition-colors duration-500`}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      >
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#00b4d8]/10 to-[#f97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#0055A5]/10 to-[#00b4d8]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
<<<<<<< HEAD
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto`}>
=======
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              {t.features.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
<<<<<<< HEAD
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
=======
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
          >
            {[
              {
                icon: MapPin,
                title: t.features.realTime.title,
                description: t.features.realTime.description,
                color: 'from-[#0055A5] to-[#00b4d8]',
<<<<<<< HEAD
                hoverColor: 'hover:from-[#0055A5] hover:to-[#f97316]'
=======
                delay: 0
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              },
              {
                icon: Clock,
                title: t.features.availability.title,
                description: t.features.availability.description,
                color: 'from-[#00b4d8] to-[#f97316]',
<<<<<<< HEAD
                hoverColor: 'hover:from-[#00b4d8] hover:to-[#0055A5]'
=======
                delay: 0.1
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              },
              {
                icon: Filter,
                title: t.features.filtering.title,
                description: t.features.filtering.description,
                color: 'from-[#f97316] to-[#0055A5]',
<<<<<<< HEAD
                hoverColor: 'hover:from-[#f97316] hover:to-[#00b4d8]'
              },
              {
                icon: Smartphone,
                title: t.features.offline.title,
                description: t.features.offline.description,
                color: 'from-[#0055A5] to-[#f97316]',
                hoverColor: 'hover:from-[#0055A5] hover:to-[#00b4d8]'
=======
                delay: 0.2
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              },
              {
                icon: Navigation,
                title: t.features.navigation.title,
                description: t.features.navigation.description,
<<<<<<< HEAD
                color: 'from-[#00b4d8] to-[#0055A5]',
                hoverColor: 'hover:from-[#00b4d8] hover:to-[#f97316]'
              },
              {
                icon: Sparkles,
                title: t.features.notifications.title,
                description: t.features.notifications.description,
                color: 'from-[#f97316] to-[#00b4d8]',
                hoverColor: 'hover:from-[#f97316] hover:to-[#0055A5]'
=======
                color: 'from-[#0055A5] to-[#f97316]',
                delay: 0.3
              },
              {
                icon: Zap,
                title: t.features.notifications.title,
                description: t.features.notifications.description,
                color: 'from-[#00b4d8] to-[#0055A5]',
                delay: 0.4
              },
              {
                icon: Shield,
                title: t.features.offline.title,
                description: t.features.offline.description,
                color: 'from-[#f97316] to-[#00b4d8]',
                delay: 0.5
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
<<<<<<< HEAD
                className="group relative"
              >
                <GlassCard className={`h-full p-6 sm:p-8 group-hover:scale-105 transition-all duration-500 cursor-pointer ${isDarkMode ? 'hover:bg-white/5 border-slate-700/50' : 'hover:bg-slate-50/50 border-slate-200/50'} overflow-hidden`}>
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  {/* Icon container with enhanced effects */}
                  <motion.div
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} ${feature.hoverColor} rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 overflow-hidden`}
                    whileHover={{ rotate: 5 }}
                  >
                    {/* Icon glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-[#00b4d8] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm sm:text-base group-hover:text-opacity-90`}>
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transition-all duration-500`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </GlassCard>
=======
                className={`group card-hover ${isDarkMode ? 'bg-slate-900/50 hover:bg-slate-900/80' : 'bg-white/50 hover:bg-white/80'} p-8 rounded-3xl backdrop-blur-sm border ${isDarkMode ? 'border-slate-700/50 hover:border-[#0055A5]/50' : 'border-slate-200/50 hover:border-[#0055A5]/50'} transition-all duration-500 cursor-pointer relative overflow-hidden`}
                whileHover={{ y: -8 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00b4d8] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-lg`}>
                  {feature.description}
                </p>
                
                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="h-5 w-5 text-[#00b4d8]" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.stats.title}
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto`}>
              {t.stats.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate={statsInView ? "animate" : "initial"}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Download,
                value: t.stats.downloads,
                label: t.stats.downloadsLabel,
                color: 'from-[#0055A5] to-[#00b4d8]'
              },
              {
                icon: MapIcon,
                value: t.stats.stations,
                label: t.stats.stationsLabel,
                color: 'from-[#00b4d8] to-[#f97316]'
              },
              {
                icon: Star,
                value: t.stats.rating,
                label: t.stats.ratingLabel,
                color: 'from-[#f97316] to-[#0055A5]'
              },
              {
                icon: TrendingUp,
                value: t.stats.uptime,
                label: t.stats.uptimeLabel,
                color: 'from-[#0055A5] to-[#f97316]'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`text-center p-8 rounded-3xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'} backdrop-blur-sm border ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'} hover:border-[#0055A5]/50 transition-all duration-300 group`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        id="how-it-works"
        ref={howItWorksRef}
<<<<<<< HEAD
        className={`scroll-mt-20 py-16 sm:py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}
=======
        className={`py-32 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'} transition-colors duration-500 relative overflow-hidden`}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0055A5]/10 to-[#00b4d8]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#f97316]/10 to-[#00b4d8]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
<<<<<<< HEAD
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.howItWorks.title}
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto`}>
=======
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.howItWorks.title}
            </h2>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              {t.howItWorks.subtitle}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
<<<<<<< HEAD
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0055A5] to-[#f97316] rounded-full"></div>
=======
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0055A5] via-[#00b4d8] to-[#f97316] rounded-full opacity-30"></div>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
            
            <motion.div
              variants={stagger}
              initial="initial"
              animate={howItWorksInView ? "animate" : "initial"}
<<<<<<< HEAD
              className="space-y-12 sm:space-y-16"
=======
              className="space-y-24"
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
            >
              {[
                {
                  number: '01',
                  icon: Search,
                  title: t.howItWorks.step1.title,
                  description: t.howItWorks.step1.description,
                  side: 'left',
                  color: 'from-[#0055A5] to-[#00b4d8]'
                },
                {
                  number: '02',
                  icon: Navigation,
                  title: t.howItWorks.step2.title,
                  description: t.howItWorks.step2.description,
                  side: 'right',
                  color: 'from-[#00b4d8] to-[#f97316]'
                },
                {
                  number: '03',
                  icon: Zap,
                  title: t.howItWorks.step3.title,
                  description: t.howItWorks.step3.description,
                  side: 'left',
                  color: 'from-[#f97316] to-[#0055A5]'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
<<<<<<< HEAD
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
=======
                  className={`flex flex-col lg:flex-row items-center ${step.side === 'right' ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`lg:w-5/12 ${step.side === 'right' ? 'lg:pl-16' : 'lg:pr-16'} mb-8 lg:mb-0`}>
                    <motion.div 
                      className={`${isDarkMode ? 'bg-slate-900/50' : 'bg-white/50'} p-10 rounded-3xl backdrop-blur-sm border ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'} hover:border-[#0055A5]/50 transition-all duration-500 group relative overflow-hidden`}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.number}
                        </div>
                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00b4d8] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-lg`}>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block relative z-10">
<<<<<<< HEAD
                    <div className={`w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#0055A5] to-[#f97316] rounded-full border-4 ${isDarkMode ? 'border-slate-900' : 'border-white'}`}></div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
=======
                    <motion.div 
                      className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full border-4 ${isDarkMode ? 'border-slate-800' : 'border-slate-50'} shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    ></motion.div>
                  </div>
                  
                  <div className="lg:w-5/12"></div>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
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
<<<<<<< HEAD
        className={`scroll-mt-20 py-16 sm:py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300`}
=======
        className={`py-32 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-500`}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
<<<<<<< HEAD
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className={`text-base sm:text-lg lg:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
=======
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-8`}>
              {t.about.subtitle}
            </p>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
                {t.about.description1}
              </p>
              <p className={`text-base sm:text-lg lg:text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                {t.about.description2}
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {[
              {
                icon: Sparkles,
                title: t.about.values.innovation.title,
                description: t.about.values.innovation.description,
                color: 'from-[#0055A5] to-[#00b4d8]'
              },
              {
                icon: Globe,
                title: t.about.values.sustainability.title,
                description: t.about.values.sustainability.description,
                color: 'from-[#00b4d8] to-[#f97316]'
              },
              {
                icon: Users,
                title: t.about.values.accessibility.title,
                description: t.about.values.accessibility.description,
                color: 'from-[#f97316] to-[#0055A5]'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`text-center p-8 rounded-3xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'} backdrop-blur-sm border ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'} hover:border-[#0055A5]/50 transition-all duration-500 group`}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00b4d8] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Developer Section */}
      <section 
        id="developer"
<<<<<<< HEAD
        className={`scroll-mt-20 py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}
=======
        className={`py-32 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'} transition-colors duration-500`}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                {t.developer.title}
              </h2>
              
              <div className={`${isDarkMode ? 'bg-slate-900/50' : 'bg-white/50'} p-12 rounded-3xl backdrop-blur-sm border ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'} relative overflow-hidden group`}>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0055A5]/5 to-[#00b4d8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Profile */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] rounded-full flex items-center justify-center shadow-2xl">
                        <User className="h-16 w-16 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] rounded-full blur opacity-50 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-2">{t.developer.name}</h3>
                    <p className="text-[#00b4d8] font-medium text-lg">{t.developer.role}</p>
                  </div>

                  <div className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-8 whitespace-pre-line text-left space-y-4`}>
                    {t.developer.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-center text-[#00b4d8]">
                      {t.developer.achievements.title}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {t.developer.achievements.items.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-2xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'} backdrop-blur-sm`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-[#00b4d8] flex-shrink-0" />
                          <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className={`border-t ${isDarkMode ? 'border-slate-700/50' : 'border-slate-300/50'} pt-8`}>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-6 font-medium text-center`}>
                      {t.developer.socialContact}
                    </p>
                    <div className="flex justify-center space-x-6">
                      {[
                        { icon: Mail, href: "mailto:yusufefe@sarjet.com", color: "hover:bg-red-500" },
                        { icon: Github, href: "https://github.com/ysftsdln0", color: "hover:bg-gray-700" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/yusuf-efe-tasdelen/", color: "hover:bg-blue-600" },
                        { icon: Twitter, href: "https://x.com/ysftsdln", color: "hover:bg-blue-400" }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group p-4 rounded-2xl ${isDarkMode ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-slate-100/50 hover:bg-slate-200/50'} transition-all duration-300 ${social.color}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="h-6 w-6 group-hover:text-white transition-colors duration-300" />
                        </motion.a>
                      ))}
                    </div>
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
<<<<<<< HEAD
        className={`scroll-mt-20 py-24 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300`}
=======
        className={`py-32 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-500`}
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
              {t.faq.title}
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.faq.subtitle}
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: t.faq.q1.question, a: t.faq.q1.answer },
              { q: t.faq.q2.question, a: t.faq.q2.answer },
              { q: t.faq.q3.question, a: t.faq.q3.answer },
              { q: t.faq.q4.question, a: t.faq.q4.answer },
              { q: t.faq.q5.question, a: t.faq.q5.answer }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'} p-8 rounded-3xl backdrop-blur-sm border ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'} hover:border-[#0055A5]/50 transition-all duration-500 group`}
                whileHover={{ y: -2, scale: 1.01 }}
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00b4d8] transition-colors duration-300">
                  {faq.q}
                </h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-lg`}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-32 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50/50'} transition-colors duration-500 relative overflow-hidden`}>
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0055A5]/5 via-transparent to-[#f97316]/5"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#0055A5] via-[#00b4d8] to-[#f97316] bg-clip-text text-transparent">
              {t.cta.title}
            </h2>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-12 max-w-3xl mx-auto leading-relaxed`}>
              {t.cta.subtitle}
            </p>
            
            {/* Features list */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              {t.cta.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-[#00b4d8] flex-shrink-0" />
                  <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className="group magnetic-btn bg-gradient-to-r from-[#0055A5] to-[#00b4d8] hover:from-[#00b4d8] hover:to-[#f97316] text-white px-12 py-5 rounded-2xl text-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-4 mx-auto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-7 w-7" />
              <span>{t.cta.downloadAndroid}</span>
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Enhanced Footer */}
      <footer className={`${isDarkMode ? 'bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 border-slate-800' : 'bg-gradient-to-t from-slate-100 via-white to-slate-50 border-slate-200'} border-t py-20 transition-colors duration-300 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? '00b4d8' : '0055A5'}' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Enhanced Brand */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-[#0055A5] to-[#00b4d8] p-3 rounded-xl"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 180, 216, 0.3)',
                      '0 0 40px rgba(0, 180, 216, 0.5)',
                      '0 0 20px rgba(0, 180, 216, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="h-8 w-8 text-white" />
                </motion.div>
                <span className="text-3xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">Şarjet</span>
              </motion.div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-md leading-relaxed text-lg mb-6`}>
                {selectedLanguage === 'EN' 
                  ? 'Making electric vehicle charging simple and accessible for everyone. Power your journey with confidence.'
                  : 'Elektrikli araç şarjını herkes için basit ve erişilebilir hale getiriyoruz. Yolculuğunuza güvenle güç katın.'
                }
              </p>

              {/* Quick stats in footer */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: selectedLanguage === 'EN' ? 'Users' : 'Kullanıcı', value: '10K+', icon: Users },
                  { label: selectedLanguage === 'EN' ? 'Stations' : 'İstasyon', value: '500+', icon: Zap },
                  { label: selectedLanguage === 'EN' ? 'Reviews' : 'İnceleme', value: '4.8★', icon: Star }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`text-center p-3 rounded-xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="h-4 w-4 mx-auto mb-1 text-[#00b4d8]" />
                    <div className="font-bold text-sm text-[#00b4d8]">{stat.value}</div>
                    <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
                  </motion.div>
=======
      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'} border-t py-20 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-r from-[#0055A5] to-[#00b4d8] p-3 rounded-2xl shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] rounded-2xl blur opacity-50"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                  Şarjet
                </span>
              </div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-md leading-relaxed text-lg mb-6`}>
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/ysftsdln0/sarjet-web" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "mailto:contact@sarjet.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-800/50 hover:bg-[#0055A5]' : 'bg-slate-200/50 hover:bg-[#0055A5]'} transition-all duration-300 group`}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <social.icon className="h-5 w-5 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                {selectedLanguage === 'EN' ? 'Quick Links' : 'Hızlı Linkler'}
              </h4>
              <div className="space-y-3">
                {[
                  { label: t.nav.features, action: () => scrollToSection('features') },
                  { label: t.nav.howItWorks, action: () => scrollToSection('how-it-works') },
                  { label: t.nav.about, action: () => scrollToSection('about') },
                  { label: t.nav.faq, action: () => scrollToSection('faq') }
                ].map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={link.action}
                    className={`block w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-[#00b4d8]' : 'text-slate-600 hover:text-[#0055A5]'} transition-all duration-300`}
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#0055A5] to-[#00b4d8] bg-clip-text text-transparent">
                {selectedLanguage === 'EN' ? 'Connect' : 'İletişim'}
              </h4>
              <div className="space-y-4 mb-6">
                <motion.a 
                  href="mailto:contact@sarjet.com" 
                  className={`${isDarkMode ? 'text-slate-300 hover:text-[#00b4d8]' : 'text-slate-600 hover:text-[#0055A5]'} transition-colors flex items-center group`}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="mr-3 p-2 rounded-lg bg-gradient-to-r from-[#0055A5] to-[#00b4d8] text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="h-4 w-4" />
                  </motion.div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm opacity-75">contact@sarjet.com</div>
                  </div>
                </motion.a>
              </div>

              <div>
                <h5 className={`font-medium mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {selectedLanguage === 'EN' ? 'Follow Us' : 'Bizi Takip Edin'}
                </h5>
                <div className="flex space-x-3">
                  {[
                    { 
                      icon: Github, 
                      href: "https://github.com/ysftsdln0/sarjet-web",
                      label: "GitHub",
                      color: "from-gray-600 to-gray-800"
                    },
                    { 
                      icon: Twitter, 
                      href: "#",
                      label: "Twitter", 
                      color: "from-blue-400 to-blue-600"
                    },
                    { 
                      icon: Linkedin, 
                      href: "#",
                      label: "LinkedIn",
                      color: "from-blue-600 to-blue-800"
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-r ${social.color} text-white transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
=======
            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t.footer.links.product}</h4>
              <div className="space-y-3">
                <a href="#features" className={`block ${isDarkMode ? 'text-slate-400 hover:text-[#00b4d8]' : 'text-slate-500 hover:text-[#0055A5]'} transition-colors duration-300`}>
                  {t.footer.links.features}
                </a>
                <a href="#how-it-works" className={`block ${isDarkMode ? 'text-slate-400 hover:text-[#00b4d8]' : 'text-slate-500 hover:text-[#0055A5]'} transition-colors duration-300`}>
                  {t.footer.links.howItWorks}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{t.footer.links.support}</h4>
              <div className="space-y-3">
                <a href="#faq" className={`block ${isDarkMode ? 'text-slate-400 hover:text-[#00b4d8]' : 'text-slate-500 hover:text-[#0055A5]'} transition-colors duration-300`}>
                  {t.footer.links.faq}
                </a>
                <a href="mailto:contact@sarjet.com" className={`block ${isDarkMode ? 'text-slate-400 hover:text-[#00b4d8]' : 'text-slate-500 hover:text-[#0055A5]'} transition-colors duration-300`}>
                  {t.footer.links.contact}
                </a>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Enhanced Bottom Section */}
          <motion.div 
            className={`pt-8 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} text-center ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} transition-colors duration-300`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div>
                <p className="font-medium">{t.footer.copyright}</p>               
              </div>
              
              <motion.div 
                className="flex items-center space-x-4 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  {selectedLanguage === 'EN' ? 'Secure' : 'Güvenli'}
                </span>
                <span className="flex items-center">
                  <Globe className="h-4 w-4 mr-1 text-blue-500" />
                  {selectedLanguage === 'EN' ? 'Open Source' : 'Açık Kaynak'}
                </span>
                <span className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  {selectedLanguage === 'EN' ? 'Community Driven' : 'Topluluk Odaklı'}
                </span>
              </motion.div>
            </div>
          </motion.div>
=======
          <div className={`pt-8 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} text-center ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} transition-colors duration-500`}>
            <p className="text-lg">{t.footer.copyright}</p>
            <p className="mt-2 text-sm">
              {selectedLanguage === 'EN' 
                ? 'Made with ❤️ for a sustainable future'
                : 'Sürdürülebilir bir gelecek için ❤️ ile yapıldı'
              }
            </p>
          </div>
>>>>>>> f350fef10fd8b15829ef2d8ae7e7e2bb842966a3
        </div>
      </footer>
    </div>
  );
}