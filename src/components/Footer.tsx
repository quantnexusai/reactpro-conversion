import { Atom, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const services = ['WordPress to React', 'React Components', 'PWAs', 'Performance Optimization']
const resources = ['Blog', 'Case Studies', 'Tutorials', 'FAQ']

const socialIcons = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Atom className="h-6 w-6 mr-2 text-accent-500" />
            <h3 className="text-xl font-semibold">ReactPro</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Transforming digital experiences with cutting-edge React solutions.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-accent-500 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service}>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resources.map((resource) => (
              <li key={resource}>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition">
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:ari@quantnexus.ai" className="text-gray-300 hover:text-accent-500 transition">
                ari@quantnexus.ai
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition">
                San Francisco, CA
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 pt-8 border-t border-gray-800 text-gray-400">
        <p>&copy; {new Date().getFullYear()} ReactPro. All rights reserved.</p>
      </div>
    </footer>
  )
}
