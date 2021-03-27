const fs = require("fs");

// First we need to properly initialize an SDL config
// just for reference
var SDL = new Object();
var SDLConfig = new Object();
var SDLCodec = new Object();
var SDLError = new Object();
var SDLMessage = new Object();

var SDLCodecReader = new Object();
var SDLCodecReaderConfig = new Object();

SDL.Config = SDLConfig;
SDL.Codec = SDLCodec;
SDL.Error = SDLError;
SDL.Message = SDLMessage;
SDL.Codec.Parser = SDLCodecReader;
SDL.Codec.Parser.Config = SDLCodecReaderConfig;

// then set the values we need to load the codec file

SDL.Codec.Parser.Config.Location = "./starkingdoms.codec.sdl";
SDL.Codec.Parser.Config.LineSep = "\n";
SDL.Codec.Parser.Config.Standard = "1.2.1";

var TagContext = new Object();

var TagContextNone = new Object();
var TagContextMeta = new Object();
var TagContextData = new Object();
var TagContextSpecial = new Object();
var TagContextFlags = new Object();

TagContext.None = TagContextNone;
TagContext.Meta = TagContextMeta;
TagContext.Data = TagContextData;
TagContext.Special = TagContextSpecial;
TagContext.Flags = TagContextFlags;

TagContext.None.AllowedValues = null;
TagContext.None.AllowedValues = null;
TagContext.None.StringName = "None";
TagContext.None.IsNullable = false;

TagContext.Meta.AllowedValues = ["Version", "TargetedSDLVersion"];
TagContext.Meta.AllowedRegex = null;
TagContext.Meta.StringName = "Meta";
TagContext.Meta.IsNullable = false;

TagContext.Data.AllowedValues = null;
TagContext.Data.AllowedRegex = /[0-9]+/g;
TagContext.Data.StringName = "Data";
TagContext.Data.IsNullable = false;

TagContext.Special.AllowedValues = null;
TagContext.Special.AllowedRegex = /[0-9]+/g;
TagContext.Special.StringName = "Special";
TagContext.Special.IsNullable = false;

TagContext.Flags.AllowedValues = null;
TagContext.Flags.AllowedRegex = /[0-9]+/g;
TagContext.Flags.StringName = "Flags"
TagContext.Flags.IsNullable = false;

TagContext.AllowedTags = ["Meta", "Data", "Special", "Flags"];

var TagContextContent = new Object();

var readData = [];

// then we need to write the actual parser

var configData;

function saveData(data) {
  // annoying little workaround because JS wont save data properly
  configData = data;
}

function toString(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  var string = "";
  for (var i = 0; i < array.length; i++) {
    string += array[i];
    if (i != array.length) {
      string += " ";
    }
  }
  string = string.slice(0, -1);
  return string;
}

