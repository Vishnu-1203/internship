export function divide(num1: string, num2: string): string {
  const result = Number(num2) / Number(num1);
  return String(result);
}

export function subtract(num1: string, num2: string): string {
  const result = Number(num2) - Number(num1);
  return String(result);
}

export function add(num1: string, num2: string): string {
  const result = Number(num1) + Number(num2);
  return String(result);
}

export function multiply(num1: string, num2: string): string {
  const result = Number(num1) * Number(num2);
  return String(result);
}
