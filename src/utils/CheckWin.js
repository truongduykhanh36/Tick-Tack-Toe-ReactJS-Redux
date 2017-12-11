export const calculateWinner = function(squares, valueRows, xIsNext, i_cur) {
    valueRows = Number(valueRows);
    let count = 0;
    let user_cur = (!xIsNext) ? 'X' : 'O';
    if(i_cur < 0)
      return null;
    let x =  i_cur % valueRows;
    let y =  parseInt(i_cur / valueRows);
  
    //duyệt ngang
   for (let i = valueRows * y; i < valueRows * y + valueRows; i++) {
      if(squares[i] === user_cur)
      {
        count++;
        if(count === 5){
          return { 
            winnerLocation: [i-4,i-3,i-2, i-1, i],
            winnerPlayer: user_cur
          };
        }
        
      }else
        count = 0;
    }
  
    //duyệt dọc
    count = 0;
   for (let i = x; i < valueRows * valueRows; i = i + valueRows) {
    if(squares[i] === user_cur)
    {
      count++;
      if(count === 5){
        return { 
          winnerLocation: [i-valueRows,i-valueRows*2,i-valueRows*3, i-valueRows*4, i],
          winnerPlayer: user_cur
        };
      }
      
    }else
      count = 0;
  }
   //duyệt chéo xuoi
   count = 0;
   if(x - y >= 0){
    for (let i = x - y; i < valueRows * valueRows; i = i + valueRows + 1) {
      if(squares[i] === user_cur)
      {
        count++;
        if(count === 5){
          return { 
            winnerLocation: [i-valueRows -1,i-(valueRows + 1)*2,i-(valueRows + 1)*3, i-(valueRows + 1)*4, i],
            winnerPlayer: user_cur
          };
        }
        
      }else
        count = 0;
    }
   }
   else{
    for (let i = (y - x) * valueRows ; i < valueRows * valueRows; i = i + valueRows + 1) {
      if(squares[i] === user_cur)
      {
        count++;
        if(count === 5){
          return { 
            winnerLocation: [i-valueRows -1,i-(valueRows + 1)*2,i-(valueRows + 1)*3, i-(valueRows + 1)*4, i],
            winnerPlayer: user_cur
          };
        }
        
      }else
        count = 0;
    }
   }
    //duyệt chéo ngược
    count = 0;
    if(x + y < valueRows){
      for (let i = x + y; i < valueRows * valueRows; i = i + valueRows - 1) {
        if(squares[i] === user_cur)
        {
          count++;
          if(count === 5){
            return { 
              winnerLocation: [i-valueRows +1,i-(valueRows - 1)*2,i-(valueRows - 1)*3, i-(valueRows - 1)*4, i],
              winnerPlayer: user_cur
            };
          }
          
        }else
          count = 0;
      }
    }else{
      for (let i = (x + y - valueRows + 1) * valueRows + valueRows - 1; i < valueRows * valueRows; i = i + valueRows - 1) {
        if(squares[i] === user_cur)
        {
          count++;
          if(count === 5){
            return { 
              winnerLocation: [i-valueRows +1,i-(valueRows - 1)*2,i-(valueRows - 1)*3, i-(valueRows - 1)*4, i],
              winnerPlayer: user_cur
            };
          }
          
        }else
          count = 0;
      }
    }
  
   
    return null;
  }