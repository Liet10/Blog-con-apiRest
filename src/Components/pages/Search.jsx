import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Globals } from '../../Helpers/Globals';
import { Petition } from '../../Helpers/Petition';
import { ArticleList } from './ArticleList';


export const Search = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams()

  useEffect(() => {  
    const toSearch = params.toSearch  
    getDatas(toSearch)
  },[params])

  const getDatas = async (toSearch)=>{
    // let url = Globals.url+'listar';
     
    const {data, loading} = await Petition(Globals.url+'buscar/'+toSearch, 'GET',)
    // let getData = await fetch(url,{
    //   method: 'GET'
    // });
    // let data = await getData.json()
    //  console.log(data)
        console.log(data)
     if(data.status === 'success'){
      setArticle(data.articulos)
      setLoading(loading)
    }else{
      setArticle([]);
    }
  }
  return (
    <>
      {loading ? 'Cargando...' : 
      (
        article.length >= 1 ? <ArticleList article= {article} setArticle = {setArticle}/> :
      (
        <h1>No hay articulos para mostrar</h1>
      )
      )}

    </>
  )
}

