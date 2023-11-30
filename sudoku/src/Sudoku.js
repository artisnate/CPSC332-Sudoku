class Sudoku {
    constructor() {
        this.gridSize = 9; // 9x9 board
        this.removeNum = 61; // number of boxes to be removed

        const SRNd = Math.sqrt(this.gridSize); 
        this.SRgrid = Math.floor(SRNd); 

        this.solution = Array.from({ length: this.gridSize }, () => Array.from({ length: this.gridSize }, () => 0)); // 2d array
        this.playBoard = Array.from({ length: this.gridSize }, () => Array.from({ length: this.gridSize }, () => 0)); // 2d array
    }

    //generates solution board
    generateAnswers() {
        //fills diagonal matrix
        this.fillDiagonal(); 

        //fill adjacent blocks
        this.fillRemaining(0, this.SRgrid); 

        return this.solution; 
    }

    //generate playig board
    generatePlayBoard() {
        this.playBoard = this.solution; 
        this.removeDigits(); 

        return this.playBoard; 
    } 

    //fills diagonal boxes
    fillDiagonal() {
        for(let i = 0; i < this.SRgrid; i += this.SRgrid) {
            this.fillBox(i, i); 
        }
    }

    // returns true if the value has not been use4d in the 3x3 block
    unUsedInBox(row, col, num) {
        for(let i = 0; i < this.SRgrid; i++) {
            for(let j = 0; j < this.SRgrid; j++) {
                if(this.solution[row + i][col + 1] === num) { // the value was found in the box
                    return false; 
                }
            }
        }

        return true; 
    }

    //fills a 3x3 matrix
    fillBox(row, col) {
        let num = 0; 
        
        for(let i = 0; i < this.SRgrid; i++) {
            for (let j = 0; j < this.SRgrid; j++) {
                //checks if the value is in the box
                while(true) {
                    num = this.randomGenerator(this.gridSize); 
                    if(this.unUsedInBox(row, col, num)) {
                        break; 
                    }
                }

                this.solution[row + i][col + j] = num; 
            }
        }
    }

    //random number generator 
    randomGenerator(num) {
        return Math.floor(Math.random() * num + 1); 
    }

    //check if a value can be placed in a cell 
    checkIfSafe(i, j, num) {
        return (
            this.unUsedInRow(i, num) &&
            this.unUsedInCol(j, num) && 
            this.unUsedInBox(i - (i % this.SRgrid), j - (j %this.SRgrid), num)
        ); 
    }

    // check if the value has been used in a row 
    unUsedInRow(row, num) {
        for (let col = 0; col < this.gridSize; col++) {
            if(this.solution[row][col] === num) {
                return false; 
            }
        }

        return true; 
    }

    // check if the value has been used in the column
    unUsedInCol(col, num) {
        for (let row = 0; row < this.gridSize; row++) {
            if(this.solution[row][col] === num) {
                return false; 
            }
        }

        return true; 
    }

    //fill the remaining boxes 
    fillRemaining(row, col) {
        //check for end of matrix 
        if(row === this.gridSize - 1 && col === this.gridSize -1) {
            return true; 
        }

        //move to next row if we are at end of row 
        if(col === this.gridSize - 1) {
            row + 1; 
            col = 0; 
        }

        //don't fill cells that are already occupied 
        if(this.solution[row][col] !== 0) {
            return this.fillRemaining(row, col+1); 
        }

        //try to fill with a valid value 
        for(let num = 1; num <= this.gridSize; num++) {
            this.solution[row][col] = num; 
            
            if(this.fillRemaining(row, col+1)) {
                return true; 
            }

            //reset to 0 since false. 
            this.solution[row][col] = 0; 
        }

        //no valid value was found, backtrack
        return false; 
    }

    //remove certain amount of digits 
    removeDigits() {
        let count = this.removeNum; 

        while(count !== 0) {
            let row = Math.floor(Math.random() * this.gridSize); 
            let col = Math.floor(Math.random() * this.gridSize); 
            if(this.playBoard[row][col] !== 0) {
                count --; 
                this.playBoard[row][col] = 0; 
            }
        }
    }

    checkAnswers() {
        for(let i = 0; i < this.gridSize; i++) {
            for(let j = 0; j < this.gridSize; j++) {
                if(this.solution[i][j] !== this.playBoard[i][j]){
                    return false; 
                }
            }
        }

        return true; 
    }
}