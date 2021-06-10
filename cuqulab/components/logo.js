
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='logo'>
            <Image src='/images/CuquLabLogo.png' alt='logo' width='70' height='70' />
        </div>
    )
}

export default Logo