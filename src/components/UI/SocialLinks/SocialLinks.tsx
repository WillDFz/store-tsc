import Link from "next/link"
import Image from 'next/image';

const SocialLinks: React.FC = () => {
    return (
        <div className="d-flex justify-content-center justify-content-lg-start mt-3 mb-2">
            <div className="me-2">
                <Image src="svg/facebook-icon.svg" width={40} height={40} alt="" />
            </div>
            <div className="me-2">
                <Image src="svg/twitter-icon.svg" width={40} height={40} alt="" />
            </div>
            <div className="me-2">
                <Image src="svg/linkedin-icon.svg" width={40} height={40} alt="" />
            </div>
            <div className="me-2">
                <Image src="svg/instagram-icon.svg" width={40} height={40} alt="" />
            </div>
            <div>
                <Image src="svg/youtube-icon.svg" width={40} height={40} alt="" />
            </div>
        </div>
    )
}

export default SocialLinks
