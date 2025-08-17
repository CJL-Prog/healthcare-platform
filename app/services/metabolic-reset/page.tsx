'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Zap, Check, ArrowRight, Star, Clock, Shield, 
  Activity, Brain, Heart, Flame, Battery, TrendingUp,
  ChevronRight, Users, Award, Phone
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Accordion from '@/components/ui/Accordion'

export default function MetabolicResetPage() {
  const [selectedPackage, setSelectedPackage] = useState('standard')

  const benefits = [
    {
      icon: Battery,
      title: 'Sustained Energy',
      description: 'Experience 80% more energy throughout your day without crashes'
    },
    {
      icon: Flame,
      title: 'Enhanced Fat Burning',
      description: 'Optimize your metabolism to burn fat more efficiently'
    },
    {
      icon: Brain,
      title: 'Mental Clarity',
      description: 'Improve focus, memory, and cognitive performance'
    },
    {
      icon: Activity,
      title: 'Better Recovery',
      description: 'Faster muscle recovery and reduced inflammation'
    },
    {
      icon: Heart,
      title: 'Cardiovascular Health',
      description: 'Improve heart health markers and blood pressure'
    },
    {
      icon: TrendingUp,
      title: 'Anti-Aging Benefits',
      description: 'Cellular regeneration and longevity support'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Comprehensive Assessment',
      description: 'Complete metabolic panel and health history review'
    },
    {
      step: '2',
      title: 'Personalized Protocol',
      description: 'Custom peptide selection based on your unique needs'
    },
    {
      step: '3',
      title: 'Monthly Optimization',
      description: 'Regular monitoring and protocol adjustments'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Direct access to your care team for questions'
    }
  ]

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      duration: '1 Month',
      price: 299,
      features: [
        'Basic metabolic panel',
        'CJC-1295 or BPC-157 peptide',
        'Monthly consultation',
        'Email support',
        'Basic nutrition guide'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      duration: '3 Months',
      price: 249,
      popular: true,
      features: [
        'Comprehensive metabolic panel',
        'Choice of 2 peptides',
        'Bi-weekly consultations',
        'Priority support',
        'Custom nutrition plan',
        'Progress tracking app',
        'Supplement recommendations'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      duration: '6 Months',
      price: 199,
      features: [
        'Advanced metabolic testing',
        'Full peptide stack (3-4)',
        'Weekly consultations',
        '24/7 concierge support',
        'Personalized meal plans',
        'Fitness programming',
        'Quarterly lab reviews',
        'Priority shipping'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'David K.',
      age: 45,
      result: 'Energy +85%',
      quote: 'After 6 weeks, I feel like I\'m in my 20s again. My energy lasts all day!'
    },
    {
      name: 'Sarah M.',
      age: 38,
      result: 'Lost 18 lbs',
      quote: 'The metabolic reset changed everything. Weight came off naturally.'
    },
    {
      name: 'Mike R.',
      age: 52,
      result: 'Recovery 2x Faster',
      quote: 'My gym recovery is incredible. I\'m setting PRs at 52!'
    }
  ]

  const faqs = [
    {
      question: 'What peptides are used in the Metabolic Reset?',
      answer: 'We use FDA-compliant peptides including CJC-1295, Ipamorelin, BPC-157, and TB-500. Your specific protocol is customized based on your labs and goals.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most patients report increased energy within 7-10 days. Significant metabolic improvements typically occur within 3-4 weeks, with optimal results at 8-12 weeks.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'Peptides are generally well-tolerated. Minor side effects may include temporary fatigue, mild nausea, or injection site reactions. Our medical team monitors you closely.'
    },
    {
      question: 'How are peptides administered?',
      answer: 'Most peptides are administered via small subcutaneous injections using insulin syringes. We provide complete training and support for self-administration.'
    },
    {
      question: 'Can I combine this with other treatments?',
      answer: 'Yes! The Metabolic Reset works synergistically with hormone optimization and weight loss programs. Your provider will create an integrated protocol.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="bg-blue-500/20 text-blue-200 mb-4">
                Peptide Therapy
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Metabolic Reset Program
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Unlock your body's natural ability to burn fat, build muscle, and sustain 
                all-day energy with cutting-edge peptide therapy.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>80% Energy Increase</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>FDA-Compliant</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>Physician Supervised</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  Start Free Assessment
                  <ArrowRight className="inline ml-2" size={20} />
                </button>
                <button className="px-8 py-4 bg-blue-800/50 backdrop-blur text-white font-semibold rounded-xl hover:bg-blue-800/70 transition-all">
                  <Phone className="inline mr-2" size={20} />
                  Schedule Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">85%</div>
                    <div className="text-blue-200">Energy Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">2-4</div>
                    <div className="text-blue-200">Weeks to Results</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">15K+</div>
                    <div className="text-blue-200">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">4.9</div>
                    <div className="text-blue-200">Patient Rating</div>
                  </div>
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
              Transform Your Metabolism
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our peptide protocols target multiple metabolic pathways to optimize 
              your body's natural fat-burning and energy production systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Optimal Metabolism
            </h2>
            <p className="text-xl text-gray-600">
              A proven 4-step process to reset your metabolic health
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -translate-x-4"></div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Metabolic Reset Package
            </h2>
            <p className="text-xl text-gray-600">
              Flexible programs designed to fit your goals and timeline
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.id} className="relative">
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="primary" className="shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card 
                  hover 
                  className={`h-full flex flex-col ${
                    pkg.popular ? 'ring-2 ring-blue-500' : ''
                  } ${selectedPackage === pkg.id ? 'bg-blue-50' : ''}`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{pkg.duration}</p>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${pkg.price}
                      </span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-900 to-blue-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {selectedPackage === pkg.id ? '✓ Selected' : 'Select Package'}
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
              Real Results from Real Patients
            </h2>
            <p className="text-xl text-gray-600">
              See how the Metabolic Reset has transformed lives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50">
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
                    <p className="text-sm text-gray-600">Age {testimonial.age}</p>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the Metabolic Reset
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Reset Your Metabolism?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands who have transformed their energy and health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              Start Your Assessment
              <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="px-8 py-4 bg-blue-800/30 backdrop-blur border border-white/20 text-white font-semibold rounded-xl hover:bg-blue-800/50 transition-all">
              Learn More
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Board Certified</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>15K+ Patients</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}