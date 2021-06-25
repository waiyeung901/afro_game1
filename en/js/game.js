var score = 0;
var round = 0;
var questions = [{
        "id": 1,
        "question": "Did you use a condom for every sexual intercourse with clients in the past 3 months (including vaginal, oral, anal sex)?",
        "choices": [{
                "choiceText": "Yes",
                "score": 3
            },
            {
                "choiceText": "No",
                "score": 90
            }

        ]
    },
    {
        "id": 2,
        "question": "Have you ever received a HIV or Sexually Transmitted Infections (STIs) test?",
        "choices": [{
                "choiceText": "Never tested",
                "score": 10
            },
            {
                "choiceText": "Tested within the past 3 months",
                "score": 3
            },
            {
                "choiceText": "Tested within the past year",
                "score": 5
            },
            {
                "choiceText": "Tested more than a year ago",
                "score": 7
            }

        ]
    },
    {
        "id": 3,
        "question": "In the past 3 months, has it ever happened that the condom slipped off during sexual intercourse with clients?",
        "choices": [{
                "choiceText": "Yes",
                "score": 90
            },
            {
                "choiceText": "No",
                "score": 3
            }

        ]
    },
    {
        "id": 4,
        "question": "In the past 3 months, has it ever happened that someone secretly removed the condom during sexual intercourse?",
        "choices": [{
                "choiceText": "Yes",
                "score": 90
            },
            {
                "choiceText": "No",
                "score": 3
            }

        ]
    },
    {
        "id": 5,
        "question": "In the past 3 months, has it ever happened that someone forced you to have sexual intercourse without using a condom?",
        "choices": [{
                "choiceText": "Yes",
                "score": 90
            },
            {
                "choiceText": "No",
                "score": 3
            }

        ]
    },
    {
        "id": 6,
        "question": "How could you know someone is contracted with HIV/ STIs?",
        "choices": [{
                "choiceText": "Skin ulcer or rash",
                "score": 10
            },
            {
                "choiceText": "Bad breath",
                "score": 10
            },
            {
                "choiceText": "Having multiple sexual partners",
                "score": 10
            },
            {
                "choiceText": "Positive result",
                "score": 3
            },
            {
                "choiceText": "Negative result",
                "score": 10
            }

        ]
    },
    {
        "id": 7,
        "question": "In which of the following situations can HIV/ STIs be transmitted?",
        "choices": [{
                "choiceText": "Mosquito bites",
                "score": 10
            },
            {
                "choiceText": "Dining together",
                "score": 10
            },
            {
                "choiceText": "Using the same toilet",
                "score": 10
            },
            {
                "choiceText": "None of the above",
                "score": 3
            }

        ]
    },
    {
        "id": 8,
        "question": "Which of the following is the mode of transmission of HIV / STIs?",
        "choices": [{
                "choiceText": "Blood and blood products ",
                "score": 10
            },
            {
                "choiceText": "Mother-to-child",
                "score": 10
            },
            {
                "choiceText": "Unprotected sexual intercourse",
                "score": 10
            },
            {
                "choiceText": "All of the above",
                "score": 3
            }

        ]
    },
    {
        "id": 9,
        "question": "Which of the following can prevent STIs?",
        "choices": [{
                "choiceText": "Using a new, undamaged, and unexpired condom",
                "score": 3
            },
            {
                "choiceText": "Using two new, undamaged, and unexpired condoms at the same time",
                "score": 10
            },
            {
                "choiceText": "Vaginal douching after sexual intercourse",
                "score": 10
            },
            {
                "choiceText": "Using antibiotics before or after sexual intercourse",
                "score": 10
            }

        ]
    },
    {
        "id": 10,
        "question": "Which of the following situation(s) is with the risk of HIV/ STIs?",
        "choices": [{
                "choiceText": "Extracorporeal ejaculation",
                "score": 10
            },
            {
                "choiceText": "Sharing of needle",
                "score": 10
            },
            {
                "choiceText": "Oral sex without condom",
                "score": 10
            },
            {
                "choiceText": "All of the above",
                "score": 3
            }

        ]
    },
    {
        "id": 11,
        "question": "Which of the following lubricants cannot be used with a latex condom?",
        "choices": [{
                "choiceText": "Water-based",
                "score": 10
            },
            {
                "choiceText": "Silicone-based",
                "score": 10
            },
            {
                "choiceText": "Oil-based",
                "score": 3
            },
            {
                "choiceText": "All of the above",
                "score": 10
            }

        ]
    },
    {
        "id": 12,
        "question": "Which of the following can lead to STIs infection?",
        "choices": [{
                "choiceText": "Kissing a stranger ",
                "score": 10
            },
            {
                "choiceText": "Having an unprotected sexual intercourse or not using a condom properly",
                "score": 3
            },
            {
                "choiceText": "Sharing towels with others",
                "score": 10
            },
            {
                "choiceText": "All of the above",
                "score": 10
            }

        ]
    },
]

