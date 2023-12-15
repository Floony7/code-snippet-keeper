import { notFound } from 'next/navigation'
import Link from 'next/link';
import { db } from '@/app/db'

interface SnippetShowProps {
    params: { id: string }
};
 
export default async function ShowSnippetPage(props: SnippetShowProps) {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    if (!snippet) {
        return <NotFound id={id} />
    }
return (
    <section className="w-8/12 mx-auto">
        <div className="flex flex-col m-4 justify-between items-center">
        <h1 className="txt-xl font-bold">{snippet.title ?? 'Not Found'}</h1>
        <div className="flex gap-4 p-4">
            <Link href={`/snippets/${snippet.id}/edit`} className="text-center p-2 border rounded w-36">Edit</Link>
            <button className="p-2 border rounded w-36">Delete</button>
        </div>
       <pre className="p-3 border rounded bg-gray-200 border-gray-200 text-teal-600 min-w-fit">
            <code>{snippet.code}</code>
       </pre>
        </div>
    </section>
)
}

function NotFound(props: {id: number}) {
    return (
        <h4>Could not find snippet with Id: {props.id}</h4>
    )
}