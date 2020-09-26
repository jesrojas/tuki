export const findUserFromCollection = (collection, user) => {
    for(let currentUser of collection) {
        if(currentUser.name.toLowerCase() === user){
            return currentUser
        }
    }
}

export const statusColor = (status) => {
  if (status === "Alive") {
    return "success";
  } else if (status === "Dead") {
    return "alert";
  } else {
    return "disabled";
  }
};

export const checkIfLoaded = (img) => {
  if (img) {
    return img;
  } else {
    return "unknown2.png";
  }
}; 