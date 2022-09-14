// This runs before the components gets rendered
// How many HTML pages need to be made from our data?
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    // next knows how many pages need to made from the number of paths
    paths: paths,
    fallback: false,
  };
};

// For each of the paths this runs and fetch each item we need
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { ninja: data },
  };
};

// Putting data in here to generate a templete for each of the pages
const ninjaDetails = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      {/* <p>{ninja.address.city}</p> */}
    </div>
  );
};

export default ninjaDetails;
