import RestaurantDBSource from '../../data/restaurantdb-source';
import {
  createDetailPageContent,
  createLoadingTemplate,
} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div id="loading"></div>
    <div tabindex="0" id="restaurant" class="restaurant">
      <div tabindex="0" id="resto-detail" class="restaurant">
      </div>
      <div class="like" id="likeButton"></div>f
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantAll = document.querySelector('#restaurant');
    const restaurantContainer = document.querySelector('#resto-detail');
    const loading = document.querySelector('#loading');
    restaurantAll.style.display = 'block';
    loading.innerHTML = createLoadingTemplate();

    try {
      const data = await RestaurantDBSource.detail(url.id);

      restaurantContainer.innerHTML += createDetailPageContent(data.restaurant);

      LikeButtonPresenter.init({
        likeButton: document.querySelector('#likeButton'),
        data,
      });

      restaurantContainer.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
