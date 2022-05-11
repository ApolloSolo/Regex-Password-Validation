let password = "MyPass"

let isAlsoValid = password.match(/[A-Za-z0-9!?@#$%^&*()\-+\\\/.,:;"'{}\[\]<>~]{8,}/);

console.log(`${password} is ${isAlsoValid ? "valid." : "invalid."}`);