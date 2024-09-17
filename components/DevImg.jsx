import Image from 'next/image'
import React from 'react'

const DevImg = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} sizes="true"   fill priority alt='Developer image' />
        </div>
    )
}

export default DevImg