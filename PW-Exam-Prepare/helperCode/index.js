import fs from "fs";
import PDFMerger from 'pdf-merger-js';
const basePath = "../../Notes-PDFs";
// import "";

const allFiles = [];


/*
  function getAllFilesName (name, path){
    const stat = fs.statSync(path);
    if (stat.isFile()) {
        allFiles.push({name : name, path : path});
        return;
    }
    else {
        const files = fs.readdirSync(path);
        if (files.length == 0) return;
        files.forEach(file => {
            let filePath = `${path}/${file}`;
            getAllFilesName(file, filePath);
        })
    }
  }


getAllFilesName("Notes-PDFs", "../../Notes-PDFs");
fs.writeFileSync("../data.json", JSON.stringify(allFiles, null, 3));*/



const pdfDataJson = fs.readFileSync("./formatedData.json");
const pdfNotes =  JSON.parse(pdfDataJson);

async function mergePdf(pdfFiles) {

    const merger = new PDFMerger();
    for (let i = 0; i < pdfFiles.length ; i++){
        await merger.add(pdfFiles[i].path);
    }
    await merger.setMetadata({
        author: "Manik Maity",
        creator: "Manik Maity",
        title: "Free Soul"
      });

    await merger.save('merged.pdf');
    
}


const test = [  {
    name: 'Useful VS Code extension-6.pdf',
    path: '../../Notes-PDFs/GITHUB/Useful VS Code extension-6.pdf'
  },
  {
    name: 'Version Control System-1.pdf',
    path: '../../Notes-PDFs/GITHUB/Version Control System-1.pdf'
  }]

// console.log(pdfNotes);
mergePdf(pdfNotes);


  