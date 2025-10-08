// Chord.ts
import { singleOct } from './MajorScale';

class Chord {
    // 显式声明属性类型
    degree: number;
    semitoneDist: number;
    intervals: number[];
    nextChordIdxs: number[];

    // 为构造函数参数添加类型
    constructor(degree: number, intervals: number[], nextChordIdxs: number[]) {
        this.degree = degree;
        this.semitoneDist = singleOct[degree - 1]; // 假设 singleOct 是数值数组
        this.intervals = intervals;
        this.nextChordIdxs = nextChordIdxs;
    }

    // 删除与属性同名的冗余方法（直接通过属性访问即可）

    // 保留必要的业务方法
    nextChordIdx(): number {
        return this.nextChordIdxs[Math.floor(Math.random() * this.nextChordIdxs.length)];
    }

    generateVoicing(size: number): number[] {
        if (size < 3)
            return this.intervals.slice(0, 3);
        let voicing = this.intervals.slice(1, size);
        voicing.sort(() => Math.random() - 0.5);
        for (let i = 1; i < voicing.length; i++) {
            while (voicing[i] < voicing[i - 1]) {
                voicing[i] += 12;
            }
        }
        voicing.unshift(0);
        return voicing;
    }

    generateMode(): number[] {
        return this.intervals.map(n => { // 此时 intervals 是数组，可调用 map
            if (n >= 12)
                return n - 12;
            else
                return n;
        });
    }
}

export default Chord;