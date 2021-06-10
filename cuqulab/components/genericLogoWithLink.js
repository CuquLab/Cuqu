import Image from "next/image"
import Link from "next/link"


const GenericLogoWithLink = ({ href, src, alt, width, height }) => {
    return (
        <Link href={href}>
            <a >
                <Image src={src} alt={alt} width={width} height={height} />
            </a>
        </Link>
    )
}

export default GenericLogoWithLink