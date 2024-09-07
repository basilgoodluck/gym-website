type Props = {}

const Footer = ({}: Props) => {
  return (
    <div className="flex flex-col gap-4 px-6 mt-6 pb-5">
        <div>
            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-bold"><span className="text-secondary-300 italic font-extrabold text-3xl">A</span>-lpha GYM</h4>
                <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime excepturi fuga quaerat, quod commodi a magni, quidem atque blanditiis voluptas omnis inventore hic velit? Ullam quasi magnam amet qui?
                </p>
            </div>
            <div className="flex flex-col gap-2 py-5">
                <h4 className="text-md font-bold">Menu</h4>
                <div className="text-sm ">
                    <p>Home</p>
                    <p>About</p>
                    <p>Trainers</p>
                    <p>Plans</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <h4 className="text-md font-bold">Social media</h4>
                <div className="text-sm flex flex-col ">
                    <a href="https://github.com/basilgoodluck">Github</a>
                    <a>Email</a>
                    <a>Twitter</a>
                    <a>Instagram</a>
                    <a>WhatsApp</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer