import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import Link from 'next/link'

import { ActiveLink } from '../ActiveLink'

export function Header () {
    


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <Link href='/'>
                <a>
                <img src="/logo.svg" alt="logo ignews" />
                </a>
            </Link>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                    <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                    <a>posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}