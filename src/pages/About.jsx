import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { Lightbulb, Sparkles, Users, ShieldCheck, Target, Eye } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
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

const About = () => {
  const [statsInView, setStatsInView] = useState(false);
  const { shouldAnimateEntry } = useNavigationAnimation();
  const stats = [
    { number: '10+', label: 'Projects Delivered', description: 'Successfully completed software projects' },
    { number: '100%', label: 'Client Satisfaction', description: 'Trusted by our early clients' },
    { number: '10+', label: 'Developers Network', description: 'Core team and trusted collaborators' },
    { number: '3+', label: 'Years Experience', description: 'Hands-on software development expertise' },
    { number: '5+', label: 'Industries Served', description: 'Solutions built across different business sectors' },
    { number: '24/7', label: 'Support Ready', description: 'Always available to support our clients' },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Beginning',
      description:
        'The journey began with a strong interest in building practical software solutions that solve real-world business challenges using modern technology.',
    },
    {
      year: '2024',
      title: 'Technology & Skill Development',
      description:
        'Focused on mastering modern software development technologies including scalable web architectures, cloud platforms, and modern development frameworks.',
    },
    {
      year: '2025',
      title: 'Understanding Business Needs',
      description:
        'Worked closely with businesses to understand operational challenges and identify how digital solutions could simplify workflows and improve efficiency.',
    },
    {
      year: '2026',
      title: 'Foundation of Toro Tech',
      description:
        'Toro Tech was officially founded with the mission of building scalable business software, enterprise solutions, and modern digital platforms for growing companies.',
    },
    {
      year: '2026',
      title: 'First Products & Client Projects',
      description:
        'Started developing software solutions and collaborating with early clients to deliver reliable, scalable, and impactful digital products.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and adopt modern technologies to solve complex business challenges.',
      icon: Lightbulb,
    },
    {
      title: 'Quality',
      description: 'We deliver reliable, scalable software with attention to detail and engineering excellence.',
      icon: Sparkles,
    },
    {
      title: 'Collaboration',
      description: 'We work closely with clients and teams to build solutions that create long-term value.',
      icon: Users,
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and strong professional ethics.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gradient mb-6">
              About Toro Tech
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and innovators 
              dedicated to building exceptional software solutions that transform businesses.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={shouldAnimateEntry ? { opacity: 0, x: -30 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card hover={false} className="bg-white dark:bg-slate-800/70 border-l-4 border-primary-500 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative, scalable, and user-friendly software solutions
                  that drive growth, efficiency, and competitive advantage in the digital age.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={shouldAnimateEntry ? { opacity: 0, x: 30 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card hover={false} className="bg-white dark:bg-slate-800/70 border-l-4 border-primary-500 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Vision
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become the global leader in premium software development, recognized for our
                  technical excellence, innovative solutions, and unwavering commitment to client success.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Our Impact by Numbers */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Impact by Numbers
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-80px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
            onViewportEnter={() => setStatsInView(true)}
            onViewportLeave={() => setStatsInView(false)}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    <CountUp value={stat.number} start={statsInView} duration={1.8} />
                  </div>
                  <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Our Story
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800" />
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={shouldAnimateEntry ? { opacity: 0, x: index % 2 === 0 ? -30 : 30 } : false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2" />
                  <div className="relative flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <div className="w-1/2 px-8">
                    <Card>
                      <div className="text-sm font-semibold text-primary-600 mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="glass-surface p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <Button
              size="lg"
              onClick={() => window.open('https://www.linkedin.com/company/toro-techworks/', '_blank', 'noopener,noreferrer')}
            >
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
