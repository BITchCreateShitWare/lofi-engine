import * as Tone from 'tone';

const samplePath = `assets/engine/DrumSamples/kick.mp3`;
const samples = { C4: samplePath };

const vol = new Tone.Volume(-3);

class Kick {
	// 显式声明sampler属性类型
	private sampler: Tone.Sampler;

	// 为cb参数添加类型声明
	constructor(cb: () => void) {
		this.sampler = new Tone.Sampler(samples, () => {
			cb();
		}).chain(vol, Tone.getDestination());
	}

	// 方法名修改为与属性名不同，避免冲突，并添加返回值类型
	getSampler(): Tone.Sampler {
		return this.sampler;
	}
}

export default Kick;