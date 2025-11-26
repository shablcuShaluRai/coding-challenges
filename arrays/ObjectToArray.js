const person = {
  name: "Hello",
  age: 30
};

function getObjectToArray(obj) {
  const keys = Object.keys(obj);
  return keys.map((key) => [key, obj[key]]);
}

console.log("person", getObjectToArray(person));
