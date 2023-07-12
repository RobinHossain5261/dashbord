import Link from "next/link";

const Footer = () => {
    return (
        <footer className="lg:flex justify-between px-6 pb-6 text-center">
            <p className="text-lg text-[#2E293E]">
                Copyright © <span className="text-[#4538D3]">DashPro</span> | Designed by <span  className="text-[#4538D3]">Softivus</span>
            </p>
            <ul className="lg:flex gap-8 text-lg ">
                <li><Link className="text-lg text-[#2E293E]" href="#">Support</Link></li>
                <li><Link className="text-lg text-[#2E293E]" href="#">Help Center</Link></li>
                <li><Link className="text-lg text-[#2E293E]" href="#">Privacy</Link></li>
                <li><Link className="text-lg text-[#2E293E]" href="#">Terms of Service</Link></li>
            </ul>
        </footer>
    )
}
export default Footer;