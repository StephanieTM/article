/* eslint-disable camelcase */
import picSight from '../../data_src/city_sight/pic_sight';

function randomNum(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

function getSameAsBySightId(sight_id) {
  const picList = [];
  // let num = 0;
  picSight.forEach(item => {
    if (item.tail === sight_id) {
      picList.push(item.head);
      // num += 1;
    }
  });

  const times = picList.length < 5 ? picList.length : 5;
  const filterIndex = [];
  const filteredPicList = [];
  let random;
  for (let i = 0; i < times; i += 1) {
    do {
      random = randomNum(0, picList.length - 1);
    } while (filterIndex.includes(random));
    filterIndex.push(random);
  }

  filterIndex.sort();
  filterIndex.forEach(index => {
    filteredPicList.push(picList[index]);
  });

  return filteredPicList;
}

export default getSameAsBySightId;
