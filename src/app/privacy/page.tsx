import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen bg-[#000000] pt-32 pb-20 relative overflow-hidden">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-900/[0.05] to-transparent blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
          
          {/* Page Header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow"></span>
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">Legal Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm font-mono">
              Last Updated: October 25, 2026
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-12 text-gray-400 font-light leading-relaxed animate-fade-in-up delay-100">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">1. Introduction</h2>
              <p>
                At CRACK404 ("we", "our", or "us"), we respect your privacy and are committed to protecting it. This Privacy Policy explains how the CrackScribe mobile application ("App") handles your data, particularly your audio, video, and personal information, ensuring full compliance with global privacy standards and Google Play Store policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">2. On-Device Processing & Media Handling</h2>
              <p className="mb-4">
                CrackScribe is designed as a privacy-first, offline-capable AI studio. 
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Local AI Processing:</strong> Features such as AI Noise Wash, Silence Trimming, and Transcription utilize our Native Engine. This means your audio and video files are processed locally on your device's hardware.</li>
                <li><strong>No Cloud Storage of Media:</strong> We do not upload, collect, store, or share your raw or edited media files on our servers. Your creations remain 100% on your device unless you explicitly choose to share them via third-party apps.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">3. Device Permissions Required</h2>
              <p className="mb-4">
                To provide its core functionality, CrackScribe requires specific device permissions. We only access these features when actively used by you:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Microphone:</strong> Required exclusively when you choose to use the "Record New Audio" feature to capture voiceovers directly within the workspace.</li>
                <li><strong>Storage / Media:</strong> Required to import your existing audio/video files into the editor and to save your finalized, exported media back to your device gallery or file system.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">4. Data We Collect</h2>
              <p>
                Because CrackScribe processes media locally, we collect minimal data. We may collect anonymous, aggregated crash reports and app performance analytics (such as error logs) to help us improve the App's stability. This data contains no personally identifiable information (PII) or user media content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">5. Third-Party Services (Billing)</h2>
              <p>
                CrackScribe is distributed via the Google Play Store. Any premium features or subscriptions are processed securely by Google Play Billing. We do not have access to, nor do we store, your credit card details or billing addresses. Your payment data is subject to Google’s Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">6. Children's Privacy</h2>
              <p>
                Our App does not knowingly collect or solicit personal information from children under the age of 13. If you are under 13, please do not attempt to send any personal information about yourself to us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. We advise you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 tracking-tight">8. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at <a href="mailto:contact.support@crack404.com" className="text-white hover:text-blue-400 transition-colors underline decoration-white/30 underline-offset-4">contact.support@crack404.com</a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}