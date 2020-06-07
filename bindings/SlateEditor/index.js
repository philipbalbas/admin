import dynamic from 'next/dynamic'

const SlateEditorNoSSRWrapper = dynamic(
  import('./editor'), { ssr: false, loading: () => <p>Loading ...</p> }
)

export default SlateEditorNoSSRWrapper