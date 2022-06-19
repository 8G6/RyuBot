var sp = new p5.SpeechRec();
// speech recognition object (will prompt for mic access)
sp.onResult = decition // bind callback function to trigger when speech is recognized
sp.start(); // start listening
let fast = ()=>{
    sp.interimResults=id('fast').checked
}
let final=''
async function decition(){

    let prob = sp.resultConfidence * 100
    let text=sp.resultString.toLowerCase()
    
    id('ytext').innerHTML=`Text : ${text} <br> Confidence : ${prob.toFixed(4)}%`
    
    if(prob>25){
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'EJeBnfXJ4P7I',
                'X-RapidAPI-Key': 'a8c30707e3mshe9034fd6cb0075bp1bd132jsn92a5a431294f',
                'X-RapidAPI-Host': 'random-stuff-api.p.rapidapi.com'
            }
        };
        
        fetch(`https://random-stuff-api.p.rapidapi.com/ai?msg=${encodeURI(text)}(REQUIRED)&bot_name=Friday&bot_gender=female&bot_master=8g6&bot_age=&bot_company=PGamerX%20Studio%22&bot_location=India%20(OPTIONAL)&bot_email=admin%40pgamerx.com%20(OPTIONAL)&bot_build=Public%20(OPTIONAL)&bot_birth_year=2002%20(OPTIONAL)&bot_birth_date=1st%20January%2C%202002%20(OPTIONAL)&bot_birth_place=India%20(OPTIONAL)&bot_favorite_color=Blue%20(OPTIONAL)&bot_favorite_book=Harry%20Potter%20(OPTIONAL)&bot_favorite_band=Imagine%20Doggos%20(OPTIONAL)&bot_favorite_artist=Eminem%20(OPTIONAL)&bot_favorite_actress=Emma%20Watson%20(OPTIONAL)&bot_favorite_actor=Jim%20Carrey%20(OPTIONAL)&id=For%20customised%20response%20for%20each%20user`, options)
            .then(response => response.json())
            .then(response => {
                speak(response.AIResponse)
            })
            .catch(err => console.error(err));
    }
    else{
        final=`I am ${prob.toFixed(4)}% sure that you said ${text}`

    }
    id('text').innerHTML=final
    clk('#dummy')
    // responsiveVoice.enableWindowClickHook()
    // responsiveVoice.clickEvent();
    
}

