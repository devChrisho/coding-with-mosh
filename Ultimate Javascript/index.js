// const address = {
//   street: "81",
//   city: "singapore",
//   zipCode: "760874",
// };

// const showAddress = (address) => {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// };

// showAddress(address);

const address = createAddress("81", "singapore", "123456");

console.log(address);

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const helloWorld = () => console.log(`Hello World`);
helloWorld();
