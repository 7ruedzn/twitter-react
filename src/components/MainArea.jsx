import MainItem from './MainItem'

const MainArea = () => {
  return (
    <main className="main-area">
      <MainItem 
        avatarURL="https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg" 
        title="userLogo"
        username="username"
        usernameAt="@username"/>
    </main>
  );
};

// const mainStyle = {
//     backgroundColor: 'green',
//     height: '100%'
// }

// ReactDOM.render(<MainArea />, document.querySelector('.mainArea'))

export default MainArea;
