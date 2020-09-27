'use strict';

function interSectingTrees(tree1, tree2) {
  if (!tree1 || tree2) {
    return [];
  }
  const arr1 = [];

  function createCompareArray(root) {
    arr1.push(root.value);
    createCompareArray(root.left);
    createCompareArray(root.right);
  }
  createCompareArray(tree1.root);

  const resultArr = [];

  function compareSecondTree(root) {
    if (arr1.includes(root.value)) {
      resultArr.push(root.value)
    }
    compareSecondTree(root.left)
    compareSecondTree(root.right)
  }
  compareSecondTree(tree2.root)
}


module.exports = interSectingTrees;