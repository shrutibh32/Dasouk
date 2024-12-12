const shell = require('shelljs');

const createSite = async (websitename,portno) => {
    shell.cd('c:/Users/rrath/Desktop/WORK/dasouk/Websites')
    console.log("git clone https://github.com/Atharva-Rasane/dasoucktest.git " + websitename)
    shell.exec("git clone https://github.com/Atharva-Rasane/dasoucktest.git " + websitename)
    shell.cd(websitename)
    shell.exec("npm i")
    shell.exec("echo {\"portnum\": " + portno + ",} > data.json")
    console.log(shell.ls("./"))
    shell.cd('c:/Users/rrath/Desktop/WORK/dasouk/')
};


// createSite()
export default createSite;

