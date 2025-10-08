// ChordProgression.ts
import Chords from './Chords';
import Chord from './Chord';

class ChordProgression {
    // 为 length 添加类型
    static generate(length: number): Chord[] | null {
        if (length < 2)
            return null;

        const progression: Chord[] = [];
        // 假设 Chords 是 Chord 类型的数组（确保其类型正确）
        let chord = Chords[Math.floor(Math.random() * Chords.length)];

        for (let i = 0; i < length; i++) {
            progression.push(new Chord(
                chord.degree, // 此时 degree 是 number 类型，无类型冲突
                [...chord.intervals], // intervals 是数组，可展开
                [...chord.nextChordIdxs] // nextChordIdxs 是数组，可展开
            ));
            chord = Chords[chord.nextChordIdx()];
        }

        return progression;
    }
}

export default ChordProgression;