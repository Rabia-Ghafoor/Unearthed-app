const app = document.querySelector("#app");

const renderGifts = async () => {
  const response = await fetch("http://localhost:3001/gifts");
  const gifts = await response.json();

  const title = document.createElement("h2");
  title.textContent = "Gift Catalog";
  app.appendChild(title);

  gifts.forEach((gift) => {
    const card = document.createElement("div");
    card.className = "gift-card";

    card.innerHTML = `
      <img src="${gift.image}" alt="${gift.name}" />
      <h3>${gift.name}</h3>
      <p>${gift.description}</p>
      <p><strong>Audience:</strong> ${gift.audience}</p>
      <p><strong>Price:</strong> ${gift.pricepoint}</p>
    `;

    app.appendChild(card);
  });
};

renderGifts();