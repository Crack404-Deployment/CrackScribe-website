import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen bg-transparent pt-36 md:pt-48 pb-24 relative overflow-hidden">
        
        {/* Premium Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00f0b5] opacity-10 blur-[150px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Page Header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00f0b5] animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.15em] text-[#00f0b5] uppercase font-bold">Legal Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
              Privacy Policy for <span className="text-gradient-cyan">CrackScribe</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-mono uppercase tracking-widest">
              Effective Date: <span className="text-gray-300">October 26, 2026</span>
            </p>
          </div>

          {/* Legal Content Body */}
          <div className="space-y-16 text-gray-400 font-light leading-relaxed animate-fade-in-up delay-100 text-base md:text-lg">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">1. Introduction</h2>
              <p>
                Welcome to CrackScribe, an offline-first AI audio toolkit developed by Crack404 ("we", "us", or "our"). We are deeply committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we handle, process, and protect your information when you use the CrackScribe mobile application ("App").
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">2. Core Philosophy: Offline-First Processing</h2>
              <p>
                CrackScribe is designed with a strict privacy-by-design architecture. The core functionalities of the App—including AI noise reduction, audio/video transcription, subtitle generation, and media editing—are executed entirely locally on your device. We do not upload, transmit, or store your audio recordings, videos, or transcripts on any external servers. <strong className="text-gray-200">What happens on your device stays on your device.</strong>
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">3. Data We Collect and How We Use It</h2>
              
              <div className="grid gap-6">
                {/* Subsection A */}
                <div className="p-6 md:p-8 rounded-2xl bg-[#03090c] border border-white/5 shadow-lg">
                  <h3 className="text-xl font-bold text-[#00f0b5] mb-4">A. Device Permissions</h3>
                  <p className="mb-6 text-sm md:text-base">To provide our services, the App requires specific device permissions:</p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="mt-1 w-6 h-6 rounded bg-[#00f0b5]/10 flex items-center justify-center flex-shrink-0 border border-[#00f0b5]/20">
                        <svg className="w-3 h-3 text-[#00f0b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                      </div>
                      <div>
                        <strong className="text-white block mb-1">Microphone (RECORD_AUDIO)</strong>
                        <span className="text-sm md:text-base">Required to record audio directly within the App. These audio streams are processed locally via our AI models and are never transmitted over the internet.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 w-6 h-6 rounded bg-[#00c6dd]/10 flex items-center justify-center flex-shrink-0 border border-[#00c6dd]/20">
                        <svg className="w-3 h-3 text-[#00c6dd]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
                      </div>
                      <div>
                        <strong className="text-white block mb-1">Storage (Media/Files)</strong>
                        <span className="text-sm md:text-base">Required to read media files you choose to import for editing, and to save exported files (such as MP4, WAV, MP3, and SRT) directly to your device's local storage and MediaStore.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 w-6 h-6 rounded bg-[#00aaff]/10 flex items-center justify-center flex-shrink-0 border border-[#00aaff]/20">
                        <svg className="w-3 h-3 text-[#00aaff]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                      </div>
                      <div>
                        <strong className="text-white block mb-1">Notifications (POST_NOTIFICATIONS)</strong>
                        <span className="text-sm md:text-base">Used to provide progress updates on long-running local processing tasks and occasional re-engagement reminders to help you get the most out of the App.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Subsection B */}
                <div className="p-6 md:p-8 rounded-2xl bg-[#03090c] border border-white/5 shadow-lg">
                  <h3 className="text-xl font-bold text-[#00c6dd] mb-4">B. Network Data and Third-Party Services</h3>
                  <p className="mb-6 text-sm md:text-base">While media processing is strictly offline, the App requires internet access for specific secondary functions to operate properly:</p>
                  <ul className="list-disc pl-5 space-y-3 marker:text-[#00c6dd] text-sm md:text-base">
                    <li><strong className="text-gray-200">Downloading AI Models:</strong> Initial downloads of the offline AI models require an internet connection. Once downloaded, they operate completely offline.</li>
                    <li><strong className="text-gray-200">Music Library Search:</strong> When searching for background music in the Video Editor, the App communicates with third-party APIs (e.g., Jamendo) to fetch track metadata and audio streams.</li>
                    <li><strong className="text-gray-200">Advertising (Google AdMob):</strong> We use Google AdMob to display advertisements. AdMob may collect and process device identifiers, IP addresses, and generalized location data to serve relevant ads. Please review Google’s Privacy Policy for more details.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">4. Data Retention and Security</h2>
              <p>
                Because your media files and transcripts are stored exclusively in your device's local storage and the App’s local database, you maintain complete control over your data. Deleting a file within the App or uninstalling the App will permanently remove the associated data from your device. We hold no copies of your files, meaning there is zero risk of data breaches on our end regarding your personal media.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">5. External Links and Analytics</h2>
              <p>
                The App contains links to our official websites (e.g., crack404.com) for pricing, sharing, support, and social media platforms. When you navigate to these external links, you are subject to their respective privacy policies. Additionally, interactions with our web-based infrastructure may utilize standard analytics pixels to help us improve our services.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">6. Children's Privacy</h2>
              <p>
                Our App complies with global children's privacy regulations (such as COPPA). It is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take necessary actions.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect technical changes or regulatory updates. We will notify you of any changes by updating the "Effective Date" at the top of this document and, if necessary, providing an in-app notification.
              </p>
            </section>

            {/* Section 8: Developer-Style Code Blocks for Licenses */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">8. Open Source Software Licenses</h2>
              <p className="mb-6">
                CrackScribe utilizes open-source AI engines for speech recognition and audio processing. To protect the intellectual property of the original authors while maintaining security, we include the following copyright and permission notices for the respective engines used under the MIT License:
              </p>

              <div className="space-y-6">
                <div className="bg-[#010406] border border-white/10 rounded-xl overflow-hidden shadow-inner">
                  <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Speech Recognition Engine License</span>
                  </div>
                  <div className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm font-mono text-gray-500 leading-relaxed">
                    Copyright (c) 2022 OpenAI<br/><br/>
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br/><br/>
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br/><br/>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </div>
                </div>

                <div className="bg-[#010406] border border-white/10 rounded-xl overflow-hidden shadow-inner">
                  <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Audio Processing Engine License</span>
                  </div>
                  <div className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm font-mono text-gray-500 leading-relaxed">
                    Copyright (c) 2021 Hendrik Schröter<br/><br/>
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br/><br/>
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br/><br/>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">9. Contact Us</h2>
              <p className="mb-6">
                If you have any questions, suggestions, or concerns regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              
              <div className="bg-[#03090c] border border-[#00f0b5]/20 rounded-2xl p-6 md:p-8 inline-block shadow-[0_10px_30px_rgba(0,240,181,0.05)]">
                <h3 className="text-white font-bold text-xl mb-4">Crack404</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00f0b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:contact.support@crack404.com" className="text-gray-300 hover:text-[#00f0b5] transition-colors underline decoration-white/20 underline-offset-4">
                      contact.support@crack404.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#00f0b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    <a href="https://www.crack404.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00f0b5] transition-colors underline decoration-white/20 underline-offset-4">
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