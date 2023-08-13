// componentUsage.js

export const status = [0];

let cbList = [];

export function dispatchCallbacks () {
	for (let cb of cbList) {
		cb();
	}
}

export function registerUpdateCallback (cb) {
	cbList.push(cb);
}

