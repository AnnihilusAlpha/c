type employee = {
    id : number;
    salary : number;
    rating : 5 | 10;
}

const employees : employee[] = [
    { id: 1, salary: 50000, rating: 5 },
    { id: 2, salary: 60000, rating: 10 },
    { id: 3, salary: 70000, rating: 5 },
]

const getBonusSalary = (emp: employee): number => {
    let bonus =  emp.rating === 10 ? 0.2 : 0.1;
    return emp.salary + (emp.salary * bonus);
};

employees.forEach(emp => {
    console.log(getBonusSalary(emp));
});