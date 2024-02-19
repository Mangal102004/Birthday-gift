var countdown = 3;
var countdownElement = document.getElementById('countdown');
var buttonElement = document.getElementById('button');
var loaderElement = document.getElementById('loader');
var messageElement = document.getElementById('message');
var birthdayMessageElement = document.getElementById('birthday-message');
var floatingImageElement = document.getElementById('floating-image');
var count = 6;

var countdownInterval = setInterval(function () {
    countdown--;
    countdownElement.textContent = countdown;
    if (countdown <= 0) {
        clearInterval(countdownInterval);
        loaderElement.style.display = 'none';
        countdownElement.style.display = 'none';
        buttonElement.style.display = 'block';
    }
}, 1000);

function handleButtonClick() {
    buttonElement.style.display = 'none';
    document.body.style.backgroundImage = "url('fabrice-nerfin-puHQJZd3MDg-unsplash.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Display initial message
    messageElement.classList.remove('hidden');
    messageElement.style.animationName = 'fadeAndMoveUp';

    // Vanish initial message after 2 seconds
    setTimeout(function () {
        messageElement.classList.add('hidden');

        // Display birthday message and floating image
        birthdayMessageElement.classList.remove('hidden');
        birthdayMessageElement.style.animationName = 'fadeAndMoveUp';
        floatingImageElement.classList.remove('hidden');
        floatingImageElement.style.animation = 'floatIn 1s ease-in-out forwards';

        // Vanish birthday message and floating image after 2 seconds
        setTimeout(function () {
            birthdayMessageElement.classList.add('hidden');
            floatingImageElement.style.animation = 'fadeOut 1s ease-out forwards';

            // Display new message after hiding birthday message and floating image
            setTimeout(function () {
                var newMessageElement = document.createElement('div');
                var messageText = "On this day, I wanted to take a moment to wish you the happiest and most memorable birthday ever! You are truly one of the sweetest souls I have ever had the pleasure of being a best friend to.Thank you for being by my side through thick and thin, for sharing in my joys and comforting me in my sorrows. Your friendship means the world to me, and I am endlessly grateful for your presence in my life !! May your day be filled with laughter and surrounded by friends and family who adore you as much as I do✨✨";
                var messageLength = messageText.length;
                newMessageElement.textContent = '';
                newMessageElement.style.color = 'white';
                newMessageElement.style.fontSize = '25px';
                newMessageElement.style.fontWeight = 'bold';
                newMessageElement.style.opacity = '0';
                newMessageElement.style.position = 'absolute';
                newMessageElement.style.left = '3%';
                newMessageElement.style.top = '40%';
                newMessageElement.style.transform = 'translate(-50%, -50%)';
                newMessageElement.style.whiteSpace = 'pre-wrap'; // Allow text to wrap
                newMessageElement.style.overflow = 'hidden';
                newMessageElement.style.animation = 'typewriter 5s steps(' + messageLength + ') 1s 1 normal both, fadeAndMoveUp 2s ease forwards';

                document.body.appendChild(newMessageElement);

                function typeWriter() {
                    if (newMessageElement.textContent.length < messageLength) {
                        newMessageElement.textContent += messageText.charAt(newMessageElement.textContent.length);
                        setTimeout(typeWriter, Math.floor(Math.random() * 50) + 50); // Randomize typing speed
                    }
                }

                typeWriter();

                // After displaying the new message and waiting for some time
                setTimeout(function () {
                    // Create and fade in images above the new message
                    createAndFadeInImages('above', 3);

                    // Create and fade in images below the new message
                    setTimeout(function () {
                        createAndFadeInImages1('below', 3);
                    }, 6000); // Time gap of 2 seconds between each image

                    setTimeout(function () {
                        // Vanish the new message after the typewriter animation is finished
                        newMessageElement.style.display = 'none';

                        // Vanish all six images
                        var imagesContainers = document.querySelectorAll('.images-container');
                        imagesContainers.forEach(function (container) {
                            container.style.display = 'none';
                        });
                        setTimeout(function () {
                          // Display new message "May your day be filled with laughter and surrounded by friends and family who adore you as much as I do."
                          var newMessage = document.createElement('div');
                          newMessage.textContent = "May your dreams take flight and aspirations be realized";
                          newMessage.classList.add('new-message');
                          newMessage.style.color = 'white'; // Set font color to white
                          newMessage.style.fontSize = '25px';
                          newMessage.style.fontWeight = 'bold';
                          newMessage.style.opacity = '0';
                          newMessage.style.left = '1%';
                          newMessage.style.top = '40%';
                          newMessage.style.fontFamily = window.getComputedStyle(birthdayMessageElement).fontFamily; // Get font family from computed style of birthdayMessageElement
                          

                          newMessage.style.animation = 'fadeAndMoveUp 2s ease forwards';
                      
                          document.body.appendChild(newMessage);
                      
                          // Display floating image with rounded corners
                          var floatingImage = document.createElement('img');
                          floatingImage.src = 'Screenshot 2024-02-19 205105.png'; // Replace with your image path
                          floatingImage.classList.add('floating-image');
                          floatingImage.style.opacity = '0';
                          floatingImage.style.animation = 'floatIn 1s ease-in-out forwards';
                          floatingImage.style.width = '200px'; // Set width to 200px
                          floatingImage.style.height = '200px'; // Set height to 200px
                          floatingImage.style.borderRadius = '50%'; // Set border radius for rounded corners
                      
                          document.body.appendChild(floatingImage);
                      
                          // Vanish new message and floating image after 10 seconds
                          setTimeout(function () {
                              newMessage.style.display = 'none';
                              floatingImage.style.display = 'none';
                              setTimeout(function () {
                                // Display final message
                                var finalMessage = document.createElement('div');
                                finalMessage.textContent = "Finally, Happy birthday once again and have a great year ahead 🥳🥳!!";
                                finalMessage.classList.add('final-message');
                                finalMessage.style.color = 'white'; // Set font color to white
                                finalMessage.style.fontFamily = window.getComputedStyle(birthdayMessageElement).fontFamily; // Get font family from computed style of birthdayMessageElement
                                finalMessage.style.opacity = '0';
                                finalMessage.style.fontSize = '25px';
                                finalMessage.style.fontWeight = 'bold';
                                finalMessage.style.opacity = '0';
                                finalMessage.style.animation = 'fadeAndMoveUp 2s ease forwards';
                            
                                // Position final message at the same coordinates as birthday-message
                                finalMessage.style.position = 'absolute';
                                finalMessage.style.left = birthdayMessageElement.style.left;
                                finalMessage.style.top = birthdayMessageElement.style.top;
                            
                                document.body.appendChild(finalMessage);
                            
                                // Display final floating image with rounded corners
                            
                            }, 1000); 
                          }, 8000);
                      
                      }, 1000); // Adjust timing as per your preference
                      
                    }, 43000); // Adjust timing as per your preference

                }, 3000); // Adjust timing as per your preference

            }, 1000);

        }, 3000);

    }, 2000);

}

function createAndFadeInImages(position, count) {
    var imagesContainer = document.createElement('div');
    imagesContainer.classList.add('images-container', position);

    for (var i = 1; i <= count; i++) {
        var imageElement = document.createElement('img');
        imageElement.src = 'img' + i + '.jpg'; // Replace with your image paths
        imageElement.classList.add('rounded-image');
        imagesContainer.appendChild(imageElement);
    }

    document.body.appendChild(imagesContainer);

    // Apply fade-in animation to images
    setTimeout(function () {
        imagesContainer.classList.add('fade-in');
    }, 100);
    // Adjust timing as per your preference
}

function createAndFadeInImages1(position, count) {
    var imagesContainer = document.createElement('div');
    imagesContainer.classList.add('images-container', position);

    for (var i = 4; i <= count + 3; i++) {
        var imageElement = document.createElement('img');
        imageElement.src = 'img' + i + '.jpg'; // Replace with your image paths
        imageElement.classList.add('rounded-image');
        imagesContainer.appendChild(imageElement);
    }

    document.body.appendChild(imagesContainer);

    // Apply fade-in animation to images
    setTimeout(function () {
        imagesContainer.classList.add('fade-in');
    }, 100);
}
