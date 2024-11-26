'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ChordDiagram from '../components/chord-diagram'

const chords: { [key: string]: number[] } = {
  'C': [0, 3, 2, 0, 1, 0],  // Corrected C chord
  'G': [3, 2, 0, 0, 0, 3],
  'D': [-1, -1, 0, 2, 3, 2],
  'A': [0, 0, 2, 2, 2, 0],
  'E': [0, 2, 2, 1, 0, 0],
  'F': [1, 3, 3, 2, 1, 1],
  'Am': [0, 0, 2, 2, 1, 0],
  'Em': [0, 2, 2, 0, 0, 0],
  'Dm': [-1, -1, 0, 2, 3, 1],
}

export default function ChordCharts() {
  const [selectedChord, setSelectedChord] = useState('C')

  const handleRandomChord = () => {
    const chordNames = Object.keys(chords)
    const randomChord = chordNames[Math.floor(Math.random() * chordNames.length)]
    setSelectedChord(randomChord)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Guitar Chord Charts</h1>
      <Card>
        <CardHeader>
          <CardTitle>Select a Chord</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row items-center gap-4">
          <Select value={selectedChord} onValueChange={setSelectedChord}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a chord" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(chords).map((chord) => (
                <SelectItem key={chord} value={chord}>{chord}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleRandomChord}>Random Chord</Button>
        </CardContent>
      </Card>
      <Card className="dark">
        <CardHeader>
          <CardTitle>{selectedChord} Chord</CardTitle>
        </CardHeader>
        <CardContent>
          <ChordDiagram chord={chords[selectedChord]} chordName={selectedChord} />
        </CardContent>
      </Card>
    </div>
  )
}

