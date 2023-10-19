import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roofer - Roofing Services Project',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      <link href="css/font-awesome-all.css" rel="stylesheet"/>
      <link href="css/flaticon.css" rel="stylesheet"/>
      <link href="css/owl.css" rel="stylesheet"/>
      <link href="css/bootstrap.css" rel="stylesheet"/>
      <link href="css/jquery.fancybox.min.css" rel="stylesheet"/>
      <link href="css/animate.css" rel="stylesheet"/>
      <link href="css/color.css" rel="stylesheet"/>
      <link href="css/nice-select.css" rel="stylesheet"/>
      <link href="css/global.css" rel="stylesheet"/>
      <link href="css/style.css" rel="stylesheet"/>
      <link href="css/swiper.min.css" rel="stylesheet"/>
      <link href="css/responsive.css" rel="stylesheet"/>
      
      <body>
        <Header/>
        <MobileMenu/>
        {children}
        <Footer/>
      </body>


    </html>
  )
}
