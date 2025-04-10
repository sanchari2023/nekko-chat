import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ create navigate

  const handleLogin = () => {
    if (username && password) {
      // Simulate login success
      localStorage.setItem('loggedIn', 'true'); // ✅ so PrivateRoute allows access
      navigate('/dashboard'); // ✅ navigate to dashboard
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div style={styles.body}>
      <style>
        {`
          input {
            font-size: 16px;
            padding: 10px;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 4px;
          }

          input:focus {
            outline: none;
            border-color: #4A90E2;
            box-shadow: 0 0 3px #4A90E2;
          }

          button {
            width: 100%;
            padding: 12px;
            background-color:rgb(9, 159, 229);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          button:hover {
            background-color:rgb(196, 8, 111);
          }
        `}
      </style>

      <div style={styles.card}>
        <h1 style={styles.title}>Nekko</h1>

        <div style={styles.field}>
          <label style={styles.label}>User Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },

  card: {
    width: '100%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 8,
    
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 28,
    color: '#000',
  },
  field: {
    marginBottom: 20,
  },
  label: {
    display: 'block',
    marginBottom: 6,
    fontWeight: 500,
  },
};
