import Link from 'next/link'


const CardRightImg = ({ title, img, text, href }) => {
    return (
        <div className='card shadow-sm mb-3' style={{ display: 'flex', width: '70%', height: '30vh', margin: 'auto', justifyContent: 'space-between', backgroundColor: '#F2F2F2' }}>
            <div className='row g-0' style={{ height: '100%' }}>
                <div className='col-md-5' style={{
                    backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'
                }} >
                </div>
                <div className='col-md-7 text-center'>
                    <div className='card-body mt-4'>
                        {text ?
                            <>
                                <h5 className='card-title'>{title}</h5>
                                <p className='card-text'>{text}</p>
                                <Link href={href}>
                                    <button class='btn btn-outline-info' type='button'>+ info...</button>
                                </Link>
                            </> :
                            <>
                                <h5 className='card-title' style={{ alignItems: 'center' }}>{title} </h5>
                                <Link href={href}>
                                    <button class='btn btn-outline-info mt-5' type='button'>+ info...</button>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardRightImg