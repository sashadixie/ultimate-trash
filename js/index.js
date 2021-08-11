const XLSX = require('xlsx');
const fs = require('fs')
const workbook = XLSX.readFile('empty.xlsx');
const sheet_name_list = workbook.SheetNames;
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const columnA = Object.keys(worksheet).filter(x => /^A\d+/.test(x)).map(x => worksheet[x].v)
console.log(columnA)
columnA.forEach((element, idx) => {
  const path = `${idx + 1}.png`
  if (fs.existsSync(path)) {
    fs.renameSync(path, `${element}.png`)
  }
});
// console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))