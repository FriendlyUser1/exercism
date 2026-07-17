export const promisify =
	(fn) =>
	(...args) => {
		return new Promise((resolve, reject) => {
			fn(...args, (err, data) => {
				err ? reject(err) : resolve(data);
			});
		});
	};

export const all = (promises) => {
	return new Promise((resolve, reject) => {
		if (!promises?.length) return resolve(promises);
		let resolved = 0;
		const output = [];
		promises.forEach((p, i) => {
			wrap(p)
				.then((data) => (output[i] = data))
				.catch(reject)
				.finally(() => {
					if (++resolved === promises.length) resolve(output);
				});
		});
	});
};

export const allSettled = (promises) => {
	return new Promise((resolve) => {
		if (!promises?.length) return resolve(promises);
		let settled = 0;
		const output = [];
		promises.forEach((p, i) => {
			wrap(p)
				.then((data) => (output[i] = data))
				.catch((err) => (output[i] = err))
				.finally(() => {
					if (++settled === promises.length) resolve(output);
				});
		});
	});
};

export const race = (promises) => {
	return new Promise((resolve, reject) => {
		if (!promises?.length) return resolve(promises);
		promises.forEach((p) => {
			wrap(p).then(resolve).catch(reject);
		});
	});
};

export const any = (promises) => {
	return new Promise((resolve, reject) => {
		if (!promises?.length) return resolve(promises);
		let settled = 0;
		const output = [];
		promises.forEach((p, i) => {
			wrap(p)
				.then(resolve)
				.catch((err) => {
					output[i] = err;
					if (++settled === promises.length) reject(output);
				});
		});
	});
};

// Convert non-promise values to promises
const wrap = (p) => Promise.resolve(p);
