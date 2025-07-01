import "@/components/styles/sec-1.css";
import Image from "next/image";
import starsAndHTML from "../../public/images/5.png";
import code from "../../public/images/6.png";
import alexanderImage from "../../public/images/Untitled-1.png";

export default function Sec1() {
  return (
    <section className="sec-1">
      <div className="container">
        <div className="top">
          <div className="left">
            <Image
              src={starsAndHTML}
              alt="stars and html icon"
              width={500}
              height={30}
            />
            <h1 className="cssOnlyText">CSS ONLY</h1>
          </div>
          <div className="right">
            <Image src={code} alt="Code" width={200} height={35} />
            <h1 className="helloText">Hello</h1>
            <div className="text">
              <p>Web Design</p>
              <p>Dont forget to subscribe the channel to content</p>
              <p>update your video</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Image
            className="alexanderImage"
            src={alexanderImage}
            alt="Alexander Image"
            width={500}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}
