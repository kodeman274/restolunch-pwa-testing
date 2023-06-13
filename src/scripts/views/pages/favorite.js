import FavoriteRestaurantIdb from '../../data/favorite-restauran-idb';
import { createHomePageContent } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="hero">
        <div class="hero__iner">
          <h1 class="hero__title">Restolunch</h1>
          <p class="hero__tagline">Temukan Restorant terbaik yang ada disekitar anda!</p>
        </div>
      </div>
      <section id="content" class="headline">
        <h1 class="headline_tagline">Favorite Restaurant</h1>
        <div class="form">
          <div class="list">
            <div class="menu" id="restaurant"> </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');

    try {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createHomePageContent(restaurant);
      });
      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML += `
            <div class="notfound_fav">
              <p>"Restaurant Favorit belum ditambahkan"</p>
            </div>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Favorite;
