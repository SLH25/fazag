import React from 'react';
import { Target, Eye, Heart, Award, Users, Briefcase } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import AnimatedButton from '../components/AnimatedButton';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque transaction et interaction avec nos clients.'
    },
    {
      icon: Heart,
      title: 'Confiance',
      description: 'La confiance est au cœur de nos relations. Nous la construisons jour après jour.'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Notre équipe possède une expertise approfondie du secteur financier international.'
    },
    {
      icon: Users,
      title: 'Service client',
      description: 'Chaque client est unique. Nous adaptons nos services à vos besoins spécifiques.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Clients satisfaits' },
    { number: '50+', label: 'Pays desservis' },
    { number: '5', label: 'Années d\'expérience' },
    { number: '99.9%', label: 'Taux de satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-fazag-bg-light dark:bg-fazag-bg-dark">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-fazag-green-500 to-fazag-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À propos de FAZAG BUSINESS
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Votre partenaire de confiance pour tous vos besoins financiers internationaux. 
                Depuis 2019, nous accompagnons nos clients avec expertise et dévouement.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-6">
                  Notre Histoire
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Fondée en 2019, FAZAG BUSINESS SARL est née de la volonté de simplifier 
                    les transactions financières internationales pour les particuliers et 
                    les entreprises.
                  </p>
                  <p>
                    Notre équipe de professionnels expérimentés s'engage à fournir des 
                    services de qualité supérieure, combinant innovation technologique 
                    et approche personnalisée.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 10 000 clients 
                    dans leurs projets financiers internationaux, avec un taux de 
                    satisfaction exceptionnel.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-fazag-green-500 dark:text-fazag-green-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-fazag-green-50 dark:bg-fazag-green-400/10 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-fazag-green-500 dark:bg-fazag-green-400 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white dark:text-fazag-dark-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey">
                    Notre Mission
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Faciliter les échanges financiers internationaux en offrant des services 
                  rapides, sécurisés et accessibles. Nous nous engageons à être le pont 
                  qui relie nos clients au monde financier global.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-fazag-accent/10 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-fazag-accent rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey">
                    Notre Vision
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Devenir la référence incontournable des services financiers internationaux, 
                  reconnue pour son excellence, son innovation et la satisfaction de ses clients 
                  dans toute l'Europe et l'Afrique.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nos Valeurs"
            subtitle="Les principes qui guident chacune de nos actions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 150}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-fazag-green-100 dark:bg-fazag-green-400/20 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-fazag-green-500 dark:text-fazag-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Notre Équipe"
            subtitle="Des professionnels expérimentés à votre service"
          />
          
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <Briefcase className="w-12 h-12 text-fazag-green-500 dark:text-fazag-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                  Expertise et Dévouement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Notre équipe est composée d'experts en finance internationale, 
                  de conseillers spécialisés et de professionnels du service client. 
                  Chaque membre partage la même passion : vous offrir le meilleur service possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold text-fazag-green-500 dark:text-fazag-green-400 mb-1">
                      Conseillers certifiés
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Formation continue et certifications professionnelles
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-fazag-green-500 dark:text-fazag-green-400 mb-1">
                      Support multilingue
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Service client en français, anglais et autres langues
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-fazag-green-500 dark:text-fazag-green-400 mb-1">
                      Disponibilité étendue
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Équipe disponible 6 jours sur 7 pour vous accompagner
                    </div>
                  </div>
                </div>
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
              Prêt à nous rejoindre ?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez pourquoi des milliers de clients nous font confiance 
              pour leurs besoins financiers internationaux.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <AnimatedButton 
              variant="outline" 
              size="lg"
              className="bg-white text-fazag-green-500 border-white hover:bg-gray-50"
            >
              Contactez-nous dès maintenant
            </AnimatedButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;