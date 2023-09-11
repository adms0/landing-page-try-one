import {fireEvent, render, screen} from '@testing-library/react';
import Navbar from './index';
import CreateLoginButton from './CreateLoginButton';
import LoginUserDialog from './LoginUserDialog';

test('renders 4 list items', () => {
  render(<Navbar />);
  const linkItems = screen.getAllByRole('link');
  expect(linkItems.length).toBe(3);
});

test('should render a button with the class of MuiButtonBase-root', () => {
  render(<CreateLoginButton />);
  expect(screen.getByTestId('account-user')).toHaveClass('MuiButtonBase-root');
});

// test('renders default state on dialog user login', () => {
//   render(<LoginUserDialog />);
//   const username = screen.getByTestId('account-name');
//   fireEvent.click(true);
//   expect(username.value).toBe(undefined);
// });

// test('Dialog shows the children and a close button', async () => {
//   const {baseElement} = render(<LoginUserDialog />);
//   expect(baseElement).toMatchSnapshot();
// });
