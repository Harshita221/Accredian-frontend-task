import { useState } from "react";
import Modal from "react-modal";
import HeroImage from "../../assets/images/hero.svg";
import MoneyImage from "../../assets/images/money.svg";
import MoneyImage2 from "../../assets/images/money2.svg";

const LearnEarnSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [referredBy, setReferredBy] = useState("");

  const validateAndSubmit = async () => {
    if (!name.trim() || !emailId.trim() || !referredBy.trim()) {
      alert("All fields are required!");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailId)) {
      alert("Please enter a valid email address!");
      return;
    }

    const payload = { name, emailId, referredBy };

    try {
      const response = await fetch("https://example.com/api/refer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Referral submitted successfully!");
        setModalIsOpen(false);
        setName("");
        setEmailId("");
        setReferredBy("");
      } else {
        alert("Failed to submit referral.");
      }
    } catch (error) {
      alert("Error submitting referral. Please try again later.");
    }
  };

  return (
    <div className="pt-10">
      <div className="w-full flex justify-center">
        <div className="max-w-96 flex justify-evenly items-center w-full p-2 bg-blue-100 rounded-3xl">
          <p>Refer</p>
          <p>Benefits</p>
          <p>FAQs</p>
          <p>Support</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-6 md:px-32 px-0 xl:px-52">
        <div className="relative w-full px-6 py-6 md:px-12 md:py-8 rounded-xl shadow-xl flex flex-col-reverse md:flex-row items-center justify-between bg-[#eff5ff]">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let’s Learn <br />& Earn
            </h2>
            <p className="text-gray-700 text-2xl mb-6">
              Get a chance to win <br />
              up to{" "}
              <span className="text-blue-600 font-semibold text-3xl">
                Rs. 15,000
              </span>
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
              onClick={() => setModalIsOpen(true)}
            >
              Refer Now
            </button>
          </div>

          <div className="md:w-1/2 flex items-center justify-center relative mt-6 md:mt-0">
            <img src={HeroImage} alt="Happy People" />
          </div>

          <img src={MoneyImage} alt="Money" className="absolute top-0 left-0" />
          <img
            src={MoneyImage2}
            alt="Money"
            className="absolute top-0 right-10"
            width={60}
          />
          <img
            src={MoneyImage2}
            alt="Money"
            className="absolute bottom-0 right-5"
            width={80}
          />
          <img
            src={MoneyImage2}
            alt="Money"
            className="absolute bottom-10 left-0 md:left-[40%]"
            width={120}
          />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto mt-20 relative"
      >
        {/* Close Button */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Refer a Friend!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email ID</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referred By</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={referredBy}
              onChange={(e) => setReferredBy(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded-md w-full"
            onClick={validateAndSubmit}
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default LearnEarnSection;
