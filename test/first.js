const assert = require('assert');
const first = require('../first');

suite('first', function () {
	test('with iterable object and properties array returns result', function () {
		assert.deepStrictEqual(first({1: '#1', two: '#2', '3': '#3'}, [1, 'two', 3]), '#1');
	});

	test('with empty iterable object and empty properties array returns undefined', function () {
		assert.deepStrictEqual(first({}, []), undefined);
	});

	test('with iterable object and empty properties array returns undefined', function () {
		assert.deepStrictEqual(first({1: '#1', two: '#2', '3': '#3'}, []), undefined);
	});

	test('with iterable object and non existing properties array returns undefined', function () {
		assert.deepStrictEqual(first({1: '#1', two: '#2', '3': '#3'}, ['test', 4]), undefined);
	});
});