var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'cat_picture1.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            nicknames : ['tab', 'tab1', 'tab2']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'cat_picture2.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nicknames : ['tig', 'tab1', 'tab2']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'cat_picture3.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nicknames : ['Sca', 'tab1', 'tab2']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'cat_picture4.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            nicknames : ['sha', 'tab1', 'tab2']
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'cat_picture5.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nicknames : ['sle', 'tab1', 'tab2']
        }
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

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

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat (catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat); 
	};
};

ko.applyBindings(new ViewModel());

