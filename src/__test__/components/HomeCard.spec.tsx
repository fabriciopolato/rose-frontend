import React from 'react';
import { render, getByAltText } from '@testing-library/react';

import HomeCard from '../../components/HomeCard';

describe('<HomeCard />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <HomeCard image="test.png" title="Title test">
        Paragraph test
      </HomeCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have image, title and paragraph provided by props', () => {
    const { getByText, getByAltText } = render(
      <HomeCard image="test.png" title="Title test">
        Paragraph test
      </HomeCard>
    );

    const paragraphElement = getByText('Paragraph test');
    const headingElement = getByText('Title test');
    const imageElement = getByAltText('Title test');

    expect(paragraphElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test.png');
  });

  it('should be reversed when isReversed is passed as a prop', () => {
    const { getByTestId } = render(
      <HomeCard isReversed image="test.png" title="Title test">
        Paragraph test
      </HomeCard>
    );

    const containerElement = getByTestId('row');

    expect(containerElement).toHaveStyle('flex-direction: row-reverse;');
  });
});
