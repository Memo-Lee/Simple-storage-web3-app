const truffleContract = require('truffle-contract');
// contractımızın byte code, json file, abi tanımlaması 
const storageContract = require('../build/contracts/SimpleStorage.json');

const web3provider = 'http://127.0.0.1:7545';

const storage = truffleContract(storageContract);
storage.setProvider(web3provider); //contratımız web3provider ile etkileşim kuruyor.

contract('SimpleStorage', (accounts) => { //accounts, ganache hesapları
    let storageInstance;
    const owner = accounts[0] //owner
    //const owner = accounts[1] //user
    
    before(async () => { // deployed() ile func atama 
        storageInstance = await storage.deployed(); //storageInstance await
    });

    it('should set and get a value', async () => {
        const settingValue = 32;
        await storageInstance.set(settingValue, { from:owner }) // {from:owner} kimin adıyla çağırılacak ise
        
        const storedValue = await storageInstance.get();
        assert.equal(settingValue, storedValue, 'Set ile get değerleri eşit olmalı'); 
        // assert.equal(true,true,'text') -> console.log() işlevi görüyor.
    });
});