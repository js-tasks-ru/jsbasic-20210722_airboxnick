function makeFriendsList(friends) {
  let list = document.createElement('ul');
  for(let elem of friends) {
    list.insertAdjacentHTML('beforeend', `<li>${elem.firstName} ${elem.lastName}</li>`);
  }

  return list;
}