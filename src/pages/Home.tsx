import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Target, Users } from 'lucide-react';

const features = [
  {
    name: 'IA Conversationnelle',
    description: 'Un chatbot intelligent qui comprend et répond naturellement à vos clients.',
    icon: Bot,
  },
  {
    name: 'Collecte de Leads',
    description: 'Capturez et qualifiez automatiquement vos prospects.',
    icon: Users,
  },
  {
    name: 'Campagnes Marketing',
    description: "Créez et optimisez vos campagnes publicitaires avec l'IA.",
    icon: Target,
  },
  {
    name: 'Support Client 24/7',
    description: 'Un assistant virtuel disponible en permanence pour vos clients.',
    icon: MessageSquare,
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transformez votre Service Client</span>
            <span className="block text-primary-400">avec l'Intelligence Artificielle</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            ProspéAI vous aide à automatiser votre service client, collecter des leads qualifiés et optimiser vos campagnes marketing grâce à l'IA.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <Link
                to="/register"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Commencer l'essai gratuit
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                to="/pricing"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Fonctionnalités</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Une solution complète pour votre entreprise
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Découvrez comment ProspéAI peut transformer votre relation client et booster vos ventes.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;