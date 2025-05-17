import { findByText, fireEvent, render } from '@testing-library/react';
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
        description: 'Great for quick refresh',
        image: '/test.jpg',
        details: mockDetails,
        alt:'test',
        isOpen: false,
        onToggle: vi.fn(),
    }

    it('renders title, price, and button correctly', () => {
        const { getByText, getByRole } = render(<ServiceItem {...props} />);
        expect(getByText('Basic Package')).toBeInTheDocument();
        expect(getByText('120')).toBeInTheDocument();
        expect(getByRole('button')).toHaveTextContent('More');
    });

    it('calls onToggle when button is clicked', () => {
        const {getByRole} = render(<ServiceItem {...props} />);
        fireEvent.click(getByRole('button'));
        expect(props.onToggle).toHaveBeenCalledTimes(1);
    });

    it('renders content when isOpen is true', () => {
        const {queryByText} = render(<ServiceItem {...props} isOpen={false} />);
        const desc = queryByText(/great for quick refresh/i);
        expect(desc).not.toBeInTheDocument();
    });

    it('render description, image, and details  when isOpen is true', () => {
        const {getByRole, getByText} = render(<ServiceItem {...props} isOpen={true} />);

        expect(getByRole('img')).toHaveAttribute('src', '/test.jpg');
        expect(getByText('Includes')).toBeInTheDocument();
        expect(getByText('Wash')).toBeInTheDocument();
        expect(getByText('Duration 2 hours')).toBeInTheDocument();
    });

});