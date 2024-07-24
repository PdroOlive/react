import axios from "axios";
import { Article } from "./article.jsx"
import React, { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'



export const Main = () => 
{
    const [news, setNews] = useState([])


    useEffect(() =>
    {
        const getApiNews = async () =>
        {
            try {
                const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles");

                const dataOfApiNews = [response.data];

                dataOfApiNews.forEach(i => setNews(i.results));

            }
            catch(error) {
                console.log(error)
            }   
        }
        getApiNews();
    }, []);


    return(
        <main>
            
            {news.length === 0 ? 
                (
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"80vh"}}>
                        <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="white"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </div>
                ) : news.map((articles) => {
                return(
                    
                    <Article key={articles.id}
                    title={articles.title}
                    provider={articles.news_site} 
                    description={articles.summary}
                    image={articles.image_url}
                    link={articles.url}/>
                    
                )

            })}
        </main>
    )
}