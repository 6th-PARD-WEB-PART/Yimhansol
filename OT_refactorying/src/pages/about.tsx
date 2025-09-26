import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/*wrapper - left, middle, right element를 담는 클래스*/}
      <div className="wrapper">
        <div className="left_element">
          {/* 프로필 */}
          <div className="introducing">
            <ul className="list">
              <li className="short">Age : 23</li>
              <li className="short">RC : 손양원</li>
              <li className="short">MBTI : ESTP</li>
              <li className="long">Phone : 010-2729-2467</li>
              <li className="long">Student ID : 22200628</li>
            </ul>
          </div>
        </div>

        <div className="middle_element">
          {/* 프로필 사진 */}
          <div className="profile">
            <img className="hansol" src="/hansol.png" alt="나" />
            <h1 className="nametag">임한솔</h1>
          </div>
        </div>

        <div className="right_element">
          {/* 시간표 */}
          <div className="timetable">
            <img className="eta" src="/timetable.png" alt="시간표" />
          </div>
          <h2 className="title">TimeTable</h2>
        </div>
      </div>
      {/* 다른 페이지로 이동 */}
      <div className="movetopage">
        <Link href="/goals">
          <button>이번학기 목표페이지로~</button>
        </Link>
        <p></p>
        <Link href="/favorites">
          <button>좋아하는 것 3가지 페이지로~</button>
        </Link>
      </div>
    </>
  );
}
