// import instagram from './image/insta.svg'
import mail from './image/mail.png';
import insta from './image/insta.png';
import twitter from './image/twitter.png';
import linkedin from './image/Link.png';
import git from './image/github.png';
const footer = () => {
    return (
        <div>
            <div class = "foot">
                <a href="mailto:emailtesting998877@gmail.com" target="_blank" alt="E-mail"><img src={mail}/></a>
                <a href="https://www.instagram.com/rajkoradiya03/" target="_blank" alt="Inatagram"><img src={insta}/></a>
                <a href="https://twitter.com/RajKoradiya03" target="_blank" alt="Twitter"><img src={twitter}/></a>
                <a href="https://www.linkedin.com/in/raj-koradiya-5b2b5b214/" target="_blank" alt="LinkedIn"><img src={linkedin}/></a>
                <a href="https://github.com/RajKoradiya" target="_blank" alt="GitHub"><img src={git}/></a>
            </div>
        </div>
    );
};

export default footer;