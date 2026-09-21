import {
  ArrowRight,
  CheckCircle2
} from "lucide-react";

function Hero() {

  return (

    <section
      className="hero"
      id="home"
    >

      <div className="container hero-grid">

        {/* LEFT */}

        <div className="hero-copy">

          <div className="eyebrow">

            <span className="eyebrow-dot"></span>

            Cooling System Data Center & Gedung

          </div>


          <h1>

            Mitra Cooling System

            <span>
              Operasional Anda.
            </span>

          </h1>


          <p>

            Solusi cooling system profesional
            untuk menjaga performa, efisiensi,
            dan keandalan sistem pendingin
            data center maupun gedung Anda.

          </p>


          <div className="hero-actions">

            <a
              href="#kontak"
              className="btn btn-primary"
            >

              Konsultasi Sekarang

              <ArrowRight size={17} />

            </a>


            <a
              href="#layanan"
              className="btn btn-outline"
            >

              Lihat Layanan

            </a>

          </div>


          {/* STATISTIC */}

          <div className="hero-stats">

            <div>

              <strong>10+</strong>

              <span>
                Tahun Pengalaman
              </span>

            </div>


            <div>

              <strong>100+</strong>

              <span>
                Project
              </span>

            </div>


            <div>

              <strong>50+</strong>

              <span>
                Klien
              </span>

            </div>

          </div>

        </div>


        {/* RIGHT */}

        <div className="hero-visual">

          <div className="hero-image-wrap">

            <img
              src="/images/hero.jpg"
              alt="Cooling System"
            />

            <div className="hero-image-overlay"></div>

          </div>


          {/* FLOATING CARD */}

          <div className="trust-card">

            <div className="trust-icon">

              <CheckCircle2 size={21} />

            </div>


            <div>

              <strong>
                Professional Service
              </strong>

              <span>
                Teknisi berpengalaman
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;