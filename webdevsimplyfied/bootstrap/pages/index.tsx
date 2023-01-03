import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="box"></div>
          </div>
          <div className="col-4">
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
}
