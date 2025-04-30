// components/DecorativeBackground.tsx

type BlobProps = {
  top?: string
  bottom?: string
  left?: string
  right?: string
  width: string
  height: string
  color?: string
  blur?: string
  opacity?: string
  zIndex?: string
  style?: React.CSSProperties
}

type DecorativeBackgroundProps = {
  blobs?: BlobProps[]
  variant?:
    | 'contact'
    | 'hero'
    | 'footer'
    | 'signin'
    | 'aboutus'
    | 'demos'
    | 'capabilities'
}

export default function DecorativeBackground({
  blobs,
  variant,
}: DecorativeBackgroundProps) {
  const variantBlobs: BlobProps[] = (() => {
    switch (variant) {
      case 'contact':
        return [
          {
            top: '5rem',
            left: '2.5rem',
            width: '10rem',
            height: '10rem',
          },
          {
            bottom: '2.5rem',
            right: '2.5rem',
            width: '15rem',
            height: '15rem',
          },
          // {
          //   width: "20rem",
          //   height: "20rem",
          //   color: "#239dcf20",
          //   style: {
          //     top: "50%",
          //     left: "50%",
          //     transform: "translate(-50%, -50%)",
          //   },
          // },
        ]

      case 'hero':
        return [
          {
            top: '15%',
            left: '85%',
            width: '12rem',
            height: '12rem',
          },
        ]

      case 'aboutus':
        return [
          {
            top: '15%',
            left: '85%',
            width: '6rem',
            height: '6rem',
          },
        ]

      case 'signin':
        return [
          {
            top: '60%',
            left: '5%',
            width: '8rem',
            height: '8rem',
          },
        ]

      
      case 'capabilities':
        return [
          {
            top: '18%',
            left: '90%',
            width: '8rem',
            height: '8rem',
          },
          {
            top: '75%',
            left: '5%',
            width: '7rem',
            height: '7rem',
          },
        ]
      // You can add other variants here
      default:
        return blobs ?? []
    }
  })()

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {variantBlobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${blob.blur ?? 'blur-3xl'}`}
          style={{
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            width: blob.width,
            height: blob.height,
            backgroundColor: blob.color ?? '#239dcf',
            opacity: blob.opacity ?? '0.5',
            zIndex: blob.zIndex ? parseInt(blob.zIndex) : undefined,
            ...blob.style,
          }}
        />
      ))}
    </div>
  )
}
