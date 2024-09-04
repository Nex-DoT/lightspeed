/* -------------------------- icons for online pos -------------------------- */
import { FaRegClock } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { GiSlicedBread } from "react-icons/gi";

/* ------------------------- country picks for input ------------------------ */
import pictureUS from "../image/country/us.svg";
import pictureFR from "../image/country/fr.svg";

/* ----------------------------- Pos Score picks ---------------------------- */
import score1 from "../image/starts/1.png";
import score2 from "../image/starts/2.png";
import score3 from "../image/starts/3.png";
import score4 from "../image/starts/4.png";
import score5 from "../image/starts/5.png";

/* --------------------------- Collaboration picks -------------------------- */
import pic1 from "../image/businesses/1.png";
import pic2 from "../image/businesses/2.png";
import pic3 from "../image/businesses/3.png";
import pic4 from "../image/businesses/4.png";
import pic5 from "../image/businesses/5.png";
import pic6 from "../image/businesses/6.png";
import pic7 from "../image/businesses/7.png";
import pic8 from "../image/businesses/8.png";
import pic9 from "../image/businesses/9.png";

/* ------------------------------- review pics ------------------------------ */
import review1 from "../image/reviews/1.png";
import review2 from "../image/reviews/2.png";
import review3 from "../image/reviews/3.png";

/* ------------------------------- button icon ------------------------------ */
import { RiTShirt2Line } from "react-icons/ri";
import { IoRestaurantOutline } from "react-icons/io5";
import { TbGolf } from "react-icons/tb";

// Exporting Datas
export const SoftwareText = [
  "Work on any device, anywhere you are, with cloud-based tools",
  "Access your reports and data from any locatio",
  "Monitor inventory levels from anywhere, and manage stock between locations as needed",
];

export const PaymentsText = [
  "Accept popular payment methods, like credit, debit, cash and contactless mobile payments like Apple Pay and Google Pay.",
  "Secure your transactions with built-in fraud detection, end-to-end encryption and PCI compliant hardware.",
  "Keep more of your hard-earned money with an affordable rate starting at 2.6% + $0.10.",
];

export const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

export const DataPosOnline = [
  {
    icon: <FaRegClock />,
    title: "Get started quickly",
    description:
      "Set up your online store for your retail shop quickly with free, easy-to-use professional themes that help build your brand",
  },
  {
    icon: <IoStatsChart />,
    title: "Work efficiently",
    description:
      "Seamlessly sync sales and inventory data between your eCom shop and POS system to streamline operations and prevent out of stock issues",
  },
  {
    icon: <GiSlicedBread />,
    title: "Connect your restaurant",
    description:
      "Give diners a way to browse your menu ahead of time and offer online ordering for pickup or delivery",
  },
];

export const DataInput = [
  {
    name: "Full name",
    type: "text",
  },
  {
    name: "Email address",
    type: "email",
  },
  {
    name: "Phone number",
    type: "number",
    selectCountry: {
      flag: pictureFR,
      code: "+98",
      options: [
        { code: "+33", img: pictureFR },
        { code: "+1", img: pictureUS },
        // سایر کشورها
      ],
    },
  },
  {
    title: "Product",
    select: ["product1", "product2", "product3"],
  },
];

export const scorePicks = [score1, score2, score3, score4, score5];

export const reviewData = [
  {
    img: review1,
    title: '"Lightspeed is the ultimate POS system."',
    description:
      '"Ive loved it from the start, it continues to meet all of the needs I have for my Women’s Boutique. This was an excellent decision and has helped us build our business from day one."',
    rating: "Rated 5 out of 5",
  },
  {
    img: review2,
    title: "“I wish we switched to Lightspeed sooner!”",
    description:
      '"Switching to Lightspeed has allowed us to be high tech! It keeps our online and in store inventory perfect and our online orders are constantly synced to our POS! It is AWESOME!"',
    rating: "Rated 4.2 out of 5",
  },
  {
    img: review3,
    title: "“Easy learning curve for quick launch.”",
    description:
      "“Lightspeed Restaurant is a great POS. It’s easy to use with a great interface and integrated accounting software. Pulse the help menu and videos are actually useful & really work.”",
    rating: "Rated 4 out of 5",
  },
];

export const btnData = [
  {
    icon: <RiTShirt2Line />,
    name: "Retail",
  },
  {
    icon: <IoRestaurantOutline />,
    name: "Restaurant",
  },
  {
    icon: <TbGolf />,
    name: "Golf",
  },
];
