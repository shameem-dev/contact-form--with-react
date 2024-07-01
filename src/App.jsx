import './index.css'

function App() {
  return (

    <div className='bg-green-200 min-h-screen flex items-center justify-center'>
        <div className='bg-white  px-6 py-3  rounded-2xl'>
            <h1 className='text-gray-800 font-bold  text-2xl p-2 pl-0'>Contact Us</h1>
            
            <form action="/submit" method="get">

            {/* First,Last names and Email */}
                <div className='names'>

                    <div className='flex  flex-col py-2'>
                        <label htmlFor="firstname" className='text-gray-600 p-1 pl-0'>First Name <span className='text-green-600 p-1'>*</span></label>
                        <input type="text"  id='firstname' required className='w-full outline rounded  outline-gray-500 h-9 hover:outline-green-800 focus:outline-green-800 hover:outline-2 focus:outline-2' />
                        <p className=' text-red-500 hidden'>This field is required</p>
                    </div>

                    <div className='flex  flex-col py-2'>
                        <label htmlFor="lastname" className='text-gray-600 p-1 pl-0'>Last Name <span className='text-green-600 p-1'>*</span></label>
                        <input type="text" id='lastname' required className='w-full outline rounded  outline-gray-500 h-9 hover:outline-green-800 focus:outline-green-800 hover:outline-2 focus:outline-2'/>
                        <p className=' text-red-500 hidden'>This field is required</p>
                    </div>
                </div>

                <div className='flex  flex-col py-2'>
                    <label htmlFor="email" className='text-gray-600 p-1 pl-0'>Email Address <span className='text-green-600 p-1'>*</span></label>
                    <input   type="email"  required className='w-full outline rounded  outline-gray-500 h-9 hover:outline-green-800 focus:outline-green-800 hover:outline-2 focus:outline-2'/>
                    <p className=' text-red-500 hidden ' >Please enter a valid email address</p>
                </div>


                

                <div className='flex  flex-col py-2'>
                    <h4 htmlFor="" className='text-gray-600 p-1 pl-0'>Query Type <span className='text-green-600 p-1'>*</span></h4>

                    <div className='outline outline-gray-500 flex items-center justify-center h-9 mb-2 rounded focus:bg-green-200 hover:bg-green-200 hover:outline-2 focus:outline-2'>
                        <input type="radio"  className='mr-2'  name='option' value={1}/>
                        <label htmlFor="support">Support Request</label>
                    </div>
                    
                    <div  className='outline outline-gray-500 flex items-center justify-center h-9 rounded focus:bg-green-200 hover:bg-green-200 hover:outline-2 focus:outline-2'>
                        <input type="radio" className='mr-2' name='option' value={1}  />
                        <label htmlFor="">General Enquiry</label>
                        
                    </div>
                    <p className=' text-red-500 hidden'>Please select a query type</p>
                    
                </div>

                {/* Msg area */}

                <div className='flex  flex-col py-2 '>
                    <label htmlFor="" className='text-gray-600 p-1 pl-0'>Message <span className='text-green-700 p-1'>*</span></label>
                    <textarea name="" id="" className='w-full outline rounded  outline-gray-500 h-64 hover:outline-green-800 focus:outline-green-800 hover:outline-2 focus:outline-2'></textarea>
                    <p id='msg' className='hidden text-red-500'>This field is required</p>

                </div>


                {/* Last verfication with check box */}
                <div id='checkbox' className='flex py-2  my-2'>
                    <div className='flex'>
                    <input type="checkbox" className=' outline-gray-500 hover:outline-green-800 focus:outline-green-800 checked:bg-green-500'/>
                    <p className='p-2'>I consent to being contacted by the team <span className='text-green-600 p-1'>*</span></p>

                
                    
                    </div>
                    
                    

                </div>
               
                
                <button className='w-full bg-green-800 text-white rounded-lg p-2 ' type='submit'>Submit</button>

            </form>
        </div>



        </div>
        
        
        
        // Message Sent!
        // Thanks for completing the form. We'll be in touch soon!
        
    
    )
}

export default App
