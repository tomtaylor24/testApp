import { Link } from 'react-router-dom';

const Header =  () => {
  return(
    <header>
      <Link to="/"><h1>Blog</h1></Link>
      <Link to="/contact"><p>お問い合わせ</p></Link>
    </header>
  )
}

export default Header;
