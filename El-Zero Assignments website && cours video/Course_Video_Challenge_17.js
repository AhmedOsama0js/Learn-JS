//https://youtu.be/rzmKwzHaETI (Link Video)

// Challenge

/* ===========================================
  == Variables And Concatenation Challenge ==
  ===========================================
  [1] Create 3 Variables [Title, Description, Date]
  -- All In One Statement
  -- Variable Name Must Be Two Words
  -- Title Content Is "Elzero"
  -- Description Content Is "Elzero Web School"
  -- Date Content Is "25/10"
  [2] Create Variable Contains Div And This Div Contains
  -- H3 For Title
  -- P For Paragraph
  -- Span For Time
  [3] Add This Card To Page 4 Times
  [4] Use Template Literals For Concatenate
  Extra
 - Use ES6 Repeat */

//================================

var titleName = "Elzero",
  decParg = "ELzero Web School",
  dateTime = " 25/10";

cardContent = `
  <div>
  <h3>Hello ${titleName}</h3>
  <p>${decParg}</p>
  <span>${dateTime}</span>
  </div>`;

document.write(cardContent.repeat(4));
