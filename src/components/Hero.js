import React from 'react'
export default function Hero({ children, hero }) {
    console.log("===children, hero===",children, hero)
    return <header className={hero}>{children}</header>
}

Hero.defaultProps = { hero: "defaultHero" }
