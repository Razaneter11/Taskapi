
    const url = new URLSearchParams(window.location.search);
    const productId = url.get('productId'); 
    /*console.log(url);
    console.log(productId);*/
    const ProductData = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
    const datapro =  response.data;
    console.log(datapro);
    const result =  `
      <ul>
      <li>${datapro.id}</li>
      <li>${datapro.title}</li>
      <li>${datapro.description}</li>
      <li>${datapro.discountPercentage}</li>
      <li>${datapro.brand}</li>
      <li>${datapro.price}</li>
      <li>${datapro.rating}</li>
      <li>${datapro.stock}</li>
      <li>${datapro.category}</li>
      <img src="${datapro.thumbnail}" alt="Product Image"/>
      </ul>
      ` ;
    document.querySelector(".list").innerHTML = result;
}
ProductData();












  


  
    
