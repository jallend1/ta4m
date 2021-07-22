import { useEffect, useState } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Podcast from './Components/Podcast';
import Sidebar from './Components/Sidebar';
import TitleBar from './Components/TitleBar';

function App() {
  const [episodes, setEpisodes] = useState([]);

  // Sample and possibly unnecessarily complicated approach on how to get all the episode data
  const fetchEpisodes = () => {
    const ta4mRSS = 'https://therearefourmics.libsyn.com/rss';
    const parser = new DOMParser();
    fetch(ta4mRSS)
      .then((res) => res.text())
      .then((rssFeed) => parser.parseFromString(rssFeed, 'text/xml'))
      .then((data) => {
        const episodes = data.querySelectorAll('item');
        const episodeArray = [];
        episodes.forEach((episode) => {
          const episodeDetails = {
            title: episode.children[0].textContent,
            pubDate: episode.children[2].textContent,
            key: episode.children[3].textContent,
            briefDescription: episode.children[13].textContent,
            fullDescription: episode.children[6].textContent,
            link: episode.children[8].attributes[2].nodeValue,
            length: episode.children[9].textContent
          };
          episodeArray.push(episodeDetails);
        });
        setEpisodes(episodeArray);
      });
  };

  useEffect(fetchEpisodes, []);

  return (
    <div className="App">
      <Header latestEpisode={episodes.length > 1 && episodes[0]} />
      <div className="container" id="episodes">
        <TitleBar />
        <NavBar />
        <Sidebar />
        <main className="post-index">
          <div className="index-left"></div>
          <div>
            {episodes &&
              episodes.map((episode) => (
                <Podcast episode={episode} key={episode.key} />
              ))}
          </div>
          <div className="index-right"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
