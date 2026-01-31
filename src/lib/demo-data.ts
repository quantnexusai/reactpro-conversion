// Demo mode detection for local preview without API keys
export const isDemoMode = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  return !supabaseUrl || supabaseUrl === '' || supabaseUrl.includes('placeholder') || supabaseUrl === 'your_supabase_project_url'
}

// Demo user for local preview
export const demoUser = {
  id: 'demo-user-id',
  email: 'demo@example.com',
  created_at: new Date().toISOString(),
}

export const demoProfile = {
  id: 'demo-user-id',
  email: 'demo@example.com',
  first_name: 'Demo',
  last_name: 'User',
  company: 'Demo Company',
  website: 'https://example.com',
}

// Demo contact submissions
export const demoSubmissions = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@techcorp.com',
    website: 'https://techcorp.com',
    message: 'Looking to convert our WordPress blog to React for better performance.',
    created_at: '2025-01-15T10:30:00Z',
    status: 'pending',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@startup.io',
    website: 'https://startup.io',
    message: 'We need a modern React frontend for our e-commerce platform.',
    created_at: '2025-01-14T14:20:00Z',
    status: 'contacted',
  },
]

// Sample Claude AI responses for demo mode
export const getSampleClaudeResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('convert') || lowerMessage.includes('wordpress')) {
    return "Converting a WordPress site to React typically involves: 1) Analyzing the current WordPress structure and content, 2) Setting up a headless CMS or API layer, 3) Building React components to match the existing design, 4) Implementing routing and state management, 5) Migrating content and ensuring SEO preservation. The process usually results in 50-70% faster load times."
  }

  if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
    return "Project costs vary based on complexity, number of pages, custom functionality, and timeline. A typical WordPress to React conversion ranges from a few thousand dollars for simple sites to significantly more for complex e-commerce or membership platforms. Contact us for a personalized quote based on your specific requirements."
  }

  if (lowerMessage.includes('time') || lowerMessage.includes('long')) {
    return "Project timelines depend on the scope and complexity. A simple brochure site might take 2-4 weeks, while a complex e-commerce platform could take 2-3 months. We'll provide a detailed timeline estimate after reviewing your current WordPress site."
  }

  return "Thank you for your question! Our team specializes in converting WordPress sites to modern React applications. We focus on performance optimization, responsive design, and maintaining SEO rankings during the transition. How can we help with your specific project?"
}
