import AboutUs from '.';
import {render, screen} from '@testing-library/react';
import withMarkup from '../../utils/helper';
import {images} from '../../images';

test('renders title', () => {
  render(<AboutUs />);
  const title = screen.getByTestId('aboutusid');
  expect(title).toBeInTheDocument();
});

test('renders paragraph', () => {
  const {getByText} = render(<AboutUs />);
  const getByTextWithMarkup = withMarkup(getByText);
  getByTextWithMarkup('About');
});

test('alt and src contains correct value', () => {
  render(<AboutUs />);
  const testImage = screen.getByRole('img');
  expect(testImage).toHaveAttribute('src', images.aboutUsImage);
  expect(testImage).toHaveAttribute('alt', 'about-us');
});
