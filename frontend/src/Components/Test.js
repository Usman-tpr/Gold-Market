import React from 'react';
import { useAuth } from '../Context/auth';

const Home = () => {
  const [auth] = useAuth();

  return (
    <div>
      {auth.isExist ? (
        <h1>Welcome, {auth.isExist.name}</h1>
      ) : (
        <h1>Welcome, Guest</h1>
      )}
      <p>Your token: {auth.token}</p>
    </div>
  );
};

export default Home;
