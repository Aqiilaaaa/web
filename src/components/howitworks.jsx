const steps = [

  {
    number: "01",
    title: "Survey Lokasi",
    description:
      "Pemeriksaan kondisi sistem dan lokasi."
  },

  {
    number: "02",
    title: "Analisis Kebutuhan",
    description:
      "Menentukan kebutuhan dan solusi yang tepat."
  },

  {
    number: "03",
    title: "Maintenance",
    description:
      "Pengerjaan dilakukan oleh teknisi profesional."
  },

  {
    number: "04",
    title: "Monitoring",
    description:
      "Evaluasi dan monitoring sistem secara berkala."
  }

];


function HowItWorks() {

  return (

    <section
      className="section workflow"
      id="cara-kerja"
    >

      <div className="container">


        <div className="section-heading centered">

          <span className="section-label">
            CARA KERJA
          </span>

          <h2>

            Proses Kerja yang

            <span>
              Terstruktur.
            </span>

          </h2>

          <p>

            Mulai dari pemeriksaan hingga
            monitoring untuk memastikan
            hasil pekerjaan tetap terkontrol.

          </p>

        </div>


        <div className="steps">

          {steps.map((step, index) => (

            <div
              className="step-group"
              key={step.number}
            >

              <div className="step">

                <div className="step-number">

                  {step.number}

                </div>


                <h3>
                  {step.title}
                </h3>


                <p>
                  {step.description}
                </p>

              </div>


              {index < steps.length - 1 && (

                <div className="step-line"></div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default HowItWorks;