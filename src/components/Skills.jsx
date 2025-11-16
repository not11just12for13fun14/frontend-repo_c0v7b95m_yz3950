const skills = [
  { name: 'SEO/SEM', level: 'Expert' },
  { name: 'Google Ads', level: 'Advanced' },
  { name: 'Meta/TikTok Ads', level: 'Advanced' },
  { name: 'GA4 / Tag Manager', level: 'Advanced' },
  { name: 'CRM & Email', level: 'Intermediate' },
  { name: 'Content Strategy', level: 'Advanced' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
          <p className="mt-3 text-gray-600">Tools and capabilities I use to drive growth.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-5 bg-white">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-500">{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
