import Footer from "../components/footer";

export default function About() {
  return (
    <div>
    <div  className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
      backgroundImage: 'url(https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
        }}
     >
    
      <div className="text-center text-black font-bold">
        <h1 className="text-[50px] mb-[50px] text-black font-bold hover:text-red-700">About us</h1>
        <h3 className="text-[20px] mb-[50px] text-black font-bold hover:text-red-700">what makes our product special</h3>
        <p className="mb-10 hover:text-red-700">Welcome to JAYS PIZZA HUB!

          We are a team of pizza enthusiasts who are passionate about serving the best pies in town. Our story began with a simple idea: to create a pizza that would bring people together.

          <p className="text-[20px] mb-[50px] text-black font-bold hover:text-red-700">Our Mission:</p>

          we are dedicated to providing exceptional quality, outstanding customer service, and a memorable dining experience. We believe that pizza has the power to bring people together, and we are committed to making that happen.

          <p className="text-[20px] mb-[50px] text-black font-bold hover:text-red-700">Our Values:</p>

          We value freshness, quality, and community. We believe that the best pizzas are made with the freshest ingredients, and we are committed to sourcing the highest-quality ingredients for our pies.
       </p>
        <button className="bg-red-950 hover:bg-red-400 text-white p-[10px] rounded-[10px] mt-20px">learn more</button>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
