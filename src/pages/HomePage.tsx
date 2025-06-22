import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Lightbulb, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaMoneyBillTransfer, FaArrowRightArrowLeft, FaFileInvoiceDollar, FaPassport } from 'react-icons/fa6';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import AnimatedButton from '../components/AnimatedButton';
import affiche1 from '../assets/affiche1.jpg';
import affiche2 from '../assets/affiche2.jpg';
import affiche3 from '../assets/affiche3.jpg';
import affiche4 from '../assets/affiche4.jpg';
import affiche5 from '../assets/affiche5.jpg';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: affiche1, alt: 'Affiche 1' },
    { src: affiche2, alt: 'Affiche 2' },
    { src: affiche3, alt: 'Affiche 3' },
    { src: affiche4, alt: 'Affiche 4' },
    { src: affiche5, alt: 'Affiche 5' },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      icon: FaMoneyBillTransfer,
      title: 'Transfert d\'argent',
      description: 'Envoyez de l\'argent rapidement et en toute sécurité dans le monde entier avec nos partenaires de confiance.',
      linkTo: '/services/transfert-argent'
    },
    {
      icon: FaArrowRightArrowLeft,
      title: 'Change de devises',
      description: 'Obtenez les meilleurs taux de change pour vos opérations commerciales et personnelles.',
      linkTo: '/services/change-devises'
    },
    {
      icon: FaFileInvoiceDollar,
      title: 'Paiement de factures',
      description: 'Réglez vos factures internationales facilement grâce à notre réseau mondial de partenaires.',
      linkTo: '/services/paiement-factures'
    },
    {
      icon: FaPassport,
      title: 'Assistance visa',
      description: 'Bénéficiez de notre expertise pour vos démarches de visa et documents de voyage.',
      linkTo: '/services/assistance-visa'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Sécurité garantie',
      description: 'Toutes vos transactions sont protégées par des systèmes de sécurité de niveau bancaire.'
    },
    {
      icon: Zap,
      title: 'Rapidité',
      description: 'Transferts instantanés ou en quelques minutes selon la destination choisie.'
    },
    {
      icon: Lightbulb,
      title: 'Expertise',
      description: 'Une équipe d\'experts à votre service pour vous conseiller et vous accompagner.'
    },
    {
      icon: Users,
      title: 'Service client',
      description: 'Un support client disponible 6j/7 pour répondre à toutes vos questions.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-fazag-bg-light to-gray-100 dark:from-fazag-bg-dark dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-6 leading-tight">
              Vos <span className="text-fazag-green-500 dark:text-fazag-green-400">transactions financières</span><br />
              internationales simplifiées
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              FAZAG BUSINESS SARL vous accompagne dans tous vos besoins financiers internationaux 
              avec expertise, rapidité et sécurité.
            </p>
          </ScrollReveal>

          {/* Illustration SVG */}
          <ScrollReveal delay={300}>
            <div className="mb-12 max-w-md mx-auto">
              <svg className="w-full h-64" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cercles connectés représentant la connectivité mondiale */}
                <circle cx="100" cy="100" r="30" className="fill-fazag-green-500/20 dark:fill-fazag-green-400/20" />
                <circle cx="300" cy="100" r="30" className="fill-fazag-green-500/20 dark:fill-fazag-green-400/20" />
                <circle cx="200" cy="180" r="30" className="fill-fazag-green-500/20 dark:fill-fazag-green-400/20" />
                
                {/* Lignes de connexion */}
                <line x1="130" y1="100" x2="270" y2="100" className="stroke-fazag-green-500 dark:stroke-fazag-green-400" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="120" y1="120" x2="180" y2="160" className="stroke-fazag-green-500 dark:stroke-fazag-green-400" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="280" y1="120" x2="220" y2="160" className="stroke-fazag-green-500 dark:stroke-fazag-green-400" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                </line>
                
                {/* Icônes dans les cercles */}
                <text x="100" y="107" textAnchor="middle" className="fill-fazag-green-500 dark:fill-fazag-green-400 text-xl">💰</text>
                <text x="300" y="107" textAnchor="middle" className="fill-fazag-green-500 dark:fill-fazag-green-400 text-xl">🌍</text>
                <text x="200" y="187" textAnchor="middle" className="fill-fazag-green-500 dark:fill-fazag-green-400 text-xl">⚡</text>
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton variant="primary" size="lg">
                Découvrir nos services
                <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Nous contacter
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nos Services"
            subtitle="Des solutions financières complètes adaptées à vos besoins"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pourquoi choisir FAZAG ?"
            subtitle="Les avantages qui font de nous votre partenaire de confiance"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={advantage.title} delay={index * 150}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-fazag-green-100 dark:bg-fazag-green-400/20 group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-8 h-8 text-fazag-green-500 dark:text-fazag-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-fazag-dark-blue dark:text-fazag-light-grey mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Notre Galerie"
            subtitle="Découvrez nos services en images"
          />
          
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto">
              {/* Main Carousel */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image) => (
                    <div
                      key={image.alt}
                      className="w-full flex-shrink-0"
                    >
                      <div className="relative aspect-w-16 aspect-h-9">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-semibold text-white">{image.alt}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-fazag-green-500 dark:bg-fazag-green-400 scale-125'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fazag-green-500 dark:bg-fazag-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à commencer ?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de clients qui nous font confiance pour leurs transactions internationales.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <Link to="/contact">
              <AnimatedButton 
                variant="outline" 
                size="lg" 
                className="bg-white text-fazag-green-500 border-white hover:bg-gray-50 hover:border-gray-50"
              >
                Contactez-nous maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;