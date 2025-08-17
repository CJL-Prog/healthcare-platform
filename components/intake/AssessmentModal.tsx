'use client'

import Modal from '../ui/Modal'

interface AssessmentModalProps {
  onClose: () => void
}

export default function AssessmentModal({ onClose }: AssessmentModalProps) {
  return (
    <Modal isOpen={true} onClose={onClose} title="Start Your Health Journey">
      <p className="text-gray-600 mb-6">
        Complete a quick 3-minute assessment to get your personalized health plan
      </p>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Continue to Assessment
        </button>
      </div>
    </Modal>
  )
}