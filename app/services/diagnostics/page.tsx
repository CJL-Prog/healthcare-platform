'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FileText, Check, ArrowRight, Star, Beaker, Heart,
  Shield, Activity, Brain, BarChart3, Target, Clock,
  ChevronRight, Award, Phone, Search, AlertCircle, Microscope
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Accordion from '@/components/ui/Accordion'

export default function DiagnosticsPage() {
  const [selectedPanel, setSelectedPanel] = useState('comprehensive')

  const labPanels = [
    {
      id: 'basic',
      name: 'Essential Panel',
      tests: 35,
      price: 149,
      description: 'Core health markers for general wellness',
      includes: ['CBC', 'Metabolic Panel', 'Lipids', 'Thyroid (TSH)', 'Vitamin D']
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Panel',
      tests: 75,
      price: 349,
      popular: true,
      description: 'Complete health assessment with hormone analysis',
      includes: ['Everything in Essential', 'Full Hormone Panel', 'Inflammatory Markers', 'Advanced Thyroid', 'Key Vitamins & Minerals', 'Insulin & Glucose']
    },
    {
      id: 'executive',
      name: 'Executive Panel',
      tests: 120,
      price: 599,
      description: 'Most thorough testing with cancer screening',
      includes: ['Everything in Comprehensive', 'Cancer Markers', 'Genetic Risk Factors', 'Heavy Metal Testing', 'Food Sensitivities', 'Micronutrient Analysis']
    }
  ]

  const categories = [
    {
      icon: Heart,
      title: 'Cardiovascular',
      markers: ['Cholesterol', 'Triglycerides', 'ApoB', 'Lp(a)', 'hs-CRP', 'Homocysteine']
    },
    {
      icon: Activity,
      title: 'Hormones',
      markers: ['Testosterone', 'Estrogen', 'Progesterone', 'Cortisol', 'DHEA', 'Thyroid Panel']
    },
    {
      icon: Brain,
      title: 'Metabolic',
      markers: ['Glucose', 'Insulin', 'HbA1c', 'Leptin', 'Adiponectin', 'Metabolic Panel']
    },
    {
      icon: Beaker,
      title: 'Nutrients',
      markers: ['Vitamin D', 'B12', 'Folate', 'Iron', 'Magnesium', 'Omega-3']
    },
    {
      icon: Shield,
      title: 'Immunity',
      markers: ['WBC', 'Immunoglobulins', 'CRP', 'ESR', 'ANA', 'Cytokines']
    },
    {
      icon: AlertCircle,
      title: 'Cancer Screening',
      markers: ['PSA', 'CEA', 'CA-125', 'AFP', 'CA 19-9', 'Beta-HCG']
    }
  ]

  const benefits = [
    {
      icon: Search,
      title: 'Early Detection',
      description: 'Identify health issues before symptoms appear'
    },
    {
      icon: Target,
      title: 'Personalized Insights',
      description: 'Understand your unique health profile'
    },
    {
      icon: BarChart3,
      title: 'Track Progress',
      description: 'Monitor improvements over time'
    },
    {
      icon: Brain,
      title: 'Informed Decisions',
      description: 'Make data-driven health choices'
    },
    {
      icon: Shield,
      title: 'Prevention Focus',
      description: 'Prevent disease before it starts'
    },
    {
      icon: Clock,
      title: 'Fast Results',
      description: '24-48 hour turnaround time'
    }
  ]

  const faqs = [
    {
      question: 'How often should I get comprehensive lab work?',
      answer: 'We recommend comprehensive testing annually for most adults, or every 6 months if you have chronic conditions.'
    },
    {
      question: 'Do I need to fast before testing?',
      answer: 'Most panels require 10-12 hours of fasting for accurate results. Water is always allowed.'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8">
          <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Advanced Diagnostics</h1>
        <p className="text-xl text-gray-600 mb-8">
          Get comprehensive health insights with advanced laboratory testing.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {labPanels.map((panel) => (
            <Card key={panel.id} hover className={panel.popular ? 'ring-2 ring-teal-500' : ''}>
              {panel.popular && <Badge variant="primary" className="mb-4">Most Popular</Badge>}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{panel.name}</h3>
              <p className="text-3xl font-bold text-teal-600 mb-4">${panel.price}</p>
              <p className="text-gray-600 mb-4">{panel.description}</p>
              <ul className="space-y-2">
                {panel.includes.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                Select Panel
              </button>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Advanced Testing?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <Accordion items={faqs} />
        </div>
      </div>
    </div>
  )
}