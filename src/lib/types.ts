export interface Profile {
  id: string
  email: string
  first_name?: string
  last_name?: string
  company?: string
  website?: string
  created_at?: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  website: string
  message: string
  created_at: string
  status: 'pending' | 'contacted' | 'completed'
  user_id?: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}
