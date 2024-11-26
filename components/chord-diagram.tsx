interface ChordDiagramProps {
    chord: number[]
    chordName: string
  }
  
  export default function ChordDiagram({ chord, chordName }: ChordDiagramProps) {
    const strings = 6
    const frets = 4
  
    if (!chord || chord.length !== strings) {
      return <div>Invalid chord data</div>
    }
  
    const stringLabels = ['E', 'A', 'D', 'G', 'B', 'e']
  
    return (
      <div className="font-mono">
        <div className="flex flex-col items-center bg-gray-900 text-white p-8 rounded-lg">
          {/* Fret numbers */}
          <div className="flex justify-between w-full mb-2 px-4">
            {[4, 3, 2, 1].map((fret) => (
              <span key={fret} className="w-24 text-center">{fret}</span>
            ))}
            <span className="w-4"></span>
          </div>
  
          {/* Fretboard */}
          {[...Array(strings)].map((_, stringIndex) => (
            <div key={stringIndex} className="flex w-full items-center">
              {/* Fret positions */}
              {[...Array(frets)].map((_, fretIndex) => (
                <div key={fretIndex} className="w-24 border-b-2 border-gray-600 h-8 flex items-center justify-center relative">
                  {chord[stringIndex] === (4 - fretIndex) && (
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      {chord[stringIndex]}
                    </span>
                  )}
                  {fretIndex < frets - 1 && (
                    <span className="absolute right-0 top-1/2 transform translate-y-[-50%] text-gray-600">|</span>
                  )}
                  --------
                </div>
              ))}
              {/* String labels */}
              <span className="w-4 text-right">{stringLabels[stringIndex]}</span>
            </div>
          ))}
  
          {/* Muted and open strings indicators */}
          <div className="flex justify-between w-full px-4 mt-[-2rem]">
            {[...Array(strings)].map((_, index) => (
              <span key={index} className="w-24 text-center">
                {chord[index] === -1 ? 'x' : chord[index] === 0 ? 'o' : ''}
              </span>
            ))}
            <span className="w-4"></span>
          </div>
  
          {/* Chord name */}
          <div className="mt-4 text-xl font-bold">{chordName}</div>
  
          {/* Legend */}
          <div className="mt-6 text-left self-start text-sm space-y-1">
            <div>number in frets indicates its position</div>
            <div>x for mute</div>
            <div>0 means open strings</div>
          </div>
        </div>
      </div>
    )
  }
  
  