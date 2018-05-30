'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChartLikes);

function reformatData(jsonData){
    var temp= jsonData.Like_statistics; // GRAFICAAAAA CHANGEEEEEEEEEEE
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;

    for (i=0; i < temp.length; ++i){
        row= temp[i]
        var dataElement = [];
        dataElement.push(row.dateStamp);// GRAFICAAAAA CHANGEEEEEEEEEEE
        dataElement.push(row.likes);// GRAFICAAAAA CHANGEEEEEEEEEEE
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChartLikes() {
    var jsonData = $.ajax({
        url: "http://localhost:5000/Dashboard/likes", // GRAFICAAAAA CHANGEEEEEEEEEEE
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', 'Likes');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Likes Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Likes'
        },
        colors:['teal']

    };

    var chart = new google.visualization.ColumnChart(document.getElementById('likes_div'));

    chart.draw(data, options);

}


google.charts.load('current', {packages: ['corechart', 'bar']});



google.charts.setOnLoadCallback(drawChartDislikes);

function reformatDataDislikes(jsonData){
    var temp= jsonData.Dislike_statistics; // GRAFICAAAAA CHANGEEEEEEEEEEE
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        var dataElement = [];
        dataElement.push(new Date(row.dateStamp).toString());// GRAFICAAAAA CHANGEEEEEEEEEEE
        dataElement.push(row.dislikes);// GRAFICAAAAA CHANGEEEEEEEEEEE

        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChartDislikes() {
    var jsonData = $.ajax({
        url: "http://localhost:5000/Dashboard/dislikes", // GRAFICAAAAA CHANGEEEEEEEEEEE
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', 'Dislikes');
    data.addRows(reformatDataDislikes(JSON.parse(jsonData))); ///////CAMMBIAAAAAAAA

    var options = {
        title: 'Dislikes Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Dislikes'
        },
        colors:['gold']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('dislikes_div'));

    chart.draw(data, options);

}


google.charts.load('current', {packages: ['corechart', 'bar']});







google.charts.setOnLoadCallback(drawChartMessages);

function reformatDataMessages(jsonData){
    var temp= jsonData.Message_statistics; // GRAFICAAAAA CHANGEEEEEEEEEEE
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        var dataElement = [];
        dataElement.push(row.postDay);// GRAFICAAAAA CHANGEEEEEEEEEEE
        dataElement.push(row.messages);// GRAFICAAAAA CHANGEEEEEEEEEEE

        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChartMessages() {
    var jsonData = $.ajax({
        url: "http://localhost:5000/Dashboard/messagesStatistics", // GRAFICAAAAA CHANGEEEEEEEEEEE
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', 'Messages');
    data.addRows(reformatDataMessages(JSON.parse(jsonData))); ///////CAMMBIAAAAAAAA

    var options = {
        title: 'Messages Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Messages'
        },
        colors:['gold'],
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('messages_div'));

    chart.draw(data, options);

}


google.charts.load('current', {packages: ['corechart', 'bar']});



google.charts.setOnLoadCallback(drawChartReplies);

function reformatDataReplies(jsonData){
    var temp= jsonData.Reply_statistics; // GRAFICAAAAA CHANGEEEEEEEEEEE
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        var dataElement = [];
        dataElement.push(row.postDay);// GRAFICAAAAA CHANGEEEEEEEEEEE
        dataElement.push(row.replies);// GRAFICAAAAA CHANGEEEEEEEEEEE

        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChartReplies() {
    var jsonData = $.ajax({
        url: "http://localhost:5000/Dashboard/repliesStatistics", // GRAFICAAAAA CHANGEEEEEEEEEEE
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Days');
    data.addColumn('number', 'Replies');
    data.addRows(reformatDataReplies(JSON.parse(jsonData))); ///////CAMMBIAAAAAAAA

    var options = {
        title: 'Replies Per Day',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Days',
            minValue: 0
        },
        vAxis: {
            title: 'Replies'
        },
        colors:['teal']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('replies_div'));

    chart.draw(data, options);

}


google.charts.load('current', {packages: ['corechart', 'bar']});


google.charts.setOnLoadCallback(drawChartHash);

function reformatDataHash(jsonData){
    var temp= jsonData.Trending; // GRAFICAAAAA CHANGEEEEEEEEEEE
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        var dataElement = [];
        dataElement.push(row.hashString);// GRAFICAAAAA CHANGEEEEEEEEEEE
        dataElement.push(row.quantity);// GRAFICAAAAA CHANGEEEEEEEEEEE
        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChartHash() {
    var jsonData = $.ajax({
        url: "http://localhost:5000/Dashboard/trendingHashtags", // GRAFICAAAAA CHANGEEEEEEEEEEE
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Hashtag');
    data.addColumn('number', 'Quantity');
    data.addRows(reformatDataHash(JSON.parse(jsonData))); ///////CAMMBIAAAAAAAA

    var options = {
        title: 'Top Ten Trending Hashtags',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Hashtags',
            minValue: 0
        },
        vAxis: {
            title: 'Times used'
        },
        colors:['teal']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('trending_div'));

    chart.draw(data, options);

}


google.charts.load('current', {packages: ['corechart', 'bar']});

google.charts.setOnLoadCallback(drawCharttop);

function reformatDatatop(jsonData){
    var temp= jsonData.Top_Users; // GRAFICAAAAA CHANGEEEEEEEEEEE
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        var dataElement = [];
        dataElement.push(row.userName);// GRAFICAAAAA CHANGEEEEEEEEEEE
        dataElement.push(row.numberOfActivities);// GRAFICAAAAA CHANGEEEEEEEEEEE

        result.push(dataElement);
    }
    console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawCharttop() {
    var jsonData = $.ajax({
        url: "http://localhost:5000/Dashboard/topUsers", // GRAFICAAAAA CHANGEEEEEEEEEEE
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Username');
    data.addColumn('number', 'Activity');
    data.addRows(reformatDatatop(JSON.parse(jsonData))); ///////CAMMBIAAAAAAAA

    var options = {
        title: 'Most Active Users Today',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Users',
            minValue: 0
        },
        vAxis: {
            title: 'Activity'
        },
        colors:['gold']
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('topusers_div'));

    chart.draw(data, options);

}


google.charts.load('current', {packages: ['corechart', 'bar']});
}]);