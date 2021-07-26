import TitleBar from './TitleBar';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Podcast from './Podcast';

const Main = ({ episodes }) => {
  return (
    <>
      <div className='container' id='episodes'>
        <TitleBar />
        <NavBar />
        <SideBar />
        <main className='post-index'>
          <div className='index-left'></div>
          <div>
            {episodes &&
              episodes.map((episode) => (
                <Podcast episode={episode} key={episode.key} />
              ))}
          </div>
          <div className='index-right'></div>
        </main>
      </div>
    </>
  );
};

export default Main;
