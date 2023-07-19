import Link from "next/link";

const Footer = () => {
    return (
        <footer className="lg:flex justify-between px-6 pb-6 text-center bg-[#F7F9FC] dark:bg-darkBg">
            <p className="text-sm lg:text-lg text-myBlack dark:text-white">
                Copyright © <span className="text-myBlue dark:text-myGreen">DashPro</span> | Designed by <span  className="text-myBlue dark:text-myGreen">Softivus</span>
            </p>
            <ul className="lg:flex gap-8 text-lg ">
                <li><Link className="text-sm lg:text-lg text-myBlack dark:text-white" href="#">Support</Link></li>
                <li><Link className="text-sm lg:text-lg text-myBlack dark:text-white" href="#">Help Center</Link></li>
                <li><Link className="text-sm lg:text-lg text-myBlack dark:text-white" href="#">Privacy</Link></li>
                <li><Link className="text-sm lg:text-lg text-myBlack dark:text-white" href="#">Terms of Service</Link></li>
            </ul>
        </footer>
    )
}
export default Footer;