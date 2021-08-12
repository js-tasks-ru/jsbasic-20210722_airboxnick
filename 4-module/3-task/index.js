function getColumnNum(table, name) {
  let tableTheadTdList = table.querySelectorAll('thead td'),
  count = 0;

  for ( let td of tableTheadTdList ) {
    count++;
    if ( td.textContent == name )
      return count;
  }

  return false;
}

function highlight(table) {
  let tableTrbodyTrList = table.querySelectorAll('tbody tr'),
     tableTheadTdAgePosition = getColumnNum(table, 'Age'),
     tableTheadTdGenderPosition = getColumnNum(table, 'Gender'),
     tableTheadTdStatusPosition = getColumnNum(table, 'Status');

  for ( let tr of tableTrbodyTrList ) {
      console.log ( tr );
    let status = tr.querySelector(`td:nth-child(${tableTheadTdStatusPosition})[data-available]`);
    if ( status === null ) {
      tr.hidden = true
    } else {
        if ( status.dataset.available === 'true' ) {
        tr.classList.add('available');
      } else if ( status.dataset.available === 'false' ) {
        tr.classList.add('unavailable');
      }
    }

    let gender = tr.querySelector(`td:nth-child(${tableTheadTdGenderPosition})`).textContent;
    if ( gender === 'm' ) {
        tr.classList.add('male');
    } else if ( gender === 'f' ) {
        tr.classList.add('female');
    }

    let age = tr.querySelector(`td:nth-child(${tableTheadTdAgePosition})`).textContent;
    if ( +age < 18 ) {
      tr.setAttribute('style', 'text-decoration: line-through');
    }
  }
}