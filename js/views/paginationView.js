import View from './View';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', (e) => {
      e.preventDefault();
      const clicked = e.target.closest('.btn-inline');
      if (!clicked) return;
      const goToPage = +clicked.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curpage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerpage
    );

    //page 1 and have other pages
    console.log(numPages);
    if (curpage === 1 && numPages > 1) {
      return `
      <button data-goto="${curpage + 1}" class="btn-inline btn-next">Next ${
        curpage + 1
      } &RightArrow;</button>
      `;
    }

    //last page
    if (curpage > 1 && curpage === numPages) {
      return `
      <button data-goto="${
        curpage - 1
      }" class="btn-inline btn-prev">&LeftArrow; Previous ${
        curpage - 1
      }</button>`;
    }
    //other pages
    if (curpage > 1 && curpage < numPages) {
      return `
      <button data-goto="${
        curpage - 1
      }" class="btn-inline btn-prev">&LeftArrow; Previous ${
        curpage - 1
      }</button>
      <button data-goto="${curpage + 1}" class="btn-inline btn-next">Next ${
        curpage + 1
      } &RightArrow;</button>`;
    }
    //page 1 no other pages

    return '';
  }
}

export default new PaginationView();
