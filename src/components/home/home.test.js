import Home from '.';
import {render, screen} from '@testing-library/react';
import withMarkup from '../../utils/helper';

test('renders title', () => {
  render(<Home />);
  const title = screen.getByTestId('hometestid');
  expect(title).toBeInTheDocument();
});
