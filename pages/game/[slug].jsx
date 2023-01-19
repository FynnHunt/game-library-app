import { getCoverUrl, getGameBySlug } from "../../helpers/gameSearchHelpers";
import PageLayout from "../../components/PageLayout";

const GamePage = ({ gameData, coverImageSrc }) => {
  console.log(gameData.artworks);
  return (
    <PageLayout>
      <div style={{ margin: "20px" }}>
        <h1>{gameData.name}</h1>
        <div style={{ display: "flex" }}>
          <img
            src={coverImageSrc}
            alt="game cover"
            style={{ marginRight: "20px" }}
          />
          <p>{gameData.summary}</p>
        </div>
      </div>
    </PageLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  const fullGameRes = await getGameBySlug(slug).catch((e) => console.log(e));
  const fullGame = fullGameRes?.body[0];

  const coverImageUrlRes = await getCoverUrl(fullGame?.cover).catch((e) =>
    console.log(e)
  );
  const coverImageSrc = `https:${coverImageUrlRes?.body[0]?.url}`;

  return {
    props: {
      gameData: fullGame,
      coverImageSrc,
    },
  };
};

export default GamePage;
