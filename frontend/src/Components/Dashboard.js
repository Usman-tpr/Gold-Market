import React,{useState,useEffect} from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios';
import { useAuth } from '../Context/auth';
import { toast } from 'react-toastify';
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  
   const [auth] = useAuth()
  const conn = async () => {
    try {
      if (auth) {
        const { data } = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${auth?.isExist?.email}`, // Optional chaining to safely access nested properties
          },
        });
    
       
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    conn();
    
  }, []); 

  const deleteItem = async(pid) =>{
        const res =  await axios.delete(`http://localhost:5000/product/${pid}`)
        if(res.status===200){
          setProducts((prevProducts) => prevProducts.filter((product) => product._id !== pid));
          toast.success('Item deleted successfully!', {
            position: 'top-center',
            autoClose: 3000, // Close the notification after 3 seconds
          });
        }
  }
  return (
  <Layout>
     <div className=' mt-5 container'>
     
     <div className='row'>
     {
      products.length>0 ? (<>
               {
                products.map((product)=>{
                  return (
                    <div className="card col-sm-4 mx-3 mb-5" style={{width: '18rem'}}>
                  <img src={`http://localhost:5000/product-photo/${product._id}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">{product.desc}</p>
                    <a href="#" className="btn btn-primary" onClick={() => deleteItem(product._id)}>Delete Item</a>
                  </div>
                </div>
                  )
                
                })
               }
      </>) : (<>
         <h3 className='text-danger'>No Products Found Please Upload Your Product By Clicking the Sell Button</h3>
      </>)
     }
     </div>
      </div>
  </Layout>
  )
}

export default Dashboard