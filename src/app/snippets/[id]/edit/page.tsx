import { db } from "@/app/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface EditPageProps {
    params: {
        id: string;
    }
}
export default async function SnippetEditPage(props: EditPageProps) {
    const id = parseInt(props.params.id)
const snippet = await db.snippet.findFirst({where: { id }});

if (!snippet) {
    return notFound();
}
    return (
        <div className="container w-8/12 mx-auto mt-10">
            <SnippetEditForm snippet={snippet} />
        </div>
    )
}