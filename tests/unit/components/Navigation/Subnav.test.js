import { render, screen } from '@testing-library/vue'
import Subnav from '@/components/Navigation/Subnav.vue'

describe('Subnav', () => {
  const renderTheSubnav = (routeName) => {
    render(Subnav, {
      global: {
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  describe('when the user is on jobs page', () => {
    it('displays jobs count', () => {
      const routeName = 'JobResults'
      renderTheSubnav(routeName)
      const jobCount = screen.getByText('1653')
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      const routeName = 'Home'
      renderTheSubnav(routeName)

      const jobCount = screen.queryByText('1653')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
