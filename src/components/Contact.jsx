
const Contact = () => {
  return (
    <div className="mx-60  flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">Get In Touch</h1>
      <form className="border-2 w-1/2" >
        <div className="flex flex-col py-2 px-8 mt-4">
          <label htmlFor="">First Name</label>
          <input type="text" className="border-2" />
        </div>
        <div className="flex flex-col py-2 px-8">
          <label htmlFor="">Last Name</label>
          <input type="text" className="border-2" />
        </div>
        <div className="flex flex-col py-2 px-8">
          <label htmlFor="">Email</label>
          <input type="email" className="border-2" />
        </div>
        <div className="flex flex-col py-2 px-8">
          <label htmlFor="">Subject</label>
          <input type="text" className="border-2" />
        </div>
        <div className="flex flex-col py-2 px-8">
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="5" className="border-2"></textarea>
        </div>
        <div className="flex flex-col py-2 px-8 mb-4">
          <button className="bg-sky-400 rounded-md  text-white py-2 px-3">SEND MESSAGE</button>
        </div>
      </form>
    </div>
  )
}

export default Contact