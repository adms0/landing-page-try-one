import Pricing from '.';
import {render, screen} from '@testing-library/react';
import withMarkup from '../../utils/helper';

test('renders paragraph', () => {
  const {getByText} = render(<Pricing />);
  const getByTextWithMarkup = withMarkup(getByText);
  getByTextWithMarkup('Pricing');
});

test('renders items price', () => {
  const itemList = [
    {
      title: 'BASIC',
      items: [
        {id: 1, text: 'Mencatat barang masuk'},
        {id: 2, text: 'Mencatat barang keluar'},
        {id: 3, text: 'Mencatat hasil keuntungan'},
      ],
    },
    {
      title: 'BUSINESS',
      items: [
        {id: 1, text: 'Mencatat barang masuk dan keluar'},
        {id: 2, text: 'Mencatat Keuntungan'},
        {id: 3, text: 'Dapat menganalisa hasil penjualan dengan CHART'},
        {id: 4, text: 'Support 7x24 Jam'},
      ],
    },
    {
      title: 'ENTREPRENEUR',
      items: [
        {id: 1, text: 'Mencatat barang masuk dan keluar'},
        {id: 2, text: 'Mencatat Keuntungan'},
        {id: 3, text: 'Dapat menganalisa hasil penjualan dengan CHART'},
        {id: 4, text: 'Support 7x24 Jam'},
        {id: 5, text: 'Export data ke Excel'},
        {id: 6, text: 'AI Prediksi penghasilan'},
      ],
    },
  ];
  render(<Pricing />);
  const itemListName = itemList.map((e) => e.items?.map((el) => el?.text));
  expect(screen.getAllByTestId('listitem').map((li) => li.textContent)).toEqual(
    itemListName.flat()
  );
});
