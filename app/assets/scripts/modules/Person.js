function Person(fullName, favoriteColor) {
	this.fullName = fullName;
	this.favoriteColor = favoriteColor;
	this.greet = function () {
		console.log("greetings from " + this.fullName);
	}
}

module.exports = Person;