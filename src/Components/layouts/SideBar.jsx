import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {
    // const [search, setSearch] = useState();
    const navegate = useNavigate()
    const getInputValue = e=>{
      e.preventDefault()
      const inputValue = e.target.search_field.value;
      navegate('/search/'+inputValue)
      console.log(inputValue)
    }
  return (
    <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form onSubmit={getInputValue}>
                    <input type="text" name="search_field" />
                    <input type='submit' id="search"/>
                </form>
            </div>

            {/* <div className="add">
                <h3 className="title">Añadir pelicula</h3>
                <form>
                    <input type="text" id="title" placeholder="Titulo" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div> */}
        </aside>
  )
}
