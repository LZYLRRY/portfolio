import './Intro.css';
import { Link } from 'react-scroll';
import { FaSuitcase } from "react-icons/fa";
import profile from '../../assets/portfolio-profile.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introduction">I'm <span className="introName">Verhagen</span><br />Website Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites.</p>
                <Link alt='Hire me'><button className="btn"><FaSuitcase className='btnIcon'/>Hire me</button></Link>
            </div>
            <img src={profile} alt='Hire me' className='bg'/>
        </section>
    );
}

export default Intro;
