import { Menu, X } from "lucide-react";

function Navbar({ menuOpen, setMenuOpen }) {

  const links = [
    {
      name: "Beranda",
      link: "#home"
    },
    {
      name: "Layanan",
      link: "#layanan"
    },
    {
      name: "Cara Kerja",
      link: "#cara-kerja"
    },
    {
      name: "Dokumentasi",
      link: "#dokumentasi"
    },
    {
      name: "Tentang",
      link: "#tentang"
    }
  ];

  return (

    <header className="navbar">

      <div className="container nav-inner">

        {/* LOGO */}

        <a
          href="#home"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          MITRA<span>COOLING</span>
        </a>


        {/* MENU */}

        <nav
          className={`nav-menu ${
            menuOpen ? "open" : ""
          }`}
        >

          {links.map((item) => (

            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>

          ))}


          <a
            href="#kontak"
            className="nav-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Hubungi Kami
          </a>

        </nav>


        {/* CTA DESKTOP */}

        <a
          href="#kontak"
          className="btn btn-dark nav-cta"
        >
          Hubungi Kami
        </a>


        {/* MOBILE */}

        <button
          className="menu-toggle"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen
            ? <X size={24} />
            : <Menu size={24} />
          }

        </button>

      </div>

    </header>

  );
}

export default Navbar;