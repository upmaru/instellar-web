import type { FunctionComponent, MouseEvent } from 'react'
import { useState } from 'react'
import CodeWidget from '@components/CodeWidget'

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
      <div className="grid grid-cols-1 gap-6">
        {templates.map((template) => {
          return (
            <div key={`template_${template.id}`} className="relative flex items-center space-x-3 rounded-lg border border-slate-700 bg-slate-800 px-6 py-5 shadow-sm hover:border-slate-600">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={template.icon} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <a href='#' onClick={changeSelected} data-id={template.id} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  <p className="text-sm font-medium text-white">{template.name}</p>
                  <p className="truncate text-sm text-slate-500">{template.description}</p>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      {templates.map((template) => <CodeWidget key={`code_widget_${template.id}`} code={template.content} id={template.id} active={selected === `${template.id}`} />)}
    </div>
  )
}

export default TerraformWidget
