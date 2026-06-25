import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Download, ExternalLink, MapPin, Code2, Briefcase, Terminal, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { t, i18n } = useTranslation();
  const container = useRef(null);
  const [navScrolled, setNavScrolled] = useState(false);

  const projects = t('projects.items', { returnObjects: true }) || [];
  const experience = t('experience.items', { returnObjects: true }) || [];
  const skills = t('skills.items', { returnObjects: true }) || [];
  const education = t('education.items', { returnObjects: true }) || [];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setTimeout(() => ScrollTrigger.refresh(), 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.2 }
      );

      // Section Titles Animation
      gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 85%" }
          }
        );
      });

      // Projects Stagger Animation
      gsap.fromTo('.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: '#projects', start: "top 75%" }
        }
      );

      // Experience Timeline Animation
      gsap.utils.toArray('.timeline-card').forEach((card, i) => {
        const xOffset = i % 2 === 0 ? -50 : 50;
        gsap.fromTo(card,
          { x: xOffset, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 80%" }
          }
        );
      });

      // Skills Progress Animation
      gsap.utils.toArray('.skill-circle').forEach((circle) => {
        const percent = circle.getAttribute('data-percent');
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (percent / 100) * circumference;

        gsap.fromTo(circle,
          { strokeDashoffset: circumference },
          {
            strokeDashoffset: offset, duration: 1.5, ease: "power2.inOut",
            scrollTrigger: { trigger: '#skills', start: "top 70%" }
          }
        );

        const counter = circle.parentNode.parentNode.querySelector('.skill-counter');
        gsap.fromTo(counter,
          { innerHTML: 0 },
          {
            innerHTML: percent,
            duration: 1.5,
            ease: "power2.inOut",
            snap: { innerHTML: 1 },
            scrollTrigger: { trigger: '#skills', start: "top 70%" }
          }
        );
      });

      // Education & Contact fade up
      gsap.utils.toArray('.fade-up').forEach(elem => {
        gsap.fromTo(elem,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: elem, start: "top 85%" }
          }
        );
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="min-h-screen font-sora">

      {/* NAVBAR */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${navScrolled ? 'bg-surface/70 backdrop-blur-xl border border-white/5 py-3 px-8' : 'bg-transparent py-4 px-6'} rounded-full flex items-center gap-6 lg:gap-8`}>
        <div className="font-bold text-lg tracking-tight">JD.</div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-textMain/70">
          <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
          <a href="#projects" className="hover:text-accent transition-colors">{t('nav.projects')}</a>
          <a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a>
          <a href="#skills" className="hover:text-accent transition-colors">{t('nav.skills')}</a>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 text-xs font-fira font-medium bg-background/50 rounded-full p-1 border border-white/5">
          <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded-full transition-colors ${i18n.language.startsWith('en') ? 'bg-accent text-white' : 'text-textMain/50 hover:text-white'}`}>EN</button>
          <button onClick={() => changeLanguage('fr')} className={`px-2 py-1 rounded-full transition-colors ${i18n.language.startsWith('fr') ? 'bg-accent text-white' : 'text-textMain/50 hover:text-white'}`}>FR</button>
          <button onClick={() => changeLanguage('de')} className={`px-2 py-1 rounded-full transition-colors ${i18n.language.startsWith('de') ? 'bg-accent text-white' : 'text-textMain/50 hover:text-white'}`}>DE</button>
        </div>

        <a href="Lebenslauf_f.pdf" download className="hidden md:flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium magnetic-btn">
          <Download size={16} /> {t('nav.resume')}
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

        <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="hero-anim w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface border border-accent/30 flex items-center justify-center text-4xl font-bold text-accent/50 mb-8 shadow-[0_0_40px_rgba(123,97,255,0.15)]">
            JD
          </div>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-glow text-white">
            Junior Dongmo Nguemo
          </h1>
          <h2 className="hero-anim font-instrument text-2xl md:text-4xl text-accent/90 italic mb-10">
            {t('hero.subtitle')}
          </h2>

          <div className="hero-anim flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-fira text-textMain/60 mb-12">
            <span className="flex items-center gap-2"><MapPin size={16} /> {t('hero.location')}</span>
            <span className="hidden md:inline text-accent/50">|</span>
            <span className="flex items-center gap-2"><Briefcase size={16} /> {t('hero.semester')}</span>
            <span className="hidden md:inline text-accent/50">|</span>
            <span className="flex items-center gap-2"><Code2 size={16} /> {t('hero.projectsCount')}</span>
          </div>

          <div className="hero-anim flex flex-col sm:flex-row items-center gap-4">
            <a href="CV_Junior_Dongmo_Nguemo.pdf" download className="magnetic-btn bg-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(123,97,255,0.3)]">
              {t('hero.downloadBtn')} <Download size={18} />
            </a>
            <a href="#contact" className="magnetic-btn border border-white/10 hover:border-accent/50 bg-surface/50 px-8 py-4 rounded-full font-medium transition-colors">
              {t('hero.contactBtn')}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 relative z-10 bg-surface">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="section-title font-instrument text-5xl md:text-6xl text-white italic">{t('about.title')}</h2>
          </div>
          <div className="hidden md:block w-px bg-gradient-to-b from-accent/50 to-transparent"></div>
          <div className="md:w-2/3 section-title">
            <p className="text-lg md:text-xl leading-relaxed text-textMain/80 font-light">
              {t('about.p1_start')}
              <span className="text-accent font-medium">{t('about.p1_highlight')}</span>
              {t('about.p1_end')}
              <br /><br />
              {t('about.p2')}
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center section-title">
            <Terminal className="text-accent mb-4" size={32} />
            <h2 className="font-instrument text-5xl md:text-6xl text-white italic mb-4">{t('projects.title')}</h2>
            <p className="font-fira text-textMain/50">{t('projects.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card bg-surface rounded-[2rem] p-8 border border-white/5 hover-lift group relative overflow-hidden flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{proj.title}</h3>
                <p className="text-textMain/60 text-sm leading-relaxed mb-6 flex-grow relative z-10">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {Array.isArray(proj.tech) && proj.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-fira px-3 py-1 bg-background rounded-full border border-white/10 text-accent/80">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center gap-2 text-sm font-medium text-white/80 hover:text-accent transition-colors mt-auto">
                  {t('projects.viewGithub')} <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-6 relative z-10 bg-surface/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title font-instrument text-5xl md:text-6xl text-center text-white italic mb-20">{t('experience.title')}</h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent -translate-x-1/2"></div>

            <div className="flex flex-col gap-12">
              {experience.map((exp, idx) => (
                <div key={idx} className={`timeline-card relative flex flex-col md:flex-row gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block absolute left-1/2 top-8 w-3 h-3 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(123,97,255,0.8)] z-10"></div>

                  <div className="md:w-1/2 flex flex-col">
                    <div className={`bg-background rounded-[2rem] p-8 border border-white/5 shadow-lg ${idx % 2 === 0 ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}`}>
                      <span className="font-fira text-accent text-xs tracking-wider uppercase mb-3 block">{exp.period}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-textMain/50 text-sm mb-4">{exp.company}</h4>
                      <p className="text-textMain/70 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center section-title">
            <Cpu className="text-accent mb-4" size={32} />
            <h2 className="font-instrument text-5xl md:text-6xl text-white italic mb-4">{t('skills.title')}</h2>
            <p className="font-fira text-textMain/50">{t('skills.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="fade-up bg-surface rounded-[2rem] p-6 border border-white/5 flex flex-col items-center text-center group hover:border-accent/30 transition-colors">
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                    <circle
                      className="skill-circle transition-all"
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="#7B61FF"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      data-percent={skill.level}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-fira text-lg font-medium text-white">
                    <span className="skill-counter">0</span>%
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 mb-3">
                  {skill.iconUrl && <img src={skill.iconUrl} alt={skill.name} className="w-5 h-5 opacity-90 group-hover:scale-110 transition-transform" />}
                  <h3 className="text-sm font-bold text-white">{skill.name}</h3>
                </div>
                {skill.subskills && (
                  <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                    {skill.subskills.map((sub, i) => (
                      <span key={i} className="text-[10px] text-textMain/70 bg-background px-2 py-1 rounded-md border border-white/10">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-24 px-6 relative z-10 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title font-instrument text-4xl text-white italic mb-12 text-center">{t('education.title')}</h2>
          <div className="flex flex-col gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="fade-up bg-background rounded-[2rem] p-8 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent/20 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-textMain/60 text-sm mb-2">{edu.school}</p>
                  <p className="text-textMain/40 text-xs">{edu.desc}</p>
                </div>
                <div className="font-fira text-accent text-sm whitespace-nowrap bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 relative z-10 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="section-title font-instrument text-6xl md:text-8xl text-white italic mb-8">{t('contact.title')}</h2>
          <p className="fade-up text-white/70 text-lg mb-16 max-w-xl mx-auto font-light">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16 fade-up">
            <a href="mailto:juniorlebos2@gmail.com" className="magnetic-btn w-14 h-14 rounded-full bg-white text-background flex items-center justify-center hover:bg-white/90">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/junior-dongmo-nguemo-86b962290/" target="_blank" rel="noopener noreferrer" className="magnetic-btn w-14 h-14 rounded-full bg-white text-background flex items-center justify-center hover:bg-white/90">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/JuniorView" target="_blank" rel="noopener noreferrer" className="magnetic-btn w-14 h-14 rounded-full bg-white text-background flex items-center justify-center hover:bg-white/90">
              <Github size={24} />
            </a>
          </div>

          <a href="mailto:juniorlebos2@gmail.com" className="fade-up inline-block bg-background text-white px-10 py-5 rounded-full font-medium text-lg hover-lift shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
            {t('contact.sendMessage')}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-background relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textMain/40 text-sm">
            © {new Date().getFullYear()} Junior Dongmo Nguemo
          </p>
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-fira text-xs text-textMain/40 uppercase tracking-widest">{t('footer.online')}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
