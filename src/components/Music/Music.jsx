import React from "react";
import s from "./Music.module.css";

function MusicItem(props) {
  return <div>Music - {props.musicItem}</div>;
}

let MusicData = [
  { id: 1, nameMusic: "Music 1" },
  { id: 2, nameMusic: "Music 2" },
  { id: 3, nameMusic: "Music 3" },
  { id: 4, nameMusic: "Music 4" },
];

let MusicElements = MusicData.map((m) => <MusicItem musicItem={m.nameMusic} />);

function Music() {
  return <div>{MusicElements}</div>;
}

export default Music;
