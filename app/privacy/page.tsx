import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, including name, email, phone number, 
            and health information necessary for providing our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use your information to provide medical services, communicate with you, 
            and improve our services. We never sell your personal information.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. HIPAA Compliance</h2>
          <p className="text-gray-600 mb-4">
            We are fully HIPAA compliant and protect your protected health information (PHI) 
            according to federal regulations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy, please contact us at:
            <br />Email: privacy@healthclinic.com
            <br />Phone: 1-800-HEALTH-1
          </p>
        </div>
      </div>
    </div>
  )
}