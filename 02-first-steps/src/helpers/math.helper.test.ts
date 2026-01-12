import { describe, expect, test } from "vitest";
import { add, divide, multiply, substract } from "./math.helper";

describe("Add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("Substract", () => {
  test("Should add two negative numbers", () => {
    // ! 1. Arrange
    const a = -1;
    const b = -2;

    // ! 2. Act
    const result = substract(a, b);

    // ! 3.Assert
    expect(result).toBe(a - b);
  });

  test("Should add two negative numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 1;

    // ! 2. Act
    const result = substract(a, b);

    // ! 3.Assert
    expect(result).toBe(a - b);
  });
});

describe("Multiply", () => {
  test("Should multiply negative number and positive number", () => {
    // ! 1. Arrange
    const a = 5;
    const b = -1;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3.Assert
    expect(result).toBe(a * b);
  });

  test("Should multiply by 0", () => {
    // ! 1. Arrange
    const a = 10;
    const b = 0;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3.Assert
    expect(result).toBe(0);
  });
});

describe("divide", () => {
  test("Should divide two positive numbers", () => {
    // ! 1. Arrange
    const a = 10;
    const b = 2;

    // ! 2. Act
    const result = divide(a, b);

    // ! 3.Assert
    expect(result).toBe(a / b);
  });
});
