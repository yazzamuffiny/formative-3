import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//tabs imports
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//icons imports
import { FaNewspaper } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { GiHealthNormal } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import { MdSportsBasketball } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";


//context import
import { useArticlesContext } from '../hooks/useArticlesContext'

const apiKey = import.meta.env.VITE_NEWS_API_KEY

// //section colors
// const categoryColors = {
//     business: "#f5c505",
//     entertainment: "#f50591",
//     health: "#f50505",
//     science: "#41f505",
//     sports: "#fc6203",
//     technology:"#8505f5"
//   };

const Home = () => {
    //state for category
    const [category, setCategory] = useState('')
    //state for query
    const [query, setQuery] = useState('')
    //state for loading
    const [loading, setLoading] = useState(true)

    //initialize useNavigate
    const navigate = useNavigate()

    //bring in context
    const {articles, dispatch} = useArticlesContext()

    //use effect
    useEffect(() => {
        setLoading(true);
        //fetch function
        const fetchArticles = async() => {
          await axios.get(`https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${apiKey}`)
            .then(response => {
              console.log(response.data.articles);
              // setArticles(response.data.articles);
              dispatch({type:"GET_ARTICLES", payload: response.data.articles})
              setLoading(false);
            })
            .catch(error => {
              console.log(error);
              setLoading(true);
            })
        }
        fetchArticles()
            
      }, [category, query])

    //function for on click
    const handleReadMoreClick = (index) => {
        console.log(index)
        navigate(`/article/${index}`)
    }

      //mapped articles component
      const Articles = ({articles}) => {
        const mappedArticles = articles.map((article, index) => {
          //map return
          return (
            <div 
            key={index}
            className="article"
            >
              <h4>{article.title}</h4>
              <p className="author">{article.author}</p>
              <button onClick={() => handleReadMoreClick(index)} className="see-more">See More</button>
            </div>
          )
        })
        //articles component return
        return (
          <>
                {mappedArticles}
          </>
        )
      }

      const [tabIndex, setTabIndex] = useState(0);

      return (
        <>
            <Tabs className="tabs" selectedIndex={tabIndex} forceRenderTabPanel onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab onClick={() => setCategory('')}><FaNewspaper /> All</Tab>
                    <Tab onClick={() => setCategory('business')}> <MdBusinessCenter /> Business</Tab>
                    <Tab onClick={() => setCategory('entertainment')}><PiFilmReelFill /> Entertainment</Tab>
                    <Tab onClick={() => setCategory('health')}><GiHealthNormal /> Health</Tab>
                    <Tab onClick={() => setCategory('science')}><MdScience /> Science</Tab>
                    <Tab onClick={() => setCategory('sports')}><MdSportsBasketball /> Sports</Tab>
                    <Tab onClick={() => setCategory('technology')}><RiComputerFill /> Technology</Tab>
                </TabList>

                <TabPanel>
                    <h1 className='category-header'>All News</h1>
                    <div className="article-container">
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="article-grid">
                            <Articles articles={articles}/>
                        </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1 className='category-header'>Business News</h1>
                    <div className="article-container">
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="article-grid">
                            <Articles articles={articles}/>
                        </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1 className='category-header'>Entertainment News</h1>
                    <div className="article-container">
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="article-grid">
                            <Articles articles={articles}/>
                        </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1 className='category-header'>Health News</h1>
                    <div className="article-container">
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="article-grid">
                            <Articles articles={articles}/>
                        </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1 className='category-header'>Science News</h1>
                    <div className="article-container">
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="article-grid">
                            <Articles articles={articles}/>
                        </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1 className='category-header'>Sports News</h1>
                    <div className="article-container">
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="article-grid">
                            <Articles articles={articles}/>
                        </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h1 className='category-header'>Technology News</h1>
                    <div className="article-container">
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="article-grid">
                            <Articles articles={articles}/>
                        </div>
                        )}
                    </div>
                </TabPanel>
            </Tabs>
        </>
      )
    }

export default Home
