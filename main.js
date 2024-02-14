class chessBoard {
    constructor() {
        this.visitedSquares = []
        this.currentSquare = null
        this.path = []
    }

    isValid(arr) {
        let valid = true;
        arr.forEach(value => {
            if (value < 0 || value > 7) {
                valid = false;
            }
        });
    
        if (this.visitedSquares.some(square => JSON.stringify(square) === JSON.stringify(arr))) {
            valid = false;
        }
    
        return valid;
    }

    knightMoves(startPos, endPos) {
        let current = `${startPos[0]},${startPos[1]}`;
        let end = `${endPos[0]},${endPos[1]}`;

        if (current === end) {
            this.printArr(this.path)
            return
        }

        if (!(this.isValid(startPos) && this.isValid(endPos))) {
            return
        }

        let moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

        this.visitedSquares.push(startPos)
        this.currentSquare = startPos
        this.path.push(startPos)

        for (let move of moves) {
            let newX = startPos[0] + move[0];
            let newY = startPos[1] + move[1];
            let newSquare = [newX, newY];

            if (this.isValid(newSquare)) {
                this.visitedSquares.push(newSquare);

                this.knightMoves(newSquare, endPos);

                this.visitedSquares.pop();
            }
        }
    }

    printArr(arr) {
        console.log("Shortest path is =>")
        arr.forEach(element => {
            console.log(element);
        });
    }
}

let board = new chessBoard();
board.knightMoves([0,0], [3,3]);
