import Head from 'next/head';
import { useState } from 'react';
import ChatGPT from '../components/ChatGPT';
import { chatGPT } from '../lib/chatGPT';

const Home: React.FC = () => {
  const [response, setResponse] = useState('');

  const handleSendMessage = async (message: string) => {
    try {
      const gptResponse = await chatGPT(message);
      setResponse(gptResponse);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Nextypewind ChatGPT Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to the Nextypewind ChatGPT Demo
        </h1>
        <ChatGPT onSubmit={handleSendMessage} />
       

