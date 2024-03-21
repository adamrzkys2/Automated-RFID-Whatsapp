const qrcode = require('qrcode-terminal');
const axios = require('axios');
const fs = require('fs');
const express = require('express')
const app = express()
const { Client, LocalAuth, Contact, MessageMedia} = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
})
const port = 3000
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('ready', () => {
    console.log('Client is ready!');
});

app.get('/sendwa',async (req, res)=>{
    try{
    const nomor = req.query.q 
    const nama = req.query.name
    const pesan = `halo Mah,pah, Aku ${nama} Sudah masuk sekolah di SMKSYP 17 Cilegon`
    const nomorS = nomor + "@c.us"
    console.log(nomorS)
    await client.sendMessage(nomorS, pesan)
    }catch(error){
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  client.initialize();