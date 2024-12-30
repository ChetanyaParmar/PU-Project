import Hero from '@/components/hero'
import Features from '@/components/features'
import Pricing from '@/components/pricing'
import Header from '@/components/header'
import ExerciseVideos from '@/components/exercise-videos'
import AIChat from '@/components/ai-chat'
import WorkoutTracker from '@/components/workout-tracker'

export default function Home() {
  return (
    (<div
      className="min-h-screen bg-gradient-to-br from-amber-400 via-amber-200 to-green-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <WorkoutTracker />
        <ExerciseVideos />
        <AIChat />
        <Pricing />
      </main>
    </div>)
  );
}

