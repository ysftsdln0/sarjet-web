'use client';

import { motion } from 'framer-motion';
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
  User
} from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        downloadAndroid: 'Download for Android'
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
      screenshots: {
        title: 'Experience Şarjet'
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
      footer: {
        copyright: '© 2025 Şarjet. All rights reserved. Made with ⚡ for a sustainable future.'
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
        downloadAndroid: 'Android için İndir'
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
      screenshots: {
        title: 'Şarjet\'i Deneyimle'
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
      footer: {
        copyright: '© 2025 Şarjet. Tüm hakları saklıdır. Sürdürülebilir bir gelecek için ⚡ ile yapıldı.'
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
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="h-8 w-8 text-[#00b4d8]" />
              <span className="text-xl font-bold">Şarjet</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="hover:text-[#00b4d8] transition-colors">{t.nav.features}</a>
                <a href="#how-it-works" className="hover:text-[#00b4d8] transition-colors">{t.nav.howItWorks}</a>
                <a href="#about" className="hover:text-[#00b4d8] transition-colors">{t.nav.about}</a>
                <a href="#developer" className="hover:text-[#00b4d8] transition-colors">{t.nav.developer}</a>
                <a href="#faq" className="hover:text-[#00b4d8] transition-colors">{t.nav.faq}</a>
              </div>
              
              {/* Language Dropdown */}
              <div className="relative language-dropdown">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-slate-700 hover:border-[#00b4d8] transition-colors"
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
                    className="absolute right-0 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50"
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.code);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        <ReactCountryFlag 
                          countryCode={language.flag} 
                          svg 
                          style={{ width: '20px', height: '15px' }} 
                        />
                        <span className="text-sm">{language.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              {t.hero.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div 
              className="flex justify-center mb-12"
              variants={fadeInUp}
            >
              <button className="flex items-center justify-center space-x-2 bg-[#0077b6] text-white px-6 py-3 rounded-xl hover:bg-[#03045e] transition-colors">
                <Play className="h-5 w-5" />
                <span>{t.hero.downloadAndroid}</span>
              </button>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[#00b4d8]/20 to-[#0077b6]/20 rounded-full flex items-center justify-center">
                <Smartphone className="h-32 w-32 text-[#00b4d8]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-xl text-slate-300">{t.features.subtitle}</p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
            >
              <MapPin className="h-12 w-12 text-[#00b4d8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.features.realTime.title}</h3>
              <p className="text-slate-300">{t.features.realTime.description}</p>
            </motion.div>
            <motion.div 
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
            >
              <Clock className="h-12 w-12 text-[#00b4d8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.features.availability.title}</h3>
              <p className="text-slate-300">{t.features.availability.description}</p>
            </motion.div>
            <motion.div 
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
            >
              <Filter className="h-12 w-12 text-[#00b4d8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.features.filtering.title}</h3>
              <p className="text-slate-300">{t.features.filtering.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-slate-300">{t.howItWorks.subtitle}</p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-[#0077b6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.step1.title}</h3>
              <p className="text-slate-300">{t.howItWorks.step1.description}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-[#0077b6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.step2.title}</h3>
              <p className="text-slate-300">{t.howItWorks.step2.description}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-[#0077b6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.step3.title}</h3>
              <p className="text-slate-300">{t.howItWorks.step3.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.screenshots.title}</h2>
            <div className="flex justify-center space-x-8">
              <div className="w-64 h-96 bg-gradient-to-br from-[#00b4d8]/20 to-[#0077b6]/20 rounded-3xl flex items-center justify-center">
                <Smartphone className="h-48 w-48 text-[#00b4d8]/50" />
              </div>
              <div className="w-64 h-96 bg-gradient-to-br from-[#0077b6]/20 to-[#00b4d8]/20 rounded-3xl flex items-center justify-center">
                <MapPin className="h-48 w-48 text-[#0077b6]/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.about.title}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 mb-6">
                {t.about.description1}
              </p>
              <p className="text-lg text-slate-400">
                {t.about.description2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <User className="h-12 w-12 text-[#00b4d8] mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">{t.developer.title}</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              {t.developer.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-300 mb-6 text-center leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
                <p className="text-center text-[#00b4d8] font-medium mb-6">
                  {t.developer.socialContact}
                </p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/ysftsdln0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
                  >
                    <Github className="h-6 w-6 text-slate-300 group-hover:text-[#00b4d8] transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/yusuf-efe-tasdelen/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 text-slate-300 group-hover:text-[#00b4d8] transition-colors" />
                  </a>
                  <a 
                    href="https://x.com/ysftsdln" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
                  >
                    <Twitter className="h-6 w-6 text-slate-300 group-hover:text-[#00b4d8] transition-colors" />
                  </a>
                  <a 
                    href="mailto:efe@tasdelen.net"
                    className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
                  >
                    <Mail className="h-6 w-6 text-slate-300 group-hover:text-[#00b4d8] transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.faq.title}</h2>
          </motion.div>
          <motion.div 
            className="space-y-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-2">{t.faq.q1.question}</h3>
              <p className="text-slate-300">{t.faq.q1.answer}</p>
            </motion.div>
            <motion.div 
              className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-2">{t.faq.q2.question}</h3>
              <p className="text-slate-300">{t.faq.q2.answer}</p>
            </motion.div>
            <motion.div 
              className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-2">{t.faq.q3.question}</h3>
              <p className="text-slate-300">{t.faq.q3.answer}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.cta.title}</h2>
            <p className="text-xl text-slate-300 mb-8">
              {t.cta.subtitle}
            </p>
            <div className="flex justify-center">
              <button className="flex items-center justify-center space-x-2 bg-[#0077b6] text-white px-8 py-4 rounded-xl hover:bg-[#03045e] transition-colors">
                <Play className="h-6 w-6" />
                <span>{t.cta.downloadAndroid}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-8 w-8 text-[#00b4d8]" />
              <span className="text-xl font-bold">Şarjet</span>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:contact@sarjet.com" className="text-slate-400 hover:text-[#00b4d8] transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#00b4d8] transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#00b4d8] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
