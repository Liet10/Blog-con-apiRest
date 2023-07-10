import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Globals } from '../../Helpers/Globals';
import { Petition } from '../../Helpers/Petition';
import { ArticleList } from './ArticleList';

export const Article = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    console.log(params)
    getDatas()
  }, [])

  const getDatas = async ()=>{
    // let url = Globals.url+'listar';
     
    const {data, loading} = await Petition(Globals.url+'lista/'+params.id, 'GET')
    // let getData = await fetch(url,{
    //   method: 'GET'
    // });
    // let data = await getData.json()
    //  console.log(data)

     if(data.status === 'success'){
      setArticle(data.articulo)
      setLoading(loading)
    }
  }
  return (
    <div className='jumbo'>      
        <div className='mask'>
              {article.imagen == 'default.png'? (<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' width={350} height={350} />) : (<img src= {Globals.url+'imagen/'+article.imagen} width={350} height={350}/>)}
              
        </div>
        <h1>{article.titulo}</h1>
        <p>{article.contenido}</p>
        <span>{article.fecha}</span>
      

    </div>
  )
}

