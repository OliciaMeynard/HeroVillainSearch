export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  // renderSpinner() {
  //   const markUp = `<div class="spinner">
  //           <svg>
  //             <use href="${icons}#icon-loader"></use>
  //           </svg>
  //         </div>`;
  //   this._clear();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  // }

  renderSpinner() {
    const markUp = `
    <div class="spinner">
    <img src="spinner.716aa354.png" alt="">
     </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
    
      <p>${message}</p>
    </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  //   this._clear();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  // }
  // renderMessage(message = this._errorMessage) {
  //   const markUp = `<div class="message">
  //     <div>
  //       <svg>
  //         <use href="${icons}#icon-smile"></use>
  //       </svg>
  //     </div>
  //     <p>${message}</p>
  //   </div>`;

  //   this._clear();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  // }
}
