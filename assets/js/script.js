$(document).ready(function () {

    $(window).scroll(function () {
        $(".menu").css("background-color", "#FFFEFAFF")
        $(".logo , .menu_link").css("color", "#219829FF")
        $(".menu, .logo , .menu_link").css("transition", ".2s")
        $(".menu").css("box-shadow", "0px 4px 10px rgba(50,50,50,0.6)")


        $(".menu_link").each(function (i, item) {
            $(item).hover(function () {
                $(item).css("color", "#FFD400FF")
                $(item).css("transition", ".2s")
            },
                function () {
                    $(item).css("color", "#219829FF")
                    $(item).css("transition", ".2s")
                })
        })

    })

    let i = 3

    let x = setInterval(header_change_function, 5000)

    $(".header_btn1").click(function () {
        $(".header_img3 , .header_img2").fadeOut()
        $(".header_img1").fadeIn()
        i = 4
        clearInterval(x)
        x = setInterval(header_change_function, 5000)
        $(".header_btn1").css("background", "#FFFEFAFF")
        $(".header_btn2 , .header_btn3").css("background", "#FFFEFA62")
        $(".header_inner1").fadeIn()
        $(".header_inner2 , .header_inner3").fadeOut()
    })

    $(".header_btn2").click(function () {
        $(".header_img1 , .header_img3").fadeOut()
        $(".header_img2").fadeIn()
        i = 5
        clearInterval(x)
        x = setInterval(header_change_function, 5000)
        $(".header_btn2").css("background", "#FFFEFAFF")
        $(".header_btn1 , .header_btn3").css("background", "#FFFEFA62")
        $(".header_inner2").fadeIn()
        $(".header_inner1 , .header_inner3").fadeOut()
    })

    $(".header_btn3").click(function () {
        $(".header_img2 , .header_img1").fadeOut()
        $(".header_img3").fadeIn()
        i = 6
        clearInterval(x)
        x = setInterval(header_change_function, 5000)
        $(".header_btn3").css("background", "#FFFEFAFF")
        $(".header_btn1 , .header_btn2").css("background", "#FFFEFA62")
        $(".header_inner3").fadeIn()
        $(".header_inner1 , .header_inner2").fadeOut()
    })

    function header_change_function() {
        if (Math.abs(i) % 3 == 1) {
            $(".header_img1 , .header_img3").fadeOut(1000)
            $(".header_img2").fadeIn(1000)
            $(".header_btn2").css("background", "#FFFEFAFF")
            $(".header_btn1 , .header_btn3").css("background", "#FFFEFA62")
            $(".header_inner2").fadeIn(1000)
            $(".header_inner1 , .header_inner3").fadeOut(1000)
            i++
        } else if (Math.abs(i) % 3 == 2) {
            $(".header_img2 , .header_img1").fadeOut(1000)
            $(".header_img3").fadeIn(1000)
            $(".header_btn3").css("background", "#FFFEFAFF")
            $(".header_btn1 , .header_btn2").css("background", "#FFFEFA62")
            $(".header_inner3").fadeIn(1000)
            $(".header_inner1 , .header_inner2").fadeOut(1000)
            i++
        } else if (Math.abs(i) % 3 == 0) {
            $(".header_img3 , .header_img2").fadeOut(1000)
            $(".header_img1").fadeIn(1000)
            $(".header_btn1").css("background", "#FFFEFAFF")
            $(".header_btn2 , .header_btn3").css("background", "#FFFEFA62")
            $(".header_inner1").fadeIn(1000)
            $(".header_inner2 , .header_inner3").fadeOut(1000)
            i++
        }

    }

    $(".searchbar_toggle").click(function () {
        $(".searchbar_input").animate({ width: "toggle" }, 500)
    })

    $(".form_btn").hover(function () {
        $(".form_btn_hover").animate({ width: "100%", padding: "10px 10px" }, 500)
    }, function () {
        $(".form_btn_hover").animate({ width: "0%", padding: "10px 0" }, 500)
    })

    $(".form_btn , .form_btn_hover").click(function () {
        if ($(".form_input").val() == "" || $(".form_area").val() == "") {
            $(".form_alert_para").text("Please add your dates correctly")
            $(".form_alert").fadeIn(150)
            // alert("pepopepe")
        } else {
            $(".form_alert_para").text("Thank you for informing us.")
            $(".form_alert").fadeIn(150)
        }
    })

    let input_bool = false

    $(".footer_pseudo_input").click(function () {
        if (input_bool == false) {
            $(".pseudo_placeholder").animate({
                top: '-20px',
                left: '0px',
                fontSize: '12px',
            }, 500)
            $(".footer_input").fadeIn()
            $(".footer_input_cross").fadeIn()
            input_bool = true
        }
    })

    $(".footer_input_btn").click(function () {
        if (input_bool == true) {
            $(".pseudo_placeholder").animate({
                top: '20px',
                left: '20px',
                fontSize: '16px',
            }, 500)
            $(".pseudo_placeholder").text($(".footer_input").val())
            $(".footer_input").fadeOut()
            input_bool = false
        }
    })

    $(".footer_input_cross").click(function () {
        if (input_bool == true) {
            $(".pseudo_placeholder").animate({
                top: '20px',
                left: '20px',
                fontSize: '16px',
            }, 500)
            $(".footer_input").fadeOut()
            $(".footer_input_cross").fadeOut()
            input_bool = false
        }
    })


    $(".footer_input_btn").click(function () {
        if ($(".footer_input").val() == "") {
            $(".form_alert_para").text("Please add your dates correctly")
            $(".form_alert").fadeIn(150)
        } else {
            $(".form_alert_para").text("Thank you for informing us.")
            $(".form_alert").fadeIn(150)
        }
    })

    $(".form_alert_crest").click(function () {
        $(".form_alert").fadeOut(150)
    })

})


