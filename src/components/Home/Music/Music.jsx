import React, { useEffect } from "react";
import Muse from "../../../assets/faded.mp3";
import { Howl, Howler } from "howler";

function Aud() {
  const sound = new Howl({
    src: Muse,
    autoplay: true
  });

  useEffect(() => {
    console.log("In useEffect");
    sound.play();
    Howler.volume(0.2);
  }, []);

  return <div></div>;
}

export default Aud;
