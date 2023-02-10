import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back from "../modal/Back";
import axios from "axios";
import "./History.css";

const History = () => {
  const [hist, setHists] = useState([]);
  const [histchild, setHistchild] = useState([]);

  useEffect(() => {
    axios.get("http://i8c101.p.ssafy.io/api/history").then((response) => {
      setHists(response.data);
      console.log(hist[0]);
      console.log(hist[0].historyId);
      setHistchild(
        hist.map((hist) => {
          return (
            <div key={hist.historyId} className="historyContainer">
              <div className="historycontent txt">{hist.studyDate}</div>
              <div className="historycontent txt">{hist.story}</div>
              <div className="historycontent txt">{hist.starPoint}</div>
              <div className="historycontent txt">
                <Link
                  to={`/history/${hist.historyId}`}
                  style={{ textDecoration: "none" }}
                >
                  👀 보러가자
                </Link>
              </div>
            </div>
          );
        })
      );
    });
  });

  return (
    <div>
      <div>
        <Back />
      </div>
      <div className="historyBox">
        <h3 className="histMainText txt">📝 학습기록 🎧</h3>
        <div className="historyContainer">
          <div className="historytitle txt">학습날짜</div>
          <div className="historytitle txt">학습동화</div>
          <div className="historytitle txt">별점</div>
          <div className="historytitle txt">자세히보기</div>
        </div>
        <hr className="histLine"></hr>
        {histchild}
      </div>
    </div>
  );
};

export default History;
