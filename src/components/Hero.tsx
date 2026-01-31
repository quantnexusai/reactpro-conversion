export default function Hero() {
  return (
    <section id="hero" className="hero-bg text-white py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
          Elevate Your Digital Presence with React
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Transform your WordPress site into a lightning-fast, modern React application
          tailored for high-end performance and user experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#demo" className="btn-accent glow">
            View Demo
          </a>
          <a href="#contact" className="btn-secondary">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
