
import React from 'react';
import about from '../assets/about.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



export default function Home() {
  
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    },
  ];
  return(
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
        <section className='flex items-center gap-4 mt-5 '>
         <div className=''>
            <img src={about} alt="" />
         </div>
         <div>
            <div>
               <h1 className='text-bold uppercase text-center'>About Us</h1>
               <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the world in classical literature, discovered the undoubtable source</p>
            <div>
 
           </div>
               <h2>"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence"</h2>
               <h3>----Abigail Adams</h3>
            </div>
         </div>
         </section>
  
      </div>
    
  );
}
