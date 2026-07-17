export class GradeSchool {
	constructor() {
		this._db = {};
	}

	roster() {
		let sortedRoster = {};
		for (let grade in this._db) {
			sortedRoster[grade] = this.grade(grade);
		}
		return sortedRoster;
	}

	add(name, grade) {
		let db = this._db;
		for (let g in db) {
			if (db[g].includes(name)) db[g].splice(db[g].indexOf(name), 1);
		}
		db[grade] ? db[grade].push(name) : (db[grade] = [name]);
	}

	grade(grade) {
		return (this._db[grade] || []).slice(0).sort();
	}
}
