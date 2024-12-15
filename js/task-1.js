const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent; 

  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);

  console.log(`Elements: ${elementsCount}`);
});

//Number of categories: 3
//Category: Animal
//Elements: 4
//Category: Products
//Elements: 3
//Category: Technologies
//Elements: 5