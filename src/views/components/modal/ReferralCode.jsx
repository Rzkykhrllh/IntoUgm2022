import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import Close from "../../../assets/images/Close.png";
import useForm from "../../../core/hooks/useForm";
import { POST_REFFERAL } from "api";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function ReferralCode({ closeModal, handlePayment, setIsLoading, userData }) {
  const { form, mutateForm, resetForm } = useForm({
    code: "",
  });
  const history = useHistory();

  const [errorMessage, seteErrorMessage] = useState(null);

  // Fungsi handle referal
  const handleReff = async () => {
    setIsLoading(true);

    const payload = {
      email: userData.email,
      referralCode: form.code,
    };

    let res = await POST_REFFERAL(payload);
    console.log(res);
    setIsLoading(false);

    if (res?.data?.code === "referral-already-used") {
      seteErrorMessage("Referral sudah digunakan");
    } else if (res?.data?.code === "referral-code-not-found") {
      seteErrorMessage("Referral tidak ditemukan");
    } else if (res?.data?.code === "referral-successfully-used") {
      window.location.reload();
    }
  };

  return (
    <div className="absolute top-0 left-0 z-50 flex w-screen min-h-screen bg-black bg-opacity-80 ">
      {/* modal */}
      <div
        className="flex flex-col items-center justify-center p-5 mx-5 my-auto sm:p-8 sm:mx-auto rounded-2xl w-96 bg-myYellow"
        style={{ width: "610px" }}
      >
        <img src={Close} className="ml-auto closeButton" onClick={closeModal} />
        <>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-center text-mygreen">
              Masukkan Referal Code
            </p>

            <div className="flex my-2 sm:flex-row gap-x-4">
              <input
                name="code"
                type="text"
                className="w-full px-3 py-1 text-base rounded-full myInput"
                onChange={mutateForm}
                value={form.code}
              />
              <button
                onClick={handleReff}
                className="block px-3 py-1 mx-auto mt-1 text-base text-lg font-bold text-white rounded-full sm:mr-0 bg-myDarkBlue sm:px-5"
              >
                Submit
              </button>
            </div>

            {errorMessage !== null && (
              <p className="px-2 text-white bg-red-500 rounded-xl">
                {errorMessage}
              </p>
            )}

            <p className="text-sm font-bold text-center text-mygreen">
              Referal code bisa didapatkan dari teman anda yang sudah melakukan
              pembayaran Paket Couple Ambis atau Geng Ambis
            </p>
          </div>
        </>

        <p className="w-full my-4 bg-myDarkBlue" style={{ height: "1px" }}></p>

        <div className="flex flex-col items-center justify-center ">
          <p className="font-bold text-center text-mygreen">
            Atau anda dapat melakukan pembayaran dengan mengklik tombol dibawah
            ini
          </p>

          <button
            className="px-3 py-1 mt-2 text-lg font-bold text-white rounded-full bg-myDarkBlue"
            onClick={handlePayment}
          >
            Bayar
            <IoChevronForward className="inline ml-1" />
          </button>

          {/* <button
            className="px-3 py-1 mt-2 text-lg font-bold text-white rounded-full bg-myDarkGreen"
            onClick={closeModal}
          >
            Menuju ke Halaman Akun
            <IoChevronForward className="inline ml-1" />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ReferralCode;
