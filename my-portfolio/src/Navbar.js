import Logo from './image/log.svg';
const navbar = () => {
    return (
        <nav class="navbar">
            <div class = "nav">
                <a href = "#">Home</a>
                <a href = "#">About</a>
                <a href = "#">Project</a>
                <a href = "#">Contect</a>
            </div>
            <div class = "hadding">
                <img src={Logo}/>
                <a href = "#">Raj Koradiya</a>
            </div>
        </nav>
    );
};
export default navbar;