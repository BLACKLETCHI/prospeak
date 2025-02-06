import React, { useState } from 'react';
import { Plus, BarChart2, Target, Users, Trash2, Edit2, ChevronDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface Campaign {
  id: number;
  name: string;
  status: 'active' | 'draft' | 'planned' | 'completed';
  budget: string;
  leads: number;
  conversions: string;
  startDate: string;
  endDate?: string;
  target: string;
  performance: 'up' | 'down' | 'stable';
  improvement?: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Campagne Printemps 2024",
    status: "active",
    budget: "1500€",
    leads: 45,
    conversions: "12%",
    startDate: "2024-03-01",
    target: "Entrepreneurs 25-45 ans",
    performance: "up",
    improvement: "Augmentez le budget de 20% pour maximiser les résultats",
  },
  {
    id: 2,
    name: "Promotion Été",
    status: "draft",
    budget: "2000€",
    leads: 0,
    conversions: "0%",
    startDate: "2024-06-01",
    target: "Décideurs IT",
    performance: "stable",
  },
  {
    id: 3,
    name: "Black Friday 2024",
    status: "planned",
    budget: "5000€",
    leads: 0,
    conversions: "0%",
    startDate: "2024-11-24",
    target: "Tous profils",
    performance: "stable",
  },
  {
    id: 4,
    name: "Campagne Hiver 2023",
    status: "completed",
    budget: "3000€",
    leads: 78,
    conversions: "15%",
    startDate: "2023-12-01",
    endDate: "2024-02-28",
    target: "PME",
    performance: "down",
    improvement: "Ciblez davantage les secteurs qui ont le mieux performé",
  },
];

const Campaigns = () => {
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    budget: '',
    target: '',
    startDate: '',
  });

  const handleNewCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter la logique d'ajout
    setShowNewCampaign(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Campagnes Marketing
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Gérez vos campagnes publicitaires et suivez leurs performances
              </p>
            </div>
            <button
              onClick={() => setShowNewCampaign(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Nouvelle Campagne
            </button>
          </div>

          {/* Statistiques */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Target className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-500">Campagnes Actives</p>
                    <p className="text-lg font-semibold text-gray-900">3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-500">Total Leads</p>
                    <p className="text-lg font-semibold text-gray-900">123</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart2 className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-500">Taux de Conversion Moyen</p>
                    <p className="text-lg font-semibold text-gray-900">13.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des Campagnes */}
          <div className="mt-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {campaigns.map((campaign) => (
                  <li key={campaign.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-medium text-primary-600 truncate">
                            {campaign.name}
                          </h3>
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            campaign.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : campaign.status === 'draft'
                              ? 'bg-gray-100 text-gray-800'
                              : campaign.status === 'completed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {campaign.status === 'active'
                              ? 'Active'
                              : campaign.status === 'draft'
                              ? 'Brouillon'
                              : campaign.status === 'completed'
                              ? 'Terminée'
                              : 'Planifiée'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Edit2 className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500">
                            <Trash2 className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-500">
                            <ChevronDown className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <Target className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {campaign.target}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {campaign.leads} leads
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <BarChart2 className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            Conversion: {campaign.conversions}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>
                            Budget: {campaign.budget}
                          </p>
                        </div>
                      </div>
                      {campaign.improvement && (
                        <div className="mt-2 flex items-center">
                          {campaign.performance === 'up' ? (
                            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                          ) : campaign.performance === 'down' ? (
                            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                          ) : null}
                          <p className="text-sm text-gray-600">
                            {campaign.improvement}
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Nouvelle Campagne */}
      {showNewCampaign && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Nouvelle Campagne
                </h3>
                <form onSubmit={handleNewCampaign} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nom de la campagne
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={newCampaign.name}
                      onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                      Budget
                    </label>
                    <input
                      type="text"
                      name="budget"
                      id="budget"
                      value={newCampaign.budget}
                      onChange={(e) => setNewCampaign({...newCampaign, budget: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="target" className="block text-sm font-medium text-gray-700">
                      Cible
                    </label>
                    <input
                      type="text"
                      name="target"
                      id="target"
                      value={newCampaign.target}
                      onChange={(e) => setNewCampaign({...newCampaign, target: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                      Date de début
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={newCampaign.startDate}
                      onChange={(e) => setNewCampaign({...newCampaign, startDate: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:col-start-2 sm:text-sm"
                    >
                      Créer
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowNewCampaign(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;