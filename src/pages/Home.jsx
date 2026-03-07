import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import HeroDashboardPreview from '../components/HeroDashboardPreview';
import { Component as AuroraFlow } from '../components/ui/aurora-flow';
import useNavigationAnimation from '../hooks/useNavigationAnimation';

/** Parses "80+", "98%", "24/7" etc. into { target: number, suffix: string } */
function parseMetricNumber(str) {
  const match = String(str).match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: str };
  return { target: parseInt(match[1], 10), suffix: match[2] || '' };
}

function CountUp({ value, start, duration = 1.5 }) {
  const { target, suffix } = parseMetricNumber(value);
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v) + suffix);

  useEffect(() => {
    if (!start) {
      count.set(0);
      return;
    }
    const controls = animate(count, target, { duration, ease: 'easeOut' });
    return () => controls.stop();
  }, [start, target, duration, count]);

  return <motion.span>{display}</motion.span>;
}

const Home = () => {
  const navigate = useNavigate();
  const [metricsInView, setMetricsInView] = useState(false);
  const { shouldAnimateEntry } = useNavigationAnimation();
  const trustMetrics = [
    { number: '10+', label: 'Products Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Expert Professionals' },
    { number: '24/7', label: 'Support Available' },
  ];

  const whatWeDo = [
    {
      title: 'ERP & Business Systems',
      description: 'Custom ERP platforms designed to centralize operations, finance, and reporting.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
    },
    {
      title: 'Custom Software Development',
      description: 'Scalable web and enterprise applications tailored to your business needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ),
    },
    {
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate manual inefficiencies with intelligent automation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
    },
    {
      title: 'System Modernization',
      description: 'Upgrade legacy systems to secure, high-performance modern architectures.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
      ),
    },
  ];

  const industries = ['Manufacturing', 'Logistics', 'Retail', 'Finance', 'Healthcare', 'Education'];

  const whyToro = [
    { title: 'Business-First Approach', description: 'We design systems aligned with real operational goals.' },
    { title: 'Scalable Architecture', description: 'Built to grow with your business.' },
    { title: 'Clean & Modern UI', description: 'Intuitive interfaces focused on usability.' },
    { title: 'Secure & Performance Optimized', description: 'Engineered for reliability and speed.' },
    { title: 'Long-Term Technical Support', description: 'We partner beyond project delivery.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="hero-background relative">
          <div className="vignette" />
          <div className="atmospheric-glow atmospheric-glow-1" />
          <div className="atmospheric-glow atmospheric-glow-2" />
          <div className="atmospheric-glow atmospheric-glow-3" />
          <div className="noise-overlay" />
          {/* Aurora Flow Background - positioned absolutely */}
          <div className="absolute inset-0 z-50">
            <AuroraFlow />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={shouldAnimateEntry ? { opacity: 0, x: -50 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                <span className="text-gradient">Smart Software for</span>
                <br />
                Modern Businesses
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Toro Tech designs and develops ERP platforms, business applications, and custom digital solutions that streamline operations and accelerate growth across industries.
              </p>
            </motion.div>

            <motion.div
              initial={shouldAnimateEntry ? { opacity: 0, y: 50 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <HeroDashboardPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-80px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
            onViewportEnter={() => setMetricsInView(true)}
            onViewportLeave={() => setMetricsInView(false)}
          >
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    <CountUp value={metric.number} start={metricsInView} duration={1.8} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {metric.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-[#0F172A] dark:to-[#0B1120]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.15),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="h-[2px] w-16 bg-[color:var(--primary-green)] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              What We Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              We build scalable digital systems that transform how businesses operate.
            </p>
          </motion.div>

        <div className="max-w-6xl mx-auto px-6 mt-20 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-gray-200/60 dark:bg-white/10 pointer-events-none" aria-hidden />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 items-start relative">
              {whatWeDo.map((item, index) => {
                const alignRight = index === 1 || index === 3;
                const alignLeft = index === 0 || index === 2;
                const staggerClasses = [
                  'mt-0',
                  'mt-6 md:mt-[10rem]',
                  'mt-6 md:-mt-[3.5rem]',
                  'mt-6 md:mt-[7rem]',
                ][index];
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`self-start ${staggerClasses}`}
                  >
                    <div className={`max-w-xl ${alignRight ? 'md:ml-auto' : ''} ${alignLeft ? 'md:mr-auto' : ''}`}>
                      <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:border-[color:var(--primary-green)]/40 self-start">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[color:var(--primary-green)]/10 dark:bg-[color:var(--primary-green)]/20 border border-[color:var(--primary-green)]/30 dark:border-[color:var(--primary-green)]/40 mb-6 text-[color:var(--primary-green)]">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-primary-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Delivering technology solutions across diverse sectors.
            </p>
          </motion.div>

          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0 } : false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industries.map((name, index) => (
              <motion.div
                key={name}
                initial={shouldAnimateEntry ? { opacity: 0, scale: 0.95 } : false}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full glass-surface border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium hover:shadow-[0_0_24px_rgba(49,46,129,0.2)] transition-all duration-300 cursor-default dark:bg-gray-800/60"
              >
                {name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* Why Toro Tech */}
<section className="relative py-28 bg-white dark:bg-[#0B1120] transition-colors duration-500">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto">
      <div className="h-[2px] w-16 bg-[color:var(--primary-green)] mx-auto mb-6" />

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Why Toro Tech
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg">
        We combine technology expertise with business understanding.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-gray-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[color:var(--primary-green)]/40">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm px-3 py-1 rounded-full border border-primary-500/30 text-primary-600 dark:text-green-400">
            01
          </span>

          <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Business-First Approach
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          We design systems aligned with real operational goals.
        </p>
      </div>


      {/* Card 2 */}
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-gray-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[color:var(--primary-green)]/40">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm px-3 py-1 rounded-full border border-primary-500/30 text-primary-600 dark:text-green-400">
            02
          </span>

          <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Scalable Architecture
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          Built to grow with your business.
        </p>
      </div>


      {/* Card 3 */}
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-gray-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[color:var(--primary-green)]/40">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm px-3 py-1 rounded-full border border-primary-500/30 text-primary-600 dark:text-green-400">
            03
          </span>

          <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Clean & Modern UI
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          Intuitive interfaces focused on usability.
        </p>
      </div>
    </div>


    {/* Bottom Row */}
    <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">

      {/* Card 4 */}
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-gray-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[color:var(--primary-green)]/40 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm px-3 py-1 rounded-full border border-primary-500/30 text-primary-600 dark:text-green-400">
            04
          </span>

          <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Secure & Performance Optimized
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          Engineered for reliability and speed.
        </p>
      </div>


      {/* Card 5 */}
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/70 border border-gray-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[color:var(--primary-green)]/40 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm px-3 py-1 rounded-full border border-primary-500/30 text-primary-600 dark:text-green-400">
            05
          </span>

          <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Long-Term Technical Support
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          We partner beyond project delivery.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[color:var(--primary-green)]/10 via-[color:var(--accent-green)]/8 to-transparent dark:from-[color:var(--primary-green)]/14 dark:via-[color:var(--accent-green)]/10 dark:to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Your Next Digital System?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Let's discuss how Toro Tech can power your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() =>
                  navigate('/contact', {
                    state: {
                      disableEntryAnimation: true,
                      instantScrollTop: true,
                    },
                  })
                }
                className="cta-button-glow px-8 py-4 text-lg font-semibold rounded-xl bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Book a Consultation
              </button>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
