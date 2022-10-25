import Head from "next/head";

export default function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        ENV Anaytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
}

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Conneting to database with username ${user} and passowrd ${password}`
  );

  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { blogId: "1" } }],
//     fallback: false,
//   };
// }

// export async function getStaticProps() {
//   return {
//     props: {
//       title: "Article Ttile",
//       description: "Article description",
//     },
//   };
// }
