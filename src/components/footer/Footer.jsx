import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8px] grid grid-cols-5 m-auto items-start justify-center">
      {/* Logo */}
      <div>
        <div className="">
          <h1 className="text-[25px] pb-[1.5rem] text-white">
            <strong>Hello</strong>Logo
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ut!
        </p>
      </div>
      {/* Company */}
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3 text-white">
          <li className="list-none opacity-[.7] hover:opacity-[1]">About US</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">Features</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">News</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      {/* Contact */}
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact
        </span>
        <div className="grid gap-3 text-white">
          <li className="list-none opacity-[.7] hover:opacity-[1]">About US</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">Features</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">News</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      {/* Support */}
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3 text-white">
          <li className="list-none opacity-[.7] hover:opacity-[1]">About US</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">Features</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">News</li>
          <li className="list-none opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      {/* Contact Info and social links */}
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <small className="text-[14px] text-white">someCollEmail@mail.com</small>
        <div className="flex gap-4 py-[1rem]">
          <AiFillInstagram className="text-white text-[3rem] cursor-pointer" />{" "}
          <AiFillFacebook className="text-white text-[3rem] cursor-pointer" />{" "}
          <AiFillTwitterCircle className="text-white text-[3rem] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
