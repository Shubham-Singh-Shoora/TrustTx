import React from 'react';
import { AiOutlineDownload, AiOutlineCheck, AiOutlineWallet, AiOutlineChrome } from 'react-icons/ai';
import { SiEthereum, SiFirefox, SiBrave } from 'react-icons/si';
import { FiSettings } from 'react-icons/fi';
import metamaskDownload from '../assets/wallet/metamask-download.png';
import metamaskCreate from '../assets/wallet/metamask-create.png';
import metamaskNetwork from '../assets/wallet/metamask-network.png';
import metamaskSettings from '../assets/wallet/metamask-settings.png';
// Import a default logo for fallback
import logo from '../../images/logo.png'; // Adjust path as needed

const WalletGuide = () => {
    const steps = [
        {
            title: 'Download and Install MetaMask',
            content: 'MetaMask is a cryptocurrency wallet available as a browser extension that allows you to interact with the Ethereum blockchain. Download it from the official website or your browser\'s extension store.',
            icon: <AiOutlineDownload fontSize={30} className="text-white" />,
            image: metamaskDownload
        },
        {
            title: 'Create or Import a Wallet',
            content: 'After installation, you can create a new wallet or import an existing one using your seed phrase. Make sure to store your seed phrase securely as it\'s the key to recovering your wallet.',
            icon: <AiOutlineWallet fontSize={30} className="text-white" />,
            image: metamaskCreate
        },
        {
            title: 'Connect to Ethereum Network',
            content: 'MetaMask connects to Ethereum Mainnet by default. You can switch to other networks like testnets (Rinkeby, Goerli) or custom networks in the network dropdown menu at the top of the extension.',
            icon: <SiEthereum fontSize={30} className="text-white" />,
            image: metamaskNetwork
        },
        {
            title: 'Configure Settings (Optional)',
            content: 'You can customize gas fees, transaction speed, and other settings in MetaMask for better control over your transactions.',
            icon: <FiSettings fontSize={30} className="text-white" />,
            image: metamaskSettings
        }
    ];

    return (
        <div className="flex w-full flex-col justify-center items-center gradient-bg-welcome min-h-screen">
            <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4">
                <h1 className="text-3xl sm:text-5xl text-white text-gradient py-2">
                    Wallet Setup Guide
                </h1>
                <p className="text-center mt-5 text-white font-light md:w-9/12 w-11/12 text-base mb-10">
                    To interact with TrustTx, you'll need a cryptocurrency wallet. We recommend using MetaMask, a secure browser extension wallet.
                </p>

                <div className="grid md:grid-cols-3 grid-cols-3 gap-8 my-8">
                    <div className="flex flex-col items-center">
                        <AiOutlineChrome fontSize={40} className="text-white mb-2" />
                        <p className="text-white">Chrome</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiFirefox fontSize={40} className="text-white mb-2" />
                        <p className="text-white">Firefox</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiBrave fontSize={40} className="text-white mb-2" />
                        <p className="text-white">Brave</p>
                    </div>
                </div>

                <a
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] px-8 py-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                    <AiOutlineDownload className="text-white mr-2" />
                    <p className="text-white text-base font-semibold">
                        Download MetaMask
                    </p>
                </a>

                <div className="mt-10 w-full">
                    {steps.map((step, index) => (
                        <div key={index} className="mb-12 white-glassmorphism p-6 rounded-2xl">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#2952e3] flex justify-center items-center mr-4">
                                    {step.icon}
                                </div>
                                <h2 className="text-xl text-white font-bold">{step.title}</h2>
                            </div>
                            <p className="text-white mb-6">{step.content}</p>
                            <div className="w-full h-60 overflow-hidden rounded-lg">
                                <img
                                    src={step.image} // Use the imported image directly
                                    alt={step.title}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = logo; // Use imported logo as fallback
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl text-white mt-10 mb-6">Video Tutorial</h2>

                <div className="w-full md:w-4/5 aspect-video">
                    <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/gr4plWF9lYw"
                        title="How to Setup and Use MetaMask"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                <div className="mt-10 p-6 blue-glassmorphism rounded-2xl w-full md:w-4/5">
                    <h3 className="text-white text-xl mb-4 font-semibold">Additional Resources</h3>
                    <ul className="list-disc list-inside text-white">
                        <li className="mb-2">
                            <a
                                href="https://metamask.io/faqs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                MetaMask FAQs
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="https://community.metamask.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                MetaMask Community
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="https://ethereum.org/en/wallets/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                Learn About Other Ethereum Wallets
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WalletGuide;