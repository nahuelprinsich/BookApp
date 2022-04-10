/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { BookApi } from '../src/services/book';
import Line from '../src/components/line/Line';

it('renders correctly', () => {
  renderer.create(<Line/>);
});

test('the list of books is equal to 100', async () => {
  const books = await BookApi.searchBooks({name: 'lord', page: 1})

  expect(books.data).toHaveLength(100)
}, 50000);
