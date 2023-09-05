import React from 'react'
import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className = {classes.logo}>
      <Link href='/'>NextEvents</Link>
      </div>

      <nav>
        <ul>
            <li>
                <Link href='/events'>Browse all Events</Link>
            </li>
        </ul>
      </nav>

    </header>
  )
}
