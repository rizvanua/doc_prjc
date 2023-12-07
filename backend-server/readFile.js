import fs from "fs";
import { Readable } from 'stream';

export function readFile() {
    try{
        const buff = Buffer.from('HELLO!!!', 'utf-8')
    const readStream = fs.createReadStream("text.txt")
    const testStrm = new Readable()
    testStrm._read = () => {}
    testStrm.push(buff)
    testStrm.on
    const stat = fs.stat("text.txt",(err, stats)=>{
        console.log('!!!Stats',stats)
    })
    readStream.on('error', error => {
        // process the data chunk
        console.log('!!!ER',error);
    });
    readStream.on('data', chunk => {
        // process the data chunk
        console.log(chunk.toString());
    })
    //testStrm.pipe();    
} catch (error) {
    console.log('!!!',error)
}
// try{
//     const text = fs.readFile("text.txt",(error, data)=>{
//         if(error) {
//             console.log('!!!ERR',error)
//         }
//     console.log("!!!data", data.toString())
//     });
// } catch (error) {
//     console.log('!!!',error)
// }
  
};