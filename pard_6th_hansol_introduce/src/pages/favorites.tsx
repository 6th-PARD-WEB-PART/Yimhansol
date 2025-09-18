import Head from "next/head";

export default function Goals() {
  return (
    <>
      <Head>
        <title>My favorites</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="favorite">
        <h1 className="myfavorite">좋아하는것</h1>
      </div>

      <main className="favoritesWrap">
        <div className="favorite">
          <h1 className="first">축구</h1>
          <img className="football" src="/football.avif" alt="축구" />
        </div>
        <div className="favorite">
          <h1 className="second">헬스</h1>
          <img className="workout" src="/chris-bumstead.webp" alt="헬스" />
        </div>
        <div className="favorite">
          <h1 className="third">당구</h1>
          <img className="billiard" src="/billiard.webp" alt="당구" />
        </div>
      </main>
    </>
  );
}
