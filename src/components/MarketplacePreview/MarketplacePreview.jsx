import React from 'react';
import './MarketplacePreview.css';
import { products } from '../../data/marketplace';
import ProductCard from './ProductCard';

function MarketplacePreview() {
  return (
    <section id="marketplace" className="marketplace-section">
      <div className="marketplace-container">
        <h1 className='title'>Marketplace Preview</h1>
        <div className="grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              source={product.source}
              name={product.name} 
              category={product.category} 
              price={product.price} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketplacePreview;