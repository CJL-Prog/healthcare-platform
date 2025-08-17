'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const pricingPlans = [
  {
    id: 'essential',
    name: 'Essential',
    price: 179,
    billing: 'Billed quarterly',
    description: 'Perfect for starting out',
    features: [
      'Initial health assessment',
      'Basic peptide therapy',
      'Monthly check-ins',
      'Email support',
      'Basic lab work',
    ],
    popular: false,
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive',
    price: 359,
    billing: 'Monthly billing',
    description: 'Most popular plan',
    features: [
      'Everything in Essential',
      'Advanced peptide protocols',
      'Bi-weekly consultations',
      'Priority support',
      'Comprehensive lab panels',
      'Nutrition planning',
    ],
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 539,
    billing: 'Monthly billing',
    description: 'Concierge-level care',
    features: [
      'Everything in Comprehensive',
      'Unlimited consultations',
      '24/7 concierge support',
      'Advanced diagnostics',
      'Custom medications',
      'Personal health coach',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('comprehensive')

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Plans</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your health journey</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="primary">Most Popular</Badge>
                </div>
              )}
              <Card hover className={`h-full flex flex-col ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/mo</span>
                  </div>
                  <p className="text-sm text-gray-500">{plan.billing}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-900 to-blue-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? '✓ Selected' : 'Choose Plan'}
                </button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}