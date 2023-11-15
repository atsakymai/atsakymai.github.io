
@media only screen and (max-width: 390px) {
    body{
        margin: 0;
        padding: 0;
        background: #efefef;
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
    }
    
    #bottomNavigation{
        display: grid;
        position: fixed;
        width: 100%;
        height: 65.17px;
        background: #fefefe;
        bottom: 0;
        grid-template-columns: repeat(9,46px);
        align-items: center;
    }
    
    #bottomNavigation #home{
        position: relative;
        color: white;
        background: #ec256e;
        display: block;
        height: 46px;
        width: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        border-radius: 100%;
        grid-column: 5;
        transition: 0.3s;
    }
    
    #bottomNavigation #book{
        position: absolute;
        color: white;
        background: transparent;
        color: #d4d5d9;
        display: block;
        height: 46px;
        width: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        border-radius: 100%;
        grid-column: 3;
        transition: 0.3s;
    }
    
    #bottomNavigation #learn{
        position: absolute;
        color: white;
        background: transparent;
        color: #d4d5d9;
        display: block;
        height: 46px;
        width: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        border-radius: 100%;
        grid-column: 7;
        transition: 0.3s;
    }
    
    #Slider{
        display: grid;
        position: fixed;
        width: 100%;
        height: 300px;
        background: rgba(0, 0, 0, 0);
        bottom: 6%;
        align-items: center;
        grid-template-columns: repeat(3, 150px);
        overflow-x: scroll;
        margin-left: 10px;
        margin-right: 25px;
        left: 3%;
    }
    
    #Slider #bg1{
        position: relative;
        height: 60%;
        width: 138px;
        background: var(--clr);
        border-radius: 10px;
        grid-column: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #Slider #bg2{
        position: relative;
        height: 60%;
        width: 138px;
        background: var(--clr);
        border-radius: 10px;
        grid-column: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #Slider #bg3{
        position: relative;
        height: 60%;
        width: 138px;
        background: var(--clr);
        border-radius: 10px;
        grid-column: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #Slider #bg4{
        position: relative;
        height: 60%;
        width: 138px;
        background: var(--clr);
        border-radius: 10px;
        grid-column: 4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #Slider #bg1 img{
        height: 90%;
        width: 90%;
        border-radius: 5px;
    }
    
    #Slider #bg2 img{
        height: 90%;
        width: 90%;
        border-radius: 5px;
    }
    
    #Slider #bg3 img{
        height: 90%;
        width: 90%;
        border-radius: 5px;
    }
    
    #Slider #bg4 img{
        height: 90%;
        width: 90%;
        border-radius: 5px;
    }
    
    #Slider #bg1 span,#Slider #bg2 span,#Slider #bg3 span,#Slider #bg4 span{
        text-align: center;
        width: 100%;
        height: 20px;
        display: block;
        background: transparent;
        color: #3498db;
        position: absolute;
        top: 105%;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    #PopularBooks{
        position: fixed;
        bottom: 35%;
        font-weight: bold;
        left: 5%;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    
    #SeeAll{
        height: 20px;
        width: 60px;
        display: block;
        position: fixed;
        color: #03bcf4;
        font-weight: bold;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        left: 83%;
        bottom: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #efefef;
    }

    #topSlider {
        display: grid;
        position: fixed;
        width: 94%;
        height: 265px;
        background: transparent;
        bottom: 45%;
        align-items: center;
        grid-template-columns: repeat(3, 210px);
        overflow-x: scroll;
        scrollbar-color: red transparent; 
        scrollbar-width: 50px;
        background: transparent;
        left: 4%;
    }

    #topSlider #bg1{
        position: relative;
        height: 60%;
        width: 180px;
        background: orange;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        bottom: 10%;
    }

    #topSlider #bg1 #bottomDiv{
        position: absolute;
        height: 20%;
        width: 100%;
        background: rebeccapurple;
        bottom: -35px;
        border-bottom-left-radius: 10px;
    }

    #topSlider #bg2{
        position: relative;
        height: 60%;
        width: 180px;
        background: #FF8243;
        margin-left: 20px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        bottom: 10%;
        grid-column: 2;
    }

    #topSlider #bg2 #bottomDiv{
        position: absolute;
        height: 20%;
        width: 100%;
        background: #BA9D98;
        bottom: -35px;
        border-bottom-left-radius: 10px;
    }

    #topSlider #bg3{
        position: relative;
        height: 60%;
        width: 180px;
        background: steelblue;
        margin-left: 20px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        bottom: 10%;
        grid-column: 3;
    }

    #topSlider #bg3 #bottomDiv{
        position: absolute;
        height: 20%;
        width: 100%;
        background: teal;
        bottom: -35px;
        border-bottom-left-radius: 10px;
    }

    #chooseGenre{
        position: fixed;
        height: 40px;
        width: 305px;
        display: block;
        background: #efefef; 
        top: 50%;
        left: 4%;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }

    #chooseGenre #div1,#chooseGenre #div2{
        height: 60%;
        width: 20%;
        background: #FF6F61;
        margin-left: 10px;
        border-radius: 5px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    #chooseGenre #background{
        position: absolute;
        height: 70%;
        width: 22%;
        background: rgb(253, 45, 45);
        margin-left: 7px;
        z-index: -1;
        border-radius: 5px;
        transition: 0.5s;
    }
}
