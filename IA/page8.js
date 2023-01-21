var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

var firstAudio = "https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_";
var lastAudio = "_001.mp3";

function ClaphamCommon417btn(){
  routeDestination = "ClaphamCommon417";
  CrystalPalaceBusStation417()
  showDestination.setAttribute( "onClick", "ClaphamCommon417ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "417 to Clapham Common";
}
function CrystalPalace417btn(){
  routeDestination = "CrystalPalace417";
  WingateSquare417()
  showDestination.setAttribute( "onClick", "CrystalPalace417ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "417 to Crystal Palace";
}

function ClaphamCommon417ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "417 to Clapham Junction";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_CLAPHAM_JUNCTION_001.mp3";
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
function CrystalPalace417ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "417 to Crystal Palace";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_147_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_CRYSTAL_PALACE_001.mp3";
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

function CrystalPalaceBusStation417(){
  getRidOfDestination()
  CrystalPalaceBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceBusStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceBusStation417Audio();" );
  }
}
function CrystalPalaceBusStation417Audio(){
  CrystalPalaceBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrystalPalaceParade417(){
  getRidOfDestination()
  CrystalPalaceParade()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417Audio();" );
  }
}
function CrystalPalaceParade417Audio(){
  CrystalPalaceParadeAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function WestowHill417(){
  getRidOfDestination()
  WestowHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowHill417Audio();" );
  }
}
function WestowHill417Audio(){
  WestowHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowStreet417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrystalPalaceParade417();" );
  }
}
function WestowStreet417(){
  getRidOfDestination()
  WestowStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WestowStreet417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowStreet417Audio();" );
  }
}
function WestowStreet417Audio(){
  WestowStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GipsyHillPoliceStation417(){
  getRidOfDestination()
  GipsyHillPoliceStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "GipsyHillPoliceStation417Audio();" );
  }
}
function GipsyHillPoliceStation417Audio(){
  GipsyHillPoliceStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockmountRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RockmountRoad417(){
  getRidOfDestination()
  RockmountRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockmountRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockmountRoad417Audio();" );
  }
}
function RockmountRoad417Audio(){
  RockmountRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "HermitageRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WestowHill417();" );
  }
}
function HermitageRoad417(){
  getRidOfDestination()
  HermitageRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "HermitageRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "HermitageRoad417Audio();" );
  }
}
function HermitageRoad417Audio(){
  HermitageRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "SaltersHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockmountRoad417();" );
  }
}
function SaltersHill417(){
  getRidOfDestination()
  SaltersHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "SaltersHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "SaltersHill417Audio();" );
  }
}
function SaltersHill417Audio(){
  SaltersHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TivoliRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "HermitageRoad417();" );
  }
}
function NorwoodSchool417(){
  getRidOfDestination()
  NorwoodSchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "NorwoodSchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "NorwoodSchool417Audio();" );
  }
}
function NorwoodSchool417Audio(){
  NorwoodSchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "SaltersHill417();" );
  }
}
function TivoliRoad417(){
  getRidOfDestination()
  TivoliRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TivoliRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TivoliRoad417Audio();" );
  }
}
function TivoliRoad417Audio(){
  TivoliRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownPoint417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "NorwoodSchool417();" );
  }
}
function CrownPoint417(){
  getRidOfDestination()
  CrownPoint()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownPoint417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownPoint417Audio();" );
  }
}
function CrownPoint417Audio(){
  CrownPointAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RyecroftRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CrownLaneCrownPoint417(){
  getRidOfDestination()
  CrownLaneCrownPointd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417Audio();" );
  }
}
function CrownLaneCrownPoint417Audio(){
  CrownLaneCrownPointAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TivoliRoad417();" );
  }
}
function RyecroftRoad417(){
  getRidOfDestination()
  RyecroftRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RyecroftRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RyecroftRoad417Audio();" );
  }
}
function RyecroftRoad417Audio(){
  RyecroftRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "CrownLaneCrownPoint417();" );
  }
}
function StreathamCommonNorthLeighamCrtRd417(){
  getRidOfDestination()
  StreathamCommonNorthLeighamCrtRd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamCommonNorthLeighamCrtRd417Audio();" );
  }
}
function StreathamCommonNorthLeighamCrtRd417Audio(){
  StreathamCommonNorthLeighamCrtRdAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeighamCourtRoadStreathamCommon417(){
  getRidOfDestination()
  LeighamCourtRoadStreathamCommon()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417Audio();" );
  }
}
function LeighamCourtRoadStreathamCommon417Audio(){
  LeighamCourtRoadStreathamCommonAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RyecroftRoad417();" );
  }
}
function LeafGrove417(){
  getRidOfDestination()
  LeafGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeafGrove417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeafGrove417Audio();" );
  }
}
function LeafGrove417Audio(){
  LeafGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadStreathamCommon417();" );
  }
}
function JuliansPrimarySchool417(){
  getRidOfDestination()
  JuliansPrimarySchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417Audio();" );
  }
}
function JuliansPrimarySchool417Audio(){
  JuliansPrimarySchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeafGrove417();" );
  }
}
function RockhamptonRoad417(){
  getRidOfDestination()
  RockhamptonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RockhamptonRoad417Audio();" );
  }
}
function RockhamptonRoad417Audio(){
  RockhamptonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StPetersChurch417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StPetersChurch417(){
  getRidOfDestination()
  StPetersChurch()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StPetersChurch417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StPetersChurch417Audio();" );
  }
}
function StPetersChurch417Audio(){
  StPetersChurchAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ValleyRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "JuliansPrimarySchool417();" );
  }
}
function ValleyRoad417(){
  getRidOfDestination()
  ValleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ValleyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ValleyRoad417Audio();" );
  }
}
function ValleyRoad417Audio(){
  ValleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "DunravenSchool417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeighamCourtRoadValleyRoad417(){
  getRidOfDestination()
  LeighamCourtRoadValleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417Audio();" );
  }
}
function LeighamCourtRoadValleyRoad417Audio(){
  LeighamCourtRoadValleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StPetersChurch417();" );
  }
}
function DunravenSchool417(){
  getRidOfDestination()
  DunravenSchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "DunravenSchool417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "DunravenSchool417Audio();" );
  }
}
function DunravenSchool417Audio(){
  DunravenSchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "MountearlGardens417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRoadValleyRoad417();" );
  }
}
function MountearlGardens417(){
  getRidOfDestination()
  MountearlGardens()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "MountearlGardens417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "MountearlGardens417Audio();" );
  }
}
function MountearlGardens417Audio(){
  MountearlGardensAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StreathamClose417(){
  getRidOfDestination()
  StreathamClose()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamClose417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamClose417Audio();" );
  }
}
function StreathamClose417Audio(){
  StreathamCloseAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "DunravenSchool417();" );
  }
}
function LeighamCourtRdStreathamHillStn417(){
  getRidOfDestination()
  LeighamCourtRdStreathamHillStn()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417Audio();" );
  }
}
function LeighamCourtRdStreathamHillStn417Audio(){
  LeighamCourtRdStreathamHillStnAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamClose417();" );
  }
}
function StreathamHillStnStreathamHill417(){
  getRidOfDestination()
  StreathamHillStnStreathamHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417Audio();" );
  }
}
function StreathamHillStnStreathamHill417Audio(){
  StreathamHillStnStreathamHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BarrhillRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LeighamCourtRdStreathamHillStn417();" );
  }
}
function BarrhillRoad417(){
  getRidOfDestination()
  BarrhillRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BarrhillRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BarrhillRoad417Audio();" );
  }
}
function BarrhillRoad417Audio(){
  BarrhillRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TelfordAvenue417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TelfordAvenue417(){
  getRidOfDestination()
  TelfordAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "TelfordAvenue417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TelfordAvenue417Audio();" );
  }
}
function TelfordAvenue417Audio(){
  TelfordAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillStnStreathamHill417();" );
  }
}
function ChristchurchRoad417(){
  getRidOfDestination()
  ChristchurchRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ChristchurchRoad417Audio();" );
  }
}
function ChristchurchRoad417Audio(){
  ChristchurchRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamPlace417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StreathamHillChristchurchRoad417(){
  getRidOfDestination()
  StreathamHillChristchurchRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417Audio();" );
  }
}
function StreathamHillChristchurchRoad417Audio(){
  StreathamHillChristchurchRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "TelfordAvenue417();" );
  }
}
function StreathamPlace417(){
  getRidOfDestination()
  StreathamPlace()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "StreathamPlace417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamPlace417Audio();" );
  }
}
function StreathamPlace417Audio(){
  StreathamPlaceAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamHillChristchurchRoad417();" );
  }
}
function AtkinsRoadNewParkRoad417(){
  getRidOfDestination()
  AtkinsRoadNewParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417Audio();" );
  }
}
function AtkinsRoadNewParkRoad417Audio(){
  AtkinsRoadNewParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "StreathamPlace417();" );
  }
}
function KingsAvenueAtkinsRoad417(){
  getRidOfDestination()
  KingsAvenueAtkinsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417Audio();" );
  }
}
function KingsAvenueAtkinsRoad417Audio(){
  KingsAvenueAtkinsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "AtkinsRoadNewParkRoad417();" );
  }
}
function ThorncliffeRoad417(){
  getRidOfDestination()
  ThorncliffeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417Audio();" );
  }
}
function ThorncliffeRoad417Audio(){
  ThorncliffeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "KingsAvenueAtkinsRoad417();" );
  }
}
function RoseberyRoad417(){
  getRidOfDestination()
  RoseberyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "RoseberyRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RoseberyRoad417Audio();" );
  }
}
function RoseberyRoad417Audio(){
  RoseberyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ThorncliffeRoad417();" );
  }
}
function ClarenceAvenue417(){
  getRidOfDestination()
  ClarenceAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417Audio();" );
  }
}
function ClarenceAvenue417Audio(){
  ClarenceAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LyhamRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "RoseberyRoad417();" );
  }
}
function LyhamRoad417(){
  getRidOfDestination()
  LyhamRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LyhamRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LyhamRoad417Audio();" );
  }
}
function LyhamRoad417Audio(){
  LyhamRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BedfordRoad417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClarenceAvenue417();" );
  }
}
function BedfordRoad417(){
  getRidOfDestination()
  BedfordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BedfordRoad417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BedfordRoad417Audio();" );
  }
}
function BedfordRoad417Audio(){
  BedfordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ParkHill417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LyhamRoad417();" );
  }
}
function ParkHill417(){
  getRidOfDestination()
  ParkHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ParkHill417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ParkHill417Audio();" );
  }
}
function ParkHill417Audio(){
  ParkHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "BedfordRoad417();" );
  }
}
function ClaphamCommonStation417(){
  getRidOfDestination()
  ClaphamCommonStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417Audio();" );
  }
}
function ClaphamCommonStation417Audio(){
  ClaphamCommonStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ParkHill417();" );
  }
}
function LongRoadClaphamCommon417(){
  getRidOfDestination()
  LongRoadClaphamCommon()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "LongRoadClaphamCommon417Audio();" );
  }
}
function LongRoadClaphamCommon417Audio(){
  LongRoadClaphamCommonAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "OmnibusClapham417();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WingateSquare417(){
  getRidOfDestination()
  WingateSquare()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "WingateSquare417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "WingateSquare417Audio();" );
  }
}
function WingateSquare417Audio(){
  WingateSquareAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "ClaphamCommonStation417();" );
  }
}
function OmnibusClapham417(){
  getRidOfDestination()
  OmnibusClapham()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "OmnibusClapham417Audio();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "OmnibusClapham417Audio();" );
  }
}
function OmnibusClapham417Audio(){
  OmnibusClaphamAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ClaphamCommon417"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "CrystalPalace417") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}