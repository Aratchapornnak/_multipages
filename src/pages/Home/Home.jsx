import './Home.css';
import myself from '../../assets/myself.jpg'

function Home() {
    return (
        <div className='home-container'>
            <div className='aboutme'>Introduce myself</div>
            <div className="layout">
                <img className='picture' src={myself}/>
                <div className='introduce'>
                    <h3><span className='idname'>65057974</span></h3>
                    <br />
                    <h5>อรัชพร นาคมอญ</h5>
                    <h5>คณะเทคโนโลยีสารสนเทศ</h5>
                    <h5>สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</h5>
                </div>
            </div>
            <div className="layoutAbout">
                <div className='about'>
                    <h5><span className='idname'>งานอดิเรก</span></h5>
                    <ul>
                        <li>ดูหนัง</li>
                        <li>ฟังเพลง</li>
                        <li>เล่นเกม</li>
                    </ul>
                </div>
                <div className="contact">
                    <h5><span className='idname'>ช่องทางการติดต่อ</span></h5>
                    <ul>
                        <li>ID Line: atin2401</li>
                        <li>Facebook: Tin Aratchaporn</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Home;
