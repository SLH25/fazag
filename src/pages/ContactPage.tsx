import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import AnimatedButton from '../components/AnimatedButton';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Add your form submission logic
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['(+237) 691 352 540', '(+237) 621 307 374'],
      description: 'Du lundi au samedi, 9h-18h'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Fazagtransfert@gmail.com'],
      description: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Akwa Douala', 'Cameroun'],
      description: 'Ouvert du lundi au samedi'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Ven: 9h-18h', 'Sam: 9h-13h'],
      description: 'Fermé le dimanche'
    }
  ];

  const subjects = [
    'Transfert d\'argent',
    'Change de devises',
    'Paiement de factures',
    'Assistance visa',
    'Information générale',
    'Support technique',
    'Autre'
  ];

  return (
    <div className="min-h-screen bg-fazag-bg-light dark:bg-fazag-bg-dark">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-fazag-green-500 to-fazag-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos projets financiers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-fazag-green-100 dark:bg-fazag-green-400/20">
                    <info.icon className="w-6 h-6 text-fazag-green-500 dark:text-fazag-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-fazag-dark-blue dark:text-fazag-light-grey mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300 mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {info.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Envoyez-nous un message"
            subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-fazag-dark-blue dark:text-fazag-light-grey mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-fazag-dark-blue dark:text-fazag-light-grey focus:ring-2 focus:ring-fazag-green-500 dark:focus:ring-fazag-green-400 focus:border-transparent transition-colors duration-200"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-fazag-dark-blue dark:text-fazag-light-grey mb-2">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-fazag-dark-blue dark:text-fazag-light-grey focus:ring-2 focus:ring-fazag-green-500 dark:focus:ring-fazag-green-400 focus:border-transparent transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-fazag-dark-blue dark:text-fazag-light-grey mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-fazag-dark-blue dark:text-fazag-light-grey focus:ring-2 focus:ring-fazag-green-500 dark:focus:ring-fazag-green-400 focus:border-transparent transition-colors duration-200"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-fazag-dark-blue dark:text-fazag-light-grey mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-fazag-dark-blue dark:text-fazag-light-grey focus:ring-2 focus:ring-fazag-green-500 dark:focus:ring-fazag-green-400 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-fazag-dark-blue dark:text-fazag-light-grey mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-fazag-dark-blue dark:text-fazag-light-grey focus:ring-2 focus:ring-fazag-green-500 dark:focus:ring-fazag-green-400 focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <AnimatedButton type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </AnimatedButton>
              </form>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={200}>
              <div className="h-full min-h-[500px]">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-full flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3200741156743896!3d48.85837597928748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sfr!4v1635959663932!5m2!1sen!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.75rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FAZAG Business Location"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Questions fréquentes"
            subtitle="Trouvez rapidement les réponses à vos questions"
          />
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Quels sont vos horaires d'ouverture ?",
                answer: "Nous sommes ouverts du lundi au vendredi de 9h à 18h, et le samedi de 9h à 13h. Notre service client en ligne est disponible 6 jours sur 7."
              },
              {
                question: "Combien de temps prend un transfert d'argent ?",
                answer: "La plupart de nos transferts sont instantanés ou prennent quelques minutes. Pour certaines destinations, cela peut prendre jusqu'à 24h."
              },
              {
                question: "Quels documents dois-je fournir ?",
                answer: "Pour la plupart des services, une pièce d'identité valide suffit. Pour les gros montants, des justificatifs supplémentaires peuvent être demandés."
              },
              {
                question: "Vos services sont-ils sécurisés ?",
                answer: "Absolument. Nous utilisons les dernières technologies de cryptage et respectons toutes les réglementations financières en vigueur."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-fazag-dark-blue dark:text-fazag-light-grey mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;