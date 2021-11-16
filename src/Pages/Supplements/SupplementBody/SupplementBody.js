import React, { useEffect, useState } from 'react';
import Supplement from '../Supplement/Supplement';
import useCart from '../../../hooks/useCart';
import './SupplementsBody.css'

const SupplementsBody = () => {
  const [supplements, setSupplements] = useState([]);
  const [cart, setCart] = useCart(supplements);

  useEffect(() => {
    fetch('./supplements.json')
      .then(res => res.json())
      .then(data => setSupplements(data));
  }, [])


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }


  return (
    <div className="all-supplement container">
      {
        supplements.map(supplement => <Supplement supplement={supplement} handleAddToCart={handleAddToCart} key={supplement.id}></Supplement>)
      }
    </div>
  );
};

export default SupplementsBody;