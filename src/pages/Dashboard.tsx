import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, MessageSquare, Users, Target, Settings, Upload, CreditCard, Bot, Palette } from 'lucide-react';

const stats = [
  { name: 'Réponses IA', value: '1,234', icon: MessageSquare },
  { name: 'Leads Qualifiés', value: '12', icon: Users },
  { name: 'Campagnes Actives', value: '3', icon: Target },
  { name: 'Taux de Conversion', value: '24%', icon: BarChart3 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [webLink, setWebLink] = useState('');
  const [chatbotConfig, setChatbotConfig] = useState({
    primaryColor: '#7C3AED',
    avatar: 'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    tone: 'professionnel',
    fields: {
      name: true,
      email: true,
      phone: true,
      company: true
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleConfigChange = (field: string, value: any) => {
    setChatbotConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFieldToggle = (field: string) => {
    setChatbotConfig(prev => ({
      ...prev,
      fields: {
        ...prev.fields,
        [field]: !prev.fields[field as keyof typeof prev.fields]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'overview'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Vue d'ensemble
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'config'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Configuration
              </button>
              <button
                onClick={() => setActiveTab('subscription')}
                className={`px-4 py-2 rounded-md ${
                  activeTab === 'subscription'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Abonnement
              </button>
            </div>
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Statistiques */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                            <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Graphiques et tendances */}
              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Activité du Chatbot</h3>
                  <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                    <span className="text-gray-500">Graphique d'activité</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Conversion des Leads</h3>
                  <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                    <span className="text-gray-500">Graphique de conversion</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'config' && (
            <div className="space-y-8">
              {/* Apparence du Chatbot */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Palette className="h-5 w-5 mr-2 text-primary-600" />
                  Apparence du Chatbot
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Couleur principale</label>
                    <input
                      type="color"
                      value={chatbotConfig.primaryColor}
                      onChange={(e) => handleConfigChange('primaryColor', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Avatar du Chatbot</label>
                    <div className="mt-1 flex items-center space-x-4">
                      <img
                        src={chatbotConfig.avatar}
                        alt="Avatar"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        Changer
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tonalité des réponses</label>
                    <select
                      value={chatbotConfig.tone}
                      onChange={(e) => handleConfigChange('tone', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="professionnel">Professionnel</option>
                      <option value="amical">Amical</option>
                      <option value="formel">Formel</option>
                      <option value="decontracte">Décontracté</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Champs à collecter */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-primary-600" />
                  Champs à collecter
                </h3>
                <div className="space-y-4">
                  {Object.entries(chatbotConfig.fields).map(([field, enabled]) => (
                    <div key={field} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={() => handleFieldToggle(field)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900 capitalize">
                        {field}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Importation de données */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-primary-600" />
                  Importation de données
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fichiers d'entraînement</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                            <span>Télécharger un fichier</span>
                            <input
                              type="file"
                              className="sr-only"
                              onChange={handleFileChange}
                              accept=".pdf,.csv,.txt"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PDF, CSV jusqu'à 10MB</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Lien web</label>
                    <div className="mt-1">
                      <input
                        type="url"
                        value={webLink}
                        onChange={(e) => setWebLink(e.target.value)}
                        placeholder="https://example.com"
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Importer les données
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'subscription' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-primary-600" />
                Votre Abonnement
              </h3>
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900">Plan Premium</h4>
                    <p className="text-primary-700">99€/mois</p>
                  </div>
                  <span className="px-3 py-1 text-sm text-primary-700 bg-primary-100 rounded-full">
                    Actif
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Réponses IA utilisées</span>
                  <span className="font-medium">1,234 / 5,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Leads qualifiés</span>
                  <span className="font-medium">12 / 50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Campagnes actives</span>
                  <span className="font-medium">3 / 10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/pricing"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Mettre à niveau mon abonnement
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;