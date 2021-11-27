
wait('functons.js loaded',0.801)


function std(seconds){
    var mel  = Math.floor(seconds / (24*60*60*365*1000));
    seconds -= mel    * (24*60*60*365*1000);  
    var cent  = Math.floor(seconds / (24*60*60*365*100));
    seconds -= cent    * (24*60*60*365*100);  
    var dec  = Math.floor(seconds / (24*60*60*365*10));
    seconds -= dec   * (24*60*60*365*10);  
    var years  = Math.floor(seconds / (24*60*60*365));
    seconds -= years    * (24*60*60*365);
    var months = Math.floor(seconds / (24*60*60*30));
    seconds -= months    * (24*60*60*30);
    var weeks  = Math.floor(seconds / (60*60*24*7));
    seconds -= weeks    * (60*60*24*7);
    var days   = Math.floor(seconds / (24*60*60));
    seconds -= days    * (24*60*60);
    var hours  = Math.floor(seconds / (60*60));
    seconds -= hours   * (60*60);
    var minutes= Math.floor(seconds / (60));
    seconds -= minutes * (60);
  
    if((seconds*10**9)<10000){
        return ifs(seconds*10**9," nanosecond") 
    }
  
    else if((seconds*10**6)<1000){
       return ifs(seconds*1000," microsecond")
    }
  
    else if((seconds*1000)<1000){
       return ifs(seconds*100," millisecond")
    }
  
    else{
       return ifs(mel," Millennium")+ifs(cent," century")+ifs(dec," decade")+ifs(years," year")+ifs(months," month")+ifs(weeks," week")+ifs(days," day")+ifs(hours," hour")+ifs(minutes," minute")+ifs(seconds," second")
    }
  
  }
  
  function ifs(val,d){
    if((parseFloat(val)-parseInt(val))==0){
        return ((0<val)?((val)+d+S(val)):"")
    }
    else{
        return ((0<val)?((val.toFixed(2))+d+S(val)):"")
    }
  }
  
  function S(s){
    if(s==1 || s==0){return " "}
    else if(s>1){return "s "}
    else{return ""}
  }
  
  function c(array){
    return array[Math.floor(Math.random() * array.length)]
  
  }
clk = (a)=>{try{document.querySelector(a).click()}catch(e){}}
function sel(b) {
    return b.options[b.selectedIndex].value
}
function id(ID) {
    return document.getElementById(ID)
}

function greet(){

    let h = new Date().getHours();;

    

    if (h > 5 && h < 12) {
        greeting = c(morning) + ', Sir How Can I help you'
    }

    if (h >= 12 && h < 17) {
        greeting = c(afternoon) + ', Sir How Can I help you'
    }

    if (h >= 17 || h <= 5) {
      greeting = c(evening) + ', Sir How Can I help you'
    }

    return greeting;

}


function Time(){
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  if (h > 11) {
    time = `${h - 12} ${m} PM`
  }

  if (h < 12) {
    time = `${h} ${m} AM`
  }

  if (h == 12) {
    time = `${h} ${m} PM`
  }
  return time;
  
}


function wait(text,s){
  setTimeout(()=>{console.log(text)},parseInt(s*1000))
}

let age = ()=>{
  return std((new Date().getTime()-new Date("April 20, 2021 10:00:00").getTime())/1000)
}

let speak=function(){ 
  console.log(current,final)
  text=final ? final : 'You told me nothing,or its my bug , reload or try saying it louder'
  if(final!=current){
    responsiveVoice.speak(text,config_voice.voice,config_voice.pitch,config_voice.volume)
  }
  current=final
}

k=setInterval(function() {
    clearInterval(k)
  if (responsiveVoice.isPlaying() == true) {
      if (i == 3) {
          i = 1
      } else {
          i += 1
      }
      id('ryu').src = image[i]
      id('status').innerHTML='Ryu is speaking'
  } else {
      id('status').innerHTML='Ryu is listning'
      id('ryu').src = image[0]
}
},1000)

let spk=function(a){ 
  responsiveVoice.speak('You selected '+a.value,a.value,config_voice.pitch,config_voice.volume)
  config_voice.voice=a.value
}

let open=(qury='nothing',engine='https://duckduckgo.com/?q=')=>{
  qury=qury.split(' ').join(' ')
  window.open(engine+qury,'_blank')
}

let url=(text,link)=>{
  if(text.match(link)) open('http://'+link+'.com','')
}
// refresh=()=>{
//   if(!responsiveVoice.isPlaying()) window.location.reload()
// }
// setInterval(refresh,12000)
