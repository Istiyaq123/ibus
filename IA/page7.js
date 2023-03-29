var smallSpace = '<span class="invisible">.</span>'
var bigSpace = '<span class="invisible">...</span>'
var sSpace = '<span class="invisible">.</span>'
var bSpace = '<span class="invisible">...</span>'

var topTextYes = document.getElementById("topTextYes");
var topTextNo = document.getElementById("topTextNo");

var firstAudio = "https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_";
var lastAudio = "_001.mp3";

function Shadwell339btn(){
  LeytonstoneStnGroveGreenRoad339()
  showDestination.setAttribute( "onClick", "Shadwell339ibus();" );
}
function Leytonstone339btn(){
  ShadwellStation339()
  showDestination.setAttribute( "onClick", "Leytonstone339ibus();" );
}
function Shadwell100btn(){
  LeytonstoneStnGroveGreenRoad100()
  showDestination.setAttribute( "onClick", "Shadwell100ibus();" );
}
function Leytonstone339btn(){
  ShadwellStation339()
  showDestination.setAttribute( "onClick", "Leytonstone339ibus();" );
}
function Shadwell100btn(){
  KingEdwardStreetStPaulsStation100()
  showDestination.setAttribute( "onClick", "Shadwell100ibus();" );
}
function StPauls100btn(){
  StGeorgesTownHallShadwellStn100()
  showDestination.setAttribute( "onClick", "StPauls100ibus();" );
}
function PoplarAllSaintsD7btn(){
  MileEndStationBowRoadD7()
  showDestination.setAttribute( "onClick", "PoplarAllSaintsD7ibus();" );
}
function MileEndD7btn(){
  PoplarAllSaintsChurchD7()
  showDestination.setAttribute( "onClick", "MileEndD7ibus();" );
}
function CanningTown69btn(){
  routeDestination = "CanningTown69";
  WalthamstowBusStation69()
  showDestination.setAttribute( "onClick", "CanningTown69ibus();" );
}
function WalthamstowCentral69btn(){
  routeDestination = "WalthamstowCentral69";
  CanningTownStation69()
  showDestination.setAttribute( "onClick", "WalthamstowCentral69ibus();" );
}
function IslingtonAngel394btn(){
  routeDestination = "IslingtonAngel394";
  HomertonHospitalWardleStreet394()
  showDestination.setAttribute( "onClick", "IslingtonAngel394ibus();" );
}
function HomertonHospital394btn(){
  routeDestination = "HomertonHospital394";
  LiverpoolRoadChapelMarket394()
  showDestination.setAttribute( "onClick", "HomertonHospital394ibus();" );
}
function ArchwayW5btn(){
  routeDestination = "ArchwayW5";
  HarringaySainsburysW5()
  showDestination.setAttribute( "onClick", "ArchwayW5ibus();" );
}
function HarringaySuperstoresW5btn(){
  routeDestination = "HarringaySuperstoresW5";
  ArchwayStationW5()
  showDestination.setAttribute( "onClick", "HarringaySuperstoresW5ibus();" );
}
function WoodfordWellsW13btn(){
  routeDestination = "WoodfordWellsW13";
  LeytonstoneStationW13()
  showDestination.setAttribute( "onClick", "WoodfordWellsW13ibus();" );
}
function LeytonstoneW13btn(){
  routeDestination = "LeytonstoneW13";
  StThomasofCanterburyChurchW13()
  showDestination.setAttribute( "onClick", "LeytonstoneW13ibus();" );
}
function IlfordW19btn(){
  routeDestination = "IlfordW19";
  StaffaRoadW19()
  showDestination.setAttribute( "onClick", "IlfordW19ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "W19 to Ilford";
  DestinationTextNewIbus()
}
function WalthamstowArgallAvenueW19btn(){
  routeDestination = "WalthamstowArgallAvenueW19";
  HainaultStreetW19()
  showDestination.setAttribute( "onClick", "WalthamstowArgallAvenueW19ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "W19 to Walthamstow, Argall Avenue";
  DestinationTextNewIbus()
}
function Brimsdown191btn(){
  routeDestination = "Brimsdown191";
  EdmontonGreenBusStation191()
  showDestination.setAttribute( "onClick", "Brimsdown191ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "191 to Brimsdown";
  DestinationTextNewIbus()
}
function EdmontonGreen191btn(){
  routeDestination = "EdmontonGreen191";
  BrimsdownStation191()
  showDestination.setAttribute( "onClick", "EdmontonGreen191ibus();" );
  newIbusdisplayRouteDesibus.innerHTML = "191 to Edmonton Green";
  DestinationTextNewIbus()
}

function Shadwell339ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "339 to Shadwell";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_339_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_SHADWELL_001.mp3";
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
function Leytonstone339ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "339 to Leytonstone";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_339_002.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_LEYTONSTONE_001.mp3";
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
function Shadwell100ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "100 to Shadwell";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_100_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_SHADWELL_001.mp3";
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
function StPauls100ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "100 to St Paul's";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_100_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_ST_PAULS_001.mp3";
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
function PoplarAllSaintsD7ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "D7 to Poplar, All Saints";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_D7_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_POPLAR_ALL_SAINTS_001.mp3";
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
function MileEndD7ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "D7 to Mile End";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_D7_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_MILE_END_001.mp3";
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
function CanningTown69ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "69 to Canning Town Bus Station";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_69_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/S_CANNING_TOWN_BUS_STATION_001.mp3";
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
function WalthamstowCentral69ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "69 to Walthamstow Central";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_69_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_WALTHAMSTOW_CENTRAL_001.mp3";
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
function IslingtonAngel394ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "394 to Islington Angel";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_394_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_ISLINGTON_ANGEL_001.mp3";
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
function HomertonHospital394ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "394 to Homerton Hospital";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_394_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_HOMERTON_HOSPITAL_001.mp3";
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
function ArchwayW5ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "W5 to Archway";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_W5_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_ARCHWAY_001.mp3";
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
function HarringaySuperstoresW5ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "W5 to Harringay, Superstores";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_W5_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_HARRINGAY_001.mp3";
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
function WoodfordWellsW13ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "W13 to Woodford Wells";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_W13_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_WOODFORD_WELLS_001.mp3";
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
function LeytonstoneW13ibus(){
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "W13 to Woodford Wells";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_W13_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_LEYTONSTONE_001.mp3";
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
function IlfordW19ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "W19 to Ilford";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_W19_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_ILFORD_001.mp3";
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
function WalthamstowArgallAvenueW19ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="none";
  marquee.style.display = "block";
  marquee.innerHTML = "W19 to Walthamstow, Argall Avenue";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_W19_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_Walthamstow_Argall_Avenue_001.mp3";
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
function Brimsdown191ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "191 to Brimsdown";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_191_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_BRIMSDOWN_001.mp3";
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
function EdmontonGreen191ibus(){
  if (ibusView === "new"){
    shownewibusdestination();
  }
  topTextYes.style.display ="none";
  topTextNo.style.display ="block";
  marquee.style.display = "none";
  topTextNo.innerHTML = "191 to Edmonton Green";
  var audio = 1;
  iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/R_191_001.mp3";
  iBusAudio.play();
  iBusAudio.onended = function() {
    audio = 2;
    if (audio === 2){
      iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/SA_To_001_V03.mp3";
      iBusAudio.play();
      iBusAudio.onended = function() {
        audio = 3;
        if (audio == 3){
          iBusAudio.src="https://transportforlondon.sharepoint.com/sites/ic-68268-j1v9/Ibus/Audio%20announcements/IBus%20Announcements/D_EDMONTON_GREEN_001.mp3";
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


function LeytonstoneStnGroveGreenRoad339(){
  LeytonstoneStnGroveGreenRoad()
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoad339Audio();" );
}
function LeytonstoneStnGroveGreenRoad339Audio(){
  LeytonstoneStnGroveGreenRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "HamptonRoad339();" );
}
function HamptonRoad339(){
  HamptonRoad()
  BackDestination.setAttribute( "onClick", "HamptonRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "HamptonRoad339Audio();" );
}
function DraytonRoad339(){
  DraytonRoad()
  BackDestination.setAttribute( "onClick", "DraytonRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "DraytonRoad339Audio();" );
}
function DraytonRoad339Audio(){
  DraytonRoadAudio()
  BackDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoad339();" );
  NextDestination.setAttribute( "onClick", "AshvilleRoad339();" );
}
function HamptonRoad339Audio(){
  HamptonRoadAudio()
  BackDestination.setAttribute( "onClick", "DraytonRoad339();" );
  NextDestination.setAttribute( "onClick", "AshvilleRoad339();" );
}
function AshvilleRoad339(){
  AshvilleRoad()
  BackDestination.setAttribute( "onClick", "AshvilleRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "AshvilleRoad339Audio();" );
}
function AshvilleRoad339Audio(){
  AshvilleRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "CentralAvenue339();" );
}
function CentralAvenue339(){
  CentralAvenue()
  BackDestination.setAttribute( "onClick", "CentralAvenue339Audio();" );
  NextDestination.setAttribute( "onClick", "CentralAvenue339Audio();" );
}
function CentralAvenue339Audio(){
  CentralAvenueAudio()
  BackDestination.setAttribute( "onClick", "HamptonRoad339();" );
  NextDestination.setAttribute( "onClick", "CathallLeisureCentre339();" );
}
function CathallLeisureCentre339(){
  CathallLeisureCentre()
  BackDestination.setAttribute( "onClick", "CathallLeisureCentre339Audio();" );
  NextDestination.setAttribute( "onClick", "CathallLeisureCentre339Audio();" );
}
function CathallLeisureCentre339Audio(){
  CathallLeisureCentreAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "HarrowGreen339();" );
}
function HarrowGreen339(){
  HarrowGreen()
  BackDestination.setAttribute( "onClick", "HarrowGreen339Audio();" );
  NextDestination.setAttribute( "onClick", "HarrowGreen339Audio();" );
}
function ApolloPlace339(){
  ApolloPlace()
  BackDestination.setAttribute( "onClick", "ApolloPlace339Audio();" );
  NextDestination.setAttribute( "onClick", "ApolloPlace339Audio();" );
}
function HollydownWay339(){
  HollydownWay()
  BackDestination.setAttribute( "onClick", "HollydownWay339Audio();" );
  NextDestination.setAttribute( "onClick", "HollydownWay339Audio();" );
}
function HollydownWay339Audio(){
  HollydownWayAudio()
  BackDestination.setAttribute( "onClick", "CentralAvenue339();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339();" );
}
function ApolloPlace339Audio(){
  ApolloPlaceAudio()
  BackDestination.setAttribute( "onClick", "HollydownWay339();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339();" );
}
function HarrowGreen339Audio(){
  HarrowGreenAudio()
  BackDestination.setAttribute( "onClick", "ApolloPlace339();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339();" );
}
function RanelaghRoad339(){
  RanelaghRoad()
  BackDestination.setAttribute( "onClick", "RanelaghRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "RanelaghRoad339Audio();" );
}
function RanelaghRoad339Audio(){
  RanelaghRoadAudio()
  BackDestination.setAttribute( "onClick", "HarrowGreen339();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneHighRoadThatchedHouse339();" );
}
function LeytonstoneHighRoadThatchedHouse339(){
  LeytonstoneHighRoadThatchedHouse()
  BackDestination.setAttribute( "onClick", "LeytonstoneHighRoadThatchedHouse339Audio();" );
  NextDestination.setAttribute( "onClick", "LeytonstoneHighRoadThatchedHouse339Audio();" );
}
function LeytonstoneHighRoadThatchedHouse339Audio(){
  LeytonstoneHighRoadThatchedHouseAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "BurgessRoad339();" );
}
function BurgessRoad339(){
  BurgessRoad()
  BackDestination.setAttribute( "onClick", "BurgessRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "BurgessRoad339Audio();" );
}
function BurgessRoad339Audio(){
  BurgessRoadAudio()
  BackDestination.setAttribute( "onClick", "RanelaghRoad339();" );
  NextDestination.setAttribute( "onClick", "EdithRoad339();" );
}
function EdithRoad339(){
  EdithRoad()
  BackDestination.setAttribute( "onClick", "EdithRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "EdithRoad339Audio();" );
}
function EdithRoad339Audio(){
  EdithRoadAudio()
  BackDestination.setAttribute( "onClick", "BurgessRoad339();" );
  NextDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339();" );
}
function SirLudwigGuttmannHealthCentre339(){
  SirLudwigGuttmannHealthCentre()
  BackDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339Audio();" );
  NextDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339Audio();" );
}
function ChobhamRoad339(){
  ChobhamRoad()
  BackDestination.setAttribute( "onClick", "ChobhamRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "ChobhamRoad339Audio();" );
}
function ChobhamRoad339Audio(){
  ChobhamRoadAudio()
  BackDestination.setAttribute( "onClick", "EdithRoad339();" );
  NextDestination.setAttribute( "onClick", "StratfordInternationalStation339();" );
}
function SirLudwigGuttmannHealthCentre339Audio(){
  SirLudwigGuttmannHealthCentreAudio()
  BackDestination.setAttribute( "onClick", "ChobhamRoad339();" );
  NextDestination.setAttribute( "onClick", "StratfordInternationalStation339();" );
}
function StratfordInternationalStation339(){
  StratfordInternationalStation()
  BackDestination.setAttribute( "onClick", "StratfordInternationalStation339Audio();" );
  NextDestination.setAttribute( "onClick", "StratfordInternationalStation339Audio();" );
}
function StratfordInternationalStation339Audio(){
  StratfordInternationalStationAudio()
  BackDestination.setAttribute( "onClick", "SirLudwigGuttmannHealthCentre339();" );
  NextDestination.setAttribute( "onClick", "StratfordCityBusStation339();" );
}
function StratfordCityBusStation339(){
  StratfordCityBusStation()
  BackDestination.setAttribute( "onClick", "StratfordCityBusStation339Audio();" );
  NextDestination.setAttribute( "onClick", "StratfordCityBusStation339Audio();" );
}
function StratfordCityBusStation339Audio(){
  StratfordCityBusStationAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "LondonAquaticsCentre339();" );
}
function LondonAquaticsCentre339(){
  LondonAquaticsCentre()
  BackDestination.setAttribute( "onClick", "LondonAquaticsCentre339Audio();" );
  NextDestination.setAttribute( "onClick", "LondonAquaticsCentre339Audio();" );
}
function LondonAquaticsCentre339Audio(){
  LondonAquaticsCentreAudio()
  BackDestination.setAttribute( "onClick", "StratfordInternationalStation339();" );
  NextDestination.setAttribute( "onClick", "SidingsStreet339();" );
}
function SidingsStreet339(){
  SidingsStreet()
  BackDestination.setAttribute( "onClick", "SidingsStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "SidingsStreet339Audio();" );
}
function SidingsStreet339Audio(){
  SidingsStreetAudio()
  BackDestination.setAttribute( "onClick", "LondonAquaticsCentre339();" );
  NextDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339();" );
}
function BobbyMooreAcademyPrimarySchool339(){
  BobbyMooreAcademyPrimarySchool()
  BackDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339Audio();" );
  NextDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339Audio();" );
}
function BobbyMooreAcademyPrimarySchool339Audio(){
  BobbyMooreAcademyPrimarySchoolAudio()
  BackDestination.setAttribute( "onClick", "SidingsStreet339();" );
  NextDestination.setAttribute( "onClick", "WhitePostLane339();" );
}
function WhitePostLane339(){
  WhitePostLane()
  BackDestination.setAttribute( "onClick", "WhitePostLane339Audio();" );
  NextDestination.setAttribute( "onClick", "WhitePostLane339Audio();" );
}
function WhitePostLane339Audio(){
  WhitePostLaneAudio()
  BackDestination.setAttribute( "onClick", "BobbyMooreAcademyPrimarySchool339();" );
  NextDestination.setAttribute( "onClick", "RothburyRoad339();" );
}
function RothburyRoad339(){
  RothburyRoad()
  BackDestination.setAttribute( "onClick", "RothburyRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "RothburyRoad339Audio();" );
}
function RothburyRoad339Audio(){
  RothburyRoadAudio()
  BackDestination.setAttribute( "onClick", "WhitePostLane339();" );
  NextDestination.setAttribute( "onClick", "MonierRoad339();" );
}
function MonierRoad339(){
  MonierRoad()
  BackDestination.setAttribute( "onClick", "MonierRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MonierRoad339Audio();" );
}
function MonierRoad339Audio(){
  MonierRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "FishIsland339();" );
}
function FishIsland339(){
  FishIsland()
  BackDestination.setAttribute( "onClick", "FishIsland339Audio();" );
  NextDestination.setAttribute( "onClick", "FishIsland339Audio();" );
}
function WansbeckRoad339(){
  WansbeckRoad()
  BackDestination.setAttribute( "onClick", "WansbeckRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "WansbeckRoad339Audio();" );
}
function WansbeckRoad339Audio(){
  WansbeckRoadAudio()
  BackDestination.setAttribute( "onClick", "RothburyRoad339();" );
  NextDestination.setAttribute( "onClick", "AutumnStreet339();" );
}
function FishIsland339Audio(){
  FishIslandAudio()
  BackDestination.setAttribute( "onClick", "WansbeckRoad339();" );
  NextDestination.setAttribute( "onClick", "AutumnStreet339();" );
}
function AutumnStreet339(){
  AutumnStreet()
  BackDestination.setAttribute( "onClick", "AutumnStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "AutumnStreet339Audio();" );
}
function AutumnStreet339Audio(){
  AutumnStreetAudio()
  BackDestination.setAttribute( "onClick", "FishIsland339();" );
  NextDestination.setAttribute( "onClick", "UsherRoad339();" );
}
function UsherRoad339(){
  UsherRoad()
  BackDestination.setAttribute( "onClick", "UsherRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "UsherRoad339Audio();" );
}
function UsherRoad339Audio(){
  UsherRoadAudio()
  BackDestination.setAttribute( "onClick", "AutumnStreet339();" );
  NextDestination.setAttribute( "onClick", "ShetlandRoad339();" );
}
function ShetlandRoad339(){
  ShetlandRoad()
  BackDestination.setAttribute( "onClick", "ShetlandRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "ShetlandRoad339Audio();" );
}
function ShetlandRoad339Audio(){
  ShetlandRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "FordRoad339();" );
}
function FordRoad339(){
  FordRoad()
  BackDestination.setAttribute( "onClick", "FordRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "FordRoad339Audio();" );
}
function AntillRoad339(){
  AntillRoad()
  BackDestination.setAttribute( "onClick", "AntillRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "AntillRoad339Audio();" );
}
function AntillRoad339Audio(){
  AntillRoadAudio()
  BackDestination.setAttribute( "onClick", "UsherRoad339();" );
  NextDestination.setAttribute( "onClick", "MedwayRoad339();" );
}
function FordRoad339Audio(){
  FordRoadAudio()
  BackDestination.setAttribute( "onClick", "AntillRoad339();" );
  NextDestination.setAttribute( "onClick", "MedwayRoad339();" );
}
function MedwayRoad339(){
  MedwayRoad()
  BackDestination.setAttribute( "onClick", "MedwayRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MedwayRoad339Audio();" );
}
function MedwayRoad339Audio(){
  MedwayRoadAudio()
  BackDestination.setAttribute( "onClick", "FordRoad339();" );
  NextDestination.setAttribute( "onClick", "StBarnabasChurch339();" );
}
function StBarnabasChurch339(){
  StBarnabasChurch()
  BackDestination.setAttribute( "onClick", "StBarnabasChurch339Audio();" );
  NextDestination.setAttribute( "onClick", "StBarnabasChurch339Audio();" );
}
function RomanRoadGroveRoad339(){
  RomanRoadGroveRoad()
  BackDestination.setAttribute( "onClick", "RomanRoadGroveRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "RomanRoadGroveRoad339Audio();" );
}
function RomanRoadGroveRoad339Audio(){
  RomanRoadGroveRoadAudio()
  BackDestination.setAttribute( "onClick", "MedwayRoad339();" );
  NextDestination.setAttribute( "onClick", "ArberyRoad339();" );
}
function StBarnabasChurch339Audio(){
  StBarnabasChurchAudio()
  BackDestination.setAttribute( "onClick", "RomanRoadGroveRoad339();" );
  NextDestination.setAttribute( "onClick", "ArberyRoad339();" );
}
function ArberyRoad339(){
  ArberyRoad()
  BackDestination.setAttribute( "onClick", "ArberyRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "ArberyRoad339Audio();" );
}
function ArberyRoad339Audio(){
  ArberyRoadAudio()
  BackDestination.setAttribute( "onClick", "StBarnabasChurch339();" );
  NextDestination.setAttribute( "onClick", "LichfieldRoad339();" );
}
function LichfieldRoad339(){
  LichfieldRoad()
  BackDestination.setAttribute( "onClick", "LichfieldRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "LichfieldRoad339Audio();" );
}
function LichfieldRoad339Audio(){
  LichfieldRoadAudio()
  BackDestination.setAttribute( "onClick", "ArberyRoad339();" );
  NextDestination.setAttribute( "onClick", "MileEndStationBowRoad339();" );
}
function MileEndStationBowRoad339(){
  MileEndStationBowRoad()
  BackDestination.setAttribute( "onClick", "MileEndStationBowRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationBowRoad339Audio();" );
}
function MileEndStationBowRoad339Audio(){
  MileEndStationBowRoadAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "RegentsCanal339();" );
}
function RegentsCanal339(){
  RegentsCanal()
  BackDestination.setAttribute( "onClick", "RegentsCanal339Audio();" );
  NextDestination.setAttribute( "onClick", "RegentsCanal339Audio();" );
}
function MileEndStationMileEndRoad339(){
  MileEndStationMileEndRoad()
  BackDestination.setAttribute( "onClick", "MileEndStationMileEndRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationMileEndRoad339Audio();" );
}
function MileEndStationMileEndRoad339Audio(){
  MileEndStationMileEndRoadAudio()
  BackDestination.setAttribute( "onClick", "LichfieldRoad339();" );
  NextDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339();" );
}
function RegentsCanal339Audio(){
  RegentsCanalAudio()
  BackDestination.setAttribute( "onClick", "MileEndStationMileEndRoad339();" );
  NextDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339();" );
}
function QueenMaryUniversityofLondon339(){
  QueenMaryUniversityofLondon()
  BackDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339Audio();" );
  NextDestination.setAttribute( "onClick", "QueenMaryUniversityofLondon339Audio();" );
}
function QueenMaryUniversityofLondon339Audio(){
  QueenMaryUniversityofLondonAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "ErnestStreet339();" );
}
function ErnestStreet339(){
  ErnestStreet()
  BackDestination.setAttribute( "onClick", "ErnestStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "ErnestStreet339Audio();" );
}
function ErnestStreet339Audio(){
  ErnestStreetAudio()
  BackDestination.setAttribute( "onClick", "RegentsCanal339();" );
  NextDestination.setAttribute( "onClick", "DongolaRoad339();" );
}
function DongolaRoad339(){
  DongolaRoad()
  BackDestination.setAttribute( "onClick", "DongolaRoad339Audio();" );
  NextDestination.setAttribute( "onClick", "DongolaRoad339Audio();" );
}
function DongolaRoad339Audio(){
  DongolaRoadAudio()
  BackDestination.setAttribute( "onClick", "ErnestStreet339();" );
  NextDestination.setAttribute( "onClick", "HarfordStreet339();" );
}
function HarfordStreet339(){
  HarfordStreet()
  BackDestination.setAttribute( "onClick", "HarfordStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "HarfordStreet339Audio();" );
}
function HarfordStreet339Audio(){
  HarfordStreetAudio()
  BackDestination.setAttribute( "onClick", "DongolaRoad339();" );
  NextDestination.setAttribute( "onClick", "StDunstansChurch339();" );
}
function StDunstansChurch339(){
  StDunstansChurch()
  BackDestination.setAttribute( "onClick", "StDunstansChurch339Audio();" );
  NextDestination.setAttribute( "onClick", "StDunstansChurch339Audio();" );
}
function StDunstansChurch339Audio(){
  StDunstansChurchAudio()
  BackDestination.setAttribute( "onClick", "HarfordStreet339();" );
  NextDestination.setAttribute( "onClick", "JamaicaStreet339();" );
}
function JamaicaStreet339(){
  JamaicaStreet()
  BackDestination.setAttribute( "onClick", "JamaicaStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "JamaicaStreet339Audio();" );
}
function JamaicaStreet339Audio(){
  JamaicaStreetAudio()
  BackDestination.setAttribute( "onClick", "StDunstansChurch339();" );
  NextDestination.setAttribute( "onClick", "MusburyStreet339();" );
}
function MusburyStreet339(){
  MusburyStreet()
  BackDestination.setAttribute( "onClick", "MusburyStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "MusburyStreet339Audio();" );
}
function MusburyStreet339Audio(){
  MusburyStreetAudio()
  BackDestination.setAttribute( "onClick", "JamaicaStreet339();" );
  NextDestination.setAttribute( "onClick", "MarthaStreet339();" );
}
function MarthaStreet339(){
  MarthaStreet()
  BackDestination.setAttribute( "onClick", "MarthaStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "MarthaStreet339Audio();" );
}
function MarthaStreet339Audio(){
  MarthaStreetAudio()
  BackDestination.setAttribute( "onClick", "BrentsideHighSchoolE11();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation339();" );
}
function ShadwellStation339(){
  ShadwellStation()
  BackDestination.setAttribute( "onClick", "ShadwellStation339Audio();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation339Audio();" );
}
function SuttonStreet339(){
  SuttonStreet()
  BackDestination.setAttribute( "onClick", "SuttonStreet339Audio();" );
  NextDestination.setAttribute( "onClick", "SuttonStreet339Audio();" );
}
function SuttonStreet339Audio(){
  SuttonStreeAudio()
  BackDestination.setAttribute( "onClick", "MusburyStreet339();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function ShadwellStation339Audio(){
  ShadwellStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function KingEdwardStreetStPaulsStation100(){
  KingEdwardStreetStPaulsStation()
  BackDestination.setAttribute( "onClick", "KingEdwardStreetStPaulsStation100Audio();" );
  NextDestination.setAttribute( "onClick", "KingEdwardStreetStPaulsStation100Audio();" );
}
function KingEdwardStreetStPaulsStation100Audio(){
  KingEdwardStreetStPaulsStationAudio()
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "LittleBritain100();" );
}
function LittleBritain100(){
  LittleBritain()
  BackDestination.setAttribute( "onClick", "LittleBritain100Audio();" );
  NextDestination.setAttribute( "onClick", "LittleBritain100Audio();" );
}
function LittleBritain100Audio(){
  LittleBritainAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100();" );
}
function LondonWallMuseumofLondon100(){
  LondonWallMuseumofLondon()
  BackDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100Audio();" );
  NextDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100Audio();" );
}
function StPaulsStation100(){
  StPaulsStation()
  BackDestination.setAttribute( "onClick", "StPaulsStation100Audio();" );
  NextDestination.setAttribute( "onClick", "StPaulsStation100Audio();" );
}
function StPaulsStation100Audio(){
  StPaulsStationAudio()
  BackDestination.setAttribute( "onClick", "KingEdwardStreetStPaulsStation100();" );
  NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation100();" );
}
function LondonWallMuseumofLondon100Audio(){
  LondonWallMuseumofLondonAudio()
  BackDestination.setAttribute( "onClick", "StPaulsStation100();" );
  NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation100();" );
}
function LondonWallMoorgateStation100(){
  LondonWallMoorgateStation()
  BackDestination.setAttribute( "onClick", "LondonWallMoorgateStation100Audio();" );
  NextDestination.setAttribute( "onClick", "LondonWallMoorgateStation100Audio();" );
}
function LondonWallMoorgateStation100Audio(){
  LondonWallMoorgateStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "AllHallowsChurch100();" );
}
function AllHallowsChurch100(){
  AllHallowsChurch()
  BackDestination.setAttribute( "onClick", "AllHallowsChurch100Audio();" );
  NextDestination.setAttribute( "onClick", "AllHallowsChurch100Audio();" );
}
function AllHallowsChurch100Audio(){
  AllHallowsChurchAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreet100();" );
}
function WormwoodStreet100(){
  WormwoodStreet()
  BackDestination.setAttribute( "onClick", "WormwoodStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "WormwoodStreet100Audio();" );
}
function MoorgateStation100(){
  MoorgateStation()
  BackDestination.setAttribute( "onClick", "MoorgateStation100Audio();" );
  NextDestination.setAttribute( "onClick", "MoorgateStation100Audio();" );
}
function MoorgateStation100Audio(){
  MoorgateStationAudio()
  BackDestination.setAttribute( "onClick", "LondonWallMuseumofLondon100();" );
  NextDestination.setAttribute( "onClick", "StBotolphStreet100();" );
}
function WormwoodStreet100Audio(){
  WormwoodStreetAudio()
  BackDestination.setAttribute( "onClick", "MoorgateStation100();" );
  NextDestination.setAttribute( "onClick", "StBotolphStreet100();" );
}
function StBotolphStreet100(){
  StBotolphStreet()
  BackDestination.setAttribute( "onClick", "StBotolphStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "StBotolphStreet100Audio();" );
}
function StBotolphStreet100Audio(){
  StBotolphStreetAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "AldgateStation100();" );
}
function AldgateStation100(){
  AldgateStation()
  BackDestination.setAttribute( "onClick", "AldgateStation100Audio();" );
  NextDestination.setAttribute( "onClick", "AldgateStation100Audio();" );
}
function AldgateStation100Audio(){
  AldgateStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "Minories100();" );
}
function Minories100(){
  Minories()
  BackDestination.setAttribute( "onClick", "Minories100Audio();" );
  NextDestination.setAttribute( "onClick", "Minories100Audio();" );
}
function Minories100Audio(){
  MinoriesAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation100();" );
}
function TowerHillTowerGatewayStation100(){
  TowerHillTowerGatewayStation()
  BackDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation100Audio();" );
  NextDestination.setAttribute( "onClick", "TowerHillTowerGatewayStation100Audio();" );
}
function TowerHillTowerGatewayStation100Audio(){
  TowerHillTowerGatewayStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "StKatharineDocks100();" );
}
function StKatharineDocks100(){
  StKatharineDocks()
  BackDestination.setAttribute( "onClick", "StKatharineDocks100Audio();" );
  NextDestination.setAttribute( "onClick", "StKatharineDocks100Audio();" );
}
function TowerGatewayStation100(){
  TowerGatewayStation()
  BackDestination.setAttribute( "onClick", "TowerGatewayStation100Audio();" );
  NextDestination.setAttribute( "onClick", "TowerGatewayStation100Audio();" );
}
function MansellStreet100(){
  MansellStreet()
  BackDestination.setAttribute( "onClick", "MansellStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "MansellStreet100Audio();" );
}
function DukesPlace100(){
  DukesPlace()
  BackDestination.setAttribute( "onClick", "DukesPlace100Audio();" );
  NextDestination.setAttribute( "onClick", "DukesPlace100Audio();" );
}
function Bishopsgate100(){
  Bishopsgate()
  BackDestination.setAttribute( "onClick", "Bishopsgate100Audio();" );
  NextDestination.setAttribute( "onClick", "Bishopsgate100Audio();" );
}
function Bishopsgate100Audio(){
  BishopsgateAudio()
  BackDestination.setAttribute( "onClick", "WormwoodStreet100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function DukesPlace100Audio(){
  DukesPlaceAudio()
  BackDestination.setAttribute( "onClick", "Bishopsgate100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function MansellStreet100Audio(){
  MansellStreetAudio()
  BackDestination.setAttribute( "onClick", "DukesPlace100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function TowerGatewayStation100Audio(){
  TowerGatewayStationAudio()
  BackDestination.setAttribute( "onClick", "MansellStreet100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function StKatharineDocks100Audio(){
  StKatharineDocksAudio()
  BackDestination.setAttribute( "onClick", "TowerGatewayStation100();" );
  NextDestination.setAttribute( "onClick", "TheHighway100();" );
}
function TheHighway100(){
  TheHighway()
  BackDestination.setAttribute( "onClick", "TheHighway100Audio();" );
  NextDestination.setAttribute( "onClick", "TheHighway100Audio();" );
}
function TheHighway100Audio(){
  TheHighwayAudio()
  BackDestination.setAttribute( "onClick", "StKatharineDocks100();" );
  NextDestination.setAttribute( "onClick", "NeshamStreet100();" );
}
function NeshamStreet100(){
  NeshamStreet()
  BackDestination.setAttribute( "onClick", "NeshamStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "NeshamStreet100Audio();" );
}
function NeshamStreet100Audio(){
  NeshamStreetAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "HermitageWall100();" );
}
function HermitageWall100(){
  HermitageWall()
  BackDestination.setAttribute( "onClick", "HermitageWall100Audio();" );
  NextDestination.setAttribute( "onClick", "HermitageWall100Audio();" );
}
function StockholmWay100(){
  StockholmWay()
  BackDestination.setAttribute( "onClick", "StockholmWay100Audio();" );
  NextDestination.setAttribute( "onClick", "StockholmWay100Audio();" );
}
function StockholmWay100Audio(){
  StockholmWayAudio()
  BackDestination.setAttribute( "onClick", "TheHighway100();" );
  NextDestination.setAttribute( "onClick", "SampsonStreet100();" );
}
function HermitageWall100Audio(){
  HermitageWallAudio()
  BackDestination.setAttribute( "onClick", "StockholmWay100();" );
  NextDestination.setAttribute( "onClick", "SampsonStreet100();" );
}
function SampsonStreet100(){
  SampsonStreet()
  BackDestination.setAttribute( "onClick", "SampsonStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "SampsonStreet100Audio();" );
}
function SampsonStreet100Audio(){
  SampsonStreetAudio()
  BackDestination.setAttribute( "onClick", "HermitageWall100();" );
  NextDestination.setAttribute( "onClick", "DundeeStreet100();" );
}
function DundeeStreet100(){
  DundeeStreet()
  BackDestination.setAttribute( "onClick", "DundeeStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "DundeeStreet100Audio();" );
}
function DundeeStreet100Audio(){
  DundeeStreetAudio()
  BackDestination.setAttribute( "onClick", "SampsonStreet100();" );
  NextDestination.setAttribute( "onClick", "WappingStation100();" );
}
function WappingStation100(){
  WappingStation()
  BackDestination.setAttribute( "onClick", "WappingStation100Audio();" );
  NextDestination.setAttribute( "onClick", "WappingStation100Audio();" );
}
function WappingStation100Audio(){
  WappingStationAudio()
  BackDestination.setAttribute( "onClick", "DundeeStreet100();" );
  NextDestination.setAttribute( "onClick", "WappingHealthCentre100();" );
}
function WappingHealthCentre100(){
  WappingHealthCentre()
  BackDestination.setAttribute( "onClick", "WappingHealthCentre100Audio();" );
  NextDestination.setAttribute( "onClick", "WappingHealthCentre100Audio();" );
}
function CleggStreet100(){
  CleggStreet()
  BackDestination.setAttribute( "onClick", "CleggStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "CleggStreet100Audio();" );
}
function GarnetStreet100(){
  GarnetStreet()
  BackDestination.setAttribute( "onClick", "GarnetStreet100Audio();" );
  NextDestination.setAttribute( "onClick", "GarnetStreet100Audio();" );
}
function WappingWall100(){
  WappingWall1()
  BackDestination.setAttribute( "onClick", "WappingWall100Audio();" );
  NextDestination.setAttribute( "onClick", "WappingWall100Audio();" );
}
function WappingWall100Audio(){
  WappingWallAudio()
  BackDestination.setAttribute( "onClick", "WappingStation100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function GarnetStreet100Audio(){
  GarnetStreetAudio()
  BackDestination.setAttribute( "onClick", "WappingWall100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function CleggStreet100Audio(){
  CleggStreetAudio()
  BackDestination.setAttribute( "onClick", "GarnetStreet100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function WappingHealthCentre100Audio(){
  WappingHealthCentreAudio()
  BackDestination.setAttribute( "onClick", "CleggStreet100();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100();" );
}
function TobaccoDock100(){
  TobaccoDock()
  BackDestination.setAttribute( "onClick", "TobaccoDock100Audio();" );
  NextDestination.setAttribute( "onClick", "TobaccoDock100Audio();" );
}
function TobaccoDock100Audio(){
  TobaccoDockAudio()
  BackDestination.setAttribute( "onClick", "WappingHealthCentre100();" );
  NextDestination.setAttribute( "onClick", "StPaulsChurch100();" );
}
function StPaulsChurch100(){
  StPaulsChurch()
  BackDestination.setAttribute( "onClick", "StPaulsChurch100Audio();" );
  NextDestination.setAttribute( "onClick", "StPaulsChurch100Audio();" );
}
function StPaulsChurch100Audio(){
  StPaulsChurchAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "GlamisPlace100();" );
}
function GlamisPlace100(){
  GlamisPlace()
  BackDestination.setAttribute( "onClick", "GlamisPlace100Audio();" );
  NextDestination.setAttribute( "onClick", "GlamisPlace100Audio();" );
}
function GlamisPlace100Audio(){
  GlamisPlaceAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "KingDavidLane100();" );
}
function KingDavidLane100(){
  KingDavidLane()
  BackDestination.setAttribute( "onClick", "KingDavidLane100Audio();" );
  NextDestination.setAttribute( "onClick", "KingDavidLane100Audio();" );
}
function KingDavidLane100Audio(){
  KingDavidLaneAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation100();" );
}
function ShadwellStation100(){
  ShadwellStation()
  BackDestination.setAttribute( "onClick", "ShadwellStation100Audio();" );
  NextDestination.setAttribute( "onClick", "ShadwellStation100Audio();" );
}
function ShadwellStation100Audio(){
  ShadwellStationAudio()
  BackDestination.setAttribute( "onClick", "SuttonStreet339();" );
  NextDestination.setAttribute( "onClick", "StGeorgesTownHallShadwellStn100();" );
}
function StGeorgesTownHallShadwellStn100(){
  StGeorgesTownHallShadwellStn()
  BackDestination.setAttribute( "onClick", "StGeorgesTownHallShadwellStn100Audio();" );
  NextDestination.setAttribute( "onClick", "StGeorgesTownHallShadwellStn100Audio();" );
}
function StGeorgesTownHallShadwellStn100Audio(){
  StGeorgesTownHallShadwellStnAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function PoplarAllSaintsChurchD7(){
  PoplarAllSaintsChurch()
  BackDestination.setAttribute( "onClick", "PoplarAllSaintsChurchD7Audio();" );
  NextDestination.setAttribute( "onClick", "PoplarAllSaintsChurchD7Audio();" );
}
function PoplarAllSaintsChurchD7Audio(){
  PoplarAllSaintsChurchAudio()
  BackDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  NextDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7();" );
}
function PoplarHighStreetBlackwallD7(){
  PoplarHighStreetBlackwall()
  BackDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7Audio();" );
  NextDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7Audio();" );
}
function PoplarHighStreetBlackwallD7Audio(){
  PoplarHighStreetBlackwallAudio()
  BackDestination.setAttribute( "onClick", "PoplarAllSaintsChurchD7();" );
  NextDestination.setAttribute( "onClick", "AspenWayD7();" );
}
function AspenWayD7(){
  AspenWay()
  BackDestination.setAttribute( "onClick", "AspenWayD7Audio();" );
  NextDestination.setAttribute( "onClick", "AspenWayD7Audio();" );
}
function AspenWayD7Audio(){
  AspenWayAudio()
  BackDestination.setAttribute( "onClick", "PoplarHighStreetBlackwallD7();" );
  NextDestination.setAttribute( "onClick", "ColdharbourD7();" );
}
function ColdharbourD7(){
  Coldharbour()
  BackDestination.setAttribute( "onClick", "ColdharbourD7Audio();" );
  NextDestination.setAttribute( "onClick", "ColdharbourD7Audio();" );
}
function ColdharbourD7Audio(){
  ColdharbourAudio()
  BackDestination.setAttribute( "onClick", "AspenWayD7();" );
  NextDestination.setAttribute( "onClick", "StewartStreetD7();" );
}
function StewartStreetD7(){
  StewartStreet()
  BackDestination.setAttribute( "onClick", "StewartStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "StewartStreetD7Audio();" );
}
function StewartStreetD7Audio(){
  StewartStreetAudio()
  BackDestination.setAttribute( "onClick", "TheBlueBridgeD7();" );
  NextDestination.setAttribute( "onClick", "StJohnsParkD7();" );
}
function TheBlueBridgeD7(){
  TheBlueBridge()
  BackDestination.setAttribute( "onClick", "TheBlueBridgeD7Audio();" );
  NextDestination.setAttribute( "onClick", "TheBlueBridgeD7Audio();" );
}
function TheBlueBridgeD7Audio(){
  TheBlueBridgeAudio()
  BackDestination.setAttribute( "onClick", "ColdharbourD7();" );
  NextDestination.setAttribute( "onClick", "StJohnsParkD7();" );
}
function StJohnsParkD7(){
  StJohnsPark()
  BackDestination.setAttribute( "onClick", "StJohnsParkD7Audio();" );
  NextDestination.setAttribute( "onClick", "StJohnsParkD7Audio();" );
}
function StJohnsParkD7Audio(){
  StJohnsParkAudio()
  BackDestination.setAttribute( "onClick", "StewartStreetD7();" );
  NextDestination.setAttribute( "onClick", "CubittTownSchoolD7();" );
}
function CubittTownSchoolD7(){
  CubittTownSchool()
  BackDestination.setAttribute( "onClick", "CubittTownSchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "CubittTownSchoolD7Audio();" );
}
function CubittTownSchoolD7Audio(){
  CubittTownSchoolAudio()
  BackDestination.setAttribute( "onClick", "StJohnsParkD7();" );
  NextDestination.setAttribute( "onClick", "PierStreetD7();" );
}
function PierStreetD7(){
  PierStreet()
  BackDestination.setAttribute( "onClick", "PierStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "PierStreetD7Audio();" );
}
function PierStreetD7Audio(){
  PierStreetAudio()
  BackDestination.setAttribute( "onClick", "CubittTownSchoolD7();" );
  NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7();" );
}
function IsleofDogsPoliceStationD7(){
  IsleofDogsPoliceStation()
  BackDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7Audio();" );
}
function IsleofDogsPoliceStationD7Audio(){
  IsleofDogsPoliceStationAudio()
  BackDestination.setAttribute( "onClick", "PierStreetD7();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStationD7();" );
}
function IslandGardensStationD7(){
  IslandGardensStation()
  BackDestination.setAttribute( "onClick", "IslandGardensStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "IslandGardensStationD7Audio();" );
}
function IslandGardensStationD7Audio(){
  IslandGardensStationAudio()
  BackDestination.setAttribute( "onClick", "GeorgeGreensSchoolD7();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoadD7();" );
}
function GeorgeGreensSchoolD7(){
  GeorgeGreensSchool()
  BackDestination.setAttribute( "onClick", "GeorgeGreensSchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "GeorgeGreensSchoolD7Audio();" );
}
function GeorgeGreensSchoolD7Audio(){
  GeorgeGreensSchoolAudio()
  BackDestination.setAttribute( "onClick", "IsleofDogsPoliceStationD7();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoadD7();" );
}
function EastFerryRoadD7(){
  EastFerryRoad()
  BackDestination.setAttribute( "onClick", "EastFerryRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "EastFerryRoadD7Audio();" );
}
function EastFerryRoadD7Audio(){
  EastFerryRoadAudio()
  BackDestination.setAttribute( "onClick", "IslandGardensStationD7();" );
  NextDestination.setAttribute( "onClick", "LangbournePlaceD7();" );
}
function LangbournePlaceD7(){
  LangbournePlace()
  BackDestination.setAttribute( "onClick", "LangbournePlaceD7Audio();" );
  NextDestination.setAttribute( "onClick", "LangbournePlaceD7Audio();" );
}
function LangbournePlaceD7Audio(){
  LangbournePlaceAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7();" );
}
function HarbingerSchoolMasthouseTerPierD7(){
  HarbingerSchoolMasthouseTerPier()
  BackDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7Audio();" );
  NextDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7Audio();" );
}
function HarbingerSchoolMasthouseTerPierD7Audio(){
  HarbingerSchoolMasthouseTerPierAudio()
  BackDestination.setAttribute( "onClick", "MaconochiesRoadD7();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD7();" );
}
function MaconochiesRoadD7(){
  MaconochiesRoad()
  BackDestination.setAttribute( "onClick", "MaconochiesRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "MaconochiesRoadD7Audio();" );
}
function MaconochiesRoadD7Audio(){
  MaconochiesRoadAudio()
  BackDestination.setAttribute( "onClick", "EastFerryRoadD7();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD7();" );
}
function StEdmundsSchoolD7(){
  StEdmundsSchool()
  BackDestination.setAttribute( "onClick", "StEdmundsSchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "StEdmundsSchoolD7Audio();" );
}
function StEdmundsSchoolD7Audio(){
  StEdmundsSchoolAudio()
  BackDestination.setAttribute( "onClick", "HarbingerSchoolMasthouseTerPierD7();" );
  NextDestination.setAttribute( "onClick", "CrewsStreetD7();" );
}
function CrewsStreetD7(){
  CrewsStreet()
  BackDestination.setAttribute( "onClick", "CrewsStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "CrewsStreetD7Audio();" );
}
function CrewsStreetD7Audio(){
  CrewsStreetAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7();" );
}
function ArnhemWharfPrimarySchoolD7(){
  ArnhemWharfPrimarySchool()
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7Audio();" );
  NextDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7Audio();" );
}
function ArnhemWharfPrimarySchoolD7Audio(){
  ArnhemWharfPrimarySchoolAudio()
  BackDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatreD7();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7();" );
}
function CrewsStreettheSpaceTheatreD7(){
  CrewsStreettheSpaceTheatre()
  BackDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatreD7Audio();" );
  NextDestination.setAttribute( "onClick", "CrewsStreettheSpaceTheatreD7Audio();" );
}
function CrewsStreettheSpaceTheatreD7Audio(){
  CrewsStreettheSpaceTheatreAudio()
  BackDestination.setAttribute( "onClick", "StEdmundsSchoolD7();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7();" );
}
function SirJohnMcdougallGardensD7(){
  SirJohnMcdougallGardens()
  BackDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7Audio();" );
  NextDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7Audio();" );
}
function SirJohnMcdougallGardensD7Audio(){
  SirJohnMcdougallGardensAudio()
  BackDestination.setAttribute( "onClick", "ArnhemWharfPrimarySchoolD7();" );
  NextDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7();" );
}
function BarkantineClinicHutchingsStreetD7(){
  BarkantineClinicHutchingsStreet()
  BackDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7Audio();" );
}
function BarkantineClinicHutchingsStreetD7Audio(){
  BarkantineClinicHutchingsStreetAudio()
  BackDestination.setAttribute( "onClick", "SirJohnMcdougallGardensD7();" );
  NextDestination.setAttribute( "onClick", "ByngStreetD7();" );
}
function ByngStreetD7(){
  ByngStreet()
  BackDestination.setAttribute( "onClick", "ByngStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "ByngStreetD7Audio();" );
}
function ByngStreetD7Audio(){
  ByngStreetAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuayD7();" );
}
function MarshWallHeronQuayD7(){
  MarshWallHeronQuay()
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuayD7Audio();" );
  NextDestination.setAttribute( "onClick", "MarshWallHeronQuayD7Audio();" );
}
function MarshWallHeronQuayD7Audio(){
  MarshWallHeronQuayAudio()
  BackDestination.setAttribute( "onClick", "CubaStreetD7();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationD7();" );
}
function CubaStreetD7(){
  CubaStreet()
  BackDestination.setAttribute( "onClick", "CubaStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "CubaStreetD7Audio();" );
}
function CubaStreetD7Audio(){
  CubaStreetAudio()
  BackDestination.setAttribute( "onClick", "BarkantineClinicHutchingsStreetD7();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationD7();" );
}
function CanaryWharfStationD7(){
  CanaryWharfStation()
  BackDestination.setAttribute( "onClick", "CanaryWharfStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStationD7Audio();" );
}
function CanaryWharfStationD7Audio(){
  CanaryWharfStationAudio()
  BackDestination.setAttribute( "onClick", "MarshWallHeronQuayD7();" );
  NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStnD7();" );
}
function CanadaSquareSouthCanaryWharfStnD7(){
  CanadaSquareSouthCanaryWharfStn()
  BackDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStnD7Audio();" );
  NextDestination.setAttribute( "onClick", "CanadaSquareSouthCanaryWharfStnD7Audio();" );
}
function CanadaSquareSouthCanaryWharfStnD7Audio(){
  CanadaSquareSouthCanaryWharfStnAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation2D7();" );
}
function CanaryWharfStation2D7(){
  CanaryWharfStation()
  BackDestination.setAttribute( "onClick", "CanaryWharfStation2D7Audio();" );
  NextDestination.setAttribute( "onClick", "CanaryWharfStation2D7Audio();" );
}
function CanaryWharfStation2D7Audio(){
  CanaryWharfStationAudio()
  BackDestination.setAttribute( "onClick", "CanaryWharfStationD7();" );
  NextDestination.setAttribute( "onClick", "WestIndiaAvenueD7();" );
}
function WestIndiaAvenueD7(){
  WestIndiaAvenue()
  BackDestination.setAttribute( "onClick", "WestIndiaAvenueD7Audio();" );
  NextDestination.setAttribute( "onClick", "WestIndiaAvenueD7Audio();" );
}
function WestIndiaAvenueD7Audio(){
  WestIndiaAvenueAudio()
  BackDestination.setAttribute( "onClick", "CanaryWharfStation2D7();" );
  NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPierD7();" );
}
function WestferryCircusCanaryWharfPierD7(){
  WestferryCircusCanaryWharfPier()
  BackDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPierD7Audio();" );
  NextDestination.setAttribute( "onClick", "WestferryCircusCanaryWharfPierD7Audio();" );
}
function WestferryCircusCanaryWharfPierD7Audio(){
  WestferryCircusCanaryWharfPierAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "WestferryStationD7();" );
}
function WestferryStationD7(){
  WestferryStation()
  BackDestination.setAttribute( "onClick", "WestferryStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "WestferryStationD7Audio();" );
}
function WestferryStationD7Audio(){
  WestferryStationAudio()
  BackDestination.setAttribute( "onClick", "WestIndiaAvenueD7();" );
  NextDestination.setAttribute( "onClick", "SalterStreetD7();" );
}
function SalterStreetD7(){
  SalterStreet()
  BackDestination.setAttribute( "onClick", "SalterStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "SalterStreetD7Audio();" );
}
function SalterStreetD7Audio(){
  SalterStreetAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "EastIndiaDockRoadD7();" );
}
function EastIndiaDockRoadD7(){
  EastIndiaDockRoad()
  BackDestination.setAttribute( "onClick", "EastIndiaDockRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "EastIndiaDockRoadD7Audio();" );
}
function EastIndiaDockRoadD7Audio(){
  EastIndiaDockRoadAudio()
  BackDestination.setAttribute( "onClick", "LimehousePoliceStationD7();" );
  NextDestination.setAttribute( "onClick", "PixleyStreetD7();" );
}
function LimehousePoliceStationD7(){
  LimehousePoliceStation()
  BackDestination.setAttribute( "onClick", "LimehousePoliceStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "LimehousePoliceStationD7Audio();" );
}
function LimehousePoliceStationD7Audio(){
  LimehousePoliceStationAudio()
  BackDestination.setAttribute( "onClick", "WestferryStationD7();" );
  NextDestination.setAttribute( "onClick", "PixleyStreetD7();" );
}
function PixleyStreetD7(){
  PixleyStreet()
  BackDestination.setAttribute( "onClick", "PixleyStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "PixleyStreetD7Audio();" );
}
function PixleyStreetD7Audio(){
  PixleyStreetAudio()
  BackDestination.setAttribute( "onClick", "EastIndiaDockRoadD7();" );
  NextDestination.setAttribute( "onClick", "StPaulsWayD7();" );
}
function StPaulsWayD7(){
  StPaulsWay()
  BackDestination.setAttribute( "onClick", "StPaulsWayD7Audio();" );
  NextDestination.setAttribute( "onClick", "StPaulsWayD7Audio();" );
}
function StPaulsWayD7Audio(){
  StPaulsWayAudio()
  BackDestination.setAttribute( "onClick", "PixleyStreetD7();" );
  NextDestination.setAttribute( "onClick", "AckroydDriveD7();" );
}
function AckroydDriveD7(){
  AckroydDrive()
  BackDestination.setAttribute( "onClick", "AckroydDriveD7Audio();" );
  NextDestination.setAttribute( "onClick", "AckroydDriveD7Audio();" );
}
function AckroydDriveD7Audio(){
  AckroydDriveAudio()
  BackDestination.setAttribute( "onClick", "TobaccoDock100();" );
  NextDestination.setAttribute( "onClick", "EricStreetD7();" );
}
function EricStreetD7(){
  EricStreet()
  BackDestination.setAttribute( "onClick", "EricStreetD7Audio();" );
  NextDestination.setAttribute( "onClick", "EricStreetD7Audio();" );
}
function EricStreetD7Audio(){
  EricStreetAudio()
  BackDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD7();" );
  NextDestination.setAttribute( "onClick", "MileEndStationD7();" );
}
function MileEndParkLeisureCentreD7(){
  MileEndParkLeisureCentre()
  BackDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD7Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndParkLeisureCentreD7Audio();" );
}
function MileEndParkLeisureCentreD7Audio(){
  MileEndParkLeisureCentreAudio()
  BackDestination.setAttribute( "onClick", "StPaulsWayD7();" );
  NextDestination.setAttribute( "onClick", "MileEndStationD7();" );
}
function MileEndStationD7(){
  MileEndStation()
  BackDestination.setAttribute( "onClick", "MileEndStationD7Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationD7Audio();" );
}
function MileEndStationD7Audio(){
  MileEndStationAudio()
  BackDestination.setAttribute( "onClick", "EricStreetD7();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}
function MileEndStationBowRoadD7(){
  MileEndStationBowRoad()
  BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  NextDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
}
function MileEndStationBowRoadD7Audio(){
  MileEndStationBowRoadAudio()
  BackDestination.setAttribute( "onClick", "MileEndStationD7();" );
  NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
}

function WalthamstowBusStation69(){
  WalthamstowBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation69Audio();" );
  }
}
function WalthamstowBusStation69Audio(){
  WalthamstowBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function GrosvenorParkRoad69(){
  GrosvenorParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GrosvenorParkRoad69Audio(){
  GrosvenorParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GroveRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function QueensRoad69(){
  QueensRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "QueensRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "QueensRoad69Audio();" );
  }
}
function QueensRoad69Audio(){
  QueensRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStation69();" );
  }
}
function GroveRoad69(){
  GroveRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GroveRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GroveRoad69Audio();" );
  }
}
function GroveRoad69Audio(){
  GroveRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BakersAvenue69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "QueensRoad69();" );
  }
}
function BakersAvenue69(){
  BakersAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BakersAvenue69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BakersAvenue69Audio(){
  BakersAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonGreen69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeytonGreen69(){
  LeytonGreen()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonGreen69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeytonGreen69Audio(){
  LeytonGreenAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ColchesterRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HoeStreetBakersArms69(){
  HoeStreetBakersArms()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms69Audio();" );
  }
}
function HoeStreetBakersArms69Audio(){
  HoeStreetBakersArmsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GroveRoad69();" );
  }
}
function LeaBridgeRoadBakersArms69(){
  LeaBridgeRoadBakersArms()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms69Audio();" );
  }
}
function LeaBridgeRoadBakersArms69Audio(){
  LeaBridgeRoadBakersArmsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArms69();" );
  }
}
function ColchesterRoad69(){
  ColchesterRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ColchesterRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ColchesterRoad69Audio();" );
  }
}
function ColchesterRoad69Audio(){
  ColchesterRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArms69();" );
  }
}
function LeytonMidlandRoadStation69(){
  LeytonMidlandRoadStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69Audio();" );
  }
}
function LeytonMidlandRoadStation69Audio(){
  LeytonMidlandRoadStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonSportsGround69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ColchesterRoad69();" );
  }
}
function LeytonSportsGround69(){
  LeytonSportsGround()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonSportsGround69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LeytonSportsGround69Audio(){
  LeytonSportsGroundAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "VicarageRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrunswickRoad69(){
  BrunswickRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BrunswickRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BrunswickRoad69Audio();" );
  }
}
function BrunswickRoad69Audio(){
  BrunswickRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonMidlandRoadStation69();" );
  }
}
function VicarageRoad69(){
  VicarageRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "VicarageRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "VicarageRoad69Audio();" );
  }
}
function VicarageRoad69Audio(){
  VicarageRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BrunswickRoad69();" );
  }
}
function GrangeParkRoad69(){
  GrangeParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69Audio();" );
  }
}
function GrangeParkRoad69Audio(){
  GrangeParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "VicarageRoad69();" );
  }
}
function BuckinghamRoad69(){
  BuckinghamRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69Audio();" );
  }
}
function BuckinghamRoad69Audio(){
  BuckinghamRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonLibrary69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "GrangeParkRoad69();" );
  }
}
function LeytonLibrary69(){
  LeytonLibrary()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonLibrary69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonLibrary69Audio();" );
  }
}
function LeytonLibrary69Audio(){
  LeytonLibraryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BuckinghamRoad69();" );
  }
}
function LeytonStation69(){
  LeytonStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LeytonStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonStation69Audio();" );
  }
}
function LeytonStation69Audio(){
  LeytonStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MillaisRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonLibrary69();" );
  }
}
function MillaisRoad69(){
  MillaisRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MillaisRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MillaisRoad69Audio();" );
  }
}
function MillaisRoad69Audio(){
  MillaisRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "DrapersField69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LeytonStation69();" );
  }
}
function DrapersField69(){
  DrapersField()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "DrapersField69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "DrapersField69Audio();" );
  }
}
function DrapersField69Audio(){
  DrapersFieldAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EdithRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MillaisRoad69();" );
  }
}
function EdithRoad69(){
  EdithRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EdithRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "EdithRoad69Audio();" );
  }
}
function EdithRoad69Audio(){
  EdithRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BurgessRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "DrapersField69();" );
  }
}
function BurgessRoad69(){
  BurgessRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BurgessRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BurgessRoad69Audio();" );
  }
}
function BurgessRoad69Audio(){
  BurgessRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "JansonRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "EdithRoad69();" );
  }
}
function JansonRoad69(){
  JansonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "JansonRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function JansonRoad69Audio(){
  JansonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChobhamRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ChobhamRoad69(){
  ChobhamRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChobhamRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChobhamRoad69Audio();" );
  }
}
function ChobhamRoad69Audio(){
  ChobhamRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MarylandStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BurgessRoad69();" );
  }
}
function MarylandStation69(){
  MarylandStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MarylandStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStation69Audio();" );
  }
}
function MarylandStation69Audio(){
  MarylandStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ManbeyGrove69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChobhamRoad69();" );
  }
}
function ManbeyGrove69(){
  ManbeyGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ManbeyGrove69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ManbeyGrove69Audio(){
  ManbeyGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordLibrary69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordLibrary69(){
  StratfordLibrary()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordLibrary69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordLibrary69Audio(){
  StratfordLibraryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordCentre69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordCentre69(){
  StratfordCentre()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordCentre69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StratfordCentre69Audio(){
  StratfordCentreAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BarnbyStreet69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BarnbyStreet69(){
  BarnbyStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BarnbyStreet69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BarnbyStreet69Audio(){
  BarnbyStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChurchStreet69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MarylandStationManbeyGrove69(){
  MarylandStationManbeyGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStationManbeyGrove69Audio();" );
  }
}
function MarylandStationManbeyGrove69Audio(){
  MarylandStationManbeyGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStation69();" );
  }
}
function TheGrove69(){
  TheGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "TheGrove69Audio();" );
  }
}
function TheGrove69Audio(){
  TheGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MarylandStationManbeyGrove69();" );
  }
}
function StratfordBusStation69(){
  StratfordBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBusStation69Audio();" );
  }
}
function StratfordBusStation69Audio(){
  StratfordBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "TheGrove69();" );
  }
}
function StratfordBroadway69(){
  StratfordBroadway()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBroadway69Audio();" );
  }
}
function StratfordBroadway69Audio(){
  StratfordBroadwayAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBusStation69();" );
  }
}
function PaulStreet69(){
  PaulStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PaulStreet69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PaulStreet69Audio();" );
  }
}
function PaulStreet69Audio(){
  PaulStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StratfordBroadway69();" );
  }
}
function ChurchStreet69(){
  ChurchStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "ChurchStreet69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChurchStreet69Audio();" );
  }
}
function ChurchStreet69Audio(){
  ChurchStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowGrove69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PaulStreet69();" );
  }
}
function PlaistowGrove69(){
  PlaistowGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowGrove69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowGrove69Audio();" );
  }
}
function PlaistowGrove69Audio(){
  PlaistowGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MorleyRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "ChurchStreet69();" );
  }
}
function MorleyRoad69(){
  MorleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "MorleyRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MorleyRoad69Audio();" );
  }
}
function MorleyRoad69Audio(){
  MorleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowGrove69();" );
  }
}
function PlaistowStation69(){
  PlaistowStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "PlaistowStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowStation69Audio();" );
  }
}
function PlaistowStation69Audio(){
  PlaistowStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HighStreetPlaistow69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "MorleyRoad69();" );
  }
}
function HighStreetPlaistow69(){
  HighStreetPlaistow()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HighStreetPlaistow69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HighStreetPlaistow69Audio(){
  HighStreetPlaistowAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "FlorenceRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function FlorenceRoad69(){
  FlorenceRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "FlorenceRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "FlorenceRoad69Audio();" );
  }
}
function FlorenceRoad69Audio(){
  FlorenceRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "UpperRoadGrangeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "PlaistowStation69();" );
  }
}
function UpperRoadGrangeRoad69(){
  UpperRoadGrangeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "UpperRoadGrangeRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function UpperRoadGrangeRoad69Audio(){
  UpperRoadGrangeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EastLondonCemetery69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EastLondonCemetery69(){
  EastLondonCemetery()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "EastLondonCemetery69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EastLondonCemetery69Audio(){
  EastLondonCemeteryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StephensCourt69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SuffolkRoad69(){
  SuffolkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "SuffolkRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "SuffolkRoad69Audio();" );
  }
}
function SuffolkRoad69Audio(){
  SuffolkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "FlorenceRoad69();" );
  }
}
function LadysmithRoad69(){
  LadysmithRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "LadysmithRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LadysmithRoad69Audio();" );
  }
}
function LadysmithRoad69Audio(){
  LadysmithRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "SuffolkRoad69();" );
  }
}
function StephensCourt69(){
  StephensCourt()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StephensCourt69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StephensCourt69Audio();" );
  }
}
function StephensCourt69Audio(){
  StephensCourtAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "LadysmithRoad69();" );
  }
}
function BlakeRoad69(){
  BlakeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BlakeRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BlakeRoad69Audio();" );
  }
}
function BlakeRoad69Audio(){
  BlakeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StarLane69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StephensCourt69();" );
  }
}
function StarLane69(){
  StarLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "StarLane69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StarLane69Audio();" );
  }
}
function StarLane69Audio(){
  StarLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HermitRoad69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "BlakeRoad69();" );
  }
}
function HermitRoad69(){
  HermitRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "HermitRoad69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HermitRoad69Audio();" );
  }
}
function HermitRoad69Audio(){
  HermitRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "RathboneMarket69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "StarLane69();" );
  }
}
function RathboneMarket69(){
  RathboneMarket()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "RathboneMarket69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "RathboneMarket69Audio();" );
  }
}
function RathboneMarket69Audio(){
  RathboneMarketAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "CanningTownStation69();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "HermitRoad69();" );
  }
}
function CanningTownStation69(){
  CanningTownStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "CanningTownStation69Audio();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "CanningTownStation69Audio();" );
  }
}
function CanningTownStation69Audio(){
  CanningTownStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "CanningTown69"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "WalthamstowCentral69") {
    NextDestination.setAttribute( "onClick", "RathboneMarket69();" );
  }
}

