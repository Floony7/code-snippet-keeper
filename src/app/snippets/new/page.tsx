import { db } from "@/app/db";
import { redirect } from "next/navigation";

export default function CreateSnippetPage() {
// Server action
async function createSnippet(formData: FormData) {
    "use server"
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
        data: {
            title,
            code
        }
    })
    console.log("SNIPPET ", snippet)
    redirect('/')
}

  return (
    <form action={createSnippet}>
        <h3 className="font-bold m-3">Create Snippet</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label htmlFor="title" className="w-12">Title</label>
                <input name="title" type="text" className="border rounded p-2 w-full" />
            </div>
            <div className="flex gap-4">
                <label htmlFor="code" className="w-12">Code</label>
                <textarea name="code" className="border rounded p-2 w-full" />
            </div>
            <button type='submit' className='rounded p-2 bg-blue-200'>Create</button>
        </div>
    </form>
  )
}