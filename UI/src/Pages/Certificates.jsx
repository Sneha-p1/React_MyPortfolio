import React from "react";
import Certi1 from '../assets/Certi1.jpeg';
import Certi2 from '../assets/Certi2.jpeg';
import Certi3 from '../assets/Certi3.jpeg';

const Certificates = () => {
  return (
    <div id="certificates" className="my-36 max-xl:my-20">

      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={Certi1} alt="certificate" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
              Developer Essential for Blockchain - KBA Certification
            </h1>
            <p className="text-gray-700 text-sm">
              This program provided a solid foundation in React, Express, MongoDB, Docker, and Git, setting the stage for future exploration in DApp development.
            </p>
          </div>
        </div>

        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={Certi2} alt="certificate" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
              Blockchain Foundation Course - KBA Certification
            </h1>
            <p className="text-gray-700 text-sm">
            Learn the basics of blockchain technology, including decentralization, smart contracts, and cryptocurrencies. Ideal for beginners and professionals, this course covers key concepts, Ethereum, Hyperledger, and blockchain applications beyond crypto. </p>
          </div>
        </div>


        <div className="w-[250px] h-[350px] rounded overflow-hidden shadow-lg bg-white hover:shadow-indigo-500 transition-all border border-white pb-4 cursor-pointer">
          <img className="w-full h-[150px] object-cover" src={Certi3} alt="certificate" />
          <div className="px-3 h-[200px] overflow-auto">
            <h1 className="font-bold text-lg mb-1 mt-1 text-black">
            Certified Software Tester - Software Testing
            </h1>
            <p className="text-gray-700 text-sm">
            I completed a 4-month internship program in Software Testing at Camerinfolks Pvt. Ltd. During this time, I developed skills in both manual and automated testing. </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certificates;