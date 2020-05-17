import { Grid } from "./grid";

const submitWordBtn = document.querySelector(".submit-word");


submitWordBtn.addEventListener("click", async () => {
    const grid = new Grid();
    const commaSeperatedWords = document.querySelector("#add-word").value;
    const gridSize = document.querySelector("#grid-size").value;
    let result = await fetchGridInfo(gridSize, commaSeperatedWords);
    grid.words = commaSeperatedWords.split(",");
    grid.renderGrid(gridSize, result);
    let wordListNode = document.createTextNode(grid.words);
    let wordListSection = document.querySelector(".word-list");
    if (wordListSection.lastChild) {
        wordListSection.removeChild(wordListSection.lastChild);
    }
    wordListSection.appendChild(wordListNode);
    
});


async function fetchGridInfo(gridSize, commaSeperatedWords) {
    
    let response = await fetch(`./wordgrid?gridSize=${gridSize}&wordList=${commaSeperatedWords}`);
    let result = await response.text();
    return result.split(" ");
}