"use client"


import "./styles/sec-2.css";
import Image from "next/image";
import backImage from "../../public/images/sich.png";
import frontImage from "../../public/images/3.png";
import code from "../../public/images/6.png";
import crown from "../../public/images/2.png";
import candy from "../../public/images/candy.png";
import { useEffect, useRef, useState } from "react";

export default function Sec2() {
  const titleRef = useRef<HTMLDivElement>(null)
  const [isTitleVisible , setIsTitleVisible] = useState(false)


const ele1Ref = useRef<HTMLDivElement>(null)
  const [isele1Visible , setIsele1Visible] = useState(false)

const ele2Ref = useRef<HTMLDivElement>(null)
  const [isele2Visible , setIsele2Visible] = useState(false)

const ele3Ref = useRef<HTMLDivElement>(null)
  const [isele3Visible , setIsele3Visible] = useState(false)

const ele4Ref = useRef<HTMLDivElement>(null)
  const [isele4Visible , setIsele4Visible] = useState(false)

  const ele5Ref = useRef<HTMLDivElement>(null)
  const [isele5Visible , setIsele5Visible] = useState(false)



  function handleAnimation( myRef:any, set:any) {
    useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries)=>{
        const entry = entries[0]
        set(entry.isIntersecting)
      },
      {threshold:0.2}
    );
    if(myRef.current) {
      observer.observe(myRef.current);
    }
  },[])
  }
handleAnimation(titleRef, setIsTitleVisible)
handleAnimation(ele1Ref, setIsele1Visible)
handleAnimation(ele2Ref, setIsele2Visible)
handleAnimation(ele3Ref, setIsele3Visible)
handleAnimation(ele4Ref, setIsele4Visible)
handleAnimation(ele5Ref, setIsele5Visible)

  return (
    <section className="sec-2">
      <div className="container">
        <div className="animateTitle">
          <Image
            className="back-image"
            src={backImage}
            alt="back-image"
            width={750}
            height={500}
          />
          <Image
            className="front-image"
            src={frontImage}
            alt="front-image"
            width={400}
            height={400}
          />
        </div>
        <h1 ref={titleRef} style={{animation:`${isTitleVisible? "showAnimation" : ""} 0.3s forwards`}}>Introduce</h1>
        <div className="content">
          <div className="left">
            <div className="ele1" ref={ele1Ref} style={{animation:`${isele1Visible? "showAnimation" : ""} 0.3s forwards`}}>
              <Image className="code" src={code} alt="code" />
              <p style={{ marginBottom: "100px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              beatae officia dolorum molestias vitae! Repellat inventore enim
              voluptas veritatis, beatae nihil. Architecto voluptate inventore
              enim voluptas veritatis, beatae nihil. Architecto voluptate
              inventore enim voluptas veritatis, beatae nihil. Architecto
              voluptate praesentium veritatis ipsum doloremque eius cum
              asperiores!
              </p>
            </div>
            <div className="ele2" ref={ele2Ref} style={{animation:`${isele2Visible? "showAnimation" : ""} 0.3s forwards`}}>
              <Image
              className="candy"
              src={candy}
              alt="candy"
              width={600}
              height={400}
            />
            </div>
            
          </div>
          <div className="right">
              <p className="ele5" ref={ele5Ref} style={{animation:`${isele5Visible? "showAnimation" : ""} 0.3s forwards`}}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
              ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
              عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم
              فيظهر بشكل لا يليق. هذا النص يمكن أن يتم تركيبه على أي تصميم دون
              مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
              مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً
            </p>
            <div className="ele3" ref={ele3Ref} style={{animation:`${isele3Visible? "showAnimation" : ""} 0.3s forwards`}}>

            <Image
              className="crown"
              src={crown}
              alt="crown"
              width={600}
              height={400}
            />
            </div>
            
            <p className="ele4" ref={ele4Ref} style={{animation:`${isele4Visible? "showAnimation" : ""} 0.3s forwards`}}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
