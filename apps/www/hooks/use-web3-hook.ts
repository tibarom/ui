// import { useCallback, useEffect, useState } from 'react';
// import Web3 from 'web3';

// export function useWeb3() {
//   const [web3, setWeb3] = useState<Web3 | null>(null);
//   const [account, setAccount] = useState<string>('');

//   useEffect(() => {
//     const loadWeb3 = async () => {
//       if (window.ethereum) {
//         const web3Instance = new Web3(window.ethereum);
//         setWeb3(web3Instance);
//         const accounts = await web3Instance.eth.requestAccounts();
//         setAccount(accounts[0]);
//       } else {
//         console.error("Please install MetaMask!");
//       }
//     };

//     loadWeb3();
//   }, []);

//   const createInscription = useCallback(async (ipfsHash: string, quantity: string) => {
//     if (!web3) {
//       console.error('Web3 is not initialized');
//       return;
//     }

//     const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // 스마트 계약 주소 설정 필요
//     const contractABI = [] // 스마트 계약 ABI 설정 필요
//     const contract = new web3.eth.Contract(contractABI, contractAddress);

//     const data = {
//       p: "dogesoundclub",
//       op: "deploy",
//       tick: ipfsHash,
//       max: quantity,
//       lim: "1"
//     };

//     try {
//       const transactionParameters = {
//         to: contractAddress, 
//         from: account, 
//         data: contract.methods.createInscription(data).encodeABI()
//       };

//       // 트랜잭션 전송
//       const txHash = await window.ethereum.request({
//         method: 'eth_sendTransaction',
//         params: [transactionParameters],
//       });

//       console.log('Transaction Hash:', txHash);
//     } catch (error) {
//       console.error('Transaction failed:', error);
//     }
//   }, [web3, account]);

//   return { createInscription };
// }

