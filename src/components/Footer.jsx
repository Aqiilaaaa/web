import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";


function Footer() {

  return (

    <footer className="footer">

      <div className="container footer-grid">


        {/* BRAND */}

        <div className="footer-brand">

          <a
            href="#home"
            className="logo footer-logo"
          >

            MITRA<span>
              COOLING
            </span>

          </a>


          <p>

            Mitra Cooling System
            Operasional Anda.

            Solusi profesional untuk
            kebutuhan cooling system.

          </p>

        </div>


        {/* LAYANAN */}

        <div className="footer-column">

          <h4>
            Layanan
          </h4>

          <a href="#layanan">
            Preventive Maintenance
          </a>

          <a href="#layanan">
            Corrective Maintenance
          </a>

          <a href="#layanan">
            Monitoring
          </a>

          <a href="#layanan">
            Suku Cadang
          </a>

        </div>


        {/* PERUSAHAAN */}

        <div className="footer-column">

          <h4>
            Perusahaan
          </h4>

          <a href="#tentang">
            Tentang Kami
          </a>

          <a href="#cara-kerja">
            Cara Kerja
          </a>

          <a href="#dokumentasi">
            Dokumentasi
          </a>

        </div>


        {/* KONTAK */}

        <div className="footer-column contact-column">

          <h4>
            Kontak
          </h4>


          <p>

            <MapPin size={15} />

            Jakarta, Indonesia

          </p>


          <p>

            <Phone size={15} />

            0812-3456-7890

          </p>


          <p>

            <Mail size={15} />

            info@mitracooling.com

          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <div className="container">

          © {new Date().getFullYear()}
          {" "}
          Mitra Cooling System.
          All Rights Reserved.

        </div>

      </div>

    </footer>

  );
}

export default Footer;