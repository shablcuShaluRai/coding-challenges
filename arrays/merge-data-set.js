const dataset1 = [
  { tableName: 'table1', rowCount1: 12 },
  { tableName: 'table2', rowCount1: 15 },
  { tableName: 'table3', rowCount1: 18 }
];

const dataset2 = [
  { tableName: 'table1', rowCount2: 12 },
  { tableName: 'table6', rowCount2: 15 },
  { tableName: 'table3', rowCount2: 10 }
];


// output:
//  [
//   { tableName: 'table2', rowCount1: 15, rowCount2: null },
//   { tableName: 'table3', rowCount1: 18, rowCount2: 10 },
//   { tableName: 'table6', rowCount1: null, rowCount2: 15 }
// ]

// if rowCount1 and rowCount are same for same table name then don't store

function getDataSet() {
const combinedData = [...dataset1, ...dataset2]

const result = {}

combinedData.forEach(ar => {
  if(!result[ar.tableName]) {
      result[ar.tableName] = {
          tableName: ar.tableName, 
          rowCount1: null,
          rowCount2: null
          }
  }
  if(ar.rowCount1 !== undefined) {
    result[ar.tableName].rowCount1 = ar.rowCount1
  }
   if(ar.rowCount2 !== undefined) {
    result[ar.tableName].rowCount2 = ar.rowCount2
  }
     if (result[ar.tableName].rowCount1 === result[ar.tableName].rowCount2) {
         delete result[ar.tableName]
  }

})
  return Object.values(result)
}

console.log("result", getDataSet())
