import React, { useEffect, useState } from "react";

const LimitDta = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProduct() {
    try {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }&select=title,price`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prveData)=>[...prveData,...result.products])
        setLoading(false)

        
     }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [count]);

  if (loading) {
    return <div>loading data ........</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <p>{item.title}</p>
                <p>{item.id}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button className="btn-container" onClick={()=> setCount(count + 1)}>Load More</button>
      </div>
    </div>
  );
};

export default LimitDta;
