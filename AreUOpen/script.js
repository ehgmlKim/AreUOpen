var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.6034, 127.04169), //지도 시작 지점
    zoom: 17
});

var markers = new Array(); // 마커 정보를 담는 배열
var infoWindows = new Array(); // 정보창을 담는 배열
var positions = new Array();  // 지역을 담는 배열 ( 지역명/위도경도 )

positions.push(
    { "title": '제나키친', foodtype: "한식" , closeD: "Sat", openH:"11", openM:"00", closeH:"20", closeM:"00", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"30", latlng: new naver.maps.LatLng(37.6034, 127.04169) },
    { "title":"조아버거",  foodtype: "햄버거", closeD: "Sun", openH:"11", openM:"00", closeH:"20", closeM:"00", breakOH:"NUll", breakOM:"NUll", breakCH:"NUll", breakCM:"NUll", latlng: new naver.maps.LatLng(37.6039015, 127.0408758) },
    { "title": '송송식탁', foodtype: "한식",  closeD: "Sun", openH:"11", openM:"00", closeH:"20", closeM:"00", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.6038977, 127.0427576) },
    { "title": '스시빈',  foodtype: "초밥/롤",closeD: "Sun", openH:"11", openM:"30", closeH:"22", closeM:"00", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00", latlng: new naver.maps.LatLng(37.60385, 127.0433) },
    { "title": '백소정',   foodtype: "일식당",closeD:"null", openH:"11", openM:"00", breakOH:"15", breakOM:"00", breakCH:"17", breakCM:"00" ,closeH:"21", closeM:"00" , latlng: new naver.maps.LatLng(37.6028850, 127.0412987)},
    { "title":"서브웨이",  foodtype: "샌드위치", closeD:"null", openH:"08", openM:"00", breakOH:"null", breakOM:"null", breakCH:"null" ,breakCM:"null" ,closeH:"22", closeM:"00" ,latlng: new naver.maps.LatLng(37.60384, 127.04272) },
    { "title": '핏짜피자',  foodtype: "피자",closeD: "null", openH:"11", openM:"00", breakOH:"15", breakOM:"30", breakCH:"17", breakCM:"00" ,closeH:"21", closeM:"30" , latlng: new naver.maps.LatLng(37.6037559, 127.0420138) },
    { "title": '샐러디',   foodtype: "샐러드", closeD:"null", openH:"08", openM:"30", breakOH:"null", breakOM:"null", breakCH:"null" ,breakCM:"null" ,closeH:"21", closeM:"00" , latlng: new naver.maps.LatLng(37.6041401,127.0428911) }
);
	
for (var i = 0; i < positions.length; i++) {
    // 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !

    var marker = new naver.maps.Marker({
        map: map,
        title: positions[i].title, // 지역구 이름 
        position: positions[i].latlng // 지역구의 위도 경도 넣기 
    });
    
        /* 정보창 */
        var infoWindow = new naver.maps.InfoWindow({
            content: '<div style="width:200px;text-align:center;padding:10px;"><strong>' + positions[i].title + '</strong><br/>'
            +positions[i].foodtype + '<br>' 
            +positions[i].openH + ':'+ positions[i].openM + '~'+positions[i].closeH +":" +positions[i].closeM+'</div>'
        }); // 클릭했을 때 띄워줄 정보 HTML 작성
        
    markers.push(marker); // 생성한 마커를 배열에 담는다.
    infoWindows.push(infoWindow); // 생성한 정보창을 배열에 담는다.
}	
	
function getClickHandler(seq) {
		
    return function(e) {  // 마커를 클릭하는 부분
        var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
            infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다

        if (infoWindow.getMap()) {
            infoWindow.close();
        } else {
            infoWindow.open(map, marker); // 표출
        }
    }
}

for (var i=0; i<markers.length; i++) {
    console.log(markers[i] , getClickHandler(i));
    naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i)); // 클릭한 마커 핸들러
}