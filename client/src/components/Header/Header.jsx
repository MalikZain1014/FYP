import './Header.css'
const Header = ({ smallTitle, largetTitle }) => {
    return (
        <header className='generalHeader'>
            <div className="overlay_general">
                <p>{smallTitle}</p>
                <h1>{largetTitle}</h1>
            </div>
        </header>
    )
}

export default Header