const Nav = (props) => {
    /* Todo : add routing functionality to this nav  */
    //class of current page 
    const active = 'nav-link  mx-2 p-1 rounded border-success border-4'
    //class of other pages 
    const inactive = 'nav-link  mx-2 p-1 rounded'
    const {changePage}=props
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
            <ul className="nav  col-sm" >
            <li className="nav-item">
                <button className={active} onClick= {(e)=>changePage(e.target.value)} value='home' >Home</button>
            </li>
            <li className="nav-item">
                <button className={inactive} onClick= {(e)=>changePage(e.target.value)} value='leader'>leader board</button>
            </li>
            <li className="nav-item">
                <button className={inactive} onClick= {(e)=>changePage(e.target.value)} value='create' >New Question</button>
            </li>
          
        </ul>
        <span className="navbar-text mx-2 pr-5" onClick= {()=>props.logOut()} value='login'>
        login
    </span>
        </nav>

    );


}
export default Nav;