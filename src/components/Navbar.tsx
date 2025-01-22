import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Browse", link: "/" },
    { name: "Popular", link: "/popular" },
    { name: "Categories", link: "/categories" },
    { name: "Events", link: "/events" },
    { name: "My Booking", link: "/check-booking" },
  ];

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
        <Link to={"/"}>
          <img src="/assets/images/logos/logo.svg" alt="logo" />
        </Link>
        <ul className="flex items-center gap-[50px] w-fit">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-[#0D903A] font-bold" : "text-black"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
        >
          <img
            src="/assets/images/icons/call.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <span className="font-semibold">Contact Us</span>
        </a>
      </div>
    </nav>
  );
}
