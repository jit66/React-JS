export const Title = () => (

    <a href="/">
    <img 
    className="logo"
    alt="logo"
    src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
    />
    </a>
 )
 
const Header = () => {
   return (
     <div className="header">
       <Title/>
       <h1>REACTORS</h1>
     <div className="nav-items">
       <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>
       </ul>
     </div>
     </div>
   );
 };

 export default Header;