import { render, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';


test('ToDo', () => {

  const { getByText, getByLabelText } = render(<App />);
  // after rendering component
  // use DOM APIs (query selector) to make assertions
  //expect(root.querySelector('h2').textContent).toBe('To Do List');
  getByText('To Do List')
  getByLabelText("Add Todo:")
  //getByText("The list is empty.")
});

test('add item to list', () => {

  const { getByText, getByLabelText } = render(<App />);
  const input = getByLabelText('Add Todo:');
  fireEvent.change(input, { target: { value: "wash car" } })
  fireEvent.click(getByText('Add'))
  getByText('wash car')
});

// userEvent expresses intent better
test("user-events allows users to add...", () => {
  const { getByText, getByLabelText } = render(<App />)

  const input = getByLabelText('Add Todo:');
  const button = getByText('Add');

  userEvent.type(input, "Learn spanish");
  userEvent.click(button);

});