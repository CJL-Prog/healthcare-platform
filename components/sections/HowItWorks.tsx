// components/sections/HowItWorks.tsx
'use client'

import { FileText, UserCheck, Package } from 'lucide-react'
import Card from '../ui/Card'

const steps = [
  {
    step: '01',
    title: 'Complete Assessment',
    description: '3-minute health questionnaire reviewed by our physicians',
    Icon: FileText,
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: '02',
    title: 'Provider Review',
    description: 'Board-certified physician creates your personalized plan within 24-48 hours',
    Icon: UserCheck,
    color: 'from-purple-500 to-purple-600',
  },
  {
    step: '03',
    title: 'Start Treatment',
    description: 'Medications delivered discreetly to your door, begin your transformation',
    Icon: Package,
    color: 'from-green-500 to-green-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-neutral-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Your journey to better health in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-y-1/2 z-0" />
              )}
              
              <Card hover className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-4`}>
                  <item.Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-300 mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}