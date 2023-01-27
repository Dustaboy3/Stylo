import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CustomButton from '../../../components/atoms/button';
import { PhoneIcon, BellIcon } from '@chakra-ui/icons';

describe('CustomButton component', () => {
    it('should render the correct color scheme, size and variant', () => {
        const { getByTestId } = render(
            <CustomButton
                color="cyan"
                size="lg"
                variant="ghost"
            />
        );
        const button = getByTestId('custom-button');
        expect(button).toHaveStyle(`background: var(--chakra - colors - cyan - 400)`);
        expect(button).toHaveStyle(`height: var(--chakra-sizes-12);`);
        expect(button).toHaveStyle(`font-size: var(--chakra-fontSizes-lg);`);
        expect(button).toHaveStyle(`background: var(--chakra-colors-transparent);`);
    });
    it('should render the correct content', () => {
        const { getByTestId } = render(
            <CustomButton
                color="cyan"
                size="lg"
                variant="ghost"
                content="Submit"
            />
        );
        const button = getByTestId('custom-button');
        expect(button).toHaveTextContent("Submit");
    });
    it('should render the correct left and right icon', () => {
        const { getByTestId } = render(
            <CustomButton
                color="cyan"
                size="lg"
                variant="ghost"
                content="Submit"
                licon={<PhoneIcon />}
                rIcon={<BellIcon />}
            />
        );
        const button = getByTestId('custom-button');
        expect(button.childElementCount).toBe(1);
    });
});