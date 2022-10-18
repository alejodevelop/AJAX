
//async await
/*
se declara por medio de la palabra async que la funcion es
de caracter asincrono, despues dentro de la funcion 
se antepone a todas las tareas que demoren tiempo en devolver
un valor o ejecutar una accion la palabra await, bien sea el
caso de ejecutar una consulta a una API o base de datos,
esto hara que la siguiente instruccion no se ejecute hasta
que se resuelva lo que tiene la palabra await.
para el manejo de errores se hace igual a como se hace con
el codigo sincrono, que es el uso del try catch, entonces
todo se envuelve en un try catch 
*/

async function requestHandler(req, res){
    
try {

    const user = await User.findById(req.userId);
    const tasks = Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send('Task Completed');

} catch (err){
    res.send(err);
}

}