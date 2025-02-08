import { BoxIcon, FileArchive, LayoutDashboard, PersonStanding } from "lucide-react";
import Link from "next/link";

const Navlinks= [
    { name:"Dashboard", icon: LayoutDashboard, link: "/" },
    { name:"Cliente", icon: PersonStanding, link: "/cliente" },
    { name:"Categoria", icon: FileArchive, link: "/categoria" },
    { name:"Productos", icon: BoxIcon, link: "/ productos" },
    ]
function Navbar() {
    return ( 
        <div className="fixed flex w-full items-center justify-center ">
          <div className="text-2xl text-primary font-bold">
              <Link href="/">HORZON TECH</Link>
          </div>

          <ul className="flex items-center">
            {Navlinks.map((item, index) => (
              <li key={index} className="flex ml-10">
                  <item.icon className="mr-2" />
                <Link href={item.link} className="text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
     );
}

export default Navbar;