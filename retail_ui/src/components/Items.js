import { useState, useEffect } from "react";
import "../index.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

//const mockData = require('./items.json');

function Items() {
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:8010/api/item/items").then((res) => {
  //       // console.log(res.data);
  //       setProducts(res.data);
  //       console.log(products);
  //     });
  //   }, []);

  const products = [
    {
      product_id: 4,
      product: "Loaded Cup Dispenser",
      price: 90.08,
      quantity: 14,
      image: "/images/bookImg.jpg",
    },
    {
      product_id: 4,
      product: "Juice - Orange, 341 Ml",
      price: 90.08,
      quantity: 14,
    },
    {
      product_id: 4,
      product: "Cake - Bande Of Fruit",
      price: 90.08,
      quantity: 14,
    },
    {
      product_id: 4,
      product: "Ice Cream - Chocolate",
      price: 90.08,
      quantity: 14,
    },
    {
      product_id: 4,
      product: "Cleaner - Pine Sol",
      price: 90.08,
      quantity: 14,
    },
    {
      product_id: 4,
      product: "Seaweed Green Sheets",
      price: 90.08,
      quantity: 14,
    },
  ];

  const renderButton = (rowData) => {
    return (
      <button
        onClick={() => {
          console.log(rowData.id);
        }}
      >
        Add to Cart{" "}
      </button>
    );
  };

  return (
    <div>
      <h2>Item Details</h2>
      <div>
        <main>
          <>
            <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
              <Column field="product_id" header="ProductId"></Column>
              <Column field="product" header="Product Name"></Column>
              <Column field="price" header="Price"></Column>
              <Column field="quantity" header="Quantity"></Column>
              <Column body={renderButton}></Column>
            </DataTable>
          </>
        </main>
      </div>
    </div>
  );
}
export default Items;
