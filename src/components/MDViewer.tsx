import { marked } from 'marked'

interface MDViewerProps {
    Title: string;
    author: string;
    Contents: string;
}

export const MDViewer = ({Title, author,Contents}:MDViewerProps) => {
    return (
        <article>
            <h1>{Title}</h1>
            <h2>{author}</h2>
            <section dangerouslySetInnerHTML={
            { __html: marked(Contents)}
        } />
        </article>
    )
}