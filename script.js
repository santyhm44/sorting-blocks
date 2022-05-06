var blocksArray = [5, 2, 3, 4, 1, 6, 9, 8, 7];
var sortedArray = [];
/**
 * @desc Adds blocks on widow load in sorted way by default
 */
window.onload = function () {
  blocksArray.sort((a, b) => a - b);
  sortedArray = [...blocksArray];
  addBlocks(sortedArray);
}

/**
 * This function add blocks as per the given array
 * @param {*} blocksArray Sorted or shuffled array
 */
const addBlocks = (blocksArray) => {
  var blockPanel = document.getElementById("block-panel");
  blockPanel.innerHTML = "";

  for (let blockNumber of blocksArray) {
    var block = document.createElement('div');
    block.classList.add('block', 'block-' + blockNumber);
    block.innerText = blockNumber;
    blockPanel.appendChild(block);
  }
}

/**
 * @desc Function to shuffle the array
 */
const shuffleBlocks = () => {
  blocksArray.sort(() => 0.5 - Math.random());
  addBlocks(blocksArray);
}

/**
 * @desc Function to sort the array
 */
const sortBlocks = () => {
  addBlocks(sortedArray);
}
