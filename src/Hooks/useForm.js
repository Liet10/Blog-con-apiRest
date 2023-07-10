import { useState } from "react";

export const useForm = (initialObject)=>{

    const [getForm, setGetForm] = useState(initialObject);

    const serializeForm = (form)=>{
        const formData = new FormData(form);

        const objectComplete = {}
        for(let[name, value] of formData){
            objectComplete[name] = value
        }
        return (objectComplete);
    }

    const sendForm = e=>{
        e.preventDefault();
        let target = e.target;
       
        // let curso = {
        //     titulo: target.titulo.value,
        //     anio: target.anio.value,
        //     descripcion: target.descripcion.value,
        //     autor: target.autor.value,
        //     email: target.email.value,
        // }
        let course = serializeForm(target)
        setGetForm(course)
    }
    const itemOnChange = ({target})=>{
        const {name, value} = target;

        setGetForm({
            ...getForm,
             [name] : value
        })
    }
     return {
        getForm,
        sendForm,
        itemOnChange
     }
} 