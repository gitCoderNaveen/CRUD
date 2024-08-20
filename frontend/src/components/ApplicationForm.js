import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/application.css'
import axios from 'axios'
export default function ApplicationForm() {
  const [sno, setSno] = useState('')
  const [firmname, setName] = useState('')
  const [doorno, setDoorno] = useState('')
  const [street, setStreet] = useState('')
  const [area, setArea] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [mobile, setMobile] = useState('')
  const [product, setProduct] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const industrialData = {
      sno: sno,
      firmname: firmname,
      doorno: doorno,
      street: street,
      area: area,
      city: city,
      pincode: pincode,
      mobile: mobile,
      product: product
    }
    //npm i axios
    axios.post('https://crud-elpu.onrender.com/industrials/post', industrialData)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    //alert
    alert('Sumitted successfully')

    setSno('')
    setName('')
    setDoorno('')
    setStreet('')
    setArea('')
    setCity('')
    setPincode('')
    setMobile('')
    setProduct('')
  }
  return (
    <div>
      <div className='myContainer'>
        <form onSubmit={handleSubmit}>
          <div className='myForm'>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Serial Number" value={sno} onChange={(e) => { setSno(e.target.value) }} />
              <label for="floatingInput">S.No</label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter company Number" value={firmname} onChange={(e) => { setName(e.target.value) }} />
              <label for="floatingInput">Company Name </label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Door Number" value={doorno} onChange={(e) => { setDoorno(e.target.value) }} />
              <label for="floatingInput">Door Number</label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Door Number" value={street} onChange={(e) => { setStreet(e.target.value) }} />
              <label for="floatingInput">Street Name</label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Door Number" value={area} onChange={(e) => { setArea(e.target.value) }} />
              <label for="floatingInput">Area Name</label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Door Number" value={city} onChange={(e) => { setCity(e.target.value) }} />
              <label for="floatingInput">City Name</label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Door Number" value={pincode} onChange={(e) => { setPincode(e.target.value) }} />
              <label for="floatingInput">Pincode</label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Door Number" value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
              <label for="floatingInput">Mobile Number</label>
            </div>
            <div class="form-floating mb-3" style={{ width: '18rem' }}>
              <input type="text" class="form-control" id="floatingInput" placeholder="Enter Door Number" value={product} onChange={(e) => { setProduct(e.target.value) }} />
              <label for="floatingInput">Product Name</label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>Add Customer</button>
        </form>
      </div>
    </div>
  )
}
