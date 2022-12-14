import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";
import LargeCard from "../components/large-card";
import MediumCard from "../components/medium-card";
import SmallCard from "../components/small-card";
import { ExploreDataType } from "../types/data";

type HomeProps = {
  explorableData: ExploreDataType[];
};

const Home: NextPage<HomeProps> = ({ explorableData }) => {
  const liveAnywhereData = explorableData.slice(0, 4);
  return (
    <div className="">
      <Head>
        <title>Choose your next destination!</title>
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explorableData.map((item) => {
              return <SmallCard {...item} key={`${item.image}-key`} />;
            })}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {liveAnywhereData.map((item) => {
              return <MediumCard {...item} key={`${item.image}-key`} />;
            })}
          </div>
        </section>

        <section>
          <LargeCard
            {...{
              title: "The Greatest Outdoors",
              image: explorableData[5].image,
              text: "Wishlist curated by AirBnB",
              buttonLabel: "Get inspired!",
            }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const explorableData = await fetch("/api/explore").then((res) => res.json());

  return {
    props: {
      explorableData,
    },
  };
}
