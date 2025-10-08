import * as Tone from 'tone';

const samplePath = `assets/engine/DrumSamples/snare.mp3`;
const samples = { C4: samplePath };

const lpf = new Tone.Filter(6000, "lowpass");
const vol = new Tone.Volume(-6);
const sw = new Tone.StereoWidener(0.3);

class Snare {
	// 显式声明 sampler 属性及其类型
	private sampler: Tone.Sampler;

	// 为回调函数 cb 添加类型声明
	constructor(cb: () => void) {
		this.sampler = new Tone.Sampler(samples, () => {
			cb();
		}).chain(lpf, vol, sw, Tone.getDestination());
	}

	// 方法名修改为 getSampler，避免与属性同名冲突，并指定返回值类型
	getSampler(): Tone.Sampler {
		return this.sampler;
	}
}

export default Snare;