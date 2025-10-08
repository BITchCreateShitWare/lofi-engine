import * as Tone from 'tone';

const samplePath = `assets/engine/DrumSamples/hat.mp3`;
const samples = { C4: samplePath };

const lpf = new Tone.Filter(2400, "lowpass");
const vol = new Tone.Volume(-9);
const sw = new Tone.StereoWidener(0.7);

class Hat {
	// 显式声明 sampler 属性及其类型
	private sampler: Tone.Sampler;

	constructor(cb: () => void) {  // 补充 cb 的类型声明
		this.sampler = new Tone.Sampler(samples, () => {
			cb();
		}).chain(lpf, vol, sw, Tone.getDestination());
	}

	// 获取 sampler 实例的方法
	getSampler(): Tone.Sampler {
		return this.sampler;
	}
}

export default Hat;