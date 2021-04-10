const product = document.querySelector('.product'),
productItem = document.querySelectorAll('.product_item');



const showImg = () => {
  productItem.forEach((i) => {
    let img = i.querySelector('.img');
    product.addEventListener('mouseover', (event) => {
      let target = event.target;
      if(target.closest('.product_item') === i){
        img.style.opacity = 1;
      }else {
        img.style.opacity = 0;
      }
    });
    product.addEventListener('mouseover', (event) => {
      let target = event.target;   
      if(target === product) {
        img.style.opacity = 0;
      }   
    });
  });
};
showImg();





