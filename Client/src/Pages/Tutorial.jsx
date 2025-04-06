import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TutorialPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-teal-800 to-blue-600 text-white py-10 px-4 md:px-16">
      <h1 className="text-4xl font-extrabold text-center mb-8">How to Build This Project - Tutorial</h1>

      <p className="text-lg text-center mb-8">
        A special thanks to the YouTube channel <strong>JavaScript Mastery</strong> for helping me build
        this project! The tutorial video will guide you through the process.
      </p>

      <div className="max-w-5xl mx-auto mb-10">
        <iframe
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/Wn_Kb3MR_cU?start=8721"
          title="JavaScript Mastery Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-opacity-80 bg-black rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Instructions</h2>
        <p className="text-lg mb-6">
          You won't face any issues until you reach the deployment step of your Hardhat project. The version of
          Hardhat in the video is outdated. Nowadays, Hardhat uses the Ignition module for deployment. Below is the
          updated code you should use:
        </p>

        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-xl">
          <SyntaxHighlighter language="javascript" style={vs}>
            {`// Add the Ignition module to your Hardhat project
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-ignition');

// Set up your Ignition module
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/YOUR_INFURA_KEY',
      accounts: ['YOUR_PRIVATE_KEY'],
    },
  },
};`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
