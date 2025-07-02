import "./styles/sec-2.css"
import Image from "next/image";
import backImage from "../../public/images/sich.png"
import frontImage from "../../public/images/3.png"

export default function Sec2() {
  return (
    <section className="sec-2">
        <div className="container">
            <div className="animateTitle">
                <Image className="back-image" src={backImage} alt="back-image" width={750} height={500} />
                <Image className="front-image" src={frontImage} alt="front-image" width={400} height={400} />
            </div>
            
        </div>
    </section>
  )
}
