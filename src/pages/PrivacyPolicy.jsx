import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Lotus Accounting Services</title>
        <meta name="description" content="Privacy Policy for Lotus Accounting Services. Learn how we collect, use, and protect your personal information in compliance with Australian privacy laws." />
        <link rel="canonical" href="https://lotusaccounting.com.au/privacy-policy" />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>

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

            {/* Our Commitment to Privacy */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Commitment to Privacy</h2>
              <p className="mb-3">
                Lotus Accounting Services ("Lotus," "we," "us," or "our") is committed to protecting your privacy and
                handling your personal information in a transparent and secure manner.
              </p>
              <p className="mb-2">We comply with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The <strong>Privacy Act 1988 (Cth)</strong></li>
                <li>The <strong>Australian Privacy Principles (APPs)</strong></li>
                <li>The <strong>Tax Agent Services Act 2009 (TASA)</strong></li>
                <li>Applicable state and territory privacy laws</li>
              </ul>
              <p className="mt-3">
                As a professional accounting firm, we are bound by strict confidentiality and professional conduct obligations.
                Liability is limited by a scheme approved under Professional Standards Legislation.
              </p>
            </div>

            {/* What Information We Collect */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">What Information We Collect</h2>
              <p className="mb-4">We collect personal and business information necessary to provide our services. This may include:</p>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Tax File Number (TFN)</li>
                <li>Address</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Bank account details</li>
                <li>Identification documents (e.g., driver licence, passport)</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Business Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Australian Business Number (ABN)</li>
                <li>Australian Company Number (ACN)</li>
                <li>Business structure details</li>
                <li>Financial statements</li>
                <li>Payroll data</li>
                <li>Superannuation details</li>
                <li>Employee records</li>
                <li>Trust deeds and company constitutions</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Financial & Transaction Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Payment details</li>
                <li>Invoice history</li>
                <li>Transaction records</li>
                <li>Tax return data</li>
                <li>Superannuation contributions</li>
                <li>Investment and capital gains information</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Digital & Technical Information</h3>
              <p className="mb-2">When you use our website or online tools, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser type</li>
                <li>Website interaction data</li>
                <li>Cookies and usage analytics</li>
              </ul>
            </div>

            {/* How We Collect Your Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">How We Collect Your Information</h2>
              <p className="mb-2">We collect information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Directly from you (via meetings, emails, forms, phone calls)</li>
                <li>Through our website and contact forms</li>
                <li>Through cloud accounting software (e.g., Xero, QuickBooks, MYOB)</li>
                <li>From government bodies such as the ATO or ASIC</li>
                <li>From third parties with your authority (banks, brokers, financial advisers)</li>
              </ul>
              <p className="mt-3">If you do not provide required information, we may be unable to provide certain services.</p>
            </div>

            {/* Why We Collect Your Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Why We Collect Your Information</h2>
              <p className="mb-4">We collect, use, and disclose your information to:</p>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Provide Accounting & Tax Services</h3>
              <p className="mb-2">Including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Income tax return preparation and lodgement</li>
                <li>BAS/GST lodgement</li>
                <li>Payroll & superannuation compliance</li>
                <li>SMSF administration</li>
                <li>Business advisory & structuring</li>
                <li>Bookkeeping services</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Meet Legal & Regulatory Obligations</h3>
              <p className="mb-2">Including compliance with:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Australian Taxation Office (ATO)</li>
                <li>ASIC</li>
                <li>Tax Practitioners Board (TPB)</li>
                <li>Superannuation regulators</li>
                <li>Anti-Money Laundering requirements</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Maintain Professional Relationship</h3>
              <p className="mb-2">To:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Communicate updates</li>
                <li>Provide tax alerts and newsletters</li>
                <li>Offer service updates</li>
                <li>Send appointment reminders</li>
              </ul>
              <p>You may opt out of marketing communications at any time.</p>
            </div>

            {/* Disclosure of Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Disclosure of Information</h2>
              <p className="mb-3 font-medium text-gray-800">We do not sell your personal information.</p>
              <p className="mb-2">We may disclose your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Australian Taxation Office (ATO)</li>
                <li>ASIC</li>
                <li>Superannuation funds</li>
                <li>Banks or financial institutions (with your authority)</li>
                <li>Our professional advisers (lawyers, auditors)</li>
                <li>Cloud software providers</li>
                <li>IT and data hosting providers</li>
              </ul>
            </div>

            {/* Storage and Security */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Storage and Security</h2>
              <p className="mb-3">We take reasonable steps to protect your information from:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Misuse</li>
                <li>Interference</li>
                <li>Loss</li>
                <li>Unauthorised access</li>
                <li>Modification</li>
                <li>Disclosure</li>
              </ul>
              <p className="mb-2">Security measures include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Secure cloud storage</li>
                <li>Encrypted systems</li>
                <li>Secure client portals</li>
                <li>Password-protected databases</li>
                <li>Restricted staff access</li>
                <li>Ongoing IT monitoring</li>
              </ul>
              <p>Despite best efforts, no data transmission over the internet can be guaranteed 100% secure.</p>
            </div>

            {/* Tax Agent Confidentiality */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Tax Agent Confidentiality Obligations</h2>
              <p>
                As professional accountants bound by the <strong>Tax Agent Services Act 2009</strong> and the Code of Professional Conduct,
                we cannot disclose your confidential information to a third party without your authority, unless legally required to do so.
              </p>
            </div>

            {/* Direct Marketing */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Direct Marketing</h2>
              <p className="mb-2">We may use your contact details to send:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Tax updates</li>
                <li>Business insights</li>
                <li>Service announcements</li>
              </ul>
              <p className="mb-2">You may unsubscribe at any time by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Clicking the unsubscribe link in any email</li>
                <li>Emailing us at{' '}
                  <a href="mailto:info@lotusaccounting.com.au" className="text-[#C41E3A] hover:underline">info@lotusaccounting.com.au</a>
                </li>
                <li>Contacting our office</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Cookies & Website Tracking</h2>
              <p className="mb-2">Our website may use cookies to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Improve user experience</li>
                <li>Track website traffic</li>
                <li>Analyse visitor behaviour</li>
              </ul>
              <p>You may disable cookies in your browser settings. Disabling cookies may affect the functionality of our website.</p>
            </div>

            {/* Access and Correction */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Access and Correction of Information</h2>
              <p>
                You may request access to your personal information by contacting us. If any information is incorrect
                or outdated, we will take reasonable steps to correct it promptly.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">How Long We Keep Your Information</h2>
              <p className="mb-2">We retain your information:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>As long as required by law</li>
                <li>As required under taxation record-keeping obligations</li>
                <li>As necessary to provide ongoing services</li>
                <li>To resolve disputes or enforce agreements</li>
              </ul>
              <p>Generally, tax-related records are retained for a minimum of 5–7 years.</p>
            </div>

            {/* Data Breach */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Data Breach Notification</h2>
              <p className="mb-2">In the event of an eligible data breach under the Notifiable Data Breaches Scheme, we will:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Notify affected individuals</li>
                <li>Notify the Office of the Australian Information Commissioner (OAIC)</li>
                <li>Take immediate steps to mitigate harm</li>
              </ul>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Complaints</h2>
              <p className="mb-3">If you believe your privacy has been breached, you may contact us:</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm space-y-1">
                <p className="font-medium text-gray-800">Privacy Officer</p>
                <p>Lotus Accounting Services</p>
                <p>Email:{' '}
                  <a href="mailto:info@lotusaccounting.com.au" className="text-[#C41E3A] hover:underline">info@lotusaccounting.com.au</a>
                </p>
                <p>Phone:{' '}
                  <a href="tel:0412305150" className="text-[#C41E3A] hover:underline">0412 305 150</a>
                </p>
              </div>
              <p>
                If you are not satisfied with our response, you may contact the{' '}
                <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{' '}
                <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#C41E3A] hover:underline">
                  www.oaic.gov.au
                </a>.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always be available on our website.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
