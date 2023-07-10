import React from 'react';
import { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { Petition } from '../../Helpers/Petition';
import { Globals } from '../../Helpers/Globals';

export const ToCreate = () => {
   const { getForm, sendForm, itemOnChange } = useForm({});
   const [ result, setResult] = useState('');
   const storageArticle = async (e)=>{
      e.preventDefault();
      // Obtener los datos del formulario
      let newArticle = getForm;      
           //console.log(newArticle)// Tengo que buscar el problema en esta funcion de abajo
      // Guardar los datos en el backend usando el helper petition
      const {data} = await Petition(Globals.url+'crear', 'POST', newArticle);
      if(data.status === 'success'){
             setResult('success')
         console.log(data)

      //  Obtener la imagen
      let getImg = document.querySelector('#file');
      
      let formData = new FormData();
      
      formData.append('file0', getImg.files[0])
      const upImg = await Petition(Globals.url+'subir-img/'+data.articulo._id, 'POST', formData, true);
       console.log(upImg);
      }else{
         setResult('error')
      }
       
   }
  return (
    <div className='jumbo'>
         <h1>Crear Artículo</h1>
         <p>Formulario para crear Artículo</p>
         
         <strong>{result === 'success'? 'Se ha enviado el articulo con exito' : " "}</strong>
         <strong>{result === 'error'? 'los datos son incorrectos' : " "}</strong>

         <form className='formulario' onSubmit={storageArticle}>
          <div className='formGroup'>
             <label htmlFor='titulo'>Titulo</label>
             <input type='text' name='titulo' onChange={itemOnChange}/>
          </div>
          <div className='formGroup'>
             <label htmlFor='contenido'>Contenido</label>
             <textarea type='text' name='contenido' onChange={itemOnChange}/>
          </div>
          <div className='formGroup'>
             <label htmlFor='file0'>Titulo</label>
             <input type='file' name='file0' id='file'/>
          </div>
          <input type='submit' value='Enviar' className='button'/>          
         </form>
    </div>
  )
}
