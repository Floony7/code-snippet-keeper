"use client";

import * as actions from '@/actions';
import { useFormState } from 'react-dom';

export default function CreateSnippetPage() {
const [formState, action] = useFormState(actions.createSnippet, { message: ''});

  return (
    <form action={action}>
        <h3 className="font-bold m-3">Create Snippet</h3>
        <div className="flex flex-col gap-4 w-6/12 mx-auto">
            <div className="flex gap-4">
                <label htmlFor="title" className="w-12">Title</label>
                <input name="title" type="text" className="border rounded p-2 w-full text-black" />
            </div>
            <div className="flex gap-4">
                <label htmlFor="code" className="w-12">Code</label>
                <textarea name="code" className="border rounded p-2 w-full text-black" />
            </div>
            {formState.message ? <div className="text-black my-2 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null}
            <button type='submit' className='rounded p-2 bg-teal-300'>Create</button>
        </div>
    </form>
  )
}