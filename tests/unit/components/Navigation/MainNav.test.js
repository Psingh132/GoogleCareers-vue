import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import { describe } from 'vitest'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'
import { RouterLink } from 'vue-router'

describe('MainNav', () => {
  const renderMainNav = () => {
    const $route = {
      name: 'Home'
    }

    render(MainNav, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }
  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Google Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu item for navigation', () => {
    renderMainNav()
    const navigationItems = screen.getAllByRole('listitem')
    const nvigationMenuTexts = navigationItems.map((item) => item.textContent)
    expect(nvigationMenuTexts).toEqual(['Teams', 'Locations', 'Benefits', 'Jobs', 'Students'])
  })

  describe('when the user logged in', () => {
    it('displays user profile', async () => {
      renderMainNav()
      let profileImage = screen.queryByRole('img', {
        name: /User profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /Sign In/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.queryByRole('img', {
        name: /User profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
