export default function ExerciseVideos() {
  const videos = [
    { id: 1, title: 'Full Body Workout', duration: '45 min' },
    { id: 2, title: 'HIIT Training', duration: '30 min' },
    { id: 3, title: 'Strength Training', duration: '60 min' },
    { id: 4, title: 'Yoga Flow', duration: '40 min' },
  ]

  return (
    (<section className="py-24 bg-black/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Exercise Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-semibold">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

