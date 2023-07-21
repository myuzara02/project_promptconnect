import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Temukan & Bagikan
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    PromptConnect adalah alat bantu prompt AI open-source untuk dunia modern yang memungkinkan pengguna untuk menemukan, menciptakan, dan berbagi pemacu kreatif.
    </p>

    <Feed />
  </section>
);

export default Home;