import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Chatbot.css";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am your admission assistant. Ask me anything.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userAvatar] = useState("/student.png");
  const [botAvatar] = useState("/chatbot.jpg");
  const messagesEndRef = useRef(null);

  // Toggle chatbox visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsMinimized(false);
    }
  };

  // Toggle minimize/expand
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isMinimized]);

  // Get live suggestions from backend
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (input.trim().length < 2) return setSuggestions([]);
      try {
        const res = await axios.get(
          `http://localhost:3000/api/chatbot/suggestions?query=${encodeURIComponent(
            input
          )}`
        );
        setSuggestions(res.data.suggestions || []);
      } catch (error) {
        console.error("Suggestion error:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [input]);

  // Send user message and get bot response
  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMsg = {
      sender: "user",
      text: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setSuggestions([]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await axios.post("http://localhost:3000/api/chatbot/chat", {
        message: messageText,
      });

      // Simulate typing delay for more natural interaction
      setTimeout(() => {
        const botMsg = {
          sender: "bot",
          text: res.data.response || "Sorry, I didn't understand that.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong. Please try again later.",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }
  };

  const handleSend = () => sendMessage(input);
  const handleSuggestionClick = (text) => sendMessage(text);
  const handleKeyDown = (e) => e.key === "Enter" && handleSend();

  // Format time for messages
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      {/* Floating Icon with notification badge */}
      <div className="chatbot-toggle" onClick={toggleChat}>
        <img src="/chat.png" alt="Chatbot" className="chatbot-icon" />
        {!isOpen && messages.length > 1 && (
          <span className="notification-badge">{messages.length - 1}</span>
        )}
      </div>

      {isOpen && (
        <div className={`chatbot-box ${isMinimized ? "minimized" : ""}`}>
          <div className="chatbot-header">
            <div className="header-content">
              <img src={botAvatar} alt="Bot" className="header-avatar" />
              <div className="header-text">
                <span className="header-title">Admission Assistant</span>
                <span className="header-status">
                  {isTyping ? "Typing..." : "Online"}
                </span>
              </div>
            </div>
            <div className="header-actions">
              <button className="icon-btn" onClick={toggleMinimize}>
                {isMinimized ? (
                  <i className="expand-icon">↑</i>
                ) : (
                  <i className="minimize-icon">↓</i>
                )}
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chatbot-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`message-container ${msg.sender}`}>
                    <img
                      src={msg.sender === "bot" ? botAvatar : userAvatar}
                      alt={msg.sender}
                      className="message-avatar"
                    />
                    <div className={`message ${msg.sender}`}>
                      <div className="message-text">{msg.text}</div>
                      <div className="message-time">
                        {formatTime(msg.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="message-container bot">
                    <img src={botAvatar} alt="bot" className="message-avatar" />
                    <div className="message bot">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {suggestions.length > 0 && (
                <div className="suggestion-bubbles">
                  {suggestions.slice(0, 4).map((sug, i) => (
                    <span
                      key={i}
                      className="suggestion-bubble"
                      onClick={() => handleSuggestionClick(sug)}
                    >
                      {sug}
                    </span>
                  ))}
                </div>
              )}

              <div className="chatbot-input">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="send-btn"
                >
                  <i className="send-icon">→</i>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
