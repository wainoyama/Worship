'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function CreateLyrics() {
  const [title, setTitle] = useState('')
  const [lyrics, setLyrics] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the lyrics to a database or file
    console.log('Saving lyrics:', { title, lyrics })
    alert('Lyrics saved successfully!')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create Lyrics with Chords</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Song Title</label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="lyrics" className="block text-sm font-medium text-gray-700">Lyrics and Chords</label>
          <Textarea
            id="lyrics"
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            required
            className="mt-1 h-64"
            placeholder="Enter lyrics and chords here. Use square brackets for chords, e.g.: [G]Amazing [C]grace, how [D]sweet the [G]sound"
          />
        </div>
        <Button type="submit">Save Lyrics</Button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <pre className="whitespace-pre-wrap font-mono">{lyrics}</pre>
        </div>
      </div>
    </div>
  )
}

