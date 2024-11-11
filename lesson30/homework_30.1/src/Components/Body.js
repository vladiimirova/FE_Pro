import React, { useEffect } from 'react';
import Input from './Input';
import useStore from '../Store/Store.js';
import Footer from './Footer.js';

function Body() {
  const { id, character, loading, error, setId, setCharacter, setError } = useStore();

  useEffect(function () {
    if (!id) return;

    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Failed to fetch character');
        }
        return response.json();
      })
      .then(function (data) {
        setCharacter(data);
      })
      .catch(function (err) {
        setError(err);
      });
  }, [id, setCharacter, setError]);

  function handleSubmit(inputId) {
    setId(inputId);
  }

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error.message}</div>;
  }

  return (
    <div>
      <Input onSubmit={handleSubmit} />
      <div className="container mx-auto mt-5">
        <div className="flex justify-center mt-4">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-blue-500 text-white p-4 rounded-t-lg font-bold text-xl">Character Information</div>
              <div className="p-6">
                <h5 className="text-2xl font-semibold mb-4">Name: {character?.name}</h5>
                <ul className="space-y-2">
                  <li>
                    <strong>Height:</strong> {character?.height} cm
                  </li>
                  <li>
                    <strong>Mass:</strong> {character?.mass} kg
                  </li>
                  <li>
                    <strong>Hair Color:</strong> {character?.hair_color}
                  </li>
                  <li>
                    <strong>Skin Color:</strong> {character?.skin_color}
                  </li>
                  <li>
                    <strong>Eye Color:</strong> {character?.eye_color}
                  </li>
                  <li>
                    <strong>Birth Year:</strong> {character?.birth_year}
                  </li>
                  <li>
                    <strong>Gender:</strong> {character?.gender}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Body;