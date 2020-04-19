(function(){
  var name=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0;i<name.length;i++)
  {
    var first=name[i].charAt(0).toLowerCase();
    if(first==='j')
    { byeSpeaker.speak(name[i]);
        } else {
            helloSpeaker.speak(name[i]);
        }
    }
})();
