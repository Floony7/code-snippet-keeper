import { db } from '@/app/db'
import Link from 'next/link';

export default async function Home() {
const snippets = await db.snippet.findMany()
const renderedSnippets = snippets.map(snippet => {
  return (
    <Link 
    key={snippet.id}
    href={`/snippets/${snippet.id}`}
    className="flex p-2 rounded border-2 justify-between"
    >
      {snippet.title}
      <div>View</div>
    </Link>
  )
});

  return (
    <main className="min-h-screen">
      <section className="container mx-auto w-8/12">
      <header>Snippet Cache</header>
      <div className='flex flex-col gap-2 w-4/12 mx-auto'>
      {renderedSnippets}
      </div>
      </section>
    </main>
  )
}
