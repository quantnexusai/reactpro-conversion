'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, CheckCircle, MessageCircle, X } from 'lucide-react'
import { isDemoMode, getSampleClaudeResponse } from '@/lib/demo-data'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([])
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)
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

    const form = sectionRef.current?.querySelector('.contact-form')
    if (form) observer.observe(form)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setFormSubmitted(true)
  }

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim() || chatLoading) return

    const userMessage = chatInput.trim()
    setChatInput('')
    setChatMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setChatLoading(true)

    try {
      if (isDemoMode()) {
        // Demo mode - use sample responses
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const response = getSampleClaudeResponse(userMessage)
        setChatMessages((prev) => [...prev, { role: 'assistant', content: response }])
      } else {
        // Real API call
        const response = await fetch('/api/claude', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage }),
        })
        const data = await response.json()
        setChatMessages((prev) => [...prev, { role: 'assistant', content: data.response }])
      }
    } catch {
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
      ])
    } finally {
      setChatLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-100" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          Ready to Transform Your Site?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Contact us for a personalized quote and start your journey to a modern web experience.
        </p>

        <div className="contact-form max-w-xl mx-auto card opacity-0 translate-y-8 transition-all duration-600">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-left">
                <label htmlFor="name" className="block text-primary-900 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="email" className="block text-primary-900 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="website" className="block text-primary-900 font-semibold mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="input"
                  placeholder="https://yourwebsite.com"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="message" className="block text-primary-900 font-semibold mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  className="input h-32 resize-none"
                  placeholder="Describe your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Request a Quote
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Message Sent!</h3>
              <p className="text-gray-600">We'll respond within 24 hours.</p>
            </div>
          )}
        </div>
      </div>

      {/* Claude AI Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          <div className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 overflow-hidden">
            <div className="bg-primary-900 text-white p-4 flex justify-between items-center">
              <span className="font-semibold">Ask Claude AI</span>
              <button onClick={() => setChatOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {chatMessages.length === 0 && (
                <p className="text-gray-500 text-sm text-center">
                  Ask me anything about WordPress to React conversion!
                </p>
              )}
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary-100 ml-8'
                      : 'bg-gray-100 mr-8'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {chatLoading && (
                <div className="bg-gray-100 p-3 rounded-lg mr-8 text-sm text-gray-500">
                  Thinking...
                </div>
              )}
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a message..."
                  className="input flex-1 text-sm"
                />
                <button
                  type="submit"
                  className="bg-primary-900 text-white p-2 rounded-lg hover:bg-primary-800 transition"
                  disabled={chatLoading}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-primary-900 text-white p-4 rounded-full shadow-lg hover:bg-primary-800 transition glow"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}
      </div>
    </section>
  )
}
