const GithubSummery = () => {
  return (
    <div
      id="github-summery"
      className="w-full h-[1200px] flex flex-col gap-5 p-10"
    >
      <h1 className="text-3xl text-center">
        Github Profile <span className="text-teal-400">Summery</span>
      </h1>
      <iframe
        className="rounded-md"
        height="100%"
        width="100%"
        src="https://profile-summary-for-github.com/user/spsanchore13"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default GithubSummery;
