import './css/instructions.css'; 

function Instructions() {
    return(
        <>
            <ol>
                <li>You can only use numbers 1-9 to fill the cells</li>
                <li>Each 3x3 block must contain numbers 1-9 without repetition</li>
                <li>Each vertical column must contain numbers 1-9 without repetition</li>
                <li>Each horizontal row must contain numbers 1-9 without repetition</li>
                <br></br>
                <br></br>
                <li>Press start when you're ready and a board will be generated</li>
                <li>Press check board when you're done solving the puzzle</li>
            </ol>
        </>
    );
}

export default Instructions; 