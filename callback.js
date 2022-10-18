
//callbacks
/*
Al pasar una funcion como parametro en otra funcion que
requiere un tiempo de respuesta, se genera un callback,
este callback nos servira para que el programa ejecute
todo el codigo dentro de este, luego de recibir el dato
de la peticion hecha con anterioridad.
*/
function requestHandler(req,res){
   User.findById(req.userId, function(err,user){
       if(err){
           res.send(err);
       } else {
           Tasks.findById(user.taskId, function(err, tasks){
               if (err){
                   return res.send(err);
               } else {
                    tasks.completed = true;
                    tasks.save(function(err){
                        if(err){
                            return res.send(err);
                        } else {
                            res.send('Task completed')
                        }
                    })
               }
           })
       }
   });
}

//lo anterior es conocido como el callback hell
//es dificil de leer y es una mala practica