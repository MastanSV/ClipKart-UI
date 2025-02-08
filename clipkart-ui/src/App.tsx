import './App.css'
import ClipKartAppBar from './components/common/ClipKartAppBar';
import SignIn from './components/user/SignIn'


function App() {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100vh', boxSizing: 'border-box'}}>
      <ClipKartAppBar />
      <SignIn />
    </div>
  )
}

export default App;
