import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const msg = await res.json()
      if (res.ok) setStatus({ ok: true, msg: msg.message || 'Thanks! I will get back shortly.' })
      else setStatus({ ok: false, msg: msg.detail || 'Something went wrong.' })
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s work together</h2>
        <p className="mt-3 text-gray-600">Tell me about your goals and I’ll share a quick plan.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <input name="company" placeholder="Company" className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea name="message" rows="5" required placeholder="What are you working on?" className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <button className="inline-flex justify-center px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800">Send message</button>
        </form>

        {status && (
          <div className={`mt-4 rounded-md p-3 ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status.msg}
          </div>
        )}
      </div>
    </section>
  )
}
