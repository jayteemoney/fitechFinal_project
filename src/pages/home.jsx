import { useState, useEffect } from 'react';

import Landing from '../components/landing';
import Starss from '../components/starss';
import Stars from '../components/stars';
import Footer from '../components/footer';

function Home() {
  // State to store the fetched recipes
  const [recipes, setRecipes] = useState([]);

  const apiKey = '80ecd3ce66f54ab48ed781403e0dcb31'; 
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pizza&number=9`;

  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch the data from the API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Set the fetched data in the state
        setRecipes(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, [url]); // Empty dependency array ensures this runs only once on mount

   return (
    <div className='justify-center items-center'>
    <div className='bg-black text-white p-[40px] flex flex-col  justify-center items-center'>
      <Landing/>  
      <div className='flex flex-wrap justify-center'>
          {recipes.length > 0 ? (
          // Use map() to render the list of recipes dynamically
          recipes.map((recipe) => (
            <div key={recipe.id} className="flex justify-center items-center flex-col">
              <Stars/>
              <div className='flex w-[400px] flex-wrap justify-center items-center'>    
                  <img src={recipe.image} alt={recipe.title} className='rounded-[15px]'/>
              </div>
              <h2>{recipe.title}</h2>
              <Starss/>
            </div>
          ))
           ) : (
          <p>Loading recipes...</p>
           )}
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Home;
