import Menu from "../orgonism/menu";
import PosSystem from "../orgonism/first-page/pos-system";
import ManageBusiness from "../orgonism/first-page/pos-feature";
import Software from "../orgonism/first-page/cloud-based";
import Collaboration from "../orgonism/first-page/collaboration";
import Payments from "../orgonism/first-page/payments";
import OnlinePOSFeature from "../orgonism/first-page/online-pos-feature ";
import Connect from "../orgonism/first-page/connect";
import PosScore from "../orgonism/first-page/pos-score";
import ReviewComponent from "../orgonism/first-page/reviews-component";
import BtnsComponent from "../orgonism/first-page/btns-component";
import VideoLightspeed from "../orgonism/first-page/contact-for-video";
import QuestionsAbPos from "../orgonism/first-page/questions-ab-pos";
import Footer from "../orgonism/footer";
const FirstPage = () => {
  return (
    <div className=" w-full 2xl:w-11/12 flex flex-col items-center">
      <Menu />
      <PosSystem />
      <ManageBusiness />
      <Software />
      <Collaboration />
      <Payments />
      <OnlinePOSFeature />
      <Connect />
      <PosScore />
      <ReviewComponent />
      <BtnsComponent />
      <VideoLightspeed />
      <QuestionsAbPos />
      <Footer />
    </div>
  );
};

export default FirstPage;
