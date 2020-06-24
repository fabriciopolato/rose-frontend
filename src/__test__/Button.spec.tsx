import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Button from '../components/Button';

describe('<Button />', () => {
  it('should match previous snapshot', () => {
    const { asFragment } = render(
      <Button
        backgroundColor="#fff"
        textColor="#000"
        backgroundColorOnHover="#000"
        textColorOnHover="#fff"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have colors provided by props', () => {
    const { getByTestId } = render(
      <Button
        backgroundColor="#fff"
        textColor="#000"
        backgroundColorOnHover="#000"
        textColorOnHover="#fff"
      />
    );

    const buttonElement = getByTestId('button');

    expect(buttonElement).toHaveStyle('background-color: #fff');
    expect(buttonElement).toHaveStyle('color: #000');
  });

  it('should have text provided by props', () => {
    const { getByText } = render(
      <Button
        backgroundColor="#fff"
        textColor="#000"
        backgroundColorOnHover="#000"
        textColorOnHover="#fff"
      >
        Button Test
      </Button>
    );

    const buttonElement = getByText('Button Test');

    expect(buttonElement).toBeInTheDocument();
  });
});
