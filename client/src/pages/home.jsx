import { CarouselCustomNavigation } from "./../components/carousel1";
import { FooterWithSocialLinks } from "./../components/footer";
import { MegaMenuWithHover } from "./../components/navbar";
import "./../index.css";
import React from "react";
import {  Fragment, useState } from "react";
export default function Home() {
  // const [showSignUp, setShowSignUp] = useState(true);

  return (
    <Fragment>
    <div>

      <MegaMenuWithHover className="fixed top-0 left-0 z-20" />
      <CarouselCustomNavigation className="z-2" />
      <FooterWithSocialLinks className="z-10"/> 
    </div>,

      </Fragment>
  );
}
