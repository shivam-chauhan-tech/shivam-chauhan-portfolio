import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import socials from '@/data/socials.json';

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card mt-16">
      <div className="container mx-auto px-6 lg:px-16 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[35px] h-[35px] flex items-center justify-center rounded-md hover:bg-primary transition-all duration-500"
                  aria-label={social.name}
                >
                  <Icon size={20} className="text-dark-text" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-dark-muted text-base">
            <p>© {currentYear} Shivam Singh Chauhan</p>
            <p className="text-sm mt-1">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

