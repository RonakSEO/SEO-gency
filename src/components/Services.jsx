import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Technical SEO',
    description: "Optimize your website's infrastructure for better search engine visibility and crawlability.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Content Strategy',
    description: 'Create engaging, keyword-optimized content that drives organic traffic and conversions.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Link Building',
    description: 'Build high-quality backlinks to increase your domain authority and rankings.',
    icon: LinkIcon,
  },
  {
    name: 'Analytics & Reporting',
    description: 'Track your SEO performance with detailed analytics and actionable insights.',
    icon: ChartBarIcon,
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Comprehensive SEO Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We offer end-to-end SEO solutions to help your business rank higher,
            drive more traffic, and generate quality leads.
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="#contact" className="text-sm font-semibold leading-6 text-blue-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}