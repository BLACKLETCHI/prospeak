import React from 'react';
import { MessageSquare, Mail, Phone, FileText } from 'lucide-react';

const faqs = [
  {
    question: "Comment intégrer le chatbot sur mon site web ?",
    answer: "L'intégration est simple : copiez le code JavaScript fourni dans votre tableau de bord et collez-le dans votre site web. Le chatbot s'affichera automatiquement.",
  },
  {
    question: "Comment personnaliser l'apparence du chatbot ?",
    answer: "Vous pouvez personnaliser les couleurs, l'avatar et le style du chatbot depuis votre tableau de bord dans la section 'Configuration du Chatbot'.",
  },
  {
    question: "Comment entraîner le chatbot avec mes données ?",
    answer: "Importez vos documents (PDF, CSV, FAQ) dans la section 'Apprentissage' de votre tableau de bord. Le chatbot apprendra automatiquement de ces données.",
  },
  {
    question: "Comment gérer les leads collectés ?",
    answer: "Tous les leads sont accessibles dans la section 'Leads' de votre tableau de bord. Vous pouvez les exporter, les qualifier et les suivre.",
  },
];

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Contact */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Support et Aide
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Nous sommes là pour vous aider à réussir avec ProspéAI
          </p>
        </div>

        {/* Options de Contact */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <MessageSquare className="h-6 w-6 text-primary-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Chat en direct</h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              Discutez avec notre équipe en temps réel pour obtenir une aide immédiate.
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
              Démarrer le chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-primary-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Email</h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              Envoyez-nous un email, nous vous répondrons sous 24h.
            </p>
            <a
              href="mailto:support@prospeai.com"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Envoyer un email
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-primary-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Documentation</h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              Consultez notre documentation détaillée et nos guides.
            </p>
            <a
              href="/docs"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Voir la documentation
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900">Questions Fréquentes</h2>
          <div className="mt-6 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-base text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;