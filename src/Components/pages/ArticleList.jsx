import React from 'react';
import { Globals } from '../../Helpers/Globals';
import { Petition } from '../../Helpers/Petition';
import { Link } from 'react-router-dom';

export const ArticleList = ({article, setArticle}) => {

  const deleteArticle = async (id)=>{
      let {data} = await Petition(Globals.url+'lista/'+id, 'DELETE')

      if(data.status === 'success'){
            let newArticles = article.filter(articleToDelete=> articleToDelete._id !== id);
            setArticle(newArticles);
      }
  }
  return (
    article.map(article => {
        return (
          
            <article key={article._id} className="article-item">
              <div className='mask'>
                {article.imagen == 'default.png'? (<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' width={350} height={350} />) : (<img src= {Globals.url+'imagen/'+article.imagen} width={350} height={350}/>)}
                
              </div>
              <div className='dates'>

                <h3 className="title"><Link to={'/article/'+article._id}>{article.titulo}</Link></h3>
                <p className="description">{article.contenido}</p>

                <button className="edit"><Link to={'/toedit/'+article._id}>Editar</Link></button>
                <button className="delete" onClick={()=>{deleteArticle(article._id)}}>Borrar</button>
              </div>
            </article>
          
        )
      })
  )
}
