import type { MouseEvent } from 'react'
import clsx from 'clsx'
import { useState } from 'react'
import CodeWidget from '@components/CodeWidget'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

interface Template {
  id: number
  name: string
  description: string
  html_url: string
  content: string
  language: string
  icon: string
}

interface TerraformWidgetProps {
  templates: [Template]
}


function TerraformWidget(props: TerraformWidgetProps) {
  const { templates } = props

  const [selected, setSelected] = useState<string>(`${templates[0].id}`)

  function changeSelected(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    const id: string | null = e.currentTarget.getAttribute("data-id")
    
    if (id) {
      setSelected(id)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <ul className="grid grid-cols-1 gap-6">
        {templates.map((template) => {
          const active : boolean = selected === `${template.id}`
          const nameSections : string[] = template.name.split("-")

          return (
            <li key={`template_${template.id}`} className={clsx("col-span-1 divide-y rounded-lg shadow bg-white divide-gray-200")}>
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">{nameSections[0]}</h3>
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{nameSections[1]}</span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">{template.description}</p>
                </div>
                <img className="h-10 w-10 flex-shrink-0 rounded-full" src={template.icon} />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a href="#" onClick={changeSelected} data-id={template.id} className={clsx("relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold ", active ? "bg-slate-200" : "bg-transparent text-gray-900")}>
                      <CodeBracketIcon className="h-5 w-5 text-gray-400" />
                      View Code
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a href={template.html_url} target="_blank" className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Open on Github
                    </a>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      {templates.map((template) => <CodeWidget key={`code_widget_${template.id}`} code={template.content} id={template.id} active={selected === `${template.id}`} />)}
    </div>
  )
}

export default TerraformWidget
