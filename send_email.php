<?php 
    $nombres=$_POST['txNombres'];
    $correo=$_POST['txCorreo'];
    $asunto=$_POST['txAsunto'];
    $mensaje=$_POST['txMensaje'];

    if(strlen($nombres)==0 || strlen($correo)==0 || strlen($asunto)==0 || strlen($mensaje)==0){
        $res='
        <h4 class="warning"><i class="fa fa-exclamation-triangle icon" aria-hidden="true"></i> &nbsp;Por favor. Complete todos los datos.</h4>
        ';
    }else{
        $cuerpo='
        <!DOCTYPE html>
        <html lang="en">
        <head>
        </head>      
        <body>
        <h3>
            <strong>De : </strong> <span style="color:blue;">'.$nombres.'</span> 
        </h3>
        <h3>
            <strong>Correo : </strong> <span style="color:blue;">'.$correo.'</span>
        </h3> 
        <p>'.$mensaje.'</p>  
        </body>
        </html>
        ';
        $cabecera="MIME-Version: 1.0\r\n";
        $cabecera.="Content-type: text/html; charset=iso-8859-1\r\n";
        $miCorreo="jhonancalebm@gmail.com";
        if(mail($miCorreo,$asunto,$cuerpo,$cabecera)){
            $res='
            <h4 class="ok"><i class="fas fa-check"></i> Mensaje enviado.</h4>
            <script>
                setTimeout(function(){
                  location.reload()
                },1200)
            </script>
            ';
        }else{
            $res='
            <h4 class="warning"><i class="fas fa-triangle-exclamation"></i> Al parecer hubo un error.</h4>
            ';
        } 
    }

    echo $res;
?>

        