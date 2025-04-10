import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <img src="/bot-avatar.png" alt="Bot Avatar" style={styles.avatar} />
      <h1 style={styles.heading}>About Nekko Chatbot</h1>
      <p style={styles.text}>
        Nekko is a smart, friendly, and responsive chatbot designed to make your life easier.
        Whether you need help, information, or just a quick chat, Nekko is here 24/7 to assist you.
      </p>
      <p style={styles.text}>
        Built with cutting-edge AI technology, Nekko understands your needs and delivers fast, accurate responses — all in real-time.
      </p>
      <p style={styles.highlight}>
        💬 Fast • 🤝 Friendly • 📈 Efficient
      </p>
      <p style={styles.footer}>
        Thank you for using Nekko — your digital conversation companion!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#3d0066',
    background: 'linear-gradient(to right, #ffe6ff, #f0e6ff)',
    minHeight: '100%',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    marginBottom: '15px',
    maxWidth: '700px',
    margin: 'auto',
  },
  highlight: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#7a00cc',
    marginTop: '25px',
  },
  footer: {
    marginTop: '30px',
    fontStyle: 'italic',
    color: '#660066',
  },
};

export default About;
