var questionsAmount = +prompt ("Введите количество вопросов в тесте", "");
var answersAmount = +prompt ("Введите количество вариантов ответов для каждого вопроса", "");

var pTest = {

    createWrapper  : function (){
        var wrapper = document.createElement('div');
        wrapper.className = 'mainWrapper';
        wrapper.innerText = 'Тест по программированию';
        var parent = document.body;
        parent.appendChild(wrapper);
    },

    createListQuestions: function() {
        var listQuestions = document.createElement('ul');
        listQuestions.className = 'list';
        var parent = document.querySelector('.mainWrapper');
        parent.appendChild(listQuestions);
    },

    fillListQuestions: function () {
        for (i=1; i<=questionsAmount; i++){
            var question = document.createElement('p');
            question.innerHTML = i+ '. ' +'Вопрос № '+ i;
            var parent = document.querySelector ('.list');
            parent.appendChild(question);

            for(j=1; j<=answersAmount; j++) {
                var answer = document.createElement('p');
                question.appendChild(answer);
                var label = document.createElement('label');
                answer.appendChild(label);
                var input = document.createElement('input');
                input.type = 'checkbox';
                label.appendChild(input);
                label.appendChild(document.createTextNode('Вариант ответа № '+j));
            }
        }
    },

    createButton: function () {
        var button = document.createElement("button");
        button.className = 'btnCheck';
        button.innerText = 'Проверить мои результаты';
        var parent = document.querySelector('.mainWrapper');
        parent.appendChild(button);
    }

};

pTest.createWrapper();
pTest.createListQuestions();
pTest.fillListQuestions();
pTest.createButton();


