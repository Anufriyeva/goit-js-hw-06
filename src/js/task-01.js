const categoriesList = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesList.length);

// categoriesList.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});

