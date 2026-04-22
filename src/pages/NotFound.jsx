import { Link } from "react-router";

function NotFound() {
 return (
 <div>
 <h1>404 - Nu exista Pagina </h1>
 <Link to="/"> Back to Home </Link>
 </div>
 );
}
export default NotFound;