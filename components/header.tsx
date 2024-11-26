import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">CCFI Worship</Link>
          <nav>
            <ul className="flex flex-wrap justify-center md:space-x-4">
              <li className="w-full md:w-auto mb-2 md:mb-0"><Link href="/create" className="block text-center hover:text-blue-200 px-3 py-2">Create Lyrics</Link></li>
              <li className="w-full md:w-auto mb-2 md:mb-0"><Link href="/view-lyrics" className="block text-center hover:text-blue-200 px-3 py-2">View Lyrics</Link></li>
              <li className="w-full md:w-auto mb-2 md:mb-0"><Link href="/chord-charts" className="block text-center hover:text-blue-200 px-3 py-2">Chord Charts</Link></li>
              <li className="w-full md:w-auto"><Link href="/line-up" className="block text-center hover:text-blue-200 px-3 py-2">Line-up</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

