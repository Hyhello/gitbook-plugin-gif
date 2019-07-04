import { oneOf, isElement, _defineProperty, extend } from '@/utils';

test('oneOf', () => {
	expect(oneOf('a', ['a', 'b'])).toBeTruthy();
});

test('isElement', () => {
	expect(isElement({ nodeType: 1 })).toBeTruthy();
});

test('_defineProperty', () => {
	const b = {};
	expect(_defineProperty(b, 'nodeType', 1)).toEqual({ nodeType: 1 });
});

test('extend', () => {
	const b = {};
	expect(extend(b, { nodeType: 1 })).toStrictEqual({
		nodeType: 1
	});
});
