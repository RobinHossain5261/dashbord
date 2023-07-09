import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between p-6">
            <p>
                Copyright © DashPro | Designed by Softivus
            </p>
            <ul className="flex gap-8 text-lg">
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
            </ul>
        </footer>
    )
}
export default Footer;