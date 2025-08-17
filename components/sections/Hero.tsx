'use client'

import { useState } from 'react'
import { ArrowRight, Shield, UserCheck, Lock, CreditCard, Award, Package } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 md:pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900">Feel Better.</span>
            <span className="block text-gray-900">Look Better.</span>
            <span className="block bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Live Better.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Personalized health solutions with cutting-edge peptide therapy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Your Health Assessment
              <ArrowRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}