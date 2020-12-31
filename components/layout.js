import Alert from './alert'
import Header from './header'
import Footer from './footer'


export default function Layout({ children }) {
  return (
    <>
        <Alert />
        <Header />
        <main aria-label="Main content">{children}</main>
        <Footer />
    </>
  )
}