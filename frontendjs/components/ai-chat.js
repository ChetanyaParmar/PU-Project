import { useState } from 'react'
import axios from 'axios'  // Import axios for API requests
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function AIChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  
  // Your Gemini API endpoint and key
  const API_URL = 'https://api.gemini.com/v1/your-endpoint'; // Update with the actual Gemini endpoint
  const API_KEY = process.env.GEMINI_API_KEY; // Make sure to store the API key in an environment variable for security
  
  const handleSend = async () => {
    if (!input.trim()) return
    setMessages([...messages, { text: input, isUser: true }])
    
    try {
      // Send the user input to the Gemini API
      const response = await axios.post(API_URL, {
        prompt: input,  // The input text from the user
        apiKey: API_KEY  // API key for authentication
      });

      // Assume the response has the AI's answer in `response.data.text`
      setMessages(prev => [
        ...prev, 
        { text: response.data.text, isUser: false }  // Add AI response to messages
      ])
      
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      setMessages(prev => [
        ...prev, 
        { text: "Oops! Something went wrong. Please try again later.", isUser: false }
      ]);
    }
    
    setInput('')  // Clear input after sending
  }

  return (
    <section className="py-24">
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
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
