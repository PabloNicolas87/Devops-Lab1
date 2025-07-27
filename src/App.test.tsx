import { render, screen } from '@testing-library/react'
import App from './App'

test('falla a propósito', () => {
  render(<App />)
  expect(screen.getByText(/esto no existe/i)).toBeInTheDocument()
})

