const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage); // (a,b) b constructor add
};
/* abi Nedir ? 
Derlenmiş kodun byteların içerisinden o functionları çağırır.
Müzenin rehber defteri gibidir.
Bir contract ile etkileşim kurulacak ise 'abi' ihtiyaç vardır.
Compile edilerek elde edilir.
*/
