import { describe, test, expect } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Test Item";
    render(<ItemCounter name={name} />);

    expect(screen.getByText(name)).toBeDefined();
  });

  test("should render with given quantity", () => {
    const name = "Test Item";
    const quantity = 5;
    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", () => {
    const name = "Test Item";
    const quantity = 2;
    render(<ItemCounter name={name} quantity={quantity} />);

    const [buttonAdd] = screen.getAllByRole("button");
    
    fireEvent.click(buttonAdd);

    expect(screen.getByText(quantity + 1)).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    const name = "Test Item";
    const quantity = 5;
    render(<ItemCounter name={name} quantity={quantity} />); 

    const [, buttonSubAdd] = screen.getAllByRole("button");
    
    fireEvent.click(buttonSubAdd);

    expect(screen.getByText(quantity - 1)).toBeDefined();
  });

  test("should decrease count when -1 button is pressed and quantity is 1", () => {
    const name = "Test Item";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />); 

    const [, buttonSubAdd] = screen.getAllByRole("button");
    
    fireEvent.click(buttonSubAdd);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should show to red when count is 1', () => {
    const name = "Test Item";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('red');
  });

   test('should show black when count is not 1', () => {
    const name = "Test Item";
    const quantity = 2;
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe('black');
  });

   test('should change color when press click on add and substract, count in 1 init', () => {
    const name = "Test Item";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);
    const [buttonAdd, buttonSubAdd] = screen.getAllByRole("button");

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe('red');
    
    fireEvent.click(buttonAdd);
    expect(itemText.style.color).toBe('black');

    fireEvent.click(buttonSubAdd);
    expect(itemText.style.color).toBe('red');
  });
});
