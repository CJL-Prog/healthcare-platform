import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By using HealthClinic services, you agree to these Terms of Service and our Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Medical Services</h2>
          <p className="text-gray-600 mb-4">
            Our services are provided by licensed healthcare providers. We do not provide emergency medical services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Telehealth Consent</h2>
          <p className="text-gray-600 mb-4">
            By using our platform, you consent to receiving healthcare services via telehealth technology.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
          <p className="text-gray-600 mb-4">
            Payment is due at the time of service. We accept major credit cards and HSA/FSA cards.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
          <p className="text-gray-600">
            For questions about these terms, contact us at:
            <br />Email: legal@healthclinic.com
            <br />Phone: 1-800-HEALTH-1
          </p>
        </div>
      </div>
    </div>
  )
}