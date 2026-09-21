import {
  Wrench,
  Settings,
  BarChart3,
  PackageCheck,
  ArrowUpRight
} from "lucide-react";


const services = [

  {
    number: "01",
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Perawatan rutin dan berkala untuk mencegah kerusakan serta menjaga performa sistem cooling."
  },

  {
    number: "02",
    icon: Settings,
    title: "Corrective Maintenance",
    description:
      "Penanganan dan perbaikan sistem ketika terjadi gangguan atau kerusakan pada perangkat."
  },

  {
    number: "03",
    icon: BarChart3,
    title: "Monitoring & Pelaporan",
    description:
      "Monitoring kondisi sistem dan laporan berkala untuk membantu evaluasi performa."
  },

  {
    number: "04",
    icon: PackageCheck,
    title: "Suku Cadang",
    description:
      "Penyediaan spare part untuk mendukung proses maintenance dan perbaikan sistem."
  }

];


function Services() {

  return (

    <section
      className="section services"
      id="layanan"
    >

      <div className="container">


        <div className="section-heading">

          <div>

            <span className="section-label">
              LAYANAN & FASILITAS
            </span>

            <h2>

              Solusi Cooling System

              <span>
                Terintegrasi.
              </span>

            </h2>

          </div>


          <p>

            Layanan menyeluruh untuk
            membantu menjaga sistem
            pendingin tetap optimal,
            stabil, dan dapat diandalkan.

          </p>

        </div>


        <div className="service-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <article
                className="service-card"
                key={service.number}
              >

                <span className="service-number">
                  {service.number}
                </span>


                <div className="service-icon">

                  <Icon size={23} />

                </div>


                <h3>
                  {service.title}
                </h3>


                <p>
                  {service.description}
                </p>


                <a href="#kontak">

                  Konsultasi

                  <ArrowUpRight size={15} />

                </a>

              </article>

            );

          })}

        </div>

      </div>

    </section>

  );
}

export default Services;