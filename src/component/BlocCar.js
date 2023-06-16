import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import CarInformation from '../component/CarInformation';
import {useNavigate} from 'react-router-dom';
import { CarContext } from '../static/CarContext';

function App() {
  const [voitures, setVoitures] = useState([]);
  const { setCarId } = useContext(CarContext);
  const history = useNavigate();

  useEffect(() => {
    const fetchVoitures = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/voitures');
        setVoitures(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des voitures :', error);
      }
    };

    fetchVoitures();
  }, []);

  function handleCarClick(carId) {
    setCarId(carId);
    history('/cars/'+carId)
  }

  return (
      <div className='container-car'>
        {voitures.map(voiture => (
          <div className="bloc-car" key={voiture._id} onClick={() => handleCarClick(voiture._id)}>
            <div className="img-car">
              <img src={voiture.photo} alt={voiture.modele} width="100%" />
            </div>
            <div className="description-car">
              <h3>{voiture.marque}</h3>
              <p>{voiture.modele}</p>
              <p>{voiture.caracteristique.carburant}</p>
              <p>{voiture.caracteristique.boite_vitesse}</p>
            </div>
          </div>
        ))}<div></div><div></div><div></div>
      </div>
  );
}

export default App;