import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Back from "../modal/Back";
import axios from "axios";
import "./Historydetail.css";
import "./History.css";
import "../modal/Back.css";

const Historydetail = () => {
  const [histdetYes, setHistdetYes] = useState([]);
  const [histdetNo, setHistdetNo] = useState([]);

  const location = useLocation();
  const histId = location.state.histId;

  const audioStart = (path) => {
    var audio = new Audio(path);
    audio.load();
    audio.volume = 1;
    audio.play();
    console.log(path);
  };

  useEffect(() => {
    axios
      .get(`http://i8c101.p.ssafy.io/api/history/${histId}`)
      .then((response) => {
        const histdet = response.data;
        setHistdetYes(
          histdet.wordResult.map((histdet) => {
            if (histdet.is_correct === true) {
              return (
                <div key={histdet.historyId} className="historydetailContainer">
                  <div></div>
                  <img
                    src={histdet.image_path}
                    alt="단어그림"
                    className="detailImg"
                  ></img>
                  <div className="historydetailcontent txt">
                    {histdet.word_name}
                  </div>
                  <div
                    className="historydetailcontent histaudio"
                    onClick={audioStart(histdet.audio_path)}
                  >
                    🎧
                  </div>
                  <div></div>
                </div>
              );
            }
          })
        );
        setHistdetNo(
          histdet.wordResult.map((histdet) => {
            if (histdet.is_correct === false) {
              return (
                <div key={histdet.historyId} className="historydetailContainer">
                  <div></div>
                  <img
                    src={histdet.image_path}
                    alt="단어그림"
                    className="detailImg"
                  ></img>
                  <div className="historydetailcontent txt">
                    {histdet.word_name}
                  </div>
                  <div
                    className="historydetailcontent histaudio"
                    onClick={audioStart(histdet.audio_path)}
                  >
                    🎧
                  </div>
                  <div></div>
                </div>
              );
            }
          })
        );
      });
  }, [histId]);

  return (
    <div className="historyDetailBox">
      <div className="histHeader">
        <Back />
      </div>
      <div className="passorfail">
        <h1 className="detailMainText txt">🙆🏻‍♀️ 잘했어요 🙆🏻‍♂️</h1>
        <h1 className="detailMainText txt">🙅🏻‍♀️ 아쉬워요 🙅🏻‍♂️</h1>
        <div className="historydetailContainer">
          <div></div>
          <div className="histdetailtitle txt">그림</div>
          <div className="histdetailtitle txt">단어</div>
          <div className="histdetailtitle txt">음성듣기</div>
          <div></div>
        </div>
        <div className="historydetailContainer">
          <div></div>
          <div className="histdetailtitle txt">그림</div>
          <div className="histdetailtitle txt">단어</div>
          <div className="histdetailtitle txt">음성듣기</div>
          <div></div>
        </div>
      </div>
      <hr className="detailLine"></hr>
      <div className="passorfail">
        <div>{histdetYes}</div>
        <div>{histdetNo}</div>
      </div>
    </div>
  );
};

export default Historydetail;
