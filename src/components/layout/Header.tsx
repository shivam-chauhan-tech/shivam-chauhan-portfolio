import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderOpen, Wrench, Briefcase, Mail } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

/**
 * Top navigation bar with icon-based navigation
 * Matching shahrukh-anwar design - centered, icon-only with tooltips
 */
export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('#home');

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-card rounded-xl px-2 py-2 flex items-center gap-1 shadow-lg"
        >
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            
            return (
              <div key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`
                    w-[35px] h-[35px] flex items-center justify-center rounded-md
                    transition-all duration-500 cursor-pointer
                    ${isActive ? 'bg-primary scale-100' : 'bg-transparent hover:bg-primary hover:scale-105'}
                  `}
                  aria-label={item.name}
                >
                  <Icon size={18} className="text-dark-text" />
                </a>
                
                {/* Tooltip */}
                {hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-dark-card text-dark-text text-sm rounded-md shadow-lg"
                  >
                    {item.name}
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.nav>
      </header>

      {/* Mobile Navigation - Fixed at top */}
      <header className="fixed top-10 left-1/2 transform -translate-x-[46%] z-50 md:hidden">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-card rounded-xl px-2 py-2 flex items-center gap-1 shadow-lg"
        >
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`
                  w-[35px] h-[35px] flex items-center justify-center rounded-md
                  transition-all duration-500 cursor-pointer
                  ${isActive ? 'bg-primary' : 'bg-transparent'}
                `}
                aria-label={item.name}
              >
                <Icon size={18} className="text-dark-text" />
              </a>
            );
          })}
        </motion.nav>
      </header>
    </>
  );
}

