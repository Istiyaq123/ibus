var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function BrentfordCountyCourt195btn(){
  RomneyRoad195()
  showDestination.setAttribute( "onClick", "BrentfordCountyCourt195ibus();" );
}


function BrentfordCountyCourt195ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "195 to Brentford, County Court";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_195_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_Brentford_County_Court_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  };
}
function ChalkFarm27ibus(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "27 to Chalk Farm";
    var audio = 1;
    iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_27_001.mp3";
    iBusAudio.play();
    iBusAudio.onended = function() {
      audio = 2;
      if (audio === 2){
        iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
        iBusAudio.play();
        iBusAudio.onended = function() {
          audio = 3;
          if (audio == 3){
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_CHALK_FARM_001.mp3";
            iBusAudio.play();
            iBusAudio.onended = function() {
              iBusAudio.src="hhjff.mp3";
              iBusAudio.play();
            }
          }
        }
      } 
    }
};


function RomneyRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Romney Road";
  // BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "RomneyRoad195Audio();" );
}
function RomneyRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ROMNEY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RomneyRoad195();" );
  NextDestination.setAttribute( "onClick", "MileEndStation702();" );
}
