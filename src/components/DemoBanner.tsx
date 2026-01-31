'use client'

import { isDemoMode } from '@/lib/demo-data'
import { Info } from 'lucide-react'

export default function DemoBanner() {
  if (!isDemoMode()) return null

  return (
    <div className="bg-accent-500 text-primary-900 py-2 px-4 text-center text-sm font-medium">
      <div className="flex items-center justify-center gap-2">
        <Info className="h-4 w-4" />
        <span>
          <strong>Local Preview Mode</strong> - Using sample data. Deploy to Vercel with API keys for full functionality.
        </span>
      </div>
    </div>
  )
}
