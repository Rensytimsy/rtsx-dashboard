// React Imports
"use client"
import { useTheme } from 'next-themes'
import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  const {theme} = useTheme();
  console.log(theme);
  return (
    <div className=''>
      <img src={`${theme !== "dark" ? "/images/logos/rmb-rtstudio-logo.png" : "/images/logos/rmb-rtstudio-logo-dark.png"}`}/>
    </div>
  )
}

export default Logo
