import type { FunctionComponent } from 'react'

const Hero: FunctionComponent<any> = (props) => {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-5.5rem] dark:pb-32 dark:pt-[5.5rem] dark:lg:mt-[-5.0rem] dark:lg:pt-[5.0rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <img 
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50" 
              src="/docs/blur-cyan.png" width="530" height="530" style={{color: 'transparent'}} />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-purple-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Deploy with confidence.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Deploy anything on your own infrastructure with ease. This documentation will show you how to configure your application to work with instellar.app
              </p>
            </div>
            <div className="relative lg:static xl:pl-10">
              <div className="relative">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero