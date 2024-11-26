import Link from 'next/link'
import { Music, FileText, List, Eye } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to CCFI Worship Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link href="/create" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Music className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Create Lyrics</h2>
          <p>Create and edit song lyrics with chords</p>
        </Link>
        <Link href="/view-lyrics" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Eye className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">View Lyrics</h2>
          <p>View song lyrics with chords</p>
        </Link>
        <Link href="/chord-charts" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <FileText className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Chord Charts</h2>
          <p>View and learn chord fingerings</p>
        </Link>
        <Link href="/line-up" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <List className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Line-up</h2>
          <p>See the upcoming worship line-up</p>
        </Link>
      </div>
    </div>
  )
}

