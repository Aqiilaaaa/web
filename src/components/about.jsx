import {
  Check
} from "lucide-react";


const points = [

  "Teknisi profesional",

  "Maintenance terjadwal",

  "Monitoring sistem",

  "Respon cepat"

];


function About() {

  return (

    <section
      className="section about"
      id="tentang"
    >

      <div className="container about-grid">


        {/* IMAGE */}

        <div className="about-image">

          <img
            src="/images/about.jpg"
            alt="Tim Mitra Cooling System"
          />


          <div className="about-badge">

            <strong>
              10+
            </strong>

            <span>
              Tahun pengalaman
            </span>

          </div>

        </div>


        {/* CONTENT */}

        <div className="about-copy">

          <span className="section-label">

            TENTANG KAMI

          </span>


          <h2>

            Mitra Cooling System

            <span>
              Operasional Anda.
            </span>

          </h2>


          <p>

            Kami berfokus pada layanan
            cooling system untuk kebutuhan
            data center, gedung, dan berbagai
            fasilitas operasional.

          </p>


          <p>

            Dengan dukungan teknisi
            berpengalaman dan proses kerja
            yang terstruktur, kami membantu
            memastikan sistem pendingin
            bekerja secara optimal.

          </p>


          <div className="check-grid">

            {points.map((point) => (

              <div key={point}>

                <Check size={16} />

                {point}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}

export default About;