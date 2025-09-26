import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Head from "next/head";
import Link from "next/link";

/* 🔹 타입 별칭 */
type RC = "손양원" | "토레이" | "카이퍼" ;

/* 🔹 인터페이스 사용*/
interface BaseProfile {
  age: number;
  mbti: string;
}

// BaseProfile 인터페이스 상속 ->> StudentProfile 
interface StudentProfile extends BaseProfile {
  rc: RC; // 타입 별칭 RC 사용
  phone: string;
  studentId: number;
  name: string;
}

/* 🔹 화살표 함수 renderProfileItem
       목록 만들기를 화살표함수를 사용하여 함수화 */
const renderProfileItem = (label: string, value: string) => (
  <li>
    {label} : {value}
  </li>
);

export default function Home() {
  const profile: StudentProfile = {
    age: 23,
    rc: "손양원",
    mbti: "ESTP",
    phone: "010-2729-2467",
    studentId: 22200628,
    name: "임한솔",
  };

  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="wrapper">
        <div className="left_element">
          {/* 프로필 */}
          <div className="introducing">
            <ul className="list">
              {renderProfileItem("Age", String(profile.age))}
              {renderProfileItem("RC", profile.rc)}
              {renderProfileItem("MBTI", profile.mbti)}
              {renderProfileItem("Phone", profile.phone)}
              {renderProfileItem("Student ID", String(profile.studentId))}
            </ul>
          </div>
        </div>

        <div className="middle_element">
          {/* 프로필 사진 */}
          <div className="profile">
            <img className="hansol" src="/hansol.png" alt="나" />
            <h1 className="nametag">{profile.name}</h1>
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