function HomertonHospitalWardleStreet394(){
  HomertonHospitalWardleStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HomertonHospitalWardleStreet394Audio();" );
  }
}
function HomertonHospitalWardleStreet394Audio(){
  HomertonHospitalWardleStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BanisterHouse394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BanisterHouse394(){
  BanisterHouse()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BanisterHouse394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BanisterHouse394Audio();" );
  }
}
function BanisterHouse394Audio(){
  BanisterHouseAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PonsfordStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PonsfordStreet394(){
  PonsfordStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PonsfordStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "PonsfordStreet394Audio();" );
  }
}
function PonsfordStreet394Audio(){
  PonsfordStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "TrelawneyEstate394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TrelawneyEstate394(){
  TrelawneyEstate()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "TrelawneyEstate394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "TrelawneyEstate394Audio();" );
  }
}
function TrelawneyEstate394Audio(){
  TrelawneyEstateAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "RichmondRoadMartelloStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RichmondRoadMartelloStreet394(){
  RichmondRoadMartelloStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "RichmondRoadMartelloStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "RichmondRoadMartelloStreet394Audio();" );
  }
}
function RichmondRoadMartelloStreet394Audio(){
  RichmondRoadMartelloStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HomertonHospital394(){
  HomertonHospital()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HomertonHospital394Audio();" );
  }
}
function HomertonHospital394Audio(){
  HomertonHospitalAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function HomertonHospitalHomertonRow394(){
  HomertonHospitalHomertonRow()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow394Audio();" );
  }
}
function HomertonHospitalHomertonRow394Audio(){
  HomertonHospitalHomertonRowAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HomertonHospital394();" );
  }
}
function FennStreet394(){
  FennStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "FennStreet394Audio();" );
  }
}
function FennStreet394Audio(){
  FennStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HomertonHospitalHomertonRow394();" );
  }
}
function HomertonTerrace394(){
  HomertonTerrace()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HomertonTerrace394Audio();" );
  }
}
function HomertonTerrace394Audio(){
  HomertonTerraceAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "FennStreet394();" );
  }
}
function MorningLaneTrelawneyEstate394(){
  MorningLaneTrelawneyEstate()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MorningLaneTrelawneyEstate394Audio();" );
  }
}
function MorningLaneTrelawneyEstate394Audio(){
  MorningLaneTrelawneyEstateAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HomertonTerrace394();" );
  }
}
function HackneyTownHall394(){
  HackneyTownHall()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HackneyTownHall394Audio();" );
  }
}
function HackneyTownHall394Audio(){
  HackneyTownHallAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MorningLaneTrelawneyEstate394();" );
  }
}
function MartelloStreet394(){
  MartelloStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MartelloStreet394Audio();" );
  }
}
function MartelloStreet394Audio(){
  MartelloStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HackneyTownHall394();" );
  }
}
function NavarinoRoad394(){
  NavarinoRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "NavarinoRoad394Audio();" );
  }
}
function NavarinoRoad394Audio(){
  NavarinoRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MartelloStreet394();" );
  }
}
function GreenwoodRoad394(){
  GreenwoodRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "GreenwoodRoad394Audio();" );
  }
}
function GreenwoodRoad394Audio(){
  GreenwoodRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "MiddletonRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function RichmondRoadGreenwoodRoad394(){
  RichmondRoadGreenwoodRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "MiddletonRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "RichmondRoadGreenwoodRoad394Audio();" );
  }
}
function RichmondRoadGreenwoodRoad394Audio(){
  RichmondRoadGreenwoodRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BroadwayMarket394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "NavarinoRoad394();" );
  }
}
function MiddletonRoad394(){
  MiddletonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "MiddletonRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MiddletonRoad394Audio();" );
  }
}
function MiddletonRoad394Audio(){
  MiddletonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BroadwayMarket394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "RichmondRoadGreenwoodRoad394();" );
  }
}
function BroadwayMarket394(){
  BroadwayMarket()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BroadwayMarket394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BroadwayMarket394Audio();" );
  }
}
function BroadwayMarket394Audio(){
  BroadwayMarketAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "SheepLane394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MiddletonRoad394();" );
  }
}
function SheepLane394(){
  SheepLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "SheepLane394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "SheepLane394Audio();" );
  }
}
function SheepLane394Audio(){
  SheepLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PritchardsRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BroadwayMarket394();" );
  }
}
function AdaStreet394(){
  AdaStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PritchardsRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "AdaStreet394Audio();" );
  }
}
function AdaStreet394Audio(){
  AdaStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NichollStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "SheepLane394();" );
  }
}
function PritchardsRoad394(){
  PritchardsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PritchardsRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "PritchardsRoad394Audio();" );
  }
}
function PritchardsRoad394Audio(){
  PritchardsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NichollStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "AdaStreet394();" );
  }
}
function NichollStreet394(){
  NichollStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NichollStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "NichollStreet394Audio();" );
  }
}
function NichollStreet394Audio(){
  NichollStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "HaggerstonPark394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "PritchardsRoad394();" );
  }
}
function HaggerstonPark394(){
  HaggerstonPark()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "HaggerstonPark394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HaggerstonPark394Audio();" );
  }
}
function HaggerstonPark394Audio(){
  HaggerstonParkAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "ThurtleRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "NichollStreet394();" );
  }
}
function ThurtleRoad394(){
  ThurtleRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "ThurtleRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "ThurtleRoad394Audio();" );
  }
}
function ThurtleRoad394Audio(){
  ThurtleRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "KingslandRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HaggerstonPark394();" );
  }
}
function KingslandRoad394(){
  KingslandRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "KingslandRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "KingslandRoad394Audio();" );
  }
}
function KingslandRoad394Audio(){
  KingslandRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "StLeonardsHospital394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WhistonRoad394(){
  WhistonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "StLeonardsHospital394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "WhistonRoad394Audio();" );
  }
}
function WhistonRoad394Audio(){
  WhistonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "HoxtonStationMuseumoftheHome394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "ThurtleRoad394();" );
  }
}
function StLeonardsHospital394(){
  StLeonardsHospital()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "StLeonardsHospital394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "StLeonardsHospital394Audio();" );
  }
}
function StLeonardsHospital394Audio(){
  StLeonardsHospitalAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "HoxtonStationMuseumoftheHome394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "WhistonRoad394();" );
  }
}
function HoxtonStationMuseumoftheHome394(){
  HoxtonStationMuseumoftheHome()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "HoxtonStationMuseumoftheHome394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "HoxtonStationMuseumoftheHome394Audio();" );
  }
}
function HoxtonStationMuseumoftheHome394Audio(){
  HoxtonStationMuseumoftheHomeAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "FalkirkStHackneyCommunityCollege394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function FalkirkStHackneyCommunityCollege394(){
  FalkirkStHackneyCommunityCollege()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "FalkirkStHackneyCommunityCollege394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "FalkirkStHackneyCommunityCollege394Audio();" );
  }
}
function FalkirkStHackneyCommunityCollege394Audio(){
  FalkirkStHackneyCommunityCollegeAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "CrondallStreetHoxtonStreetMarket394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function MuseumoftheHome394(){
  MuseumoftheHome()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "CrondallStreetHoxtonStreetMarket394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MuseumoftheHome394Audio();" );
  }
}
function MuseumoftheHome394Audio(){
  MuseumoftheHomeAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PitfieldStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "StLeonardsHospital394();" );
  }
}
function FalkirkStreetHoxtonStation394(){
  FalkirkStreetHoxtonStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "CrondallStreetHoxtonStreetMarket394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "FalkirkStreetHoxtonStation394Audio();" );
  }
}
function FalkirkStreetHoxtonStation394Audio(){
  FalkirkStreetHoxtonStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PitfieldStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MuseumoftheHome394();" );
  }
}
function CrondallStreetHoxtonStreetMarket394(){
  CrondallStreetHoxtonStreetMarket()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "CrondallStreetHoxtonStreetMarket394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "CrondallStreetHoxtonStreetMarket394Audio();" );
  }
}
function CrondallStreetHoxtonStreetMarket394Audio(){
  CrondallStreetHoxtonStreetMarketAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PitfieldStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "FalkirkStreetHoxtonStation394();" );
  }
}
function PitfieldStreet394(){
  PitfieldStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PitfieldStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "PitfieldStreet394Audio();" );
  }
}
function PitfieldStreet394Audio(){
  PitfieldStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BucklandStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "CrondallStreetHoxtonStreetMarket394();" );
  }
}
function BucklandStreet394(){
  BucklandStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BucklandStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BucklandStreet394Audio();" );
  }
}
function BucklandStreet394Audio(){
  BucklandStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NewNorthRoad394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "PitfieldStreet394();" );
  }
}
function MinternStreet394(){
  MinternStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NewNorthRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MinternStreet394Audio();" );
  }
}
function MinternStreet394Audio(){
  MinternStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "MurrayGroveProvostEstate394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BucklandStreet394();" );
  }
}
function NewNorthRoad394(){
  NewNorthRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "NewNorthRoad394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "NewNorthRoad394Audio();" );
  }
}
function NewNorthRoad394Audio(){
  NewNorthRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "MurrayGroveProvostEstate394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MinternStreet394();" );
  }
}
function MurrayGroveProvostEstate394(){
  MurrayGroveProvostEstate()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "MurrayGroveProvostEstate394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MurrayGroveProvostEstate394Audio();" );
  }
}
function MurrayGroveProvostEstate394Audio(){
  MurrayGroveProvostEstateAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BletchleyStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function CropleyStreet394(){
  CropleyStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BletchleyStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "CropleyStreet394Audio();" );
  }
}
function CropleyStreet394Audio(){
  CropleyStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "ShoreditchPoliceStation394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "NewNorthRoad394();" );
  }
}
function BletchleyStreet394(){
  BletchleyStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BletchleyStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BletchleyStreet394Audio();" );
  }
}
function BletchleyStreet394Audio(){
  BletchleyStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "ShoreditchPoliceStation394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "CropleyStreet394();" );
  }
}
function MurrayGrove394(){
  MurrayGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MurrayGrove394Audio();" );
  }
}
function MurrayGrove394Audio(){
  MurrayGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "BletchleyStreet394();" );
  }
}
function ShoreditchPoliceStation394(){
  ShoreditchPoliceStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "ShoreditchPoliceStation394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "ShoreditchPoliceStation394Audio();" );
  }
}
function ShoreditchPoliceStation394Audio(){
  ShoreditchPoliceStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "WindsorTerrace394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "MurrayGrove394();" );
  }
}
function WindsorTerrace394(){
  WindsorTerrace()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "WindsorTerrace394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "WindsorTerrace394Audio();" );
  }
}
function WindsorTerrace394Audio(){
  WindsorTerraceAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "CentralStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "ShoreditchPoliceStation394();" );
  }
}
function CentralStreet394(){
  CentralStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "CentralStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "CentralStreet394Audio();" );
  }
}
function CentralStreet394Audio(){
  CentralStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "AngelIslington394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "WindsorTerrace394();" );
  }
}
function AngelIslington394(){
  AngelIslington()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "AngelIslington394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "AngelIslington394Audio();" );
  }
}
function AngelIslington394Audio(){
  AngelIslingtonAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PentonvilleRoadBaronStreet394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function PentonvilleRoadBaronStreet394(){
  PentonvilleRoadBaronStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "PentonvilleRoadBaronStreet394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "PentonvilleRoadBaronStreet394Audio();" );
  }
}
function PentonvilleRoadBaronStreet394Audio(){
  PentonvilleRoadBaronStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "TolpuddleStIslingtonPoliceStation394();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TolpuddleStIslingtonPoliceStation394(){
  TolpuddleStIslingtonPoliceStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "TolpuddleStIslingtonPoliceStation394Audio();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "TolpuddleStIslingtonPoliceStation394Audio();" );
  }
}
function TolpuddleStIslingtonPoliceStation394Audio(){
  TolpuddleStIslingtonPoliceStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function AngelIslingtonCityRoad394(){
  AngelIslingtonCityRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "AngelIslingtonCityRoad394Audio();" );
  }
}
function AngelIslingtonCityRoad394Audio(){
  AngelIslingtonCityRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "CentralStreet394();" );
  }
}
function LiverpoolRoadChapelMarket394(){
  LiverpoolRoadChapelMarket()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "LiverpoolRoadChapelMarket394Audio();" );
  }
}
function LiverpoolRoadChapelMarket394Audio(){
  LiverpoolRoadChapelMarketAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IslingtonAngel394"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "HomertonHospital394") {
    NextDestination.setAttribute( "onClick", "AngelIslingtonCityRoad394();" );
  }
}

