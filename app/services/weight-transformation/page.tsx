'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  TrendingDown, Check, ArrowRight, Star, Scale, Heart,
  Shield, Activity, Brain, Utensils, BarChart3, Target,
  ChevronRight, Award, Phone, Timer, Sparkles
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Accordion from '@/components/ui/Accordion'

export default function WeightTransformationPage() {
  const [selectedMedication, setSelectedMedication] = useState('semaglutide')

  const medications = [
    {
      id: 'semaglutide',
      name: 'Semaglutide',
      brand: 'Ozempic/Wegovy',
      avgLoss: '15-20%',
      description: 'The gold standard GLP-1 medication with proven results'
    },
    {
      id: 'tirzepatide',
      name: 'Tirzepatide',
      brand: 'Mounjaro/Zepbound',
      avgLoss: '20-25%',
      description: 'Dual GLP-1/GIP receptor agonist for enhanced weight loss'
    },
    {
      id: 'liraglutide',
      name: 'Liraglutide',
      brand: 'Saxenda',
      avgLoss: '10-15%',
      description: 'Daily injection with established safety profile'
    }
  ]

  const benefits = [
    {
      icon: Scale,
      title: 'Significant Weight Loss',
      description: 'Average 15-25% body weight reduction'
    },
    {
      icon: Utensils,
      title: 'Appetite Control',
      description: 'Naturally reduces hunger and cravings'
    },
    {
      icon: Heart,
      title: 'Heart Health',
      description: 'Improves cardiovascular markers'
    },
    {
      icon: Activity,
      title: 'Increased Energy',
      description: 'More energy as weight decreases'
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Improved mood and confidence'
    },
    {
      icon: BarChart3,
      title: 'Metabolic Benefits',
      description: 'Better blood sugar control'
    }
  ]

  const faqs = [
    {
      question: 'How do GLP-1 medications work?',
      answer: 'GLP-1 medications mimic a natural hormone that regulates appetite and blood sugar, leading to reduced hunger and natural weight loss.'
    },
    {
      question: 'What are the side effects?',
      answer: 'Common side effects include mild nausea, which typically improves within a few weeks. Our medical team helps manage any side effects.'
    },
    {
      question: 'How much weight will I lose?',
      answer: 'Most patients lose 15-25% of their body weight over 6-12 months. Individual results vary based on starting weight and lifestyle factors.'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Weight Transformation Program</h1>
        <p className="text-xl text-gray-600 mb-8">
          Achieve sustainable weight loss with FDA-approved GLP-1 medications and expert support.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {medications.map((med) => (
            <Card 
              key={med.id} 
              hover 
              className={selectedMedication === med.id ? 'ring-2 ring-green-500' : ''}
              onClick={() => setSelectedMedication(med.id)}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{med.name}</h3>
              <Badge variant="secondary" className="mb-4">{med.brand}</Badge>
              <p className="text-3xl font-bold text-green-600 mb-4">{med.avgLoss}</p>
              <p className="text-gray-600">{med.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform More Than Your Weight</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-green-600" />
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

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            Start Your Weight Loss Journey
            <ArrowRight className="inline ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}