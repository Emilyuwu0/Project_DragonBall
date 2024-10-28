
import GifLoading from "../../../assets/goku-dragon-ball.gif"
const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     <img src={GifLoading} alt="loading"/>
    </div>
  );
};

export default Loading;
