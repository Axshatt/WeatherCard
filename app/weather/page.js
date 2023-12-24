import React from 'react'
import Card from '@/app/components/card'
import Image from 'next/image'
import background from '@/app/Assets/background.jpg'

function page() {
  return (
    <div>

<Image className="z-[-1]"src={background} alt="image" layout='fill' objectFit='cover'/>

        <Card/>
      
    </div>
  )
}

export default page
