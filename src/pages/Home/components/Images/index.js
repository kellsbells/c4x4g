import './index.css';
import cjg2 from '../../../../assets/cjg-2.jpeg'
import cjg3 from '../../../../assets/cjg-3.jpeg'

function Images() {
    return (
        <article className="Home-images">
            <div className="container">
                <div>
                    <h2><span>Check Us Out</span> On Instagram</h2>
                    <div className="Home-images-wrapper">
                        <img src={cjg2} />
                        <img src={cjg3} />
                        <img src={cjg2} />
                        <img src={cjg3} />
                    </div>
                </div>
                <button className="button-primary">View Our Photo Gallery</button>
            </div>
        </article>
    );
}
  
export default Images;


