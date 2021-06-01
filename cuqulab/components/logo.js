
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='d-flex logo'>
            <Image src='/images/FONDOBLANCO.png' alt='logo' width='100' height='100' />
        </div>
    )
}

export default Logo