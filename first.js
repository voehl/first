module.exports = function (iterable, properties) {
	for (var i = 0; i < properties.length; i++) {
		if (iterable.hasOwnProperty(properties[i])) {
			return iterable[properties[i]];
		}
	}
};