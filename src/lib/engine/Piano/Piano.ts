import * as Tone from 'tone';
import Samples from './Samples';

const lpf = new Tone.Filter(1000, "lowpass");
const sw = new Tone.StereoWidener(0.5);

class Piano {
	// 显式声明 sampler 属性及其类型
	private sampler: Tone.Sampler;

	// 为回调函数 cb 添加类型声明
	constructor(cb: () => void) {
		this.sampler = new Tone.Sampler(Samples, () => {
			cb();
		}).chain(lpf, sw, Tone.getDestination());
	}

	// 方法名修改为 getSampler，避免与属性同名冲突，并指定返回值类型
	getSampler(): Tone.Sampler {
		return this.sampler;
	}
}

export default Piano;