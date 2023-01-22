let maxFrameScore=0;

const getScore =(rolls)=>{
  if(rolls.length>21){
    throw new Error("array size is not correct");

  }
  let totalScore=0;
  let isFrameStart=true;
  for(let itr=0;itr<20;itr++){
    if(isFrameStart){
      //if it is a strike
      if(rolls[itr]==10){
        totalScore += (10 + rolls[itr + 1] + rolls[itr+ 2] );
        itr+1;
      }
      else{
        totalScore += rolls[itr];
        isFrameStart=false;
        maxFrameScore=Math.max(maxFrameScore, isFrameStart);

      }
    }
    else{
      //check if the frame is spare
      if(rolls[itr-1]+rolls[itr]==10){
        totalScore += rolls[itr]+rolls[itr+1];
      }
      else{
        totalScore += rolls[itr];
      }
      isFrameStart=false;
      maxFrameScore=Math.max(maxFrameScore, isFrameStart);

    }
  }
  return totalScore;
};

console.log(maxFrameScore);

module.exports = { getScore };