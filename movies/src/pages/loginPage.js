import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseApp'; 
import { useNavigate } from 'react-router-dom';
import '../css/loginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate('/'); // Redirect to home page after login
    } catch (error) {
      console.error(error.message);
      // Handle errors here, such as displaying a notification to the user
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate('/'); // Redirect to home page after registration
    } catch (error) {
      console.error(error.message);
      // Handle errors here, such as displaying a notification to the user
    }
  };

  return (
    <div className="login-container">
      <h2>Login / Sign Up</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Login</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default LoginPage;