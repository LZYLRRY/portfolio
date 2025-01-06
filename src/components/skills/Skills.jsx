import './Skills.css';
import appImg from '../../assets/app.png';
import webImg from '../../assets/web.png';
import uiImg from '../../assets/ux.png';


const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum itaque veniam beatae a sapiente architecto repellendus non aperiam quam maxime et ipsam ducimus molestiae vero, voluptatem, dolore fuga ea sed eveniet veritatis eligendi rem laboriosam, hic dolorum. Nihil vel odit dolorum, ut assumenda beatae quia consectetur optio amet molestias temporibus.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={uiImg} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, molestias quisquam! Molestiae eius qui repellendus nesciunt nobis similique quae nisi enim, fuga assumenda aspernatur veniam?</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webImg} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ducimus reprehenderit explicabo reiciendis eum neque facilis quo. Expedita maxime omnis sed quod officiis enim repellat, dolorem eligendi, possimus quisquam non?</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appImg} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi rerum molestias error officiis quisquam quae enim amet sint voluptas vitae perspiciatis esse at labore ipsa sapiente eligendi ducimus vero tempore, similique fuga quasi! Error, ex.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;