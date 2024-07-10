import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <section className="h-screen bg-[#E0E0E0] flex justify-center items-center  ">
        <div className="w-[500px] h-[450px] bg-white p-4 rounded-[9px]">
          <div className="flex flex-col justify-center items-center gap-6 p-10 ">
            <div className="text-center">
              <h1 className="text-[20px] font-[700] font-montserrat ">
                Welcome back
              </h1>
              <p className="text-[16px] font-[500] font-montserrat ">
                Hey Enter your details to get Login
              </p>
              <p className="text-[16px] font-[500] font-montserrat ">
                in to your account
              </p>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-[#D2EA28] rounded-[9px] w-[80%] p-2 "
            />
            <input
              type="text"
              placeholder="Password"
              className="border-2 border-[#D2EA28] rounded-[9px] w-[80%] p-2"
            />
            <button className="bg-[#D2EA28] w-[80%] text-[#212529] font-[700] py-2 px-4 rounded-[9px] font-montserrat ">
              Login in
            </button>
            <p className="text-[16px] font-[500] font-montserrat ">
              Do not have an account <Link href="#">Sign in</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;