import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>✨ Welcome to Nekko Chatbot ✨</h1>
      <p style={styles.subtext}>
        Your intelligent assistant is here to help you with all your queries.
        Feel free to explore, chat, and experience seamless conversations powered by Nekko.
      </p>
      <p style={styles.tip}>
        👉 Start chatting by clicking the <strong>Chat</strong> tab!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    color: '#4b0082',
    fontFamily: 'Segoe UI, sans-serif',
    background: 'linear-gradient(to right, #f3e6ff, #f9f5ff)',
    height: '100%',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  subtext: {
    fontSize: '18px',
    marginBottom: '15px',
    maxWidth: '600px',
    margin: 'auto',
  },
  tip: {
    fontSize: '16px',
    fontStyle: 'italic',
    marginTop: '30px',
  }
};

export default Dashboard;