function HarringaySainsburysW5(){
  HarringaySainsburys()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HarringaySainsburysW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HarringaySainsburysW5Audio();" );
  }
}
function HarringaySainsburysW5Audio(){
  HarringaySainsburysAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "EndymionRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function GreenLanesHarringayW5(){
  GreenLanesHarringay()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "EndymionRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "GreenLanesHarringayW5Audio();" );
  }
}
function GreenLanesHarringayW5Audio(){
  GreenLanesHarringayAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "FinsburyParkEndymionGateW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HarringaySainsburysW5();" );
  }
}
function EndymionRoadW5(){
  EndymionRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "EndymionRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "EndymionRoadW5Audio();" );
  }
}
function EndymionRoadW5Audio(){
  EndymionRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "FinsburyParkEndymionGateW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "GreenLanesHarringayW5();" );
  }
}
function FinsburyParkEndymionGateW5(){
  FinsburyParkEndymionGate()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "FinsburyParkEndymionGateW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "FinsburyParkEndymionGateW5Audio();" );
  }
}
function FinsburyParkEndymionGateW5Audio(){
  FinsburyParkEndymionGateAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "FinsburyParkHornseyGateW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function FinsburyParkHornseyGateW5(){
  FinsburyParkHornseyGate()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "FinsburyParkHornseyGateW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "FinsburyParkHornseyGateW5Audio();" );
  }
}
function FinsburyParkHornseyGateW5Audio(){
  FinsburyParkHornseyGateAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "OakfieldRoadStroudGreenW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "EndymionRoadW5();" );
  }
}
function OakfieldRoadStroudGreenW5(){
  OakfieldRoadStroudGreen()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "OakfieldRoadStroudGreenW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "OakfieldRoadStroudGreenW5Audio();" );
  }
}
function OakfieldRoadStroudGreenW5Audio(){
  OakfieldRoadStroudGreenAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "MountViewRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "FinsburyParkHornseyGateW5();" );
  }
}
function MountViewRoadW5(){
  MountViewRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "MountViewRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "MountViewRoadW5Audio();" );
  }
}
function MountViewRoadW5Audio(){
  MountViewRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HarringayStationW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HarringayStationW5();" );
  }
}
function HarringayStationW5(){
  HarringayStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HarringayStationW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HarringayStationW5Audio();" );
  }
}
function HarringayStationW5Audio(){
  HarringayStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "StapletonHallRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "StapletonHallRoadW5();" );
  }
}
function StapletonHallRoadW5(){
  StapletonHallRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "StapletonHallRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "StapletonHallRoadW5Audio();" );
  }
}
function StapletonHallRoadW5Audio(){
  StapletonHallRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "RidgeRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "OakfieldRoadStroudGreenW5();" );
  }
}
function RidgeRoadW5(){
  RidgeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "RidgeRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "RidgeRoadW5Audio();" );
  }
}
function RidgeRoadW5Audio(){
  RidgeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "UplandsRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function UplandsRoadW5(){
  UplandsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "UplandsRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "UplandsRoadW5Audio();" );
  }
}
function UplandsRoadW5Audio(){
  UplandsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WestonParkPrimarySchoolW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StationersParkW5(){
  StationersPark()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WestonParkPrimarySchoolW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "StationersParkW5Audio();" );
  }
}
function StationersParkW5Audio(){
  StationersParkAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WestonParkW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "MountViewRoadW5();" );
  }
}
function WestonParkPrimarySchoolW5(){
  WestonParkPrimarySchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WestonParkPrimarySchoolW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WestonParkPrimarySchoolW5Audio();" );
  }
}
function WestonParkPrimarySchoolW5Audio(){
  WestonParkPrimarySchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WestonParkW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "StationersParkW5();" );
  }
}
function MayfieldRoadW5(){
  MayfieldRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WestonParkW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "MayfieldRoadW5Audio();" );
  }
}
function MayfieldRoadW5Audio(){
  MayfieldRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "BourneRoadCrouchEndW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WestonParkPrimarySchoolW5();" );
  }
}
function WestonParkW5(){
  WestonPark()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WestonParkW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WestonParkW5Audio();" );
  }
}
function WestonParkW5Audio(){
  WestonParkAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "BourneRoadCrouchEndW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "MayfieldRoadW5();" );
  }
}
function BourneRoadCrouchEndW5(){
  BourneRoadCrouchEnd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "BourneRoadCrouchEndW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "BourneRoadCrouchEndW5Audio();" );
  }
}
function BourneRoadCrouchEndW5Audio(){
  BourneRoadCrouchEndAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HornseyLibraryW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HornseyLibraryW5(){
  HornseyLibrary()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HornseyLibraryW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HornseyLibraryW5Audio();" );
  }
}
function HornseyLibraryW5Audio(){
  HornseyLibraryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CrouchEndBroadwayW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function TottenhamLaneYMCAW5(){
  TottenhamLaneYMCA()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CrouchEndBroadwayW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "TottenhamLaneYMCAW5Audio();" );
  }
}
function TottenhamLaneYMCAW5Audio(){
  TottenhamLaneYMCAAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WolseleyRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WestonParkW5();" );
  }
}
function CrouchEndBroadwayW5(){
  CrouchEndBroadway()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CrouchEndBroadwayW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "CrouchEndBroadwayW5Audio();" );
  }
}
function CrouchEndBroadwayW5Audio(){
  CrouchEndBroadwayAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WolseleyRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "TottenhamLaneYMCAW5();" );
  }
}
function TivoliRoadCrouchEndW5(){
  TivoliRoadCrouchEnd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WolseleyRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "TivoliRoadCrouchEndW5Audio();" );
  }
}
function TivoliRoadCrouchEndW5Audio(){
  TivoliRoadCrouchEndAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CoolhurstRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "CrouchEndBroadwayW5();" );
  }
}
function WolseleyRoadW5(){
  WolseleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WolseleyRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WolseleyRoadW5Audio();" );
  }
}
function WolseleyRoadW5Audio(){
  WolseleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CoolhurstRoadW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "TivoliRoadCrouchEndW5();" );
  }
}
function CoolhurstRoadW5(){
  CoolhurstRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CoolhurstRoadW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "CoolhurstRoadW5Audio();" );
  }
}
function CoolhurstRoadW5Audio(){
  CoolhurstRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "LondonRoadNorthShepherdsHillW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WolseleyRoadW5();" );
  }
}
function LondonRoadNorthShepherdsHillW5(){
  LondonRoadNorthShepherdsHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "LondonRoadNorthShepherdsHillW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "LondonRoadNorthShepherdsHillW5Audio();" );
  }
}
function LondonRoadNorthShepherdsHillW5Audio(){
  LondonRoadNorthShepherdsHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "StanhopeRoadCrouchEndW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "CoolhurstRoadW5();" );
  }
}
function AlfordHouseW5(){
  AlfordHouse()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "StanhopeRoadCrouchEndW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "AlfordHouseW5Audio();" );
  }
}
function AlfordHouseW5Audio(){
  AlfordHouseAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "MayburyMewsW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "LondonRoadNorthShepherdsHillW5();" );
  }
}
function StanhopeRoadCrouchEndW5(){
  StanhopeRoadCrouchEnd()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "StanhopeRoadCrouchEndW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "StanhopeRoadCrouchEndW5Audio();" );
  }
}
function StanhopeRoadCrouchEndW5Audio(){
  StanhopeRoadCrouchEndAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "MayburyMewsW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "AlfordHouseW5();" );
  }
}
function MayburyMewsW5(){
  MayburyMews()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "MayburyMewsW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "MayburyMewsW5Audio();" );
  }
}
function MayburyMewsW5Audio(){
  MayburyMewsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HornseyLaneW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HornseyLaneW5(){
  HornseyLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HornseyLaneW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HornseyLaneW5Audio();" );
  }
}
function HornseyLaneW5Audio(){
  HornseyLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "FitzwarrenGardensW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "StanhopeRoadCrouchEndW5();" );
  }
}
function FitzwarrenGardensW5(){
  FitzwarrenGardens()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "FitzwarrenGardensW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "FitzwarrenGardensW5Audio();" );
  }
}
function FitzwarrenGardensW5Audio(){
  FitzwarrenGardensAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "ArchwayBridgeW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HornseyLaneW5();" );
  }
}
function ArchwayBridgeW5(){
  ArchwayBridge()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "ArchwayBridgeW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "ArchwayBridgeW5Audio();" );
  }
}
function ArchwayBridgeW5Audio(){
  ArchwayBridgeAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CromwellAvenueW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "FitzwarrenGardensW5();" );
  }
}
function CromwellAvenueW5(){
  CromwellAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "CromwellAvenueW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "CromwellAvenueW5Audio();" );
  }
}
function CromwellAvenueW5Audio(){
  CromwellAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HighgateHillHornseyLaneW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "ArchwayBridgeW5();" );
  }
}
function HighgateHillHornseyLaneW5(){
  HighgateHillHornseyLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "HighgateHillHornseyLaneW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "HighgateHillHornseyLaneW5Audio();" );
  }
}
function HighgateHillHornseyLaneW5Audio(){
  HighgateHillHornseyLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WhittingtonHospitalMagdalaAvenueW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WhittingtonHospitalMagdalaAvenueW5(){
  HighgateHillHornseyLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "WhittingtonHospitalMagdalaAvenueW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WhittingtonHospitalMagdalaAvenueW5Audio();" );
  }
}
function WhittingtonHospitalMagdalaAvenueW5Audio(){
  WhittingtonHospitalMagdalaAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "ArchwayStationW5();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "CromwellAvenueW5();" );
  }
}
function ArchwayStationW5(){
  ArchwayStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "ArchwayStationW5Audio();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "ArchwayStationW5Audio();" );
  }
}
function ArchwayStationW5Audio(){
  ArchwayStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "ArchwayW5"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "HarringaySuperstoresW5") {
    NextDestination.setAttribute( "onClick", "WhittingtonHospitalMagdalaAvenueW5();" );
  }
}

