"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- DATA STRUCTURE FOR DOCUMENTATION ---
const docsData = [
  {
    category: "Getting Started",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction to CrackScribe",
        content: (
          <>
            <h2 id="what-is-crackscribe">1.1 What is CrackScribe?</h2>
            <p>CrackScribe is an AI-focused mobile studio designed to simplify audio and video workflows. It brings together AI Noise Wash, speech-to-text transcription, AI video captioning, silence trimming, video editing, and media format conversion in one application.</p>
            <p>Audio cleanup, transcription, caption creation, and silence removal can involve repetitive editing work. CrackScribe brings these tasks together to simplify your media workflow. Instead of treating each task as an entirely separate project, you can access several audio and video tools from a single application.</p>
            
            <h2 id="core-features">1.2 Core Features</h2>
            <h3>AI Noise Wash</h3>
            <p>Reduce unwanted background sounds in supported recordings. Noise Wash includes adjustable reduction levels and supports importing existing media or recording new audio.</p>
            <h3>AI Transcription</h3>
            <p>Convert supported speech into written text using the app's speech-to-text functionality, language selection, and available AI models.</p>
            <h3>AI Captions for Video</h3>
            <p>Use the captioning workflow to turn supported spoken content into video captions.</p>
            <h3>Automatic Silence Trimming</h3>
            <p>Remove unnecessary silent sections from supported media to create a more focused recording.</p>

            <h2 id="additional-tools">1.3 Additional Tools</h2>
            <h3>Video Editor</h3>
            <p>Refine your videos using a timeline, clip controls, cropping, text, logos, filters, voiceover, music, and export functionality.</p>
            <h3>Media Format Converter</h3>
            <p>Convert supported media into formats offered by the application.</p>

            <h2 id="who-can-use">1.4 Who Can Use CrackScribe?</h2>
            <ul>
              <li><strong>Content creators</strong> who prepare videos and recordings for publication.</li>
              <li><strong>Students and learners</strong> who want to convert supported speech recordings into text.</li>
              <li><strong>Professionals</strong> who work with voice recordings and spoken information.</li>
              <li><strong>Video editors</strong> who need additional tools for preparing clips.</li>
              <li><strong>Everyday users</strong> who want to clean recordings and manage media from their phones.</li>
            </ul>
          </>
        )
      },
      {
        id: "getting-started",
        title: "2. Getting Started",
        content: (
          <>
            <h2 id="open-crackscribe">2.1 Open CrackScribe</h2>
            <p>Launch CrackScribe on your Android device. The home screen provides access to your recent projects, common actions, and the app's main navigation. You can start a new project or open an existing project from the Library.</p>

            <h2 id="choose-tool">2.2 Choose a Tool</h2>
            <p>Open the New screen to see the available tools:</p>
            <ol>
              <li>Noise Wash</li>
              <li>Transcribe</li>
              <li>Video Editor</li>
              <li>Add Captions to Video</li>
              <li>Trim Silence</li>
              <li>Format Convert</li>
            </ol>
            <p>Select the tool that matches your task.</p>

            <h2 id="import-media">2.3 Import Your Media</h2>
            <p>Depending on the selected tool, CrackScribe may allow you to select a compatible file from your device or record new audio. Supported formats and file requirements can vary by tool. Check the media picker and the relevant feature screen for the formats available in your installed version.</p>

            <h2 id="process-content">2.4 Process Your Content</h2>
            <p>After selecting your media, configure the available settings and start the operation. Some operations may take longer depending on the duration of the media, the processing settings, the AI model being used, and the performance of your device.</p>
            
            <div className="p-6 my-10 rounded-2xl bg-[#00DDB5]/10 border-l-4 border-[#00DDB5] shadow-[0_10px_30px_rgba(0,221,181,0.05)]">
              <span className="text-[#00DDB5] font-bold font-mono text-xs uppercase tracking-widest block mb-3">Best Practice Tip</span>
              <p className="text-[#F5F7F7] text-base leading-relaxed m-0">Always review important transcripts, captions, and edited media before using them in a final publication to ensure the highest quality output.</p>
            </div>
          </>
        )
      },
      {
        id: "home-screen",
        title: "3. Home Screen",
        content: (
          <>
            <h2 id="create-new">3.1 Create New</h2>
            <p>Use the Create New button to begin a project. This opens the tool selection screen, where you can choose the operation you want to perform.</p>

            <h2 id="quick-actions">3.2 Quick Actions</h2>
            <p>The home screen provides convenient access to commonly used functions, including audio cleanup, transcription, and captions. Quick actions help you reach a feature without having to navigate through every part of the application.</p>

            <h2 id="recent-projects">3.3 Recent Projects & Navigation</h2>
            <p>The Recent Projects section displays previously created or processed projects when available. Select "See All" when you need to browse more of your projects.</p>
            <p>The bottom navigation provides access to:</p>
            <ul>
              <li><strong>Home:</strong> Start a task and find recent projects.</li>
              <li><strong>Library:</strong> Search and browse saved media and transcripts.</li>
              <li><strong>New:</strong> Open the tool selection screen.</li>
              <li><strong>Profile:</strong> Access settings, AI model options, subscription information, and support links.</li>
            </ul>
          </>
        )
      }
    ]
  },
  {
    category: "AI Features",
    sections: [
      {
        id: "noise-wash",
        title: "4. AI Noise Wash",
        content: (
          <>
            <h2 id="noise-overview">4.1 Overview</h2>
            <p>AI Noise Wash is CrackScribe's audio-cleanup tool. It is designed to reduce distracting background sounds so that the important parts of a recording are easier to hear. The effectiveness of noise reduction depends on the source recording and the type and intensity of the noise.</p>
            
            <h2 id="reduction-levels">4.2 Reduction Levels</h2>
            <h3>Light</h3>
            <p>Choose Light for recordings that need a more subtle level of noise reduction.</p>
            <h3>Normal</h3>
            <p>Choose Normal as a starting point for recordings with a noticeable amount of unwanted background noise.</p>
            <h3>Strong</h3>
            <p>Choose Strong when the recording contains more prominent background noise. Stronger reduction is not always better. Depending on the recording, aggressive processing may affect parts of the desired sound.</p>

            <h2 id="noise-tips">4.3 Tips for Better Results</h2>
            <ul>
              <li>Start with the clearest recording you can capture.</li>
              <li>Keep the microphone away from unnecessary noise sources.</li>
              <li>Test different reduction levels when the result does not sound natural.</li>
            </ul>
          </>
        )
      },
      {
        id: "transcription",
        title: "5. AI Transcription",
        content: (
          <>
            <h2 id="transcription-overview">5.1 Overview</h2>
            <p>AI Transcription converts supported speech into written text. It can help with recorded explanations, spoken notes, interviews, lessons, and other situations where you want a written version of audio content.</p>

            <h2 id="models">5.2 Choose a Model</h2>
            <p>CrackScribe provides offline model selection for its speech-to-text functionality:</p>
            <ul>
              <li><strong>Fast Model (~31 MB):</strong> Intended as a smaller, faster option for quick processing.</li>
              <li><strong>Balanced Model (~57 MB):</strong> Offers a balance of speed and higher accuracy.</li>
            </ul>

            <h2 id="high-accuracy">5.3 High Accuracy Mode</h2>
            <p>Consider enabling High Accuracy mode when:</p>
            <ul>
              <li>Speech is difficult to understand.</li>
              <li>The recording contains challenging pronunciations.</li>
              <li>The initial transcription contains errors that may benefit from another attempt.</li>
            </ul>
            <p>Higher-accuracy processing can take longer. Always compare the output with the original recording.</p>
          </>
        )
      },
      {
        id: "captions",
        title: "6. AI Captions for Video",
        content: (
          <>
            <h2 id="captions-overview">6.1 Overview</h2>
            <p>The AI Captions feature helps prepare videos with captions generated from supported speech. Captions can make spoken content easier to follow for viewers who are watching without sound or who benefit from reading along. This is especially useful for short videos, educational content, and social media posts.</p>
            
            <h2 id="reviewing-captions">6.2 Review Caption Accuracy</h2>
            <p>Automatically generated captions may contain errors when speech is unclear, background noise is prominent, or several people speak at once. Pay particular attention to:</p>
            <ul>
              <li>Names and technical terms.</li>
              <li>Numbers and dates.</li>
              <li>Punctuation and sentence boundaries.</li>
              <li>Words that sound similar.</li>
            </ul>
          </>
        )
      },
      {
        id: "trim-silence",
        title: "7. Automatic Silence Trimming",
        content: (
          <>
            <h2 id="trim-overview">7.1 Overview</h2>
            <p>Trim Silence is designed to remove unnecessary silent sections from supported media. Long gaps can make an audio recording feel less focused. Removing selected pauses can help tighten recordings before they are shared.</p>

            <h2 id="trim-tips">7.2 Practical Tips</h2>
            <ul>
              <li>Start with a copy of an important original recording when possible.</li>
              <li>Review transitions between speech segments.</li>
              <li>Check that the beginning and ending of the recording remain intact.</li>
              <li>Listen for words or sounds that may have been affected by trimming.</li>
            </ul>
          </>
        )
      }
    ]
  },
  {
    category: "Editing Tools",
    sections: [
      {
        id: "video-editor",
        title: "8. Built-in Video Editor",
        content: (
          <>
            <h2 id="editor-overview">8.1 Overview</h2>
            <p>CrackScribe includes a video editor for making further adjustments to media. The editor provides a clip timeline and controls for clip management, cropping, text, logo placement, filters, voiceover, music, and export.</p>
            
            <h2 id="timeline">8.2 Manage Clips</h2>
            <p>The clip controls shown in the app include:</p>
            <ul>
              <li><strong>Duplicate:</strong> Create another instance of the selected clip.</li>
              <li><strong>Move:</strong> Change the selected clip's position relative to other clips.</li>
              <li><strong>Delete:</strong> Remove a selected clip carefully.</li>
              <li><strong>Duration:</strong> Adjust the selected image clip's displayed duration.</li>
            </ul>

            <h2 id="editor-tools">8.3 Tools & Filters</h2>
            <p>You can add Text, a custom Logo watermark, Voiceovers, and Background Music. CrackScribe also offers three primary video filters: Original, Vibrant, and Cinematic.</p>
          </>
        )
      },
      {
        id: "format-converter",
        title: "9. Media Format Converter",
        content: (
          <>
            <h2 id="converter-overview">9.1 Overview</h2>
            <p>Format Convert is a supporting tool for converting compatible media files between formats offered by CrackScribe. Different applications and devices may expect different media formats.</p>
            
            <h2 id="converter-tips">9.2 Conversion Tips</h2>
            <ul>
              <li>Choose a target format that suits the application where you will use the file.</li>
              <li>Keep an original copy of important media.</li>
              <li>Be aware that conversion may affect file size or media characteristics.</li>
            </ul>
          </>
        )
      }
    ]
  },
  {
    category: "Settings & Management",
    sections: [
      {
        id: "library",
        title: "10. Library & Project Management",
        content: (
          <>
            <h2 id="library-overview">10.1 Overview</h2>
            <p>The Library provides a central place to browse media and related projects available within CrackScribe. It displays file cards with information such as project names, file sizes, durations, and processing labels.</p>
            <p>You can filter by <strong>All</strong>, <strong>Audio</strong>, <strong>Video</strong>, or <strong>Transcript</strong> to quickly locate your media.</p>
          </>
        )
      },
      {
        id: "ai-models",
        title: "11. AI Models & Offline Processing",
        content: (
          <>
            <h2 id="offline-models">11.1 Understanding AI Models</h2>
            <p>Some AI features rely on models that must be available to the app before processing can begin. In CrackScribe, the speech-to-text settings include model choices, and the app displays prompts to download an offline model when Transcriptions and Subtitles require one.</p>

            <h2 id="device-performance">11.2 Device Performance</h2>
            <p>CrackScribe includes an <strong>Auto-Optimize for My Device</strong> setting. Its description indicates that supported AI models and CPU thread usage can be adjusted to help prevent excessive battery drain and crashes.</p>
          </>
        )
      }
    ]
  },
  {
    category: "Help & Support",
    sections: [
      {
        id: "troubleshooting",
        title: "12. Troubleshooting",
        content: (
          <>
            <h2 id="ts-transcription">12.1 Transcription or Captions Are Unavailable</h2>
            <p><strong>Possible reason:</strong> The required offline AI model has not been downloaded or selected.</p>
            <p><strong className="text-[#00DDB5]">What to do:</strong> Open CrackScribe, look for an Action Required message, and follow the model download instructions.</p>

            <h2 id="ts-errors">12.2 The Transcript Contains Errors</h2>
            <p><strong>Possible reasons:</strong> The recording may be unclear, the selected language may not match the speech, or the audio may contain background noise.</p>
            <p><strong className="text-[#00DDB5]">What to do:</strong> Confirm the language, try High Accuracy mode, or use AI Noise Wash first before transcribing.</p>

            <h2 id="ts-slow">12.3 The App Appears Slow</h2>
            <p><strong className="text-[#00DDB5]">What to do:</strong> Consider enabling Auto-Optimize for My Device, close other resource-intensive applications, check available device storage, or retry with a shorter media file.</p>
          </>
        )
      },
      {
        id: "faq",
        title: "13. FAQ & Support",
        content: (
          <>
            <h2 id="faq-offline">Does CrackScribe support offline AI?</h2>
            <p>CrackScribe provides downloadable offline AI models for supported transcription and subtitle workflows. The offline requirements of other features may differ.</p>
            
            <h2 id="faq-pricing">Is CrackScribe free?</h2>
            <p>The app interface displays a Free plan. Refer to the current subscription screen for the applicable plan details and available subscription options.</p>

            <h2 id="support">Need More Help?</h2>
            <p>If you have a question, encounter a problem, or want to suggest an improvement, use the feedback resources available in CrackScribe. When contacting support, explain what you were trying to do, which feature you used, what happened, and whether the app displayed an error message.</p>
          </>
        )
      }
    ]
  }
];

