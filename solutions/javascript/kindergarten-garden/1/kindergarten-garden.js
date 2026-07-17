const DEFAULT_STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.diagram = diagram;
    this.students = students;
  }

  plants(student) {
    let offset = this.students.sort().indexOf(student) * 2;
    let rows = this.diagram.split("\n");

    return [
      PLANT_CODES[rows[0][offset]],
      PLANT_CODES[rows[0][offset + 1]],
      PLANT_CODES[rows[1][offset]],
      PLANT_CODES[rows[1][offset + 1]],
    ];
  }
}
