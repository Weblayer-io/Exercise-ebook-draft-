import React, { useState, useEffect } from 'react';
import { ebookPages, sections } from './data/ebookData';
import { Menu, X, ChevronLeft, ChevronRight, BookOpen, Download, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentPage = ebookPages[currentPageIndex];

  const goToPage = (index: number) => {
    setCurrentPageIndex(index);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const next = () => {
    if (currentPageIndex < ebookPages.length - 1) goToPage(currentPageIndex + 1);
  };

  const prev = () => {
    if (currentPageIndex > 0) goToPage(currentPageIndex - 1);
  };

  const handleDownload = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setProgress(0);
    window.scrollTo(0, 0);

    // Give React time to render the PDF content and the loading screen
    setTimeout(async () => {
      try {
        const pdf = new jsPDF('p', 'pt', 'a4');
        const pages = document.querySelectorAll('.pdf-page');
        const totalPages = pages.length;

        for (let i = 0; i < totalPages; i++) {
          setProgress(i + 1);
          const pageEl = pages[i] as HTMLElement;
          
          const canvas = await html2canvas(pageEl, {
            scale: 2,
            backgroundColor: '#000000',
            useCORS: true,
            logging: false,
            windowWidth: 800
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        }

        pdf.save('The_Aesthetic_Body_Blueprint.pdf');
      } catch (error) {
        console.error("Failed to generate PDF:", error);
        alert("Failed to generate PDF. Please try again.");
      } finally {
        setIsGenerating(false);
        setProgress(0);
      }
    }, 1000); // 1s delay to ensure fonts and layout are fully rendered
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-amber-500/30">
      
      {/* --- FULL SCREEN LOADING OVERLAY --- */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center text-amber-500"
          >
            <Loader2 className="w-16 h-16 animate-spin mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-widest">Forging PDF...</h2>
            <p className="text-zinc-400 mt-4 text-lg">
              {progress > 0 ? `Rendering page ${progress} of ${ebookPages.length}...` : 'Preparing pages...'}
            </p>
            <div className="w-64 h-2 bg-zinc-900 rounded-full mt-6 overflow-hidden">
              <div 
                className="h-full bg-amber-500 transition-all duration-300"
                style={{ width: `${(progress / ebookPages.length) * 100}%` }}
              />
            </div>
            <p className="text-zinc-600 mt-4 text-sm">Please do not close this tab. This may take a minute.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SCREEN UI --- */}
      <div className={isGenerating ? 'hidden' : 'flex flex-col min-h-screen'}>
        {/* Top Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-40 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-zinc-800 rounded-md transition-colors md:hidden"
            >
              <Menu className="w-5 h-5 text-zinc-400" />
            </button>
            <div className="flex items-center gap-2 text-amber-500">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold tracking-widest uppercase text-sm hidden sm:block">Aesthetic Blueprint</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-zinc-400">
              {currentPageIndex + 1} / {ebookPages.length}
            </span>
            <button 
              onClick={handleDownload}
              disabled={isGenerating}
              className="flex items-center gap-2 text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 px-4 py-1.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="hidden sm:inline">Generating...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <div className={`fixed top-0 left-0 bottom-0 w-72 bg-zinc-950 border-r border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 overflow-y-auto`}>
          <div className="p-4 flex items-center justify-between border-b border-zinc-800 sticky top-0 bg-zinc-950">
            <span className="font-bold uppercase tracking-widest text-xs text-zinc-500">Table of Contents</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-zinc-800 rounded-md md:hidden">
              <X className="w-4 h-4 text-zinc-400" />
            </button>
          </div>
          
          <div className="p-4 space-y-8">
            {sections.map(section => (
              <div key={section}>
                <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">{section}</h4>
                <ul className="space-y-1">
                  {ebookPages.map((page, index) => {
                    if (page.section !== section) return null;
                    const isActive = index === currentPageIndex;
                    return (
                      <li key={page.id}>
                        <button
                          onClick={() => goToPage(index)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive 
                              ? 'bg-amber-500/10 text-amber-400 font-medium' 
                              : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
                          }`}
                        >
                          {page.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <main className="pt-16 md:pl-72 flex-grow flex flex-col">
          <div className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-3xl mx-auto"
              >
                {currentPage.content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-zinc-800 bg-zinc-950/50 backdrop-blur p-4 md:p-6 flex items-center justify-between mt-auto">
            <button
              onClick={prev}
              disabled={currentPageIndex === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-900 text-zinc-300"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button
              onClick={next}
              disabled={currentPageIndex === ebookPages.length - 1}
              className="flex items-center gap-2 px-6 py-2 rounded-md text-sm font-bold transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-amber-500 hover:bg-amber-400 text-black"
            >
              {currentPageIndex === ebookPages.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>

      {/* --- HIDDEN PDF CONTENT (Only rendered when generating) --- */}
      {isGenerating && (
        <div className="w-full bg-black flex flex-col items-center">
          <div id="pdf-content" className="bg-black text-zinc-100 w-[800px]">
            {ebookPages.map((page, idx) => (
              <div 
                key={`pdf-${page.id}`} 
                className="pdf-page flex flex-col justify-center p-16"
                style={{ 
                  width: '800px',
                  minHeight: '1130px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  borderBottom: idx !== ebookPages.length - 1 ? '1px solid #18181b' : 'none'
                }}
              >
                <div className="max-w-3xl mx-auto w-full">
                  {page.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
