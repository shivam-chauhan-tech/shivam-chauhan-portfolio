import { Button } from '@/components/ui/Button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import profileData from '@/data/profile.json';
import socialsData from '@/data/socials.json';
import type { Profile, Social } from '@/types';

const profile = profileData as Profile;
const socials = socialsData as Social[];

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

/**
 * Profile sidebar component matching shahrukh-anwar design
 * Sticky sidebar with profile card
 */
export default function ProfileSidebar() {
  return (
    <div className="bg-dark-card rounded-2xl p-6 md:p-6">
      {/* Profile Photo */}
      <div className="mb-2">
        <div className="w-full rounded-2xl overflow-hidden max-h-[550px]">
          <img 
            src="/photos/profile.png" 
            alt={profile.name}
            className="w-full rounded-2xl object-cover object-top"
          />
        </div>
      </div>

      {/* Profile Details */}
      <div className="text-center mt-3 mb-0">
        <h1 className="text-[32px] font-bold text-dark-text mb-0 tracking-[-0.01em]">
          {profile.name}
        </h1>
        <p className="text-[18px] text-dark-muted mb-0 font-normal tracking-normal">
          {profile.title}
        </p>
        <a
          href="https://www.linkedin.com/in/shivam-chauhan-713828125/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] text-dark-muted hover:text-primary transition-colors inline-block font-normal tracking-normal"
        >
          @LinkedIn
        </a>
        <p className="text-base font-bold text-primary mt-0">
          (Open to Work)
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3 mt-6 mb-0">
        {socials.map((social) => {
          const Icon = iconMap[social.icon];
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[35px] h-[35px] flex items-center justify-center rounded-[5px] bg-transparent hover:bg-primary transition-all duration-500 transform hover:scale-100"
              aria-label={social.name}
            >
              <Icon size={20} className="text-dark-text" />
            </a>
          );
        })}
      </div>

      {/* Let's Talk Button */}
      <a 
        href="#contact"
        className="block w-full bg-primary hover:bg-primary-600 text-white rounded-lg py-2 px-[50px] font-medium text-[15px] transition-all duration-500 text-center mt-10"
      >
        Let's Talk
      </a>
    </div>
  );
}

