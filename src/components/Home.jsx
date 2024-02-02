import React from 'react';
import CustomBox from './CustomBox';
import './Home.css';
import emailsvg from '../assets/email.svg';
import downarrow from '../assets/downarrow.svg';
import './CustomBox.css';


const handleLearnMore = () => {
    console.log('Learn More Clicked');
}



const Home = () => {
    return (
        <div className='contact-container'>

            <div className='contacts--topthird'>
                <div className='contacts--topthird--text'>
                    <h1>RAGAM '24 Tech Team Inductions</h1>
                    <p>Embrace the challenges that lie ahead, as you become part of a community dedicated to pushing boundaries and shaping the fest.</p>
                    <button>
                        <label>Explore</label>
                        </button>
                </div>
                <img src = 'https://s3-alpha-sig.figma.com/img/54fc/b035/0a60225c917f3ca278cafd858a7c2154?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J19jJoltywUmoDIdtkOdTAXukqjqaEoNHYLQXTRQibZZtf-NYBaUyWi1GYa6-8q7KwoLabxTjhLPkWQjNADQvIJddftNaAL6Rc3kDZhiXSIf6C~ch5dGRhRpEosm~yAJDLpJVSmFMAgl5DMXoVRufiTnPQwoU~T81KlJIWomQM-bsaCDqSBmgwlPhDORVL7zLovGVr87~6BsRtWba3XYA83Wnnajgvfy~yQRsgeA2Bqs1trHp9pMICEYfTbJIzzxbmJRANkSIwe0-q6rOC0C~gSgX6vZpqRFfeid-NxRRn0wcq2rQAoSpIsLG5Ea6Y1xYT8SMmcAKnsJe3wykoS~0A__' className ='contacts--topthird--image' alt = 'not showing'/>
            </div>


            <div className='learn--more' onClick = {handleLearnMore}>
                <p>Learn More</p>
                <img src = {downarrow} alt = 'arrow down' />
            </div>

            <div className='contacts--middlethird'>
                <img src = 'https://s3-alpha-sig.figma.com/img/c1f3/dbb2/a158fb3e3144c578400f6d23d6ce1980?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dIVo3-Miw0I2-Z9MQ1fxBqSfN-VN~j3-iilNnulzfOk-fcOzqLrPHLQcabM95~ijXLUJilOvMuVoI4k74PQae6bYinXr-vmFeM311YEs6RbX~x~hO17XtwYwlcYJjnACLsOMH~KRLRj4Hmcr3d92N0YN00GdY6M4xzZeepsiu~fcqW6qGhBCe-0RUwbp2L5wmXcNM3Fr4FZcXxQrfw-OL4baaTYpI8iMLdZd08SABD-YmiL-Uqvrm~67BuolCY2gDPkohSiAv3eRdVrkzzbPspduuCN1utPtffRcKYNSd-lA6XVEejR8kfe9Hr~K1MHpO6ECUDQXV3uDwqPaBtQqCQ__' alt = 'not showing'/>
                <div className='contacts--middlethird--text'>
                    <h2>About us</h2>
                    <p> The quick brown fox jumped over the lazy dog. Meanwhile, a gentle breeze rustled the leaves on the trees, creating a soothing melody. Birds chirped in the distance, adding to the natural symphony of the surroundings. As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility.</p>
                    <p>As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility. In this serene moment, one could appreciate the beauty of nature and the simplicity of life.</p>
                </div>

            </div>

            <div className='contacts--bottomthird'>
                <div className='contacts--bottomthird--text'>
                    <h2>Join us</h2>
                    <p>Embark on a journey with us and become part of a vibrant tech team, where innovation meets collaboration. Join us and contribute to something extraordinary!</p>
                    <ol>
                        <li>Invaluable experience</li>
                        <li>Work with the latest technologies and frameworks</li>
                        <li>Collaborate with others</li>
                    </ol>
                    
                </div>
                <div className='CustomBox'>
                <CustomBox  svg = {emailsvg} heading = 'EMAIL' ptext = 'contact@gmail.com' />
                </div>
                </div>
            </div>


    
      
    );
};

export default Home;