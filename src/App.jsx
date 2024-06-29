import './index.css'

function App() {
  return (

    <div className='bg-green-200 min-h-screen flex items-center justify-center'>
        <div className='bg-white  px-6 py-3  rounded-2xl'>

            <h1 className='text-gray-800 font-bold  text-2xl p-2 pl-0'>Contact Us</h1>
            
            <form action="" method="get">
                <div className='flex  flex-col py-2'>
                    <label htmlFor="firstname" className='text-gray-600 p-1 pl-0'>First Name <span className='text-green-600 p-1'>*</span></label>
                    <input type="text"  id='firstname' className='w-full outline rounded  outline-gray-500 h-9' />
                </div>
                <div className='flex  flex-col py-2'>
                    <label htmlFor="" className='text-gray-600 p-1 pl-0'>Last Name <span className='text-green-600 p-1'>*</span></label>
                    <input type="text" id='lastname' className='w-full outline rounded  outline-gray-500 h-9'/>
                </div>
                <div className='flex  flex-col py-2'>
                    <label htmlFor="" className='text-gray-600 p-1 pl-0'>Email Address <span className='text-green-600 p-1'>*</span></label>
                    <input type="text" id='email'  className='w-full outline rounded  outline-gray-500 h-9'/>
                </div>
                <div className='flex  flex-col py-2'>
                    <label htmlFor="" className='text-gray-600 p-1 pl-0'>Query Type <span className='text-green-600 p-1'>*</span></label>
                    <input type="radio" />
                    <input type="radio" />
                </div>
                <div className='flex  flex-col py-2 '>
                    <label htmlFor="" className='text-gray-600 p-1 pl-0'>Message <span className='text-green-700 p-1'>*</span></label>
                    <textarea name="" id="" className='w-full outline rounded  outline-gray-500 h-64'></textarea>
                </div>
                <div id='checkbox' className='flex py-2 '>
                    <input type="checkbox" className=' outline-gray-500'/>
                    <p className='p-2'>I consent to being contacted by the team <span className='text-green-600 p-1'>*</span></p>
                </div>
                <button className='w-full bg-green-800 text-white rounded-lg p-2'>Submit</button>

            </form>
        </div>



        </div>
        // 

        //
        // This field is required
        
        //
        // This field is required
        
        // Email Address
        // Please enter a valid email address
        // This field is required
        
        // 
        // General Enquiry
        // Support Request
        // Please select a query type
        
        // Message
        // This field is required
        
        // I consent to being contacted by the team
        // To submit this form, please consent to being contacted
        
        // Submit
        
        // Message Sent!
        // Thanks for completing the form. We'll be in touch soon!
        
    
    )
}

export default App
