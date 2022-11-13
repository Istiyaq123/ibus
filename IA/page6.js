var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

function CCTV(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "CCTV is in operation on this Bus";
  iBusAudio.src="https://istiyaq123.github.io/ibus/audio/CCTV%20FOI%20Sept.mp3";
  iBusAudio.play();
}
function DestinationChange(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "This bus is on diversion. Please listen for further announcements";
  iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Destination Change FOI Sept.mp3";
  iBusAudio.play();
}
function DriverChangenew(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Driver Change";
  iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Driver%20Change%20FOI%20Sept.mp3";
  iBusAudio.play();
}
function Waitnew(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bus will wait for a short time";
  iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Even%20Out%20Service%20FOI%20Sept.mp3";
  iBusAudio.play();
}
function Standing(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "No Standing on the Uppder Decks or Stairs";
  iBusAudio.src="https://istiyaq123.github.io/ibus/audio/No%20Standing%20FOI%20Sept.mp3";
  iBusAudio.play();
}
function moveDown(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Please move down inside the bus";
  iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Pls%20Mve%20Down%20Bus%20FOI%20Sept.mp3";
  iBusAudio.play();
}
function seats(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Seats are available upstairs";
  iBusAudio.src="https://istiyaq123.github.io/ibus/audio/Seats%20Upstairs%20FOI%20Sept.mp3";
  iBusAudio.play();
}

function BrentfordCountyCourt195btn(){
  RomneyRoad195()
  showDestination.setAttribute( "onClick", "BrentfordCountyCourt195ibus();" );
}
function CharvilleLaneEstate195btn(){
  BrentfordCountyCourt195()
  showDestination.setAttribute( "onClick", "CharvilleLaneEstate195ibus();" );
}
function WhiteCity207btn(){
  HayesByPass207()
  showDestination.setAttribute( "onClick", "WhiteCity207ibus();" );
}
function HayesByPass207btn(){
  WhiteCityBusStation207()
  showDestination.setAttribute( "onClick", "HayesByPass207ibus();" );
}
function ActonHighStreet427btn(){
  YorkRoad427()
  showDestination.setAttribute( "onClick", "ActonHighStreet427ibus();" );
}
function Uxbridge427btn(){
  DenehurstGardens427()
  showDestination.setAttribute( "onClick", "Uxbridge427ibus();" );
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
}
function WhiteCity207ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "207 to White City";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_207_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_WHITE_CITY_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  }
}
function HayesByPass207ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "207 to White City";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_207_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_HAYES_BY_PASS_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  }
}
function ActonHighStreet427ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "427 to Acton, High Street";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_427_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_ACTON_HIGH_STREET_001.mp3";
          iBusAudio.play();
          iBusAudio.onended = function() {
            iBusAudio.src="hhjff.mp3";
            iBusAudio.play();
          }
        }
      }
    } 
  }
}


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

