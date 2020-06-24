import React from 'react';
import { render } from '@testing-library/react';

import Input from '../../components/Input';

describe('<Input />', () => {
  it('should match previous snapshot', () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have basic input attributes provided by props', () => {
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Placeholder Test" />
    );

    const inputElement = getByPlaceholderText(
      'Placeholder Test'
    ) as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });
});
