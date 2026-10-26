import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen bg-transparent pt-36 md:pt-48 pb-24 relative overflow-hidden">
        
        {/* Premium Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00aaff] opacity-10 blur-[150px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Page Header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00aaff]/10 border border-[#00aaff]/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-[#00aaff] uppercase font-bold">Legal Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
              Terms of Service for <span className="text-gradient-cyan">CrackScribe</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-mono uppercase tracking-widest">
              Effective Date: <span className="text-gray-300">October 26, 2026</span>
            </p>
          </div>

          {/* Legal Content Body */}
          <div className="space-y-16 text-gray-400 font-light leading-relaxed animate-fade-in-up delay-100 text-base md:text-lg">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the CrackScribe mobile application ("App"), developed by Crack404 ("we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">2. Description of Service</h2>
              <p>
                CrackScribe is an offline-first AI audio and video toolkit. It provides features such as AI noise reduction, audio-to-text transcription, automated subtitle generation, format conversion, and video editing. Because the App processes data locally on your device, the performance and accuracy of these features may vary depending on your device's hardware capabilities and the quality of the media provided.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">3. User Conduct and Responsibilities</h2>
              <div className="p-6 md:p-8 rounded-2xl bg-[#03090c] border border-white/5 shadow-lg">
                <p className="mb-6 text-sm md:text-base">You are solely responsible for the media (audio, video, images, and text) that you import, process, and export using CrackScribe. By using the App, you agree that you will not:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded bg-[#00aaff]/10 flex items-center justify-center flex-shrink-0 border border-[#00aaff]/20">
                      <svg className="w-3 h-3 text-[#00aaff]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                    </div>
                    <span className="text-sm md:text-base">Process or distribute content that infringes upon the copyrights, trademarks, or intellectual property rights of others.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded bg-[#00c6dd]/10 flex items-center justify-center flex-shrink-0 border border-[#00c6dd]/20">
                      <svg className="w-3 h-3 text-[#00c6dd]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    </div>
                    <span className="text-sm md:text-base">Use the App to transcribe, record, or manipulate audio without the consent of the recorded parties, where required by applicable law.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded bg-[#00f0b5]/10 flex items-center justify-center flex-shrink-0 border border-[#00f0b5]/20">
                      <svg className="w-3 h-3 text-[#00f0b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                    </div>
                    <span className="text-sm md:text-base">Reverse engineer, decompile, or attempt to extract the source code or underlying AI models of the App.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">4. Intellectual Property Rights</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">A. Your Content</h3>
                  <p>You retain all ownership rights to the media you import into and export from the App. Crack404 claims no ownership over your original files, processed files, or generated transcripts.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">B. Our App</h3>
                  <p>The App, including its original code, design, and branding, is the intellectual property of Crack404. The App also utilizes open-source AI models and libraries (provided under the MIT License), the rights of which belong to their respective original authors.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">5. Third-Party Services and APIs</h2>
              <p className="mb-4">While the core AI processing is offline, CrackScribe integrates certain third-party services:</p>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#00aaff] text-sm md:text-base">
                <li><strong className="text-gray-200">Jamendo API:</strong> The App uses the Jamendo API to allow you to search for and download background music. Your use of this music is subject to Jamendo’s terms and licensing restrictions.</li>
                <li><strong className="text-gray-200">Google AdMob:</strong> We use Google AdMob to serve advertisements within the App. Your interaction with these ads is subject to Google’s terms and policies.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">6. Data Loss and Backups</h2>
              <p>
                CrackScribe is strictly an offline tool. We do not sync, upload, or back up your media, projects, or transcripts to any cloud servers. You are solely responsible for exporting and backing up your processed files to your device's storage. Crack404 is not liable for any data loss resulting from app uninstallation, device failure, storage corruption, or app crashes.
              </p>
            </section>

            {/* Section 7 - Disclaimer Block */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">7. Disclaimer of Warranties</h2>
              <div className="bg-[#010406] border border-white/10 rounded-xl overflow-hidden shadow-inner">
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Legal Disclaimer</span>
                </div>
                <div className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm font-mono text-gray-400 leading-relaxed uppercase">
                  The App is provided on an "as-is" and "as-available" basis. Crack404 disclaims all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the AI transcription will be 100% accurate, that noise reduction will remove all artifacts, or that the App will be error-free or uninterrupted.
                </div>
              </div>
            </section>

            {/* Section 8 - Limitation Block */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">8. Limitation of Liability</h2>
              <div className="bg-[#010406] border border-white/10 rounded-xl overflow-hidden shadow-inner">
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Liability Limit</span>
                </div>
                <div className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm font-mono text-gray-400 leading-relaxed uppercase">
                  To the maximum extent permitted by law, in no event shall Crack404 or its partners be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, use, or goodwill, arising out of or in connection with your use of the App.
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes by updating the "Effective Date" at the top of this document. Your continued use of the App following any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Section 11 */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">11. Contact Information</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <div className="bg-[#03090c] border border-[#00aaff]/20 rounded-2xl p-6 md:p-8 inline-block shadow-[0_10px_30px_rgba(0,170,255,0.05)]">
                <h3 className="text-white font-bold text-xl mb-4">Crack404</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00aaff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:contact.support@crack404.com" className="text-gray-300 hover:text-[#00aaff] transition-colors underline decoration-white/20 underline-offset-4">
                      contact.support@crack404.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00aaff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    <a href="https://www.crack404.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00aaff] transition-colors underline decoration-white/20 underline-offset-4">
                      https://www.crack404.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}