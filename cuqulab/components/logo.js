// import logocuqulab from '../images/logocuqulab.jpg'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='d-flex logo'>
            <Image src='/images/logocuqulab.jpg' alt='logo' width='100' height='100' />
        </div>
    )
}

export default Logo