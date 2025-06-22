import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {  Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fazag-dark-blue dark:bg-gray-950 text-fazag-light-grey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-32 h-32 group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="FAZAG Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
          </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins financiers internationaux. 
              Transferts rapides, change de devises et assistance visa.
            </p>
          </div>

          {/* Services Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/transfert-argent" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  Transfert d'argent
                </Link>
              </li>
              <li>
                <Link to="/services/change-devises" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  Change de devises
                </Link>
              </li>
              <li>
                <Link to="/services/paiement-factures" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  Paiement de factures
                </Link>
              </li>
              <li>
                <Link to="/services/assistance-visa" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  Assistance visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm opacity-80 hover:text-fazag-green-400 hover:opacity-100 transition-all duration-200">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-fazag-green-400" />
                <span className="text-sm opacity-80">(+237) 691 352 540</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-fazag-green-400" />
                <span className="text-sm opacity-80">(+237) 621 307 374</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-fazag-green-400" />
                <span className="text-sm opacity-80">Fazagtransfert@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-fazag-green-400 mt-0.5" />
                <span className="text-sm opacity-80">
                  Akwa Douala<br />
                  Cameroun
                </span>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Suivez-nous</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-fazag-green-500 dark:bg-fazag-green-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <FaFacebookF className="w-4 h-4 text-white dark:text-fazag-dark-blue" />
                </a>
                <a href="#" className="w-8 h-8 bg-fazag-green-500 dark:bg-fazag-green-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <FaTwitter className="w-4 h-4 text-white dark:text-fazag-dark-blue" />
                </a>
                <a href="#" className="w-8 h-8 bg-fazag-green-500 dark:bg-fazag-green-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <FaLinkedinIn className="w-4 h-4 text-white dark:text-fazag-dark-blue" />
                </a>
                <a href="#" className="w-8 h-8 bg-fazag-green-500 dark:bg-fazag-green-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <FaInstagram className="w-4 h-4 text-white dark:text-fazag-dark-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {currentYear} FAZAG BUSINESS SARL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;