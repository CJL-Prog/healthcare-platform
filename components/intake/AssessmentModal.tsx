// components/intake/AssessmentModal.tsx
'use client'

import { useState } from 'react'
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

interface AssessmentModalProps {
  onClose: () => void
}

const assessmentSteps = [
  {
    id: 'personal',
    title: 'Personal Information',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
    ],
  },
  {
    id: 'health-goals',
    title: 'Health Goals',
    subtitle: 'What brings you to HealthClinic?',
    options: [
      'Increase Energy & Vitality',
      'Weight Loss & Management',
      'Hormone Optimization',
      'Improve Sleep Quality',
      'Enhanced Athletic Performance',
      'Anti-Aging & Longevity',
      'Mental Clarity & Focus',
      'General Wellness',
    ],
  },
  {
    id: 'medical-history',
    title: 'Medical History',
    subtitle: 'Do you have any of the following conditions?',
    options: [
      'Diabetes',
      'Heart Disease',
      'High Blood Pressure',
      'Thyroid Disorders',
      'Depression/Anxiety',
      'Sleep Disorders',
      'None of the Above',
    ],
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Assessment',
    fields: [
      { 
        name: 'activityLevel', 
        label: 'Activity Level', 
        type: 'select',
        options: ['Sedentary', 'Light Activity', 'Moderate Activity', 'Very Active'],
      },
      { 
        name: 'sleepHours', 
        label: 'Average Hours of Sleep', 
        type: 'select',
        options: ['Less than 5', '5-6 hours', '7-8 hours', 'More than 8'],
      },
      { 
        name: 'stressLevel', 
        label: 'Stress Level', 
        type: 'select',
        options: ['Low', 'Moderate', 'High', 'Very High'],
      },
    ],
  },
]

export default function AssessmentModal({ onClose }: AssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<any>({})
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleNext = () => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit assessment
      console.log('Assessment submitted:', { ...formData, selections: selectedOptions })
      onClose()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleOptionToggle = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    )
  }

  const currentStepData = assessmentSteps[currentStep]
  const progress = ((currentStep + 1) / assessmentSteps.length) * 100

  return (
    <Modal isOpen={true} onClose={onClose} className="max-w-2xl">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-2xl overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="pt-4">
        {/* Step Counter */}
        <div className="text-sm text-gray-500 mb-4">
          Step {currentStep + 1} of {assessmentSteps.length}
        </div>

        {/* Step Title */}
        <h3 className="text-2xl font-bold text-neutral-dark mb-2">
          {currentStepData.title}
        </h3>
        {currentStepData.subtitle && (
          <p className="text-gray-600 mb-6">{currentStepData.subtitle}</p>
        )}

        {/* Step Content */}
        <div className="space-y-4 min-h-[300px]">
          {/* Form Fields */}
          {currentStepData.fields && currentStepData.fields.map(field => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  value={formData[field.name] || ''}
                >
                  <option value="">Select...</option>
                  {field.options?.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  value={formData[field.name] || ''}
                  required={field.required}
                />
              )}
            </div>
          ))}

          {/* Options Grid */}
          {currentStepData.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentStepData.options.map(option => (
                <button
                  key={option}
                  onClick={() => handleOptionToggle(option)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedOptions.includes(option)
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">{option}</span>
                    {selectedOptions.includes(option) && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={currentStep === 0 ? 'invisible' : ''}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button
            variant="primary"
            onClick={handleNext}
          >
            {currentStep === assessmentSteps.length - 1 ? 'Submit Assessment' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Modal>
  )
}