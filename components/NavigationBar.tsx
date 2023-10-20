import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();
  
  return (
    <>
    <nav className="main-menu navbar-expand-md navbar-light">
        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
            <ul className="navigation clearfix">
                <li><Link href="/" passHref>Home</Link></li>
                <li><Link href="/aboutus" passHref>About Us</Link></li>
                <li><Link href="/projects" passHref>Projects</Link></li>
                <li><Link href="/services" passHref>Services</Link></li>
                <li><Link href="/pricing" passHref>Pricing</Link></li>
                <li><Link href="/faq" passHref>FAQ</Link></li>
                <li><Link href="/contactus" passHref>Contact Us</Link></li>
            </ul>
        </div>
    </nav>
    </>
  )
}
