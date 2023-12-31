import { logo } from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center  w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button type="button" className="black_btn" onClick={() => window.open("https://github.com/jayd0001/chatify.git")}>
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient">Chatify Summarizer</span>
      </h1>
      <h2 className="desc">Enhance your reading experience with Chatify Summarize, an innovative open-source tool designed to distill lengthy articles into concise and lucid summaries.</h2>
    </header>
  )
}

export default Hero
