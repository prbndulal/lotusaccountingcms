import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Lotus Accounting Services</title>
        <meta name="description" content="Terms of Use for Lotus Accounting Services. Read our terms and conditions governing the use of our website and professional accounting, taxation, and business advisory services." />
        <link rel="canonical" href="https://lotusaccounting.com.au/terms-of-service" />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Terms of Use</h1>

          <div className="mt-4 mb-10 text-sm text-gray-600 space-y-1">
            <p><strong className="text-gray-800">Lotus Accounting Services</strong></p>
            <p><strong>Website:</strong>{' '}
              <a href="https://lotusaccounting.com.au" className="text-[#C41E3A] hover:underline">www.lotusaccounting.com.au</a>
            </p>
            <p><strong>Email:</strong>{' '}
              <a href="mailto:info@lotusaccounting.com.au" className="text-[#C41E3A] hover:underline">info@lotusaccounting.com.au</a>
            </p>
            <p><strong>Phone:</strong>{' '}
              <a href="tel:0412305150" className="text-[#C41E3A] hover:underline">0412 305 150</a>
            </p>
            <p className="text-gray-500">Last Updated: 28.06.2026</p>
          </div>

          <div className="space-y-10 text-gray-600 leading-relaxed">

            {/* Introduction */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h2>
              <p className="mb-3">
                These Terms of Use ("Terms"), together with our Engagement Letter and{' '}
                <Link to="/privacy-policy" className="text-[#C41E3A] hover:underline">Privacy Policy</Link>,
                govern your use of our website and any professional services provided by Lotus Accounting Services ("Lotus," "we," "us," "our").
              </p>
              <p className="mb-3">
                By accessing our website or engaging our services, you agree to be bound by these Terms.
              </p>
              <p>
                If there is any inconsistency between these Terms and an Engagement Letter, the Engagement Letter prevails.
              </p>
            </div>

            {/* Our Services */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Services</h2>
              <p className="mb-3">
                We provide accounting, taxation, business advisory, SMSF, payroll, bookkeeping, GST filing, financial planning,
                and related professional services as outlined in your Engagement Letter.
              </p>
              <p>
                We will perform our services with reasonable skill and care in accordance with applicable professional standards.
                Liability is limited by a scheme approved under Professional Standards Legislation.
              </p>
            </div>

            {/* Your Obligations */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Obligations</h2>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Provide complete and accurate information</li>
                <li>Provide timely access to records, systems and staff</li>
                <li>Notify us immediately if information becomes inaccurate</li>
                <li>Retain responsibility for decisions made based on our advice</li>
                <li>Pay our fees in accordance with agreed terms</li>
              </ul>
              <p>We are entitled to rely on information provided by you without independently verifying it.</p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Confidentiality</h2>
              <p className="mb-2">
                Both parties agree to maintain strict confidentiality of all information obtained during the engagement,
                except where disclosure is required:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By law</li>
                <li>By court order</li>
                <li>By regulatory authorities (ATO, ASIC, TPB)</li>
                <li>For internal compliance or risk management</li>
                <li>To protect legitimate business interests</li>
              </ul>
            </div>

            {/* Reliance on Advice */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Reliance on Advice</h2>
              <p className="mb-2">Advice provided by Lotus:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Is for your sole use</li>
                <li>Is based on the information you provide</li>
                <li>Must not be relied upon by third parties without written consent</li>
              </ul>
              <p className="mb-3">Oral or draft advice should not be relied upon unless confirmed in writing.</p>
              <p>We are not obligated to update advice for events occurring after issuance.</p>
            </div>

            {/* Electronic Communication */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Electronic Communication</h2>
              <p className="mb-2">If you request electronic transmission of documents:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>You accept risks associated with electronic transmission</li>
                <li>You release us from claims relating to unauthorised access post-transmission</li>
                <li>You acknowledge potential delays or non-delivery</li>
                <li>You accept risks of viruses or system damage</li>
              </ul>
              <p>Electronic advice is not to be relied upon unless confirmed in writing.</p>
            </div>

            {/* Fees & Payment Terms */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Fees & Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Fees are as stated in your Engagement Letter</li>
                <li>Fees may be reviewed periodically</li>
                <li>GST is payable in addition to fees</li>
                <li>Payment terms are 14 days unless otherwise agreed</li>
                <li>Interest may apply on overdue accounts</li>
                <li>We may suspend services for unpaid fees</li>
              </ul>
              <p>
                You are responsible for reimbursing professional time and expenses if we are legally required to produce
                documents or attend proceedings relating to your matter.
              </p>
            </div>

            {/* Suspension & Termination */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Suspension & Termination</h2>
              <p className="mb-2">Either party may terminate the agreement if:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>A material breach occurs</li>
                <li>Insolvency arises</li>
                <li>Services are suspended for unpaid fees</li>
              </ul>
              <p className="mb-3">
                We may terminate immediately if changes in law or professional standards prevent continued service.
              </p>
              <p>Termination does not affect accrued rights or outstanding payments.</p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h2>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-800 text-sm">
                  Liability limited by a scheme approved under Professional Standards Legislation.
                </p>
              </div>
              <p className="mb-2">To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>We exclude liability for indirect or consequential loss</li>
                <li>We exclude liability for loss of profits or data</li>
                <li>Our liability is limited to the amount permitted under the applicable professional standards scheme</li>
              </ul>
              <p className="mb-3">
                Where a professional standards scheme does not apply, liability is limited to ten (10) times the professional
                fees paid for the services giving rise to the claim.
              </p>
              <p>Nothing in these Terms excludes liability that cannot be excluded by law.</p>
            </div>

            {/* Indemnity */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Indemnity</h2>
              <p className="mb-2">You indemnify Lotus against losses, claims or liabilities arising from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>False, misleading or incomplete information provided by you</li>
                <li>Third-party reliance on advice provided to you</li>
                <li>Breach of your obligations under this Agreement</li>
              </ul>
            </div>

            {/* Website Use & Digital Services */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Website Use & Digital Services</h2>
              <p className="mb-2">You must not:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Attempt to breach website security</li>
                <li>Introduce malicious software</li>
                <li>Access unauthorised systems</li>
                <li>Reverse engineer software</li>
                <li>Misuse any tools or resources on our website</li>
              </ul>
              <p>Any tools or calculators on our website provide estimates only and must not be relied upon as professional advice.</p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Intellectual Property</h2>
              <p className="mb-2">All content, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Website materials</li>
                <li>Templates</li>
                <li>Branding</li>
                <li>Reports</li>
                <li>Documents</li>
              </ul>
              <p className="mb-3">remain the property of Lotus Accounting Services or its licensors.</p>
              <p className="mb-3">You may not reproduce or commercially exploit any content without written consent.</p>
              <p>You retain ownership of your data but grant us a licence to use, store and back up your data for service delivery purposes.</p>
            </div>

            {/* Data & Backup */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Data & Backup</h2>
              <p className="mb-3">You must maintain your own backup copies of data.</p>
              <p className="mb-3">
                While we implement best-practice backup procedures, we do not guarantee against data loss.
              </p>
              <p>We are not liable for data loss unless caused by gross negligence or wilful misconduct.</p>
            </div>

            {/* Third-Party Applications */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Applications</h2>
              <p className="mb-2">
                If you use third-party applications in conjunction with our services (e.g., Xero, QuickBooks, MYOB):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You acknowledge such providers may access your data</li>
                <li>We are not responsible for data disclosure or loss caused by third parties</li>
              </ul>
            </div>

            {/* Privacy */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Privacy</h2>
              <p>
                We comply with the Privacy Act 1988 (Cth) and Australian Privacy Principles. Please refer to our{' '}
                <Link to="/privacy-policy" className="text-[#C41E3A] hover:underline">Privacy Policy</Link>{' '}
                for full details.
              </p>
            </div>

            {/* Force Majeure */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Force Majeure</h2>
              <p className="mb-2">
                We are not liable for failure to perform obligations due to events beyond reasonable control, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Natural disasters</li>
                <li>Government actions</li>
                <li>Cyber incidents</li>
                <li>Infrastructure failures</li>
                <li>Pandemic or emergency restrictions</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Governing Law</h2>
              <p className="mb-3">
                These Terms are governed by the laws of the State of Queensland, Australia.
              </p>
              <p>You submit to the exclusive jurisdiction of Queensland courts.</p>
            </div>

            {/* Variation */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Variation</h2>
              <p className="mb-2">No variation of these Terms is valid unless:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmed in writing by both parties, or</li>
                <li>Accepted electronically in connection with updated service offerings</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
              <p className="mb-3">If you have any questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1">
                <p className="font-medium text-gray-800">Lotus Accounting Services</p>
                <p>39 Venture Dr, Griffin QLD 4503</p>
                <p>Email:{' '}
                  <a href="mailto:info@lotusaccounting.com.au" className="text-[#C41E3A] hover:underline">info@lotusaccounting.com.au</a>
                </p>
                <p>Phone:{' '}
                  <a href="tel:0412305150" className="text-[#C41E3A] hover:underline">0412 305 150</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
