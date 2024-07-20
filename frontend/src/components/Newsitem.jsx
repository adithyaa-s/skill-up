import './Newsitem.css';

// eslint-disable-next-line react/prop-types
const Newsitem = ({ title , description , url , urlToImage }) => {
    return (
        <div className="news-app" style={{ marginTop: '10px', paddingTop: '10px' }} >
            <div className="news-item">
                <img src={urlToImage} alt={urlToImage} className="news-img"></img>
                <h3><a href = {url}>{title}</a></h3>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default Newsitem