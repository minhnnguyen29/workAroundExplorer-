// imports 
import salaryData from './salaryData.js'; //export default 
import { getDataByRole, getDataByCompany } from './salaryData.js'; //name export 

// return avg salary for each role 
const getAverageSalaryByRole = role => {
  const roleData = getDataByRole(role); //imported module getDataByRole() 
  const salariesOfRole = roleData.map(obj => obj.salary);
  return calculateAverage(salariesOfRole);
}

// return avg salary for each company 
const getAverageSalaryByCompany = company => {
  const companyData = getDataByCompany(company); //imported module getDataByCompany() 
  const salariesAtCompany = companyData.map(obj => obj.salary);
  return calculateAverage(salariesAtCompany);
}

// return the salary paid for a role @ a company 
const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company); //imported module getDataByCompany() 
  const roleAtCompany = companyData.find(obj => obj.role === role);
  return roleAtCompany.salary;
}

// return the avg salary 
const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map(obj => obj.salary);
  return calculateAverage(allSalaries);
}

// Note: Helper Function since it is only used by the functions contained within this module.
function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach(number => total += number);
  return (total / arrayOfNumbers.length).toFixed(2);
}

export { getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary };
