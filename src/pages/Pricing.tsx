import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essai gratuit',
    price: '0€',
    duration: 'pendant 14 jours',
    features: [
      'Intégration sur un site',
      'Intégration sur les RS',
      '40 réponses Chatbot IA',
      '10 leads qualifiés',
      '1 campagne social ads',
      '10 fichiers d\'entraînements',
    ],
    cta: 'Commencer l\'essai gratuit',
    href: '/register',
  },
  {
    name: 'Standard',
    price: '49€',
    duration: 'par mois',
    features: [
      'Intégration sur un site',
      'Intégration sur les RS',
      '1500 réponses Chatbot IA',
      '15 leads qualifiés',
      '5 campagnes social ads',
      '50 fichiers d\'entraînements',
      '0,04€/réponse supplémentaire',
    ],
    cta: 'Choisir Standard',
    href: '/register?plan=standard',
  },
  {
    name: 'Premium',
    price: '99€',
    duration: 'par mois',
    features: [
      'Intégration sur un site',
      'Intégration sur les RS',
      '5000 réponses Chatbot IA',
      '50 leads qualifiés',
      '10 campagnes social ads',
      '200 fichiers d\'entraînements',
      '0,03€/réponse supplémentaire',
    ],
    cta: 'Choisir Premium',
    href: '/register?plan=premium',
    highlighted: true,
  },
  {
    name: 'Entreprise',
    price: '199€',
    duration: 'par mois',
    features: [
      'Intégration sur un site',
      'Intégration sur les RS',
      '15000 réponses Chatbot IA',
      '200 leads qualifiés',
      '20 campagnes social ads',
      '500 fichiers d\'entraînements',
      'Support premium',
      'Intégration sur mesure',
      '0,02€/réponse supplémentaire',
    ],
    cta: 'Contacter les ventes',
    href: '/contact',
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Des tarifs adaptés à vos besoins
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choisissez le plan qui correspond le mieux à votre activité
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border ${
                plan.highlighted
                  ? 'border-primary-600 shadow-md'
                  : 'border-gray-200'
              } p-8 shadow-sm`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-600">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-sm text-gray-500">{plan.duration}</span>
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 shrink-0" />
                    <span className="ml-3 text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                className={`block w-full rounded-md px-3 py-2 text-center text-sm font-semibold ${
                  plan.highlighted
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;