function HayesByPass207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes By-Pass";
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
}
function HayesByPass207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_BY_PASS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "BrooksideRoad207();" );
}
function BrooksideRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brookside Road";
  BackDestination.setAttribute( "onClick", "BrooksideRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "BrooksideRoad207Audio();" );
}
function BrooksideRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROOKSIDE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge207();" );
}
function HayesBridge207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes Bridge";
  BackDestination.setAttribute( "onClick", "HayesBridge207Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge207Audio();" );
}
function DelamereRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes Bridge";
  BackDestination.setAttribute( "onClick", "DelamereRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge207Audio();" );
}
function SpringfieldRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Springfield Road";
  BackDestination.setAttribute( "onClick", "SpringfieldRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge207Audio();" );
}
function SpringfieldRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SPRINGFIELD_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad207();" );
}
function DelamereRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DELAMERE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SpringfieldRoad207();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad207();" );
}
function HayesBridge207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_BRIDGE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DelamereRoad207();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad207();" );
}
function TrinityRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Trinity Road";
  BackDestination.setAttribute( "onClick", "TrinityRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad207Audio();" );
}
function TrinityRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TRINITY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesBridge207();" );
  NextDestination.setAttribute( "onClick", "NorthcoteAvenue207();" );
}
function NorthcoteAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northcote Avenue";
  BackDestination.setAttribute( "onClick", "NorthcoteAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "NorthcoteAvenue207Audio();" );
}
function NorthcoteAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTHCOTE_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadwayStGeorgesAvenue207();" );
}
function SouthallBroadwayStGeorgesAvenue207(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Southall Broadway / St Georges Avenue";
  BackDestination.setAttribute( "onClick", "SouthallBroadwayStGeorgesAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadwayStGeorgesAvenue207Audio();" );
  topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function SouthallBroadwayStGeorgesAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_BROADWAY_ST_GEORGES_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation207();" );
}
function SouthallPoliceStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Police Station";
  BackDestination.setAttribute( "onClick", "SouthallPoliceStation207Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation207Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function AlexandraAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Avenue";
  BackDestination.setAttribute( "onClick", "AlexandraAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation207Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function AbbottsRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Abbotts Road";
  BackDestination.setAttribute( "onClick", "AbbottsRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation207Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function AbbottsRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ABBOTTS_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TrinityRoad207();" );
  NextDestination.setAttribute( "onClick", "SouthallPark207();" );
}
function AlexandraAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ALEXANDRA_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AbbottsRoad207();" );
  NextDestination.setAttribute( "onClick", "SouthallPark207();" );
}
function SouthallPoliceStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AlexandraAvenue207();" );
  NextDestination.setAttribute( "onClick", "SouthallPark207();" );
}
function SouthallPark207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Park";
  BackDestination.setAttribute( "onClick", "SouthallPark207Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPark207Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function SouthallPark207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallPoliceStation207();" );
  NextDestination.setAttribute( "onClick", "DormersWellsLane207();" );
}
function DormersWellsLane207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dormer's Wells Lane";
  BackDestination.setAttribute( "onClick", "DormersWellsLane207Audio();" );
  NextDestination.setAttribute( "onClick", "DormersWellsLane207Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function DormersWellsLane207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DORMERS_WELLS_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallPark207();" );
  NextDestination.setAttribute( "onClick", "LyndhurstAvenue207();" );
}
function LyndhurstAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lyndhurst Avenue";
  BackDestination.setAttribute( "onClick", "LyndhurstAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "LyndhurstAvenue207Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function LyndhurstAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LYNDHURST_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DormersWellsLane207();" );
  NextDestination.setAttribute( "onClick", "IronBridge207();" );
}
function IronBridge207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Iron Bridge";
  BackDestination.setAttribute( "onClick", "IronBridge207Audio();" );
  NextDestination.setAttribute( "onClick", "IronBridge207Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function IronBridge207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_IRON_BRIDGE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LyndhurstAvenue207();" );
  NextDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark207();" );
}
function StBernardsGatehouseWindmillPark207(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "St Bernard's Gatehouse / Windmill Park";
  BackDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark207Audio();" );
  NextDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark207Audio();" );
  topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function StBernardsGatehouseWindmillPark207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BERNARDS_GATEHOUSE_WINDMILL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "IronBridge207();" );
  NextDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive207();" );
}
function EalingHospitalWharncliffeDrive207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Hospital / Wharncliffe Drive";
  BackDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function EalingHospitalWharncliffeDrive207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_HOSPITAL_WHARNCLIFFE_DRIVE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad207();" );
}
function HalfAcreRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Half Acre Road";
  BackDestination.setAttribute( "onClick", "HalfAcreRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function EalingHospital207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Hospital";
  BackDestination.setAttribute( "onClick", "EalingHospital207Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function EalingHospital207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_HOSPITAL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark207();" );
  NextDestination.setAttribute( "onClick", "HanwellBroadway207();" );
}
function HalfAcreRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HALF_ACRE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingHospital207();" );
  NextDestination.setAttribute( "onClick", "HanwellBroadway207();" );
}
function HanwellBroadway207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hanwell Broadway";
  BackDestination.setAttribute( "onClick", "HanwellBroadway207Audio();" );
  NextDestination.setAttribute( "onClick", "HanwellBroadway207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HanwellBroadway207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HANWELL_BROADWAY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HalfAcreRoad207();" );
  NextDestination.setAttribute( "onClick", "GrosvenorRoad207();" );
}
function GrosvenorRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Grosvenor Road";
  BackDestination.setAttribute( "onClick", "GrosvenorRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "GrosvenorRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ChurchRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Road";
  BackDestination.setAttribute( "onClick", "ChurchRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "GrosvenorRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ChurchRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHURCH_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HanwellBroadway207();" );
  NextDestination.setAttribute( "onClick", "WestEalingBroadway207();" );
}
function GrosvenorRoad207(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GROSVENOR_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChurchRoad207();" );
  NextDestination.setAttribute( "onClick", "WestEalingBroadway207();" );
}
function WestEalingBroadway207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Ealing Broadway";
  BackDestination.setAttribute( "onClick", "WestEalingBroadway207Audio();" );
  NextDestination.setAttribute( "onClick", "WestEalingBroadway207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function WestEalingBroadway207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_EALING_BROADWAY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GrosvenorRoad207();" );
  NextDestination.setAttribute( "onClick", "DeanGardensBedfordRoad207();" );
}
function DeanGardensBedfordRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dean Gardens / Bedford Road";
  BackDestination.setAttribute( "onClick", "DeanGardensBedfordRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "DeanGardensBedfordRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function DeanGardensBedfordRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DEAN_GARDENS_BEDFORD_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WestEalingBroadway207();" );
  NextDestination.setAttribute( "onClick", "BroughtonRoad207();" );
}
function BroughtonRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Broughton Road";
  BackDestination.setAttribute( "onClick", "BroughtonRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "BroughtonRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BroughtonRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROUGHTON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "StLeonardsRoad207();" );
}
function StLeonardsRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Leonard's Road";
  BackDestination.setAttribute( "onClick", "StLeonardsRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "StLeonardsRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function StLeonardsRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_LEONARDS_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "LongfieldAvenue207();" );
}
function LongfieldAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Longfield Avenue";
  BackDestination.setAttribute( "onClick", "LongfieldAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "LongfieldAvenue207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function LongfieldAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LONGFIELD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "BondStreet207();" );
}
function BondStreet207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bond Street";
  BackDestination.setAttribute( "onClick", "BondStreet207Audio();" );
  NextDestination.setAttribute( "onClick", "BondStreet207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BondStreet207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOND_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation207();" );
}
function EalingBroadwayStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Broadway Station";
  BackDestination.setAttribute( "onClick", "EalingBroadwayStation207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function Christchurch207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Christchurch";
  BackDestination.setAttribute( "onClick", "Christchurch207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function EalingPoliceStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Police Station";
  BackDestination.setAttribute( "onClick", "EalingPoliceStation207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function DaneRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dane Road";
  BackDestination.setAttribute( "onClick", "DaneRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function NorthfieldAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northfield Avenue";
  BackDestination.setAttribute( "onClick", "NorthfieldAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function NorthfieldAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTHFIELD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DeanGardensBedfordRoad207();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad207();" );
}
function DaneRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DANE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "NorthfieldAvenue207();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad207();" );
}
function EalingPoliceStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DaneRoad207();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad207();" );
}
function Christchurch207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHRISTCHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingPoliceStation207();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad207();" );
}
function EalingBroadwayStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_BROADWAY_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "Christchurch207();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad207();" );
}
function NorthCommonRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "North Common Road";
  BackDestination.setAttribute( "onClick", "NorthCommonRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function NorthCommonRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTH_COMMON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "HangerLane207();" );
}
function HangerLane207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hanger Lane";
  BackDestination.setAttribute( "onClick", "HangerLane207Audio();" );
  NextDestination.setAttribute( "onClick", "HangerLane207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HangerLane207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HANGER_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingBroadwayStation207();" );
  NextDestination.setAttribute( "onClick", "EalingCommonStation207();" );
}
function EalingCommonStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Common Station";
  BackDestination.setAttribute( "onClick", "EalingCommonStation207Audio();" );
  NextDestination.setAttribute( "onClick", "EalingCommonStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function EalingCommonStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_COMMON_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HangerLane207();" );
  NextDestination.setAttribute( "onClick", "BirchGrove207();" );
}
function BirchGrove207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Birch Grove";
  BackDestination.setAttribute( "onClick", "BirchGrove207Audio();" );
  NextDestination.setAttribute( "onClick", "BirchGrove207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BirchGrove207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BIRCH_GROVE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingCommonStation207();" );
  NextDestination.setAttribute( "onClick", "TwyfordAvenue207();" );
}
function TwyfordAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Twyford Avenue";
  BackDestination.setAttribute( "onClick", "TwyfordAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "TwyfordAvenue207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function TwyfordAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TWYFORD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BirchGrove207();" );
  NextDestination.setAttribute( "onClick", "DenehurstGardens207();" );
}
function DenehurstGardens207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Denehurst Gardens";
  BackDestination.setAttribute( "onClick", "DenehurstGardens207Audio();" );
  NextDestination.setAttribute( "onClick", "DenehurstGardens207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function DenehurstGardens207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DENEHURST_GARDENS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TwyfordAvenue207();" );
  NextDestination.setAttribute( "onClick", "KingStreet207();" );
}
function KingStreet207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "King Street";
  BackDestination.setAttribute( "onClick", "KingStreet207Audio();" );
  NextDestination.setAttribute( "onClick", "KingStreet207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function KingStreet207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KING_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "ActonOldTownHall207();" );
}
function ActonOldTownHall207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Acton Old Town Hall";
  BackDestination.setAttribute( "onClick", "ActonOldTownHall207Audio();" );
  NextDestination.setAttribute( "onClick", "ActonOldTownHall207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function SteyneRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Steyne Road";
  BackDestination.setAttribute( "onClick", "SteyneRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "ActonOldTownHall207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function SteyneRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STEYNE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DenehurstGardens207();" );
  NextDestination.setAttribute( "onClick", "ActonCentralStation207();" );
}
function ActonOldTownHall207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_ACTON_TOWN_HALL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SteyneRoad207();" );
  NextDestination.setAttribute( "onClick", "ActonCentralStation207();" );
}
function ActonCentralStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Acton Central Station";
  BackDestination.setAttribute( "onClick", "ActonCentralStation207Audio();" );
  NextDestination.setAttribute( "onClick", "ActonCentralStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ActonCentralStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ACTON_CENTRAL_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ActonOldTownHall207();" );
  NextDestination.setAttribute( "onClick", "ActonPark207();" );
}
function ActonPark207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Acton Park";
  BackDestination.setAttribute( "onClick", "ActonPark207Audio();" );
  NextDestination.setAttribute( "onClick", "ActonPark207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ActonPark207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ACTON_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ActonCentralStation207();" );
  NextDestination.setAttribute( "onClick", "EastActonLane207();" );
}
function EastActonLane207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "East Acton Lane";
  BackDestination.setAttribute( "onClick", "EastActonLane207Audio();" );
  NextDestination.setAttribute( "onClick", "EastActonLane207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function EastActonLane207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EAST_ACTON_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ActonPark207();" );
  NextDestination.setAttribute( "onClick", "LardenRoad207();" );
}
function LardenRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Larden Road";
  BackDestination.setAttribute( "onClick", "LardenRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "LardenRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function LardenRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LARDEN_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EastActonLane207();" );
  NextDestination.setAttribute( "onClick", "BromyardAvenue207();" );
}
function BromyardAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bromyard Avenue";
  BackDestination.setAttribute( "onClick", "BromyardAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "BromyardAvenue207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BromyardAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROMYARD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LardenRoad207();" );
  NextDestination.setAttribute( "onClick", "SecondAvenue207();" );
}
function SecondAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Second Avenue";
  BackDestination.setAttribute( "onClick", "SecondAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "SecondAvenue207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function SecondAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SECOND_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "FirstAvenue207();" );
}
function FirstAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "First Avenue";
  BackDestination.setAttribute( "onClick", "FirstAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "FirstAvenue207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function FirstAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FIRST_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass207Audio();" );
  NextDestination.setAttribute( "onClick", "WormholtRoad207();" );
}
function WormholtRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wormholt Road";
  BackDestination.setAttribute( "onClick", "WormholtRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "WormholtRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function AskewRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Askew Road";
  BackDestination.setAttribute( "onClick", "AskewRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "WormholtRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ThirdAvenue207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Third Avenue";
  BackDestination.setAttribute( "onClick", "ThirdAvenue207Audio();" );
  NextDestination.setAttribute( "onClick", "WormholtRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ThirdAvenue207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THIRD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BromyardAvenue207();" );
  NextDestination.setAttribute( "onClick", "AdelaideGrove207();" );
}
function AskewRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ASKEW_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ThirdAvenue207();" );
  NextDestination.setAttribute( "onClick", "AdelaideGrove207();" );
}
function WormholtRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WORMHOLT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AskewRoad207();" );
  NextDestination.setAttribute( "onClick", "AdelaideGrove207();" );
}
function AdelaideGrove207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adelaide Grove";
  BackDestination.setAttribute( "onClick", "AdelaideGrove207Audio();" );
  NextDestination.setAttribute( "onClick", "AdelaideGrove207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function GallowayRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Galloway Road";
  BackDestination.setAttribute( "onClick", "GallowayRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "AdelaideGrove207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function GallowayRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GALLOWAY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WormholtRoad207();" );
  NextDestination.setAttribute( "onClick", "BloemfonteinRoad207();" );
}
function AdelaideGrove207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ADELAIDE_GROVE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GallowayRoad207();" );
  NextDestination.setAttribute( "onClick", "BloemfonteinRoad207();" );
}
function BloemfonteinRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bloemfontein Road";
  BackDestination.setAttribute( "onClick", "BloemfonteinRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "BloemfonteinRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BloemfonteinRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BLOEMFONTEIN_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AdelaideGrove207();" );
  NextDestination.setAttribute( "onClick", "LoftusRoad207();" );
}
function LoftusRoad207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Loftus Road";
  BackDestination.setAttribute( "onClick", "LoftusRoad207Audio();" );
  NextDestination.setAttribute( "onClick", "LoftusRoad207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function LoftusRoad207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LOFTUS_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BloemfonteinRoad207();" );
  NextDestination.setAttribute( "onClick", "ShepherdsBushMarketStation207();" );
}
function ShepherdsBushMarketStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shepherd's Bush Market Station";
  BackDestination.setAttribute( "onClick", "ShepherdsBushMarketStation207Audio();" );
  NextDestination.setAttribute( "onClick", "ShepherdsBushMarketStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ShepherdsBushMarketStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHEPHERDS_BUSH_MARKET_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LoftusRoad207();" );
  NextDestination.setAttribute( "onClick", "ShepherdsBushStation207();" );
}
function ShepherdsBushStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shepherd's Bush Station";
  BackDestination.setAttribute( "onClick", "ShepherdsBushStation207Audio();" );
  NextDestination.setAttribute( "onClick", "ShepherdsBushStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ShepherdsBushGreen207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Shepherd's Bush Green";
  BackDestination.setAttribute( "onClick", "ShepherdsBushGreen207Audio();" );
  NextDestination.setAttribute( "onClick", "ShepherdsBushStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ShepherdsBushGreen207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHEPHERDS_BUSH_GREEN_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ShepherdsBushMarketStation207();" );
  NextDestination.setAttribute( "onClick", "WhiteCityBusStation207();" );
}
function ShepherdsBushStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SHEPHERDS_BUSH_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ShepherdsBushGreen207();" );
  NextDestination.setAttribute( "onClick", "WhiteCityBusStation207();" );
}
function WhiteCityBusStation207(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "White City Bus Station";
  BackDestination.setAttribute( "onClick", "WhiteCityBusStation207Audio();" );
  NextDestination.setAttribute( "onClick", "WhiteCityBusStation207Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function WhiteCityBusStation207Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_WHITE_CITY_BUS_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ShepherdsBushStation207();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}


function YorkRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "York Road";
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function YorkRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_YORK_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "UxbridgeStation427();" );
}
function UxbridgeStation427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Uxbridge Station";
  BackDestination.setAttribute( "onClick", "UxbridgeStation427Audio();" );
  NextDestination.setAttribute( "onClick", "UxbridgeStation427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function UxbridgeStation427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_UXBRIDGE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "UxbridgeHighStreet427();" );
}
function UxbridgeHighStreet427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Uxbridge High Street";
  BackDestination.setAttribute( "onClick", "UxbridgeHighStreet427Audio();" );
  NextDestination.setAttribute( "onClick", "UxbridgeHighStreet427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function UxbridgeHighStreet427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_UXBRIDGE_HIGH_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "CrownWalk427();" );
}
function CrownWalk427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Crown Walk";
  BackDestination.setAttribute( "onClick", "CrownWalk427Audio();" );
  NextDestination.setAttribute( "onClick", "CrownWalk427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BelmontRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Belmont Road";
  BackDestination.setAttribute( "onClick", "BelmontRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "CrownWalk427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BelmontRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BELMONT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427();" );
  NextDestination.setAttribute( "onClick", "VineStreet427();" );
}
function CrownWalk427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CROWN_WALK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BelmontRoad427();" );
  NextDestination.setAttribute( "onClick", "VineStreet427();" );
}
function VineStreet427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Vine Street";
  BackDestination.setAttribute( "onClick", "VineStreet427Audio();" );
  NextDestination.setAttribute( "onClick", "VineStreet427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function VineStreet427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_VINE_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "StAndrewsChurch427();" );
}
function StAndrewsChurch427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Andrew's Church";
  BackDestination.setAttribute( "onClick", "StAndrewsChurch427Audio();" );
  NextDestination.setAttribute( "onClick", "StAndrewsChurch427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function CivicCentre427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Civic Centre";
  BackDestination.setAttribute( "onClick", "CivicCentre427Audio();" );
  NextDestination.setAttribute( "onClick", "StAndrewsChurch427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function CivicCentre427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CIVIC_CENTRE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CrownWalk427();" );
  NextDestination.setAttribute( "onClick", "ManorWaye427();" );
}
function StAndrewsChurch427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_ANDREWS_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CivicCentre427();" );
  NextDestination.setAttribute( "onClick", "ManorWaye427();" );
}
function ManorWaye427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Manor Waye";
  BackDestination.setAttribute( "onClick", "ManorWaye427Audio();" );
  NextDestination.setAttribute( "onClick", "ManorWaye427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ManorWaye427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MANOR_WAYNE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StAndrewsChurch427();" );
  NextDestination.setAttribute( "onClick", "TheGreenway427();" );
}
function TheGreenway427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Greenway";
  BackDestination.setAttribute( "onClick", "TheGreenway427Audio();" );
  NextDestination.setAttribute( "onClick", "TheGreenway427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function TheGreenway427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_GREENWAY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ManorWaye427();" );
  NextDestination.setAttribute( "onClick", "HillingdonCemetery427();" );
}
function HillingdonCemetery427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hillingdon Cemetery";
  BackDestination.setAttribute( "onClick", "HillingdonCemetery427Audio();" );
  NextDestination.setAttribute( "onClick", "HillingdonCemetery427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HillingdonCemetery427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HILLINGDON_CEMETERY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TheGreenway427();" );
  NextDestination.setAttribute( "onClick", "StJohnsChurch427();" );
}
function StJohnsChurch427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St John's Church";
  BackDestination.setAttribute( "onClick", "StJohnsChurch427Audio();" );
  NextDestination.setAttribute( "onClick", "StJohnsChurch427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function StJohnsChurch427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_JOHNS_CHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HillingdonCemetery427();" );
  NextDestination.setAttribute( "onClick", "HarlingtonRoad427();" );
}
function HarlingtonRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harlington Road";
  BackDestination.setAttribute( "onClick", "HarlingtonRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HarlingtonRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HarlingtonRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARLINGTON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "LongLane427();" );
}
function LongLane427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Long Lane";
  BackDestination.setAttribute( "onClick", "LongLane427Audio();" );
  NextDestination.setAttribute( "onClick", "LongLane427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ConeyGreen427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Coney Green";
  BackDestination.setAttribute( "onClick", "ConeyGreen427Audio();" );
  NextDestination.setAttribute( "onClick", "LongLane427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ConeyGreen427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CONEY_GREEN_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StJohnsChurch427();" );
  NextDestination.setAttribute( "onClick", "HillingdonPrimarySchool427();" );
}
function LongLane427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LONG_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ConeyGreen427();" );
  NextDestination.setAttribute( "onClick", "HillingdonPrimarySchool427();" );
}
function HillingdonPrimarySchool427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hillingdon Primary School";
  BackDestination.setAttribute( "onClick", "HillingdonPrimarySchool427Audio();" );
  NextDestination.setAttribute( "onClick", "HillingdonPrimarySchool427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HillingdonPrimarySchool427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HALLINDON_PRIMARY_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LongLane427();" );
  NextDestination.setAttribute( "onClick", "LeesRoad427();" );
}
function LeesRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lees Road";
  BackDestination.setAttribute( "onClick", "LeesRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "LeesRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function LeesRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LEES_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HillingdonPrimarySchool427();" );
  NextDestination.setAttribute( "onClick", "HeathRoad427();" );
}
function HeathRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Heath Road";
  BackDestination.setAttribute( "onClick", "HeathRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HeathRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HeathRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HEATH_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HewensRoad427();" );
}
function HewensRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hewens Road";
  BackDestination.setAttribute( "onClick", "HewensRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HewensRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HewensRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HEWENS_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesPoliceStation427();" );
}
function HayesPoliceStation427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes Police Station";
  BackDestination.setAttribute( "onClick", "HayesPoliceStation427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesPoliceStation427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HayesPoliceStation427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesEnd427();" );
}
function HayesEnd427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes End";
  BackDestination.setAttribute( "onClick", "HayesEnd427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesEnd427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function MorgansLane427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Morgans Lane";
  BackDestination.setAttribute( "onClick", "MorgansLane427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesEnd427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function WestDraytonRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Drayton Road";
  BackDestination.setAttribute( "onClick", "WestDraytonRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesEnd427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function NewRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "New Road";
  BackDestination.setAttribute( "onClick", "NewRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesEnd427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function NewRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NEW_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LeesRoad427();" );
  NextDestination.setAttribute( "onClick", "ParkRoad427();" );
}
function WestDraytonRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_DRAYTON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "NewRoad427();" );
  NextDestination.setAttribute( "onClick", "ParkRoad427();" );
}
function MorgansLane427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MORGANS_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WestDraytonRoad427();" );
  NextDestination.setAttribute( "onClick", "ParkRoad427();" );
}
function HayesEnd427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_END_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MorgansLane427();" );
  NextDestination.setAttribute( "onClick", "ParkRoad427();" );
}
function ParkRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Park Road";
  BackDestination.setAttribute( "onClick", "ParkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "ParkRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ParkRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PARK_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesEnd427();" );
  NextDestination.setAttribute( "onClick", "RosedalePark427();" );
}
function RosedalePark427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Rosedale Park";
  BackDestination.setAttribute( "onClick", "RosedalePark427Audio();" );
  NextDestination.setAttribute( "onClick", "RosedalePark427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function RosedalePark427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ROSEDALE_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ParkRoad427();" );
  NextDestination.setAttribute( "onClick", "UxbridgeCountyCourt427();" );
}
function UxbridgeCountyCourt427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Uxbridge County Court";
  BackDestination.setAttribute( "onClick", "UxbridgeCountyCourt427Audio();" );
  NextDestination.setAttribute( "onClick", "UxbridgeCountyCourt427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function UxbridgeCountyCourt427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_UXBRIDGE_COUNTY_COURT_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RosedalePark427();" );
  NextDestination.setAttribute( "onClick", "ChurchRoad427();" );
}
function ChurchRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Road";
  BackDestination.setAttribute( "onClick", "ChurchRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "ChurchRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function ChurchRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHURCH_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "UxbridgeCountyCourt427();" );
  NextDestination.setAttribute( "onClick", "BelmoreParade427();" );
}
function BelmoreParade427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Belmore Parade";
  BackDestination.setAttribute( "onClick", "BelmoreParade427Audio();" );
  NextDestination.setAttribute( "onClick", "BelmoreParade427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BelmoreParade427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BELMORE_PARADE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChurchRoad427();" );
  NextDestination.setAttribute( "onClick", "CravenClose427();" );
}
function CravenClose427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Craven Close";
  BackDestination.setAttribute( "onClick", "CravenClose427Audio();" );
  NextDestination.setAttribute( "onClick", "CravenClose427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function CravenClose427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CRAVEN_CLOSE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "TheGrapes427();" );
}
function TheGrapes427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Grapes";
  BackDestination.setAttribute( "onClick", "TheGrapes427Audio();" );
  NextDestination.setAttribute( "onClick", "TheGrapes427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function CentralAvenue427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Central Avenue";
  BackDestination.setAttribute( "onClick", "CentralAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "TheGrapes427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function CentralAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CENTRAL_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BelmoreParade427();" );
  NextDestination.setAttribute( "onClick", "HayesByPass427();" );
}
function TheGrapes427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_GRAPES_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CentralAvenue427();" );
  NextDestination.setAttribute( "onClick", "HayesByPass427();" );
}
function HayesByPass427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes By-Pass";
  BackDestination.setAttribute( "onClick", "HayesByPass427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesByPass427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function HayesByPass427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_BY_PASS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TheGrapes427();" );
  NextDestination.setAttribute( "onClick", "BrooksideRoad427();" );
}
function BrooksideRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brookside Road";
  BackDestination.setAttribute( "onClick", "BrooksideRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "BrooksideRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function BrooksideRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROOKSIDE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge427();" );
}
function HayesBridge427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hayes Bridge";
  BackDestination.setAttribute( "onClick", "HayesBridge427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function DelamereRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Delamere Road";
  BackDestination.setAttribute( "onClick", "DelamereRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function SpringfieldRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Springfield Road";
  BackDestination.setAttribute( "onClick", "SpringfieldRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HayesBridge427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function SpringfieldRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SPRINGFIELD_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesByPass427();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad427();" );
}
function DelamereRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DELAMERE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SpringfieldRoad427();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad427();" );
}
function HayesBridge427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAYES_BRIDGE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DelamereRoad427();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad427();" );
}
function TrinityRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Trinity Road";
  BackDestination.setAttribute( "onClick", "TrinityRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "TrinityRoad427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function TrinityRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TRINITY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HayesBridge427();" );
  NextDestination.setAttribute( "onClick", "NorthcoteAvenue427();" );
}
function NorthcoteAvenue427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northcote Avenue";
  BackDestination.setAttribute( "onClick", "NorthcoteAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "NorthcoteAvenue427Audio();" );
  // topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function NorthcoteAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTHCOTE_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadwayStGeorgesAvenue427();" );
}
function SouthallBroadwayStGeorgesAvenue427(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Southall Broadway / St Georges Avenue";
  BackDestination.setAttribute( "onClick", "SouthallBroadwayStGeorgesAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadwayStGeorgesAvenue427Audio();" );
  topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function SouthallBroadwayStGeorgesAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_BROADWAY_ST_GEORGES_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation427();" );
}
function SouthallPoliceStation427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Police Station";
  BackDestination.setAttribute( "onClick", "SouthallPoliceStation427Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation427Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function AlexandraAvenue427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Alexandra Avenue";
  BackDestination.setAttribute( "onClick", "AlexandraAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation427Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function AbbottsRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Abbotts Road";
  BackDestination.setAttribute( "onClick", "AbbottsRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPoliceStation427Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function AbbottsRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ABBOTT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TrinityRoad427();" );
  NextDestination.setAttribute( "onClick", "SouthallPark427();" );
}
function AlexandraAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ALEXANDRA_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AbbottsRoad427();" );
  NextDestination.setAttribute( "onClick", "SouthallPark427();" );
}
function SouthallPoliceStation427(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AlexandraAvenue427();" );
  NextDestination.setAttribute( "onClick", "SouthallPark427();" );
}
function SouthallPark427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Park";
  BackDestination.setAttribute( "onClick", "SouthallPark427Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallPark427Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function SouthallPark427(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallPoliceStation427();" );
  NextDestination.setAttribute( "onClick", "DormersWellsLane427();" );
}
function DormersWellsLane427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dormer's Wells Lane";
  BackDestination.setAttribute( "onClick", "DormersWellsLane427Audio();" );
  NextDestination.setAttribute( "onClick", "DormersWellsLane427Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function DormersWellsLane427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DORMERS_WELLS_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallPark427();" );
  NextDestination.setAttribute( "onClick", "LyndhurstAvenue427();" );
}
function LyndhurstAvenue427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Lyndhurst Avenue";
  BackDestination.setAttribute( "onClick", "LyndhurstAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "LyndhurstAvenue427Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function LyndhurstAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LYNDHURST_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DormersWellsLane427();" );
  NextDestination.setAttribute( "onClick", "IronBridge427();" );
}
function IronBridge427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Iron Bridge";
  BackDestination.setAttribute( "onClick", "IronBridge427Audio();" );
  NextDestination.setAttribute( "onClick", "IronBridge427Audio();" );
  // topTextYes.style.animationName = "SouthallBroadwayStGeorgesAvenue";
}
function IronBridge427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_IRON_BRIDGE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "LyndhurstAvenue427();" );
  NextDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark427();" );
}
function StBernardsGatehouseWindmillPark427(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "St Bernard's Gatehouse / Windmill Park";
  BackDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark427Audio();" );
  NextDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark427Audio();" );
  topTextYes.style.animationName = "StBernardsGatehouseWindmillPark";
}
function StBernardsGatehouseWindmillPark427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_BERNARDS_GATEHOUSE_WINDMILL_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "IronBridge427();" );
  NextDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive427();" );
}
function EalingHospitalWharncliffeDrive427(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Ealing Hospital / Wharncliffe Drive";
  BackDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingHospitalWharncliffeDrive427Audio();" );
  topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function EalingHospitalWharncliffeDrive427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_HOSPITAL_WHARNCLIFFE_DRIVE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad427();" );
}
function HalfAcreRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Half Acre Road";
  BackDestination.setAttribute( "onClick", "HalfAcreRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function EalingHospital427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "EalingHospital427";
  BackDestination.setAttribute( "onClick", "EalingHospital427Audio();" );
  NextDestination.setAttribute( "onClick", "HalfAcreRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function EalingHospital427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_HOSPITAL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StBernardsGatehouseWindmillPark427();" );
  NextDestination.setAttribute( "onClick", "HanwellBroadway427();" );
}
function HalfAcreRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HALF_ACRE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingHospital427();" );
  NextDestination.setAttribute( "onClick", "HanwellBroadway427();" );
}
function HanwellBroadway427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hanwell Broadway";
  BackDestination.setAttribute( "onClick", "HanwellBroadway427Audio();" );
  NextDestination.setAttribute( "onClick", "HanwellBroadway427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function HanwellBroadway427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HANWELL_BROADWAY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HalfAcreRoad427();" );
  NextDestination.setAttribute( "onClick", "GrosvenorRoad427();" );
}
function GrosvenorRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Grosvenor Road";
  BackDestination.setAttribute( "onClick", "GrosvenorRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "GrosvenorRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function ChurchRoadtwo427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Road";
  BackDestination.setAttribute( "onClick", "ChurchRoadtwo427Audio();" );
  NextDestination.setAttribute( "onClick", "GrosvenorRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function ChurchRoadtwo427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHURCH_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HanwellBroadway427();" );
  NextDestination.setAttribute( "onClick", "WestEalingBroadway427();" );
}
function GrosvenorRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GROSVENOR_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChurchRoadtwo427();" );
  NextDestination.setAttribute( "onClick", "WestEalingBroadway427();" );
}
function WestEalingBroadway427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Ealing Broadway";
  BackDestination.setAttribute( "onClick", "WestEalingBroadway427Audio();" );
  NextDestination.setAttribute( "onClick", "WestEalingBroadway427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function WestEalingBroadway427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_EALING_BROADWAY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GrosvenorRoad427();" );
  NextDestination.setAttribute( "onClick", "DeanGardensBedfordRoad427();" );
}
function DeanGardensBedfordRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dean Gardens / Bedford Road";
  BackDestination.setAttribute( "onClick", "DeanGardensBedfordRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "DeanGardensBedfordRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function DeanGardensBedfordRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DEAN_GARDENS_BEDFORD_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WestEalingBroadway427();" );
  NextDestination.setAttribute( "onClick", "BroughtonRoad427();" );
}
function BroughtonRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Broughton Road";
  BackDestination.setAttribute( "onClick", "BroughtonRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "BroughtonRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function BroughtonRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROUGHTON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "StLeonardsRoad427();" );
}
function StLeonardsRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Leonard's Road";
  BackDestination.setAttribute( "onClick", "StLeonardsRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "StLeonardsRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function StLeonardsRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_LEONARDS_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "LongfieldAvenue427();" );
}
function LongfieldAvenue427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Longfield Avenue";
  BackDestination.setAttribute( "onClick", "LongfieldAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "LongfieldAvenue427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function LongfieldAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LONGFIELD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "BondStreet427();" );
}
function BondStreet427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bond Street";
  BackDestination.setAttribute( "onClick", "BondStreet427Audio();" );
  NextDestination.setAttribute( "onClick", "BondStreet427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function BondStreet427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOND_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation427();" );
}
function EalingBroadwayStation427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Broadway Station";
  BackDestination.setAttribute( "onClick", "EalingBroadwayStation427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function Christchurch427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Christchurch";
  BackDestination.setAttribute( "onClick", "Christchurch427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function EalingPoliceStation427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Police Station";
  BackDestination.setAttribute( "onClick", "EalingPoliceStation427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function DaneRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dane Road";
  BackDestination.setAttribute( "onClick", "DaneRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function NorthfieldAvenue427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northfield Avenue";
  BackDestination.setAttribute( "onClick", "NorthfieldAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStation427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function NorthfieldAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTHFIELD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DeanGardensBedfordRoad427();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad427();" );
}
function DaneRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DANE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "NorthfieldAvenue427();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad427();" );
}
function EalingPoliceStation427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_POLICE_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DaneRoad427();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad427();" );
}
function Christchurch427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHRISTCHURCH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingPoliceStation427();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad427();" );
}
function EalingBroadwayStation427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_BROADWAY_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "Christchurch427();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad427();" );
}
function NorthCommonRoad427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "North Common Road";
  BackDestination.setAttribute( "onClick", "NorthCommonRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "NorthCommonRoad427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function NorthCommonRoad427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTH_COMMON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "HangerLane427();" );
}
function HangerLane427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hanger Lane";
  BackDestination.setAttribute( "onClick", "HangerLane427Audio();" );
  NextDestination.setAttribute( "onClick", "HangerLane427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function HangerLane427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HANGER_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingBroadwayStation427();" );
  NextDestination.setAttribute( "onClick", "EalingCommonStation427();" );
}
function EalingCommonStation427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Common Station";
  BackDestination.setAttribute( "onClick", "EalingCommonStation427Audio();" );
  NextDestination.setAttribute( "onClick", "EalingCommonStation427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function EalingCommonStation427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_COMMON_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HangerLane427();" );
  NextDestination.setAttribute( "onClick", "BirchGrove427();" );
}
function BirchGrove427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Birch Grove";
  BackDestination.setAttribute( "onClick", "BirchGrove427Audio();" );
  NextDestination.setAttribute( "onClick", "BirchGrove427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function BirchGrove427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BIRCH_GROVE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingCommonStation427();" );
  NextDestination.setAttribute( "onClick", "TwyfordAvenue427();" );
}
function TwyfordAvenue427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Twyford Avenue";
  BackDestination.setAttribute( "onClick", "TwyfordAvenue427Audio();" );
  NextDestination.setAttribute( "onClick", "TwyfordAvenue427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function TwyfordAvenue427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TWYFORD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BirchGrove427();" );
  NextDestination.setAttribute( "onClick", "DenehurstGardens427();" );
}
function DenehurstGardens427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Denehurst Gardens";
  BackDestination.setAttribute( "onClick", "DenehurstGardens427Audio();" );
  NextDestination.setAttribute( "onClick", "DenehurstGardens427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function DenehurstGardens427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Denehurst_Gardens_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TwyfordAvenue427();" );
  NextDestination.setAttribute( "onClick", "KingStreet427();" );
}
function KingStreet427(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "King Street";
  BackDestination.setAttribute( "onClick", "KingStreet427Audio();" );
  NextDestination.setAttribute( "onClick", "KingStreet427Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function KingStreet427Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_KING_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
