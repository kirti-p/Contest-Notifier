async function fetchData() {
    const res=await fetch('https://kontests.net/api/v1/code_chef')
        const record= await res.json();
        console.log(record);
        
        document.getElementById("Name").innerHTML=record[0].name;
        document.getElementById("Url").innerHTML=record[0].url;
        document.getElementById("Start_Time").innerHTML=record[0].start_time;
        document.getElementById("End_Time").innerHTML=record[0].end_time;
      
    
        document.getElementById("Name1").innerHTML=record[1].name;
        document.getElementById("Url1").innerHTML=record[1].url;
        document.getElementById("Start_Time1").innerHTML=record[1].start_time;
        document.getElementById("End_Time1").innerHTML=record[1].end_time;
    
    
} fetchData();

/**----------------------------------- */
async function fetchData1() {
    const res1=await fetch('https://kontests.net/api/v1/leet_code')
        const record1= await res1.json();
        console.log(record1);
        
        document.getElementById("Name21").innerHTML=record1[0].name;
        document.getElementById("Url21").innerHTML=record1[0].url;
        document.getElementById("Start_Time21").innerHTML=record1[0].start_time;
        document.getElementById("End_Time21").innerHTML=record1[0].end_time;
    
        document.getElementById("Name11").innerHTML=record1[1].name;
        document.getElementById("Url11").innerHTML=record1[1].url;
        document.getElementById("Start_Time11").innerHTML=record1[1].start_time;
        document.getElementById("End_Time11").innerHTML=record1[1].end_time;
    
       
} fetchData1();
/**--------------------------------------------------- */
async function fetchData2() {
    const res2=await fetch('https://kontests.net/api/v1/codeforces')
        const record2= await res2.json();
        console.log(record2);
        
        document.getElementById("Name3").innerHTML=record2[0].name;
        document.getElementById("Url3").innerHTML=record2[0].url;
        document.getElementById("Start_Time3").innerHTML=record2[0].start_time;
        document.getElementById("End_Time3").innerHTML=record2[0].end_time;
    
        document.getElementById("Name31").innerHTML=record2[3].name;
        document.getElementById("Url31").innerHTML=record2[3].url;
        document.getElementById("Start_Time31").innerHTML=record2[3].start_time;
        document.getElementById("End_Time31").innerHTML=record2[3].end_time;
    
       
} fetchData2();