let track_btn = document.querySelector(".track__button");
let order_table = document.querySelector(".track_order_info")
let time = 0;

let orders = {
    12:{
        "position":[55.898620, 37.390652]
    },
    13:{
        "position":[55.755466, 37.623320]
    }
}

ymaps.ready(() => {
    const map = new ymaps.Map("map", {
        center: [0,0],
        zoom: 3
    });

    track_btn.addEventListener("click", function(){
        let track_number = document.querySelector("#track_number").value
        let zoom = map.getZoom()
        map.options.set('maxAnimationZoomDifference', Infinity);
        map.setZoom(3, {duration: 2000})
        if (Object.keys(orders).indexOf(track_number) != -1){
            if (zoom===17){time=2000}
            setTimeout(function(){
                map.setCenter(orders[track_number]["position"])
                map.setZoom(17, {duration: 2000})
                setTimeout(function(){
                    order_table.style.display = "block"
                    document.querySelector(".order_number").innerHTML = track_number
                    },2000)
            },time)
        }else{
            order_table.style.display = "none";
            let order_error = document.querySelector(".track_error");
            order_error.style.display = "block";
            setTimeout(function(){
                order_error.style.display = "none";
            },1000)
        }
    })
});

jQuery.get('/data.csv', function(df) {
    const res = d3.csvParse(df);
    var lines = df.split("\n"),
    output = [],
    i;
    for (i = 0; i < lines.length; i++)
    output.push("<tr><td>"
    + lines[i].slice(0,-1).split(",").join("</td><td>")
    + "</td></tr>");
    output = "<table>" + output.join("") + "</table>";
    var div = document.getElementById('table');

    div.innerHTML = output;
});