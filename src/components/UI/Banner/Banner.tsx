import { Container } from 'react-bootstrap';

interface bannerProps {
    banner: string
}


const Banner: React.FC<bannerProps> = ({ banner }) => {
    return (
        <section className="my-3">
            {/* Mobile */}
            <div className='d-md-none'>
                <img src={`images/${banner}-mobile.png`} className="w-100" alt="" />
            </div>
            {/* Desktop */}
            <Container>
                <div className='d-none d-md-block'>
                    <img src={`images/${banner}-desktop.png`} className='w-100' alt="" />
                </div>
            </Container>
        </section>
    )
}

export default Banner
