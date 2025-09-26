import Head from "next/head";
import { JSX } from "react";

/* 🔹 유틸리티 타입 - Readonly*/
type Goal = Readonly<{
  title: string;
  imgSrc: string;
  imgAlt: string;
}>;

/* 🔹 제네릭 문법
   - 어떤 타입 T 배열이든 받아 JSX로 바꿔주는 헬퍼 */
const mapToJsx = <T,>(
  items: T[],
  render: (item: T, index: number) => JSX.Element
): JSX.Element[] => items.map(render);

const goals: Goal[] = [
  { title: "1. 학점 3.5이상 받기", imgSrc: "/gpa.png", imgAlt: "GPA 목표" },
  { title: "2. next.js 통달하기", imgSrc: "/next.svg", imgAlt: "Next.js" },
  {
    title: "3. 몸무게 80kg 달성하기",
    imgSrc: "/muscle.png",
    imgAlt: "체중 목표",
  },
];

export default function Goals() {
  return (
    <>
      <Head>
        <title>My Goal of this semester</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="goal">
        <h1 className="goalofsemester">25-2 목표</h1>
      </div>

      <main className="goalWrap">
        {mapToJsx(goals, (g, i) => (
          <div className="goal" key={i}>
            <h1>{g.title}</h1>
            <img src={g.imgSrc} alt={g.imgAlt} />
          </div>
        ))}
      </main>
    </>
  );
}
