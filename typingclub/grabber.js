console.log("TypingClub Grabber");
console.log("By Tyler Donia");
console.log("Development Release Version 3.2");
console.log("WARNING! DO NOT USE ON THE NEW CHARACTER SCREEN!");
console.log("Build 2/4/2020 7:53 PM V3.2;");
var chars = document.getElementsByClassName("token_unit");
var lesson = "";
var finalstring = "";
var textexact = "";
for(var i = 0; i < chars.length; i++)
{
   console.log(chars.item(i).innerHTML);
   lesson += chars.item(i).innerHTML + "~";
   var item = chars.item(i).innerHTML;
   if (item != "&nbsp;<i> </i>" && item != '<span class="_enter">&nbsp;</span><br>') {
      finalstring += item + "";
      textexact += item;
   } else if (item == "&nbsp;<i> </i>") {
      finalstring += "{Space}" + "";
      textexact += " ";
   } else if (item == '<span class="_enter">&nbsp;</span><br>') {
      finalstring += "{Enter}" + "";
      textexact += "\n";
   }
}
console.log("unsplit, paste into devtools of client");
console.log(lesson);
console.log();
console.log("V2.0");
console.log(lesson.split("~"));
console.log("use final string below");
console.log(finalstring);
prompt("Is this text correct: \n" + textexact);
