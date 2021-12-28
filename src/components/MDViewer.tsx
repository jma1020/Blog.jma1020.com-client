import { marked } from 'marked'

interface MDViewerProps {
    title: string;
    contents: string;
}

export const MDViewer = ({title, contents}:MDViewerProps) => {
    return (
        <div>
        <div dangerouslySetInnerHTML={
            { __html: marked(contents)}
        } />
        </div>
    )
}