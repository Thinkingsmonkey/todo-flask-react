import Banner from "./Banner";
import Navbar from "./Navbar";
const Header = ({ handleEdit }) => {

  return ( 
    <header className="bg-secondary">
      <Navbar />
      <Banner handleEdit={handleEdit}/> 
    </header>
   );
}
 
export default Header
;