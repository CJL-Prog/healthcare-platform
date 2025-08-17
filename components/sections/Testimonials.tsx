'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import Card from '../ui/Card'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = TESTIMONIALS[currentIndex]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real results from real patients</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "{currentTestimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{currentTestimonial.name}</p>
                <p className="text-sm text-gray-600">{currentTestimonial.program}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{currentTestimonial.results}</p>
              </div>
            </div>
          </Card>
          <div className="flex justify-center mt-6 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}