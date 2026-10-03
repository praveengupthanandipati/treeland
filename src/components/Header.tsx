import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from './Icons'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/site'

type NavItem = {
  label: string
  path: string
  children?: { label: string; path: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  {
    label: 'Open Plots',
    path: '/open-plots',
    children: [
      { label: 'Residential Plots', path: '/open-plots/residential' },
      { label: 'Commercial Plots', path: '/open-plots/commercial' },
      { label: 'Villa Plots', path: '/open-plots/villa' },
      { label: 'Farm Lands', path: '/open-plots/farm-lands' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News & Updates', path: '/news' },
  { label: 'Contact Us', path: '/contact' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the off-canvas menu is open; close on Escape
  useEffect(() => {
    document.body.classList.toggle('offcanvas-open', menuOpen)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('offcanvas-open')
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  // Close the desktop dropdown on outside click
  useEffect(() => {
    if (!openDropdown || menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [openDropdown, menuOpen])

  const toggleDropdown = (label: string) =>
    setOpenDropdown((current) => (current === label ? null : label))

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-container site-header__inner">
        <Logo />

        <nav
          ref={navRef}
          id="primary-navigation"
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
          onClick={(e) => {
            // Close menus after any link inside the nav is clicked
            if ((e.target as HTMLElement).closest('a')) closeMenu()
          }}
        >
          <div className="main-nav__head">
            <Logo onClick={closeMenu} />
            <button type="button" className="main-nav__close" aria-label="Close menu" onClick={closeMenu}>
              <CloseIcon />
            </button>
          </div>

          <ul className="main-nav__list">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className={`main-nav__item has-dropdown${openDropdown === item.label ? ' is-open' : ''}`}
                >
                  <div className="main-nav__parent">
                    <NavLink to={item.path} className="main-nav__link">
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="main-nav__toggle"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openDropdown === item.label}
                      aria-controls={`submenu-${item.path.slice(1)}`}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <ChevronDownIcon />
                    </button>
                  </div>
                  <ul id={`submenu-${item.path.slice(1)}`} className="main-nav__dropdown">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <NavLink to={child.path} className="main-nav__dropdown-link">
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label} className="main-nav__item">
                  <NavLink to={item.path} end={item.path === '/'} className="main-nav__link">
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <div className="main-nav__footer">
            <a href={PHONE_HREF} className="btn-call btn-call--block">
              <PhoneIcon />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </nav>

        <div className="site-header__actions">
          <a href={PHONE_HREF} className="btn-call" aria-label={`Call us at ${PHONE_DISPLAY}`}>
            <PhoneIcon />
            <span className="btn-call__text">{PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div
        className={`offcanvas-backdrop-overlay${menuOpen ? ' is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  )
}

export default Header
