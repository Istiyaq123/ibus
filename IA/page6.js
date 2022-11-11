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
function CharvilleLaneEstate195btn(){
  BrentfordCountyCourt195()
  showDestination.setAttribute( "onClick", "CharvilleLaneEstate195ibus();" );
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
function CharvilleLaneEstate195ibus(){
    topTextYes.style.display ="none";
    topTextNo.style.display ="block";
    topTextNo.innerHTML = "195 to Charville Lane Estate";
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
            iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_Charville_Lane_Estate_001.mp3";
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
  NextDestination.setAttribute( "onClick", "CharvilleAcademy195();" );
}
function CharvilleAcademy195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Charville Academy";
  BackDestination.setAttribute( "onClick", "CharvilleAcademy195Audio();" );
  NextDestination.setAttribute( "onClick", "CharvilleAcademy195Audio();" );
}
function CharvilleLaneEstate195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Charville Lane Estate";
  BackDestination.setAttribute( "onClick", "CharvilleLaneEstate195Audio();" );
  NextDestination.setAttribute( "onClick", "CharvilleAcademy195Audio();" );
}
function CharvilleLaneEstate195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Charville_Lane_Estate_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "CharvilleLibrary195();" );
}
function CharvilleAcademy195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHARVILLE_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CharvilleLaneEstate195();" );
  NextDestination.setAttribute( "onClick", "CharvilleLibrary195();" );
}
function CharvilleLibrary195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Charville Library";
  BackDestination.setAttribute( "onClick", "CharvilleLibrary195Audio();" );
  NextDestination.setAttribute( "onClick", "CharvilleLibrary195Audio();" );
}
function CharvilleLibrary195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/s_Charville_Library.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CharvilleAcademy195();" );
  NextDestination.setAttribute( "onClick", "WeymouthRoad195();" );
}
function WeymouthRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waymouth Road";
  BackDestination.setAttribute( "onClick", "WeymouthRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "WeymouthRoad195Audio();" );
}
function WeymouthRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEYMOUTH_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CharvilleLibrary195();" );
  NextDestination.setAttribute( "onClick", "AdelphiCrescent195();" );
}
function AdelphiCrescent195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adelphi Crescent";
  BackDestination.setAttribute( "onClick", "AdelphiCrescent195Audio();" );
  NextDestination.setAttribute( "onClick", "AdelphiCrescent195Audio();" );
}
function AdelphiCrescent195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Adelphi_Crescent_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WeymouthRoad195();" );
  NextDestination.setAttribute( "onClick", "AdelphiWay195();" );
}
function AdelphiWay195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adelphi Way";
  BackDestination.setAttribute( "onClick", "AdelphiCrescent195();" );
  NextDestination.setAttribute( "onClick", "AdelphiWay195Audio();" );
}
function AdelphiWay195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Adelphi_Way_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AdelphiWay195();" );
  NextDestination.setAttribute( "onClick", "TheBrookHouse195();" );
}
function TheBrookHouse195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Brook House";
  BackDestination.setAttribute( "onClick", "TheBrookHouse195Audio();" );
  NextDestination.setAttribute( "onClick", "TheBrookHouse195Audio();" );
}
function TheBrookHouse195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_The_Brook_House_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AdelphiCrescent195();" );
  NextDestination.setAttribute( "onClick", "FairholmeCrescent195();" );
}
function FairholmeCrescent195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fairholme Crescent";
  BackDestination.setAttribute( "onClick", "FairholmeCrescent195Audio();" );
  NextDestination.setAttribute( "onClick", "FairholmeCrescent195Audio();" );
}
function FairholmeCrescent195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Fairholme_Crescent_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TheBrookHouse195();" );
  NextDestination.setAttribute( "onClick", "FredoraAvenue195();" );
}
function FredoraAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fredora Avenue";
  BackDestination.setAttribute( "onClick", "FairholmeCrescent195Audio();" );
  NextDestination.setAttribute( "onClick", "FredoraAvenue195Audio();" );
}
function FredoraAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Fredora_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "FredoraAvenue195();" );
  NextDestination.setAttribute( "onClick", "BalmoralDrive195();" );
}
function BalmoralDrive195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Balmoral Drive";
  BackDestination.setAttribute( "onClick", "BalmoralDrive195Audio();" );
  NextDestination.setAttribute( "onClick", "BalmoralDrive195Audio();" );
}
function BalmoralDrive195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Balmoral_Drive_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "FairholmeCrescent195();" );
  NextDestination.setAttribute( "onClick", "UxbridgeCountyCourt195();" );
}
function UxbridgeCountyCourt195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Uxbridge County Court";
  BackDestination.setAttribute( "onClick", "UxbridgeCountyCourt195Audio();" );
  NextDestination.setAttribute( "onClick", "UxbridgeCountyCourt195Audio();" );
}
function WhittingtonAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Whittington Avenue";
  BackDestination.setAttribute( "onClick", "WhittingtonAvenue195Audio();" );
  NextDestination.setAttribute( "onClick", "UxbridgeCountyCourt195Audio();" );
}
function WhittingtonAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Whittington_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BalmoralDrive195();" );
  NextDestination.setAttribute( "onClick", "ChurchRoadSwiftClose195();" );
}
function UxbridgeCountyCourt195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Uxbridge_County_Court_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WhittingtonAvenue195();" );
  NextDestination.setAttribute( "onClick", "ChurchRoadSwiftClose195();" );
}
function ChurchRoadSwiftClose195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Road / Swift Close";
  BackDestination.setAttribute( "onClick", "ChurchRoadSwiftClose195Audio();" );
  NextDestination.setAttribute( "onClick", "ChurchRoadSwiftClose195Audio();" );
}
function ChurchRoadSwiftClose195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Church_Road_Swift_Close_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "UxbridgeCountyCourt195();" );
  NextDestination.setAttribute( "onClick", "ChurchGreen195();" );
}
function ChurchGreen195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Green";
  BackDestination.setAttribute( "onClick", "ChurchGreen195Audio();" );
  NextDestination.setAttribute( "onClick", "ChurchGreen195Audio();" );
}
function ChurchGreen195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Church_Green_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChurchRoadSwiftClose195();" );
  NextDestination.setAttribute( "onClick", "LongmeadRoad195();" );
}
function LongmeadRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Longmead Road";
  BackDestination.setAttribute( "onClick", "ChurchGreen195Audio();" );
  NextDestination.setAttribute( "onClick", "LongmeadRoad195Audio();" );
}
function LongmeadRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Longmead_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LongmeadRoad195();" );
  NextDestination.setAttribute( "onClick", "TownfieldRoad195();" );
}
function TownfieldRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Townfield Road";
  BackDestination.setAttribute( "onClick", "TownfieldRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "TownfieldRoad195Audio();" );
}
function FreemansLane195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Freemans Lane";
  BackDestination.setAttribute( "onClick", "FreemansLane195Audio();" );
  NextDestination.setAttribute( "onClick", "TownfieldRoad195Audio();" );
}
function FreemansLane195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Freemans_Lane_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChurchGreen195();" );
  NextDestination.setAttribute( "onClick", "BotwellLane195();" );
}
function TownfieldRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Townfield_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "FreemansLane195();" );
  NextDestination.setAttribute( "onClick", "BotwellLane195();" );
}
function BotwellLane195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Botwell Lane";
  BackDestination.setAttribute( "onClick", "BotwellLane195Audio();" );
  NextDestination.setAttribute( "onClick", "BotwellLane195Audio();" );
}
function BotwellLane195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Botwell_Lane_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TownfieldRoad195();" );
  NextDestination.setAttribute( "onClick", "BotwellGreen195();" );
}
function BotwellGreen195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Botwell Green";
  BackDestination.setAttribute( "onClick", "BotwellLane195Audio();" );
  NextDestination.setAttribute( "onClick", "BotwellGreen195Audio();" );
}
function BotwellGreen195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Botwell_Green_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BotwellGreen195();" );
  NextDestination.setAttribute( "onClick", "HayesTown195();" );
}
function HayesTown195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes Town";
  BackDestination.setAttribute( "onClick", "HayesTown195Audio();" );
  NextDestination.setAttribute( "onClick", "HayesTown195Audio();" );
}
function HayesTown195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Hayes_Town_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BotwellLane195();" );
  NextDestination.setAttribute( "onClick", "HayesHarlingtonStation195();" );
}
function HayesHarlingtonStation195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes & Harlington Station";
  BackDestination.setAttribute( "onClick", "HayesTown195Audio();" );
  NextDestination.setAttribute( "onClick", "HayesHarlingtonStation195Audio();" );
}
function HayesHarlingtonStation195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_AND_HARLINGTON_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesHarlingtonStation195();" );
  NextDestination.setAttribute( "onClick", "OldStationRoad195();" );
}
function OldStationRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Station Road";
  BackDestination.setAttribute( "onClick", "HayesHarlingtonStation195Audio();" );
  NextDestination.setAttribute( "onClick", "OldStationRoad195Audio();" );
}
function OldStationRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Old_Station_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "OldStationRoad195();" );
  NextDestination.setAttribute( "onClick", "HaroldAvenue195();" );
}
function HaroldAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harold Avenue";
  BackDestination.setAttribute( "onClick", "HaroldAvenue195Audio();" );
  NextDestination.setAttribute( "onClick", "HaroldAvenue195Audio();" );
}
function FaireyCorner195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Fairey Corner";
  BackDestination.setAttribute( "onClick", "FaireyCorner195Audio();" );
  NextDestination.setAttribute( "onClick", "HaroldAvenue195Audio();" );
}
function HayesandHarlingtonStation195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes and Harlington Station";
  BackDestination.setAttribute( "onClick", "HayesandHarlingtonStation195Audio();" );
  NextDestination.setAttribute( "onClick", "HaroldAvenue195Audio();" );
}
function ClaytonRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clayton Road";
  BackDestination.setAttribute( "onClick", "ClaytonRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "HaroldAvenue195Audio();" );
}
function ClaytonRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Clayton_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesTown195();" );
  NextDestination.setAttribute( "onClick", "RosevilleRoad195();" );
}
function HayesandHarlingtonStation195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_AND_HARLINGTON_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ClaytonRoad195();" );
  NextDestination.setAttribute( "onClick", "RosevilleRoad195();" );
}
function FaireyCorner195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Fairey_Corner_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesandHarlingtonStation195();" );
  NextDestination.setAttribute( "onClick", "RosevilleRoad195();" );
}
function HaroldAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Harold_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "FaireyCorner195();" );
  NextDestination.setAttribute( "onClick", "RosevilleRoad195();" );
}
function RosevilleRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Roseville Road";
  BackDestination.setAttribute( "onClick", "RosevilleRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "RosevilleRoad195Audio();" );
}
function RosevilleRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Roseville_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HaroldAvenue195();" );
  NextDestination.setAttribute( "onClick", "Hayes_Road_Tesco195();" );
}
function Hayes_Road_Tesco195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes Road / Tesco";
  BackDestination.setAttribute( "onClick", "Hayes_Road_Tesco195Audio();" );
  NextDestination.setAttribute( "onClick", "Hayes_Road_Tesco195Audio();" );
}
function Hayes_Road_Tesco195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_ROAD_TESCO_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RosevilleRoad195();" );
  NextDestination.setAttribute( "onClick", "WentworthRoad195();" );
}
function WentworthRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wentworth Road";
  BackDestination.setAttribute( "onClick", "WentworthRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "WentworthRoad195Audio();" );
}
function WentworthRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Wentworth_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "Hayes_Road_Tesco195();" );
  NextDestination.setAttribute( "onClick", "BrentRoad195();" );
}
function BrentRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brent Road";
  BackDestination.setAttribute( "onClick", "BrentRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "BrentRoad195Audio();" );
}
function BrentRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Brent_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WentworthRoad195();" );
  NextDestination.setAttribute( "onClick", "DerleyRoad195();" );
}
function DerleyRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Derley Road";
  BackDestination.setAttribute( "onClick", "DerleyRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "DerleyRoad195Audio();" );
}
function DerleyRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Derley_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BrentRoad195();" );
  NextDestination.setAttribute( "onClick", "SussexRoad195();" );
}
function SussexRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sussex Road";
  BackDestination.setAttribute( "onClick", "DerleyRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "SussexRoad195Audio();" );
}
function SussexRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Sussex_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SussexRoad195();" );
  NextDestination.setAttribute( "onClick", "WalthamRoad195();" );
}
function WalthamRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waltham Road";
  BackDestination.setAttribute( "onClick", "SussexRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "WalthamRoad195Audio();" );
}
function WalthamRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Waltham_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WalthamRoad195();" );
  NextDestination.setAttribute( "onClick", "KingStreet195();" );
}
function KingStreet195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "King Street";
  BackDestination.setAttribute( "onClick", "KingStreet195Audio();" );
  NextDestination.setAttribute( "onClick", "KingStreet195Audio();" );
}
function MontagueWaye195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Montague Waye";
  BackDestination.setAttribute( "onClick", "MontagueWaye195Audio();" );
  NextDestination.setAttribute( "onClick", "MontagueWaye195Audio();" );
}
function MontagueWaye195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Montague_Waye_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DerleyRoad195();" );
  NextDestination.setAttribute( "onClick", "TheGreen195();" );
}
function KingStreet195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_King_Street_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MontagueWaye195();" );
  NextDestination.setAttribute( "onClick", "TheGreen195();" );
}
function TheGreen195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Green";
  BackDestination.setAttribute( "onClick", "TheGreen195Audio();" );
  NextDestination.setAttribute( "onClick", "TheGreen195Audio();" );
}
function TheGreen195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_The_Green_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "KingStreet195();" );
  NextDestination.setAttribute( "onClick", "ParkAvenue195();" );
}
function ParkAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Park Avenue";
  BackDestination.setAttribute( "onClick", "ParkAvenue195Audio();" );
  NextDestination.setAttribute( "onClick", "ParkAvenue195Audio();" );
}
function SouthallStation195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Station";
  BackDestination.setAttribute( "onClick", "SouthallStation195Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallStation195Audio();" );
}
function SouthallStation195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Southall_Station_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TheGreen195();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadway195();" );
}
function ParkAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Park_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallStation195();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadway195();" );
}
function SouthallBroadway195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Broadway";
  BackDestination.setAttribute( "onClick", "SouthallBroadway195Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadway195Audio();" );
}
function SouthallBroadway195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Southall_Broadway_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ParkAvenue195();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation195();" );
}
function SouthallPoliceStation195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Police Station";
  BackDestination.setAttribute( "onClick", "SouthallPoliceStation195Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation195Audio();" );
}
function SouthallPoliceStation195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Southall_Police_Station_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallBroadway195();" );
  NextDestination.setAttribute( "onClick", "SouthallPark195();" );
}
function SouthallPark195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Park";
  BackDestination.setAttribute( "onClick", "SouthallPark195Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPark195Audio();" );
}
function SouthallPark195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Southall_Park_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallPoliceStation195();" );
  NextDestination.setAttribute( "onClick", "DormersWellsLane195();" );
}
function DormersWellsLane195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dormer's Wells Lane";
  BackDestination.setAttribute( "onClick", "DormersWellsLane195Audio();" );
  NextDestination.setAttribute( "onClick", "DormersWellsLane195Audio();" );
}
function DormersWellsLane195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DORMERS_WELLS_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallPark195();" );
  NextDestination.setAttribute( "onClick", "LyndhurstAvenue195();" );
}
function LyndhurstAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lyndhurst Avenue";
  BackDestination.setAttribute( "onClick", "LyndhurstAvenue195Audio();" );
  NextDestination.setAttribute( "onClick", "LyndhurstAvenue195Audio();" );
}
function LyndhurstAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Lyndhurst_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DormersWellsLane195();" );
  NextDestination.setAttribute( "onClick", "IronBridge195();" );
}
function IronBridge195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Iron Bridge";
  BackDestination.setAttribute( "onClick", "IronBridge195Audio();" );
  NextDestination.setAttribute( "onClick", "IronBridge195Audio();" );
}
function IronBridge195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Iron_Bridge_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LyndhurstAvenue195();" );
  NextDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark195();" );
}
function StBernardsGatehouseWindmillPark195(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "St Bernard's Gatehouse / Windmill Park";
  BackDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark195Audio();" );
  NextDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark195Audio();" );
  topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function StBernardsGatehouseWindmillPark195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BERNARD_GATEHOUSE_WINDMILL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "IronBridge195();" );
  NextDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive195();" );
}
function EalingHospitalWharncliffeDrive195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Hospital / Wharncliffe Drive";
  BackDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark195Audio();" );
  NextDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive195Audio();" );
}
function EalingHospitalWharncliffeDrive195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_HOSPITAL_WHARNCLIFFE_DRIVE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive195();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad195();" );
}
function HalfAcreRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Half Acre Road";
  BackDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive195Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad195Audio();" );
}
function HalfAcreRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Half_Acre_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HalfAcreRoad195();" );
  NextDestination.setAttribute( "onClick", "JessamineRoad195();" );
}
function JessamineRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Jessamine Road";
  BackDestination.setAttribute( "onClick", "HalfAcreRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "JessamineRoad195Audio();" );
}
function JessamineRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Jessamine_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HalfAcreRoad195();" );
  NextDestination.setAttribute( "onClick", "RosebankRoad195();" );
}
function RosebankRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rosebank Road";
  BackDestination.setAttribute( "onClick", "JessamineRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "RosebankRoad195Audio();" );
}
function RosebankRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RosebankRoad_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RosebankRoad195();" );
  NextDestination.setAttribute( "onClick", "CumberlandRoad195();" );
}
function CumberlandRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cumberland Road";
  BackDestination.setAttribute( "onClick", "RosebankRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "CumberlandRoad195Audio();" );
}
function CumberlandRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Cumberland_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CumberlandRoad195();" );
  NextDestination.setAttribute( "onClick", "ElthorneParkRoad195();" );
}
function ElthorneParkRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Elthorne Park Road";
  BackDestination.setAttribute( "onClick", "ElthorneParkRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "ElthorneParkRoad195Audio();" );
}
function LowerBostonRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lower Boston Road";
  BackDestination.setAttribute( "onClick", "LowerBostonRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "LowerBostonRoad195Audio();" );
}
function EalingHospital195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Hospital";
  BackDestination.setAttribute( "onClick", "EalingHospital195Audio();" );
  NextDestination.setAttribute( "onClick", "EalingHospital195Audio();" );
}
function EalingHospitaltwo195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Hospital";
  BackDestination.setAttribute( "onClick", "EalingHospitaltwo195Audio();" );
  NextDestination.setAttribute( "onClick", "EalingHospitaltwo195Audio();" );
}
function EalingHospitaltwo195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Ealing_Hospital_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark195();" );
  NextDestination.setAttribute( "onClick", "StudleyGrangeRoad195();" );
}
function EalingHospital195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Ealing_Hospital_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingHospitaltwo195();" );
  NextDestination.setAttribute( "onClick", "StudleyGrangeRoad195();" );
}
function LowerBostonRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Lower_Boston_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingHospital195();" );
  NextDestination.setAttribute( "onClick", "StudleyGrangeRoad195();" );
}
function StudleyGrangeRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Studley_Grange_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LowerBostonRoad195();" );
  NextDestination.setAttribute( "onClick", "StudleyGrangeRoad195();" );
}
function StudleyGrangeRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Studley Grange Road";
  BackDestination.setAttribute( "onClick", "StudleyGrangeRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "ElthorneParkRoad195Audio();" );
}
function ElthorneParkRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Elthorne_Park_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StudleyGrangeRoad195();" );
  NextDestination.setAttribute( "onClick", "ChristopherAvenue195();" );
}
function ChristopherAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Christopher Avenue";
  BackDestination.setAttribute( "onClick", "ChristopherAvenue195Audio();" );
  NextDestination.setAttribute( "onClick", "ChristopherAvenue195Audio();" );
}
function ChristopherAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Christopher_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ElthorneParkRoad195();" );
  NextDestination.setAttribute( "onClick", "HaslemereAvenue195();" );
}
function HaslemereAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Haslemere Avenue";
  BackDestination.setAttribute( "onClick", "HaslemereAvenue195Audio();" );
  NextDestination.setAttribute( "onClick", "HaslemereAvenue195Audio();" );
}
function HaslemereAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Haslemere_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChristopherAvenue195();" );
  NextDestination.setAttribute( "onClick", "BostonManorStation195();" );
}
function BostonManorStation195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Boston Manor Station";
  BackDestination.setAttribute( "onClick", "BostonManorStation195Audio();" );
  NextDestination.setAttribute( "onClick", "BostonManorStation195Audio();" );
}
function BostonManorStation195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Boston_Manor_Station_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HaslemereAvenue195();" );
  NextDestination.setAttribute( "onClick", "SwyncombeAvenue195();" );
}
function SwyncombeAvenue195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Swyncombe Avenue";
  BackDestination.setAttribute( "onClick", "SwyncombeAvenue195Audio();" );
  NextDestination.setAttribute( "onClick", "SwyncombeAvenue195Audio();" );
}
function SwyncombeAvenue195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Swyncombe_Avenue_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BostonManorStation195();" );
  NextDestination.setAttribute( "onClick", "TheRide195();" );
}
function TheRide195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Ride";
  BackDestination.setAttribute( "onClick", "TheRide195Audio();" );
  NextDestination.setAttribute( "onClick", "TheRide195Audio();" );
}
function TheRide195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_The_Ride_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SwyncombeAvenue195();" );
  NextDestination.setAttribute( "onClick", "ManorVale195();" );
}
function ManorVale195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Manor Vale";
  BackDestination.setAttribute( "onClick", "TheRide195Audio();" );
  NextDestination.setAttribute( "onClick", "ManorVale195Audio();" );
}
function ManorVale195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Manor_Vale_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ManorVale195();" );
  NextDestination.setAttribute( "onClick", "GreatWestRoad195();" );
}
function GreatWestRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Great West Road";
  BackDestination.setAttribute( "onClick", "GreatWestRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "GreatWestRoad195Audio();" );
}
function GreatWestRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Great_West_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TheRide195();" );
  NextDestination.setAttribute( "onClick", "BrentfordStation195();" );
}
function BrentfordStation195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brentford Station";
  BackDestination.setAttribute( "onClick", "BrentfordStation195Audio();" );
  NextDestination.setAttribute( "onClick", "BrentfordStation195Audio();" );
}
function BrentfordStation195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Brentford_Station_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GreatWestRoad195();" );
  NextDestination.setAttribute( "onClick", "WindmillRoad195();" );
}
function WindmillRoad195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Windmill Road";
  BackDestination.setAttribute( "onClick", "WindmillRoad195Audio();" );
  NextDestination.setAttribute( "onClick", "WindmillRoad195Audio();" );
}
function WindmillRoad195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Windmill_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BrentfordStation195();" );
  NextDestination.setAttribute( "onClick", "HalfAcre195();" );
}
function HalfAcre195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Half Acre";
  BackDestination.setAttribute( "onClick", "HalfAcre195Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcre195Audio();" );
}
function HalfAcre195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Half_Acre_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WindmillRoad195();" );
  NextDestination.setAttribute( "onClick", "BrentfordCountyCourt195();" );
}
function BrentfordCountyCourt195(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brentford County Court";
  BackDestination.setAttribute( "onClick", "BrentfordCountyCourt195Audio();" );
  NextDestination.setAttribute( "onClick", "BrentfordCountyCourt195Audio();" );
}
function BrentfordCountyCourt195Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Brentford_County_Court_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HalfAcre195();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
