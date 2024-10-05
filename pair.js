const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: KATAKURI_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function KATAKURI_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_KATAKURI_Tech = KATAKURI_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_KATAKURI_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_KATAKURI_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_KATAKURI_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_KATAKURI_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_KATAKURI_Tech.sendMessage(Pair_Code_By_KATAKURI_Tech.user.id, { text: '' + b64data });

               let KATAKURI_MD_TEXT = `
*_Pair Successful Arised🫴._*
put the above ID in the sessID variable when deploying .
Use this Session ID for all bots by KATAKURI.
╔═════◇
║       『••• KATAKURI•••』
║ *Channel:* _https://whatsapp.com/channel/0029Vaf5x0eHFxP7JvSRRn1g_
║ *Main Channel:* _https://whatsapp.com/channel/0029Vaf5x0eHFxP7JvSRRn1g_
║ *Github:* _https://github.com/boru-to_
║ *Owner:* _https://wa.me/27747815326_
║ *Note :*_Do not provide your SESSION_ID to_
║ _anyone otherwise that can access your WA messages_
║ 
╚════════════════════════╝
*©ARISE!!!*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_KATAKURI_Tech.sendMessage(Pair_Code_By_KATAKURI_Tech.user.id,{text:KATAKURI_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_KATAKURI_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    KATAKURI_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await KATAKURI_MD_PAIR_CODE()
});
module.exports = router
