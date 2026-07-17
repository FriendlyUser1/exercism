#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function readLines(file) {
	const data = fs.readFileSync(path.resolve(file), { encoding: "utf-8" });
	return data.split(/\r?\n/);
}

const ARGS = process.argv; // Arguments the process was started with

let numbers = ARGS.includes("-n"),
	names = ARGS.includes("-l"),
	nocase = ARGS.includes("-i"),
	invert = ARGS.includes("-v"),
	exact = ARGS.includes("-x"),
	files = [],
	procfiles = [],
	pattern = "";

for (let i = 2; i < ARGS.length; i++) {
	if (!ARGS[i].includes("-") && pattern === "") pattern = ARGS[i];
	else if (pattern !== "") files.push(ARGS[i]);
}

files.forEach((file) => {
	readLines(file).map((line, n) => {
		let re = line.match(new RegExp(`${pattern}`, nocase ? "i" : undefined));

		let print = () =>
			console.log(
				(files.length > 1 ? file + ":" : "") +
					(numbers ? n + 1 + ":" + line : line)
			);

		if (!names) {
			if ((exact && re && re[0] === line) || (!exact && re)) {
				if (!invert) print();
			} else if (invert) print();
		} else if (re && !procfiles.includes(file)) {
			console.log(file);
			procfiles.push(file);
		}
	});
});
