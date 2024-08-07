import "./style.css";
import imageC from "./images/c.png";

export default function ClothingCard() {
    return (
    <div className="clothing-card">
      <img
        src={imageC} // Replace with actual image URL
        alt="Clothing"
        className="clothing-image"
      />
      <div className="clothing-info">
        <h2>Clothing & Apparel</h2>
        <ul>
          <li>Accessories</li>
          <li>Bags</li>
          <li>Kid's Fashion</li>
          <li>Mens</li>
        </ul>
      </div>
    </div>
  );
};