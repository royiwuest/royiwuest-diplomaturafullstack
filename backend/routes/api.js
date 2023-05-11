var express = require('express');
var router = express.Router();
var novedadesModels = require('./../models/novedadesModels');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function(req, res, next){
    let novedades = await novedadesModels.getNovedades();

    novedades = novedades.map(
        novedades =>{
            if (novedades.img_id){
                const imagen = cloudinary.url(
                    novedades.img_id, {
                        width: 150,
                        height:250,
                        crop: 'fill'
                    });
                    return {
                        ... novedades,
                        imagen
                    }
            }else{
                return{
                    ...novedades,
                    imagen:''
                }
            }
        });

    res.json(novedades);

});

router.post('/contacto', async (req, res) =>{
    const mail = {
        to: 'royiwuest@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.telefono}`

    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error:false,
        message:'Mensaje enviado'
    });
})
;

module.exports = router;