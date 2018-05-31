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
        dataElement = [];
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
    data.addColumn('string', 'Parts');
    data.addColumn('number', 'Stock');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Stock Parts by Id/name',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Part'
        }
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
        dataElement = [];
        dataElement.push(row.dateStamp);// GRAFICAAAAA CHANGEEEEEEEEEEE
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
    data.addColumn('string', 'Parts');
    data.addColumn('number', 'Stock');
    data.addRows(reformatDataDislikes(JSON.parse(jsonData))); ///////CAMMBIAAAAAAAA

    var options = {
        title: 'Stock Parts by Id/name',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Part'
        }
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
        dataElement = [];
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
    data.addColumn('string', 'Parts');
    data.addColumn('number', 'Stock');
    data.addRows(reformatDataMessages(JSON.parse(jsonData))); ///////CAMMBIAAAAAAAA

    var options = {
        title: 'Stock Parts by Id/name',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Part'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('messages_div'));

    chart.draw(data, options);

}


google.charts.load('current', {packages: ['corechart', 'bar']});



