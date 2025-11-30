const arr = [{name: "abc"}, {name: "abc"}, { name: "def"}]


function getUniqueObj(arr) {
  const result = []
  arr.forEach(element => {
      if(!result.find(rs => rs.name === element.name)) {
        result.push(element)
      }
  });
  return result
}

console.log("uniqueArr", getUniqueObj(arr))




