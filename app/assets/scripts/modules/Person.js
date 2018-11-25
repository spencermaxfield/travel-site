class Person {

	constructor(fullName, favoriteColor) {
		this.fullName = fullName;
		this.favoriteColor = favoriteColor;
	}

	greet() {
		console.log("hi from " + this.fullName);
	}
}

class Adult extends Person {
	payTaxes() {
		console.log(this.fullName + " now owes 0 dollars in taxes.");
	}
}

export default Person;