function LeytonstoneStationW13(){
  LeytonstoneStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "LeytonstoneStationW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "LeytonstoneStationW13Audio();" );
  }
}
function LeytonstoneStationW13Audio(){
  LeytonstoneStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "KirkdaleRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function KirkdaleRoadW13(){
  KirkdaleRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "KirkdaleRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "KirkdaleRoadW13Audio();" );
  }
}
function KirkdaleRoadW13Audio(){
  KirkdaleRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GreenManRoundaboutW13(){
  GreenManRoundabout()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW13Audio();" );
  }
}
function GreenManRoundaboutW13Audio(){
  GreenManRoundaboutAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "CambridgeRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "LeytonstoneStationW13();" );
  }
}
function CambridgeRoadW13(){
  CambridgeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "CambridgeRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "CambridgeRoadW13Audio();" );
  }
}
function CambridgeRoadW13Audio(){
  CambridgeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "BlakeHallRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW13();" );
  }
}
function BlakeHallRoadW13(){
  BlakeHallRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "BlakeHallRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "BlakeHallRoadW13Audio();" );
  }
}
function BlakeHallRoadW13Audio(){
  BlakeHallRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "WansteadStationW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WansteadStationW13(){
  WansteadStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "WansteadStationW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WansteadStationW13Audio();" );
  }
}
function WansteadStationW13Audio(){
  WansteadStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "WansteadPlaceW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WansteadPlaceW13(){
  WansteadPlace()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "WansteadPlaceW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WansteadPlaceW13Audio();" );
  }
}
function WansteadPlaceW13Audio(){
  WansteadPlaceAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "NewWansteadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function NewWansteadW13(){
  NewWanstead()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "NewWansteadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "NewWansteadW13Audio();" );
  }
}
function NewWansteadW13Audio(){
  NewWansteadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "SylvanRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HighstoneAvenueW13(){
  HighstoneAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "HighstoneAvenueW13Audio();" );
  }
}
function HighstoneAvenueW13Audio(){
  HighstoneAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "CambridgeRoadW13();" );
  }
}
function WansteadStationGeorgeGreenW13(){
  WansteadStationGeorgeGreen()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WansteadStationGeorgeGreenW13Audio();" );
  }
}
function WansteadStationGeorgeGreenW13Audio(){
  WansteadStationGeorgeGreenAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "HighstoneAvenueW13();" );
  }
}
function WansteadHighStWansteadStationW13(){
  WansteadHighStWansteadStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WansteadHighStWansteadStationW13Audio();" );
  }
}
function WansteadHighStWansteadStationW13Audio(){
  WansteadHighStWansteadStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WansteadStationGeorgeGreenW13();" );
  }
}
function HighStreetHermonHillW13(){
  HighStreetHermonHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "HighStreetHermonHillW13Audio();" );
  }
}
function HighStreetHermonHillW13Audio(){
  HighStreetHermonHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WansteadHighStWansteadStationW13();" );
  }
}
function SylvanRoadW13(){
  SylvanRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "SylvanRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "SylvanRoadW13Audio();" );
  }
}
function SylvanRoadW13Audio(){
  SylvanRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "HeronwoodHospitalW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "HighStreetHermonHillW13();" );
  }
}
function HeronwoodHospitalW13(){
  HeronwoodHospital()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "HeronwoodHospitalW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "HeronwoodHospitalW13Audio();" );
  }
}
function HeronwoodHospitalW13Audio(){
  HeronwoodHospitalAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "CharnwoodDriveW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "SylvanRoadW13();" );
  }
}
function CharnwoodDriveW13(){
  CharnwoodDrive()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "CharnwoodDriveW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "CharnwoodDriveW13Audio();" );
  }
}
function CharnwoodDriveW13Audio(){
  CharnwoodDriveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "GeorgeLaneChigwellRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "HeronwoodHospitalW13();" );
  }
}
function GeorgeLaneChigwellRoadW13(){
  GeorgeLaneChigwellRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "GeorgeLaneChigwellRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "GeorgeLaneChigwellRoadW13Audio();" );
  }
}
function GeorgeLaneChigwellRoadW13Audio(){
  GeorgeLaneChigwellRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "SouthWoodfordStationW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "CharnwoodDriveW13();" );
  }
}
function SouthWoodfordStationW13(){
  SouthWoodfordStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "SouthWoodfordStationW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "SouthWoodfordStationW13Audio();" );
  }
}
function SouthWoodfordStationW13Audio(){
  SouthWoodfordStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "GeorgeLaneShoppingCentreW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "GeorgeLaneChigwellRoadW13();" );
  }
}
function GeorgeLaneShoppingCentreW13(){
  GeorgeLaneShoppingCentre()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "GeorgeLaneShoppingCentreW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "GeorgeLaneShoppingCentreW13Audio();" );
  }
}
function GeorgeLaneShoppingCentreW13Audio(){
  GeorgeLaneShoppingCentreAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "SouthendRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "SouthWoodfordStationW13();" );
  }
}
function SouthendRoadW13(){
  SouthendRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "SouthendRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "SouthendRoadW13Audio();" );
  }
}
function SouthendRoadW13Audio(){
  SouthendRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "ChelmsfordRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "GeorgeLaneShoppingCentreW13();" );
  }
}
function ChelmsfordRoadW13(){
  ChelmsfordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "ChelmsfordRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "ChelmsfordRoadW13Audio();" );
  }
}
function ChelmsfordRoadW13Audio(){
  ChelmsfordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "EmpressAvenueW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EmpressAvenueW13(){
  EmpressAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "EmpressAvenueW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "EmpressAvenueW13Audio();" );
  }
}
function EmpressAvenueW13Audio(){
  EmpressAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "ChurchillMemorialW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ChurchfieldsW13(){
  Churchfields()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "ChurchfieldsW13Audio();" );
  }
}
function ChurchfieldsW13Audio(){
  ChurchfieldsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "SouthendRoadW13();" );
  }
}
function StAlbansRoadW13(){
  StAlbansRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "StAlbansRoadW13Audio();" );
  }
}
function StAlbansRoadW13Audio(){
  StAlbansRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "ChurchfieldsW13();" );
  }
}
function ChurchillMemorialW13(){
  ChurchillMemorial()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "ChurchillMemorialW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "ChurchillMemorialW13Audio();" );
  }
}
function ChurchillMemorialW13Audio(){
  ChurchillMemorialAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "ChingfordLaneW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "StAlbansRoadW13();" );
  }
}
function ChingfordLaneW13(){
  ChingfordLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "ChingfordLaneW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "ChingfordLaneW13Audio();" );
  }
}
function ChingfordLaneW13Audio(){
  ChingfordLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoadW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "ChurchillMemorialW13();" );
  }
}
function WoodfordGreenBroadmeadRoadW13(){
  WoodfordGreenBroadmeadRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoadW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoadW13Audio();" );
  }
}
function WoodfordGreenBroadmeadRoadW13Audio(){
  WoodfordGreenBroadmeadRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "MonkhamsLaneW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "ChingfordLaneW13();" );
  }
}
function MonkhamsLaneW13(){
  MonkhamsLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "MonkhamsLaneW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "MonkhamsLaneW13Audio();" );
  }
}
function MonkhamsLaneW13Audio(){
  MonkhamsLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "StThomasofCanterburyChurchW13();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "WoodfordGreenBroadmeadRoadW13();" );
  }
}
function StThomasofCanterburyChurchW13(){
  StThomasofCanterburyChurch()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "StThomasofCanterburyChurchW13Audio();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "StThomasofCanterburyChurchW13Audio();" );
  }
}
function StThomasofCanterburyChurchW13Audio(){
  StThomasofCanterburyChurchAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "WoodfordWellsW13"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "LeytonstoneW13") {
    NextDestination.setAttribute( "onClick", "MonkhamsLaneW13();" );
  }
}

