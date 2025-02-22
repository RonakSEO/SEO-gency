import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const metrics = [
  { id: 1, stat: '10x', emphasis: 'ROI', rest: 'on average for our clients' },
  { id: 2, stat: '150%', emphasis: 'traffic increase', rest: 'within 6 months' },
  { id: 3, stat: '200+', emphasis: 'keywords', rest: 'ranking on page 1' },
  { id: 4, stat: '95%', emphasis: 'client retention', rest: 'rate year over year' },
];

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We've helped companies of all sizes achieve remarkable results through our proven SEO strategies.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.id} className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{metric.emphasis}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
                  {metric.stat}
                </dd>
                <dd className="mt-1 text-sm text-gray-600">{metric.rest}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 flex justify-center">
            <a href="#contact" className="btn-primary">
              Get Similar Results
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}