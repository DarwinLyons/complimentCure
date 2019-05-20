// Create an array of compliment options with type of relationship- with the relationships all being true or false

const complimentOptions = [ 
  //0
  {
  compliment: `, you light up my life.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//1
  {
  compliment: `, you're so fun to be around, I would wait in line at the airport with you.`, 
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//2
{
  compliment: `, when you pop into my head, I think: I'm so lucky you're in my life.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,   
},
//3
{
  compliment: `, you make life look easy.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true, 
},
//4
{
  compliment: `, you always speak at the exact right volume.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//5
{
  compliment: `, when I think about the apocolypse, I want you on my End of the World team.`,
  friend: true,
  relative: false,
  romanticPartner: false,
  potential: true,
},
//6
{
  compliment: `, the fact that you're in my family makes me feel like I'm about 100 degrees cooler by association.`,
  friend: false,
  relative: true,
  romanticPartner: false,
  potential: false,
},
//7
{
  compliment: `, you're the best!`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//8
{
  compliment: `, when I'm with you it's like time doesn't even exist because you're so fun. You broke the time/space continuum with your awesomeness!`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//9
{
  compliment: `, you make me laugh so much I giggle in public when I think about things you've said.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//10
{
  compliment: `, you've made my life so fun I don't have anything to talk to my therapist about anymore.`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//11
{
  compliment: `, you're a magical, intelligent mermaid.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//12
{
  compliment: `: (proper noun) Definition: a human being who is more awesome than all the other human beings.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//13
{
  compliment: `, you make doing taxes fun.`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//14
{
  compliment: `, I think about the things you say all the time. You're like my own personal podcast.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//15
{
  compliment: `, if you were a food you'd be cake. Because cake is the best.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//16
{
  compliment: `! You are the smartest person I know!`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//17
{
  compliment: `, I wish I could go back in time and introduce us as children so we'd have a lifetime of inside jokes.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//18 
{
  compliment: `, you make me so happy I literally forgot what sadness feels like`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//19
{
  compliment: `, I would hang out with you in the middle of summer next to a garbage dump, that's how much I like hanging out with you.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//20 
{
  compliment: `, you're so comforting to be around.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//21
{
  compliment: `, are you ever wrong? I seems like you're always right to me!`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//22
{
  compliment: `, you're like a rainbow and my birthday personified.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//23 
{
  compliment: `, when you speak you always say such smart things I feel like I'm watching a really interesting documentary.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//24 
{
  compliment: `, sometimes I think about how when we're old we'll still have so much fun together just sitting on porches and feeding ducks.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//25
{
  compliment: `, are you a superhero? Cause you should be and your power would be just being very likeable.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//26
{
  compliment: `, you're really good at everything you try.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//27
{
  compliment: `, you're like my personal hero.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//29
{
  compliment: `, your style is so cool I have contacted Vogue about you. I expect to hear back very soon.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//30
{
  compliment: `, whenever anything good happens, I want to tell you first.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//31
{
  compliment: `, if anything bad every happens I always know it will be OK in the end because you're in my life.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//32
{
  compliment: `, if you wanted to move to Mars, I'd move with you. Think about all the fun we'd have running around the craters and waving to Earth!`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: false,
},
//33
{
  compliment: `, when you come into a room I think, I'm so lucky I get to be friends with that person!`,
  friend: true,
  relative: false,
  romanticPartner: false,
  potential: false,
},
//34
{
  compliment: `, isn't it just so wonderful that we found each other?`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//35
{
  compliment: `, think about how much less fun life was before we met! You make life great.`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//36
{
  compliment: `, I could listen to you read the phone book. You are THAT interesting.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//37
{
  compliment: `, I should really put AAA before your name in my phone, because you're always the first person I want to text.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: false,
},
//38
{
  compliment: `, I think we'd have a lot of fun if we were in an action movie together. We'd be the best crime fighting duo.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//39
{
  compliment: `, who do you think will play us in the movie version of our lives? We're so intersting I just assume it will happen at some point.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: false,
},
//40
{
  compliment: `, I think you're the coolest.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
},
//41
{
  compliment: `, you make family gatherings fun.`,
  friend: false,
  relative: true,
  romanticPartner: false,
  potential: false,
},
//42
{
  compliment: `, you're like a shooting star in human form.`,
  friend: true,
  relative: false,
  romanticPartner: true,
  potential: true,
},
//43
{
  compliment: `, I love listening to you tell me about your day.`,
  friend: false,
  relative: false,
  romanticPartner: true,
  potential: false,
},
//44
{
  compliment: `, you're thoughtful and you're funny.`,
  friend: true,
  relative: true,
  romanticPartner: true,
  potential: true,
}

]

//document ready
$(function() {
  //bind click event with button with a class of button
  $(`.button`).on(`click`, function(event) {
    //prevent default behaviour of submit button
    event.preventDefault();

    // add a listener on the page to stop all animations when user scrolls- Shane Keulen helped me with this 
    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
      page.stop();
    });

    // Capturing the complimentee's name
    const complimenteeName = $(`input[type=text]`).val();

    //Capturing the complimentee's relationship
    const relationshipCapture = $(`input[name=relationship]:checked`).val();

    //checking if name input is a number
    function isNumeric(nameNumber) {
      return ($.isNumeric(complimenteeName));
    }

    //checking if the radio buttons are checked - I found this on stack overflow
    function atLeastOneRadio() {
      return ($(`input[type=radio]:checked`).size() > 0);
    }
    
    // creating a requirement for a correct name 
    if (complimenteeName === `` || complimenteeName === ` ` || complimenteeName === undefined || isNumeric() === true ) {
      // add this text to the class nameAlert and the animated classes
      $(`.nameAlert`).html(`<p>We need your complimentee's name</p>`).addClass(`alert animated bounceIn delay-2s`);
      //go into page, animate and then scroll to the ID nameScroll, offset gets the coordinates and .top goes to the top of the coordinates, then 2000 is the milisecond count of the animation. I found this answer on jsfiddle by kevinPHPkevin
      page.animate({
        scrollTop: $(`#nameScroll`).offset().top
      }, 2000);
      //if the relationship inputs are empty
    } else if (atLeastOneRadio() === false) {
      //add this alert to relationshipAlert the animated classes
      $(`.relationshipAlert`).html(`<p>We need to know your relationship!</p>`).addClass(`alert animated bounceIn delay-2s`);
      //and scroll to the id relationshipScroll
      page.animate({
        scrollTop: $(`#relationshipScroll`).offset().top
      }, 2000); 
    } else {
      
      //run function for random generator 
      runFilter(complimenteeName, relationshipCapture);

      // scroll to see the answer
      page.animate({ scrollTop: $(`#scrollBottom`).offset().top }, 2000, function () {
          // remove the listeners added for scroll above 
          page.off(`scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove`);
        });
      return false;
    }
    //on click
  })
  //document ready 
});

//create a variable for the page to capture for all browsers
const page = $("html, body");

//event listener to scrollButton
$(`#name`).keyup(function (event) {
  if (event.keyCode === 13) {
    $(`#scrollButton`).click();
  }
});

//scroll to relationship section if user hits enter in name input 
$(`#scrollButton`).click(function () {
  page.animate({
    scrollTop: $(`#relationshipScroll`).offset().top
  }, 2000); 
});

//Event listener to add new image to the radio button when selected
$(`input[name=relationship]`).on(`change`, function (event) {
  //create a variable that goes into the direct sibling of this and finds the class far inside that sibling
  const checkBox = $(this).next(`label`).find(`.far`);
  //make a variable to store the font awesome class in all the inputs
  const allChecks = $(`input[name=relationship]`).next(`label`).find(`.far`);
  
  //remove the checked class and re-add the circle class if someone navigates away from this radio button
  allChecks.removeClass(`fa-check-circle`).addClass(`fa-circle`);
  
  //add the checked class to the selected radio button
  checkBox.removeClass(`fa-circle`).addClass(`fa-check-circle`);
});

 
//Create a random index that will take the filtered results from the runFilter function
function randoIndex(optionsArray) {
  console.log(optionsArray)
  //Generating a random number between 0 and the final index position value 
  const index = Math.floor(Math.random() * optionsArray.length);
  console.log(index);
  //Returning our passed in array with a specific index value attached
  return optionsArray[index]
  };

// create a function that takes two perameters, that will be the name and relationship the user inputs       
const runFilter = (name, chosenRelationship) => {
  //new variable
  const filterCompliments = () => {
    //what is selected?
    const filtered = complimentOptions.filter((complimentOption) => {
      // if the relationship is selected, filter the compliments where that relationship is true and put them in an array
      if (chosenRelationship === `friend`) {
        return complimentOption.friend === true;
      } else if (chosenRelationship === `relative`) {
        return complimentOption.relative === true;
      } else if (chosenRelationship === `romanticPartner`) {
        return complimentOption.romanticPartner === true;
      } else if (chosenRelationship === `potential`) {
        return complimentOption.potential === true;
      }
    });
    return filtered;
  }

  

  // Generating a random index value for the appropriate compliment options array
  const optionsToDisplay = randoIndex(filterCompliments());
  console.log(optionsToDisplay);
  // Printing to the page, the name of the random compliment that is stored in our optionsToDisplay variable 
  $(`.results`).html(`<h3>${name}${optionsToDisplay.compliment}</h3>`);
  
  //add text above twitter button
  $(`.twitterText`).html(`<p>Share your compliment on twitter!</p>`);
  
  //saves tweet button tag- Shane Keulen helped me with this
  const tweetButton = $(`<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button hidden" data-size="large"
    data-text="${name}${optionsToDisplay.compliment}" 
    data-show-count="false" id="tweetShare">Tweet</a>`);
    //puts twitter button on page
  $(`.twitterButton`).html(tweetButton);
  //twitter widget from twitter
  twttr.widgets.load();

  //adding try again text
  $(`.tryAgain`).html(`<p>Not exactly what you want to say?</p>`);
  //changing the button text after reset
  $(`.button`).html(`Compliment again!`);
  //removing original instructions
  $(`.clickRemove`).remove();
  
}