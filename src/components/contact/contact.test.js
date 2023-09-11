import userEvent from '@testing-library/user-event';
import Contact from '.';
import {render, screen, waitFor} from '@testing-library/react';

test('renders title', () => {
  render(<Contact />);
  const title = screen.getByTestId('contactid');
  expect(title).toBeInTheDocument();
});

test('should chane input value when user type', async () => {
  render(<Contact />);
  const textInput = screen.getByTestId('input-email');
  await userEvent.type(textInput, 'john.doe@gmail.com');
  await waitFor(() => expect(textInput).toHaveValue('john.doe@gmail.com'));
});
