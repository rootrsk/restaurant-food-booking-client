import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import { postApi } from '../../src/utils/userApi'
import { useRouter } from 'next/router'
function Payment(x) {
    const [options,setOptions] = useState(null)
    const [loading,setLoading] = useState(false)
    const router  = useRouter()
    console.log(x)
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }
    console.log(router)
    const fetchOrderDeatils = async()=>{
        setLoading(true)
        const {error,data} = await postApi('/user/razorpay-order', router)
        console.log(error,data)
        if (error) {
            alert(error)
            return
        }
        if(data.order){
            console.log(data.order)
            setOptions(data.order)
        }
        setLoading(false)
    }
    const handler = (res) =>{
        alert("Payment Successful, Go To Orders Page")
    }
    const displayRazorpay = async()=> {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }
        if (!options){
            return console.log("nption not available")
        }
        console.log(options)
        const paymentObject = new window.Razorpay({...options,handler})
        paymentObject.open()
        paymentObject.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        })
    }
    useEffect(()=>{
        fetchOrderDeatils()
    },[])
    return (
        <div
            style={{
                width:'100%',
                display:'flex',
                justifyContent:'center',

            }}
        >
            <button
                onClick={displayRazorpay}
                style={{
                    background:'blue',
                    color:"white",
                    padding:'10px 20px',
                    outline:'none',
                    border:'none',
                    borderRadius:'5px'
                }}
            >Pay</button>
        </div>
    )
}

export default Payment