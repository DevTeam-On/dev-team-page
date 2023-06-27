import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header Component', () => {
  it('Should if header items are rederized...', () => {
    render(<Header data-testid="1" />)
    expect(screen.getAllByText(/Início/i)).toContainHTML
    expect(screen.getAllByText(/Serviços/i)).toContainHTML
    expect(screen.getAllByText(/Sobre Nós/i)).toContainHTML
    expect(screen.getAllByText(/Contato/i)).toContainHTML
    expect(screen.getAllByText(/Nossos projetos/i)).toContainHTML
  })
})
