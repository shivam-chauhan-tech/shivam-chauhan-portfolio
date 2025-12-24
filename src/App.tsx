import Header from '@/components/layout/Header';
import ProfileSidebar from '@/components/layout/ProfileSidebar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

/**
 * Main App component
 * Sidebar + Content layout matching shahrukh-anwar design
 */
function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Header />
      
      {/* Main Container with Sidebar Layout - Matching shahrukh-anwar exactly */}
      <div className="relative px-8 md:px-[2rem] lg:px-[6rem] pt-[7.5rem] md:pt-[6.8rem] pb-[2rem] md:pb-[3rem]">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Profile Card (Sticky on desktop, 1/3 width) */}
          <aside className="lg:w-1/3 mb-8 lg:mb-0 lg:sticky lg:top-0 lg:self-start" style={{ height: 'fit-content' }}>
            <ProfileSidebar />
          </aside>

          {/* Main Content Area (2/3 width with left padding - 45px) */}
          <main className="lg:w-2/3 lg:pl-[45px]">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Credit Section */}
      <div className="text-center py-6 text-base text-dark-muted">
        <p>
          Developed by{' '}
          <a
            href="https://github.com/yourusername/shivam-chauhan-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-600 transition-colors"
          >
            Shivam Singh Chauhan
          </a>
        </p>
        <p className="text-sm mt-1">Built with React.js | Hosted on Vercel</p>
      </div>
    </div>
  );
}

export default App;

