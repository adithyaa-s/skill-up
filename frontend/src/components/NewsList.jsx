import  {useState , useEffect} from 'react';
import axios from 'axios';
import Newsitem from './Newsitem';

const NewsList = () => {
    const [articles,setarticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=Jobs&apiKey=9e967c0626154412b2a9baf6bed4ebfc');
            console.log(response);
            setarticles(response.data.articles);
        }
        getArticles();
    }, [])
    return (
        <div>
            {articles.slice(0, 6).map(article => (
            // eslint-disable-next-line react/jsx-key
            <Newsitem
                title={article.title}
                description={article.description}
                url={article.url}
                urltoimg={article.urlToImage}
            />
            ))}
        </div>
    )
}

export default NewsList