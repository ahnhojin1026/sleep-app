var loadimage = box().append().size('100%','100%').border(0).positionAbsolute().image('https://t1.daumcdn.net/brunch/static/img/sticker/apeach/19.png');
var loadBox = box().append().size('100%',130).border(0).center().positionAbsolute();
var loadText = box().append().size('100%',60).border(0).timerOnce(endloading , 100).marginTop(100);
box().appendTo(loadBox).size(100).border(0)
.image('http://fifa3.vod.nexoncdn.co.kr/files/roster/20160317/loading.gif');

var load = box().append().size('100%',130).border(0).center().positionAbsolute().hide().image('https://cdn-images-1.medium.com/max/1600/1*xfAZYoKogskpdY16yPF2Hw.gif');

function endloading(){
    loadimage.hide();
    loadBox.hide();
    loadText.hide();
    var mod = loadRealcode('realcode.mobile');
var bt = loadRealcode('realcode.bluetooth');
alarmcheck = 0;
var main1 = box().append().size('100%','100%').hide();
var nameBox = box().appendTo(main1).size('100%',50).text('수면 앱').textColor('white').textSize(20).padding(10).bgImage('http://blogfiles9.naver.net/MjAxNzA3MjhfMjgg/MDAxNTAxMTY4MzQzOTYy.AIl9d-fCGPDMqKREG42G4h18jSvwHqvR_4N4G5djoCIg.eugcaAdzR4cDV1SjsLEF5B-9OHhOx7oAAVqXWb86gaMg.PNG.lgwo45/18.png');
box().appendTo(nameBox).size('auto').bgImage('https://t1.daumcdn.net/cfile/tistory/1647144C4F62E6982B');
var menu1 = box().appendTo(main1).size('40%',170).text('수면시간\n').icon('time').iconSize(50).marginTop(40).click(onclickmenu2);
var menu2 = box().appendTo(main1).size('40%',170).text('수면패턴\n').icon("time-restore").iconSize(50).marginTop(40).click(onclickmenu3);
var menu3 = box().appendTo(main1).size('40%',170).text('알람\n').icon('alarm').iconSize(50).click(onclickmenu4);
var menu4 = box().appendTo(main1).size('40%',170).text('설정\n').icon("settings").iconSize(50).click(onclickmenu5);
var imagebox = box().appendTo(main1).size('100%',60);
var main2 = box().append().size('100%','100%').hide().overflow('hidden');
var nameBox = box().appendTo(main2).size('100%',50).text('수면 시간').textSize(20).padding(10);
var menuBox = box().appendTo(nameBox).size(30).icon('arrow-left').float('left').click(onclickmenu1).iconSize(30).border(0);
box().appendTo(nameBox).size(30).float('right').border(0);
var main3 = box().append().size('100%','100%').hide();
var nameBox = box().appendTo(main3).size('100%',50).text('수면 패턴').textSize(20).padding(10);
var menuBox = box().appendTo(nameBox).size(30).icon('arrow-left').float('left').click(onclickmenu1).iconSize(30).border(0);
box().appendTo(nameBox).size(30).float('right').border(0);
var main4 = box().append().size('100%','100%').hide().border(0);
var nameBox = box().appendTo(main4).size('100%',50).text('알람').textSize(20).padding(10);
var menuBox = box().appendTo(nameBox).size(30).icon('arrow-left').float('left').click(onclickmenu1).iconSize(30).border(0);
box().appendTo(nameBox).size(30).float('right').border(0);
var main5 = box().append().size('100%','100%').hide();
var nameBox = box().appendTo(main5).size('100%',50).text('설정').textSize(20).padding(10);
var menuBox = box().appendTo(nameBox).size(30).icon('arrow-left').float('left').click(onclickmenu1).iconSize(30).border(0);
box().appendTo(nameBox).size(30).float('right').border(0);
var main6 = box().append().size('100%','100%').hide();
var nameBox = box().appendTo(main6).size('100%',50).text('일어난 시간').textSize(20).padding(10);
var menuBox = box().appendTo(nameBox).size(30).icon('arrow-left').float('left').click(onclickmenu3).iconSize(30).border(0);
box().appendTo(nameBox).size(30).float('right').border(0);
var main7 = box().append().size('100%','100%').hide();
var nameBox = box().appendTo(main7).size('100%',50).text('잠든 시간').textSize(20).padding(10);
var menuBox = box().appendTo(nameBox).size(30).icon('arrow-left').float('left').click(onclickmenu3).iconSize(30).border(0);
box().appendTo(nameBox).size(30).float('right').border(0);
var main8 = box().append().size('100%','100%').hide();
var alarmsoundlist = ['circus'];
var d = new Date();
var monthdate = [31,28,31,30,31,30,31,31,30,31,30,31]
var year = d.getFullYear();
var month = d.getMonth()+1;
var date = d.getDate();
var day = d.getDay();
var kday;
var checkalarmonoff = false;
var lightcount = 0;
waittime = 0;
var checksleep = false;
var countsleep = 0;
var sleeptimearr=[];
var waketimearr=[];
if(year%4==0){
        if(year%100==0){
            if(year&400==0){
                monthdate[1]++;
            }
        }
        else{
            monthdate[1]++;
        }
    }
if(day==0){
    kday = '일';
}
else if(day==1){
    kday = '월';
}
else if(day==2){
    kday = '화';
}
else if(day==3){
    kday = '수';
}
else if(day==4){
    kday = '목';
}
else if(day==5){
    kday = '금';
}
else if(day==6){
    kday = '토';
}



//수면 시간
var graphBox = box().appendTo(main2).size(370,400).marginTop(40);
box().appendTo(graphBox).size(50,25).text('시간').float('left');
box().appendTo(graphBox).size(50,25).icon("chevron-left").iconSize(20).click(prev_day);
dateBox = box().appendTo(graphBox).size(80,25).text(month+'/'+date+' ('+kday+')');
box().appendTo(graphBox).size(50,25).icon("chevron-right").iconSize(20).click(next_day);
box().appendTo(graphBox).size(50,25).float('right').border(0);
var graph = box().appendTo(graphBox).size(250,250).borderColor('black').borderTop(0).borderRight(0).marginTop(40)
.overflow('hidden');
var bigtimeBox = box().appendTo(graphBox).size('100%',30).border(0);
box().appendTo(bigtimeBox).size(40,30).border(0);
var timebox = box().appendTo(bigtimeBox).size(250,30).border(0);
box().appendTo(bigtimeBox).size(40,30).text('시').border(0);
var aboutgraph = box().appendTo(graphBox).size(30).borderRadius(20).icon("help").iconSize(30).border(0)
.marginRight(50).marginLeft(50).float('left').marginTop(5).click(onclickaboutGraph);

//수면 패턴
var bigwake = box().appendTo(main3).size(370,200).marginTop(40);
box().appendTo(bigwake).size(100,30).float('left').text('일어난 시간').border(0).padding(5);
box().appendTo(bigwake).size(100,30).float('right').border(0);
var bigtimeave1 = box().appendTo(bigwake).size(180,170);
box().appendTo(bigtimeave1).size(50,30).text('평균').textSize(15).border(0).marginTop(5).float('left');
box().appendTo(bigtimeave1).size(50,30).border(0).marginTop(5).float('right');
var wakeave = box().appendTo(bigtimeave1).size(150,50).text('08:30').textSize(40).marginTop(20).border(0);
var bigtimeprev1 = box().appendTo(bigwake).size(180,170);
box().appendTo(bigtimeprev1).size('auto').text('지난 3일').textSize(15).border(0).marginTop(5);
var prev3day1=box().appendTo(bigtimeprev1).size(150,100);
var moreprevwake = box().appendTo(bigtimeprev1).size(130,30).text('더 보기 ').icon('plus-circle').button()
.marginTop(5).textSize(17).iconSize(17).click(onclickmoreprevwake);
var bigsleep = box().appendTo(main3).size(370,200);
box().appendTo(bigsleep).size(100,30).float('left').text('잠든 시간').border(0).padding(5);
box().appendTo(bigsleep).size(100,30).float('right').border(0);
var bigtimeave2 = box().appendTo(bigsleep).size(180,170);
box().appendTo(bigtimeave2).size(50,30).text('평균').textSize(15).border(0).marginTop(5).float('left');
box().appendTo(bigtimeave2).size(50,30).border(0).marginTop(5).float('right');
var sleepave = box().appendTo(bigtimeave2).size(150,50).text('12:00').textSize(40).marginTop(20).border(0);
var bigtimeprev2 = box().appendTo(bigsleep).size(180,170);
box().appendTo(bigtimeprev2).size('auto').text('지난 3일').textSize(15).border(0).marginTop(5);
var prev3day2=box().appendTo(bigtimeprev2).size(150,100);
var moreprevwake = box().appendTo(bigtimeprev2).size(130,30).text('더 보기 ').icon('plus-circle').button()
.marginTop(5).textSize(17).iconSize(17).click(onclickmoreprevsleep);

//알람
var alarmtimeBox = box().appendTo(main4).size(370,150).marginTop(40);
box().appendTo(alarmtimeBox).size(50,30).float('left').text('시간').border(0).padding(5);
var alarmtimamenu = box().appendTo(alarmtimeBox).size(200,30).border(0);
box().appendTo(alarmtimamenu).size(95,30).text('개인 설정').padding(5).click(onclickperson);
saveBox = box().appendTo(alarmtimeBox).size(50,30).float('right').text('저장').padding(3).click(savewaketime);
var alarmWaketime = box().appendTo(alarmtimeBox).size(370,120);
var alarmperson = box().appendTo(alarmtimeBox).size(370,120).hide();
box().appendTo(alarmWaketime).size(150,35).text('일어난 시간').marginRight(5).textSize(25).marginTop(40);
plusminusBox = box().appendTo(alarmWaketime).size(40,35).marginTop(40).marginRight(5).text('+').textSize(25).click(plusminus);
if(datastore().get('plusminuscheck')=='+'){
    plusminusBox.text('+');
}
else if(datastore().get('plusminuscheck')=='-'){
    plusminusBox.text('-');
}
var alarmwaketimepersonBox = box().appendTo(alarmWaketime).size(50,35).marginTop(40).editable().textSize(25).overflow('hidden').keyup(alarmwaketimesave);
alarmwaketimepersonBox.text(datastore().get('alarmwaketimeperson'));
box().appendTo(alarmWaketime).size(30,35).marginTop(40).text('분').textSize(25);
alarmhour = box().appendTo(alarmperson).size(60,35).marginTop(40).editable().textSize(25).keyup(checkalarmtimehour).click(onclickalarmhour).overflow('hidden');
alarmhour.text(datastore().get('alarmhoursave'));
box().appendTo(alarmperson).size(30,35).marginTop(40).text('시').textSize(25).marginRight(10);
alarmmin = box().appendTo(alarmperson).size(60,35).marginTop(40).editable().textSize(25).overflow('hidden').click(onclickalarmmin).keyup(checkalarmtimemin);
alarmmin.text(datastore().get('alarmminsave'));
box().appendTo(alarmperson).size(30,35).marginTop(40).text('분').textSize(25).marginRight(10);
if(datastore().get('alarmtime')==1){
    onclickwaketime()
}
else if(datastore().get('alarmtime')==2){
    onclickperson();
}

var alarmsettingBox = box().appendTo(main4).size(370,250);
box().appendTo(alarmsettingBox).size(50,30).float('left').text('내용').border(0).padding(5);
box().appendTo(alarmsettingBox).size(250,30).border(0);
box().appendTo(alarmsettingBox).size(50,30).float('right').border(0).marginTop(30);
var settinglight = box().appendTo(alarmsettingBox).size(370,40).border(0);
box().appendTo(settinglight).size(75,40).text('전등').textSize(25);
lightOnOff = box().appendTo(settinglight).size(100,40).text('ON').textSize(25)
.textColor('white').color('green').marginLeft(10).click(onclicklightOnOff);
var settingsound = box().appendTo(alarmsettingBox).size(370,40).marginTop(50).border(0);
box().appendTo(settingsound).size(75,40).text('소리').textSize(25);
soundOnOff = box().appendTo(settingsound).size(100,40).text('ON').textSize(25)
.textColor('white').color('green').marginLeft(10).click(onclicksoundOnOff);
var lightOnOffCheck = datastore().get('lightOnOffCheck');
var soundOnOffCheck = datastore().get('soundOnOffCheck');
var moveOnOffCheck = datastore().get('moveOnOffCheck');
if(lightOnOffCheck == false){
    lightOnOff.text('OFF');
    lightOnOff.color('red');
}
else if(lightOnOffCheck == true){
    lightOnOff.text('ON');
        lightOnOff.color('green');
}
if(soundOnOffCheck == false){
    soundOnOff.text('OFF');
        soundOnOff.color('red');
}
else if(soundOnOffCheck == true){
    soundOnOff.text('ON');
        soundOnOff.color('green');
}
//설정
var settingBox = box().appendTo(main5).size(370,150).marginTop(40);
box().appendTo(settingBox).size(50,30).float('left').text('연결').border(0).padding(5);
box().appendTo(settingBox).size(250,30).border(0);
box().appendTo(settingBox).size(50,30).float('right').border(0);
var connectlight = box().appendTo(settingBox).size(370,40).border(0).marginTop(30);
box().appendTo(connectlight).size(150,40).text('전등 연결').textSize(25);
lightconnectOnOff = box().appendTo(connectlight).size(100,40).text('ON').textSize(25)
.textColor('white').color('green').marginLeft(10).click(onclicklightconnectOnOff);
datastore().put('lightconnectOnOffcheck', false);
if(datastore().get('lightconnectOnOffcheck') == false){
    lightconnectOnOff.text('OFF');
        lightconnectOnOff.color('red');
}
else if(datastore().get('lightconnectOnOffcheck') == true){
    lightconnectOnOff.text('ON');
    lightconnectOnOff.color('green');
}

var alarmSoundBox = box().appendTo(main5).size(370,100);
box().appendTo(alarmSoundBox).size(70,30).float('left').text('알람음').border(0).padding(5);
box().appendTo(alarmSoundBox).size(210,30).border(0);
box().appendTo(alarmSoundBox).size(70,30).float('right').border(0);
alarmselectBox = box().appendTo(alarmSoundBox).size(150,40).select(alarmsoundlist).marginTop(10);

/*
var alarmlastBox = box().appendTo(main5).size(370,150);
box().appendTo(alarmlastBox).size(120,30).float('left').text('알람지속시간').border(0).padding(5);
box().appendTo(alarmlastBox).size(110,30).border(0);
box().appendTo(alarmlastBox).size(120,30).float('right').border(0);
alarmlastmin = box().appendTo(alarmlastBox).size(40,35).marginTop(30).editable().textSize(25).overflow('hidden')
.keyup(alarmlastminsave).click(onclickalarmmin);
alarmlastmin.text(datastore().get('alarmlastminsaved'));
box().appendTo(alarmlastBox).size(30,35).marginTop(30).text('분').textSize(25);
*/
//일어난 시간
var wakeBox = box().appendTo(main6).size(370,400).marginTop(40).overflow('auto');
box().appendTo(wakeBox).size(100,30).float('left').text('일어난 시간').border(0).padding(5);
box().appendTo(wakeBox).size(100,30).float('right').border(0);
for(var i =0;i<10;i++){
var bigwaketime = box().appendTo(wakeBox).size(330,50).marginBottom(4);
var wakedate = box().appendTo(bigwaketime).size(100,50);
var waketime = box().appendTo(bigwaketime).size(225,50);
}
//잠든 시간
var sleepBox = box().appendTo(main7).size(370,400).marginTop(40).overflow('auto');
box().appendTo(sleepBox).size(100,30).float('left').text('잠든 시간').border(0).padding(5);
box().appendTo(sleepBox).size(100,30).float('right').border(0);
//알람화면
box().appendTo(main8).size('100%',50).text('알람').border(0).textSize(30).marginTop(100);
box().appendTo(main8).size('100%',150).border(0).icon('alarm').iconSize(100);
box().appendTo(main8).size(150,50).text('확인').textSize(30).marginTop(100).click(stopalarm);
savewaketime();

function onclickmenu1(){
    main1.show();
    main2.hide();
    main3.hide();
    main4.hide();
    main5.hide();
}
function onclickmenu2(){
    main1.hide();
    main2.show();
    main3.hide();
    main4.hide();
    main5.hide();
    
    loadyear = d.getFullYear();
    loadmonth = d.getMonth()+1;
    loaddate = d.getDate();
    var day = d.getDay();
    if(day==0){
    loadkday = '일';
}
else if(day==1){
    loadkday = '월';
}
else if(day==2){
    loadkday = '화';
}
else if(day==3){
    loadkday = '수';
}
else if(day==4){
    loadkday = '목';
}
else if(day==5){
    loadkday = '금';
}
else if(day==6){
    loadkday = '토';
}

    loadsleepdatanowday();
}
function onclickmenu3(){
    main1.hide();
    main2.hide();
    main3.show();
    main4.hide();
    main5.hide();
    main6.hide();
    main7.hide();
    findsleeptime();
    findwaketime();
}
function onclickmenu4(){
    main1.hide();
    main2.hide();
    main3.hide();
    main4.show();
    main5.hide();
}
function onclickmenu5(){
    main1.hide();
    main2.hide();
    main3.hide();
    main4.hide();
    main5.show();
}
function prev_day(){
    graph.clear();
    //수면시간에 날짜를 이전으로 바꾸는 함수
    date--;
    day--;
    
    if(date<=0){
        month--;
        date = monthdate[month-1];
    }
    if(day<0){
        day=6;
    }
    if(month<1){
        month=12;
        year--;
    }
    if(day==0){
    kday = '일';
}
else if(day==1){
    kday = '월';
}
else if(day==2){
    kday = '화';
}
else if(day==3){
    kday = '수';
}
else if(day==4){
    kday = '목';
}
else if(day==5){
    kday = '금';
}
else if(day==6){
    kday = '토';
}
    
     if(datastore().get(year+month+date)){
        for(var i =0;i<datastore().get(year+month+date).length;i++){
        var sumheight = datastore().get(year+month+date)[i].height;
            if(Number(sumheight)>30){
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('red');
            }
            else if(Number(sumheight)>20){
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('orange');
            }
            else if(Number(sumheight)>10) {
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('yellow');
            }
            else if(Number(sumheight)>5){
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('green');
            }
             else if(Number(sumheight)<=5){
                 box().appendTo(graph).size(10,1).border(0).bottom(407).color('green');
            }
        }
    }dateBox.text(month+'/'+date+' ('+kday+')');
}
function next_day(){
     graph.clear();
    //수면시간에 날짜를 다음으로 바꾸는 함수
    date++;
    day++;
 
    if(date>= monthdate[month-1]){
        month++;
        date=1;
    }
    
    if(day>6){
        day=0;
    }
    if(month>12){
        month=1;
        year++;
    }
    if(day==0){
    kday = '일';
}
else if(day==1){
    kday = '월';
}
else if(day==2){
    kday = '화';
}
else if(day==3){
    kday = '수';
}
else if(day==4){
    kday = '목'; 
}
else if(day==5){
    kday = '금';
}
else if(day==6){
    kday = '토';
}
    
    if(datastore().get(year+month+date)){
        for(var i =0;i<datastore().get(year+month+date).length;i++){
        var sumheight = datastore().get(year+month+date)[i].height;
            if(Number(sumheight)>30){
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('red');
            }
            else if(Number(sumheight)>20){
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('orange');
            }
            else if(Number(sumheight)>10) {
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('yellow');
            }
            else if(Number(sumheight)>5){
                box().appendTo(graph).size(10,Number(sumheight)/3).border(0).bottom(407).color('green');
            }
             else if(Number(sumheight)<=5){
                 box().appendTo(graph).size(10,1).border(0).bottom(407).color('green');
            }
        }
    }dateBox.text(month+'/'+date+' ('+kday+')');
}
function onclickaboutGraph(){
    //설명 불러오기
    agbgBox = box().appendTo(main2).size('100%').color('black').opacity(50).positionFixed().center()
    .overflow('hidden').click(removeaboutGraph);
    helpgraph = box().append().size(300,100).color('white').positionFixed().center().padding(10)
    .text('초록색일수록 깊은 잠\n빨강색일수록 얕은 잠\n그래프의 높이는 수면의 깊이를 나타냄').borderRadius(10).border(5).borderColor('black');
}
function removeaboutGraph(){
    //설명 사라지기
    agbgBox.remove(); 
    helpgraph.remove();
}
function onclickmoreprevwake(){
     main1.hide();
     main2.hide();
     main3.hide();
     main4.hide();
     main5.hide();
     main6.show();
     main7.hide();
}
function onclickmoreprevsleep(){
     main1.hide();
     main2.hide();
     main3.hide();
     main4.hide();
     main5.hide();
     main6.hide();
     main7.show();
}
function onclickwaketime(){
    alarmWaketime.show();
    alarmperson.hide();
    datastore().put('alarmtime',1);
}
function onclickperson(){
    alarmWaketime.hide();
    alarmperson.show();
    datastore().put('alarmtime',2);
}
function plusminus(){
    if(plusminusBox.text()=='+'){
        plusminusBox.text('-');
        datastore().put('plusminuscheck', '-');
    }
    else if(plusminusBox.text()=='-'){
        plusminusBox.text('+');
        datastore().put('plusminuscheck', '+');
    }
}
function checkalarmtimehour(){
    alarmcheck=0;
    if(alarmhour.text()>24){
        alert('시간은 24이하의 숫자로 입력하세요');
        alarmhour.text('');
    }
    else if(alarmhour. text()<=24){
        datastore().put('alarmhoursave', alarmhour.text())
    }
    else {
        alert('올바르지 못한 입력입니다');
        alarmhour.text('');
    }
}
function checkalarmtimemin(){
    alarmcheck=0;
    if(alarmmin.text()>59){
        alert('분은 60미만의 숫자로 입력하세요');
        alarmmin.text('');
    }
    else if(alarmmin. text()<60){
        datastore().put('alarmminsave', alarmmin.text())
    }
    else {
        alert('올바르지 못한 입력입니다');
         alarmmin.text('');
    }
}
function onclicklightOnOff(){
    if(lightOnOff.text()=='ON'){
        lightOnOff.text('OFF');
        lightOnOff.color('red');
        datastore().put('lightOnOffCheck',false);
    }
    else if(lightOnOff.text()=='OFF'){
        lightOnOff.text('ON');
        lightOnOff.color('green');
        datastore().put('lightOnOffCheck',true);
    }
}
function onclicksoundOnOff(){
    if(soundOnOff.text()=='ON'){
        soundOnOff.text('OFF');
        soundOnOff.color('red');
        datastore().put('soundOnOffCheck',false);
    }
    else if(soundOnOff.text()=='OFF'){
        soundOnOff.text('ON');
        soundOnOff.color('green');
         datastore().put('soundOnOffCheck',true);
    }
}
function onclickmoveOnOff(){
    if(moveOnOff.text()=='ON'){
        moveOnOff.text('OFF');
        moveOnOff.color('red');
    }
    else if(moveOnOff.text()=='OFF'){
        moveOnOff.text('ON');
        moveOnOff.color('green');
    }
}
function onclicklightconnectOnOff(){
    if(lightconnectOnOff.text()=='ON'){
        lightconnectOnOff.text('OFF');
        lightconnectOnOff.color('red');
        datastore().put('lightconnectOnOffcheck',false);
    }
    else if(lightconnectOnOff.text()=='OFF'){
        bt.showScan();
        lightconnectOnOff.text('ON');
        lightconnectOnOff.color('green');
        datastore().put('lightconnectOnOffcheck',true);
    }
}
function alarmwaketimesave(bx){
    datastore().put('alarmwaketimeperson',bx.text())
}
function alarmlastminsave(){
    datastore().put('alarmlastminsaved',alarmlastmin.text())
}
function savewaketime(){
    saveBox.blinkBorder('yellow',500);
    if(datastore().get('alarmtime')==1){
    onclickwaketime()
}
else if(datastore().get('alarmtime')==2){
    wakehour = alarmhour.text();
    wakemin = alarmmin.text();
   
    checkalarm();
     
    saveBox.timer(checkalarm, 10000);

}
}


function checkalarm(){
    d = new Date();
    nowhour = d.getHours();
   nowmmin = d.getMinutes();
    if(wakehour==nowhour&&wakemin==nowmmin&&alarmcheck==0){
        /*
         mod.backgroundMode.on('activate', function () {
        bx.timer(function () {
            mod.badge.increase();
            var d = new Date();
            mod.localNotification.schedule({ title: "알람", message:d.getHours()+':'+d.getMinutes()});
            
        }, 1);
    });
    */
        checkalarmonoff=true;
        if(datastore().get('lightOnOffCheck')==true){
        lightOnOff.timer(alarmlight , 10000);
        //bt.write('o');
        }
        if(datastore().get('soundOnOffCheck')==true){
            waittime = datastore().get('alarmlastminsaved')*60000;
            playSound('circus');
            alarmlastmin.timerOnce(stopalarm2, waittime);
        }
        onclickmenu8();
        alarmcheck=1;
    }
   
}
function onclickalarmhour(bx){
    bx.text('');
}
function onclickalarmmin(bx){
    bx.text('');
}
function onclickmenu8(){
    main1.hide();
    main2.hide();
    main3.hide();
    main4.hide();
    main5.hide();
    main6.hide();
    main7.hide();
    main8.show();
}
function stopalarm(){
    stopSound('circus');
    main1.show();
    main2.hide();
    main3.hide();
    main4.hide();
    main5.hide();
    main6.hide();
    main7.hide();
    main8.hide();
}
function stopalarm2(){
    lightcount=0;
    lightOnOff.clearTimer();
    stopSound('circus');
    checkalarmonoff = false;
}
function alarmlight(){
    if(lightcount*10000==waittime){
    stopalarm2();
    }
    else{
    bt.write('o');
    lightcount++;
    }
}
// var success = function(x){
//     alert(x+"caa"); 
// }
// var fail = function(){
//     alert("bb");
// }
bt.onConnect(function (){
    alert("connected success");
    main1.timer(getdata1,500);
   
})

var aveheight = 0;
var sumheight = 0;
var graphhour = 0;
var graphmin = 0;

//var monitorBox= box().append().hide();

function getdata1 (){
 bt.read(function (data){
     if(aveheight>120){
         aveheight=0;
         sumheight=0;
     }
    //alert(data+'\n'+"success"); 
    //imagebox.text(imagebox.text()+" "+ data);
    d = new Date();
    
    sensorvalue = data.split('/');
    sleepdata = {
        month: d.getMonth()+1, 
        date: d.getDate(), 
        hour: d.getHours(), 
        min: d.getMinutes(),
        move: sensorvalue[0],
        press: sensorvalue[1]
    }
    
    /*
    graphmin = d.getMinutes();
    if(graphmin.length==2){
        graphmin=graphmin.subString(0,1)
    }
    else{
        graphmin=0;
    }
    
    if(d.getHours()!=graphhour||d.getMinutes()!=graphmin){
        graphhour=d.getHours();
        box().appendTo(timebox).border(0).size(60,30).text(graphhour+':'+graphmin+'0');
    }
    */
    // message(sleepdata.move);
   if(sensorvalue[1]>50){
       aveheight++;
       sumheight+=Number(sensorvalue[0])
   }
   
   //monitorBox.text(monitorBox.text()+"aveheight : "+ aveheight + " sumheight : "+ sumheight + "sensorvalue[0] : "+ sensorvalue[0] +"/"+sensorvalue[1]+"\n");
   
    if(aveheight==120 ){
        sumheight=sumheight/40;
        if(sumheight>30){    
        box().appendTo(graph).size(10,sumheight/3).border(0).bottom(407).color('red');
        }
        else if(sumheight>20){    
        box().appendTo(graph).size(10,sumheight/3).border(0).bottom(407).color('orange');
        }
        else if(sumheight>10) {   
        box().appendTo(graph).size(10,sumheight/3).border(0).bottom(407).color('yellow');
        }
        else if(sumheight>5){ 
        box().appendTo(graph).size(10,sumheight/3).border(0).bottom(407).color('green');
        }
         else if(sumheight<=5){
             box().appendTo(graph).size(10,1).border(0).bottom(407).color('green');
        }
         var a={};
        a.hour=d.getHours()
        a.minutes=d.getMinutes();
        a.height = sumheight;
        alert(JSON.stringify(a));
        
        
        if(datastore().get(d.getFullYear()+sleepdata.month+d.getDate())){
        var b= datastore().get(d.getFullYear()+sleepdata.month+d.getDate());
        b.push(a);
        }
        else{
            var b= [];
            b.push(a);
        }
        datastore().put(d.getFullYear()+sleepdata.month+d.getDate(),b);
    }

    }, function (){
        alert("fail");
    });
}
function loadsleepdatanowday(){
    dateBox.text(loadmonth+'/'+loaddate+' ('+kday+')');
    var d=new Date();
    var month = d.getMonth()+1;
    if(datastore().get(d.getFullYear()+month+d.getDate())){
        for(var i =0;i<datastore().get(d.getFullYear()+month+d.getDate()).length;i++){
        var sumheight = datastore().get(d.getFullYear()+month+d.getDate())[i].height;
        //alert(sumheight);
            if(Number(sumheight)>30){    
                box().appendTo(graph).size(20,Number(sumheight)/3).border(0).bottom(407).color('red');
            }
            else if(Number(sumheight)>20){  
                box().appendTo(graph).size(20,Number(sumheight)/3).border(0).bottom(407).color('orange');
            }
            else if(Number(sumheight)>10) {   
                box().appendTo(graph).size(20,Number(sumheight)/3).border(0).bottom(407).color('yellow');
            }
            else if(Number(sumheight)>5){ 
                box().appendTo(graph).size(20,Number(sumheight)/3).border(0).bottom(407).color('green');
            }
             else if(Number(sumheight)<=5){
                 box().appendTo(graph).size(20,1).border(0).bottom(407).color('green');
            }
        }
    }
}
function findsleeptime(){
    sleepBox.clear();
    prev3day2.clear();
    sleeptimearr=[];
    box().appendTo(sleepBox).size(100,30).float('left').text('잠든 시간').border(0).padding(5);
box().appendTo(sleepBox).size(100,30).float('right').border(0);
    
    
    var d=new Date();
    
    for(var i=0;i<7;i++){
        d.setDate(d.getDate()-1);
        var month = d.getMonth()+1;
    var sleepdata = datastore().get(d.getFullYear()+month+d.getDate());
    var dat = new Date(d.getFullYear(), month-1, d.getDate(),23,59.59, 0);
    if(sleepdata){
        for(var k =0;k<sleepdata.length;k++){
            if(sleepdata[k].hour>=12){
            var dat2 = new Date(d.getFullYear(), month-1, d.getDate(),sleepdata[k].hour,  sleepdata[k].minutes, 0);
            if(dat > dat2){
                dat=dat2;
            }
            }
        }
    }
    sleeptimearr[i]= dat.getHours()+':'+dat.getMinutes();
    var bigsleeptime = box().appendTo(sleepBox).size(330,50).marginBottom(4);
    var sleepdate = box().appendTo(bigsleeptime).size(100,50).text(dat.getMonth()+1+"/"+dat.getDate()).padding(7).
    textSize(20);
    var sleeptime = box().appendTo(bigsleeptime).size(225,50).text(dat.getHours()+':'+dat.getMinutes()).padding(7).
    textSize(20);
    //alert(dat.getHours());
    }
    box().appendTo(prev3day2).size(150,33).text(sleeptimearr[0]);
box().appendTo(prev3day2).size(150,33).text(sleeptimearr[1]);
box().appendTo(prev3day2).size(150,33).text(sleeptimearr[2]);
var sumsleeptime=0;
for(var i =0 ;i<7;i++){
    var sleeptime1 = sleeptimearr[i].split(':');
    sumsleeptime =sumsleeptime + (Number(sleeptime1[0])*60)+Number(sleeptime1[1]);
}
sleepave.text(Math.round(sumsleeptime/420)+':'+sumsleeptime%60);
}

function findwaketime(){
    waketimearr=[];
    prev3day1.clear();
    wakeBox.clear();
    box().appendTo(wakeBox).size(100,30).float('left').text('일어난 시간').border(0).padding(5);
box().appendTo(wakeBox).size(100,30).float('right').border(0);
    
    
    var d=new Date();
    
    for(var i=0;i<7;i++){
        d.setDate(d.getDate()-1);
        var month = d.getMonth()+1;
    var sleepdata = datastore().get(d.getFullYear()+month+d.getDate());

    var dat = new Date(d.getFullYear(), month-1, d.getDate()+1,0,0, 0);
    if(sleepdata){
        for(var j=0;j<sleepdata.length;j++){
            if(sleepdata[j].hour<=12){
            var dat2 = new Date(d.getFullYear(), month-1, d.getDate()+1,sleepdata[j].hour,  sleepdata[j].minutes, 0);
            if(dat < dat2){
                dat=dat2;
            }
            }
        }
    }
     waketimearr[i]= dat.getHours()+':'+dat.getMinutes();
    var bigwaketime = box().appendTo(wakeBox).size(330,50).marginBottom(4);
    var wakedate = box().appendTo(bigwaketime).size(100,50).text(dat.getMonth()+1+"/"+dat.getDate()).padding(7).
    textSize(20);
    var waketime = box().appendTo(bigwaketime).size(225,50).text(dat.getHours()+':'+dat.getMinutes()).padding(7).
    textSize(20);
    }
    //alert(waketimearr);
    box().appendTo(prev3day1).size(150,33).text(waketimearr[0]);
box().appendTo(prev3day1).size(150,33).text(waketimearr[1]);
box().appendTo(prev3day1).size(150,33).text(waketimearr[2]);
var sumwaketime=0;
for(var i =0 ;i<7;i++){
    var waketime1 = ''; 
    waketime1 = waketimearr[i].split(':');
    sumwaketime =sumwaketime + (Number(waketime1[0])*60)+Number(waketime1[1]);
}
wakeave.text(Math.round(sumwaketime/60)+':'+sumwaketime%60);
}
    main1.fadeIn(1000);
   // monitorBox.show();
}
/*
for(var i=2018;i<2019;i++){
    for(var k = 1;i<13;i++){
        for(var m =1;m<32;m++){
            datastore(i+k+m,'');
        }
    }
}
*/
/*
datastore().put("20180125", )

{ "20180125" : [ {time :"10:00", height : "100"},
                {time :"10:10", height : "100"},
                ]
}
*/
