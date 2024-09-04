/* --------------------------- imported component --------------------------- */
import FooterList from "../atom/footer-list";
/* ---------------------------------- data ---------------------------------- */
import { footerData } from "../../utils/footer-data";
import { footerIcon } from "../../utils/footer-data";
/* ---------------------------------- icon ---------------------------------- */
import logo from "../../image/logo.png";

const Footer = () => {
  return (
    <footer className=" w-full bg-4 p-7 md:p-24">
      <section className="w-full flex items-center justify-between flex-wrap gap-2 md:gap-24">
        {footerData.map((item, index) => (<FooterList key={index} list={item} />))}
      </section>

      <hr />

      <section className="flex flex-wrap-reverse items-start justify-center gap-7 md:justify-between pt-7 md:pt-14">
        <div className="w-32"></div>
        <div className="text-white flex flex-col items-center md:items-start gap-7">
          <div className="text-2xl flex items-center gap-6">
            {footerIcon.map((item, index) => (<span className="hover:opacity-70 cursor-pointer" key={index}>{item}</span>))}
          </div>
          <p className="text-sm font-semibold">Lightspeed® 2024</p>
          <span className="flex text-sm w-36 items-center justify-between">
                <a href="" className=" hover:text-orange-500 hover:underline">US(EN)</a>
                <a href="" className=" hover:text-orange-500 hover:underline">Privacy policy</a>
          </span>
        </div>
        <img src={logo} alt="logo" className="w-40 filter invert" />
      </section>
    </footer>
  );
};

export default Footer;
