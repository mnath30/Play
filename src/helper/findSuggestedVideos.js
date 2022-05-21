const findSuggestedVideos = (videoData, currentId) => {
  let newList = [];
  let isAlreadyInserted = false;
  while (newList.length < 3) {
    const randomNumber = Math.floor(Math.random() * videoData.length);
    isAlreadyInserted = false;
    if (videoData[randomNumber]._id !== currentId) {
      isAlreadyInserted = newList.some(
        (item) => item._id === videoData[randomNumber]._id
      );
      if (!isAlreadyInserted) {
        newList.push(videoData[randomNumber]);
      }
    }
  }
  return newList;
};

export { findSuggestedVideos };
