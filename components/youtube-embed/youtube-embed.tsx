export function YoutubeEmbed({ videoId }: { videoId: string }) {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
        />
    )
}