import pic from "../images/bookImg.jpg";
import { Store } from '../Store';
import { useContext, useState, useEffect } from 'react';
import '../index.css';
import '../styles/Items.css'
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import { Column } from 'primereact/column';
import axios from "axios";
import { Button } from "react-bootstrap";

//const mockData = require('./items.json');


function Items() {
    //const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    //         // console.log(res.data);
    //         setProducts(res.data);
    //         console.log(products);
    //     });
    // }, []);

    const products=[
        {
          "product_id": 4,
          "product": "Loaded Cup Dispenser",
          "price": 90.08,
          "quantity": 14,
          "image":'/images/bookImg.jpg'
        },
        {
            "product_id": 4,
            "product": "Juice - Orange, 341 Ml",
            "price": 90.08,
            "quantity": 14
        },
        {
            "product_id": 4,
            "product": "Cake - Bande Of Fruit",
            "price": 90.08,
            "quantity": 14
        },
        {
            "product_id": 4,
            "product": "Ice Cream - Chocolate",
            "price": 90.08,
            "quantity": 14
        },
        {
            "product_id": 4,
            "product": "Cleaner - Pine Sol",
            "price": 90.08,
            "quantity": 14
        },
        {
            "product_id": 4,
            "product": "Seaweed Green Sheets",
            "price": 90.08,
            "quantity": 14
        }]

    return (
        <div className="productTableContainer">
            <table className="productTable">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>{
                        return (<tr>
                            <td>{product.product_id}</td>
                            <td>{product.product}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button className="btn btn-info">Add</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Items;