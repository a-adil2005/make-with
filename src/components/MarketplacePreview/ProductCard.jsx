import React from "react";
import "./MarketplacePreview.css";


function ProductCard({ source, name, category, price }) {
  return (
    <div className="card">
      <img src={source} alt={name} className="product-image-placeholder" />

      <h3>{name}</h3>

      <p>{category}</p>

      <span>{price}</span>
    </div>
  );
}

export default ProductCard;
