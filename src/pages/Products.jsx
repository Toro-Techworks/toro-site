import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import useNavigationAnimation from '../hooks/useNavigationAnimation';

const Products = () => {
  const { shouldAnimateEntry } = useNavigationAnimation();
  const products = [
    {
      name: 'ToroTex ERP',
      tagline: 'One platform. From yarn to delivery.',
      description: 'Purpose-built ERP for textile manufacturers, garment factories, and fabric traders. Get real-time visibility across production, inventory, and orders—so you can scale without the chaos.',
      benefits: 'Reduce waste, meet compliance, and ship on time with automation and analytics that grow with you.',
      features: [
        'Production & manufacturing tracking',
        'Inventory & raw material management',
        'Order & sales management',
        'Quality control & compliance',
        'Reporting & analytics',
      ],
      image: '🧵',
      category: 'ERP',
      target: 'Textile manufacturers, garment factories, fabric traders',
      price: 'Custom pricing',
      cta: 'See Textile ERP in action',
    },
    {
      name: 'Toro Billing',
      tagline: 'Invoicing that keeps pace with your business.',
      description: 'Smart billing and invoicing for retailers, wholesalers, and SMEs. Automate quotes, track payments, and stay tax-ready—with real-time insights that drive better decisions.',
      benefits: 'Less manual work, fewer errors, and a clear view of cash flow. Built for growth and compliance.',
      features: [
        'Invoicing & quotes',
        'Payment tracking',
        'Tax & compliance',
        'Multi-currency support',
        'Reports & statements',
      ],
      image: '📄',
      category: 'Finance',
      target: 'Retailers, wholesalers, SMEs',
      price: 'Custom pricing',
      cta: 'Explore Billing Application',
    },
  ];

  const whyChoose = [
    {
      title: 'Built for scale',
      text: 'Architecture that grows with you-from first order to enterprise volume.',
    },
    {
      title: 'Real-time insights',
      text: 'Dashboards and reports that give you control, not guesswork.',
    },
    {
      title: 'Automation-first',
      text: 'Reduce manual work and errors so your team focuses on growth.',
    },
    {
      title: 'Support when it matters',
      text: 'Onboarding, training, and ongoing support from people who know the product.',
    },
  ];

  const howItWorks = [
    { step: '01', title: 'Book a demo', text: 'Tell us your needs. We show you the product and map it to your workflow.' },
    { step: '02', title: 'Customize & deploy', text: 'We configure and integrate so you go live without the headache.' },
    { step: '03', title: 'Grow with support', text: 'Training, updates, and support so you keep optimizing.' },
  ];

  const testimonials = [
    {
      quote: 'Textile ERP gave us one source of truth for production and inventory. We cut reporting time by half and finally have visibility we can act on.',
      name: 'Kannan K.',
      role: 'Operations Head, Textile Manufacturer',
    },
    {
      quote: 'The Billing Application replaced our spreadsheets and manual invoices. We’re faster, compliant, and our cash flow visibility is clear.',
      name: 'Dhinesh M.',
      role: 'Finance Manager, Wholesale Distributor',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Software that Powers your Growth
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Purpose-built products for manufacturing and billing—automation, real-time insights, and scalability so you stay ahead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={shouldAnimateEntry ? { opacity: 0, y: 24 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/70 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-6">
                    <div className="text-5xl mb-4">{product.image}</div>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary-50 text-primary-600 dark:bg-green-500/10 dark:text-green-400 dark:border dark:border-green-500/20">
                      {product.category}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-1">
                      {product.name}
                    </h2>
                    <p className="text-primary-600 dark:text-green-400 font-medium text-sm mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {product.description}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                      {product.benefits}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      For: {product.target}
                    </p>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                      Key features
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary-600 dark:text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{product.price}</span>
                    <Link to="/contact">
                      <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3">{product.cta}</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Software */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Why choose our software
          </motion.h2>
          <motion.p
            initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Built for businesses that want clarity, control, and room to grow-without the complexity.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-left p-6 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/70 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-xl mx-auto"
          >
            From first conversation to go-live and beyond-we keep it simple and focused on your success.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <span className="inline-block text-4xl font-bold text-primary-600 dark:text-green-400 opacity-80 mb-4">
                  {item.step}
                </span>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4"
          >
            What our customers say
          </motion.h2>
          <motion.p
            initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-xl mx-auto"
          >
            Businesses like yours are already running on our software. Here’s what they’re saying.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={shouldAnimateEntry ? { opacity: 0, y: 16 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-8 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/70 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{t.quote}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-600/10 via-primary-500/5 to-transparent dark:from-primary-900/30 dark:via-primary-900/10 dark:to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to streamline your operations?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Book a demo and see how Textile ERP or our Billing Application can fit your business. No commitment—just a clear path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3">
                  Book a demo
                </Button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Talk to sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
