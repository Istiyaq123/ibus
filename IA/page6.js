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
function PerivaleTescoE5btn(){
  ToplocksEstateGladeLaneE5()
  showDestination.setAttribute( "onClick", "PerivaleTescoE5ibus();" );
}
function SouthallToplocksEstateE5btn(){
  PerivaleTescoE5()
  showDestination.setAttribute( "onClick", "SouthallToplocksEstateE5ibus();" );
}
function EalingBroadwayE7btn(){
  RuislipStationE7()
  showDestination.setAttribute( "onClick", "EalingBroadwayE7ibus();" );
}
function RuislipE7btn(){
  EalingBroadwayStationE7()
  showDestination.setAttribute( "onClick", "RuislipE7ibus();" );
}
function EalingBroadwayE10btn(){
  IslipManorRoadE10()
  showDestination.setAttribute( "onClick", "EalingBroadwayE10ibus();" );
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
function Uxbridge427ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "427 to Uxbridge";
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
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_UXBRIDGE_001.mp3";
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
function PerivaleTescoE5ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "E5 to Perivale, Tesco";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_E5_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_PERIVALE_TESCO_001.mp3";
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
function SouthallToplocksEstateE5ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "E5 to Southall, Toplocks Estate";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_E5_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_SOUTHALL_TOPLOCKS_ESTATE_001.mp3";
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
function EalingBroadwayE7ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "E5 to Ealing Broadway";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_E7_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_EALING_BROADWAY_001.mp3";
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
function RuislipE7ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "E5 to Ealing Broadway";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_E7_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_RUISLIP.mp3";
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
function EalingBroadwayE10ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "E5 to Ealing Broadway";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_E10_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_EALING_BROADWAY_001.mp3";
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


function ToplocksEstateGladeLaneE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Toplocks Estate / Glade Lane";
  BackDestination.setAttribute( "onClick", "ToplocksEstateGladeLaneE5Audio();" );
  NextDestination.setAttribute( "onClick", "ToplocksEstateGladeLaneE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function ToplocksEstateGladeLaneE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ROPLOCKS_ESTATE_GLADE_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "McnairRoadE5();" );
}
function McnairRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Mcnair Road";
  BackDestination.setAttribute( "onClick", "McnairRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "McnairRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function McnairRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MCNAIR_rOAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ToplocksEstateGladeLaneE5();" );
  NextDestination.setAttribute( "onClick", "GregoryRoadE5();" );
}
function GregoryRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gregory Road";
  BackDestination.setAttribute( "onClick", "GregoryRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "GregoryRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function TrubshawRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Trubshaw Road";
  BackDestination.setAttribute( "onClick", "TrubshawRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "GregoryRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function TrubshawRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TRUBSHAW_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "McnairRoadE5();" );
  NextDestination.setAttribute( "onClick", "HillaryRoadE5();" );
}
function GregoryRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREGORY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TrubshawRoadE5();" );
  NextDestination.setAttribute( "onClick", "HillaryRoadE5();" );
}
function HillaryRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hillary Road";
  BackDestination.setAttribute( "onClick", "HillaryRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "HillaryRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function HillaryRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HILLARY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GregoryRoadE5();" );
  NextDestination.setAttribute( "onClick", "TensingRoadE5();" );
}
function TensingRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Tensing Road";
  BackDestination.setAttribute( "onClick", "TensingRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "TensingRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function TensingRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TENSING_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HillaryRoadE5();" );
  NextDestination.setAttribute( "onClick", "HuntRoadE5();" );
}
function HuntRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Hunt Road";
  BackDestination.setAttribute( "onClick", "HuntRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "HuntRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function HuntRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HUNT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TensingRoadE5();" );
  NextDestination.setAttribute( "onClick", "HavelockRoadE5();" );
}
function HavelockRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Havelock Road";
  BackDestination.setAttribute( "onClick", "HavelockRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "HavelockRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function HavelockRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HAVELOCK_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "NorwoodGardensE5();" );
}
function NorwoodGardensE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Norwood Gardens";
  BackDestination.setAttribute( "onClick", "NorwoodGardensE5Audio();" );
  NextDestination.setAttribute( "onClick", "NorwoodGardensE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function NorwoodGardensE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORWOOD_GARDENS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "AdelaideRoadE5();" );
}
function AdelaideRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adelaide Road";
  BackDestination.setAttribute( "onClick", "AdelaideRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "AdelaideRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function AdelaideRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ADELAIDE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "MontagueWayeE5();" );
}
function MontagueWayeE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Montague Waye";
  BackDestination.setAttribute( "onClick", "MontagueWayeE5Audio();" );
  NextDestination.setAttribute( "onClick", "MontagueWayeE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function MontagueWayeE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MONTAGUE_WAYNE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "FeatherstoneRoadE5();" );
}
function FeatherstoneRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Featherstone Road";
  BackDestination.setAttribute( "onClick", "FeatherstoneRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "FeatherstoneRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function SussexRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sussex Road";
  BackDestination.setAttribute( "onClick", "SussexRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "FeatherstoneRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function WalthamRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Waltham Road";
  BackDestination.setAttribute( "onClick", "WalthamRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "FeatherstoneRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function GuruNanakRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Guru Nanak Road";
  BackDestination.setAttribute( "onClick", "GuruNanakRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "FeatherstoneRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function MarlowRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Marlow Road";
  BackDestination.setAttribute( "onClick", "MarlowRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "FeatherstoneRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function MarlowRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MARLOW_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HuntRoadE5();" );
  NextDestination.setAttribute( "onClick", "TheGreenE5();" );
}
function GuruNanakRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GURU_NANAK_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MarlowRoadE5();" );
  NextDestination.setAttribute( "onClick", "TheGreenE5();" );
}
function WalthamRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WALTHAM_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GuruNanakRoadE5();" );
  NextDestination.setAttribute( "onClick", "TheGreenE5();" );
}
function SussexRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SUSSEX_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WalthamRoadE5();" );
  NextDestination.setAttribute( "onClick", "TheGreenE5();" );
}
function FeatherstoneRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_FEATHERS_STONE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SussexRoadE5();" );
  NextDestination.setAttribute( "onClick", "TheGreenE5();" );
}
function TheGreenE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "The Green";
  BackDestination.setAttribute( "onClick", "TheGreenE5Audio();" );
  NextDestination.setAttribute( "onClick", "TheGreenE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function TheGreenE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_THE_GREEN_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "FeatherstoneRoadE5();" );
  NextDestination.setAttribute( "onClick", "ParkAvenueE5();" );
}
function ParkAvenueE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Park Avenue";
  BackDestination.setAttribute( "onClick", "ParkAvenueE5Audio();" );
  NextDestination.setAttribute( "onClick", "ParkAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function SouthallStationE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Station";
  BackDestination.setAttribute( "onClick", "SouthallStationE5Audio();" );
  NextDestination.setAttribute( "onClick", "ParkAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function SouthallStationE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TheGreenE5();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadwayE5();" );
}
function ParkAvenueE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PARK_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallStationE5();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadwayE5();" );
}
function SouthallBroadwayE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Broadway";
  BackDestination.setAttribute( "onClick", "SouthallBroadwayE5Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallBroadwayE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function SouthallBroadwayE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_BROADWAY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ParkAvenueE5();" );
  NextDestination.setAttribute( "onClick", "SouthallTownHallE5();" );
}
function SouthallTownHallE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Southall Town Hall";
  BackDestination.setAttribute( "onClick", "SouthallTownHallE5Audio();" );
  NextDestination.setAttribute( "onClick", "SouthallTownHallE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function SouthallTownHallE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SOUTHALL_TOWN_HALL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "NorthAvenueE5();" );
}
function NorthAvenueE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "North Avenue";
  BackDestination.setAttribute( "onClick", "NorthAvenueE5Audio();" );
  NextDestination.setAttribute( "onClick", "NorthAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function HighStreetSouthallTownHallE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "High Street / Southall Town Hall";
  BackDestination.setAttribute( "onClick", "HighStreetSouthallTownHallE5Audio();" );
  NextDestination.setAttribute( "onClick", "NorthAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function HighStreetSouthallTownHallE5(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HIGH_STREET_SOUTHALL_TOWN_HALL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SouthallBroadwayE5();" );
  NextDestination.setAttribute( "onClick", "CarlyleAvenueE5();" );
}
function NorthAvenueE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTH_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HighStreetSouthallTownHallE5();" );
  NextDestination.setAttribute( "onClick", "CarlyleAvenueE5();" );
}
function CarlyleAvenueE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Carlyle Avenue";
  BackDestination.setAttribute( "onClick", "CarlyleAvenueE5Audio();" );
  NextDestination.setAttribute( "onClick", "CarlyleAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function CarlyleAvenueE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CARLYE_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "NorthAvenueE5();" );
  NextDestination.setAttribute( "onClick", "TelfordRoadE5();" );
}
function TelfordRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Telford Road";
  BackDestination.setAttribute( "onClick", "TelfordRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "TelfordRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function DenbighRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Denbigh Road";
  BackDestination.setAttribute( "onClick", "DenbighRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "TelfordRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function DenbighRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DENBIGH_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CarlyleAvenueE5();" );
  NextDestination.setAttribute( "onClick", "WallisRoadE5();" );
}
function TelfordRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TELFORD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DenbighRoadE5();" );
  NextDestination.setAttribute( "onClick", "WallisRoadE5();" );
}
function WallisRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wallis Road";
  BackDestination.setAttribute( "onClick", "WallisRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "WallisRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function WallisRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WALLIS_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TelfordRoadE5();" );
  NextDestination.setAttribute( "onClick", "GolfLinksEstateE5();" );
}
function GolfLinksEstateE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Golf Links Estate";
  BackDestination.setAttribute( "onClick", "GolfLinksEstateE5Audio();" );
  NextDestination.setAttribute( "onClick", "GolfLinksEstateE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function GolfLinksEstateE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GOLF_LINK_ESTATE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WallisRoadE5();" );
  NextDestination.setAttribute( "onClick", "RedcroftRoadE5();" );
}
function RedcroftRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Redcroft Road";
  BackDestination.setAttribute( "onClick", "RedcroftRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "RedcroftRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function RedcroftRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_REDCROFT_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GolfLinksEstateE5();" );
  NextDestination.setAttribute( "onClick", "WindmillLaneE5();" );
}
function WindmillLaneE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Windmill Lane";
  BackDestination.setAttribute( "onClick", "WindmillLaneE5Audio();" );
  NextDestination.setAttribute( "onClick", "WindmillLaneE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function WindmillLaneE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WINDMILL_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RedcroftRoadE5();" );
  NextDestination.setAttribute( "onClick", "GreenfordDepotE5();" );
}
function GreenfordDepotE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenford Depot";
  BackDestination.setAttribute( "onClick", "GreenfordDepotE5Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordDepotE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function GreenfordParkE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenford Park";
  BackDestination.setAttribute( "onClick", "GreenfordParkE5Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordDepotE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function GreenfordParkE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREENFORD_PARK_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WindmillLaneE5();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE5();" );
}
function GreenfordDepotE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREENFORD_DEPOT_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GreenfordParkE5();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE5();" );
}
function CliftonRoadE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clifton Road";
  BackDestination.setAttribute( "onClick", "CliftonRoadE5Audio();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function CardinalWisemanHighSchoolE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cardinal Wiseman High School";
  BackDestination.setAttribute( "onClick", "CardinalWisemanHighSchoolE5Audio();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function CardinalWisemanHighSchoolE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CARDINAL_WISEMAN_HIGH_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GreenfordDepotE5();" );
  NextDestination.setAttribute( "onClick", "GreenfordAvenueE5();" );
}
function CliftonRoadE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CLIFTON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CardinalWisemanHighSchoolE5();" );
  NextDestination.setAttribute( "onClick", "GreenfordAvenueE5();" );
}
function GreenfordAvenueE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenford Avenue";
  BackDestination.setAttribute( "onClick", "GreenfordAvenueE5Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function GreenfordAvenueE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREENFORD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CliftonRoadE5();" );
  NextDestination.setAttribute( "onClick", "CuckooAvenueE5();" );
}
function CuckooAvenueE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cuckoo Avenue";
  BackDestination.setAttribute( "onClick", "CuckooAvenueE5Audio();" );
  NextDestination.setAttribute( "onClick", "CuckooAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function CuckooAvenueE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUCKOO_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GreenfordAvenueE5();" );
  NextDestination.setAttribute( "onClick", "GurnellLeisureCentreE5();" );
}
function GurnellLeisureCentreE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gurnell Leisure Centre";
  BackDestination.setAttribute( "onClick", "GurnellLeisureCentreE5Audio();" );
  NextDestination.setAttribute( "onClick", "GurnellLeisureCentreE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function GurnellLeisureCentreE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Gurnell_Leisure_Centre_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CuckooAvenueE5();" );
  NextDestination.setAttribute( "onClick", "PerivaleLaneE5();" );
}
function PerivaleLaneE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Perivale Lane";
  BackDestination.setAttribute( "onClick", "PerivaleLaneE5Audio();" );
  NextDestination.setAttribute( "onClick", "PerivaleLaneE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function PerivaleLaneE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PERIVALE_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GurnellLeisureCentreE5();" );
  NextDestination.setAttribute( "onClick", "MedwayParadeE5();" );
}
function MedwayParadeE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Medway Parade";
  BackDestination.setAttribute( "onClick", "MedwayParadeE5Audio();" );
  NextDestination.setAttribute( "onClick", "MedwayParadeE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function MedwayParadeE5(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MEDWAY_PARADE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "PerivaleLaneE5();" );
  NextDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
}
function TeignmouthGardensE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Teignmouth Gardens";
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5Audio();" );
  NextDestination.setAttribute( "onClick", "TeignmouthGardensE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function TeignmouthGardensE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_TEIGNMOUTH_GARDENS_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MedwayParadeE5();" );
  NextDestination.setAttribute( "onClick", "BidefordAvenueE5();" );
}
function BidefordAvenueE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Bideford Avenue";
  BackDestination.setAttribute( "onClick", "BidefordAvenueE5Audio();" );
  NextDestination.setAttribute( "onClick", "BidefordAvenueE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function BidefordAvenueE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BIDEFORD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YorkRoad427Audio();" );
  NextDestination.setAttribute( "onClick", "PerivaleTescoE5();" );
}
function PerivaleTescoE5(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Perivale Tesco";
  BackDestination.setAttribute( "onClick", "PerivaleTescoE5Audio();" );
  NextDestination.setAttribute( "onClick", "PerivaleTescoE5Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function PerivaleTescoE5Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PERIVALE_TESCO_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function RuislipStationE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ruislip Station";
  BackDestination.setAttribute( "onClick", "RuislipStationE7Audio();" );
  NextDestination.setAttribute( "onClick", "RuislipStationE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function RuislipStationE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RUISLIP_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "BrickwallLaneE7();" );
}
function BrickwallLaneE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Brickwall Lane";
  BackDestination.setAttribute( "onClick", "BrickwallLaneE7Audio();" );
  NextDestination.setAttribute( "onClick", "BrickwallLaneE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function BrickwallLaneE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BRICKWALL_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RuislipStationE7();" );
  NextDestination.setAttribute( "onClick", "MidcroftE7();" );
}
function MidcroftE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Midcroft";
  BackDestination.setAttribute( "onClick", "MidcroftE7Audio();" );
  NextDestination.setAttribute( "onClick", "MidcroftE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function MidcroftE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_MIDCROFT_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BrickwallLaneE7();" );
  NextDestination.setAttribute( "onClick", "ChurchAvenueE7();" );
}
function ChurchAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Avenue";
  BackDestination.setAttribute( "onClick", "ChurchAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "ChurchAvenueE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function ChurchAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHURCH_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "MidcroftE7();" );
  NextDestination.setAttribute( "onClick", "ChichesterAvenueE7();" );
}
function ChichesterAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Chichester Avenue";
  BackDestination.setAttribute( "onClick", "ChichesterAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "ChichesterAvenueE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function ChichesterAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHICHESTER_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChurchAvenueE7();" );
  NextDestination.setAttribute( "onClick", "NorthdownCloseE7();" );
}
function NorthdownCloseE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Northdown Close";
  BackDestination.setAttribute( "onClick", "NorthdownCloseE7Audio();" );
  NextDestination.setAttribute( "onClick", "NorthdownCloseE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function GrosvenorValeE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Grosvenor Vale";
  BackDestination.setAttribute( "onClick", "GrosvenorValeE7Audio();" );
  NextDestination.setAttribute( "onClick", "NorthdownCloseE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function RuislipRugbyFootballClubE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ruislip Rugby Football Club";
  BackDestination.setAttribute( "onClick", "RuislipRugbyFootballClubE7Audio();" );
  NextDestination.setAttribute( "onClick", "NorthdownCloseE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function RuislipRugbyFootballClubE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RUISLIP_RUGBY_FOOTBALL_CLUB_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ChichesterAvenueE7();" );
  NextDestination.setAttribute( "onClick", "BerkeleyCloseE7();" );
}
function GrosvenorValeE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GROSVENOR_VALE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RuislipRugbyFootballClubE7();" );
  NextDestination.setAttribute( "onClick", "BerkeleyCloseE7();" );
}
function NorthdownCloseE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_NORTHDOWN_CLOSE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GrosvenorValeE7();" );
  NextDestination.setAttribute( "onClick", "BerkeleyCloseE7();" );
}
function BerkeleyCloseE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Berkeley Close";
  BackDestination.setAttribute( "onClick", "BerkeleyCloseE7Audio();" );
  NextDestination.setAttribute( "onClick", "BerkeleyCloseE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function BerkeleyCloseE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BERKELEY_CLOSE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "NorthdownCloseE7();" );
  NextDestination.setAttribute( "onClick", "RuislipGardensStationE7();" );
}
function RuislipGardensStationE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ruislip Gardens Station";
  BackDestination.setAttribute( "onClick", "RuislipGardensStationE7Audio();" );
  NextDestination.setAttribute( "onClick", "RuislipGardensStationE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function RuislipGardensStationE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RUISLIP_GARDENS_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BerkeleyCloseE7();" );
  NextDestination.setAttribute( "onClick", "RAFNortholtE7();" );
}
function RAFNortholtE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "R A F Northolt";
  BackDestination.setAttribute( "onClick", "RAFNortholtE7Audio();" );
  NextDestination.setAttribute( "onClick", "RAFNortholtE7Audio();" );
  // topTextYes.style.animationName = "EalingHospitalWharncliffeDrive";
}
function RAFNortholtE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RAF_NORTHOLT_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RuislipGardensStationE7();" );
  NextDestination.setAttribute( "onClick", "StationApproachSouthRuislipStnE7();" );
}
function StationApproachSouthRuislipStnE7(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Station Approach / South Ruislip Stn";
  BackDestination.setAttribute( "onClick", "StationApproachSouthRuislipStnE7Audio();" );
  NextDestination.setAttribute( "onClick", "StationApproachSouthRuislipStnE7Audio();" );
  topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function StationApproachSouthRuislipStnE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STATION_APPROACH_SOUTH_RUISLIP_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "PolishWarMemorialE7();" );
}
function PolishWarMemorialE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Polish War Memorial";
  BackDestination.setAttribute( "onClick", "PolishWarMemorialE7Audio();" );
  NextDestination.setAttribute( "onClick", "PolishWarMemorialE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function StationApproachE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Station Approach";
  BackDestination.setAttribute( "onClick", "StationApproachE7Audio();" );
  NextDestination.setAttribute( "onClick", "PolishWarMemorialE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function StationApproachE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_STATION_APPROACH_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RAFNortholtE7();" );
  NextDestination.setAttribute( "onClick", "HarveyRoadE7();" );
}
function PolishWarMemorialE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_POLISH_WAR_MEMORIAL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StationApproachE7();" );
  NextDestination.setAttribute( "onClick", "HarveyRoadE7();" );
}
function HarveyRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Harvey Road";
  BackDestination.setAttribute( "onClick", "HarveyRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "HarveyRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function HarveyRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HARVEY_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "PolishWarMemorialE7();" );
  NextDestination.setAttribute( "onClick", "HensonPlaceE7();" );
}
function HensonPlaceE7(){
  topTextYes.style.display ="no";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Henson Place";
  BackDestination.setAttribute( "onClick", "HensonPlaceE7Audio();" );
  NextDestination.setAttribute( "onClick", "HensonPlaceE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function HensonPlaceE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_HENSON_PLACE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "OldRuislipRoadE7();" );
}
function OldRuislipRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Old Ruislip Road";
  BackDestination.setAttribute( "onClick", "OldRuislipRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "OldRuislipRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function OldRuislipRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_OLD_RUISLIP_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "HarveyRoadE7();" );
  NextDestination.setAttribute( "onClick", "ChurchRoadE7();" );
}
function ChurchRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Church Road";
  BackDestination.setAttribute( "onClick", "ChurchRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "ChurchRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function ChurchRoadE7(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CHURCH_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "WayfarerRoadE7();" );
}
function WayfarerRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Wayfarer Road";
  BackDestination.setAttribute( "onClick", "WayfarerRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "WayfarerRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function YeadingLaneE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Yeading Lane";
  BackDestination.setAttribute( "onClick", "YeadingLaneE7Audio();" );
  NextDestination.setAttribute( "onClick", "WayfarerRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function YeadingLaneE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_YEADING_LANE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "OldRuislipRoadE7();" );
  NextDestination.setAttribute( "onClick", "BroadmeadRoadE7();" );
}
function WayfarerRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WAYFARER_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "YeadingLaneE7();" );
  NextDestination.setAttribute( "onClick", "BroadmeadRoadE7();" );
}
function BroadmeadRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Broadmead Road";
  BackDestination.setAttribute( "onClick", "BroadmeadRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "BroadmeadRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function BroadmeadRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BROADMEAD_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WayfarerRoadE7();" );
  NextDestination.setAttribute( "onClick", "AdrienneAvenueE7();" );
}
function AdrienneAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Adrienne Avenue";
  BackDestination.setAttribute( "onClick", "AdrienneAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "AdrienneAvenueE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function AdrienneAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ADRIENNE_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BroadmeadRoadE7();" );
  NextDestination.setAttribute( "onClick", "GreenfordHighSchoolE7();" );
}
function GreenfordHighSchoolE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenford High School";
  BackDestination.setAttribute( "onClick", "GreenfordHighSchoolE7Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordHighSchoolE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function GreenfordHighSchoolE7(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREENFORD_HIGH_SCHOOL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "AdrienneAvenueE7();" );
  NextDestination.setAttribute( "onClick", "EastmeadAvenueE7();" );
}
function EastmeadAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Eastmead Avenue";
  BackDestination.setAttribute( "onClick", "EastmeadAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "EastmeadAvenueE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function EastmeadAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EASTMEAD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "PembrokeRoadE7();" );
}
function PembrokeRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Pembroke Road";
  BackDestination.setAttribute( "onClick", "PembrokeRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "PembrokeRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function BeechwoodAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Beechwood Avenue";
  BackDestination.setAttribute( "onClick", "BeechwoodAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "PembrokeRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function BeechwoodAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BEECHWOOD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GreenfordHighSchoolE7();" );
  NextDestination.setAttribute( "onClick", "GreenfordBroadwayE7();" );
}
function PembrokeRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_PEMBROKE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "BeechwoodAvenueE7();" );
  NextDestination.setAttribute( "onClick", "GreenfordBroadwayE7();" );
}
function GreenfordBroadwayE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenford Broadway";
  BackDestination.setAttribute( "onClick", "GreenfordBroadwayE7Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordBroadwayE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function GreenfordBroadwayE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREENFORD_BROADWAY_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "PembrokeRoadE7();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE7();" );
}
function CliftonRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Clifton Road";
  BackDestination.setAttribute( "onClick", "CliftonRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function CliftonRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CLIFTON_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GreenfordBroadwayE7();" );
  NextDestination.setAttribute( "onClick", "GreenfordAvenueE7();" );
}
function GreenfordAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Greenford Avenue";
  BackDestination.setAttribute( "onClick", "GreenfordAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordAvenueE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function GreenfordAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GREENFORD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CliftonRoadE7();" );
  NextDestination.setAttribute( "onClick", "CuckooAvenueE7();" );
}
function CuckooAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cuckoo Avenue";
  BackDestination.setAttribute( "onClick", "CuckooAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "CuckooAvenueE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function CuckooAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CUCKOO_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GreenfordAvenueE7();" );
  NextDestination.setAttribute( "onClick", "GurnellLeisureCentreE7();" );
}
function GurnellLeisureCentreE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Gurnell Leisure Centre";
  BackDestination.setAttribute( "onClick", "GurnellLeisureCentreE7Audio();" );
  NextDestination.setAttribute( "onClick", "GurnellLeisureCentreE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function GurnellLeisureCentreE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_GURNELL_LEISURE_CENTRE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "CuckooAvenueE7();" );
  NextDestination.setAttribute( "onClick", "RuislipRoadEastE7();" );
}
function RuislipRoadEastE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ruislip Road East";
  BackDestination.setAttribute( "onClick", "RuislipRoadEastE7Audio();" );
  NextDestination.setAttribute( "onClick", "RuislipRoadEastE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function RuislipRoadEastE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_RUISLIP_ROAD_EAST_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "GurnellLeisureCentreE7();" );
  NextDestination.setAttribute( "onClick", "ScotchCommonE7();" );
}
function ScotchCommonE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Scotch Common";
  BackDestination.setAttribute( "onClick", "ScotchCommonE7Audio();" );
  NextDestination.setAttribute( "onClick", "ScotchCommonE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function ScotchCommonE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SCOTCH_COMMON_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "RuislipRoadEastE7();" );
  NextDestination.setAttribute( "onClick", "ClevelandRoadE7();" );
}
function ClevelandRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Cleveland Road";
  BackDestination.setAttribute( "onClick", "ClevelandRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "ClevelandRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function ClevelandRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CLEVELAND_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ScotchCommonE7();" );
  NextDestination.setAttribute( "onClick", "SutherlandAvenueE7();" );
}
function SutherlandAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Sutherland Avenue";
  BackDestination.setAttribute( "onClick", "SutherlandAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "SutherlandAvenueE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function StStephensAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Stephen's Avenue";
  BackDestination.setAttribute( "onClick", "StStephensAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "SutherlandAvenueE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function StStephensAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_STEPHENS_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "ClevelandRoadE7();" );
  NextDestination.setAttribute( "onClick", "WestEalingStationE7();" );
}
function SutherlandAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_SUTHERLAND_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StStephensAvenueE7();" );
  NextDestination.setAttribute( "onClick", "WestEalingStationE7();" );
}
function WestEalingStationE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "West Ealing Station";
  BackDestination.setAttribute( "onClick", "WestEalingStationE7Audio();" );
  NextDestination.setAttribute( "onClick", "WestEalingStationE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function WestEalingStationE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_WEST_EALING_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "SutherlandAvenueE7();" );
  NextDestination.setAttribute( "onClick", "DraytonGreenRoadE7();" );
}
function DraytonGreenRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Drayton Green Road";
  BackDestination.setAttribute( "onClick", "DraytonGreenRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "DraytonGreenRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function DraytonGreenRoadE7(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_Drayton_Green_Road_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "WestEalingStationE7();" );
  NextDestination.setAttribute( "onClick", "DaneRoadE7();" );
}
function DaneRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Dane Road";
  BackDestination.setAttribute( "onClick", "DaneRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "DaneRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function DaneRoadE7(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_DANE_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DraytonGreenRoadE7();" );
  NextDestination.setAttribute( "onClick", "StLeonardsRoadE7();" );
}
function StLeonardsRoadE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "St Leonards Road";
  BackDestination.setAttribute( "onClick", "StLeonardsRoadE7Audio();" );
  NextDestination.setAttribute( "onClick", "StLeonardsRoadE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function StLeonardsRoadE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_ST_LEONARDS_ROAD_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "DaneRoadE7();" );
  NextDestination.setAttribute( "onClick", "LongfieldAvenueE7();" );
}
function LongfieldAvenueE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Longfield Avenue";
  BackDestination.setAttribute( "onClick", "LongfieldAvenueE7Audio();" );
  NextDestination.setAttribute( "onClick", "LongfieldAvenueE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function LongfieldAvenueE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_LONGFIELD_AVENUE_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "BondStreetE7();" );
}
function BondStreetE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Longfield Avenue";
  BackDestination.setAttribute( "onClick", "BondStreetE7Audio();" );
  NextDestination.setAttribute( "onClick", "BondStreetE7Audio();" );
  // topTextYes.style.animationName = "StationApproachSouthRuislipStn";
}
function BondStreetE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_BOND_STREET_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStationHavenGreenE7();" );
}
function EalingBroadwayStationHavenGreenE7(){
  topTextYes.style.display ="block";
  topTextNo.style.display ="none";
  topTextYes.innerHTML = "Ealing Broadway Station / Haven Green";
  BackDestination.setAttribute( "onClick", "EalingBroadwayStationHavenGreenE7Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStationHavenGreenE7Audio();" );
  topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EalingBroadwayStationHavenGreenE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_BROADWAY_STATION_HAVEN_GREEN_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "TeignmouthGardensE5();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function EalingBroadwayStationE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Broadway Station";
  BackDestination.setAttribute( "onClick", "EalingBroadwayStationE7Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStationE7Audio();" );
  // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EalingTownHallE7(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  topTextNo.innerHTML = "Ealing Town Hall";
  BackDestination.setAttribute( "onClick", "EalingTownHallE7Audio();" );
  NextDestination.setAttribute( "onClick", "EalingTownHallE7Audio();" );
  // topTextYes.style.animationName = "EalingBroadwayStationHavenGreen";
}
function EalingTownHallE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_TOWN_HALL_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "StLeonardsRoadE7();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function EalingBroadwayStationE7Audio(){
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_EALING_BROADWAY_STATION_001.mp3";
  iBusAudio.play();
  BackDestination.setAttribute( "onClick", "EalingTownHallE7();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function IslipManorRoadE10(){
  IslipManorRoad()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
}
function IslipManorRoadE10Audio(){
  IslipManorRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "ManorGateE10();" );
}
function ManorGateE10(){
  ManorGate()
  BackDestination.setAttribute( "onClick", "ManorGateE10Audio();" );
  NextDestination.setAttribute( "onClick", "ManorGateE10Audio();" );
}
function ManorGateE10Audio(){
  ManorGateAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "ArnoldRoadE10();" );
}
function ArnoldRoadE10(){
  ArnoldRoad()
  BackDestination.setAttribute( "onClick", "ArnoldRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "ArnoldRoadE10Audio();" );
}
function ArnoldRoadE10Audio(){
  ArnoldRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "IslipManorParkE10();" );
}
function IslipManorParkE10(){
  IslipManorPark()
  BackDestination.setAttribute( "onClick", "IslipManorParkE10Audio();" );
  NextDestination.setAttribute( "onClick", "IslipManorParkE10Audio();" );
}
function IslipManorParkE10Audio(){
  IslipManorParkAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "MoatFarmRoadE10();" );
}
function MoatFarmRoadE10(){
  MoatFarmRoad()
  BackDestination.setAttribute( "onClick", "MoatFarmRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "MoatFarmRoadE10Audio();" );
}
function MoatFarmRoadE10Audio(){
  MoatFarmRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "BelvueRoadE10();" );
}
function BelvueRoadE10(){
  BelvueRoad()
  BackDestination.setAttribute( "onClick", "BelvueRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "BelvueRoadE10Audio();" );
}
function BelvueRoadE10Audio(){
  BelvueRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "FortRoadE10();" );
}
function FortRoadE10(){
  FortRoad()
  BackDestination.setAttribute( "onClick", "FortRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "FortRoadE10Audio();" );
}
function FortRoadE10Audio(){
  FortRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "BelvueSchoolE10();" );
}
function BelvueSchoolE10(){
  BelvueSchool()
  BackDestination.setAttribute( "onClick", "BelvueSchoolE10Audio();" );
  NextDestination.setAttribute( "onClick", "BelvueSchoolE10Audio();" );
}
function BelvueSchoolE10Audio(){
  BelvueSchoolAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "HorseshoeCrescentE10();" );
}
function HorseshoeCrescentE10(){
  HorseshoeCrescent()
  BackDestination.setAttribute( "onClick", "HorseshoeCrescentE10Audio();" );
  NextDestination.setAttribute( "onClick", "HorseshoeCrescentE10Audio();" );
}
function HorseshoeCrescentE10Audio(){
  HorseshoeCrescentAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "HotspurRoadE10();" );
}
function HotspurRoadE10(){
  HotspurRoad()
  BackDestination.setAttribute( "onClick", "HotspurRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "HotspurRoadE10Audio();" );
}
function HotspurRoadE10Audio(){
  HotspurRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "ElmTreeCloseE10();" );
}
function ElmTreeCloseE10(){
  ElmTreeClose()
  BackDestination.setAttribute( "onClick", "ElmTreeCloseE10Audio();" );
  NextDestination.setAttribute( "onClick", "ElmTreeCloseE10Audio();" );
}
function ElmTreeCloseE10Audio(){
  ElmTreeCloseAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "KensingtonRoadRuislipRoadE10();" );
}
function KensingtonRoadRuislipE10Road(){
  KensingtonRoadRuislipRoad()
  BackDestination.setAttribute( "onClick", "KensingtonRoadRuislipRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "KensingtonRoadRuislipRoadE10Audio();" );
}
function KensingtonRoadRuislipRoadE10Audio(){
  KensingtonRoadRuislipRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "GoslingCloseE10();" );
}
function GoslingCloseE10Road(){
  GoslingClose()
  BackDestination.setAttribute( "onClick", "GoslingCloseE10Audio();" );
  NextDestination.setAttribute( "onClick", "GoslingCloseE10Audio();" );
}
function GoslingCloseE10Audio(){
  GoslingCloseAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "MarleyCloseE10();" );
}
function MarleyCloseE10(){
  MarleyClose()
  BackDestination.setAttribute( "onClick", "MarleyCloseE10Audio();" );
  NextDestination.setAttribute( "onClick", "MarleyCloseE10Audio();" );
}
function MarleyCloseE10Audio(){
  MarleyCloseAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "RosedeneAvenueE10();" );
}
function RosedeneAvenueE10(){
  RosedeneAvenue()
  BackDestination.setAttribute( "onClick", "RosedeneAvenueE10Audio();" );
  NextDestination.setAttribute( "onClick", "RosedeneAvenueE10Audio();" );
}
function MarleyCloseE10Audio(){
  RosedeneAvenueAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "MarnhamCrescentE10();" );
}
function MarnhamCrescentE10(){
  MarnhamCrescent()
  BackDestination.setAttribute( "onClick", "MarnhamCrescentE10Audio();" );
  NextDestination.setAttribute( "onClick", "MarnhamCrescentE10Audio();" );
}
function MarnhamCrescentE10Audio(){
  MarnhamCrescentAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "WestRidgeGardensE10();" );
}
function WestRidgeGardensE10(){
  WestRidgeGardens()
  BackDestination.setAttribute( "onClick", "WestRidgeGardensE10Audio();" );
  NextDestination.setAttribute( "onClick", "WestRidgeGardensE10Audio();" );
}
function WestRidgeGardensE10Audio(){
  WestRidgeGardensAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "EastCloseE10();" );
}
function EastCloseE10(){
  EastClose()
  BackDestination.setAttribute( "onClick", "EastCloseE10Audio();" );
  NextDestination.setAttribute( "onClick", "EastCloseE10Audio();" );
}
function EastCloseE10Audio(){
  EastCloseAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "FarndaleCrescentE10();" );
}
function FarndaleCrescentE10(){
  FarndaleCrescent()
  BackDestination.setAttribute( "onClick", "FarndaleCrescentE10Audio();" );
  NextDestination.setAttribute( "onClick", "FarndaleCrescentE10Audio();" );
}
function EastCloseE10Audio(){
  FarndaleCrescentAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordPoliceStationE10();" );
}
function GreenfordPoliceStationE10(){
  GreenfordPoliceStation()
  BackDestination.setAttribute( "onClick", "GreenfordPoliceStationE10Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordPoliceStationE10Audio();" );
}
function GreenfordPoliceStationE10Audio(){
  GreenfordPoliceStationAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordBroadwayE10();" );
}
function GreenfordBroadwayE10(){
  GreenfordBroadway()
  BackDestination.setAttribute( "onClick", "GreenfordBroadwayE10Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordBroadwayE10Audio();" );
}
function GreenfordBroadwayE10Audio(){
  GreenfordBroadwayAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE10();" );
}
function CliftonRoadE10(){
  CliftonRoad()
  BackDestination.setAttribute( "onClick", "CliftonRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "CliftonRoadE10Audio();" );
}
function CliftonRoadE10Audio(){
  CliftonRoadAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordAvenueE10();" );
}
function GreenfordAvenueE10(){
  GreenfordAvenue()
  BackDestination.setAttribute( "onClick", "GreenfordAvenueE10Audio();" );
  NextDestination.setAttribute( "onClick", "GreenfordAvenueE10Audio();" );
}
function GreenfordAvenueE10Audio(){
  GreenfordAvenueAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "CuckooAvenueE10();" );
}
function CuckooAvenueE10(){
  CuckooAvenue()
  BackDestination.setAttribute( "onClick", "CuckooAvenueE10Audio();" );
  NextDestination.setAttribute( "onClick", "CuckooAvenueE10Audio();" );
}
function CuckooAvenueE10Audio(){
  CuckooAvenueAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "GurnellLeisureCentreE10();" );
}
function GurnellLeisureCentreE10(){
  GurnellLeisureCentre()
  BackDestination.setAttribute( "onClick", "GurnellLeisureCentreE10Audio();" );
  NextDestination.setAttribute( "onClick", "GurnellLeisureCentreE10Audio();" );
}
function GurnellLeisureCentreE10Audio(){
  GurnellLeisureCentreAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "RuislipRoadEastE10();" );
}
function RuislipRoadEastE10(){
  RuislipRoadEast()
  BackDestination.setAttribute( "onClick", "RuislipRoadEastE10Audio();" );
  NextDestination.setAttribute( "onClick", "RuislipRoadEastE10Audio();" );
}
function RuislipRoadEastE10Audio(){
  RuislipRoadEastAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "ScotchCommonE10();" );
}
function ScotchCommonE10(){
  ScotchCommon()
  BackDestination.setAttribute( "onClick", "ScotchCommonE10Audio();" );
  NextDestination.setAttribute( "onClick", "ScotchCommonE10Audio();" );
}
function RuislipRoadEastE10Audio(){
  ScotchCommonAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "HollingbourneGardensE10();" );
}
function HollingbourneGardensE10(){
  HollingbourneGardens()
  BackDestination.setAttribute( "onClick", "HollingbourneGardensE10Audio();" );
  NextDestination.setAttribute( "onClick", "HollingbourneGardensE10Audio();" );
}
function HollingbourneGardensE10Audio(){
  HollingbourneGardensAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "KentGardensE10();" );
}
function KentGardensE10(){
  KentGardens()
  BackDestination.setAttribute( "onClick", "KentGardensE10Audio();" );
  NextDestination.setAttribute( "onClick", "KentGardensE10Audio();" );
}
function KentGardensE10Audio(){
  KentGardensAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "TheKnollE10();" );
}
function TheKnollE10(){
  TheKnoll()
  BackDestination.setAttribute( "onClick", "TheKnollE10Audio();" );
  NextDestination.setAttribute( "onClick", "TheKnollE10Audio();" );
}
function TheKnollE10Audio(){
  TheKnollAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "CharlburyGroveE10();" );
}
function CharlburyGroveE10(){
  CharlburyGrove()
  BackDestination.setAttribute( "onClick", "CharlburyGroveE10Audio();" );
  NextDestination.setAttribute( "onClick", "CharlburyGroveE10Audio();" );
}
function CharlburyGroveE10Audio(){
  CharlburyGroveAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "EatonRiseE10();" );
}
function EatonRiseE10(){
  EatonRise()
  BackDestination.setAttribute( "onClick", "EatonRiseE10Audio();" );
  NextDestination.setAttribute( "onClick", "EatonRiseE10Audio();" );
}
function EatonRiseE10Audio(){
  EatonRiseAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStationHavenGreenE10();" );
}
function EalingBroadwayStationHavenGreenE10(){
  EalingBroadwayStationHavenGreen()
  BackDestination.setAttribute( "onClick", "EalingBroadwayStationHavenGreenE10Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStationHavenGreenE10Audio();" );
}
function EalingBroadwayStationHavenGreenE10Audio(){
  EalingBroadwayStationHavenGreenAudio()
  BackDestination.setAttribute( "onClick", "IslipManorRoadE10Audio();" );
  NextDestination.setAttribute( "onClick", "EalingBroadwayStationHavenGreenE10();" );
}