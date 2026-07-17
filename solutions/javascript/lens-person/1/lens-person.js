/* eslint-disable no-unused-vars */
import { Person } from "./person";
import { Name } from "./name";
import { Born } from "./born";
import { Address } from "./address";
import { Lens } from "./lens";

// Implement the nameLens with the getter and setter
export const nameLens = new Lens(
	/**
	 * @param {Person} person
	 * @returns {Name}
	 */
	(person) => person.name,
	/**
	 * @param {Person} person
	 * @param {Name} newName
	 * @returns {Person}
	 */
	(person, newName) => new Person(newName, person.born, person.address)
);

// Implement the bornAtLens with the getter and setter
export const bornAtLens = new Lens(
	/**
	 * @param {Person} person
	 * @returns {Address}
	 */
	(person) => person.born.bornAt,
	/**
	 * @param {Person} person
	 * @param {Address} newBirthAddress
	 * @returns {Person}
	 */
	(person, newBirthAddress) =>
		new Person(
			person.name,
			new Born(newBirthAddress, person.born.bornOn),
			person.address
		)
);

// Implement the streetLens with the getter and setter
export const streetLens = new Lens(
	/**
	 * @param {Person} person
	 * @returns {string} street
	 */
	(person) => person.address.street,
	/**
	 * @param {Person} person
	 * @param {string} newStreet
	 * @returns {Person}
	 */
	(person, newStreet) =>
		new Person(
			person.name,
			person.born,
			new Address(
				person.address.houseNumber,
				newStreet,
				person.address.place,
				person.address.country
			)
		)
);
