import { render } from '@testing-library/react';
import { TodoContextProvider } from '../components/TodoContext';

test('renders without crashing', () => {
  const { container } = render(
    <TodoContextProvider>
      <div />
    </TodoContextProvider>
  );
  expect(container).toBeInTheDocument();
});
