import {
  ArrowUpRight
} from "lucide-react";


function CTA() {

  return (

    <section
      className="cta"
      id="kontak"
    >

      <div className="container cta-inner">


        <div>

          <span className="section-label">

            BUTUH SOLUSI COOLING SYSTEM?

          </span>


          <h2>

            Konsultasikan kebutuhan
            sistem Anda bersama kami.

          </h2>


          <p>

            Tim kami siap membantu
            memberikan solusi sesuai
            kebutuhan operasional Anda.

          </p>

        </div>


        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-white"
        >

          Hubungi Kami

          <ArrowUpRight size={17} />

        </a>

      </div>

    </section>

  );
}

export default CTA;