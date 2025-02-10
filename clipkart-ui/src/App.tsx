import './App.css'
import ClipKartAppBar from './components/common/ClipKartAppBar';
import SignIn from './components/user/SignIn'
import Product from './components/products/Product';
import ProductsList from './components/products/ProductsList';


function App() {
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100vh', boxSizing: 'border-box'}}>
      <ClipKartAppBar />
      
      <ProductsList />
      
    </div>
  )
}

export default App;
