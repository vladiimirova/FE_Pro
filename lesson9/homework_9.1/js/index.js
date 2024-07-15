let company = {
  sales: [
    {name: 'John', salary: 1000},
    {name: 'Alice', salary: 600}
  ],
  development: {
    web: [
      {name: 'Peter', salary: 2000},
      {name: 'Alex', salary: 1800}
    ],
    internals: [
      {name: 'Jack', salary: 1300}
    ]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    var sum = 0;
    for (var i = 0; i < department.length; i++) {
      sum += department[i].salary;
    }
    return sum;
  } else {
    var sum = 0;
    for (var key in department) {
      if (department.hasOwnProperty(key)) {
        sum += sumSalaries(department[key]);
      }
    }
    return sum;
  }
}

var totalSalary = sumSalaries(company);
console.log(totalSalary);