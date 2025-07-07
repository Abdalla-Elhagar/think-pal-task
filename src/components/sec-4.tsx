import "./styles/sec-4.css";
import image from "../../public/images/8.png";
import Image from "next/image";

export default function Sec4() {
  return (
    <section className="sec-4">
      <div className="container">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          molestias explicabo voluptatibus similique dicta magni eos
          praesentium. Natus necessitatibus id quis atque praesentium aut,
          debitis veniam officiis nisi? Maxime, cumque!Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Incidunt molestias explicabo
          voluptatibus similique dicta magni eos praesentium. Natus
          necessitatibus id quis atque praesentium aut, debitis veniam officiis
          nisi? Maxime, cumque!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Incidunt molestias explicabo voluptatibus similique
          dicta magni eos praesentium. Natus necessitatibus id quis atque
          praesentium aut, debitis veniam officiis nisi? Maxime, cumque!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias
          explicabo voluptatibus similique dicta magni eos praesentium. Natus
          necessitatibus id quis atque praesentium aut, debitis veniam officiis
          nisi? Maxime, cumque!
        </p>

        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          molestias explicabo voluptatibus similique dicta magni eos
          praesentium. Natus necessitatibus id quis atque praesentium aut,
          debitis veniam officiis nisi? Maxime, cumque!Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Incidunt molestias explicabo
          voluptatibus similique dicta magni eos praesentium. Natus
          necessitatibus id quis atque praesentium aut, debitis veniam officiis
          nisi? Maxime, cumque!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Incidunt molestias explicabo voluptatibus similique
          dicta magni eos praesentium. Natus necessitatibus id quis atque
          praesentium aut, debitis veniam officiis nisi? Maxime, cumque!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias
          explicabo voluptatibus similique dicta magni eos praesentium. Natus
          necessitatibus id quis atque praesentium aut, debitis veniam officiis
          nisi? Maxime, cumque!
        </p>
        <div>
          <Image src={image} alt="Image" width={300} height={250} />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            molestias explicabo voluptatibus similique dicta magni eos
            praesentium. Natus necessitatibus id quis atque praesentium aut,
            debitis veniam officiis nisi? Maxime, cumque!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Incidunt molestias explicabo
            voluptatibus similique dicta magni eos praesentium. Natus
            necessitatibus id quis atque praesentium aut, debitis veniam
            officiis nisi? Maxime, cumque!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt molestias explicabo voluptatibus
            similique dicta magni eos praesentium. Natus necessitatibus id quis
            atque praesentium aut, debitis veniam officiis nisi? Maxime,
            cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt molestias explicabo voluptatibus similique dicta magni eos
            praesentium. Natus necessitatibus id quis atque praesentium aut,
            debitis veniam officiis nisi? Maxime, cumque!
          </p>
        </div>
      </div>
    </section>
  );
}
