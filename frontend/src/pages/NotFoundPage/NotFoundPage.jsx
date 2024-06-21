import './NotFoundPage.scss'
import {NavLink} from 'react-router-dom';


function NotFoundPage() {
    return (
      <main className = "not-found__container">
        <h1 className = "not-found__main-message">SORRY</h1>
        <h2 className = "not-found__second-message">we couldn't find that page</h2>
        <NavLink to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}><h3 className = "not-found__redirect"> Back to BrainFlix</h3></NavLink>
      </main>
    );
  }

  export default NotFoundPage
