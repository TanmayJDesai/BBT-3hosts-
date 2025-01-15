import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setCurrentUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in (based on localStorage or state)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // If user is logged in, route them directly to the dashboard
      navigate('/host-dashboard');
    }

    // Load the Google Sign-In library
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: '487890811685-rkd921mqp7t8qdqh7ogkvsfih9d4cfvj.apps.googleusercontent.com',
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        {
          theme: 'outline',
          size: 'large',
        }
      );
    };
  }, [navigate]);

  const handleGoogleResponse = (response) => {
    console.log('Encoded JWT ID token:', response.credential);

    // Verify token and fetch user details from the server or decode directly
    fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: response.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert('Login successful!');
          // Set user details in the state and store them in localStorage
          setCurrentUser({ email: data.user.email, role: 'host' });
          localStorage.setItem('user', JSON.stringify(data.user));

          // Redirect to /host-dashboard after successful login
          navigate('localhost8000/host-dashboard');
        } else {
          alert('Google Sign-In failed.');
        }
      })
      .catch((error) => console.error('Error during Google Sign-In:', error));
  };

  return (
    <div>
      <h2>Log In Using Google</h2>
      <div id="google-signin-button"></div>
    </div>
  );
}

export default Login;
