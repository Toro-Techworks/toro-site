import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import useNavigationAnimation from '../hooks/useNavigationAnimation';

const Services = () => {
  const { shouldAnimateEntry } = useNavigationAnimation();
  const services = [
     {
      name: 'Enterprise Software',
      description: 'Large-scale business solutions for complex organizational needs',
      icon: '🏢',
      features: [
        'ERP systems',
        'CRM solutions',
        'Business intelligence',
        'Workflow automation',
        'Integration services',
      ],
      tech: ['Java', 'Oracle', 'SAP'],
    }, 
    {
      name: 'SaaS Development',
      description: 'Cloud-based software as a service solutions with subscription models',
      icon: '💼',
      features: [
        'Multi-tenant architecture',
        'Subscription billing',
        'User authentication',
        'Scalable infrastructure',
        'Analytics dashboard',
      ],
      tech: ['AWS', 'Docker', 'Kubernetes', 'Stripe'],
    },
    {
      name: 'Web Software Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies',
      icon: '🌐',
      features: [
        'React, Vue, Angular development',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'Content management systems',
        'API development',
      ],
      tech: ['React', 'Node.js', 'TypeScript', 'MySQL'],
    },
   
    {
      name: 'Mobile Software Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android',
      icon: '📱',
      features: [
        'iOS & Android native apps',
        'React Native development',
        'Flutter applications',
        'App store optimization',
        'Mobile-first design',
      ],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
   
   
    {
      name: 'Brand Identity',
      description: 'Memorable, scalable logos that build brand identity and recognition.',
      icon: '✨',
      features: [
        'Logo design',
        'Multiple design options',
        'Revisions until you’re satisfied',
        'Vector and raster deliverables',
        'Brand guidelines and usage',
      ],
      tech: ['Illustrator', 'Figma', 'SVG', 'Style guides'],
    },
    {
      name: 'Online Selling Platform',
      description: 'E-commerce and marketplace solutions to sell products and services online.',
      icon: '🛒',
      features: [
        'Product catalog and inventory',
        'Checkout and payment integration',
        'Order and seller management',
        'Multi-vendor marketplace options',
        'Mobile-friendly storefronts',
      ],
      tech: ['React', 'Node.js', 'Stripe', 'REST API'],
    },
 
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our team creates detailed designs and interactive prototypes for your approval.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with rigorous testing.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your application and provide ongoing maintenance and support.',
    },
  ];

  const techLogosRow1 = [
    { name: 'React', slug: 'react', color: '61DAFB' },
    { name: 'Vue.js', slug: 'vuedotjs', color: '4FC08D' },
    { name: 'Angular', slug: 'angular', color: 'DD0031' },
    { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
    { name: 'Python', slug: 'python', color: '3776AB' },
    { name: 'Java', slug: 'openjdk', color: 'ED8B00' },
    { name: '.NET', slug: 'dotnet', color: '512BD4' },
    { name: 'Go', slug: 'go', color: '00ADD8' },
  ];

  const techLogosRow2 = [
    { name: 'AWS', slug: 'amazonaws', color: 'FF9900', src: 'https://api.iconify.design/simple-icons:amazonaws.svg?color=%23FF9900' },
    { name: 'Google Cloud', slug: 'googlecloud', color: '4285F4' },
    { name: 'Azure', slug: 'microsoftazure', color: '0078D4', src: 'https://api.iconify.design/simple-icons:microsoftazure.svg?color=%230078D4' },
    { name: 'Docker', slug: 'docker', color: '2496ED' },
    { name: 'Kubernetes', slug: 'kubernetes', color: '326CE5' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
    { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
    { name: 'MySQL', slug: 'mysql', color: '4479A1' },
    { name: 'Redis', slug: 'redis', color: 'DC382D' },
    { name: 'Elasticsearch', slug: 'elasticsearch', color: '005571' },
  ];

  const techLogosRow3 = [
    { name: 'Flutter', slug: 'flutter', color: '02569B' },
    { name: 'React Native', slug: 'react', color: '61DAFB' },
    { name: 'Swift', slug: 'swift', color: 'F05138' },
    { name: 'Kotlin', slug: 'kotlin', color: '7F52FF' },
    { name: 'Ionic', slug: 'ionic', color: '3880FF' },
    { name: 'OpenAI', slug: 'openai', color: '412991', src: 'https://api.iconify.design/simple-icons:openai.svg?color=%23412991' },
    { name: 'Jest', slug: 'jest', color: 'C21325' },
    { name: 'Cypress', slug: 'cypress', color: '17202C' },
  ];

  const techLogosRow4 = [
    { name: 'Selenium', slug: 'selenium', color: '43B02A' },
    { name: 'Playwright', slug: 'playwright', color: '2EAD33', src: 'https://api.iconify.design/simple-icons:playwright.svg?color=%232EAD33' },
    { name: 'Testing Library', slug: 'testinglibrary', color: 'E33332' },
    { name: 'OpenAI', slug: 'openai', color: '412991', src: 'https://api.iconify.design/simple-icons:openai.svg?color=%23412991' },
    { name: 'Redis', slug: 'redis', color: 'DC382D' },
    { name: 'Docker', slug: 'docker', color: '2496ED' },
    { name: 'Kubernetes', slug: 'kubernetes', color: '326CE5' },
    { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gradient mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive development solutions tailored to transform your business 
              and accelerate your digital transformation journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={shouldAnimateEntry ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start mb-6">
                    <div className="text-5xl mr-4">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      What We Offer:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-green-500/10 dark:text-green-400 dark:border dark:border-green-500/20 dark:shadow-[0_0_12px_rgba(34,197,94,0.16)] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A structured approach to ensure project success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="text-3xl font-bold text-primary-600 dark:text-green-400 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-600 leading-[1.25] mb-6">
              Technologies Powering Our Solutions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Cutting-edge technologies for modern solutions.
            </p>
          </motion.div>
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-[#0B1120] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-[#0B1120] to-transparent z-10" />

            <div className="overflow-hidden rounded-2xl border border-gray-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm py-10 mt-16 flex flex-col gap-12">
              <div
                className="group overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
              >
                <div className="flex w-max gap-10 sm:gap-[60px] animate-[scrollLeft_35s_linear_infinite] group-hover:[animation-play-state:paused]">
                  {[...techLogosRow1, ...techLogosRow1].map((tech, index) => (
                    <div key={`row1-${tech.name}-${index}`} className="flex items-center justify-center" aria-label={tech.name} title={tech.name}>
                      <img
                        src={tech.src || `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 opacity-90 hover:scale-110 hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (tech.fallbackSrc && !e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = '1';
                            e.currentTarget.src = tech.fallbackSrc;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="group overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
              >
                <div className="flex w-max gap-10 sm:gap-[60px] animate-[scrollRight_35s_linear_infinite] group-hover:[animation-play-state:paused]">
                  {[...techLogosRow2, ...techLogosRow2].map((tech, index) => (
                    <div key={`row2-${tech.name}-${index}`} className="flex items-center justify-center" aria-label={tech.name} title={tech.name}>
                      <img
                        src={tech.src || `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 opacity-90 hover:scale-110 hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (tech.fallbackSrc && !e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = '1';
                            e.currentTarget.src = tech.fallbackSrc;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="group overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
              >
                <div className="flex w-max gap-10 sm:gap-[60px] animate-[scrollLeft_35s_linear_infinite] group-hover:[animation-play-state:paused]">
                  {[...techLogosRow3, ...techLogosRow3].map((tech, index) => (
                    <div key={`row3-${tech.name}-${index}`} className="flex items-center justify-center" aria-label={tech.name} title={tech.name}>
                      <img
                        src={tech.src || `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 opacity-90 hover:scale-110 hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (tech.fallbackSrc && !e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = '1';
                            e.currentTarget.src = tech.fallbackSrc;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="group overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
              >
                <div className="flex w-max gap-10 sm:gap-[60px] animate-[scrollRight_35s_linear_infinite] group-hover:[animation-play-state:paused]">
                  {[...techLogosRow4, ...techLogosRow4].map((tech, index) => (
                    <div key={`row4-${tech.name}-${index}`} className="flex items-center justify-center" aria-label={tech.name} title={tech.name}>
                      <img
                        src={tech.src || `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                        alt={tech.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 opacity-90 hover:scale-110 hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (tech.fallbackSrc && !e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = '1';
                            e.currentTarget.src = tech.fallbackSrc;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="glass-surface p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how our expertise can help you achieve your business goals.
            </p>
            <Link to="/contact" state={{ disableNavPillAnimation: true }}>
              <Button size="lg">
                Get a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
