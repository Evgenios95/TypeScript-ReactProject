import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
// import { useHistory, useParams } from "react-router-dom";
import Footer from "./FooterHeaderCarouselBoxes/Footer";
import Header from "./FooterHeaderCarouselBoxes/Header";
import FadeIn from 'react-fade-in';

import bucketModel from '../models/bucketModel';

const Bucket = () => {  

    // const [state, setState] = useState({ value: '' });

    let img_baseUrl = "/images/productPhotos/";
    const [buckets, setBuckets] = useState<Array<bucketModel>>([]);
    // let history = useHistory();
    
    useEffect(() => {
        let userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0;
        console.log(userId);
        axios
            .get(`http://localhost:3000/users/bucket/${userId}`)
            .then((response) => {
                setBuckets(response.data.filteredBuckets);
                console.log(response.data.filteredBuckets);
            }).catch((err) => {
                console.log(err);
        });

    }, []);

    let totalPrice = 0;
    buckets.map((bucket) => {
        totalPrice += (Number(bucket.price) * Number(bucket.quantity));
    });


    // const onChangeHandler = (event: ChangeEvent<{ value: string }>) => {
    //     setState({ value: event?.currentTarget?.value });
    //   }
    

    return ( 
        <div>
            {localStorage.getItem('user') ? '' : <Header></Header>}
            <div className="container" style={{marginTop: '2%', marginBottom: '2%'}}>
                    <FadeIn>
                        <div data-test="card" className="card" style={{background: "#d5824bf0"}}>
                        <div data-test="card-body" className="card-body">
                            <div data-test="table" className="">
                                <table className="table btn-table table-fixed">
                                    <thead data-test="table-head" className="text-center">
                                        <tr>
                                            <th className="">#</th>
                                            <th><i data-test="fa" aria-hidden="true" className="fa fa-leaf mr-2 blue-text"></i>Product Image</th>
                                            <th><i data-test="fa" aria-hidden="true" className="fa fa-leaf mr-2 teal-text"></i>Product Name</th>
                                            <th><i data-test="fa" aria-hidden="true" className="fa fa-leaf mr-2 indigo-text"></i>quantity</th>
                                            <th><i data-test="fa" aria-hidden="true" className="fa fa-leaf mr-2 indigo-text"></i>Price($)</th>
                                            <th><i data-test="fa" aria-hidden="true" className="fa fa-leaf mr-2 red-text"></i>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody data-test="table-body" className="text-center">
                                    {buckets.map((bucket: bucketModel, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img style={{width: 70, height: 100}} src={img_baseUrl+bucket.productImage} alt={bucket.productName} />
                                            </td>
                                            <td>
                                                <span>{bucket.productName}</span> 
                                            </td>
                                            <td>
                                                {/* <input type="number" className="form-control" value={state?.value} onChange={onChangeHandler} /> */}
                                                <span>{bucket.quantity}</span>
                                            </td>
                                            <td>
                                                <span>${bucket.price}</span>
                                            </td>
                                            <td>
                                                <button 
                                                    data-test="button" 
                                                    type="button" 
                                                    className="btn btn-red Ripple-parent btn-sm btn-default btn-rounded" 
                                                    onClick={function() 
                                                    {
                                                        axios
                                                            .delete(`http://localhost:3000/users/${bucket.UserId}/bucket/${bucket.productId}/${bucket.quantity}`)
                                                            .then((response) => {
                                                                console.log(response.data.removedBucket);
                                                                window.location.reload();
                                                            }).catch((err) => {
                                                                console.log(err);
                                                        });
                                                    }}
                                                > Remove
                                                    <div data-test="waves" className="Ripple Ripple-outline">
                                                    </div>
                                                </button>   
                                            </td>
                                        </tr>
                                    ))}
                                    {/* {localStorage.getItem('user') ?
                                        (<tr>
                                            <td></td><td></td><td></td><td></td><>
                                            <td><b>Total: ${totalPrice}</b></td>
                                            <td>
                                                <button className="btn btn-primary">
                                                Buy Now
                                                </button>
                                            </td>
                                        </tr>
                                        )
                                        :
                                    ''}  */}

                                        <tr>
                                            <td></td><td></td><td></td><td></td>
                                            <td><b>Total: ${totalPrice}</b></td>
                                            <td>
                                                <button className="btn btn-primary">
                                                Buy Now
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </FadeIn>
                </div>
            <Footer></Footer>
        </div>
    )
}

export default Bucket;
