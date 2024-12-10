import Image from "next/image";
import logo from "../../../../public/images/logo.jpg"
import Link from "next/link";

export default function Navbar() {
  return (
    <body>
      
    
    <div className="navbar">
      <div className="logo-div">
        <Image className="logo-img-Image" src={logo} alt="logo" height={98} width={200}></Image>
      </div>
      <div className="a-div-navbar">
        <Link  className="a" href="http://localhost:3000/">Home</Link>
        <Link  className="a" href="/pages/about">About</Link>
        <Link  className="a" href="/pages/contact">Contact US</Link>
      </div>
    </div>
    </body>

   
  );
}