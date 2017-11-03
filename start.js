//var thingObj = {
//	val: "one",
//};
//
//var thing = thingObj.val;
//
//function thingChanger(athing) {
//	athing = "two";
//	console.log("value in function: " + athing);
//	return athing;
//}
//
//console.log("original value: " + thingObj.val);
//
//var changed = thingChanger(thing);
//
//var maybeChanged = thingChanger(thingObj.val);
//
//console.log("using a variable: " + changed);
//
//console.log("using an object value: " + maybeChanged);
//
//console.log("original value: " + thingObj.val);

var guide = {
	title: 'Guide to Programming',
	content: 'Content goes here...',
	visibleToUser: function (viewingUserRole) {
		if (viewingUserRole === 'paid') {
			return true;
		}
	},
	renderContent: function (userRole) {
		if (this.visibleToUser(userRole)) {
			console.log(this.title + " - " + this.content);
		} else {
			this.content = '';
			console.log(this.title + " - " + this.content);
		}
	}
}

user = {
	role: 'paid'
};
guide.renderContent(user.role);
