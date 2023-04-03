import { useState, useEffect } from 'react';
import '../index.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";


function Orders() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8010/api/order/orders').then((res) => {
            setProducts(res.data);
            console.log(products);
        });
    }, []);

    return (
        <div>
            <h2>Order Details</h2>
            <div>
                <main>
                    <>
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="product_id" header="ProductId"></Column>
                            <Column field="product" header="Product Name"></Column>
                            <Column field="price" header="Price"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                            <Column field="total" header="Total"></Column>
                        </DataTable>
                    </>
                </main>

            </div>
        </div>
    );
}
export default Orders;