import React from 'react'
import './Banner.css'

interface BannerProps {
    srcImage: string
    altImage?: string // ao passar o "?" estamos dizendo que este valor pode ser OPICIONAL o proprio typeScript entenderá que ele é um NULL
}

const Banner = ({ altImage, srcImage } : BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={srcImage} alt={altImage}/>
        </header>
    )
}

export default Banner


