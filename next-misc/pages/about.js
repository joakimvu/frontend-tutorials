import Footer from "../components/Footer";

export default function About() {
  return <h1 className="content">About</h1>;
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
