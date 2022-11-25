import Logo from './logo'
export function Header() {
  return (
    <header>
      <div className="mx-auto max-w-5xl py-6 px-4 text-center sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <Logo />
      </div>
    </header>
  )
}

export default Header
