var sp = new p5.SpeechRec();
// speech recognition object (will prompt for mic access)
sp.onResult = decition // bind callback function to trigger when speech is recognized
sp.start(); // start listening
let fast = ()=>{
    sp.interimResults=id('fast').checked
}

function decition(){
    let prob = sp.resultConfidence * 100
    let text=sp.resultString.toLowerCase()
    
    
    if(prob>60){
        if(text.match(/can you hear me/g)) final = "yes sir, I certainly could"
        if(text.match(/hello/g)) final=greet()
        if(text.match(/how old are you/g)) final="I am "+age()+" old "
        if(text.match(/how are you/g)) final="I am fine thanks for asking"
        if(text.match(/who are you/g) || text.match(/your name/g)) final="I am Ryu Bot , a fully functinal non AI bot"
    }
    else{
        final=`I am ${prob.toFixed(4)}% sure that you said ${text}`
    }
    id('ytext').innerHTML=`Text : ${text} <br> Confidence : ${prob.toFixed(4)}%`
    id('text').innerHTML=final
    clk('#dummy')
    if(navigator.appVersion.match('android')){
        responsiveVoice.enableWindowClickHook()
        responsiveVoice.clickEvent();
    }
}

