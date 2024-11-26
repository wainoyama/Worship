'use client'

import { useState } from 'react'
import { CalendarDays, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface WeekLineUp {
  date: string
  songs: string[]
}

export default function LineUp() {
  const [lineUp, setLineUp] = useState<WeekLineUp[]>([
    { date: '2023-05-28', songs: ['Amazing Grace', 'How Great Is Our God', 'Oceans'] },
    { date: '2023-06-04', songs: ['10,000 Reasons', 'Good Good Father', 'What A Beautiful Name'] },
    { date: '2023-06-11', songs: ['Cornerstone', 'Mighty to Save', 'Great Are You Lord'] },
  ])

  const [newDate, setNewDate] = useState('')
  const [newSong, setNewSong] = useState('')

  const addWeek = () => {
    if (newDate) {
      setLineUp([...lineUp, { date: newDate, songs: [] }])
      setNewDate('')
    }
  }

  const addSong = (weekIndex: number) => {
    if (newSong) {
      const updatedLineUp = [...lineUp]
      updatedLineUp[weekIndex].songs.push(newSong)
      setLineUp(updatedLineUp)
      setNewSong('')
    }
  }

  const removeSong = (weekIndex: number, songIndex: number) => {
    const updatedLineUp = [...lineUp]
    updatedLineUp[weekIndex].songs.splice(songIndex, 1)
    setLineUp(updatedLineUp)
  }

  const deleteWeek = (weekIndex: number) => {
    const updatedLineUp = lineUp.filter((_, index) => index !== weekIndex);
    setLineUp(updatedLineUp);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Worship Line-up</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Add New Week</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <Input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-full"
          />
          <Button onClick={addWeek}>Add Week</Button>
        </CardContent>
      </Card>

      {lineUp.map((week, weekIndex) => (
        <Card key={week.date}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <CalendarDays className="w-6 h-6 mr-2 text-blue-600" />
                {new Date(week.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteWeek(weekIndex)}
                aria-label={`Delete week of ${week.date}`}
              >
                Delete Week
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {week.songs.map((song, songIndex) => (
                <li key={songIndex} className="flex items-center justify-between">
                  <span>{song}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSong(weekIndex, songIndex)}
                    aria-label={`Remove ${song}`}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <Input
                type="text"
                placeholder="Add a new song"
                value={newSong}
                onChange={(e) => setNewSong(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={() => addSong(weekIndex)}>
                <Plus className="h-4 w-4 mr-2" /> Add Song
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

