import type { FunctionComponent } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface MainNavProps {
  pathName: string
  width: string
  docsLinks: []
}

const MainNav: FunctionComponent<MainNavProps> = (props) => {
  const { pathName, width } = props
  const pathname = new URL(pathName).pathname

  const links = [
    { href: '/', text: 'Home' },
    { href: '/pricing/yearly/', text: 'Pricing'},
    { href: '/docs/getting-started/', text: 'Docs', subLinks: props.docsLinks },
    { href: '/blog/', text: 'Blog' },
  ]

  return (
    <Popover>
      <nav className={`mx-auto flex ${width} items-center justify-between p-6 lg:px-8`} aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex gap-5 items-center">
            <span className="sr-only">Instellar.app</span>
            <img className="h-8 w-auto" src="/instellar-logo.png" alt="instellar.app" />
            <span className="font-medium text-xl tracking-tight text-slate-200">instellar.app</span>
          </a>
        </div>
        <div className="-mr-2 flex items-center lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:text-slate-500 focus:outline-none">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => {
            const className = `font-semibold text-sm ${pathname === link.href ? 'text-purple-400 hover:text-purple-400' : 'text-white'}`

            return <a key={link.text} href={link.href} className={className}>
              {link.text}
            </a>
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://opsmaru.com/auth/users/log_in" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">Sign In</a>
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
          className="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition lg:hidden"
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

                return <span key={link.text}><a
                  key={link.text}
                  href={link.href}
                  target={link.target}
                  className={className}
                >
                  {link.text}
                </a>
                {link.subLinks ? <ul className="space-y-9 ml-6 my-2">
                  {link.subLinks.map((section: {title: string, links: [{id: number, title: string, href: string}]}) => (
                    <li key={section.title}>
                      <h2 className="font-display font-medium text-slate-900 dark:text-white">
                        {section.title}
                      </h2>  
                      <ul
                        role="list"
                        className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                      >
                        {section.links.sort((a, b) => a.id - b.id).map((link: {href: string, title: string}) => (
                          <li key={link.title} className="relative">
                            <a
                              href={link.href}
                              className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full ${props.pathName.includes(link.href) ? 'font-semibold text-purple-400 before:bg-purple-400' : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'}`}
                              >
                                {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul> : null}
              </span>
              })}
            </div>
            <a
              href="https://opsmaru.com/auth/users/log_in" target="_blank"
              className="block w-full bg-slate-700/10 px-5 py-3 text-center font-medium text-white hover:bg-slate-600/10 hover:text-purple-500"
            >
              Sign in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MainNav