import ItemCard from "../ItemCard/ItemCard.jsx";
import "./ItemsGrid.scss";

const ItemsGrid = ({ products }) => {
  return (
    <>
      <h2 className="items-grid--title">
        {" "}
        Recommendations Designed Just For You{" "}
      </h2>
      <div className="items-panel">
        <ul className="productList__card">
          {products.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemsGrid;
