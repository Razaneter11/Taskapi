async function getdata() {
    const response = await fetch("https://dummyjson.com/products");
    const posts = await response.json();
    console.log(posts);
    const result = posts.products.map(function (ele) {
        return `
        <div class="swiper-slide">
        <img src="${ele.thumbnail}"/>
        </div>
        `
        ;
    }).join('');
    document.querySelector(".swiper-wrapper").innerHTML = result;



    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}
getdata();

