import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

type Props = {}

const Footer = ({}: Props) => {
  return (
    <div className="bg-[#eee] flex flex-col gap-4 px-6 pt-12 pb-2 ">
        <div className="flex flex-col md:flex-row md:w-4/5 mx-auto">
            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold"><span className="text-secondary-300 italic font-extrabold text-3xl">A</span>-lpha GYM</h4>
                <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime excepturi fuga quaerat, quod commodi a magni, quidem atque blanditiis voluptas omnis inventore hic velit? Ullam quasi magnam amet qui?
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:w-4/5 mx-auto">
            <div className="flex flex-col gap-2 py-5 md:py-0">
                <h4 className="text-md font-bold">Menu</h4>
                <div className="text-sm flex flex-col gap-2 ">
                    <p>Home</p>
                    <p>About</p>
                    <p>Trainers</p>
                    <p>Plans</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <h4 className="text-md font-bold">Social media</h4>
                <div className="text-sm flex flex-col gap-2 ">
                    <a className="flex gap-3" href="https://github.com/basilgoodluck" target="_blank"><FaGithub /> Github</a>
                    <a className="flex gap-3" href="mailto: basilgoodluck22@gmail.com" target="_blank"><MdEmail /> Email</a>
                    <a className="flex gap-3" href="https://x.com/TheNobleBasil" target="_blank"><FaXTwitter /> Twitter</a>
                    <a className="flex gap-3"><FaInstagram /> Instagram</a>
                    <a className="flex gap-3"><FaSquareWhatsapp /> WhatsApp</a>
                </div>
            </div>
        </div>
        <div className="text-sm md:w-4/5 mx-auto">All rights Reserved, 2024</div>
    </div>
  )
}

export default Footer