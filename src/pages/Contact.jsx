import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { Listbox, Transition } from '@headlessui/react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import useNavigationAnimation from '../hooks/useNavigationAnimation';

const Contact = () => {
  const { shouldAnimateEntry } = useNavigationAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [projectTypeError, setProjectTypeError] = useState('');
  const [submissionState, setSubmissionState] = useState('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState('idle');
    setSubmissionMessage('');

    if (!formData.projectType) {
      setProjectTypeError('Please select an enquiry type.');
      setSubmissionState('error');
      setSubmissionMessage('Please select an enquiry type.');
      return;
    }

    setProjectTypeError('');

    try {
      const response = await fetch('https://formspree.io/f/xjgavegg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        setSubmissionState('success');
        setSubmissionMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          message: '',
        });
      } else {
        setSubmissionState('error');
        setSubmissionMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmissionState('error');
      setSubmissionMessage('Network error. Please try again.');
    }
  };

  const handleProjectTypeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      projectType: value,
    }));
    if (projectTypeError) {
      setProjectTypeError('');
    }
  };

  const handleBudgetChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      budget: value,
    }));
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21.75 8.25v7.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-7.5m19.5 0a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 8.493V8.25" />
        </svg>
      ),
      title: 'Email',
      details: ['business@torotech.in', 'support@torotech.in'],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 4.5a2.25 2.25 0 012.25-2.25h2.318c1.027 0 1.91.699 2.143 1.699l.72 3.092a2.25 2.25 0 01-.986 2.45l-1.39.834a15.042 15.042 0 006.53 6.53l.834-1.39a2.25 2.25 0 012.45-.986l3.092.72a2.25 2.25 0 011.699 2.143V19.5a2.25 2.25 0 01-2.25 2.25h-1.5C9.29 21.75 2.25 14.71 2.25 6V4.5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['+91 9994481981', '+91 8220925587'],
    },
  ];

  const projectTypes = [
    { value: 'torotex-erp', label: 'ToroTex ERP' },
    { value: 'torobilling', label: 'ToroBilling' },
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'saas', label: 'SaaS Platform' },
    { value: 'enterprise', label: 'Enterprise Software' },
    { value: 'ecommerce', label: 'Online Selling Platform' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Other' },
  ];

  const budgetRanges = [
    '₹5,000 - ₹15,000',
    '₹15,000 - ₹50,000',
    '₹50,000 - ₹100,000',
    '₹100,000 - ₹250,000',
    '₹250,000+',
  ];

  const selectedProjectTypeLabel =
    projectTypes.find((type) => type.value === formData.projectType)?.label ||
    'Select enquiry type';
  const selectedBudgetLabel = formData.budget || 'Select budget range';

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(to bottom, transparent 0%, rgba(34, 197, 94, 0.08) 40%, rgba(34, 197, 94, 0.18) 100%)',
      }}
    >
      {/* Header */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gradient mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. 
              Send us a message and we'll respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={shouldAnimateEntry ? { opacity: 0, x: -30 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Our Team
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Tell us about your requirements and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card>
                      <div className="flex items-start mb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center mr-3 shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div
                initial={shouldAnimateEntry ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Schedule a Consultation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Book a free 30-minute consultation with our team to discuss your project requirements.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Schedule Consultation
                  </Button>
                </Card>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={shouldAnimateEntry ? { opacity: 0, x: 30 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Enquiry About *
                    </label>
                    <Listbox value={formData.projectType} onChange={handleProjectTypeChange}>
                      <div className="relative">
                        <Listbox.Button
                          className={`clay-input text-left flex items-center justify-between ${
                            formData.projectType ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
                          } ${projectTypeError ? 'ring-2 ring-red-500' : ''}`}
                        >
                          <span className="truncate">{selectedProjectTypeLabel}</span>
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Listbox.Options className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-lg p-1 focus:outline-none">
                            {projectTypes.map((type) => (
                              <Listbox.Option
                                key={type.value}
                                value={type.value}
                                className={({ active, selected }) =>
                                  `relative cursor-pointer select-none rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                                    active || selected
                                      ? 'bg-green-600 text-white'
                                      : 'text-gray-700 dark:text-gray-200'
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <div className="flex items-center justify-between">
                                    <span>{type.label}</span>
                                    {selected ? (
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    ) : null}
                                  </div>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                    <input type="hidden" name="projectType" value={formData.projectType} />
                    {projectTypeError ? (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{projectTypeError}</p>
                    ) : null}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <Listbox value={formData.budget} onChange={handleBudgetChange}>
                      <div className="relative">
                        <Listbox.Button
                          className={`clay-input text-left flex items-center justify-between ${
                            formData.budget ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          <span className="truncate">{selectedBudgetLabel}</span>
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Listbox.Options className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-lg p-1 focus:outline-none">
                            {budgetRanges.map((range) => (
                              <Listbox.Option
                                key={range}
                                value={range}
                                className={({ active, selected }) =>
                                  `relative cursor-pointer select-none rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                                    active || selected
                                      ? 'bg-green-600 text-white'
                                      : 'text-gray-700 dark:text-gray-200'
                                  }`
                                }
                              >
                                {({ selected }) => (
                                  <div className="flex items-center justify-between">
                                    <span>{range}</span>
                                    {selected ? (
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    ) : null}
                                  </div>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                    <input type="hidden" name="budget" value={formData.budget} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="clay-input resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                  {submissionMessage ? (
                    <p
                      className={`text-sm ${
                        submissionState === 'success'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {submissionMessage}
                    </p>
                  ) : null}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
