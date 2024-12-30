import { Camera, Bot, Dumbbell, Video } from 'lucide-react'

export default function Features() {
  return (
    (<section className="py-24 bg-black/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <Camera className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Computer Vision Tracking</h3>
            <p className="text-gray-600">Real-time form analysis and posture correction using advanced AI.</p>
          </div>
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <Bot className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Workout Assistant</h3>
            <p className="text-gray-600">24/7 AI chatbot for workout advice and guidance.</p>
          </div>
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <Video className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exercise Videos</h3>
            <p className="text-gray-600">Continuous stream of professional workout videos.</p>
          </div>
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <Dumbbell className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Programs</h3>
            <p className="text-gray-600">Personalized workout plans based on your goals.</p>
          </div>
        </div>
      </div>
    </section>)
  );
}

