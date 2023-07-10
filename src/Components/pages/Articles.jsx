import React, { useEffect, useState } from 'react';
import { Globals } from '../../Helpers/Globals';
import { Petition } from '../../Helpers/Petition';
import { ArticleList } from './ArticleList';

export const Articles = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getDatas()
  }, [])

  const getDatas = async ()=>{
    // let url = Globals.url+'listar';
     
    const {data, loading} = await Petition(Globals.url+'listar', 'GET',)
    // let getData = await fetch(url,{
    //   method: 'GET'
    // });
    // let data = await getData.json()
    //  console.log(data)

     if(data.status === 'success'){
      setArticle(data.articulos)
      setLoading(loading)
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
