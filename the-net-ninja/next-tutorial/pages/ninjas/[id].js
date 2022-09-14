// This runs before the components gets rendered
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data?.map((ninja) => {
    return {
      params: { id: ninja.id.tostring() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

const ninjaDetails = () => {
  return (
    <div>
      <h1>Details pages</h1>
    </div>
  );
};

export default ninjaDetails;
