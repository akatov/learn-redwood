import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>AboutPage</h1>
        <p>
          Find me in <code>./web/src/pages/AboutPage/AboutPage.tsx</code>
        </p>
        <p>
          My default route is named <code>about</code>, link to me with `
          <Link to={routes.about()}>About</Link>`
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </>
  )
}

export default AboutPage
