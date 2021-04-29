import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('should render with the marker in correct place', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Nova Iguaçu',
      slug: 'novaiguacu',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Belford Roxo',
      slug: 'belfordroxo',
      location: {
        latitude: 125,
        longitude: -52
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/nova iguaçu/i)).toBeInTheDocument()
    expect(screen.getByTitle(/belford roxo/i)).toBeInTheDocument()
  })
})
