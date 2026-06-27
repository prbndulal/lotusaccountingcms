import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Lotus Accounting Services</title>
        <meta name="description" content="Terms of Service for Lotus Accounting Services. Read our terms and conditions for using our accounting, taxation, and business advisory services." />
        <link rel="canonical" href="https://lotusaccounting.com.au/terms-of-service" />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Terms of Service</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: 28 June 2026</p>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website and services provided by Lotus Accounting Services ("we", "us", "our"),
                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Services</h2>
              <p>
                Lotus Accounting Services is a Public Practice firm providing accounting, taxation, bookkeeping, payroll,
                business advisory, and related financial services. Our services are subject to applicable Australian laws
                and professional standards. Liability is limited by a scheme approved under Professional Standards Legislation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Professional Advice</h2>
              <p>
                The information provided on this website is general in nature and does not constitute professional advice.
                You should not rely on any information on this website as an alternative to professional accounting, taxation,
                or financial advice. We recommend you consult with our team or another qualified professional before making
                any financial decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Client Obligations</h2>
              <p>
                Clients engaging our services are required to provide accurate and complete information in a timely manner.
                We rely on the information provided to us and are not responsible for any errors or omissions resulting from
                inaccurate or incomplete information supplied by the client.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Fees and Payment</h2>
              <p>
                Fees for our services will be communicated to you prior to the commencement of work. Payment terms are as
                agreed upon in our engagement letter or service agreement. We reserve the right to charge interest on
                overdue accounts as permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Lotus Accounting
                Services and is protected by Australian and international copyright laws. You may not reproduce, distribute,
                or use any content from this website without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Lotus Accounting Services shall not be liable for any indirect,
                incidental, special, or consequential damages arising from the use of our website or services. Our total
                liability shall not exceed the fees paid for the specific services giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Confidentiality</h2>
              <p>
                We are committed to maintaining the confidentiality of all client information. We will not disclose your
                information to third parties except as required by law, with your consent, or as necessary to provide our
                services to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Website Use</h2>
              <p>
                You agree to use this website for lawful purposes only. You must not use this website in any way that may
                cause damage to the website or impair its availability or accessibility, or in any way that is unlawful,
                illegal, fraudulent, or harmful.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting to this website. Your continued use of our website and services after any changes constitutes
                your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of Queensland, Australia.
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Queensland.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfService;
