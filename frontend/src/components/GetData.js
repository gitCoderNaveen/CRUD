import React, { useState } from 'react'
import axios from 'axios'
import '../CSS/application.css'
export default function GetData() {
  const [product, setProduct] = useState('')
  const [firmDetails, setFirmDetails] = useState([])
  const [ispopup, setIspopup] = useState(true)

  const fetchFirmDetails = async (e) => {
    e.preventDefault()
    if (product !== ' ')
      try {
        const response = await fetch(`https://crud-elpu.onrender.com/industrials/get?product=${product}`);
        const data = await response.json();
        if (response.ok) {
          setFirmDetails(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching firm details:', error);
      }
      setIspopup(true)
  };

  const handleChange = (e) => {
    setProduct(e.target.value)
  }

  const handleClose =(e)=>{
    setIspopup(!ispopup)
  }
  return (
    <div className='resultDiv'>
      <div>
        <form>
          <div class="form-floating mb-3" style={{ width: '18rem' }}>
            <input type="text" class="form-control" id="floatingInput" placeholder="Enter Product Name" value={product} onChange={handleChange} />
            <label for="floatingInput">Enter Your Product</label>
          </div>
          <button className='btn btn-primary' onClick={fetchFirmDetails}>Search</button>
        </form>
      </div>

      <div className='detailsDiv'>
        {ispopup&&firmDetails.sort().length > 0 ? (
          <div className='textDiv'>
            <h2 >{product}</h2>
            {firmDetails.map((firm, index) => (
              <ul key={index}>
                <li>
                  <div className='detailsSubDiv'>
                    <div className='productName'>{firm.firmname}</div>
                    <div className='additionDiv'>
                      <div className='listItems'>
                        {firm.doorno}, {firm.street}, {firm.area}, {firm.city}, {firm.pincode}
                      </div>
                      <div>
                        <span>{firm.mobile}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>))
            }
            <button className='btn btn-primary' onClick={handleClose}>Close</button>
          </div>) : <p></p>
        }
      </div>
    </div>
  )
}
