import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface MainNavProps {
  pathName: string
  width: string
}

const MainNav: FunctionComponent<MainNavProps> = (props) => {
  const { pathName, width } = props
  const pathname = new URL(pathName).pathname

  const links = [
    { href: '/', text: 'Home' },
    { href: '/blog/', text: 'Blog' },
    { href: '/docs/', text: 'Docs' },
    { href: 'https://status.instellar.app', target: '_blank', text: 'Status' }
  ]

  return (
    <Popover>
      <nav className={`mx-auto flex ${width} items-center justify-between p-6 lg:px-8`} aria-label="Global">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Instellar.app</span>
          <img className="h-8 w-auto" src="/instellar-logo.png" alt="" />
        </a>
        <div className="-mr-2 flex items-center lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-slate-500 focus:outline-none">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => {
            const className = `font-semibold text-sm ${pathname === link.href ? 'text-purple-400 hover:text-purple-400' : 'text-white'}`

            return <a key={link.text} href={link.href} target={link.target} className={className}>
              {link.text}
            </a>
          })}
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-slate-900 border-2 border-slate-800 shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="h-8 w-auto" src="/instellar-logo.png" alt="Instellar logo" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-700/10 p-2 text-gray-400 hover:bg-slate-600/10 focus:outline-none">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {links.map((link) => {
                const className = `block rounded-md px-3 py-2 text-base font-medium ${pathname === link.href ? 'text-purple-400' : 'text-white hover:bg-slate-700/10 hover:text-white'}`

                return <a
                  key={link.text}
                  href={link.href}
                  target={link.target}
                  className={className}
                >
                  {link.text}
                </a>
              })}
            </div>
            <a
              href="#" target="_blank"
              className="block w-full bg-slate-700/10 px-5 py-3 text-center font-medium text-white hover:bg-slate-600/10 hover:text-purple-500"
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MainNav