async function getdata() {
  
      const response = await axios.get("https://dummyjson.com/products");
      const posts = response.data;
      console.log(posts);
      const result = posts.products.map(function (ele) {
          return `
            <div>
              <h2>${ele.title}</h2>
              <img src="${ele.thumbnail}" alt="Product Thumbnail"></img>
              <a href="details.html?productId=${ele.id}">Details</a>
            </div>
          `;
        }).join('');
      document.querySelector(".resltdat0").innerHTML = result;
  
  }
  getdata();
  