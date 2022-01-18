//assigning varriables
var calEvents = {}
var hourRendered = moment();
var currentDayEl = document.querySelector('#currentDay');

var current = function() {
    var currentDayEl = moment().format('dddd, MMMM Do')
    $('#currentDay').text(currentDayEl)
}

current()

// function to create calender 
var createCalender = function(today, calEvents) {
    var rowHour = moment(today).hour(9);
    var calender = $('div.container')
    calender.empty();  

  // rows for hours 
    for (var i = 1; i < 10; i++) {

        var row = $('<div>').addClass('row');

        if (rowHour > moment().format('HH')) {
            $(inputEvent).addClass('future')
        } else if (rowHour < moment().format('HH')) {
            $(inputEvent).addClass('past')
        } else if (rowHour === moment.format('HH')) {
            $(inputEvent).addClass('present')
        };

        calender.append(row);
        // add hour to column to row
        row.append($('<div>').addClass('col-1 hour').text(rowHour.format('h A')));
        // add event descreption column to row

        var inputEvent = $('<textarea>').addClass('col-10')
        row.append(inputEvent)
        row.append($('<button>').addClass('col-1 saveBtn').html("<i class='fas fa-save'></i>").attr('aria-label', 'Save')
        .attr('id', rowHour.format('hA')));

        // add additional hour before next row
        rowHour.add(1, 'hour');
        
        hourRendered = moment();
    };
};