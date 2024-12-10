import Image from "next/image";
import herogojo from "../../../../public/images/herogojo.jpg"

export default function Navbar() {
  return (
   <div className="Hero-section">
    <Image className="img" src={herogojo} alt="hero-img" height={500} width={800} ></Image>
    <p className="p-1">Do you want to capture your <br /> <span>beautiful moments</span> forever</p>
    <p className="p-1">We are here to turn your  into <br /> pictures.<span>dreams</span></p>
   </div>
  );
}