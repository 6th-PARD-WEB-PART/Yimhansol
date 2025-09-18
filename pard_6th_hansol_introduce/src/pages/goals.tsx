import Head from "next/head";

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
        <div className="goal">
          <h1 className="first">1. 학점 3.5이상 받기</h1>
          <img className="gpa" src="/gpa.png" alt="GPA 목표" />
        </div>
        <div className="goal">
          <h1 className="second">2. node.js 통달하기</h1>
          <img className="nodejs" src="/nodejs-icon.svg" alt="Node.js" />
        </div>
        <div className="goal">
          <h1 className="third">3. 몸무게 80kg 달성하기</h1>
          <img className="weight" src="/muscle.png" alt="체중 목표" />
        </div>
      </main>
    </>
  );
}
