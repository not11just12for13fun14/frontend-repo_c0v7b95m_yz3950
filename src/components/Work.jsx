import { motion } from 'framer-motion'

const items = [
  {
    title: 'E-commerce Growth Campaign',
    metrics: '+142% ROAS',
    desc: 'Scaled paid search and social while optimizing product feed and landing page CRO.'
  },
  {
    title: 'SaaS Lead Engine',
    metrics: '-38% CPL',
    desc: 'Built full-funnel SEM, gated content, and lifecycle nurture—boosted MQL quality.'
  },
  {
    title: 'Brand Awareness Sprint',
    metrics: '+3.4M Impressions',
    desc: 'Launched playful creative across YouTube, TikTok, and Display with precise targeting.'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-gray-600">A few case studies that show my approach to performance and creativity.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-xl border border-gray-200 p-6 bg-white/80 backdrop-blur shadow-sm">
              <div className="text-sm text-gray-500">{item.metrics}</div>
              <div className="mt-2 font-semibold">{item.title}</div>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
