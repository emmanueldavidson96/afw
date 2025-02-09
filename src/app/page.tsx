import Image from "next/image";
import Banner from "./components/Banner";
import SeasonArea from "./components/SeasonArea";
import DiscoveryDevelopmentRepresentation from "./components/DiscoveryDevelopmentRepresentation";
import GetATicket from "./components/GetATicket";
import Schedule from "./components/Schedule";
import StayUpdated from "./components/StayUpdated";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-fit w-screen bg-[#000000]">
      <Header />
      <Banner />
      <SeasonArea />
      <DiscoveryDevelopmentRepresentation />
      <GetATicket />
      <Schedule />
      <StayUpdated />
      <Footer />
    </div>
  );
}
