import { render, screen } from '@testing-library/react'
import Container from '.'

describe('Container Component', () => {
  let contentContainer: Element

  beforeEach(() => {
    render(<Container>Lorem</Container>)
  })

  it('Should validate if Container is on screen...', () => {
    expect(screen.getByText(/Lorem/!)).toBeInTheDocument()
  })
})
