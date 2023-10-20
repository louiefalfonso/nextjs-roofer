import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <div>Navigation</div>
  )
}
