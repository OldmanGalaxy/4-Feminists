import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExtinctAnimal.css';

const ExtinctAnimal = () => {
  const [animalData, setAnimalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnimalData = () => {
    setLoading(true);
    axios.get('https://extinct-api.herokuapp.com/api/v1/animal/').then(response => {
        if (response.data.status === 'success')
          setAnimalData(response.data.data[0]);
        else
          setError('Failed to fetch animal data');
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAnimalData();
  }, []);

  const handleNewAnimalClick = () => {
    fetchAnimalData();
  };
  

  return (
    <div className="container">
      {loading ? (
        <div className="spinner"></div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        animalData && (
          <div className="card">
            <div className="text-container">
              <h2>{animalData.commonName}</h2>
              <p><strong>Binomial Name:</strong> {animalData.binomialName}</p>
              <p><strong>Location:</strong> {animalData.location}</p>
              <p><strong>Last Record:</strong> {animalData.lastRecord}</p>
              <p>{animalData.shortDesc}</p>
              <a href={animalData.wikiLink} target="_blank" rel="noopener noreferrer" className="link">Learn more</a>
              <button onClick={handleNewAnimalClick} className="button">Find Another</button>
            </div>
            <div className="image-container">
              <div className="image-box">
                <img src={animalData.imageSrc} alt={animalData.commonName} className="image" />
              </div>
              <p className="alt-text">{animalData.commonName}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ExtinctAnimal;