import React from 'react';
import "../assets/Horoscope.css";
import lord from "../assets/lord.jpg";
import bg from "../assets/bg.png";
import { useLocation } from 'react-router-dom';

function View() {
  const location = useLocation();
  const { name, fathersName, mothersName, address } = location.state || { name: '', fathersName: '', mothersName: '', address: '' };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="horoscope-card bg-cover bg-center p-8 mx-auto text-center font-sans relative rounded-lg shadow-lg max-w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        marginTop: '50px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="header">
        <h1 className="text-9xl md:text-4xl lg:text-9xl uppercase font-bold text-black shadow-text font-algerian">
          Maharshi Parasar's Birth Horoscope
        </h1>
      </div>
      <div className="content mb-6 flex flex-col items-center">
        <img src={lord} alt="Deities" className="w-32 md:w-40 lg:w-48 mb-6 rounded-full border-4 border-white shadow-md" />
        <div className="details">
          <p className="text-lg md:text-xl uppercase">NAME: <strong>{name}</strong></p>
          <p className="text-lg md:text-xl uppercase">FATHER: <strong>{fathersName}</strong> </p>
          <p className="text-lg md:text-xl uppercase">MOTHER:<strong>{mothersName}</strong></p>
          <p className="text-lg md:text-xl uppercase">ADDRESS:<strong>{address}</strong></p>
        </div>
        <div className="footer">
          <p className="text-lg md:text-xl">PREPARED BY:</p><br />
          <p className="text-lg md:text-xl font-bold">BIJAY KUMAR ROUT</p>
          <p className="text-md md:text-lg"><strong>ASTROLOGER & VASTUBIT</strong></p>
          <p className="text-sm md:text-md">AT-BAULANGA (TARTOL), PO-PORAGADEI,</p>
          <p className="text-sm md:text-md">PS-TIRTOL,DIST.- JAGATSINGHPUR, ODISHA-754160.</p>
          <p className="text-sm md:text-md">CONTACT NO. - +91- 9937770708 (MOB), E-mail:-bijayastrologer@gmail.com</p>
          <p className="text-sm md:text-md"></p>
        </div>
      </div>
      <button
        onClick={handlePrint}
        className="print-button py-2 px-4  cursor-pointer select-none rounded-lg bg-green-500 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Print
      </button>
    </div>
  );
}

export default View;
