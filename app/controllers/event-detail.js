// TODO:
// Actions:
// -- Share

$.args = arguments[0] || {};
var content = $.args.content;
var standardWinView = $.args.standardWinView;

var eventDate = moment(content.startDate).format('MMM Do YYYY');
var eventStartDate = moment(content.startDate).format('hh:mma');
var eventEndDate = moment(content.endDate).format('hh:mma');

$.eventDate.text = eventDate;
$.eventTime.text = 'From ' + eventStartDate + ' to ' + eventEndDate;
$.eventTitle.text = content.title;
$.textShortened.load(Alloy.Globals.stripHtml(content.description));

Alloy.Globals.navcontroller.open(standardWinView);

$.addToCalendar.addEventListener('click', addToCalendar);

function createEvent() {
    if (Alloy.Globals.isAndroid) {
        var CALENDAR_TO_USE = 3;
        var defCalendar = Ti.Android.Calendar.getCalendarById(CALENDAR_TO_USE);
    } else {
        var defCalendar = Ti.Calendar.defaultCalendar;
    }
    var startDate = new Date(moment(content.startDate).format('2014/MM/D'));
    var endDate = new Date(moment(content.endDate).format('2014/MM/D'));
    console.log(content.title);
    console.log(Alloy.Globals.stripHtml(content.description));
    var event1 = defCalendar.createEvent({
                    title: content.title,
                    notes: Alloy.Globals.stripHtml(content.description),
                    begin: startDate,
                    end: endDate,
                    availability: Ti.Calendar.AVAILABILITY_FREE,
                    allDay: false,
                });
    event1.save(Ti.Calendar.SPAN_THISEVENT);
    alert(content.title + ' event saved in your calendar');
}

function addToCalendar() {
    if (Alloy.Globals.isAndroid) {
        // TODO: fix for android
        //createEvent();
    } else if (Alloy.Globals.isiOS) {
        if (Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) {
            createEvent();
        } else {
            Ti.Calendar.requestEventsAuthorization(function(e){
                if (e.success) {
                    createEvent();
                } else {
                    alert('Access to calendar is not allowed');
                }
            });
        }
    }
}