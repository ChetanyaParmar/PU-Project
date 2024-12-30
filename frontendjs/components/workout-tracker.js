'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function WorkoutTracker() {
  const [isTracking, setIsTracking] = useState(false)

  return (
    (<section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Computer Vision Workout Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-lg mb-4">
              {isTracking ? (
                <div className="h-full flex items-center justify-center">
                  <p>Camera feed will appear here</p>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p>Enable camera to start tracking</p>
                </div>
              )}
            </div>
            <Button onClick={() => setIsTracking(!isTracking)} className="w-full">
              {isTracking ? 'Stop Tracking' : 'Start Tracking'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>)
  );
}

