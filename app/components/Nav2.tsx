import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { NavLink } from '@remix-run/react'
export default function Nav2() {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarBrand>
        <img src="/file/bitmap.svg" alt="logo" className="w-8 mr-3" />
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Tuấn Anh Lương</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-8" justify="end">
        <NavbarItem>
          <CustomNavLink to="/">Home</CustomNavLink>
        </NavbarItem>
        {/* <NavbarItem>
          <CustomNavLink to="/about">About Me</CustomNavLink>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  )
}

function CustomNavLink({ children, to }: { children: React.ReactNode | string; to: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'text-warning-600 font-bold' : 'hover:text-warning-600'
      }
    >
      {children}
    </NavLink>
  )
}
