'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Activity, Check, ArrowRight, Star, Heart, Brain,
  Shield, Moon, Smile, Zap, TrendingUp, Users,
  ChevronRight, Award, Phone, Sparkles
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Accordion from '@/components/ui/Accordion'

export default function HormoneOptimizationPage() {
  const [selectedProgram, setSelectedProgram] = useState('complete')

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Energy',
      description: 'Restore youthful energy levels and eliminate chronic fatigue'
    },
    {
      icon: Moon,
      title: 'Better Sleep',
      description: 'Deep, restorative sleep and improved recovery'
    },
    {
      icon: Brain,
      title: 'Mental Clarity',
      description: 'Enhanced focus, memory, and cognitive function'
    },
    {
      icon: Heart,
      title: 'Improved Libido',
      description: 'Restore healthy sex drive and performance'
    },
    {
      icon: Activity,
      title: 'Muscle & Strength',
      description: 'Build lean muscle and increase strength naturally'
    },
    {
      icon: Smile,
      title: 'Mood Balance',
      description: 'Stable moods and reduced anxiety or depression'
    }
  ]

  const hormones = [
    {
      name: 'Testosterone',
      for: 'Men & Women',
      benefits: ['Muscle mass', 'Energy', 'Libido', 'Bone density']
    },
    {
      name: 'Estrogen',
      for: 'Women',
      benefits: ['Mood stability', 'Skin health', 'Bone strength', 'Heart health']
    },
    {
      name: 'Progesterone',
      for: 'Women',
      benefits: ['Sleep quality', 'Anxiety relief', 'Menstrual regulation', 'Fertility']
    },
    {
      name: 'Thyroid (T3/T4)',
      for: 'Men & Women',
      benefits: ['Metabolism', 'Weight control', 'Energy', 'Temperature regulation']
    },
    {
      name: 'DHEA',
      for: 'Men & Women',
      benefits: ['Immune function', 'Stress response', 'Energy', 'Anti-aging']
    },
    {
      name: 'Growth Hormone',
      for: 'Men & Women',
      benefits: ['Recovery', 'Fat loss', 'Muscle growth', 'Skin elasticity']
    }
  ]

  const programs = [
    {
      id: 'essential',
      name: 'Essential HRT',
      duration: 'Monthly',
      price: 199,
      features: [
        'Basic hormone panel',
        'Testosterone or Estrogen therapy',
        'Monthly consultations',
        'Email support',
        'Basic monitoring'
      ]
    },
    {
      id: 'complete',
      name: 'Complete Balance',
      duration: 'Monthly',
      price: 399,
      popular: true,
      features: [
        'Comprehensive hormone panel',
        'Full hormone optimization',
        'Bi-weekly consultations',
        'Priority support',
        'Advanced monitoring',
        'Supplement protocol',
        'Lifestyle optimization',
        'Mobile app tracking'
      ]
    },
    {
      id: 'elite',
      name: 'Elite Performance',
      duration: 'Monthly',
      price: 599,
      features: [
        'Executive hormone panel',
        'Complete hormone stack',
        'Weekly consultations',
        '24/7 concierge support',
        'Peptide therapy included',
        'Nutrition planning',
        'Fitness programming',
        'Quarterly comprehensive labs',
        'Priority everything'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer D.',
      age: 42,
      gender: 'Female',
      result: 'Life-changing',
      quote: 'HRT gave me my life back. I feel better at 42 than I did at 30!'
    },
    {
      name: 'Robert T.',
      age: 55,
      gender: 'Male',
      result: 'Testosterone +300%',
      quote: 'My energy, strength, and confidence have completely transformed.'
    },
    {
      name: 'Lisa M.',
      age: 48,
      gender: 'Female',
      result: 'Hot flashes gone',
      quote: 'No more hot flashes, better sleep, and my mood is stable again.'
    }
  ]

  const faqs = [
    {
      question: 'Is hormone therapy safe?',
      answer: 'Yes, when properly supervised by experienced physicians. We use bioidentical hormones that are molecularly identical to what your body produces naturally. Regular monitoring ensures optimal and safe levels.'
    },
    {
      question: 'How long before I see results?',
      answer: 'Many patients report improved energy and mood within 2-3 weeks. Optimal results typically develop over 2-3 months as hormone levels stabilize.'
    },
    {
      question: 'Will I need to be on hormones forever?',
      answer: 'Hormone optimization is typically a long-term therapy, as it replaces hormones your body no longer produces adequately. However, you can stop at any time under medical supervision.'
    },
    {
      question: 'What are bioidentical hormones?',
      answer: 'Bioidentical hormones are exact molecular copies of the hormones your body naturally produces. They are derived from plant sources and customized to your specific needs.'
    },
    {
      question: 'How often do I need blood work?',
      answer: 'Initially, we test every 6-8 weeks to optimize your protocol. Once stable, most patients require labs every 3-6 months.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="bg-purple-500/20 text-purple-200 mb-4">
                Bioidentical HRT
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Hormone Optimization Therapy
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Restore your body's hormonal balance and reclaim the energy, vitality, 
                and well-being of your younger years with personalized bioidentical hormone therapy.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>Bioidentical Hormones</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>For Men & Women</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>Expert Physicians</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  Get Hormone Assessment
                  <ArrowRight className="inline ml-2" size={20} />
                </button>
                <button className="px-8 py-4 bg-purple-800/50 backdrop-blur text-white font-semibold rounded-xl hover:bg-purple-800/70 transition-all">
                  <Phone className="inline mr-2" size={20} />
                  Free Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Common Symptoms We Treat
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Fatigue', 'Weight Gain', 'Low Libido', 'Brain Fog', 'Hot Flashes', 'Mood Swings', 'Poor Sleep', 'Hair Loss'].map((symptom) => (
                    <div key={symptom} className="flex items-center text-purple-100">
                      <Sparkles className="w-4 h-4 mr-2 text-purple-300" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Restore Your Hormonal Balance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of optimized hormone levels 
              with our personalized bioidentical hormone replacement therapy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hormones We Optimize */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hormones We Optimize
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive hormone replacement tailored to your unique needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hormones.map((hormone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {hormone.name}
                  </h3>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    {hormone.for}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {hormone.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hormone Optimization Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect program for your hormonal health journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.id} className="relative">
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="primary" className="shadow-lg bg-purple-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card 
                  hover 
                  className={`h-full flex flex-col ${
                    program.popular ? 'ring-2 ring-purple-500' : ''
                  } ${selectedProgram === program.id ? 'bg-purple-50' : ''}`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{program.duration}</p>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${program.price}
                      </span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedProgram(program.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      program.popular
                        ? 'bg-gradient-to-r from-purple-900 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {selectedProgram === program.id ? '✓ Selected' : 'Select Program'}
                  </button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life-Changing Results
            </h2>
            <p className="text-xl text-gray-600">
              Hear from patients who've transformed their lives with HRT
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.gender}, Age {testimonial.age}
                    </p>
                  </div>
                  <Badge variant="success" className="bg-green-100 text-green-800">
                    {testimonial.result}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hormone Therapy FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about HRT
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your Hormone Optimization Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Take the first step toward feeling like yourself again
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              Get Free Assessment
              <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="px-8 py-4 bg-purple-800/30 backdrop-blur border border-white/20 text-white font-semibold rounded-xl hover:bg-purple-800/50 transition-all">
              Download HRT Guide
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Safe & Effective</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Expert Physicians</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>10K+ Patients</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}