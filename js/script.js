    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#mainNavbar').addClass('scrolled');
        } else {
            $('#mainNavbar').removeClass('scrolled');
        }
    });

    window.onscroll = function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };


window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

function openChat() {
    var chatWindow = document.getElementById('chatWindow');
    if (chatWindow.style.display === 'block') {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'block';
    }
}

function sendMessage() {
    var userInput = document.getElementById('userInput');
    var chatBody = document.getElementById('chatBody');

    if (userInput.value.trim() !== '') {
        var userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerText = userInput.value;
        chatBody.appendChild(userMessage);

        var botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerText = 'Gracias por tu mensaje. Te responderemos pronto.';
        chatBody.appendChild(botMessage);

        userInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function toggleDescription(element) {
    var card = element.closest('.service-card');
    var description = card.querySelector('.service-description');

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';  
        element.innerText = '−';  
    } else {
        description.style.display = 'none';  
        element.innerText = '+'; 
    }
}

        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#mainNavbar').addClass('scrolled');
            } else {
                $('#mainNavbar').removeClass('scrolled');
            }
        });
    
	    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#mainNavbar').addClass('scrolled');
            } else {
                $('#mainNavbar').removeClass('scrolled');
            }
        });

        function openChat() {
            var chatWindow = document.getElementById('chatWindow');
            if (chatWindow.style.display === 'block') {
                chatWindow.style.display = 'none';
            } else {
                chatWindow.style.display = 'block';
            }
        }

        function sendMessage() {
            var userInput = document.getElementById('userInput');
            var chatBody = document.getElementById('chatBody');
            
            if (userInput.value.trim() !== '') {
                var userMessage = document.createElement('div');
                userMessage.className = 'message user-message';
                userMessage.innerText = userInput.value;
                chatBody.appendChild(userMessage);

                var botMessage = document.createElement('div');
                botMessage.className = 'message bot-message';
                botMessage.innerText = 'Gracias por tu mensaje. Te responderemos pronto.';
                chatBody.appendChild(botMessage);

                userInput.value = '';
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        }
$(document).ready(function(){
    $("#teamCarousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: false,
        smartSpeed: 800,
        margin: 20,
        center: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});