function SDLReadCodec(readData, debug = false) {
  // Read the SDL codec and strip whitespace
  var codec = "";
  fs.readFile("starkingdoms.codec.sdl", "utf8", (err, data) => {
    if (err) {
      return err;
    } else {
      data = data.replace(/ +?/g, '');

      // split it into lines
      
      lines = data.split('\n');
      origtext = data.split('\n'); // for error messages

      // then split it into tokens

      for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split('=');
      }

      if (debug) console.log(lines);

      // Search for tags using regex

      tagRegex = /(\[[a-zA-Z]+\])/g;
      invalidCharRegex = /(\[\])/g;
      var hasFoundMetaTag = false;
      var currentTagContext = TagContext.None;
      for (var i = 0; i < lines.length; i++) {
        trueLineNumber = i + 1;
        if (Array.isArray(lines[i])) {
          if (lines[i][0] == '') {
            continue;
          }
          if (lines[i][0].match(tagRegex)) {
            if (!TagContext.AllowedTags.includes(lines[i][0].slice(1, -1))) {
              console.log("Error on line " + trueLineNumber + ": Tag value " + lines[i][0].slice(1, -1) + " is not allowed in SDLFormat.Codec.Standard");
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(lines[i][0].length + 1) + " location of error");
              return;
            }
            if (lines[i][0].slice(1, -1) == "Meta") {
              hasFoundMetaTag = true;
              currentTagContext = TagContext.Meta;
              if (debug) console.log("Tag context changed to Meta at line " + trueLineNumber);
              continue;
            }
            if (lines[i][0].slice(1, -1) == "Data") {
              currentTagContext = TagContext.Data;
              if (debug) console.log("Tag context changed to Data at line " + trueLineNumber);
              continue;
            }
            if (lines[i][0].slice(1, -1) == "Special") {
              currentTagContext = TagContext.Special;
              if (debug) console.log("Tag context changed to Special at line " + trueLineNumber);
              continue;
            }
            if (lines[i][0].slice(1, -1) == "Flags") {
              currentTagContext = TagContext.Flags;
              if (debug) console.log("Tag context changed to Flags at line " + trueLineNumber);
              continue;
            }
            continue;
          }
          if (lines[i][0].match(invalidCharRegex)) {
            console.log("Error on line " + trueLineNumber + ": Use of reserved character");
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(lines[i][0].length + 1) + " location of error");
              return;
          }
          if (currentTagContext == TagContext.None) {
            if (lines[i] == "") {
              continue;
            } else {
              console.log("Error on line " + trueLineNumber + ": Cannot include data in area without tag context");
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(lines[i][0].length + 1) + " location of error");
              return;
            }
          }
          if (!hasFoundMetaTag) {
            if (lines[i] == "") {
              continue;
            } else {
              console.log("Error on line " + trueLineNumber + ": Cannot include data in area without tag context");
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(toString(lines[i]).length + 1) + " location of error");
              return;
            }
          }
          if (currentTagContext.AllowedValues != null) {
            if (!currentTagContext.AllowedValues.includes(lines[i][0])) {
              console.log("Error on line " + trueLineNumber + ": Value named " + lines[i][0] + " is not allowed in tag context " + currentTagContext.StringName);
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(toString(lines[i]).length + 1) + " location of error");
              return;
            }
          }
          if (currentTagContext.AllowedRegex != null) {
            if (!lines[i][0].match(currentTagContext.AllowedRegex)) {
              console.log("Error on line " + trueLineNumber + ": Value named " + lines[i][0] + " is not allowed in tag context " + currentTagContext.StringName);
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(toString(lines[i]).length + 1) + " location of error");
              return;
            }  
          }
          // Make sure there is a value
          if (lines[i].length > 2) {
            console.log("Error on line " + trueLineNumber + ": More then 1 data value set for value");
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(toString(lines[i]).length + 1) + " location of error");
              break;
          }
          if (lines[i].length < 2) {
              console.log("Error on line " + trueLineNumber + ": No value set");
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(toString(lines[i]).length + 1) + " location of error");
              break;
          }
          if (!currentTagContext.IsNullable && lines[i][1] == '""') {
            console.log("Error on line " + trueLineNumber + ": Null value in non-null tag context " + currentTagContext.StringName);
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(toString(lines[i]).length + 1) + " location of error");
              break;
          }
          if (!currentTagContext.IsNullable && lines[i][1] == null) {
            console.log("Error on line " + trueLineNumber + ": Null value in non-null tag context " + currentTagContext.StringName);
              console.log("  |");
              console.log(trueLineNumber + " | " + toString(origtext[i]));
              console.log("  | " + "^".repeat(toString(lines[i]).length + 1) + " location of error");
              break;
          }
          if (currentTagContext == TagContextMeta) {
            var name = lines[i][0];
            var value = lines[i][1];
            var data = new Object();
            data.name = name;
            data.value = value;
            data.context = currentTagContext.StringName;
            readData.push(data);
          }
          if (currentTagContext == TagContextData) {
            var name = lines[i][0];
            var value = lines[i][1];
            var data = new Object();
            data.name = name;
            data.value = value;
            data.context = currentTagContext.StringName;
            readData.push(data);
          }
          if (currentTagContext == TagContextSpecial) {
            var name = lines[i][0];
            var value = lines[i][1];
            var data = new Object();
            data.name = name;
            data.value = value;
            data.context = currentTagContext.StringName;
            readData.push(data);
          }
          if (currentTagContext == TagContextFlags) {
            var name = lines[i][0];
            var value = lines[i][1];
            var data = new Object();
            data.name = name;
            data.value = value;
            data.context = currentTagContext.StringName;
            readData.push(data);
          }

          saveData(readData);

          continue;
        } else {
          console.log("Error on line " + trueLineNumber + ": Non-array value found - this is an INTERNAL ENGINE ERROR, report this on the issue tracker!");
          console.log("Duping additional debug information");
          console.log("Error occurance: line 131");
          console.log("Trigger: " + trueLineNumber);
          console.log("Current tokenvalue array:");
          console.log(lines);
              return;
        }

      }
    }
  });
  if (debug) console.log(readData);
  return readData;
}

var data = []; // create the vaiable
console.log(SDLReadCodec(data, debug=false)) // data is passed as a POINTER!!
console.log(data);
