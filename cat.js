var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('tabby.jpeg');
	this.nicknames = ko.observableArray(['meow', 'tab', 'tbone']);

	this.level = ko.computed(function() {
		if(this.clickCount()<10)
			return "newborn";
		else if (this.clickCount()<50)
			return "infant";
		else if (this.clickCount()<100)
			return "Child";
		else if (this.clickCount()<200)
			return "Teen";
		else return "Adult";
    }, this);
}


var ViewModel = function() {

	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());
