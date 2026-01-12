import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { FirstStepApp } from "./FirstStep";
import { render, screen } from "@testing-library/react";
import { ItemCounter } from "./shopping-cart/ItemCounter";


const mockItemCounter = vi.fn( (props: unknown) => {
  return <div data-testid="item-counter"/>
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props)
}));

describe('FirstStep', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });


  test('should match snapshot', () => {
    const { container } = render(<FirstStepApp/>);
    expect(container).toMatchSnapshot();

    //screen.debug();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepApp/>);
    
    const itemCounterComponents = screen.getAllByTestId('item-counter');

    expect(itemCounterComponents.length).toBe(3);

    //screen.debug();
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepApp/>);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2", quantity: 2
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller", quantity: 3
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Smash", quantity: 5
    });
  });
});