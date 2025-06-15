import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import FilterBar from '../components/ui/FilterBar'
import StoryCard from '../components/ui/StoryCard'
import { useState } from 'react'

export default function Home({ initialStories }) {
  const [filters, setFilters] = useState({ order: 'Najnowsze', spec: 'All' })
  const [stories, setStories] = useState(initialStories)

  function onFilterChange(key, value) {
    setFilters(prev => ({ ...prev, [key]: value }))
    // przefiltruj stories frontendowo lub fetchuj ponownie
  }

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <FilterBar filters={filters} onFilterChange={onFilterChange} />
      <div className="space-y-6">
        {stories.map(story => <StoryCard key={story.id} story={story} />)}
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const q = query(
    collection(db, 'stories'),
    where('approved', '==', true),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)
  const initialStories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return { props: { initialStories } }
}
