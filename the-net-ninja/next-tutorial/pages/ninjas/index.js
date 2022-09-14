import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

// This runs before the components gets rendered
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { ninjas: data },
  };
};

const ninjas = ({ ninjas }) => {
  // console.log(ninjas);
  return (
    <div>
      <h1>All Ninjas Welcome!</h1>
      {ninjas?.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ninjas;
