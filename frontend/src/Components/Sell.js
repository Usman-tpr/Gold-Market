import React,{useState} from 'react'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'
import { toast } from 'react-toastify';

import { useAuth } from '../Context/auth'

const SellProduct = () => {
    const [name,setName] = useState()
    const [desc,setDesc] = useState()
    const [price,setPrice] = useState()
    const [photo,setPhoto] = useState()
    const [category, setCategory] = useState('');

    const [auth] = useAuth();
       
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            console.log('clicked')
            const productData = new FormData();
            productData.append('title',name)
            productData.append('desc',desc)
            productData.append('price',price)
            productData.append('photo',photo)
            productData.append('category',category)
            productData.append('auther',auth.isExist.email)
            

            const res = await axios.post('http://localhost:5000/add-product',productData)
            console.log("passed")
            console.log(res)
            if(res.status === 200){
                const promise = new Promise((resolve) => {
                    toast.success('Post added successfully!', {
                      position: 'top-center',
                      autoClose: 3000, // Close the notification after 3 seconds
                      onClose: () => resolve(),
                    });
                  });
              
                  // Wait for the toast notification to be closed
                  await promise;
              
                  // Navigate to the home page after the notification is closed
                  navigate('/');
            }
            if(res.status!==200){
               
            }

        } catch (error) {
            console.log(error.message)
        }
    }
  return (
<Layout>
    <div className='container'>
      <p>{auth.isExist?auth.isExist.name:"not"}</p>
        <div className='row justify-content-center'>
            <div className='col-sm-6 '>
                <h2>Post your Product here for free</h2>
                <form>
                 <input onChange={((e)=>{setName(e.target.value)})} placeholder='Enter Title' className='form-control' name='name'></input>
                 <input onChange={((e)=>{setDesc(e.target.value)})} placeholder='Enter Details of Product' className='form-control' name='desc'></input>
                 <input onChange={((e)=>{setPrice(e.target.value)})} placeholder='Enter Price of the Product' className='form-control' type='number' name='price'></input>
                    
                 <select class="form-select" aria-label="Default select example"  value={category}
                 onChange={(e) => setCategory(e.target.value)}>
                 <option selected>Open this select menu</option>
                 <option value="1">Earings</option>
                 <option value="2">Rings</option>
                 <option value="3">Necklace</option>
                 </select>

                 {/* photo */}
                 <label>Upload photo:</label>
                 <input type='file' name='photo' accept='image/*' onChange={((e)=>setPhoto(e.target.files[0]))}></input>
                <div className='img img-responsive'>{photo && (<div>
                        <img src={URL.createObjectURL(photo)} width={'200px'} height={'200px'} alt='preiveiw '></img>
                </div>)} </div>

                <button className='btn btn-success mt-2' onClick={handleSubmit}>Post Product</button>
                </form>
            </div>
        </div>
    </div>
</Layout>
  )
}

export default SellProduct