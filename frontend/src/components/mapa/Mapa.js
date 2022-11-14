import React from "react";

const Mapa = () => {
  const link =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.9739761256834!2d-65.78158376090623!3d-28.464820893657905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942429309d7f5b17%3A0x7fed75c241a5415e!2sUniversidad%20Kennedy%20Catamarca!5e0!3m2!1ses!2sar!4v1668112979351!5m2!1ses!2sar";
  return (
    <>
      <div className="col-6">
        <iframe
          src={`${link}`}
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Mapa;