export const Documentation = () => {
  const [activeSection, setActiveSection] = useState(docsData[0].sections[0].id);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(docsData.map(d => d.category));
  const [activeSubheadings, setActiveSubheadings] = useState<{id: string, title: string}[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const activeContent = docsData
    .flatMap(cat => cat.sections)
    .find(sec => sec.id === activeSection);

  useEffect(() => {
    if (contentRef.current) {
      const h2s = Array.from(contentRef.current.querySelectorAll('h2'));
      const headings = h2s.map(h2 => ({
        id: h2.id,
        title: h2.innerText.replace(/^[0-9.]+\s/, '') 
      }));
      setActiveSubheadings(headings);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020a0d] font-sans text-[#98A6A9]">
      
      {/* Custom Ultra-Thin Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 221, 181, 0.5);
        }
      `}} />

      {/* 1. Sticky Premium Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020a0d]/80 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-[#00DDB5]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image src="/logo.png" alt="CrackScribe" fill className="object-contain" />
              </div>
              <span className="text-[#F5F7F7] font-bold text-xl tracking-tight hidden sm:block">Crack<span className="text-gradient-cyan">Scribe</span></span>
            </Link>
            
            <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
            
            <nav className="hidden sm:flex items-center gap-2 text-sm font-medium">
              <Link href="/docs" className="px-4 py-2 rounded-lg text-[#00DDB5] bg-[#00DDB5]/10 border border-[#00DDB5]/20">Documentation</Link>
              <Link href="/#features" className="px-4 py-2 rounded-lg hover:bg-white/5 text-[#98A6A9] hover:text-white transition-colors">Features</Link>
            </nav>
          </div>

          {/* Premium Search Bar */}
          <div className="relative w-full max-w-sm ml-4 sm:ml-0 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 group-focus-within:text-[#00DDB5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full bg-black/40 border border-white/10 text-sm rounded-xl pl-11 pr-14 py-3 text-[#F5F7F7] placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00DDB5] focus:border-[#00DDB5] transition-all shadow-inner"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-[10px] font-mono text-gray-400 border border-white/10 bg-white/5 rounded px-2 py-1 shadow-sm">⌘ K</span>
            </div>
          </div>
          
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start relative">
        
        {/* 2. Left Sidebar Navigation (Now with ultra-thin scrollbar) */}
        <aside className="custom-scrollbar w-full md:w-[280px] flex-shrink-0 md:h-[calc(100vh-5rem)] md:sticky top-20 overflow-y-auto py-10 pr-6 border-b md:border-b-0 md:border-r border-white/5">
          <nav className="flex flex-col gap-6">
            {docsData.map((category) => (
              <div key={category.category} className="flex flex-col gap-2">
                <button 
                  onClick={() => toggleCategory(category.category)}
                  className="flex items-center justify-between text-[10px] font-mono font-bold tracking-[0.2em] text-[#F5F7F7] uppercase group hover:text-[#00DDB5] transition-colors w-full text-left"
                >
                  {category.category}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedCategories.includes(category.category) ? 'rotate-180 text-[#00DDB5]' : 'text-gray-600 group-hover:text-[#00DDB5]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" /></svg>
                </button>
                
                {expandedCategories.includes(category.category) && (
                  <div className="flex flex-col gap-1 border-l border-white/10 ml-1.5 pl-3 mt-1">
                    {category.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`text-left text-[13px] py-1.5 px-3 rounded-lg transition-all duration-200 ${
                          activeSection === section.id 
                            ? 'bg-[#00DDB5]/10 text-[#00DDB5] font-semibold shadow-sm' 
                            : 'text-[#98A6A9] hover:bg-white/5 hover:text-white font-normal'
                        }`}
                      >
                        {section.title.replace(/^[0-9.]+\s/, '')}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* 3. Main Content Area */}
        <main className="flex-1 w-full max-w-4xl py-12 md:py-16 md:px-14 lg:px-20 min-h-[calc(100vh-5rem)]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102522] border border-[#00DDB5]/20 mb-8 shadow-sm">
             <span className="text-[10px] font-mono tracking-[0.2em] text-[#00DDB5] uppercase font-bold">
               CrackScribe Guide
             </span>
          </div>
          
          <div 
            ref={contentRef}
            className="
              animate-fade-in-up
              text-[#98A6A9] text-sm md:text-base font-light leading-[1.8]
              
              /* Custom Premium Typography Overrides */
              [&>p]:mb-8 
              
              [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:text-[#F5F7F7] 
              [&>h2]:mt-16 [&>h2]:mb-8 [&>h2]:pb-4 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:tracking-tight
              
              [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-[#00DDB5] 
              [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:tracking-tight
              
              [&>ul]:mb-8 [&>ul]:space-y-4 [&>ul]:list-none [&>ul]:pl-0
              [&>ul>li]:relative [&>ul>li]:pl-7 
              [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-[0.65rem] [&>ul>li::before]:w-1.5 [&>ul>li::before]:h-1.5 [&>ul>li::before]:rounded-full [&>ul>li::before]:bg-[#00DDB5] [&>ul>li::before]:shadow-[0_0_8px_#00DDB5]
              
              [&>ol]:mb-8 [&>ol]:space-y-4 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol>li]:pl-2
              
              [&_strong]:text-[#F5F7F7] [&_strong]:font-semibold
              [&_a]:text-[#00c6dd] hover:[&_a]:text-[#00DDB5] hover:[&_a]:underline
            "
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-[#F5F7F7] tracking-tighter leading-[1.1]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              {activeContent?.title}
            </h1>
            
            {activeContent?.content}
          </div>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 text-sm font-mono text-gray-500">
             <span>Last Updated: October 2026</span>
             <Link href="mailto:support@crack404.com" className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 hover:text-white transition-all text-xs uppercase tracking-widest font-bold">Submit Feedback</Link>
          </div>
        </main>

        {/* 4. Right Sidebar - Table of Contents */}
        <aside className="custom-scrollbar hidden xl:block w-[280px] flex-shrink-0 h-[calc(100vh-5rem)] sticky top-20 overflow-y-auto py-16 pl-10 border-l border-white/5">
          <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#F5F7F7] uppercase mb-6">On this page</h4>
          <nav className="flex flex-col gap-4 border-l border-white/10 relative">
            {activeSubheadings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className="text-left text-sm text-[#98A6A9] hover:text-[#00DDB5] transition-colors pl-5 relative group font-light"
              >
                {/* Hover Line Indicator */}
                <div className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-[#00DDB5] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 shadow-[0_0_10px_#00DDB5]"></div>
                {heading.title}
              </button>
            ))}
            
            {activeSubheadings.length === 0 && (
              <span className="text-sm text-gray-600 pl-5 italic font-light">No sections</span>
            )}
          </nav>
        </aside>

      </div>
    </div>
  );
};