#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

class Chord {
private:
    std::string chordName;

public:
    Chord(std::string name) : chordName(name) {}

    std::string getName() const {
        return chordName;
    }

    void transpose(int steps) {
        std::string notes = "C C# D D# E F F# G G# A A# B";
        std::vector<std::string> noteList;
        size_t pos = 0;
        std::string token;
        while ((pos = notes.find(' ')) != std::string::npos) {
            token = notes.substr(0, pos);
            noteList.push_back(token);
            notes.erase(0, pos + 1);
        }
        noteList.push_back(notes);

        std::string root = chordName.substr(0, chordName.find_first_of("m7"));
        auto it = std::find(noteList.begin(), noteList.end(), root);
        if (it != noteList.end()) {
            int index = std::distance(noteList.begin(), it);
            int newIndex = (index + steps + 12) % 12;
            chordName.replace(0, root.length(), noteList[newIndex]);
        }
    }
};

class Song {
private:
    std::vector<Chord> chords;

public:
    void addChord(const Chord& chord) {
        chords.push_back(chord);
    }

    void transpose(int steps) {
        for (Chord& chord : chords) {
            chord.transpose(steps);
        }
    }

    void display() const {
        for (const Chord& chord : chords) {
            std::cout << chord.getName() << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    Song song;
    std::string inputChord;
    int numChords;

    std::cout << "How many chords in the song? ";
    std::cin >> numChords;

    for (int i = 0; i < numChords; ++i) {
        std::cout << "Enter chord " << i + 1 << ": ";
        std::cin >> inputChord;
        song.addChord(Chord(inputChord));
    }

    int transposeSteps;
    std::cout << "Enter the number of steps to transpose: ";
    std::cin >> transposeSteps;

    song.transpose(transposeSteps);

    std::cout << "Transposed song: ";
    song.display();

    return 0;
}
