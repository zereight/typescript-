const name2 = "kjh",
  age = 10,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Name ${name}, Age: ${age}, Gender: ${gender}`);
};

sayHi(name2, age, gender);
