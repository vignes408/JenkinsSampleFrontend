import { render, screen } from '@testing-library/react';
import ViewArt from '../ViewArt';

jest.mock('axios');
jest.mock('react-router-dom');

test('renders heading', () => {
    render(<ViewArt />);
    const linkElement = screen.getByText(/Online Art Gallery/i);
    expect(linkElement).toBeInTheDocument();
  });