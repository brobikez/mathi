import React from 'react';
import './bikeinformation.css'; // Import the CSS file .
import { useNavigate } from 'react-router-dom';

const Carinformation = () => {
  // Sample data for the cards
  const Cardetail = [
    {
      id: 1,
      mileage: 'mileage :40kmpl',
      title: 'Type: Normal bike',
      description: 'Description: Excellent Bike  excellent performance excellent seating space excellent boot space budget car.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-xQHqE9ZWS22swsKNwsXYgJOv0kmr2TRcg&s'
    },
    {
      id: 2,
      mileage: 'mileage :45kmpl',
      title: 'Type: Super bike',
      description: 'Description: Smooth speed, according to previous nose issue is resolved more. Door lock system also improved.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sNYis2dg9tqgq2L3lEkV39hIY7kdf2uYmQ&s'
    },
    {
      id: 3,
      mileage: 'mileage :47 kmpl',
      title: 'Type: Luxurious bike',
      description: 'Description: We know that seating capacity is one of the most crucial things while buying a car and with so many options available.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZXRTE8ik4LfvWB3U2hETvNc84Hzy-XUu7A&s'
    },
  ];
  
  const navigate = useNavigate();
  
  const navi = (id) => {
    if (id === 2) { // Check if it's the 5 seater car
      navigate("/superbike"); // Navigate to the specific page
    } 
    else if (id == 1) {
      navigate("/normalbikeinfor"); // Default navigation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    }
    else { 
      navigate("/luxuriousbike");
    }
  }
    
  

  return (
    <div className="card-container">
      {Cardetail.map(card => (
        <div key={card.id} className="card bg-plum">
          <img src={card.imageUrl} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <h2>{card.mileage}</h2>
            <p>{card.description}</p>
            <button className='Click here' onClick={() => navi(card.id)}>Click here</button> {/* Pass card.id to navi */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carinformation;