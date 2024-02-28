


    function getGreetingMessage() {
        var currentTime = new Date();
        var currentHour = currentTime.getHours();
    
        var greetingMessage;
    
        if (currentHour >= 5 && currentHour < 12) {
            greetingMessage = "Good morning! It's time to start your day.";
        } else if (currentHour >= 12 && currentHour < 17) {
            greetingMessage = "Good afternoon! Hope you're having a productive day.";
        } else {
            greetingMessage = "Good evening! Time to unwind and relax.";
        }
    
        return greetingMessage;
    }
    
    function displayGreeting() {
        var message = getGreetingMessage();
        var currentTime = new Date();
        alert(`Current time is ${currentTime.toLocaleTimeString()}\n${message}`);
    }

    
    
    