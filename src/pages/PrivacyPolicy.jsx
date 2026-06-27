import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Lotus Accounting Services</title>
        <meta name="description" content="Privacy Policy for Lotus Accounting Services. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://lotusaccounting.com.au/privacy-policy" />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: 28 June 2026</p>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
              <p>
                Lotus Accounting Services ("we", "us", "our") is committed to protecting your privacy and personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, address, email address, and phone number</li>
                <li>Tax file number (TFN) and Australian Business Number (ABN)</li>
                <li>Financial information including income, expenses, assets, and liabilities</li>
                <li>Employment and business details</li>
                <li>Bank account and payment information</li>
                <li>Any other information necessary to provide our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Collect Information</h2>
              <p>We collect personal information through:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Direct interactions — when you contact us, fill in forms, or engage our services</li>
                <li>Our website — through contact forms and appointment bookings</li>
                <li>Third parties — such as the Australian Taxation Office (ATO), financial institutions, or other professionals acting on your behalf</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accounting, taxation, and business advisory services</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Lodge returns and documents with the ATO and other government bodies</li>
                <li>Process payments and manage billing</li>
                <li>Improve our services and website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Disclosure of Information</h2>
              <p>We may disclose your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The Australian Taxation Office and other government authorities as required</li>
                <li>Financial institutions and superannuation funds</li>
                <li>Third-party service providers who assist us in delivering our services</li>
                <li>Professional advisers and auditors</li>
                <li>Any party as required by law or court order</li>
              </ul>
              <p className="mt-3">We will not sell, rent, or trade your personal information to any third party for marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Security</h2>
              <p>
                We take reasonable steps to protect your personal information from misuse, interference, loss,
                unauthorised access, modification, or disclosure. Our security measures include secure file storage,
                password protection, and restricted access to personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and comply with
                legal obligations. Tax records and related documents are retained for a minimum of five years as required
                by Australian tax law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Cookies and Website Analytics</h2>
              <p>
                Our website may use cookies and similar technologies to improve your browsing experience and analyse
                website traffic. You can control cookies through your browser settings. Disabling cookies may affect
                the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Your Rights</h2>
              <p>Under the Australian Privacy Principles, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or outdated information</li>
                <li>Request deletion of your information where it is no longer required</li>
                <li>Opt out of marketing communications</li>
                <li>Make a complaint about how we handle your personal information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Complaints</h2>
              <p>
                If you believe we have breached the Australian Privacy Principles, you can lodge a complaint with us.
                We will investigate and respond within 30 days. If you are not satisfied with our response, you may
                lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at{' '}
                <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#C41E3A] hover:underline">
                  www.oaic.gov.au
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at{' '}
                <a href="mailto:info@lotusaccounting.com.au" className="text-[#C41E3A] hover:underline">
                  info@lotusaccounting.com.au
                </a>{' '}
                or call us on{' '}
                <a href="tel:0412305150" className="text-[#C41E3A] hover:underline">0412 305 150</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
