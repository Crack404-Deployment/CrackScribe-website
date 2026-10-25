import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen bg-[#000000] pt-32 pb-20 relative overflow-hidden">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-purple-900/[0.05] to-transparent blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
          
          {/* Page Header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow"></span>
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Legal Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 text-sm font-mono">
              Last Updated: October 25, 2026
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-12 text-gray-400 font-light leading-relaxed animate-fade-in-up delay-100">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the CrackScribe mobile application ("App"), developed by CRACK404 ("we", "us", or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App. These Terms apply to all users of the App, including without limitation users who are browsers, creators, and contributors of content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">2. User-Generated Content and Media</h2>
              <p className="mb-4">
                CrackScribe allows you to import, record, edit, and export audio and video files ("User Content"). 
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Ownership:</strong> You retain all ownership rights to your User Content. CRACK404 does not claim ownership over the media you process through the App.</li>
                <li><strong>On-Device Processing:</strong> Features such as the Native Engine for Noise Wash and Silence Trimming process data locally on your device. We do not upload, store, or monitor your private media files on our servers without explicit action from you.</li>
                <li><strong>Responsibility:</strong> You are solely responsible for ensuring you have the necessary rights, licenses, and permissions to use and edit the media you import into the App.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">3. Google Play Store & Subscriptions</h2>
              <p>
                CrackScribe is distributed via the Google Play Store. Any in-app purchases, subscriptions, or billing are handled entirely by Google Play's billing system. We do not collect or store your credit card information. By making a purchase, you agree to Google Play's Terms of Service. Refund requests must be routed through the Google Play Store console in accordance with their policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">4. AI Features & Accuracy Disclaimer</h2>
              <p>
                CrackScribe utilizes Artificial Intelligence (AI) for features such as Auto-Captions and Transcriptions. While we strive for high accuracy:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>We do not guarantee 100% accuracy of AI-generated text, transcriptions, or audio isolation.</li>
                <li>You are responsible for reviewing and editing any AI-generated subtitles or transcripts before exporting or publishing your final media.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">5. Acceptable Use Policy</h2>
              <p>
                You agree not to use CrackScribe to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Process or distribute illegal, explicit, or copyright-infringing material.</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code or AI models from the Native Engine.</li>
                <li>Bypass any security or licensing features implemented within the App.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, CRACK404 shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data (including corrupted media files during export), use, goodwill, or other intangible losses, resulting from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect via an in-app notification or app store update log. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact the Crack404 support team at <a href="mailto:contact.support@crack404.com" className="text-white hover:text-blue-400 transition-colors underline decoration-white/30 underline-offset-4">contact.support@crack404.com</a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}