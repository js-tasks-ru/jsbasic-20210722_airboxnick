import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(good) {
    this.good = good;
    this.render();
    this.addGood();
  }

  render() {
    this.elem = createElement(`
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${this.good.image}" class="card__image" alt="product">
          <span class="card__price">€${(this.good.price).toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.good.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `);
  }

  addGood() {
    this.elem.addEventListener('click', () => {
      this.elem.dispatchEvent(new CustomEvent('product-add', {
        detail: this.good.id,
        bubbles: true
      }));
    });
  }
}
