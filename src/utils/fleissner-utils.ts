/**
 * For a grid of a given side length, in which the cells are indexed
 * from left to right, top to bottom, this function returns the new index
 * at which the field of a given index ends up after a 90 degree clockwise
 * rotation about its center.
 * 
 * @param index The index pre-rotation 
 * @param gridSize The side length of the grid being rotated
 * @returns The new index after the rotation
 */
function rotateSquareIndex(index: number, gridSize: number): number {
	return gridSize * (index % gridSize) + gridSize - Math.floor(index / gridSize) - 1;
}

/**
 * Performs a 90 degree rotation of a grid on mulitple indecies.
 * @see `rotateSquareIndex`
 * 
 * @param indecies The indecies to be rotated
 * @param gridSize The side length of the grid
 */
function rotateSquareIndecies(indecies: number[], gridSize: number): number[] {
	return indecies.map(index => rotateSquareIndex(index, gridSize));
}

/**
 * The indecies of the cutouts on the Fleissner Grille.
 */
const fleissnerGrille = [1, 3, 5, 10, 14, 19, 22, 29, 33];

/**
 * Returns the indecies of the Fleissner Grille after a number of
 * 90 degree clockwise rotations.
 * 
 * @param rotations the number of rotations
 */
function fleissnerGrilleRotated(rotations: number): number[] {
	let grille = fleissnerGrille;
	for(rotations = rotations % 4; rotations > 0; rotations--)
		grille = rotateSquareIndecies(grille, 6);
	return grille;
}

/**
 * Decodes a part of a Fleissner grille encoded message, specifically
 * for one of the four rotations.
 * 
 * @param letters The letters in the grid
 * @param part The part to be decoded, ranging from 0 to 3 and repeating from then on
 */
function fleissnerDecodePart(letters: string[], part: number): string {
	const grille = fleissnerGrilleRotated(part);
	return letters.filter((_, i) => grille.includes(i)).join("");
}

function fleissnerDecode(letters: string[], separator: string = ""): string {
	let result: string[] = [];
	for(let i = 0; i < 4; i++)
		result.push(fleissnerDecodePart(letters, i));
	return result.join(separator);
}

function fleissnerEncode(text: string) {
	let result: string[] = [];
	for(let part = 0; part < 4; part++) {
		const grille = fleissnerGrilleRotated(part);
		const offset = 9 * part;
		const chars = text.substr(offset, 9).split("");
		chars.forEach((char, i) => {
			result[grille[i]] = char;
		});
	}
}

export {
	rotateSquareIndex,
	rotateSquareIndecies,
	fleissnerGrille,
	fleissnerGrilleRotated,
	fleissnerDecodePart,
	fleissnerDecode,
	fleissnerEncode
}