import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showEndConfirmation, setShowEndConfirmation] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Welcome to Nekko! I'm your virtual assistant. I'm here to help you. How can I assist you today?",
      time: getCurrentTime(),
      date: getCurrentDate(),
    }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const currentTime = getCurrentTime();
    const currentDate = getCurrentDate();

    const userMsg = {
      sender: "user",
      text: input,
      time: currentTime,
      date: currentDate,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post("http://20.51.212.97:5000/chat", {
        user_query: input,
      });

      const botReply = {
        sender: "bot",
        text: res.data.reply,
        time: getCurrentTime(),
        date: getCurrentDate(),
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      const errorMsg = {
        sender: "bot",
        text: "Sorry! Something went wrong.",
        time: getCurrentTime(),
        date: getCurrentDate(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  const handleMenuClick = (action) => {
    if (action === "delete") {
      setMessages([]);
      setShowMenu(false);
    } else if (action === "end") {
      setShowEndConfirmation(true);
      setShowMenu(false);
    }
  };

  if (!isOpen) {
    return (
      <>
        <div
          className="closed-chat"
          style={{
            height: "100vh",
            backgroundImage: `url("/back-chat.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "24px",
              textAlign: "center",
              paddingTop: "20%",
              textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            Chat has ended. Thank you!
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
  onClick={() => {
    setIsOpen(true);
    setMessages([
      {
        sender: "bot",
        text: "Welcome to Nekko! I'm your virtual assistant. I'm here to help you. How can I assist you today?",
        time: getCurrentTime(),
        date: getCurrentDate(),
      }
    ]);
  }}
  style={{
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    backgroundColor: "#4ade80",
    border: "none",
    color: "white",
    cursor: "pointer",
  }}
>
  Start New Chat
</button>

          </div>
        </div>
      </>
    );
  }
  

  return (
    <div className="chat-area">
      <div className="chat-header">
        <div className="left-section">
          <img src="/bot-avatar.png" alt="Bot" className="avatar" />
          <div className="info">
            <div className="name">Nekko</div>
            <div className="status">
              <span className="green-dot" /> Online
            </div>
          </div>
        </div>
        <div className="right-section">
          <button onClick={() => setShowMenu(!showMenu)}>⋮</button>
          <button onClick={() => setIsOpen(false)}>⨉</button>


          {showMenu && (
            <div className="dropdown-menu">
              <button onClick={() => handleMenuClick("delete")}>
                Delete conversation
              </button>
              <button onClick={() => handleMenuClick("end")}>End chat</button>
              <button onClick={() => setShowMenu(false)}>Close menu</button>
            </div>
          )}

          {showEndConfirmation && (
            <div className="confirmation-box">
              <p>Are you sure you want to end the chat?</p>
              <div className="confirmation-buttons">
                <button
                  className="end-btn"
                  onClick={() => {
                    setMessages([]);
                    setIsOpen(false);
                    setShowEndConfirmation(false);
                  }}
                >
                  End Chat
                </button>
                <button
                  className="continue-btn"
                  onClick={() => setShowEndConfirmation(false)}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="chat-body">
  {messages.reduce((acc, msg, idx, arr) => {
    const showDateHeader = idx === 0 || msg.date !== arr[idx - 1].date;

    if (showDateHeader) {
      acc.push(
        <div key={`date-${idx}`} className="date-header">
          {msg.date}
        </div>
      );
    }

    acc.push(
      <div key={idx} className={`message-row ${msg.sender}`}>
        {msg.sender === "bot" && (
          <img src="/bot-avatar.png" alt="Bot" className="avatar" />
        )}
        <div className="bubble">
          <div className="text">{msg.text}</div>
          <div className="time">{msg.time}</div>
        </div>
        {msg.sender === "user" && (
          <img src="/user-avatar.png" alt="User" className="avatar" />
        )}
      </div>
    );

    return acc;
  }, [])}
</div>


      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>
          <img src="/arrow.png" alt="Send" />
        </button>
      </div>

      <style>{`
        .chat-area {
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          position: relative;
        }

        .chat-header {
          background: #044b19;
          color: white;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .left-section {
          display: flex;
          align-items: center;
        }

        .right-section {
  position: relative; /* 🔥 Add this line */
}


        .info {
          margin-left: 10px;
        }

        .name {
          font-weight: bold;
        }

        .status {
          font-size: 12px;
          display: flex;
          align-items: center;
        }

        .green-dot {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          margin-right: 5px;
        }

        .right-section button {
          background: transparent;
          border: none;
          color: white;
          font-size: 18px;
          margin-left: 10px;
          cursor: pointer;
        }

        .dropdown-menu {
  background: white;
  color: black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  font-family: "Segoe UI", "Calibri", sans-serif;
  top: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.dropdown-menu button {
  border: none;
  padding: 8px;
  color: black; /* <-- Fixed this line */
  cursor: pointer;
  text-align: left;
  background: none;
}

.dropdown-menu button:hover {
  background-color:rgb(182, 228, 15);
}

       .confirmation-box {
            position: absolute;
            top: 110px;
            right: 20px;
            background: #fff;
            border: 1px solid #ccc;
            padding: 16px;
            border-radius: 10px;
            width: 220px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            z-index: 999;
            text-align: center;
          }

        .confirmation-box p {
            margin-bottom: 12px;
            font-size: 14px;
            font-weight: bold;
            color: #333;
          }

          .confirmation-buttons {
            display: flex;
            justify-content: space-between;
          }

       .confirmation-buttons .end-btn {
            background-color: #dc3545;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .confirmation-buttons .continue-btn {
            background-color: #28a745;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }


        .chat-body {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
        }

        .chat-input {
          display: flex;
          padding: 10px;
          border-top: 1px solid #eee;
        }

        .chat-input input {
          flex: 1;
          padding: 10px;
          border: 1px solid green;
          border-radius: 20px;
        }

        .chat-input button {
          background: none;
          border: none;
          margin-left: 8px;
        }

        .chat-input img {
          width: 24px;
          height: 24px;
        }

        .message-row {
          display: flex;
          align-items: flex-end;
          margin: 10px 0;
        }

        .message-row.user {
          justify-content: flex-end;
        }

        .message-row.bot {
          justify-content: flex-start;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin: 0 8px;
        }

        .bubble {
  padding: 12px 16px;
  background:rgb(209, 210, 214);
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.message-row.user .bubble {
  background: #d1fae5;
}

        .text {
          font-size: 14px;
        }

        .time {
          font-size: 10px;
          text-align: right;
          color: black;
        }
          .date-header {
  text-align: center;
  font-size: 12px;
  color: #666;
  margin: 15px 0 5px;
  font-weight: 600;
}

      `}</style>
    </div>
  );
};

export default Chat;
