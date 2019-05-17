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
  compliment: `, you make me laugh so much I giggle in public when I thin about things you've said.`,
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
}
]

//document ready
$(function() {

  function randoIndex(optionsArray) {
    //Generating a random number between 0 and the final index position value 
    const index = Math.floor(Math.random() * optionsArray.length);
    //Returning our passed in array with a specific index value attached
    return optionsArray[index]
  };

  //bind click event with button
  $('button').on('click', function(event) {
    //prevent default behaviour of submit button
    event.preventDefault();
    
    //create an empty array called selectedCompliments to store compliment options 
    // const selectedCompliments = [];
   
    // Capturing the complimentee's name
    const complimenteeName = $('input[type=text]').val();
    
    
    //Capturing the complimentee's relationship
    const relationshipCapture = $('input[name=relationship]:checked').val();

    //new variable
    const filterCompliments = () => {
      //what is selected?
      const filtered = complimentOptions.filter((complimentOption) => {
        // if the relationship is selected, filter thi compliments where that relationship is true and put them in an array
        if (relationshipCapture === 'friend') {
          return complimentOption.friend === true;
        } else if (relationshipCapture === 'relative') {
          return complimentOption.relative === true;
        } else if (relationshipCapture === 'romanticPartner') {
          return complimentOption.romanticPartner === true;
        } else if (relationshipCapture === 'potential') {
          return complimentOption.potential === true;
        }
         
      });
      return filtered;
    }
    // Generating a random index value for the appropriate compliment options array
    const optionsToDisplay = randoIndex(filterCompliments());

    console.log(optionsToDisplay);
    
    // Printing to the page, the name of the random compliment that is stored in our optionsToDisplay variable 
    $('.results').html(`<h3>${complimenteeName}${optionsToDisplay.compliment}</h3>`).append(`<p>Not exactly what you want to say? Generate another compliment!</p>`);
    
    //on click
  })
 //document ready 
});



// when it is true that a person is "friend" or whatever, then the compliment from that friend object needs to get pushed to  this empty array, that I am then going to choose from randomly
    
//using user's relationship, narrow down our resaults to the specific compliment type- looking at all the objects and checking for what is true do a filter() so if friend is true and partner is true return object compliment we created above outside click 

//random index 

//this targets the existing .results class and puts our compliment item inside of it.

//switch out the generate button with a reset button

//reset page 

//send option via email or tweet
