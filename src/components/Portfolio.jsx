import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'E-commerce Growth',
    category: 'Retail',
    stats: '156% increase in organic traffic',
    description: 'Helped a leading e-commerce brand achieve record-breaking organic traffic and sales through strategic SEO optimization.',
  },
  {
    title: 'B2B Lead Generation',
    category: 'Technology',
    stats: '200% increase in qualified leads',
    description: "Transformed a B2B tech company's online presence, resulting in a significant boost in high-quality lead generation.",
  },
  {
    title: 'Local Business Success',
    category: 'Services',
    stats: '89% increase in local visibility',
    description: "Elevated a local service provider's search presence, driving more local customers and business growth.",
  },
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            See how we've helped businesses like yours achieve remarkable growth through SEO.
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <span className="text-gray-500">{project.category}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {project.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
              <div className="mt-8 flex w-full justify-between items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-blue-600">{project.stats}</p>
                </div>
                <a
                  href="#contact"
                  className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}