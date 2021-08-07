function showSalary(users, age) {
  let str = '',
      usersTmp = [];
  for ( let user of users ) {
    if ( user['age'] <= age ) {
      usersTmp.push(user);
      //str += `${user['name']}, ${user['balance']} \n`;
    }
  }

  for ( let user in usersTmp ) {
    str += `${usersTmp[+user]['name']}, ${usersTmp[+user]['balance']}`;
     if ( +user < usersTmp.length -1 ) {
        str += `\n`;
     }
  }

  return str;
}