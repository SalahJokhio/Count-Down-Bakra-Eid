var days_html = document.getElementById ('c_days')
var hours_html = document.getElementById ('c_hours')
var minutes_html = document.getElementById ('c_minutes')
var second_html = document.getElementById ('c_seconds')
var m_seconds_html = document.getElementById ('c_m_seconds')



var now = new Date ()
var baqraEid = new Date('6/17/2024')


var diff = baqraEid.getTime() - now.getTime()



var interval = setInterval(function () {

    diff = diff - 1000
    
var c_days = diff / 1000 / 60 / 60 / 24 / 30; 
var c_hours = diff / 1000 / 60 / 60 / 24; 
var c_minutes = diff / 1000 / 60 / 60; 
var c_seconds = diff / 1000 / 60; 
var c_m_seconds = diff / 1000; 

days_html.innerText = Math.floor (c_days) 
hours_html.innerText = Math.floor (c_hours)
minutes_html.innerText = Math.floor (c_minutes)
second_html.innerText = Math.floor (c_seconds)
m_seconds_html.innerText = Math.floor (c_m_seconds)
}, 20)