import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./ShopDropdown.module.css";
import ShopNavList from "./ShopNavList";
import { TiPlus, TiMinus } from "react-icons/ti";

const ShopDropdown = (props) => {
  const currentPage = useParams().shopId;
  const isShopNavListOpen = !isNaN(Number(currentPage));

  const [activeShop, setActiveShop] = useState(isShopNavListOpen);
  const [shopId, setShopId] = useState(isShopNavListOpen ? Number(currentPage) : undefined);

  // Ensure shops is an array
  const shops = props.shops || [];

  const selectShopHandler = (id) => {
    if (shopId !== id) {
      setShopId(id);
      setActiveShop(true);
    } else {
      setActiveShop(!activeShop);
    }
  };

  return (
    <ul className={styles.shopList}>
      <Link href={"/dashboard/addshop"}>
        <li className={styles.addShop}>
          <h3>Add Shop</h3>
          <div className={styles.shopListIcon}>
            <TiPlus />
          </div>
        </li>
      </Link>
      {shops.length === 0 ? (
        <li>No shops available</li> // Handle case with no shops
      ) : (
        shops.map((shop) => (
          <li key={shop._id}>
            <h4
              className={activeShop && shop._id === shopId ? styles.active : null}
              onClick={() => selectShopHandler(shop._id)}
            >
              {shop.shopname}
              <div className={styles.shopListIcon}>
                {activeShop && shop._id === shopId ? <TiMinus /> : <TiPlus />}
              </div>
            </h4>
            {activeShop && shop._id === shopId ? (
              <ShopNavList shopId={shopId} />
            ) : null}
          </li>
        ))
      )}
    </ul>
  );
};

export default ShopDropdown;
