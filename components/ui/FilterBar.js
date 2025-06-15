import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

function Select({ label, options, value, onChange }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative inline-block text-left">
        <Listbox.Button className="px-4 py-2 bg-white border border-gray-300 rounded-lg inline-flex justify-between w-44">
          {value || label} <ChevronDownIcon className="h-5 w-5" />
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map(opt => (
            <Listbox.Option key={opt} value={opt} className="px-4 py-2 hover:bg-accent cursor-pointer">
              {opt}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3 p-6 bg-bg">
      <Select label="Sortuj według" options={['Najnowsze','Najlepsze']} value={filters.order} onChange={v => onFilterChange('order', v)} />
      <Select label="Specjalizacja" options={['All','Kardiologia','Orthopedia']} value={filters.spec} onChange={v => onFilterChange('spec', v)} />
      {/* Dodaj kolejne: Miejsce, Relacja */}
    </div>
  )
}
