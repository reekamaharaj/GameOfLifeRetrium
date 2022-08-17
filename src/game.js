/**
 * These example boards represent the row and column of live cells, where an empty array
 * represents an empty row. Feel free to keep this data structure or change it to something
 * that works better for you.
 */

// Implement the Game of Life here to transform the inputBoard into the outputBoard!
export function getNextGeneration(inputBoard) {
	const nextBoardState = [];
	for (let row = 0; row < inputBoard.length; row++) {
		nextBoardState.push([]);
		for (let col = 0; col < inputBoard.length; col++) {
			const topLeft = inputBoard[row - 1]?.[col - 1] ?? 0;
			const top = inputBoard[row - 1]?.[col] ?? 0;
			const topRight = inputBoard[row - 1]?.[col + 1] ?? 0;
			const left = inputBoard[row][col - 1] ?? 0;
			const right = inputBoard[row][col + 1] ?? 0;
			const bottomLeft = inputBoard[row + 1]?.[col - 1] ?? 0;
			const bottom = inputBoard[row + 1]?.[col] ?? 0;
			const bottomRight = inputBoard[row + 1]?.[col + 1] ?? 0;

			const numAliveNeighbors =
				topLeft +
				top +
				topRight +
				left +
				right +
				bottomLeft +
				bottom +
				bottomRight;

			nextBoardState[row].push(
				checkNeighbors(numAliveNeighbors, inputBoard[row][col])
			);
		}
	}
	const outputBoard = nextBoardState;
	// console.log(outputBoard);
	return outputBoard;
}

export function checkNeighbors(numNeighbors, state) {
	//if alive
	if (state === 1) {
		if (numNeighbors === 2 || numNeighbors === 3) {
			return 1;
		}
	} else if (numNeighbors === 3) {
		//if dead and alive neighbors ===3
		return 1;
	}
	return 0;
}
