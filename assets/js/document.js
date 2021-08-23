var style = `
.title{
    text-align: center;
    margin: 0px;
}
.line{
    width: 100%;
    height: 1px;
    background-color: black;
    margin-top: 1px;
}
.header{
    display: flex;
    justify-content: space-between;
}
.menu{
    border: 0px;
    background-color: rgba(255, 255, 255, 0);
}

.appearance{
    border: 0px;
    background-color: rgba(255, 255, 255, 0);
}
.footer{
    text-align: center;
}
.box{
    border: 1px solid black;
    margin: auto;
    width: 90%;
    height: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px;
}
.ready{
    border: 0px;
    background-color: rgba(219, 219, 219, 0.836);
    border-radius: 5px;
    margin: auto;
    margin-bottom: 10px;
    width: 100%;
    height: fit-content;
}
.description{
    text-align: center;
}
.gameover{
    text-align: center;
}
.retry_button{
    border: 0px;
    background-color: rgba(219, 219, 219, 0.836);
    border-radius: 5px;
    margin: auto;
    margin-bottom: 10px;
    width: 100%;
    height: fit-content;
}`
document.getElementById("style_1").innerHTML = style