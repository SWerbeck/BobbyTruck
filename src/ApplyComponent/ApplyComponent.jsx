import emailjs from 'emailjs-com'


const ApplyComponent = () => {

return (
  <div>
   <h1>Apply For Position</h1>
    <form>
        <label>name</label>
        <input type='text' name='name'/>

        <label>email</label>
        <input type='email' email='user_email'/>

        <label>Message</label>
        <textarea name='message' rows='4'/>

        <input type='submit' value='Send'/>
    </form>
  </div>

)

}


export default ApplyComponent