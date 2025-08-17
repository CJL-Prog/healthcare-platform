'use client'

import { HelpCircle } from 'lucide-react'
import Accordion from '../ui/Accordion'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our services</p>
        </div>
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  )
}