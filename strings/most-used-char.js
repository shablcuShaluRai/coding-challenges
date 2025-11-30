
const fullName = "Shalu Kumari"

function getMostUsedChar(str) {
  const obj = {}
  for(let i=0; i < str.length; i++) {
     if(!obj[str[i]]) {
      obj[str[i]] = 1
     } else {
      obj[str[i]] += 1
     }
  }
   let max = 1, maxChar = ""
   Object.keys(obj).map(el => {
     if(obj[el] > max) {
        max = obj[el]
        maxChar = el
     }
  })
  return maxChar
}

console.log(getMostUsedChar(fullName))