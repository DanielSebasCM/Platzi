"use strict"

const PlatziMath = {
  calcMode: (list) => {
    const listCount = {};

    for (element of list) {
      listCount[element] = listCount[element] ? listCount[element] + 1 : 1;
    }

    const mode = Object.entries(listCount).reduce((previus, current) => {
      return previus[1] > current[1] ? previus : current;
    });

    return mode[0];
  },
  calcMedian: (unorderedList) => {
    if (unorderedList.length == 0) return 0;
    if (unorderedList.length == 1) return unorderedList[0];

    const list = unorderedList.sort((a, b) => a - b);
    const indexMid = Math.floor(list.length / 2);
    if (list.length % 2) {
      return list[indexMid];
    } else {
      return (list[indexMid] + list[indexMid - 1]) / 2;
    }
  },
  calcMean: (list) => {
    return list.reduce((a, b) => a + b) / list.length;
  }
};