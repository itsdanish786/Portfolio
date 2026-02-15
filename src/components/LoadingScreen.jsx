import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING SYSTEM");
  const [terminalLines, setTerminalLines] = useState([]);

  const hackerMessages = [
    "> Establishing secure connection...",
    "> Loading encryption keys...",
    "> Accessing database...",
    "> Compiling assets...",
    "> Initializing neural network...",
    "> Deploying ML models...",
    "> Rendering UI components...",
    "> Optimizing performance...",
    "> System ready. Welcome!",
  ];

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    let messageIndex = 0;

    // Add terminal messages progressively
    const messageTimer = setInterval(() => {
      if (messageIndex < hackerMessages.length) {
        setTerminalLines((prev) => [...prev, hackerMessages[messageIndex]]);
        messageIndex++;
      }
    }, 550);

    const timer = setInterval(() => {
      currentProgress += increment;
      
      // Update loading text based on progress
      if (currentProgress < 20) {
        setLoadingText("INITIALIZING SYSTEM");
      } else if (currentProgress < 40) {
        setLoadingText("LOADING MODULES");
      } else if (currentProgress < 60) {
        setLoadingText("COMPILING DATA");
      } else if (currentProgress < 80) {
        setLoadingText("ESTABLISHING CONNECTION");
      } else if (currentProgress < 95) {
        setLoadingText("FINALIZING");
      } else {
        setLoadingText("ACCESS GRANTED");
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        clearInterval(messageTimer);
        setTimeout(() => {
          onLoadingComplete();
        }, 300);
      }
      setProgress(currentProgress);
    }, interval);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="loading-screen hacker-theme"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Matrix-style background */}
      <div className="matrix-bg">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="matrix-column" style={{ left: `${i * 2}%` }}>
            {Array.from({ length: 20 }, (_, j) => (
              <span key={j} className="matrix-char">
                {String.fromCharCode(33 + Math.random() * 94)}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="loading-content">
        {/* Profile Image with Hacker Effect */}
        <motion.div
          className="hacker-image-wrapper"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="scan-line" />
          <motion.img
            src="/profile.jpg"
            alt="Fahad Danish"
            className="hacker-image"
            animate={{
              filter: [
                "brightness(1) contrast(1)",
                "brightness(1.2) contrast(1.3)",
                "brightness(1) contrast(1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="image-glitch" />
        </motion.div>

        {/* Hacker Title */}
        <motion.div
          className="hacker-title-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="hacker-title">
            <span className="glitch" data-text="FAHAD HUSSAIN DANISH">
              FAHAD HUSSAIN DANISH
            </span>
          </h1>
          <p className="hacker-subtitle">
            <span className="typing-effect">FULL STACK DEVELOPER | ML ENGINEER</span>
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          className="terminal-window"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn red"></span>
              <span className="terminal-btn yellow"></span>
              <span className="terminal-btn green"></span>
            </div>
            <span className="terminal-title">root@portfolio:~$</span>
          </div>
          <div className="terminal-body">
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                className="terminal-line"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line}
              </motion.div>
            ))}
            <div className="terminal-cursor">_</div>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          className="hacker-progress-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="progress-header">
            <span className="progress-label">{loadingText}</span>
            <span className="progress-percentage">{Math.round(progress)}%</span>
          </div>
          
          <div className="hacker-progress-bar">
            <motion.div
              className="hacker-progress-fill"
              style={{ width: `${progress}%` }}
            />
            <div className="progress-grid">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className={`grid-cell ${i < (progress / 5) ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="binary-code">
            {Array.from({ length: 40 }, (_, i) => (
              <span key={i} className="binary-digit">
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Corner Brackets */}
        <div className="corner-bracket top-left" />
        <div className="corner-bracket top-right" />
        <div className="corner-bracket bottom-left" />
        <div className="corner-bracket bottom-right" />
      </div>
    </motion.div>
  );
}
