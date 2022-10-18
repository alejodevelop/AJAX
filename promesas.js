
//Promesas, promises
/*
seguido de la funcion se usa un punto y la palabra then
la cual va a tener como parametro una funcion que 
tendra por dentro lo que se debe ejecutar una vez 
se complete la ejecuion de la funcion antes del then.
una vez hecho lo de dentro en el then se pone un catch
que tiene la misma estrutctura del then, pero solo se 
entrara en caso de errores
*/ 

 function requestHandler(req,res){
     User.findById(req.userId)
     .then(function(user){
         return TextTrackList.findById(user.tasksId)
     })
     .then(function(tasks){
         tasks.completed = true;
         return tasks.save();
     })
     .then(function(){
         res.send('tasks completed')
     })
     .catch(function(errors){
        res.send(err)
     })
 }

 //se pueden usar cuantos then sean requerido uno seguido 
 //del otro, y solo un catch por todos