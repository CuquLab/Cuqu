
import { useRouter } from 'next/router';

const ActiveLink = ({ href, children }) => {
    const router = useRouter();
    const style = {
        display: 'flex',
        marginRight: 20,
        color: router.asPath === href ? '#F23D3D' : 'rgba(0,0,0,.55)',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

export default ActiveLink
