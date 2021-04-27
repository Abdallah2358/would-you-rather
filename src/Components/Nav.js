const Nav = () => {
    /* Todo : add routing functionality to this nav  */
    //class of current page 
    const active = 'nav-link  mx-2 p-1 rounded border-success border-4'
    //class of other pages 
    const inactive = 'nav-link  mx-2 p-1 rounded'
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav  col-sm" >
            <li className="nav-item">
                <button className={active}>Home</button>
            </li>
            <li className="nav-item">
                <button className={inactive}>leader board</button>
            </li>
            <li className="nav-item">
                <button className={inactive}>New Question</button>
            </li>
          
        </ul>
        <span className="navbar-text mx-2 pr-5">
        login
    </span>
        </nav>

    );


}
export default Nav;