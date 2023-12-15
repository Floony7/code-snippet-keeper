'use server'

import { db } from "@/app/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
    const snippet = await db.snippet.update({
        where: { id },
        data: { code }
    })
    redirect(`/snippets/${id}`)
}