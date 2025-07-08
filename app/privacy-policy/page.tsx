// app/privacy-policy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-5xl mt-20 mx-auto px-4 py-8 font-sans text-gray-200 mt">
      <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy outlines how <strong className="text-white">Purbayan Properties Limited</strong> (“we”, “us”, “our”) collects, uses, and protects the personal information of visitors and customers interacting with our website and services, including Purbayan City housing project.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">1. Information We Collect</h2>
      <p className="mb-4">We may collect the following types of information from you:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Name, phone number, and email address</li>
        <li>Mailing/billing address and national ID (if applicable)</li>
        <li>Payment information such as bank details or pay-order/cheque details</li>
        <li>Property interest (plot category, katha size, etc.)</li>
        <li>Communication records (calls, messages, queries)</li>
        <li>Website usage data (IP address, browser type, cookies, etc.)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>To process plot allotments and payment verification</li>
        <li>To provide customer support and project updates</li>
        <li>To send legal documents like allotment letters and contracts</li>
        <li>To improve our services and marketing efforts</li>
        <li>To comply with government or legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">3. Payment and Financial Data</h2>
      <p className="mb-4">
        All plot payments must be made via DD, pay-order, or cheque in favor of Purbayan Properties Limited. We do not store any sensitive financial information directly on our servers.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">4. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to safeguard your personal information. However, no online transmission can be guaranteed to be 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">5. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party tools for analytics and communication, but we do not sell or trade your personal data to any third parties for marketing purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">6. Data Retention</h2>
      <p className="mb-4">
        We retain your information as long as necessary for providing services, fulfilling contracts, or complying with legal obligations. Upon full plot handover and registration, some data may be archived securely for future reference or compliance.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">7. Your Rights</h2>
      <p className="mb-4">
        You have the right to request access, correction, or deletion of your personal information by contacting us via the methods below.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">8. Policy Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. The updated version will be posted on this page with the new revision date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">9. Contact Information</h2>
      <p className="mb-4">If you have any questions or concerns about this policy, please contact:</p>
      <ul className="list-none space-y-1 mb-4">
        <li><strong className="text-white">Corporate Office:</strong> Sumsun Place, 5th Floor, House #35, Road #07, Block #G, Banani, Dhaka -1213</li>
        <li><strong className="text-white">Site Office:</strong> Purbachal Purbayan City, Gutulia, Rupganj, Narayanganj</li>
        <li><strong className="text-white">Email:</strong> <a href="mailto:support@purbayanbd.com" className="text-blue-400 underline">support@purbayanbd.com</a></li>
        <li><strong className="text-white">Phone:</strong> 01841 398 560, 01841 011 970, 01806 426 113</li>
      </ul>

      <p className="text-sm text-gray-400 mt-6">Last updated: July 8, 2025</p>
    </div>
  );
}
