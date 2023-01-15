import './App.css';
// useState değişken atama {} içerisindeki nesneye ulaşmak.
import React,{useState} from 'react'
import Web3 from 'web3'
import {simpleStorageAbi} from './abis'

function App() {
  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); //web3'e ganache localhost verilir.
  const contractAddr = '0xA60296Ad334133F8ddD18Cf996EBB3EB0bA01CAa'; //contract addresi
  const simpleContract = new web3.eth.Contract(simpleStorageAbi,contractAddr); //abi oluşturuyoruz.
  const [number,setNumber] = useState(0);
  const [getNumber,setGetNumber] = useState('0x00');

  const handleGet = async (e) => { // blockchainden veri okuma
    e.preventDefault();
    const result = await simpleContract.methods.get().call(); // abi ile alakalı methodlardan get'i çağır. call veri alırken
    setGetNumber(result);
    console.log(result);
  }
  const handleSet = async (e) => { // blockchaine veri yazma
    e.preventDefault();
    const accounts = await window.ethereum.enable(); // window düz js kodu değişkenini almak için.
    const account = accounts[0]; // owner
    const gas = await simpleContract.methods.set(number)
    .estimateGas(); // estimateGas() -> gazı tahmin etmek için 
    
    const result = await simpleContract.methods.set(number).send(
        { 
          // json formatında veri dönderiyoruz.
          from:account,
          gas
        }
      ) // send veri gönderirken
        console.log(result);
  }

  return (
    <div className="App">
        <header className='App-header'>
          <form onSubmit={handleSet}>
              <label>
                Set number
                <input type={'text'} name={'name'} value={number} onChange={e => setNumber(e.target.value)}/>
              </label>
              <input type={'submit'} value={'Set Number'}/>
          </form>
          <br/>
          <button onClick={handleGet} type={'button'}>
            Get Number
          </button>
          {getNumber}
        </header>
    </div>
  );
}

export default App;
