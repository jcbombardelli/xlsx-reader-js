const XLSX = require('xlsx');
const workbook = XLSX.readFile('file.xlsx', { sheetRows: 2 });


const workSheet = workbook.Sheets[workbook.SheetNames[0]]
console.log(XLSX.utils.sheet_to_json(workSheet, { header: 1, defval: null, blankrows: true }))

