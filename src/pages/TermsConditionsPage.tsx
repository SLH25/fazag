import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-fazag-bg-light dark:bg-fazag-bg-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollReveal>
          <SectionHeader
            title="Conditions Générales d'Utilisation"
            subtitle="Dernière mise à jour : Janvier 2024"
          />
        </ScrollReveal>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
          <ScrollReveal delay={200}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                1. Acceptation des conditions
              </h2>
              <p className="mb-4">
                En utilisant les services de FAZAG BUSINESS SARL, vous acceptez d'être lié par ces 
                conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, 
                veuillez ne pas utiliser nos services.
              </p>
              <p>
                Ces conditions peuvent être modifiées à tout moment. Nous vous encourageons à les 
                consulter régulièrement pour rester informé des mises à jour.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                2. Description des services
              </h2>
              <p className="mb-4">
                FAZAG BUSINESS SARL propose les services suivants :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Transfert d'argent rapide et sécurisé</li>
                <li>Change de devises aux taux compétitifs</li>
                <li>Paiement de factures internationales</li>
                <li>Assistance pour les démarches de visa</li>
              </ul>
              <p>
                Tous nos services sont fournis conformément aux réglementations en vigueur et 
                sous réserve de disponibilité.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                3. Obligations du client
              </h2>
              <p className="mb-4">
                En utilisant nos services, vous vous engagez à :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Fournir des informations exactes et complètes</li>
                <li>Présenter des documents d'identité valides</li>
                <li>Respecter les lois et réglementations applicables</li>
                <li>Ne pas utiliser nos services à des fins illégales</li>
                <li>Payer les frais de service applicables</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                4. Frais et tarification
              </h2>
              <p className="mb-4">
                Nos frais de service sont transparents et communiqués avant chaque transaction. 
                Les taux de change sont mis à jour en temps réel et peuvent varier selon les 
                conditions du marché.
              </p>
              <p>
                Tous les frais sont clairement indiqués avant la finalisation de votre transaction 
                et aucun frais caché ne sera appliqué.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                5. Limitation de responsabilité
              </h2>
              <p className="mb-4">
                FAZAG BUSINESS SARL s'engage à fournir ses services avec le plus grand soin. 
                Cependant, notre responsabilité est limitée aux montants directement liés à 
                la transaction concernée.
              </p>
              <p>
                Nous ne saurions être tenus responsables des dommages indirects, des pertes de 
                profits ou des préjudices consécutifs liés à l'utilisation de nos services.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                6. Résolution des litiges
              </h2>
              <p className="mb-4">
                En cas de litige, nous nous engageons à rechercher une solution amiable. 
                Vous pouvez nous contacter via :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Email : Fazagtransfert@gmail.com</li>
                <li>Téléphone : (+237) 691 352 540</li>
                <li>Téléphone : (+237) 621 307 374</li>
                <li>Adresse : Akwa Douala, Cameroun</li>
              </ul>
              <p>
                À défaut d'accord amiable, tout litige sera soumis aux tribunaux compétents de Paris.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
                7. Droit applicable
              </h2>
              <p>
                Ces conditions générales sont régies par le droit français. Toute disposition 
                qui serait jugée invalide n'affectera pas la validité des autres dispositions.
              </p>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;