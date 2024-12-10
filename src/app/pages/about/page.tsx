import Image from "next/image";
import photo from "../../../../public/images/photo.png"

export default function About() {
  return (
    <div className="about-us-page">
      <div text-div>
      <h1>About Me</h1>
      <p>Hi! I&apos; am a passionate photographer with a love for <br />capturing moments  through my lens. 
        My <br /> goal is not just to take pictures, but to tell a<br /> story, evoke emotions, and create lasting<br /> memories 
        with each shot.  Whether it&apos;s<br /> wedding photography, portraits, or<br /> landscapes ,  I strive for perfection in every 
        <br /> frame. My mission is to provide every client with  <br />beautiful memories they can cherish forever.</p>
    </div>
    <div className="photo-div">
      <Image src={photo} alt="owner" height={400} width={400}></Image>
    </div>
    </div>
    
  );
}
