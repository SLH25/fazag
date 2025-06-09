import React from 'react';
import { FaMoneyBillTransfer, FaArrowRightArrowLeft, FaFileInvoiceDollar, FaPassport } from 'react-icons/fa6';
import { Clock, Shield, Globe, Headphones } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: FaMoneyBillTransfer,
      title: 'Transfert d\'argent rapide',
      description: 'Envoyez de l\'argent en quelques minutes partout dans le monde avec nos partenaires agréés. Tarifs compétitifs et sécurité maximale.',
      linkTo: '/services/transfert-argent'
    },
    {
      icon: FaArrowRightArrowLeft,
      title: 'Change de devises',
      description: 'Obtenez les meilleurs taux du marché pour plus de 150 devises. Service professionnel pour particuliers et entreprises.',
      linkTo: '/services/change-devises'
    },
    {
      icon: FaFileInvoiceDollar,
      title: 'Paiement de factures internationales',
      description: 'Réglez vos factures à l\'étranger facilement : universités, fournisseurs, services. Suivi en temps réel de vos paiements.',
      linkTo: '/services/paiement-factures'
    },
    {
      icon: FaPassport,
      title: 'Assistance visa et documents',
      description: 'Accompagnement complet pour vos demandes de visa, traduction de documents et démarches administratives.',
      linkTo: '/services/assistance-visa'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Rapidité',
      description: 'Transactions traitées en quelques minutes'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Protection maximale de vos données et fonds'
    },
    {
      icon: Globe,
      title: 'Mondial',
      description: 'Service disponible dans plus de 190 pays'
    },
    {
      icon: Headphones,
      title: 'Support 6j/7',
      description: 'Équipe dédiée pour vous accompagner'
    }
  ];

  return (
    <div className="min-h-screen bg-fazag-bg-light dark:bg-fazag-bg-dark">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-fazag-green-500 to-fazag-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services Financiers
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes pour tous vos besoins financiers internationaux, 
              avec l'expertise et la sécurité que vous méritez.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Découvrez nos services"
            subtitle="Chaque service est conçu pour répondre à vos besoins spécifiques avec excellence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 150}>
                <ServiceCard {...service} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nos engagements"
            subtitle="Ce qui nous distingue dans le secteur des services financiers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-fazag-green-100 dark:bg-fazag-green-400/20 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-fazag-green-500 dark:text-fazag-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-fazag-dark-blue dark:text-fazag-light-grey mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Comment ça marche ?"
            subtitle="Un processus simple et transparent en 3 étapes"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choisissez votre service',
                description: 'Sélectionnez le service qui correspond à vos besoins parmi notre gamme complète.'
              },
              {
                step: '02',
                title: 'Fournissez les informations',
                description: 'Remplissez le formulaire avec les détails nécessaires. Nos experts vous guident.'
              },
              {
                step: '03',
                title: 'Transaction finalisée',
                description: 'Votre demande est traitée rapidement et vous recevez une confirmation détaillée.'
              }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 200}>
                <div className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fazag-green-500 dark:bg-fazag-green-400 text-white dark:text-fazag-dark-blue font-bold text-xl mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Connector line (hidden on last item) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-fazag-green-200 dark:bg-fazag-green-400/30 -translate-x-8" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;