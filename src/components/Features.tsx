'use client'

import { useEffect, useRef } from 'react'
import { Smartphone, Zap, Puzzle } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Flawless performance across all devices with a mobile-first approach.',
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    description: "React's virtual DOM ensures lightning-fast load times and smooth interactions.",
  },
  {
    icon: Puzzle,
    title: 'Modular Components',
    description: 'Reusable components for consistent design and rapid development.',
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          Why Choose ReactPro?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Our expert team delivers unparalleled performance, scalability, and elegance
          for your web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="feature-card p-6 bg-gray-50 rounded-lg hover-scale opacity-0 translate-y-8 transition-all duration-600"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
