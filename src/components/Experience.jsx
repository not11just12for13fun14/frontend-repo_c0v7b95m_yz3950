import { motion } from 'framer-motion'

const roles = [
  {
    company: 'Acme Ventures',
    role: 'Digital Marketing Executive',
    period: '2022 — Present',
    bullets: [
      'Owned SEO/SEM strategy across 7 markets, growing non-brand clicks by 89%',
      'Scaled paid social experiments with creative testing framework',
      'Partnered with product to improve onboarding funnel and activation'
    ]
  },
  {
    company: 'BrightLabs',
    role: 'Performance Marketer',
    period: '2020 — 2022',
    bullets: [
      'Cut CPA by 34% through keyword segmentation and bid automation',
      'Built analytics dashboards in GA4 + Looker for exec reporting'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
          <p className="mt-3 text-gray-600">A track record of measurable growth and collaborative execution.</p>
        </div>

        <div className="mt-10 grid gap-6">
          {roles.map((r, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">{r.period}</div>
                  <div className="font-semibold">{r.role}</div>
                </div>
                <div className="text-gray-700 font-medium">{r.company}</div>
              </div>
              <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-1">
                {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
