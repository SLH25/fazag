import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-fazag-bg-light dark:bg-fazag-bg-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollReveal>
          <SectionHeader
            title="Politique de Confidentialité"
            subtitle="Dernière mise à jour : Janvier 2024"
          />
        </ScrollReveal>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
          <ScrollReveal delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                1. Collecte des informations
              </h2>
              <p className="mb-4">
                FAZAG BUSINESS SARL collecte des informations personnelles uniquement dans le cadre 
                de la fourniture de nos services financiers. Ces informations peuvent inclure votre nom, 
                adresse, numéro de téléphone, adresse e-mail, et informations financières nécessaires 
                pour traiter vos transactions.
              </p>
              <p>
                Nous collectons ces informations directement auprès de vous lorsque vous utilisez nos 
                services, visitez notre site web, ou communiquez avec notre équipe.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                2. Utilisation des informations
              </h2>
              <p className="mb-4">
                Vos informations personnelles sont utilisées pour :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Traiter vos transactions financières</li>
                <li>Vérifier votre identité et prévenir la fraude</li>
                <li>Vous contacter concernant nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Améliorer nos services et votre expérience client</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                3. Protection des données
              </h2>
              <p className="mb-4">
                Nous mettons en place des mesures de sécurité techniques et organisationnelles 
                appropriées pour protéger vos informations personnelles contre tout accès non autorisé, 
                altération, divulgation ou destruction.
              </p>
              <p>
                Nos systèmes utilisent des technologies de cryptage avancées et sont régulièrement 
                audités pour garantir leur sécurité.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                4. Partage des informations
              </h2>
              <p className="mb-4">
                Nous ne vendons, ne louons, ni ne partageons vos informations personnelles avec des 
                tiers, sauf dans les cas suivants :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Avec votre consentement explicite</li>
                <li>Avec nos partenaires financiers pour traiter vos transactions</li>
                <li>Pour respecter nos obligations légales</li>
                <li>Pour protéger nos droits et notre sécurité</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                5. Vos droits
              </h2>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                6. Contact
              </h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer 
                vos droits, contactez-nous à : <strong>privacy@fazag.fr</strong> ou par courrier à 
                l'adresse suivante : 123 Avenue des Affaires, 75001 Paris, France.
              </p>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;