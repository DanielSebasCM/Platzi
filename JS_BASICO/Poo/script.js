'use strict';
window.addEventListener('load', () => {
  function deepCopy(subject) {
    let copySubject;
    const subjectType = getType(subject);

    if (subjectType === 'array') {
      copySubject = [];
    } else if (subjectType === 'object') {
      copySubject = {};
    } else {
      return subject;
    }
    for (let key in subject) {
      const keyType = getType(subject[key]);
      if (keyType === 'array' || keyType === 'object') {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
    return copySubject;
  }

  function deepFreeze(obj) {
    if (typeof obj !== 'object') return;

    Object.freeze(obj);
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        deepFreeze(obj[key]);
      }
    }

  }


  function getType(subject) {
    return Array.isArray(subject) ? 'array' : typeof subject;
  }

  let obj1 = { x: 1, y: 2, z: 3 };
  let obj2 = deepCopy(obj1);
  obj1.x = 10;

  console.group('deepCopy Object');
  console.log(obj1);
  console.log(obj2);
  console.groupEnd();

  let arr1 = [1, 2, 3];
  let arr2 = deepCopy(arr1);
  arr1[0] = 10;

  console.group('deepCopy Array');
  console.log(arr1);
  console.log(arr2);
  console.groupEnd();

  let complexObj1 = { x: 1, y: 2, z: 3, arr: [1, 2, 3], obj: { a: 1, b: 2, c: 3 } };
  let complexObj2 = deepCopy(complexObj1);
  complexObj1.x = 10;
  complexObj1.arr[0] = 10;
  complexObj1.obj.a = 10;

  console.group('deepCopy Complex Object');
  console.log(complexObj1);
  console.log(complexObj2);
  console.groupEnd();

  let complexObj3 = deepCopy(complexObj1);
  deepFreeze(complexObj3);

});

