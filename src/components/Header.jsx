const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <div>
                    <h2 className='header-title'>My Tinerary</h2>
                </div>
                <div className="nav-bar">
                    <a href="#">Home</a>
                    <a href="#">Cities</a>

                    <div className="logIn">
                        <a href="#"><img src="./public/usuario.svg" width={25} alt="logIn" /></a>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
