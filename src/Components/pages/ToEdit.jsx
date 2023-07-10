import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { Petition } from '../../Helpers/Petition';
import { Globals } from '../../Helpers/Globals';
import { useParams } from 'react-router-dom';

export const ToEdit = () => {
   const [article, setArticle] = useState([]);
   const { getForm, sendForm, itemOnChange } = useForm({});
   const [ result, setResult] = useState('');

   const params = useParams();

   useEffect(() => {
    console.log(params)
    getDatas()
  }, [])

  const getDatas = async ()=>{
    // let url = Globals.url+'listar';
     
    const {data} = await Petition(Globals.url+'lista/'+params.id, 'GET')
    // let getData = await fetch(url,{
    //   method: 'GET'
    // });
    // let data = await getData.json()
    //  console.log(data)

     if(data.status === 'success'){
      setArticle(data.articulo)
    }
  }
  const storageArticle = async (e) => {
    e.preventDefault();
    // Obtener los datos del formulario
    let newArticle = getForm;
  
    // Guardar los datos en el backend usando el helper petition
    const { data } = await Petition(Globals.url+'lista/'+params.id, 'PUT', newArticle);
    if (data && data.status === 'success' && data.articulo) {
      setResult('success');
      console.log(data.articulo);
  
      // Obtener la imagen
      let getImg = document.querySelector('#file');
  
      let formData = new FormData();
  
      formData.append('file0', getImg.files[0]);
      const upImg = await Petition(Globals.url+'subir-img/'+data.articulo._id, 'POST', formData, true);
      console.log(upImg);
    } else {
      setResult('error');
    }
  };
  return (
    <div className='jumbo'>
         <h1>Crear Artículo</h1>
         <p>Formulario para editar el Artículo {article.titulo}</p>
         
         <strong>{result === 'success'? 'Se ha enviado el articulo con exito' : " "}</strong>
         <strong>{result === 'error'? 'los datos son incorrectos' : " "}</strong>

         <form className='formulario' onSubmit={storageArticle}>
          <div className='formGroup'>
             <label htmlFor='titulo'>Titulo</label>
             <input type='text' name='titulo' onChange={itemOnChange} defaultValue={article.titulo}/>
          </div>
          <div className='formGroup'>
             <label htmlFor='contenido'>Contenido</label>
             <textarea type='text' name='contenido' onChange={itemOnChange} defaultValue={article.contenido}/>
          </div>
          <div className='formGroup'>
             
             <div className='mask'>
                {article.imagen == 'default.png'? (<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' width={350} height={350} />) : (<img src= {Globals.url+'imagen/'+article.imagen} width={350} height={350}/>)}                
              </div>
              <label htmlFor='file0'>Archivo</label>
             <input type='file' name='file0' id='file'/>
          </div>
          <input type='submit' value='Enviar' className='button'/>          
         </form>
    </div>
  )
}
