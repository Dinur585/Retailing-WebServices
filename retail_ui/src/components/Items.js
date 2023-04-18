import { useState, useEffect } from 'react';
import '../index.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
import * as constant from '../Constants';

function Items() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(constant.WS_ITEM_SERVICE + '/items').then((res) => {
            // console.log(res.data);
            setProducts(res.data);
            console.log(products);
        });
    }, []);

    const renderButton = (rowData) => {
        return <button onClick={() => {
            console.log(rowData.id)
        }
        } >Add to Cart </button>;
    };

    return (
        <div>
            <h2>Item Details</h2>
            <div>
                <main>
                    <>
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
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