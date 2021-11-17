import { render, fireEvent } from "@testing-library/react";
import Game from "./Game";

describe("Game", () => {

  it("renders game headings", () => {
    const { getByText } = render(<Game />);
    getByText("TIC-TAC-LIVEN");
  });

  it("renders board and check for step counter update", () => {
    const { getByText, getByTestId } = render(<Game />);

    // Expect "Current step: 0" to be found
    getByText("Current step: 0");

    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    // Expect "Current step: 1" to be found
    getByText("Current step: 1");
  });

  it("player ❌ is winner", () => {
    const { getByText, getByTestId } = render(<Game />);

    // X | O |  
    // --|---|---
    //   | X | O
    // --|---|---
    //   |   | X

    //Turn player ❌
    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    //Turn player ⭕
    const square1 = getByTestId(`square-1`);
    fireEvent.click(square1);

    //Turn player ❌
    const square4 = getByTestId(`square-4`);
    fireEvent.click(square4);

    //Turn player ⭕
    const square5 = getByTestId(`square-5`);
    fireEvent.click(square5);

    //Turn player ❌
    const square8 = getByTestId(`square-8`);
    fireEvent.click(square8);

    expect(getByText("Winner: ❌")).toBeTruthy();
  });

  it("player ⭕ is winner", () => {
    const { getByText, getByTestId } = render(<Game />);

    // O |   | X 
    // --|---|---
    // O | X | 
    // --|---|---
    // O |   | X

    //Turn player ❌
    const square2 = getByTestId(`square-2`);
    fireEvent.click(square2);

    //Turn player ⭕
    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    //Turn player ❌
    const square4 = getByTestId(`square-4`);
    fireEvent.click(square4);

    //Turn player ⭕
    const square3 = getByTestId(`square-3`);
    fireEvent.click(square3);

    //Turn player ❌
    const square8 = getByTestId(`square-8`);
    fireEvent.click(square8);

    //Turn player ⭕
    const square6 = getByTestId(`square-6`);
    fireEvent.click(square6);

    expect(getByText("Winner: ⭕")).toBeTruthy();
  });

  it("get draw", () => {
    const { getByText, getByTestId } = render(<Game />);

    // O | X | X 
    // --|---|---
    // X | O | O
    // --|---|---
    // 6 | O | X

    //Turn player ❌
    const square2 = getByTestId(`square-2`);
    fireEvent.click(square2);

    //Turn player ⭕
    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    //Turn player ❌
    const square3 = getByTestId(`square-3`);
    fireEvent.click(square3);

    //Turn player ⭕
    const square4 = getByTestId(`square-4`);
    fireEvent.click(square4);

    //Turn player ❌
    const square8 = getByTestId(`square-8`);
    fireEvent.click(square8);

    //Turn player ⭕
    const square5 = getByTestId(`square-5`);
    fireEvent.click(square5);

    //Turn player ❌
    const square1 = getByTestId(`square-1`);
    fireEvent.click(square1);

    //Turn player ⭕
    const square7 = getByTestId(`square-7`);
    fireEvent.click(square7);

    //Turn player ❌
    const square6 = getByTestId(`square-6`);
    fireEvent.click(square6);


    expect(getByText("Draw: Game over")).toBeTruthy();
  });


  it("check for step counter not update on double click on the same block", () => {
    const { getByText, getByTestId } = render(<Game />);

    // First click
    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    // Second click
    const square1 = getByTestId(`square-1`);
    fireEvent.click(square1);

    //Third click
    fireEvent.click(square1);

    // Expect "Current step: 1" to be found
    expect(getByText("Current step: 2")).toBeTruthy();
  });


  it("restart game if any player winner", () => {
    const { getByText, getByTestId } = render(<Game />);

    // X | O |  
    // --|---|---
    //   | X | O
    // --|---|---
    //   |   | X

    //Turn player ❌
    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    //Turn player ⭕
    const square1 = getByTestId(`square-1`);
    fireEvent.click(square1);

    //Turn player ❌
    const square4 = getByTestId(`square-4`);
    fireEvent.click(square4);

    //Turn player ⭕
    const square5 = getByTestId(`square-5`);
    fireEvent.click(square5);

    //Turn player ❌
    const square8 = getByTestId(`square-8`);
    fireEvent.click(square8);

    expect(getByText("Winner: ❌")).toBeTruthy();

    //Restart game
    const restart = getByTestId(`restart`);
    fireEvent.click(restart);

    expect(getByText("Current step: 0")).toBeTruthy();
  });


  it("restart game if get draw", () => {
    const { getByText, getByTestId } = render(<Game />);

    // O | X | X 
    // --|---|---
    // X | O | O
    // --|---|---
    // 6 | O | X

    //Turn player ❌
    const square2 = getByTestId(`square-2`);
    fireEvent.click(square2);

    //Turn player ⭕
    const square5 = getByTestId(`square-5`);
    fireEvent.click(square5);

    //Turn player ❌
    const square3 = getByTestId(`square-3`);
    fireEvent.click(square3);

    //Turn player ⭕
    const square7 = getByTestId(`square-7`);
    fireEvent.click(square7);

    //Turn player ❌
    const square8 = getByTestId(`square-8`);
    fireEvent.click(square8);

    //Turn player ⭕
    const square4 = getByTestId(`square-4`);
    fireEvent.click(square4);

    //Turn player ❌
    const square6 = getByTestId(`square-6`);
    fireEvent.click(square6);

    //Turn player ⭕
    const square0 = getByTestId(`square-0`);
    fireEvent.click(square0);

    //Turn player ❌
    const square1 = getByTestId(`square-1`);
    fireEvent.click(square1);

    expect(getByText("Draw: Game over")).toBeTruthy();

    //Restart game
    const restart = getByTestId(`restart`);
    fireEvent.click(restart);

    expect(getByText("Current step: 0")).toBeTruthy();
  });
});