function StaffaRoadW19(){getRidOfDestination()
  StaffaRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "StaffaRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "StaffaRoadW19Audio();" );
  }
}
function StaffaRoadW19Audio(){
  StaffaRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ArgallAvenueIndustrialEstateW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function ArgallAvenueIndustrialEstateW19(){getRidOfDestination()
  ArgallAvenueIndustrialEstate()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ArgallAvenueIndustrialEstateW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ArgallAvenueIndustrialEstateW19Audio();" );
  }
}
function ArgallAvenueIndustrialEstateW19Audio(){
  ArgallAvenueIndustrialEstateAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BarnCroftPrimarySchoolW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}
function BarnCroftPrimarySchoolW19(){getRidOfDestination()
  BarnCroftPrimarySchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BarnCroftPrimarySchoolW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BarnCroftPrimarySchoolW19Audio();" );
  }
}
function BarnCroftPrimarySchoolW19Audio(){
  BarnCroftPrimarySchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "MarkhouseAvenueW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ArgallAvenueIndustrialEstateW19();" );
  }
}
function MarkhouseAvenueW19(){getRidOfDestination()
  MarkhouseAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "MarkhouseAvenueW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "MarkhouseAvenueW19Audio();" );
  }
}
function MarkhouseAvenueW19Audio(){
  MarkhouseAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SouthGroveW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BarnCroftPrimarySchoolW19();" );
  }
}
function SouthGroveW19(){getRidOfDestination()
  SouthGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SouthGroveW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "SouthGroveW19Audio();" );
  }
}
function SouthGroveW19Audio(){
  SouthGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SelborneWalkVernonRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "MarkhouseAvenueW19();" );
  }
}
function SelborneWalkVernonRoadW19(){getRidOfDestination()
  SelborneWalkVernonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SelborneWalkVernonRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "SelborneWalkVernonRoadW19Audio();" );
  }
}
function SelborneWalkVernonRoadW19Audio(){
  SelborneWalkVernonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SelborneWalkW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function SelborneWalkW19(){getRidOfDestination()
  SelborneWalk()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SelborneWalkW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "SelborneWalkW19Audio();" );
  }
}
function SelborneWalkW19Audio(){
  SelborneWalkAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WalthamstowCentralStationW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "SouthGroveW19();" );
  }
}
function WalthamstowCentralStationW19(){getRidOfDestination()
  WalthamstowCentralStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WalthamstowCentralStationW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WalthamstowCentralStationW19Audio();" );
  }
}
function WalthamstowCentralStationW19Audio(){
  WalthamstowCentralStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WalthamstowBusStationW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WalthamstowBusStationW19(){getRidOfDestination()
  WalthamstowBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WalthamstowBusStationW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStationW19Audio();" );
  }
}
function WalthamstowBusStationW19Audio(){
  WalthamstowBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "SelborneWalkW19();" );
  }
}
function GrosvenorParkRoadW19(){getRidOfDestination()
  GrosvenorParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "GrosvenorParkRoadW19Audio();" );
  }
}
function GrosvenorParkRoadW19Audio(){
  GrosvenorParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GroveRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function QueensRoadW19(){getRidOfDestination()
  QueensRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "QueensRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "QueensRoadW19Audio();" );
  }
}
function QueensRoadW19Audio(){
  QueensRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WalthamstowBusStationW19();" );
  }
}
function GroveRoadW19(){getRidOfDestination()
  GroveRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GroveRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "GroveRoadW19Audio();" );
  }
}
function GroveRoadW19Audio(){
  GroveRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BakersAvenueW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "QueensRoadW19();" );
  }
}
function BakersAvenueW19(){getRidOfDestination()
  BakersAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BakersAvenueW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BakersAvenueW19Audio();" );
  }
}
function BakersAvenueW19Audio(){
  BakersAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArmsW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HoeStreetBakersArmsW19(){getRidOfDestination()
  HoeStreetBakersArms()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArmsW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArmsW19Audio();" );
  }
}
function HoeStreetBakersArmsW19Audio(){
  HoeStreetBakersArmsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "GroveRoadW19();" );
  }
}
function LeaBridgeRoadBakersArmsW19(){getRidOfDestination()
  LeaBridgeRoadBakersArms()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArmsW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArmsW19Audio();" );
  }
}
function LeaBridgeRoadBakersArmsW19Audio(){
  LeaBridgeRoadBakersArmsAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LeytonGreenRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "HoeStreetBakersArmsW19();" );
  }
}
function LeytonGreenRoadW19(){getRidOfDestination()
  LeytonGreenRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LeytonGreenRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LeytonGreenRoadW19Audio();" );
  }
}
function LeytonGreenRoadW19Audio(){
  LeytonGreenRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ShernhallStreetW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LeaBridgeRoadBakersArmsW19();" );
  }
}
function ShernhallStreetW19(){getRidOfDestination()
  ShernhallStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ShernhallStreetW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ShernhallStreetW19Audio();" );
  }
}
function ShernhallStreetW19Audio(){
  ShernhallStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "PeterboroughRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EssexRoadW19(){getRidOfDestination()
  EssexRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "EssexRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "EssexRoadW19Audio();" );
  }
}
function EssexRoadW19Audio(){
  EssexRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LeytonGreenRoadW19();" );
  }
}
function PeterboroughRoadW19(){getRidOfDestination()
  PeterboroughRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "PeterboroughRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "PeterboroughRoadW19Audio();" );
  }
}
function PeterboroughRoadW19Audio(){
  PeterboroughRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossWoodStreetW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "EssexRoadW19();" );
  }
}
function WhippsCrossWoodStreetW19(){getRidOfDestination()
  WhippsCrossWoodStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossWoodStreetW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WhippsCrossWoodStreetW19Audio();" );
  }
}
function WhippsCrossWoodStreetW19Audio(){
  WhippsCrossWoodStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossBusStandW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WhippsCrossBusStandW19(){getRidOfDestination()
  WhippsCrossBusStand()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossBusStandW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WhippsCrossBusStandW19Audio();" );
  }
}
function WhippsCrossBusStandW19Audio(){
  WhippsCrossBusStandAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalMainEntranceW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "PeterboroughRoadW19();" );
  }
}
function WhippsCrossHospitalMainEntranceW19(){getRidOfDestination()
  WhippsCrossHospitalMainEntrance()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalMainEntranceW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalMainEntranceW19Audio();" );
  }
}
function WhippsCrossHospitalMainEntranceW19Audio(){
  WhippsCrossHospitalMainEntranceAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalAEW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WhippsCrossBusStandW19();" );
  }
}
function WhippsCrossHospitalAEW19(){getRidOfDestination()
  WhippsCrossHospitalAE()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalAEW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalAEW19Audio();" );
  }
}
function WhippsCrossHospitalAEW19Audio(){
  WhippsCrossHospitalAEAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ClareRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalMainEntranceW19();" );
  }
}
function ClareRoadW19(){getRidOfDestination()
  ClareRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ClareRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ClareRoadW19Audio();" );
  }
}
function ClareRoadW19Audio(){
  ClareRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "PeterboroughRoadtwoW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WhippsCrossHospitalAEW19();" );
  }
}
function PeterboroughRoadtwoW19(){getRidOfDestination()
  PeterboroughRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "PeterboroughRoadtwoW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "PeterboroughRoadtwoW19Audio();" );
  }
}
function PeterboroughRoadtwoW19Audio(){
  PeterboroughRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "EssexRoadSouthW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function EssexRoadSouthW19(){getRidOfDestination()
  EssexRoadSouth()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "EssexRoadSouthW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "EssexRoadSouthW19Audio();" );
  }
}
function EssexRoadSouthW19Audio(){
  EssexRoadSouthAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ElimPentecostalChurchW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ClareRoadW19();" );
  }
}
function ElimPentecostalChurchW19(){getRidOfDestination()
  ElimPentecostalChurch()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ElimPentecostalChurchW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ElimPentecostalChurchW19Audio();" );
  }
}
function ElimPentecostalChurchW19Audio(){
  ElimPentecostalChurchAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ClarendonRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "EssexRoadSouthW19();" );
  }
}
function ClarendonRoadW19(){getRidOfDestination()
  ClarendonRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ClarendonRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ClarendonRoadW19Audio();" );
  }
}
function ClarendonRoadW19Audio(){
  ClarendonRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ElimPentecostalChurchW19();" );
  }
}
function LeytonstoneStnGroveGreenRoadW19(){getRidOfDestination()
  LeytonstoneStnGroveGreenRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoadW19Audio();" );
  }
}
function LeytonstoneStnGroveGreenRoadW19Audio(){
  LeytonstoneStnGroveGreenRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GainsboroughRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ClarendonRoadW19();" );
  }
}
function GainsboroughRoadW19(){getRidOfDestination()
  GainsboroughRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GainsboroughRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "GainsboroughRoadW19Audio();" );
  }
}
function GainsboroughRoadW19Audio(){
  GainsboroughRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LeytonstoneStnGroveGreenRoadW19();" );
  }
}
function GreenManRoundaboutW19(){getRidOfDestination()
  GreenManRoundabout()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW19Audio();" );
  }
}
function GreenManRoundaboutW19Audio(){
  GreenManRoundaboutAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BushRoadGreenManRoundaboutW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "GainsboroughRoadW19();" );
  }
}
function BushRoadGreenManRoundaboutW19(){getRidOfDestination()
  BushRoadGreenManRoundabout()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BushRoadGreenManRoundaboutW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BushRoadGreenManRoundaboutW19Audio();" );
  }
}
function BushRoadGreenManRoundaboutW19Audio(){
  BushRoadGreenManRoundaboutAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BlakeHallCrescentW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "GreenManRoundaboutW19();" );
  }
}
function BlakeHallCrescentW19(){getRidOfDestination()
  BlakeHallCrescent()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BlakeHallCrescentW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BlakeHallCrescentW19Audio();" );
  }
}
function BlakeHallCrescentW19Audio(){
  BlakeHallCrescentAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "QueenswoodGardensW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BushRoadGreenManRoundaboutW19();" );
  }
}
function QueenswoodGardensW19(){getRidOfDestination()
  QueenswoodGardens()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "QueenswoodGardensW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "QueenswoodGardensW19Audio();" );
  }
}
function QueenswoodGardensW19Audio(){
  QueenswoodGardensAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ParkRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "BlakeHallCrescentW19();" );
  }
}
function ParkRoadW19(){getRidOfDestination()
  ParkRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ParkRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ParkRoadW19Audio();" );
  }
}
function ParkRoadW19Audio(){
  ParkRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "HerongateRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "QueenswoodGardensW19();" );
  }
}
function HerongateRoadW19(){getRidOfDestination()
  HerongateRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "HerongateRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "HerongateRoadW19Audio();" );
  }
}
function HerongateRoadW19Audio(){
  HerongateRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "EmpressAvenueW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DoverRoadW19(){getRidOfDestination()
  DoverRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "DoverRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "DoverRoadW19Audio();" );
  }
}
function DoverRoadW19Audio(){
  DoverRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ParkRoadW19();" );
  }
}
function EmpressAvenueW19(){getRidOfDestination()
  EmpressAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "EmpressAvenueW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "EmpressAvenueW19Audio();" );
  }
}
function EmpressAvenueW19Audio(){
  EmpressAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "MerlinRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "DoverRoadW19();" );
  }
}
function MerlinRoadW19(){getRidOfDestination()
  MerlinRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "MerlinRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "MerlinRoadW19Audio();" );
  }
}
function MerlinRoadW19Audio(){
  MerlinRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "CityofLondonCemeteryW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "EmpressAvenueW19();" );
  }
}
function WansteadParkAvenueW19(){getRidOfDestination()
  WansteadParkAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "WansteadParkAvenueW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WansteadParkAvenueW19Audio();" );
  }
}
function WansteadParkAvenueW19Audio(){
  WansteadParkAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "MerlinRoadW19();" );
  }
}
function CityofLondonCemeteryW19(){getRidOfDestination()
  CityofLondonCemetery()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "CityofLondonCemeteryW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "CityofLondonCemeteryW19Audio();" );
  }
}
function CityofLondonCemeteryW19Audio(){
  CityofLondonCemeteryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "CapelRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "WansteadParkAvenueW19();" );
  }
}
function CapelRoadW19(){getRidOfDestination()
  CapelRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "CapelRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "CapelRoadW19Audio();" );
  }
}
function CapelRoadW19Audio(){
  CapelRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ManorParkStationW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "CityofLondonCemeteryW19();" );
  }
}
function ManorParkStationW19(){getRidOfDestination()
  ManorParkStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ManorParkStationW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ManorParkStationW19Audio();" );
  }
}
function ManorParkStationW19Audio(){
  ManorParkStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "RomfordRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "CapelRoadW19();" );
  }
}
function RomfordRoadW19(){getRidOfDestination()
  RomfordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "RomfordRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "RomfordRoadW19Audio();" );
  }
}
function RomfordRoadW19Audio(){
  RomfordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "FirstAvenueW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function HighStreetNorthW19(){getRidOfDestination()
  HighStreetNorth()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "HighStreetNorthW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "HighStreetNorthW19Audio();" );
  }
}
function HighStreetNorthW19Audio(){
  HighStreetNorthAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ManorParkStationW19();" );
  }
}
function FirstAvenueW19(){getRidOfDestination()
  FirstAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "FirstAvenueW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "FirstAvenueW19Audio();" );
  }
}
function FirstAvenueW19Audio(){
  FirstAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "RabbitsRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "HighStreetNorthW19();" );
  }
}
function RabbitsRoadW19(){getRidOfDestination()
  RabbitsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "RabbitsRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "RabbitsRoadW19Audio();" );
  }
}
function RabbitsRoadW19Audio(){
  RabbitsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SeventhAvenueW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "FirstAvenueW19();" );
  }
}
function SeventhAvenueW19(){getRidOfDestination()
  SeventhAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "SeventhAvenueW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "SeventhAvenueW19Audio();" );
  }
}
function SeventhAvenueW19Audio(){
  SeventhAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LittleIlfordLaneW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function LittleIlfordLaneW19(){getRidOfDestination()
  LittleIlfordLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "LittleIlfordLaneW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LittleIlfordLaneW19Audio();" );
  }
}
function LittleIlfordLaneW19Audio(){
  LittleIlfordLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "NorthCircularRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "RabbitsRoadW19();" );
  }
}
function NorthCircularRoadW19(){getRidOfDestination()
  NorthCircularRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "NorthCircularRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "NorthCircularRoadW19Audio();" );
  }
}
function NorthCircularRoadW19Audio(){
  NorthCircularRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "IlfordHillW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function IlfordHillW19(){getRidOfDestination()
  IlfordHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "IlfordHillW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "IlfordHillW19Audio();" );
  }
}
function IlfordHillW19Audio(){
  IlfordHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ChapelRoadW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function DersinghamAvenueW19(){getRidOfDestination()
  DersinghamAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "DersinghamAvenueW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "DersinghamAvenueW19Audio();" );
  }
}
function DersinghamAvenueW19Audio(){
  DersinghamAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "LittleIlfordLaneW19();" );
  }
}
function ChapelRoadW19(){getRidOfDestination()
  ChapelRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "ChapelRoadW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ChapelRoadW19Audio();" );
  }
}
function ChapelRoadW19Audio(){
  ChapelRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibraryW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "DersinghamAvenueW19();" );
  }
}
function IlfordBroadwayW19(){getRidOfDestination()
  IlfordBroadway()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "IlfordBroadwayW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "IlfordBroadwayW19Audio();" );
  }
}
function IlfordBroadwayW19Audio(){
  IlfordBroadwayAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "ChapelRoadW19();" );
  }
}
function RedbridgeCentralLibraryW19(){getRidOfDestination()
  RedbridgeCentralLibrary()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibraryW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibraryW19Audio();" );
  }
}
function RedbridgeCentralLibraryW19Audio(){
  RedbridgeCentralLibraryAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "HainaultStreetW19();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "IlfordBroadwayW19();" );
  }
}
function HainaultStreetW19(){getRidOfDestination()
  HainaultStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "HainaultStreetW19Audio();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "HainaultStreetW19Audio();" );
  }
}
function HainaultStreetW19Audio(){
  HainaultStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "IlfordW19"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "WalthamstowArgallAvenueW19") {
    NextDestination.setAttribute( "onClick", "RedbridgeCentralLibraryW19();" );
  }
}

