import View from './View';

class CharacterView extends View {
  _parentEl = document.querySelector('.character-info');

  _errorMessage = 'Character not found, Please Try again';

  _message = '';

  _generateMarkup() {
    return `
  <img
  class="character-img"
  src=${this._data.img}
  alt="Test"
/>
<div class="info">
  <h2 class="hero-heading">${this._data.name}</h2>
  <h3 class="tertiary-heading-name"><strong>${
    this._data.biography['full-name']
  }</strong></h3>

  <ul class="ul-info">
  <h3 class="tertiary-heading">biography</h3>
  <li>Aliases: ${this._data.biography.aliases.join(', ')}</li>
  <li>Place of birth: ${this._data.biography['place-of-birth']}</li>
  <li>Publisher: ${this._data.biography.publisher}</li>
  <li>Alter-Ego: ${this._data.biography['alter-egos']}</li>





    <h3 class="tertiary-heading">Appearance</h3>
    <li>Gender: ${this._data.gender}</li>
    <li>Race: ${this._data.race}</li>
    <li>Height: ${this._data.height}</li>
    <li>Weight: ${this._data.weight}</li>

    <h3 class="tertiary-heading">powerstats</h3>
    <li>Combat: ${this._data.powerstats.combat}</li>
    <li>Durability: ${this._data.powerstats.durability}</li>
    <li>Intelligence: ${this._data.powerstats.intelligence}</li>
    <li>Power: ${this._data.powerstats.power}</li>
    <li>Speed: ${this._data.powerstats.speed}</li>
    <li>Strength: ${this._data.powerstats.strength}</li>


  </ul>
</div>
`;
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].map((ev) => addEventListener(ev, handler));
  }
}

export default new CharacterView();