$(function(){
    $("#start_btn").click(function(){
        $("#start_screen").hide();
    })
    updateQuestion(round);

})

function updateQuestion(round){
    $("#choices_container").html("");
    var fillRound = round+1;
    if(round+1 <10){
        fillRound = "0"+fillRound;
    }
    $(".dot").removeClass("active");
    $("#progress").children().find(".dot").eq(round).addClass("active");
    $("#questionImage").attr("src","../src/assets/thumbnail-"+fillRound+".png");
    $("#questionText").html(questions[round].question);
    for(i=0;i<questions[round].choices.length;i++){
        var choiceNode = "<button class='choice' data-score='"+questions[round].choices[i].score+"'>"+questions[round].choices[i].choiceText+"</button>";
        $("#choices_container").append(choiceNode);
        

    }
    $(".choice").click(function(){

        score = score + parseInt($(this).attr("data-score"));
       
        if(round == 11){
            checkResult(score);
        }else{
            round++;
            updateQuestion(round);
        }

    })
}
function checkResult(score) {
    var risk;
    if (score <= 63) {
        risk = 1;
        $("#riskLevel").html("Low");
        $("#riskLevel").addClass("low");
        $("#resultText").html("<p>Your knowledge about sexual health is sufficient / The risk level of your sexual behaviours is low. Remember use a condom for every sexual intercourse. AFRO recommends you test for HIV / STIs regularly (around every 3 months). <a href='https://www.afro.org.hk/work.php?id=100&lang_id=2' target='_blank'>Details</a></p>");
    } else if (score <= 91) {
        risk = 2;
        $("#riskLevel").html("Medium");
        $("#riskLevel").addClass("mid");
        $("#resultText").html("<p>Your knowledge about sexual health is not completely accurate / The risk level of your sexual behaviours is medium. Therefore, you are advised to <a href='https://www.afrohealth.org.hk/en/what-is-sexually-transmitted-infections' target='_blank'>learn more</a> about it. AFRO recommends condom use for every sexual intercourse. If you have engaged in unprotected sexual intercourse, you should test for HIV / STIs as soon as possible. Meanwhile, in order to ensure your sexual health, in case you have multiple sexual partners (whether using a condom or not), you are strongly advised to have regular check up.</p><p>Female sex workers are welcome to come to AFRO’s drop-in centre to have free and anonymous HIV and Syphilis test. <a href='https://www.afro.org.hk/work.php?id=100&lang_id=2' target='_blank'>Details</a></p>");
    } else if (score >= 92) {
        risk = 3;
        $("#riskLevel").html("High");
        $("#riskLevel").addClass("high");
        $("#resultText").html("<p>Your knowledge about sexual health is insufficient / The risk level of your sexual behaviours is high. Thus, you are advised to <a href='https://www.afrohealth.org.hk/en/what-is-sexually-transmitted-infections' target='_blank'>learn more</a> about it. AFRO recommends condom use for every sexual intercourse. If you have engaged in unprotected sexual intercourse, you should test for HIV and STIs as soon as possible. Meanwhile, in order to ensure your sexual health, in case you have multiple sexual partners (whether using a condom or not), you are strongly advised to have regular check up.</p><p>Female sex workers are welcome to come to AFRO’s drop-in centre to have free and anonymous HIV and Syphilis test. <a href='https://www.afro.org.hk/work.php?id=100&lang_id=2' target='_blank'>Details</a></p>");
    }
    $("#resultImage").attr("src","../src/assets/result-"+risk+".png")
    $("#question").hide();
    $("#choices").hide();
    $("#progress").hide();
    $("#result").show();
    console.log(score);
}