
$(function () {
    var page = 0
    $('#next').on("click", function(){
    page += 1
    var url = "https://www.anapioficeandfire.com/api/characters?page="
        $.get(url+page)
            .done((result) => {
                for (var i = 0; i < result.length; i++) {
                    // var $person = $('<div>', {
                    //     'text': result[i].name,
                    // })
                    let person = result[i].name
                    let nextperson = result[i+1].name
                    $.get(result[i].allegiances[0])
                    .done((result2) => {
                        var $house = $('<div>',{
                            'id':  person,
                            'text': person + ": " + result2.name
                            })
                        var $nohouse = $('<div>',{
                            'id': person,
                            'text': person + ": No Available House" 
                        })
                        var $buttonChar = $('<button>',{
                            'text': 'Push'
                        })
                        
                        if(person != nextperson ){
                            if(result2.name != undefined && person != ""){
                                $($house).append($buttonChar)
                                $('#names').append($house)
                            }else if(result2.name == undefined && person != ""){
                                $('#names').append($nohouse)
                            }
                        }
                    })
                    // $('#names').append($person)
                }

            })
        }) 

})// end

