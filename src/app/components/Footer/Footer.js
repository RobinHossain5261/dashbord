import Link from "next/link";

const Footer = () => {
    return (
        <footer className="lg:flex justify-between px-6 pb-6 text-center">
            <p>
                Copyright © DashPro | Designed by Softivus
            </p>
            <ul className="lg:flex gap-8 text-lg ">
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
            </ul>
        </footer>
    )
}
export default Footer;