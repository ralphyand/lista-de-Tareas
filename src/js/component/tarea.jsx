import React, {useState}  from "react";



const Tarea = () =>{
    const [text, setText] = useState ("");
    const [search, setSearch] = useState ([]);
    const [task, setTask] = useState ([]); 
    
    const handleText = (event) => {
        setText (event.target.value);
     }
     const buscarTarea =() => {
        const newSearch= (text)
        setSearch ([...search, newSearch])
          }


    return (

    <div className=" container col-6 mb-3 text-center  ">
       
          <label for="exampleFormControlInput1" className="form-label fs-2"> Tareas </label>
          <input type="text" className="form-control" id="textinput" placeholder=" Agrega tu futura tarea" onChange={handleText}/>
        <button type="button" className="btn btn-dark mt-3 " onClick={buscarTarea}> Listo</button>
    
<div className="col-12 mb-3 mt-3 text-center">
            
{search  ? <p> Tarea pendiente: 
     {/* en css puede ser de 50% el wicht */}
    <div id="Principal" className="conteiner " >
         {search.map ((value, index) => (
             <p key={index}>
             {value}
                 <button className=" ms-1 btn-close btn btn-dark delete "  onClick={ 
                  () => {
                    let Test = search.filter((TaskDone) =>{ 
                         return TaskDone != value;
                              } )
                         setSearch(Test)
                              console.log(Test);S
                              }
                           }>
                            
                   </button>
                        </p>
                   ))}
                  </div>
             </p>: ""}
    <label> {search.length}</label>

</div>
</div>
    );
};


export default  Tarea;