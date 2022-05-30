const updateExistingPlaylist = (currentplaylist, playlists) => {
  const updatedList = playlists.map((list) =>
    list._id === currentplaylist._id ? { ...currentplaylist } : { ...list }
  );
  return updatedList;
};

export { updateExistingPlaylist };
