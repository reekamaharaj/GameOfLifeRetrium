const assert = require('assert');
const { getNextGeneration, checkNeighbors } = require('./game');
const {
	BLOCK_BOARD,
	BEE_HIVE,
	LOAF,
	BOAT,
	TUB,
	BLINKER_BOARD,
	BLINKER_BOARD2,
	TOAD1,
	TOAD2,
	BEACON1,
	BEACON2,
} = require('./boards');

// If you want to use Mocha for unit testing, add some tests to this file
describe('Game of Life - getNextGeneration', () => {
	it('a still life should not change across multiple generations', () => {
		const generationOne = BLOCK_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);

		assert.deepEqual(generationOne, generationTwo);
		assert.deepEqual(generationTwo, generationThree);
		assert.deepEqual(generationThree, BLOCK_BOARD);

		const generationOneBH = BEE_HIVE;
		const generationTwoBH = getNextGeneration(generationOneBH);
		const generationThreeBH = getNextGeneration(generationTwoBH);

		assert.deepEqual(generationOneBH, generationTwoBH);
		assert.deepEqual(generationTwoBH, generationThreeBH);
		assert.deepEqual(generationThreeBH, BEE_HIVE);

		const generationOneL = LOAF;
		const generationTwoL = getNextGeneration(generationOneL);
		const generationThreeL = getNextGeneration(generationTwoL);

		assert.deepEqual(generationOneL, generationTwoL);
		assert.deepEqual(generationTwoL, generationThreeL);
		assert.deepEqual(generationThreeL, LOAF);

		const generationOneBoat = BOAT;
		const generationTwoBoat = getNextGeneration(generationOneBoat);
		const generationThreeBoat = getNextGeneration(generationTwoBoat);

		assert.deepEqual(generationOneBoat, generationTwoBoat);
		assert.deepEqual(generationTwoBoat, generationThreeBoat);
		assert.deepEqual(generationThreeBoat, BOAT);

		const generationOneTub = TUB;
		const generationTwoTub = getNextGeneration(generationOneTub);
		const generationThreeTub = getNextGeneration(generationTwoTub);

		assert.deepEqual(generationOneTub, generationTwoTub);
		assert.deepEqual(generationTwoTub, generationThreeTub);
		assert.deepEqual(generationThreeTub, TUB);
	});

	it('an oscillator should change back and forth across two generations', () => {
		const generationOne = BLINKER_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);

		assert.deepEqual(generationOne, BLINKER_BOARD);
		assert.deepEqual(generationTwo, BLINKER_BOARD2);
		assert.deepEqual(generationThree, BLINKER_BOARD);

		const generationOneT = TOAD1;
		const generationTwoT = getNextGeneration(generationOneT);
		const generationThreeT = getNextGeneration(generationTwoT);

		assert.deepEqual(generationOneT, TOAD1);
		assert.deepEqual(generationTwoT, TOAD2);
		assert.deepEqual(generationThreeT, TOAD1);

		const generationOneBeacon = BEACON1;
		const generationTwoBeacon = getNextGeneration(generationOneBeacon);
		const generationThreeBeacon = getNextGeneration(generationTwoBeacon);

		assert.deepEqual(generationOneBeacon, BEACON1);
		assert.deepEqual(generationTwoBeacon, BEACON2);
		assert.deepEqual(generationThreeBeacon, BEACON1);
	});
});

describe('Game of Life - checkNeighbors', () => {
	it('alive cell should die if number of live neighbors is less than 2', () => {
		assert.equal(checkNeighbors(0, 1), 0);
		assert.equal(checkNeighbors(1, 1), 0);
	});
	it('alive cell should die if number of live neighbors is more than 3', () => {
		assert.equal(checkNeighbors(4, 1), 0);
		assert.equal(checkNeighbors(5, 1), 0);
	});
	it('alive cell should keep living if number of live neighbors is equal to 2 or 3', () => {
		assert.equal(checkNeighbors(2, 1), 1);
		assert.equal(checkNeighbors(3, 1), 1);
	});
	it('dead cell should come alive if number of live neighbors is equal to 3', () => {
		assert.equal(checkNeighbors(3, 0), 1);
	});
});
