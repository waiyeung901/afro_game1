var score = 0;
var round = 0;
var questions = [
    {
        "id":1,
        "question":"最近三個月是否每一次性行為都有使用安全套(包括口交、陰道性交、肛交)？",
        "choices":[
            {
                "choiceText":"是",
                "score":3
            },
            {
                "choiceText":"否",
                "score":90
            }

        ]
    },
    {
        "id":2,
        "question":"你是否曾經接受過任何愛滋病/性病病毒檢查？",
        "choices":[
            {
                "choiceText":"不曾接受過",
                "score":10
            },
            {
                "choiceText":"三個月內接受過",
                "score":3
            },
            {
                "choiceText":"一年內接受過",
                "score":5
            },
            {
                "choiceText":"超過一年前接受過",
                "score":7
            }

        ]
    },
    {
        "id":3,
        "question":"最近三個月在性行為時有沒有出現安全套脫落的情況？",
        "choices":[
            {
                "choiceText":"有",
                "score":90
            },
            {
                "choiceText":"沒有",
                "score":3
            }

        ]
    },
    {
        "id":4,
        "question":"最近三個月在性行為時有沒有出現被人偷偷除下安全套的情況？",
        "choices":[
            {
                "choiceText":"有",
                "score":90
            },
            {
                "choiceText":"沒有",
                "score":3
            }

        ]
    },
    {
        "id":5,
        "question":"最近三個月有沒有被人強迫進行不安全性行為？",
        "choices":[
            {
                "choiceText":"有",
                "score":90
            },
            {
                "choiceText":"沒有",
                "score":3
            }

        ]
    },
    {
        "id":6,
        "question":"你認為如何得知對方感染愛滋病/性病病毒？",
        "choices":[
            {
                "choiceText":"皮膚有潰爛或紅疹",
                "score":10
            },
            {
                "choiceText":"口臭",
                "score":10
            },
            {
                "choiceText":"擁有多個性伴侶",
                "score":10
            },
            {
                "choiceText":"空窗期後檢測結果為陽性",
                "score":3
            },
            {
                "choiceText":"空窗期後檢測結果為陰性",
                "score":10
            }

        ]
    },
    {
        "id":7,
        "question":"以下哪個可以傳播愛滋病/性病病毒？",
        "choices":[
            {
                "choiceText":"蚊叮蟲咬",
                "score":10
            },
            {
                "choiceText":"共同進餐",
                "score":10
            },
            {
                "choiceText":"共用廁所",
                "score":10
            },
            {
                "choiceText":"以上皆否",
                "score":3
            }

        ]
    },
    {
        "id":8,
        "question":"以下哪個是愛滋病/性病病毒的正確傳播途徑？",
        "choices":[
            {
                "choiceText":"血液接觸",
                "score":10
            },
            {
                "choiceText":"母嬰傳播",
                "score":10
            },
            {
                "choiceText":"性接觸",
                "score":10
            },
            {
                "choiceText":"以上皆是",
                "score":3
            }

        ]
    },
    {
        "id":9,
        "question":"以下哪個方法能有效預防愛滋病/性病？",
        "choices":[
            {
                "choiceText":"性交時使用一個未過期有品質保證的安全套",
                "score":3
            },
            {
                "choiceText":"性交時同時使用兩個未過期有品質保證的安全套",
                "score":10
            },
            {
                "choiceText":"性交後進行陰道灌洗",
                "score":10
            },
            {
                "choiceText":"性交前或後服食抗生素",
                "score":10
            }

        ]
    },
    {
        "id":10,
        "question":"以下哪個方法會存有感染愛滋病/性病病毒風險？",
        "choices":[
            {
                "choiceText":"體外射精",
                "score":10
            },
            {
                "choiceText":"共用針筒",
                "score":10
            },
            {
                "choiceText":"無套口交",
                "score":10
            },
            {
                "choiceText":"以上皆是",
                "score":3
            }

        ]
    },
    {
        "id":11,
        "question":"以下哪一項潤滑劑<span style=color:red;>不可以</span>與乳膠製安全套一起使用？",
        "choices":[
            {
                "choiceText":"水性",
                "score":10
            },
            {
                "choiceText":"矽性",
                "score":10
            },
            {
                "choiceText":"油性",
                "score":3
            },
            {
                "choiceText":"以上皆是",
                "score":10
            }

        ]
    },
    {
        "id":12,
        "question":"甚麼情況下需要進行性病測試？",
        "choices":[
            {
                "choiceText":"曾與陌生人接吻",
                "score":10
            },
            {
                "choiceText":"曾進行不安全性行為或沒有正確使用安全套",
                "score":3
            },
            {
                "choiceText":"曾經與人共用毛巾",
                "score":10
            },
            {
                "choiceText":"以上皆是",
                "score":10
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
    $("#questionImage").attr("src","src/assets/thumbnail-"+fillRound+".png");
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
function checkResult(score){
    var risk;
    if(score<=63){
        risk = 1;
        $("#riskLevel").html("低");
        $("#riskLevel").addClass("low");
        $("#resultText").html("<p>您對<a href ='https://www.afrohealth.org.hk/hiv/aids-trivia' target='_blank'>性健康問題</a>有深入了解 / 性行為風險較低。記得每次性行為都使用安全套，而不論您在性行為時有沒有使用安全套，青鳥都建議定期進行性病 / 愛滋病快速測試 (一般是每三個月檢查一次)。<a href='https://www.afro.org.hk/work.php?id=100' target='_blank'>了解更多</a></p>");
    }else if(score<=91){
        risk = 2;
        $("#riskLevel").html("中");
        $("#riskLevel").addClass("mid");
        $("#resultText").html("<p>您對性健康問題略知一二 / 性行為習慣仍存在風險，了解更多可<a href='https://www.afrohealth.org.hk/hiv/aids-trivia' target='_blank'>按此</a>。青鳥建議每次性行為都應使用安全套，如曾發生過不安全性行為，應儘快安排進行性病 / 愛滋病快速測試。如你有多位性伴侶，不論有沒有使用安全套，亦應每三個月進行定期檢查，以確保健康。</p><p>如你是女性性工作者，也可預約到青鳥到訪中心進行愛滋病 / 梅毒病毒測試，費用全免亦不需要真名登記，<a href='https://www.afro.org.hk/work.php?id=100' target='_blank'>詳情按此</a>。</p>");
    }else if(score>=92){
        risk = 3;
        $("#riskLevel").html("高");
        $("#riskLevel").addClass("high");
        $("#resultText").html("<p>您對性健康知識不足 / 性行為風險極高，需要<a href='https://www.afrohealth.org.hk/hiv/aids-trivia' target='_blank'>多多了解</a>。青鳥建議每次性行為都應使用安全套，如曾發生過不安全性行為，應儘快安排進行性病 / 愛滋病快速測試。如你有多位性伴侶，不論有沒有使用安全套，亦應每三個月進行定期檢查，以確保健康。</p><p>如你是女性性工作者，也可預約到青鳥到訪中心進行愛滋病 / 梅毒病毒測試，費用全免亦不需要真名登記，<a href='https://www.afro.org.hk/work.php?id=100' target='_blank'>詳情按此</a>。</p>");
    }
    $("#resultImage").attr("src","src/assets/result-"+risk+".png")
    $("#question").hide();
    $("#choices").hide();
    $("#progress").hide();
    $("#result").show();
    console.log(score);
}