import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import myLogo from './../assets/logo.svg'
import ButtonCV from './ButtonCV'
import ButtonWorkWithMe from './ButtonWorkWithMe'
const Header = () => {
  return (
    <Navbar shouldHideOnScroll className='bg-transparent'>
      <div className='container flex items-center mx-auto'>
        <NavbarBrand className='flex items-center gap-3'>
          <Link href='/'>
            <div className='w-10'>
              <img className='w-full h-full object-fill' src={myLogo} alt='logo jhonan muñoz' />
            </div>
            <p className='font-bold text-inherit text-xl text-mygold font-dosis flex flex-col gap-0 leading-5'><span className='text-myaquamarine'>JHONAN</span> <span className='relative left-1/2'>MUÑOZ</span></p>
          </Link>
        </NavbarBrand>
        {/* <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#' aria-current='page'>
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarContent justify='end' className='hidden sm:flex'>
          <NavbarItem>
            <ButtonWorkWithMe />
          </NavbarItem>
          <NavbarItem>
            <ButtonCV />
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  )
}
export default Header
