import { bubbleSort } from './bubbleSort';


describe('BubbleSort', () => {
    it('should sort 0 items and return 0 items', () => {
        expect(bubbleSort([])).toEqual([]);
    });
    it('should throw error with null input', () => {
        expect(() => bubbleSort()).toThrowError('Items must be an valid array');
        expect(() => bubbleSort(null)).toThrowError('Items must be an valid array');
        expect(() => bubbleSort(undefined)).toThrowError('Items must be an valid array');
    });
    it('should throw error if items passed is not an array', () => {
        expect(() => bubbleSort({})).toThrowError('Items must be an valid array');
    });
    it('should sort 1 item and return 1 item', () => {
        expect(bubbleSort([1])).toEqual([1]);
    });
    it('should sort 10 items in order (int)', () => {
        let items = [5, 6, 2, 6, 9, 12, 65, 33, 88, 13];
        let sorted = items.sort(function (a, b) { return a - b; });
        let results = bubbleSort(items);
        expect(results).toEqual([2, 5, 6, 6, 9, 12, 13, 33, 65, 88]);
    });
    it('should sort other edge cases as well', () => {
        let items = [6, 6, 6, 6, 7, 4, 2, 2, 2, 1];
        let sorted = items.sort(function (a, b) { return a - b; });
        let results = bubbleSort(items);
        expect(results).toEqual([1, 2, 2, 2, 4, 6, 6, 6, 6, 7]);


        items = [1, 2, 34, 6, 1];
        results = bubbleSort(items);
        expect(results).toEqual([1, 1, 2, 6, 34]);
    });
});