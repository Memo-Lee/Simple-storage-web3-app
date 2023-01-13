
# web3-app
I created Ethereum locally using Ganache. An example of a smart contract using ReactJS on the frontend and Truffle on the backend for the project.

<img src=""></img>

## Ganache
Ganache : Ganache bizim için sanal bir Ethereum Blockchain'i yaratır bununla birlikte local ethereum zincirinde adresler açıp bizim yazdığımız kodların testini görmemizi sağlayan bir test ortamıdır.

## Truffle
Truffle, geliştiricilerin Ethereum üzerinde blok zinciri tabanlı Dapps oluşturmasını kolaylaştıran bir araçtır. Geliştiricilerin akıllı sözleşmeler oluşturmasına ve test etmesine ve JavaScript gibi dilleri kullanarak genel ve özel ağlar oluşturmasına olanak tanır.

## ReactJS
React, kullanıcı arayüzü (UI) oluşturmak için kullanılan en popüler JavaScript kütüphanesidir. Web siteleri işlemek için kullanıcı çıktısına harika yanıt sunan bir yöntemi kullanır. Bu aracın bileşenleri Facebook tarafından geliştirilmiştir. 2013'de açık kaynaklı bir JavaScript olarak piyasaya sürülmüştür.

## abi  

/* abi Nedir ?  
Derlenmiş kodun byteların içerisinden o functionları çağırır.Müzenin rehber defteri gibidir.  
Bir contract ile etkileşim kurulacak ise 'abi' ihtiyaç vardır. Compile edilerek elde edilir.*/  

### Commands
`truffle compile`  
`truffle migrate`  

### NOTES  
`npm audit fix` ***Contractaki güvenlik açıklarını gidermemize yarıyor.***

### Libraries  
`npm install @openzeppelin/contracts`  
`npm install truffle-contract`  
