// Defina um tipo para o objeto employee
interface Employee {
  code: number;
  name: string;
}

// Crie uma instância do objeto employee
let employee: Employee = {
  code: 10,
  name: "John"
};

// Agora você pode acessar ads propriedades sem erros
console.log(employee.code);
console.log(employee.name);
