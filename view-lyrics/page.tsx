'use client'

import { useState } from 'react'
import { Select } from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'

// This is mock data. In a real application, you'd fetch this from a database or API
const songs = [
  {
    title: "Amazing Grace",
    lyrics: `[G]Amazing grace how [C]sweet the sound
That [G]saved a wretch [D]like me
I [G]once was lost but [C]now I'm found
Was [G]blind but [D]now I [G]see`
  },
  {
    title: "How Great Is Our God",
    lyrics: `[G]The splendor of the King, [Em]clothed in majesty
Let all the Earth re[C]joice, all the Earth rejoice
[G]He wraps himself in light, and [Em]darkness tries to hide
And trembles at His [C]voice, trembles at His voice

[G]How great is our God, [C]sing with me
How great is our [Em]God, and all will see
How great, how [D]great is our [G]God`
  }
]

export default function ViewLyrics() {
  const [selectedSong, setSelectedSong] = useState(songs[0])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">View Lyrics with Chords</h1>
      <Select
        value={selectedSong.title}
        onValueChange={(value) => setSelectedSong(songs.find(song => song.title === value) || songs[0])}
      >
        {songs.map((song) => (
          <option key={song.title} value={song.title}>{song.title}</option>
        ))}
      </Select>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{selectedSong.title}</h2>
        <ScrollArea className="h-[400px]">
          <pre className="whitespace-pre-wrap font-mono text-lg">{selectedSong.lyrics}</pre>
        </ScrollArea>
      </div>
    </div>
  )
}

