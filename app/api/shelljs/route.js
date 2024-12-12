
import { NextResponse } from "next/server";
// import shell from "shelljs"
import "@ramonak/react-progress-bar"


export async function POST(request) {
    const {
        shopid,
        websitename,
        portno ,
      } = await request.json();
      let a2 = await JSON.stringify({
        shopid : shopid,
        websitename : websitename,
        portno : portno,
      })
      console.log(a2)
      try{

    const res3 = await fetch("http://127.0.0.1:3020/createSite/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: a2,
    });
          
    console.log("DONE http://127.0.0.1:3020/createSite/ !!!!!!!!!!!")

    
          // router.replace("/dashboard/");
    }catch(e){
        console.log(e)
    }

    alert("DONE FINISHED!!!!!!!!!!!")
    return NextResponse.json({ message: "Website Created" }, { status: 201 });
}