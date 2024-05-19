import Nav from './components/Nav';
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="home bg-black bck flex flex-col flex-1 min-h-screen">
      <div className="rad"></div>
      <Nav/>
      <Hero/>
    </div>
  );
}
