import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getSampleClaudeResponse } from '@/lib/demo-data'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY

    // Demo mode - return sample response
    if (!apiKey || apiKey.includes('placeholder') || apiKey === 'your_anthropic_api_key') {
      return NextResponse.json({
        response: getSampleClaudeResponse(message),
        preview: true,
      })
    }

    // Real API call
    const anthropic = new Anthropic({ apiKey })

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `You are a helpful assistant for ReactPro, a service that converts WordPress sites to React applications.
You help potential clients understand the conversion process, benefits, and answer questions about web development.
Keep responses concise, friendly, and focused on helping users understand the value of React over WordPress.
Do not provide specific pricing - instead encourage them to fill out the contact form for a personalized quote.`,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    })

    const textContent = response.content.find((block) => block.type === 'text')
    const responseText = textContent && 'text' in textContent ? textContent.text : 'Sorry, I could not generate a response.'

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error('Claude API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response from Claude' },
      { status: 500 }
    )
  }
}
