// components/Navbar.js
import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         <li>
//           <Link href="/services">Services</Link>
//         </li>
//         <li>
//           <Link href="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

const Navbar=()=>{
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" > hi this is home </Link>
                </li>
                <li>
                    <Link href="/about"> Hi this is about </Link>
                </li>
                <li>
                    <Link href="/shopsection ">Hi this is shopping section </Link>
                </li>
                <li>
               
                <Link href="/services ">Hi this is Services </Link>

                </li>
            </ul>
            </nav>
    )
}

export default Navbar;
