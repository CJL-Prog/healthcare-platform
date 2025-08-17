// components/intake/AssessmentFlow.tsx
'use client'

import { useState } from 'react'
import { ArrowRight, Activity, Brain, Heart, Zap } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'

interface AssessmentFlowProps {
  onComplete: (data: any) => void
}

export default function AssessmentFlow({ onComplete }: AssessmentFlowProps) {
  const [step, setStep] = useState(1)
  const [assessmentData, setAssessmentData] = useState({
    goals: [],
    symptoms: [],
    lifestyle: {},
  })

  const healthGoals = [
    { id: 'energy', label: 'Boost Energy', Icon: Zap },
    { id: 'weight', label: 'Weight Loss', Icon: Activity },
    { id: 'hormones', label: 'Balance Hormones', Icon: Heart },
    { id: 'mental', label: 'Mental Clarity', Icon: Brain },
  ]

  const symptoms = [
    'Fatigue',
    'Weight Gain',
    'Poor Sleep',
    'Low Mood',
    'Brain Fog',
    'Low Libido',
    'Joint Pain',
    'Digestive Issues',
  ]

  const handleGoalSelection = (goalId: string) => {
    setAssessmentData(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter(g => g !== goalId)
        : [...prev.goals, goalId],
    }))
  }

  const handleSymptomSelection = (symptom: string) => {
    setAssessmentData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom],
    }))
  }

  const handleComplete = () => {
    onComplete(assessmentData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step >= num
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      {step === 1 && (
        <div>
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            What are your health goals?
          </h2>
          <p className="text-gray-600 mb-8">
            Select all that apply to personalize your treatment plan
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {healthGoals.map((goal) => (
              <Card
                key={goal.id}
                className={`cursor-pointer transition-all ${
                  assessmentData.goals.includes(goal.id)
                    ? 'ring-2 ring-primary bg-primary/5'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => handleGoalSelection(goal.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    assessmentData.goals.includes(goal.id)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <goal.Icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {goal.label}
                  </span>
                </div>
              </Card>
            ))}
          </div>
          
          <Button
            variant="primary"
            onClick={() => setStep(2)}
            disabled={assessmentData.goals.length === 0}
            className="w-full"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Are you experiencing any of these symptoms?
          </h2>
          <p className="text-gray-600 mb-8">
            This helps us better understand your health needs
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-8">
            {symptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() => handleSymptomSelection(symptom)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  assessmentData.symptoms.includes(symptom)
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              onClick={() => setStep(1)}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={() => setStep(3)}
              className="flex-1"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Almost done! Let's create your account
          </h2>
          <p className="text-gray-600 mb-8">
            We'll use this to save your assessment and connect you with a provider
          </p>
          
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              onClick={() => setStep(2)}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleComplete}
              className="flex-1"
            >
              Complete Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}