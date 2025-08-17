'use client'

import Link from 'next/link'
import { Zap, Activity, TrendingDown, FileText, Check, ChevronRight } from 'lucide-react'
import Card from '../ui/Card'

const services = [
  {
    id: 'metabolic',
    title: 'Metabolic Reset',
    description: 'Optimize your metabolism and energy levels',
    Icon: Zap,
    color: 'from-blue-500 to-purple-600',
    features: ['Energy optimization', 'Metabolic health', 'Cellular repair'],
    link: '/services/metabolic-reset'
  },
  {
    id: 'hormone',
    title: 'Hormone Optimization',
    description: 'Balance hormones for better wellness',
    Icon: Activity,
    color: 'from-purple-500 to-pink-600',
    features: ['HRT therapy', 'Bioidentical hormones', 'Regular monitoring'],
    link: '/services/hormone-optimization'
  },
  {
    id: 'weight',
    title: 'Weight Transformation',
    description: 'GLP-1 therapy for weight management',
    Icon: TrendingDown,
    color: 'from-green-500 to-teal-600',
    features: ['GLP-1 medications', 'Nutrition guidance', 'Progress tracking'],
    link: '/services/weight-transformation'
  },
  {
    id: 'diagnostics',
    title: 'Advanced Diagnostics',
    description: 'Comprehensive health monitoring',
    Icon: FileText,
    color: 'from-teal-500 to-blue-600',
    features: ['Full panel testing', 'Quarterly reviews', 'Personalized insights'],
    link: '/services/diagnostics'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Health</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions tailored to your unique needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} hover gradient={service.color}>
              <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                <service.Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={service.link}
                className="text-blue-600 font-semibold flex items-center hover:text-blue-700 group"
              >
                Learn More
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}