//
// let lang = document.querySelector(".lang");
// let lang1 = document.querySelector(".lang1");
// lang.addEventListener("mouseover", () => {
//     lang1.style.width = "auto";
//     lang1.style.opacity = "1";
// })
// lang.addEventListener("mouseleave", () => {
//     lang1.style.width = "0";
//     lang1.style.opacity = "0";
// })

// calc

let paperTotal = 0;
let plasticTotal = 0;
let glassTotal = 0;
let foodTotal = 0;
let total = document.querySelector(".total");

window.addEventListener('load', () => {
    total.innerHTML = `Ընդհամենը: 0 (դրամ)`;
})

//calculator function events

function aboutInputs(allInputs, firstInput, secondInput, button, value) {

    let inputValue = 0;
    let inpValue = 0;

    button.addEventListener("click", () => {
        if (firstInput.value > 0) {
            secondInput.value = value * firstInput.value;
            firstInput.type = "text";
            secondInput.type = "text";

            firstInput.value += "0 (կգ)";
            secondInput.value += "0 (դրամ)";

            if (secondInput.classList.contains("paperinp")) {
                paperTotal = inpValue;
            }
            if (secondInput.classList.contains("plastInp")) {
                plasticTotal = inpValue;
            }
            if (secondInput.classList.contains("glassinp")) {
                glassTotal = inpValue;
            }
            if (secondInput.classList.contains("foodInp")) {
                foodTotal = inpValue;
            }
            total.innerHTML = `Ընդհամենը: ${paperTotal + plasticTotal + glassTotal + foodTotal} (դրամ)`;
        }
    })

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('click', () => {
            firstInput.type = "number";
            secondInput.type = "number";
            if (firstInput.type === "text" && secondInput.type === "text") {
                firstInput.type = "number";
                secondInput.type = "number";
                firstInput.value = inputValue;
                secondInput.value = inpValue;
            }
        })
        allInputs[i].addEventListener('input', () => {
            inputValue = firstInput.value;
            inpValue = firstInput.value * value;
        })
    }
}

///////////// end function calculator


////calculator elements functions and events 

function paperEvents(adminPaperValue) {
    let inputs = document.querySelectorAll(".papers");
    let input = document.querySelector(".paperinput");
    let inp = document.querySelector(".paperinp");
    let paper = document.querySelector(".value-paper");
    let btn = document.querySelector(".btn");
    paper.innerHTML = `Թուղթ ${adminPaperValue} դրամ/կգ`;

    aboutInputs(inputs, input, inp, btn, adminPaperValue);
}
paperEvents(100);

function plasticEvents(adminPlasticValue) {
    let inputs = document.querySelectorAll(".plastin");
    let plastInput = document.querySelector(".plastInput");
    let plastInp = document.querySelector(".plastInp");
    let btn = document.querySelector(".btn-plastic");
    let plastic = document.querySelector(".value-plastmas");
    plastic.innerHTML = `Պլաստիկ ${adminPlasticValue} դրամ/կգ`;
    aboutInputs(inputs, plastInput, plastInp, btn, adminPlasticValue);
}
plasticEvents(50)

function glassEvents(adminGlassValue) {
    let inputs = document.querySelectorAll(".glasses");
    let glassInput = document.querySelector(".glassinput");
    let glassInp = document.querySelector(".glassinp");
    let btn = document.querySelector(".btn-glass");
    let glass = document.querySelector(".value-glass");
    glass.innerHTML = `Ապակի ${adminGlassValue} դրամ/կգ`;
    aboutInputs(inputs, glassInput, glassInp, btn, adminGlassValue);
}
glassEvents(30)

function foodEvents(adminFoodValue) {
    let inputs = document.querySelectorAll(".foods");
    let foodInput = document.querySelector(".foodInput");
    let foodInp = document.querySelector(".foodInp");
    let btn = document.querySelector(".btn-food");
    let food = document.querySelector(".value-food");
    food.innerHTML = `Սնունդ ${adminFoodValue} դրամ/կգ`;
    aboutInputs(inputs, foodInput, foodInp, btn, adminFoodValue);
}
foodEvents(200)

////calculator elements functions and events  end //////////////////


/////////////// total value

total.innerHTML = `Ընդամենը: 0 դրամ`;