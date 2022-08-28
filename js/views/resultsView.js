import View from './View';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'Character not found, Please Try again';

  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link" href="#${result.id}">
      <figure class="preview__fig">
        <img src=${result.img}>
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.name}</h4>
        <p class="preview__publisher">${result.publisher}</p>
      </div>
    </a>
  </li>
`;
  }
}

export default new ResultsView();
