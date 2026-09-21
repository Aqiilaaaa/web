import {
  Maximize2
} from "lucide-react";

import { useState } from "react";


const photos = [

  {
    image: "/images/dokumentasi-1.jpg",
    title: "Maintenance Cooling System"
  },

  {
    image: "/images/dokumentasi-2.jpg",
    title: "Technical Service"
  },

  {
    image: "/images/dokumentasi-3.jpg",
    title: "Cooling System"
  }

];


function Documentation() {

  const [selectedImage, setSelectedImage] =
    useState(null);


  return (

    <section
      className="section documentation"
      id="dokumentasi"
    >

      <div className="container">


        <div className="documentation-heading">

          <div>

            <span className="section-label">
              DOKUMENTASI
            </span>

            <h2>

              Aktivitas & Pekerjaan

              <span>
                Kami.
              </span>

            </h2>

          </div>


          <p>

            Dokumentasi kegiatan maintenance
            dan pekerjaan cooling system
            yang kami lakukan di lapangan.

          </p>

        </div>


        <div className="gallery">

          {photos.map((photo, index) => (

            <button
              key={photo.image}
              className={`gallery-item ${
                index === 0
                  ? "gallery-main"
                  : ""
              }`}
              onClick={() =>
                setSelectedImage(photo)
              }
            >

              <img
                src={photo.image}
                alt={photo.title}
              />


              <span className="gallery-shade"></span>


              <span className="gallery-caption">

                {photo.title}

              </span>


              <span className="gallery-expand">

                <Maximize2 size={16} />

              </span>

            </button>

          ))}

        </div>

      </div>


      {/* LIGHTBOX */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <div
            className="lightbox-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="lightbox-close"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ×
            </button>


            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />


            <p>
              {selectedImage.title}
            </p>

          </div>

        </div>

      )}

    </section>

  );
}

export default Documentation;