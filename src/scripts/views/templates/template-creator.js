import CONFIG from '../../globals/config';

const createHomePageContent = (restaurant) => `
  <article tabindex="0" class="post-menu" aria-label="Go to Restaurant ${
    restaurant.name
  } the place is ${restaurant.city}. totally rating ${
  restaurant.rating
}. description, ${restaurant.description}">
    <a href="#/restaurant/${restaurant.id}">
      <span class="city">
          <h2><b>${restaurant.city}</b></h2>
      </span>

      <img class="list_restaurant_img"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="Restaurant Picture ${restaurant.name}">

      <div class="list_restaurant_content">
        <p class="list_restaurant_rating" alt='this rating ${
          restaurant.rating
        }'>
          <span>⭐</span>${restaurant.rating}</p>
              
          <h1 class="list_restaurant_title" alt='Name of resto ${
            restaurant.name
          }'>
            <h1>${restaurant.name}</h1>
          </h1>
              
          <p class="list_restaurant_description">${restaurant.description}</p>
      </div>
    </a>
  </article>
`;

const createDetailPageContent = (restaurant) => `
  <div class="resto__detail">
    <a href="/"><i class="fa-solid fa-right-to-bracket"></i><img src="https://user-images.githubusercontent.com/99820483/224527196-9336d299-bd09-4260-b46a-892098650ff2.png" alt="icon_back" class="icon_back"></a>
    <img class="detail__image" alt="${restaurant.name}" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}"/>
    <div tabindex="0" class="resto__content">
      <h2 class="resto__title">${restaurant.name}</h2>
      <p class="resto__desc">${restaurant.description}</p>
      <p class="resto__rating" alt='this rating ${restaurant.rating}'>
            <span>
            ⭐</span>${restaurant.rating}</p>
      <div class="resto__info">
        <br>
        <h3>Detail Information</h3>
        <br>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>Categories</h4>
        <p>${restaurant.categories
          .map((category) => category.name)
          .join(', ')}</p>
        <h4>Menu</h4>
        <p>=> Food <br> ${restaurant.menus.foods
          .map((food) => food.name)
          .join(', ')}</p>
        <p>=> Drink <br>${restaurant.menus.drinks
          .map((drink) => drink.name)
          .join(', ')}</p>
        </div>
    </div>

    <div tabindex="0" id="review__form" class="resto__review">
        <h4>Reviews</h4>
        <div id="review__container">
        ${restaurant.customerReviews
          .map(
            (review) => `
          <div class="review__item">
          <div class="review__header">
            <p>${review.name}</p>
            <p>${review.date}</p>
          </div>
            <p>${review.review}</p>
          </div>
        `
          )
          .join('')}
          </div>
          </div>
  </div>
`;

const createReviewTemplate = (review) => `
<div class="review">
<div class="review-header">
  <p>${review.name}</p>
  <p>${review.date}</p>
</div>
  <p>${review.review}</p>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart-0" aria-hidden="true"></i>
  </button>
`;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoadingTemplate = () => `
  <div class="loading">
    loading...
    <img src="images/loading.gif" alt="loading"/>
  </div>
`;

export {
  createHomePageContent,
  createDetailPageContent,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
  createLoadingTemplate,
  createReviewTemplate,
};
