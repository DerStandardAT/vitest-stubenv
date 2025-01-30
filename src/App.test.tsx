
import { render } from 'vitest-browser-react';
import { describe, it, vi } from 'vitest';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    vi.stubEnv('VITE_EXAMPLE', 'true');
    render(<App />);
  });
});