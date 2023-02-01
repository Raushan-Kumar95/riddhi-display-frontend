import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetInTouch = () => {

    const form = useRef();
    const [emailRes,setEmailRes] = useState("")

   


  const sendEmail = (e) => {
    e.preventDefault();
    console.log("clicked")

    emailjs.sendForm('service_o6664ia', 'template_sstezzr', form.current, 'bmGjfR0J67EYSj8ie')
      .then((result) => {
          result.text === "OK" && setEmailRes(<h1 className='text-green-900 font-bold text-2xl uppercase'>email sent</h1>);
          
            toast("Message Sent");
        
      }, (error) => {
            setEmailRes(<h1 className='text-red-900 uppercase font-bold text-2xl'>email sent</h1>)
          console.log(error.text);
          
            toast("Message Not Sent");
        
      });

      e.target.reset()
  }; 

    return (

        <div className='flex sm:flex-row flex-col sm:py-16  sm:py-4 pt-4 gap-24 sm:px-16 px-4'>

            <div className='GetInTouch flex flex-col gap-8 w-full py-5'>
                <h1 className='uppercase text-red-400 font-bold text-5xl'>get in <span className='text-black'> touch</span></h1>
                <p>If you have any questions, please feel free to contact us.</p>

                <div className='flex gap-4'>
                    <ul>
                        <i className="fa fa-map-marker text-red-400 text-3xl" aria-hidden="true"></i>
                    </ul>
                    <ul>
                        <h1 className='font-bold uppercase'>PATNA ADDRESS</h1>
                        <p>Ram Lakhan Path, Ram Lakhan Singh Market</p>
                        <li>Road No.-24, Rajeev Nagar, Patna-800024</li>
                        <li>Phone : 9835999500, 7717788162</li>
                        <li>Email: roshntn@gmail.com</li>
                    </ul>
                </div>

            </div>

            {/* col-2 */}
            <div className="requestAQuote flex flex-col gap-8 w-full py-5">
                {/* {emailRes} */}
                <h1 className='uppercase text-black font-bold text-5xl '>REQUEST <span className='text-red-400'> A QUOTE</span></h1>

                <div className='bg-gray-100 py-4 px-4 bg-gray-200 w-full'>
                    <form action="" ref={form}  onSubmit={sendEmail} className='flex flex-col flex-wrap gap-4'>
                        <ul className='gap-2 sm:flex-row flex-col flex w-full'>
                            <input className=' sm:px-3 py-2 px-2 w-full' type="text" name="user_name" placeholder='Full Name'  id="Name" required/>
                        </ul>
                        <ul className='gap-2 flex sm:flex-row flex-col'>
                            <input className='sm:px-3 px-2 py-2 w-full' type="email" name="user_email" placeholder='Email Address' id="" required />
                        </ul>
                        

                        <textarea placeholder='Message' className=' sm:px-3 py-2 px-2 w-full' name="message" id="message" cols="30" rows="10"></textarea>
                        <div className='mx-4'>
                            <input type='submit'  className='cursor-pointer px-10 rounded-md text-md py-2 bg-red-600 font-bold text-white' value="SUBMIT" />
                        </div>
                    </form>
                    <ToastContainer />

                    {/* {(emailRes) ? <h1 className='text-green-300'>email sent</h1> : <h1 className='text-red-400'>email not sent</h1>} */}
                </div>
            </div>
        </div>

    )
}

export default GetInTouch