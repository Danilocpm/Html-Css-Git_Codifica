function isaSafe(board, row, col, num) {
    // Verifica linha e coluna
    for (let i = 0; i < board.length; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }

    // Verifica sub-bloco
    let startRow = row - (row % 2);
    let startCol = col - (col % 2);

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let r = startRow + i;
            let c = startCol + j;
            if (board[r][c] === num) {
                return false;
            }
        }
    }

    return true;
}


function solveSudoku(board, n) {
    let row = -1
    let col = -1
    let isEmpty = true

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 0) {
                row = i
                col = j
                isEmpty = false
                break
            }
        }

        if(!isEmpty) {
            break
        }
    }


    if(isEmpty) {
        return true
    }

    for(let num = 1; num <= n; num++) {
        if(isaSafe(board, row, col, num)) {
            board[row][col] = num

            if (solveSudoku(board, n)) {
                return true
            } else {
                board[row][col] = 0
            }
        }
    }

    return false
}

function generateSudoku4x4() {
    return [
        [0, 0, 4, 1],
        [1, 0, 0, 0],
        [0, 0, 0, 2],
        [2, 1, 0, 4]
    ];
}


let board = generateSudoku4x4();
console.log("Sudoku inicial:");
console.table(board);

if (solveSudoku(board, 4)) {
    console.log("Sudoku resolvido:");
    console.table(board);
} else {
    console.log("Sem solução!");
}
