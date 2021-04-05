// Required Data
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// Code Implementation
const calculateSalesTax = function(salesData, taxRates) {
  // Implement your code here
  let taxObj = {};
  
  for (const index in companySalesData) {
    // calculate total sales and total tax of each object in array
    let salesProv = companySalesData[index].sales.reduce((a,b) => a + b, 0);
    let taxProv = salesProv * salesTaxRates[companySalesData[index].province];

    // filling out final object
    if (companySalesData[index].name in taxObj) {
      // if key exists, add to current key.value
      // the object here is the supposed to update but it doesnt???
      taxObj[companySalesData[index].name].totalSales += salesProv;
      taxObj[companySalesData[index].name].totalTax += taxProv;
    }

    
    if (!(companySalesData[index].name in taxObj)) {
      // if key doesnt exist, fill out final object
      taxObj[companySalesData[index].name] = {
        totalSales: salesProv, //filler sales total
        totalTax: taxProv // filler tax total
      };
    }


  }
  
  console.log(taxObj);
  return taxObj;
};

// Test Results:
const results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300,
    totalTax; 144
  },
  Bombardier: {
    totalSales: 800,
    totalTax: 40
  }
}

*/