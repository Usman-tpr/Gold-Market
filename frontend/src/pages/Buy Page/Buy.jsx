import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Buy = () => {
    const [localData, setLocalData] = useState({
        title: '',
        image: "",
        count: '',
        price: '',
    })
    useEffect(() => {

        const storedTitle = localStorage.getItem('title');
        const storedCount = localStorage.getItem('count');
        const storedImg = localStorage.getItem('image');
        const storedPrice = localStorage.getItem('price');

        setLocalData({
            title: storedTitle,
            count: storedCount,
            image: storedImg,
            price: storedPrice
        })

    }, []);

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <h4 className='fw-semibold'>Gold-Market | Buy Now</h4>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Contact</label>
                                <input type="email" class="form-control" placeholder='Enter Email or Number' />

                            </div>
                            <div class="mb-3">
                                <label className='form-label'>Delivery</label>
                            </div>
                            <div class="mb-3">
                                <label className='form-label'>Name*</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div class="mb-3">
                                <label className='form-label'>Address*</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div class="mb-3">
                                <label className='form-label'>city*</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div class="mb-3">
                                <label className='form-label'>ZIP Code</label>
                                <input type="text" className='form-control' />
                            </div>

                            <button type="submit" class="btn btn-dark" >Add Information</button>
                        </form>
                    </div>
                    <div className="col-sm-6 bg-light pt-4 position-relative p-5">
                        <div className="d-flex">
                            <img src={localData.image} alt="" width='100px' height='100' className='border border-1 border-black' />

                            <h5 className='mx-3'>{localData.title}</h5>
                            <p className='mt-5 me-5 pe-5'>${localData.price}</p>
                            <h5 className='count-position'>{localData.count}</h5>
                        </div>

                        <div className="col-6 d-flex mt-3 justify-content-between ">
                        <p>Subtotal:</p> <span className=''>${localData.price*localData.count}</span>
                        </div>
                        <div className="col-6 d-flex justify-content-between ">
                        <p>Shipping:</p> <span >free</span>
                        </div>
                        <div className="col-6 d-flex  justify-content-between">
                        <p className='fw-bold'>Total:</p> <span className='fw-bold' >${localData.price*localData.count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy