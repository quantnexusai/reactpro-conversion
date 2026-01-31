'use client'

import { useEffect, useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "ReactPro delivered a 65% faster site with stunning visuals. Our engagement metrics have never been better.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechSolutions Inc.",
  },
]

export default function Testimonials() {
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

    const card = sectionRef.current?.querySelector('.testimonial-card')
    if (card) observer.observe(card)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from our clients who transformed their digital presence with ReactPro.
        </p>

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg opacity-0 translate-y-8 transition-all duration-600"
          >
            <Quote className="h-8 w-8 text-primary-300 mx-auto mb-4" />
            <p className="text-lg italic text-gray-600 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-primary-900">{testimonial.author}</p>
            <p className="text-sm text-gray-600">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  )
}
