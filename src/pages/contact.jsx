import { useState } from 'react';
import Footer from '../components/footer';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
    <div className="sm:block md:block lg:flex justify-center mb-10">
      <iframe 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.98599597371!2d8.86678857416249!3d9.935122774149455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373a3463228a9%3A0xe71a43aadebd65b0!2sBaptist%20Church%20Alheri!5e0!3m2!1sen!2sng!4v1722774343098!5m2!1sen!2sng"
       allowfullscreen="" 
       loading="lazy" 
       className="sm:mt-10 object-cover rounded-[20px] shadow-[10px_10px_10px_rgba(0,0,0,0.5)] w-[90vw] lg:w-[40vw] h-[80vh] transition-transform duration-300 transform hover:scale-105"
      >    </iframe>

      <div className="lg:w-[30vw] h-[100vh]">
        <form
          id="userForm"
          className="p-[50px] sm:text-center md:text-center lg:text-left"
          onSubmit={handleSubmit}
        >
          <div>
            <h2 className="sm:w-full md:text-center lg:text-left font-bold w-full text-[20px] hover:text-red-700">
              Get in Touch!
            </h2>
            <p className="md:text-[10px] lg:text-[12px] mb-[20px]">Please enter details</p>
          </div>

          <label htmlFor="firstName">First Name:</label><br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
          /><br /><br />

          <label htmlFor="lastName">Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
          /><br /><br />

          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
          /><br /><br />

          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
          /><br /><br />

          <div className="mb-[20px]">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
              className="form-checkbox h-2 w-2"
            />
            <span className="ml-2">I agree to the terms & conditions</span>
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="p-[9px] border-[1px] border-none w-full rounded-[10px] bg-red-950 hover:bg-red-800 md:w-[300px] text-white"
          />
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;