function EdmontonGreenBusStation191(){
  getRidOfDestination()
  EdmontonGreenBusStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EdmontonGreenBusStation191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EdmontonGreenBusStation191Audio();" );
  }
}
function EdmontonGreenBusStation191Audio(){
  EdmontonGreenBusStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "MonmouthRoad191();" );
  }
}
function MonmouthRoad191(){
  getRidOfDestination()
  MonmouthRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "MonmouthRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "MonmouthRoad191Audio();" );
  }
}
function MonmouthRoad191Audio(){
  MonmouthRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EdmontonGreenBusStation191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BouncesRoad191();" );
  }
}
function BouncesRoad191(){
  getRidOfDestination()
  BouncesRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BouncesRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BouncesRoad191Audio();" );
  }
}
function BouncesRoad191Audio(){
  BouncesRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "StEdmundsCatholicPrimarySchool191();" );
  }
}
function StEdmundsCatholicPrimarySchool191(){
  getRidOfDestination()
  StEdmundsCatholicPrimarySchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "StEdmundsCatholicPrimarySchool191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "StEdmundsCatholicPrimarySchool191Audio();" );
  }
}
function StEdmundsCatholicPrimarySchool191Audio(){
  StEdmundsCatholicPrimarySchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "MonmouthRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ChesterRoad191();" );
  }
}
function ChesterRoad191(){
  getRidOfDestination()
  ChesterRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ChesterRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ChesterRoad191Audio();" );
  }
}
function ChesterRoad191Audio(){
  ChesterRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "StEdmundsCatholicPrimarySchool191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ExeterRoad191();" );
  }
}
function ExeterRoad191(){
  getRidOfDestination()
  ExeterRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ExeterRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ExeterRoad191Audio();" );
  }
}
function ExeterRoad191Audio(){
  ExeterRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ChesterRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "MontaguRoad191();" );
  }
}
function MontaguRoad191(){
  getRidOfDestination()
  MontaguRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "MontaguRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "MontaguRoad191Audio();" );
  }
}
function MontaguRoad191Audio(){
  MontaguRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "StMarysRoad191();" );
  }
}
function WarleyRoad191(){
  getRidOfDestination()
  WarleyRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "WarleyRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "WarleyRoad191Audio();" );
  }
}
function WarleyRoad191Audio(){
  WarleyRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ExeterRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function StMarysRoad191(){
  getRidOfDestination()
  StMarysRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "StMarysRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "StMarysRoad191Audio();" );
  }
}
function StMarysRoad191Audio(){
  StMarysRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "WarleyRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ShirleyGrove191();" );
  }
}
function ShirleyGrove191(){
  getRidOfDestination()
  ShirleyGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ShirleyGrove191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ShirleyGrove191Audio();" );
  }
}
function ShirleyGrove191Audio(){
  ShirleyGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "StMarysRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ScarboroughRoad191();" );
  }
}
function ScarboroughRoad191(){
  getRidOfDestination()
  ScarboroughRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ScarboroughRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ScarboroughRoad191Audio();" );
  }
}
function ScarboroughRoad191Audio(){
  ScarboroughRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ShirleyGrove191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "NightingaleRoad191();" );
  }
}
function NightingaleRoad191(){
  getRidOfDestination()
  NightingaleRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "NightingaleRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "NightingaleRoad191Audio();" );
  }
}
function NightingaleRoad191Audio(){
  NightingaleRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ScarboroughRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "OrchardRoad191();" );
  }
}
function OrchardRoad191(){
  getRidOfDestination()
  OrchardRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "OrchardRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "OrchardRoad191Audio();" );
  }
}
function OrchardRoad191Audio(){
  OrchardRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "NightingaleRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "FalconRoad191();" );
  }
}
function FalconRoad191(){
  getRidOfDestination()
  FalconRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "FalconRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "FalconRoad191Audio();" );
  }
}
function FalconRoad191Audio(){
  FalconRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "PondersEndStnOasisAcademyHadley191();" );
  }
}
function PondersEndStnOasisAcademyHadley191(){
  getRidOfDestination()
  PondersEndStnOasisAcademyHadley()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "PondersEndStnOasisAcademyHadley191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "PondersEndStnOasisAcademyHadley191Audio();" );
  }
}
function PondersEndStnOasisAcademyHadley191Audio(){
  PondersEndStnOasisAcademyHadleyAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoad191();" );
  }
}
function StMatthewsChurch191(){
  getRidOfDestination()
  StMatthewsChurch()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "StMatthewsChurch191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "StMatthewsChurch191Audio();" );
  }
}
function StMatthewsChurch191Audio(){
  StMatthewsChurchAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "OrchardRoad();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function OasisAcademyHadley191(){
  getRidOfDestination()
  OasisAcademyHadley()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "OasisAcademyHadley191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "OasisAcademyHadley191Audio();" );
  }
}
function OasisAcademyHadley191Audio(){
  OasisAcademyHadleyAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "StMatthewsChurch191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "AlexandraRoad191();" );
  }
}
function PondersEndStation191(){
  getRidOfDestination()
  PondersEndStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "PondersEndStation191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "PondersEndStation191Audio();" );
  }
}
function PondersEndStation191Audio(){
  PondersEndStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "OasisAcademyHadley191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "AlexandraRoad191();" );
  }
}
function ScotlandGreenRoad191(){
  getRidOfDestination()
  ScotlandGreenRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoad191Audio();" );
  }
}
function ScotlandGreenRoad191Audio(){
  ScotlandGreenRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "PondersEndStation191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "AlexandraRoad191();" );
  }
}
function DurantsRoad191(){
  getRidOfDestination()
  DurantsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "DurantsRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "DurantsRoad191Audio();" );
  }
}
function DurantsRoad191Audio(){
  DurantsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoadtwo191();" );
  }
}
function AlexandraRoad191(){
  getRidOfDestination()
  AlexandraRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "AlexandraRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "AlexandraRoad191Audio();" );
  }
}
function AlexandraRoad191Audio(){
  AlexandraRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "DurantsRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoadtwo191();" );
  }
}
function ScotlandGreenRoadtwo191(){
  getRidOfDestination()
  ScotlandGreenRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoadtwo191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ScotlandGreenRoadtwo191Audio();" );
  }
}
function ScotlandGreenRoadtwo191Audio(){
  ScotlandGreenRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "PondersEndHighStreet191();" );
  }
}
function PondersEndHighStreet191(){
  getRidOfDestination()
  PondersEndHighStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "PondersEndHighStreet191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "PondersEndHighStreet191Audio();" );
  }
}
function PondersEndHighStreet191Audio(){
  PondersEndHighStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GlynRoad191();" );
  }
}
function RoyalBritishLegion191(){
  getRidOfDestination()
  RoyalBritishLegion()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "RoyalBritishLegion191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "RoyalBritishLegion191Audio();" );
  }
}
function RoyalBritishLegion191Audio(){
  RoyalBritishLegionAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "AlexandraRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function GlynRoad191(){
  getRidOfDestination()
  GlynRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "GlynRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GlynRoad191Audio();" );
  }
}
function GlynRoad191Audio(){
  GlynRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "RoyalBritishLegion191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EnfieldBusGarageSouthburyStation191();" );
  }
}
function EnfieldBusGarageSouthburyStation191(){
  getRidOfDestination()
  EnfieldBusGarageSouthburyStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EnfieldBusGarageSouthburyStation191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EnfieldBusGarageSouthburyStation191Audio();" );
  }
}
function EnfieldBusGarageSouthburyStation191Audio(){
  EnfieldBusGarageSouthburyStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CrownRoad191();" );
  }
}
function CrownRoad191(){
  getRidOfDestination()
  CrownRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CrownRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CrownRoad191Audio();" );
  }
}
function CrownRoad191Audio(){
  CrownRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BairdRoad191();" );
  }
}
function CrownRoadSouthburyStation191(){
  getRidOfDestination()
  CrownRoadSouthburyStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CrownRoadSouthburyStation191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CrownRoadSouthburyStation191Audio();" );
  }
}
function CrownRoadSouthburyStation191Audio(){
  CrownRoadSouthburyStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "GlynRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BairdRoad191(){
  getRidOfDestination()
  BairdRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BairdRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BairdRoad191Audio();" );
  }
}
function BairdRoad191Audio(){
  BairdRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CrownRoadSouthburyStation191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoad191();" );
  }
}
function GreatCambridgeRoad191(){
  getRidOfDestination()
  GreatCambridgeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoad191Audio();" );
  }
}
function GreatCambridgeRoad191Audio(){
  GreatCambridgeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BairdRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "PercivalRoad191();" );
  }
}
function PercivalRoad191(){
  getRidOfDestination()
  PercivalRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "PercivalRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "PercivalRoad191Audio();" );
  }
}
function PercivalRoad191Audio(){
  PercivalRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CecilAvenue191();" );
  }
}
function CecilAvenue191(){
  getRidOfDestination()
  CecilAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CecilAvenue191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CecilAvenue191Audio();" );
  }
}
function CecilAvenue191Audio(){
  CecilAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "PercivalRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LadysmithRoad191();" );
  }
}
function LadysmithRoad191(){
  getRidOfDestination()
  LadysmithRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LadysmithRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LadysmithRoad191Audio();" );
  }
}
function LadysmithRoad191Audio(){
  LadysmithRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CecilAvenue191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EnfieldTownStation191();" );
  }
}
function EnfieldTownStation191(){
  getRidOfDestination()
  EnfieldTownStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EnfieldTownStation191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EnfieldTownStation191Audio();" );
  }
}
function EnfieldTownStation191Audio(){
  EnfieldTownStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LadysmithRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EnfieldTownCecilRoad191();" );
  }
}
function EnfieldTownCecilRoad191(){
  getRidOfDestination()
  EnfieldTownCecilRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EnfieldTownCecilRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EnfieldTownCecilRoad191Audio();" );
  }
}
function EnfieldTownCecilRoad191Audio(){
  EnfieldTownCecilRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "WindmillHillEnfieldWarMemorial191();" );
  }
}
function EnfieldTownChurchStreet191(){
  getRidOfDestination()
  EnfieldTownChurchStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EnfieldTownChurchStreet191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "EnfieldTownChurchStreet191Audio();" );
  }
}
function EnfieldTownChurchStreet191Audio(){
  EnfieldTownChurchStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EnfieldTownStation191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function WindmillHillEnfieldWarMemorial191(){
  getRidOfDestination()
  WindmillHillEnfieldWarMemorial()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "WindmillHillEnfieldWarMemorial191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "WindmillHillEnfieldWarMemorial191Audio();" );
  }
}
function WindmillHillEnfieldWarMemorial191Audio(){
  WindmillHillEnfieldWarMemorialAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "EnfieldTownChurchStreet191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ParsonageLane191();" );
  }
}
function ParsonageLane191(){
  getRidOfDestination()
  ParsonageLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ParsonageLane191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "ParsonageLane191Audio();" );
  }
}
function ParsonageLane191Audio(){
  ParsonageLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "WindmillHillEnfieldWarMemorial191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GordonHill191();" );
  }
}
function GordonHill191(){
  getRidOfDestination()
  GordonHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "GordonHill191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GordonHill191Audio();" );
  }
}
function GordonHill191Audio(){
  GordonHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LavenderHill191();" );
  }
}
function LavenderHill191(){
  getRidOfDestination()
  LavenderHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LavenderHill191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LavenderHill191Audio();" );
  }
}
function LavenderHill191Audio(){
  LavenderHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BrowningRoad191();" );
  }
}
function LaurelBankRoad191(){
  getRidOfDestination()
  LaurelBankRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LaurelBankRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LaurelBankRoad191Audio();" );
  }
}
function LaurelBankRoad191Audio(){
  LaurelBankRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "ParsonageLane191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BrowningRoad191(){
  getRidOfDestination()
  BrowningRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BrowningRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BrowningRoad191Audio();" );
  }
}
function BrowningRoad191Audio(){
  BrowningRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LaurelBankRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BakerStreet191();" );
  }
}
function BakerStreet191(){
  getRidOfDestination()
  BakerStreet()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BakerStreet191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BakerStreet191Audio();" );
  }
}
function BakerStreet191Audio(){
  BakerStreetAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BrowningRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "KenilworthCrescent191();" );
  }
}
function KenilworthCrescent191(){
  getRidOfDestination()
  KenilworthCrescent()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "KenilworthCrescent191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "KenilworthCrescent191Audio();" );
  }
}
function KenilworthCrescent191Audio(){
  KenilworthCrescentAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BakerStreet191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "FortyHill191();" );
  }
}
function FortyHill191(){
  getRidOfDestination()
  FortyHill()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "FortyHill191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "FortyHill191Audio();" );
  }
}
function FortyHill191Audio(){
  FortyHillAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "KenilworthCrescent191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "WillowRoad191();" );
  }
}
function WillowRoad191(){
  getRidOfDestination()
  WillowRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "WillowRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "WillowRoad191Audio();" );
  }
}
function WillowRoad191Audio(){
  WillowRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "FortyHill191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LinwoodCrescent191();" );
  }
}
function LinwoodCrescent191(){
  getRidOfDestination()
  LinwoodCrescent()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LinwoodCrescent191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LinwoodCrescent191Audio();" );
  }
}
function LinwoodCrescent191Audio(){
  LinwoodCrescentAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BaynesClose191();" );
  }
}
function LadysmithRoadtwo191(){
  getRidOfDestination()
  LadysmithRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LadysmithRoadtwo191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LadysmithRoadtwo191Audio();" );
  }
}
function LadysmithRoadtwo191Audio(){
  LadysmithRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "WillowRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function BaynesClose191(){
  getRidOfDestination()
  BaynesClose()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BaynesClose191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BaynesClose191Audio();" );
  }
}
function BaynesClose191Audio(){
  BaynesCloseAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LadysmithRoadtwo191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoadtwo191();" );
  }
}
function GreatCambridgeRoadtwo191(){
  getRidOfDestination()
  GreatCambridgeRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoadtwo191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoadtwo191Audio();" );
  }
}
function GreatCambridgeRoadtwo191Audio(){
  GreatCambridgeRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BaynesClose191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LarksfieldGrove191();" );
  }
}
function LarksfieldGrove191(){
  getRidOfDestination()
  LarksfieldGrove()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LarksfieldGrove191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LarksfieldGrove191Audio();" );
  }
}
function LarksfieldGrove191Audio(){
  LarksfieldGroveAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "GreatCambridgeRoadtwo191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "SherborneAvenue191();" );
  }
}
function SherborneAvenue191(){
  getRidOfDestination()
  SherborneAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "SherborneAvenue191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "SherborneAvenue191Audio();" );
  }
}
function SherborneAvenue191Audio(){
  SherborneAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LarksfieldGrove191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "OatlandsRoad191();" );
  }
}
function CarterhatchLane91(){
  getRidOfDestination()
  CarterhatchLane()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CarterhatchLane191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CarterhatchLane191Audio();" );
  }
}
function CarterhatchLane191Audio(){
  CarterhatchLaneAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "SherborneAvenue191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "();" );
  }
}
function OatlandsRoad191(){
  getRidOfDestination()
  OatlandsRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "OatlandsRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "OatlandsRoad191Audio();" );
  }
}
function OatlandsRoad191Audio(){
  OatlandsRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CarterhatchLane191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "DurantsSchool191();" );
  }
}
function DurantsSchool191(){
  getRidOfDestination()
  DurantsSchool()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "DurantsSchool191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "DurantsSchool191Audio();" );
  }
}
function DurantsSchool191Audio(){
  DurantsSchoolAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "IngersollRoad191();" );
  }
}
function IngersollRoad191(){
  getRidOfDestination()
  IngersollRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "IngersollRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "IngersollRoad191Audio();" );
  }
}
function IngersollRoad191Audio(){
  IngersollRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "OatlandsRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "HertfordRoad191();" );
  }
}
function HertfordRoad191(){
  getRidOfDestination()
  HertfordRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "HertfordRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "HertfordRoad191Audio();" );
  }
}
function HertfordRoad191Audio(){
  HertfordRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "IngersollRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "AlbanyParkAvenue191();" );
  }
}
function AlbanyParkAvenue191(){
  getRidOfDestination()
  AlbanyParkAvenue()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "AlbanyParkAvenue191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "AlbanyParkAvenue191Audio();" );
  }
}
function AlbanyParkAvenue191Audio(){
  AlbanyParkAvenueAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "HertfordRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CastleRoad191();" );
  }
}
function CastleRoad191(){
  getRidOfDestination()
  CastleRoad()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CastleRoad191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "CastleRoad191Audio();" );
  }
}
function CastleRoad191Audio(){
  CastleRoadAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "AlbanyParkAvenue191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LeysRoadEast191();" );
  }
}
function LeysRoadEast191(){
  getRidOfDestination()
  LeysRoadEast()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LeysRoadEast191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "LeysRoadEast191Audio();" );
  }
}
function LeysRoadEast191Audio(){
  LeysRoadEastAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "CastleRoad191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "Fouracres191();" );
  }
}
function Fouracres191(){
  getRidOfDestination()
  Fouracres()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "Fouracres191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "Fouracres191Audio();" );
  }
}
function Fouracres191Audio(){
  FouracresAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "LeysRoadEast191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BrimsdownStation191();" );
  }
}
function BrimsdownStation191(){
  getRidOfDestination()
  BrimsdownStation()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "BrimsdownStation191Audio();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BrimsdownStation191Audio();" );
  }
}
function BrimsdownStation191Audio(){
  BrimsdownStationAudio()
  // BackDestination.setAttribute( "onClick", "MileEndStationBowRoadD7Audio();" );
  if (routeDestination === "EdmontonGreen191"){
    NextDestination.setAttribute( "onClick", "Fouracres191();" );
  } else if (routeDestination === "Brimsdown191") {
    NextDestination.setAttribute( "onClick", "BusTerminatesHere();" );
  }
}