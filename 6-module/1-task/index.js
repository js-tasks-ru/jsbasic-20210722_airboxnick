/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  constructor(rows) {
    this.cellNames = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];
    this.rows = rows;

    this.render();
    this.delete();
  }

  render() {
    this.elem = document.createElement('table');

    this.thead = document.createElement('thead');
    this.elem.append(this.thead);
    this.createTableHead();

    this.tbody = document.createElement('tbody');
    this.elem.append(this.tbody);
    this.createTableBody()
  }

  createTableHead() {
    this.tr = document.createElement('tr');
    this.thead.append(this.tr);
    for ( let item of this.cellNames ) {
      this.td = document.createElement('td');
      this.td.textContent = item;
      this.tr.append(this.td);
    }
  }

  createTableBody() {
    for ( let cell of this.rows ) {
      this.tr = document.createElement('tr');
      this.tbody.append(this.tr);

      for ( let [key, value] of Object.entries(cell) ) {
        this.td = document.createElement('td');
        this.td.textContent = value;
        this.tr.append(this.td);
      }

      this.createButtonDelete();
    }
  }

  createButtonDelete() {
    this.td = document.createElement('td');
    this.td.insertAdjacentHTML('afterBegin', '<button>X</button>');
    this.tr.append(this.td);
  }

  delete() {
    this.elem.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        event.target.closest('tr').remove();
      }
    });
  }
}
