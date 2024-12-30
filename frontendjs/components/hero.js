import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    (<section className="relative h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              TRAIN ON YOUR OWN TIME.
            </h1>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Join our VGym
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Athlete training"
              width={600}
              height={800}
              className="object-cover" />
          </div>
        </div>
      </div>
    </section>)
  );
}

