import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Hoş geldiniz! Size nasıl yardımcı olabilirim?',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    message: 'Teşekkür ederim! Size nasıl yardımcı olabilirim?',
    trigger: '1',
  },
];

const ChatBotComponent = () => {
  return (
    <ChatBot
      steps={steps}
      floating
      opened
      headerTitle="ChatGPT"
      botAvatar="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/250px-ChatGPT_logo.svg.png" 
    />
  );
};


export default ChatBotComponent;
