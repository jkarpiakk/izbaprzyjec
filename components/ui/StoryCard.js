import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import Badge from './Badge'

export default function StoryCard({ story }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gray-200 rounded-full" />
          <div>
            <p className="font-semibold text-primary">{story.author || 'lek. anonimowy'}</p>
            <p className="text-sm text-gray-500">{story.timeAgo}</p>
          </div>
        </div>
        <Menu as="div" className="relative">
          <Menu.Button><DotsVerticalIcon className="h-6 w-6 text-gray-400"/></Menu.Button>
          <Transition>
            <Menu.Items className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg">
              <Menu.Item>{() => <button className="w-full text-left px-4 py-2 hover:bg-accent">Edytuj</button>}</Menu.Item>
              <Menu.Item>{() => <button className="w-full text-left px-4 py-2 hover:bg-accent">Usuń</button>}</Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <p className="text-gray-700">{story.text}</p>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <Badge icon="👍" count={story.upvotes} />
          <Badge icon="💬" count={story.comments} />
        </div>
        <div className="flex items-center space-x-2">
          <Badge label={story.spec} variant="outline" />
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{story.location}</span>
        </div>
      </div>
    </div>
  )
}
