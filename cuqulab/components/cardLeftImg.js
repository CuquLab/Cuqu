import Link from 'next/link'
import styles from '../styles/Cards.module.css'

const CardLeftImg = ({ title, img, text, href }) => {
    return (
        <div className={styles.cardLeft}>
            <div className='container shadow-sm'>
                <div className='row w-100vh d-flex justify-content-space-between align-items-center'>
                    <div className='col-md-4 col-xs-12'>
                        <img src={img} className='img-fluid' alt='Card image' />
                    </div>
                    <div className='col-md-8 col-xs-12 mt-3 mb-3 text-center'>
                        {text ?
                            <>
                                <h5 className='card-title fw-bold'>{title}</h5>
                                <p className='card-text'>{text}</p>
                                <Link href={href}>
                                    <button className={styles.btnInfo} type='button'>+ info...</button>
                                </Link>
                            </> :
                            <>
                                <h5 className='card-title fw-bold' style={{ alignItems: 'center' }}>{title} </h5>
                                <Link href={href}>
                                    <button className={styles.btnInfo} type='button'>+ info...</button>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLeftImg