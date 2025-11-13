  // Cocktail Data
  const cocktaillists = [
    { name: 'Rhino Pale Ale', country: 'CA', detail: '750 ml', price: '$20' },
    { name: 'Irish Guinness', country: 'IE', detail: '600 ml', price: '$29' },
    { name: 'Bloody Mary', country: 'US', detail: '500 ml', price: '$25' },
    { name: 'Piña Colada', country: 'CU', detail: '700 ml', price: '$27' }
  ];

  // Select the UL
  const listContainer = document.getElementById("cocktail-list");

  // Populate List
  cocktaillists.forEach((drink) => {
    const li = document.createElement("li");
    li.className = "flexitems-center bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 hover:bg-white/20 transition";

    li.innerHTML = `
      <span class="font-semibold">${drink.name}</span>
      <span class="text-sm text-gray-300">${drink.country}</span>
      <span class="text-sm">${drink.detail}</span>
      <span class="font-bold">${drink.price}</span>
    `;

    listContainer.appendChild(li);
  });