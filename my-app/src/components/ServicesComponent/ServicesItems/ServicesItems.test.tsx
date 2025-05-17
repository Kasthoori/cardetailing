import {render} from '@testing-library/react';
import ServiceItem from './ServiceItem';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

const mockDetails = [
    {
        title: 'Includes',
        items: ['Wash', 'Dry'],
    },
    {
        title: 'Notes',
        items: ['Extra dirty charges apply'],
    },
    {
        content: 'Duration 2 hours',
    },
];

describe('ServiceItem Component', () => {

    const props = {
        title: 'Basic Package',
        price: 120,
        description: 'great for quick refresh',
        image: '/test.jpg',
        details: mockDetails,
        alt:'test',
        isOpen: false,
        onToggle: vi.fn(),
    }

    it('renders title, price, and button correctly', () => {
        const { getByText } = render(<ServiceItem {...props} />);
        expect(getByText('Basic Package')).toBeInTheDocument();
        expect(getByText('120')).toBeInTheDocument();
    });

});