'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function AIChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, isUser: true }])
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm your AI workout assistant. How can I help you today?", 
        isUser: false 
      }])
    }, 1000)
    setInput('')
  }

  return (
    (<section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>AI Workout Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] mb-4 p-4 rounded-lg border">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`mb-4 ${
                    message.isUser ? 'text-right' : 'text-left'
                  }`}>
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your workout..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>)
  );
}

