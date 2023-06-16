import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { CarContext } from '../static/CarContext';

function CarInformation(props) {
  const {carId} = useContext(CarContext);
  const [carInformation, setCarInformation] = useState(null);

  useEffect(() => {
    const fetchCarInformation = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/voitures/${carId}`);
        setCarInformation(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de la voiture :', error);
      }
    };

    fetchCarInformation();
  }, [carId]);

  if (!carInformation) {
    return <div>{carId}</div>;
  }

  return (
    <div>
      <p>{carId}</p>
      {/* Utilisez les informations de la voiture ici */}
      <h1>{carInformation.marque} {carInformation.modele}</h1>
      <div className="caroussel-car">
        <img src={carInformation.photo} alt={carInformation.modele} />
      </div>
      <div className="box-carac">
        <div className="carac">
          <h3>Informations de la voiture</h3>
          <p><strong>Numéro de référence: </strong>{carInformation.reference}</p>
          <p><strong>Marque: </strong>{carInformation.marque}</p>
          <p><strong>Modèle: </strong>{carInformation.modele}</p>
          <p><strong>Type: </strong>{carInformation.type}</p>
          <p><strong>Année: </strong>{carInformation.annee}</p>
          <p><strong>Prix: </strong>{carInformation.prix} €</p>
          <p><strong>Couleur: </strong>{carInformation.couleur}</p>
          <p><strong>Carburant: </strong>{carInformation.caracteristique.carburant}</p>
          <p><strong>Boite de vitesse: </strong>{carInformation.caracteristique.boite_vitesse}</p>
          <p><strong>Nombre de portes: </strong>{carInformation.caracteristique.nombre_portes}</p>
          <p><strong>Nombre de places: </strong>{carInformation.caracteristique.nombre_places}</p>
          <p><strong>Puissance fiscale: </strong>{carInformation.caracteristique.puissance_fiscale} cv</p>
          <p><strong>Puissance DIN: </strong>{carInformation.caracteristique.puissance_din} cv</p>
          <p><strong>Vitesse maximale: </strong>{carInformation.caracteristique.vitesse_maximale} km/h</p>
          <p><strong>Acceleration: </strong>{carInformation.caracteristique.acceleration} s/100km</p>
          <p><strong>Consommation (mixte): </strong>{carInformation.caracteristique.consommation} L/100km</p>
        </div>
      </div>
      <div className="desc-car">
        <p>{carInformation.description}</p>
      </div>
    </div>
  );
  
}

export default CarInformation;