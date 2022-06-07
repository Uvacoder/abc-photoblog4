import files from "../util/pub";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Head from "next/head";

const pee = (props) => {
  return (
    <div>
      <Head>
        <title>CodeDay Mumbai Winter 2022</title>
        <meta name="title" content="CodeDay Mumbai Winter 2022" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codeday.org/mumbai" />
        <meta property="og:title" content="CodeDay Mumbai Winter 2022" />
        <meta
          property="og:image"
          content="https://cloud-65gi2qqov-hack-club-bot.vercel.app/0cdm_22_march.mp4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://codeday.org/mumbai" />
        <meta property="twitter:title" content="CodeDay Mumbai Winter 2022" />
        <meta
          property="twitter:image"
          content="https://cloud-65gi2qqov-hack-club-bot.vercel.app/0cdm_22_march.mp4"
        />
      </Head>
      <style jsx global>{`
        .my-masonry-grid {
          display: -webkit-box; /* Not needed if autoprefixing */
          display: -ms-flexbox; /* Not needed if autoprefixing */
          display: flex;
          margin-left: -15px; /* gutter size offset */
          margin-right: 15px;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 2rem; /* gutter size */
          background-clip: padding-box;
        }

        /* Style your items */
        .my-masonry-grid_column > div {
          /* change div to reference your elements you put in <Masonry> */
          margin-bottom: 2rem !important;
          padding: 15px;
          padding-bottom: 20px;
          background-color: #d9ecf1;
          border-radius: 5px;
          overflow: hidden;
          transition: 1s;
        }
        .my-masonry-grid_column > div:hover {
          cursor: pointer;
          opacity: 90%;
          top: -5px;
          -webkit-box-shadow: 0px 4px 10px 7px rgba(0, 0, 0, 0.28);
          box-shadow: 0px 4px 10px 7px rgba(0, 0, 0, 0.28);
        }
        .title {
          font-family: "Futura", "Avenir Next", "Nunito", "Arial";
          padding: 5vw;
        }
      `}</style>
      <div className="title">
        <h1 style={{}}>Codeday Mumbai Winter 2022 Photos</h1>
        <p>
          Learn more at{" "}
          <a href="https://codeday.org/mumbai">codeday.org/mumbai</a>
        </p>
      </div>
      <Masonry
        breakpointCols={{
          default: 3,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {files.map((v) => (
          <Image src={v.link} width={v.width} height={v.height} />
        ))}
        <iframe
          src="https://cloud-65gi2qqov-hack-club-bot.vercel.app/0cdm_22_march.mp4"
          width={360}
          height={640}
        />
      </Masonry>
    </div>
  );
};
export default pee;
