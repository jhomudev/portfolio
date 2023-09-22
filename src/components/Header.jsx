import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as LinkNUI, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import myLogo from './../assets/logo.svg'
import ButtonCV from './ButtonCV'
import ButtonWorkWithMe from './ButtonWorkWithMe'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { MY_GITHUB_PAGES_LINK } from '../utils/contants'

const navbarItems = [
  {
    text: 'Home',
    link: '/home'
  },
  {
    text: 'Proyectos',
    link: '/projects'
  },
  {
    text: 'Contrátame',
    link: '/hire'
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const classDefaultNavbarItem = 'capitalize text-lg font-dosis relative'

  const handleToggleNavBar = () => { setIsMenuOpen(!isMenuOpen) }

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className='bg-transparent'>
      <NavbarContent className='!flex-none w-[min(100%,170px)]'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden text-mylight'
        />
        <NavbarBrand className='flex items-center gap-3'>
          <LinkNUI href={`${MY_GITHUB_PAGES_LINK}/portfolio`} className='w-full'>
            <div className='w-12'>
              <img className='w-full h-full object-fill' src={myLogo} alt='logo jhonan muñoz' />
            </div>
            <p className='w-[min(100%,100px)] font-bold text-inherit text-xl text-mygold font-dosis flex flex-col gap-0 leading-5'><span className='text-myaquamarine'>JHONAN</span> <span className='relative left-1/2'>MUÑOZ</span></p>
          </LinkNUI>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='start'>
        {
          navbarItems.map(item => (
            <NavbarItem key={item.text}>
              <NavLink
                to={item.link}
                color='foreground'
                className={({ isActive }) => `${classDefaultNavbarItem} ${isActive ? 'text-myaquamarine font-semibold after-item-navbar' : 'text-mylight'}`}
              >
                {item.text}
              </NavLink>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify='end' className='hidden sm:flex'>
        <NavbarItem>
          <ButtonWorkWithMe />
        </NavbarItem>
        <NavbarItem>
          <ButtonCV />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='bg-transparent'>
        {
          navbarItems.map(item => (
            <NavbarMenuItem key={item.text} className='mt-[3vh]' onClick={handleToggleNavBar}>
              <NavLink to={item.link} color='foreground' className={({ isActive }) => `${classDefaultNavbarItem} ${isActive ? 'text-myaquamarine font-semibold' : 'text-mylight'}`}>
                {item.text}
              </NavLink>
            </NavbarMenuItem>
          ))
        }
        <NavbarMenuItem className='mt-[3vh]'>
          <ButtonWorkWithMe onPress={handleToggleNavBar} className='w-full' />
        </NavbarMenuItem>
        <NavbarMenuItem className='mt-[1vh]'>
          <ButtonCV className='w-full' />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
export default Header
