import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Sidenav from "./Components/elements/Sidenav";
import Footer from "./Components/elements/Footer";

import Shikharji from "./Components/shikharji/Shikharji";

import Tirthankara from "./Components/tirthankara/Tirthankara";
import DetailTirthankara from "./Components/tirthankara/DetailTirthankara";

import About from "./Components/pages/About";
import Support from "./Components/pages/Support";
import Gototop from "./Components/elements/Gototop";
import Explore from "./Components/pages/Explore";
import Qrcode from "./Components/elements/Qrcode";
import Scrolltotop from "./Components/elements/Scrolltotop";
import Nothing from "./Components/pages/Nothing";
import Communities from "./Components/pages/Communities";

import Blogs from "./Components/blogs/Blogs";
import DetailBlog from "./Components/blogs/DetailBlog";

import Jainism from "./Components/jainism/Jainism";
import {
  Art,
  Cosmology,
  Philosophy,
  Practice,
  Principle,
  Texts,
} from "./Components/jainism/FeatureJainism";

import DetailTemple from "./Components/temples/DetailTemple";
import Temples, { AllTemples } from "./Components/temples/Temples";
import {
  CaveTemple,
  IndianTemple,
  MainTemple,
  PakistanTemple,
  WorldTemple,
} from "./Components/temples/TypesTemple";
import {
  Hotels,
  Local,
  Tonks,
  Mountain,
  Temple,
  Wildlife,
} from "./Components/shikharji/FeatureShikharji";
import DetailJainism from "./Components/jainism/DetailJainism";
import Donate from "./Components/elements/Donate";

function App() {
  return (
    <>
      <Sidenav />
      <Scrolltotop />
      <Gototop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nothing />} />

        <Route path="/shikharji" element={<Shikharji />} />
        <Route path="/shikharji/parasnath" element={<Mountain />} />
        <Route path="/shikharji/temples" element={<Temple />} />
        <Route path="/shikharji/tonks" element={<Tonks />} />
        <Route path="/shikharji/wildlife" element={<Wildlife />} />
        <Route path="/shikharji/local" element={<Local />} />
        <Route path="/shikharji/hotels" element={<Hotels />} />

        <Route path="/tirthankara" element={<Tirthankara />} />
        <Route path="/tirthankara-detail/:id" element={<DetailTirthankara />} />

        <Route path="/jainism" element={<Jainism />} />
        <Route path="/jainism/:id" element={<DetailJainism />} />
        <Route path="/jainism/cosmology" element={<Cosmology />} />
        <Route path="/jainism/art" element={<Art />} />
        <Route path="/jainism/practice" element={<Practice />} />
        <Route path="/jainism/philosophy" element={<Philosophy />} />
        <Route path="/jainism/principle" element={<Principle />} />
        <Route path="/jainism/texts" element={<Texts />} />

        <Route path="/temple" element={<Temples />} />
        <Route path="/temple/all" element={<AllTemples />} />
        <Route path="/temple-detail/:id" element={<DetailTemple />} />
        <Route path="/temple/cave" element={<CaveTemple />} />
        <Route path="/temple/main" element={<MainTemple />} />
        <Route path="/temple/world" element={<WorldTemple />} />
        <Route path="/temple/indian" element={<IndianTemple />} />
        <Route path="/temple/pakistan" element={<PakistanTemple />} />

        <Route path="/explore" element={<Explore />} />
        <Route path="/community" element={<Communities />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/qr" element={<Qrcode />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-detail/:id" element={<DetailBlog />} />
      </Routes>
      <Donate />
      <Footer />
    </>
  );
}

export default App;
