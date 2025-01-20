const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function cards(fullCard, deleteCallback) {
  // @todo: Темплейт карточки
  const template = document.querySelector("#card-template").content;
  const cardElement = template.querySelector(".card").cloneNode(true);

  // @todo: DOM узлы
  const cardImage = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = fullCard.link;
  cardImage.alt = fullCard.name;
  cardTitle.textContent = fullCard.name;

  deleteButton.addEventListener("click", () => {
    deleteCallback(cardElement);
  });

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((fullCard) => {
  const cardElement = cards(fullCard, deleteCard);
  placesList.append(cardElement);
});
