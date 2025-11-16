import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Experience Digital Marketing Executive
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-6 text-lg text-gray-700 max-w-xl">
            I help brands grow with data-driven campaigns, SEO/SEM excellence, and playful, modern storytelling that converts.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-gray-300 hover:border-gray-400">Get in touch</a>
          </motion.div>
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <span>SEO/SEM</span>
            <span>Paid Media</span>
            <span>Analytics</span>
            <span>Content Strategy</span>
          </div>
        </div>
        <div className="h-[50vh] lg:h-[70vh]" />
      </div>
    </section>
  )
}
