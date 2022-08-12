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
        <strong>De : </strong> <span style="color:blue;">'.$nombres.'</span> 
        <strong>Correo : </strong> <span style="color:blue;">'.$correo.'</span> 
        <p>'.$mensaje.'</p>  
        </body>
        </html>
        ';
        $cabecera="MIME-Version: 1.0\r\n";
        $cabecera.="Content-type: text/html; charset=iso-8859-1\r\n";
        $miCorreo="jhonancalebm@gmail.com";
        if(mail($miCorreo,$asunto,$cuerpo,$cabecera)){
            $res='
            <p class="ok"><i class="fas fa-check"></i> Mensaje enviado.</p>
            ';
        }else{
            $res='
            <p class="warning"><i class="fas fa-triangle-exclamation"></i> Al parecer hubo un error.</p>
            ';
        } 
    }

    echo $res;
?>

        