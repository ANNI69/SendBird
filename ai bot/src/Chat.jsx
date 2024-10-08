import { useEffect } from 'react';
import './App.css'
const ChatBot = () => {
  useEffect(() => {
    
    // Function to initialize the chatbot
    const initChatBot = () => {
      const div = document.createElement('div');
      div.id = 'aichatbot';
      document.body.appendChild(div);
      window.chatbotConfig = ['42813D3C-73E0-4B43-AE37-6029A38DFB11', 'onboarding_bot']; // Your Sendbird Chatbot App ID and Bot ID // 647B2075-EA25-4B4B-A235-5D196C5B8209 - For Mahabharata Bot

      const script = document.createElement('script');
      script.defer = true;
      script.type = 'module';
      script.src = 'https://aichatbot.sendbird.com/index.js';
      document.body.appendChild(script);
      const cleanup = initChatBot();
      setTimeout(() => {
        const chatBotDiv = document.getElementById('aichatbot');
        if (chatBotDiv) {
          chatBotDiv.style.position = 'fixed';
          chatBotDiv.style.top = '50%';
          chatBotDiv.style.left = '50%';
          chatBotDiv.style.transform = 'translate(-50%, -50%)';
          chatBotDiv.style.width = '300px'; // Adjust as necessary
          chatBotDiv.style.height = '500px'; // Adjust as necessary
          chatBotDiv.style.zIndex = '1000';
        }
      }, 1000); // Adjust the timeout as needed to ensure it runs after the chatbot is initialized
    
      // Return a cleanup function to remove the script and div when the component unmounts
      return () => {
        document.body.removeChild(script);
        document.body.removeChild(div);
      };
    };

    // Call the function and get the cleanup function
    const cleanup = initChatBot();

    // Cleanup on component unmount
    return cleanup;
  }, []);

  return null; // This component doesn't render anything
};

export default ChatBot;
