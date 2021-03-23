import MainItem from './MainItem'
import MainItemPhoto from './MainItemPhoto';

const MainArea = () => {
  return (
    <main className="main-area">
      <MainItem 
        avatarURL="https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg" 
        title="userLogo"
        username="elGatito"
        usernameAt="@caterino"
        tweet="Hello People!"
        likes="34"
        rts="4"
        comments="5"/>
      <MainItemPhoto 
        avatarURL="https://images.unsplash.com/photo-1616507975899-28d32c714569?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80" 
        title="userLogo"
        username="cakeslicous"
        usernameAt="@iLUVcakes"
        photoURL="https://images.unsplash.com/photo-1616434963536-02c5002683d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
        tweet="Nice photo i took eyesterday"
        likes="10.8k"
        rts="6565"
        comments="2334"/>
      <MainItemPhoto 
        avatarURL="https://images.unsplash.com/photo-1616465470189-573a865a63ca?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        title="userLogo"
        username="John Peterson"
        usernameAt="@JPetersonnn"
        photoURL="https://images.unsplash.com/photo-1616500402073-989d229e4e10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        tweet="Quebec, Canada"
        likes="34"
        rts="56"
        comments="67"/>
      <MainItem 
        avatarURL="https://images.unsplash.com/photo-1553701879-4aa576804f65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" 
        title="userLogo"
        username="Teymi"
        usernameAt="@TTownsend"
        tweet="Happy Friday!"
        likes="45"
        rts="556"
        comments="455"/>
    </main>
  );
};

// const mainStyle = {
//     backgroundColor: 'green',
//     height: '100%'
// }

// ReactDOM.render(<MainArea />, document.querySelector('.mainArea'))

export default MainArea;
