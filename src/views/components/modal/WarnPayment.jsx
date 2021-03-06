import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

function WarnPayment({ closeModal, onClickPayment }) {
  return (
    <div className="absolute top-0 left-0 z-50 flex w-screen min-h-screen bg-black bg-opacity-80 ">
      {/* modal */}
      <div
        className="flex flex-col items-center justify-center p-5 mx-5 my-auto sm:p-8 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-center text-mygreen">
            Mohon segera lakukan pembayaran melalui tombol “Aktivasi” untuk
            mengaktivasi akun Anda! Aktivasi akun diperlukan agar Anda dapat
            mengakses Try Out serta fitur-fitur lainnya di dalam website InTO
            UGM 2022.
          </p>

          <button
            className="px-3 py-1 mt-2 text-lg font-bold text-white rounded-full bg-myDarkBlue"
            onClick={onClickPayment}
          >
            Bayar
            <IoChevronForward className="inline ml-1" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <p className="font-bold text-center text-mygreen">
            Atau, Anda dapat melakukan pembayaran di lain waktu dan langsung
            menuju ke halaman akun.
          </p>
          <button
            className="px-3 py-1 mt-2 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
          >
            Menuju ke Halaman Akun
            <IoChevronForward className="inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarnPayment;
