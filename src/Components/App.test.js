import { render, fireEvent, getByText } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { wait } from '@testing-library/user-event/dist/utils';
import App from './App';
import { api } from './api';

jest.mock('./MockComponent', () => () => (<div>Hello, World!</div>));

const mockCreateItem = (api.createItem = jest.fn());

test('ToDo', () => {

  const { getByText, getByLabelText } = render(<App />);
  // after rendering component
  // use DOM APIs (query selector) to make assertions
  //expect(root.querySelector('h2').textContent).toBe('To Do List');
  getByText('To Do List')
  getByLabelText("Add Todo:")
  //getByText("The list is empty.")
});

// Before adding API - 
// test('add item to list', () => {

//   const { getByText, getByLabelText } = render(<App />);
//   const input = getByLabelText('Add Todo:');
//   fireEvent.change(input, { target: { value: "wash car" } })
//   fireEvent.click(getByText('Add'))
//   getByText('wash car')
// });

test('add item to list', async () => {
  const todoText = "Learn Spanish";
  mockCreateItem.mockResolvedValueOnce(todoText);
  const { getByText, getByLabelText } = render(<App />)

  const input = getByLabelText('Add Todo:');
  fireEvent.change(input, { target: { value: "wash car" } })
  fireEvent.click(getByText('Add'))

  await wait(() => getByText('wash car'));
  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(expect.stringContaining('wash car'))
})

// userEvent expresses intent better
// test("user-events allows users to add...", () => {
//   const { getByText, getByLabelText } = render(<App />)

//   const input = getByLabelText('Add Todo:');
//   const button = getByText('Add');

//   userEvent.type(input, "Learn spanish");
//   userEvent.click(button);
// });

test("trying out mock component", () => {
  const { getByText, getByLabelText } = render(<App />)
  getByText('Hello, World!')
})

