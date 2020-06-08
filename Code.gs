var EMAIL_DRAFTED = "EMAIL DRAFTED";

function draftMyEmails() {
  var sheet = SpreadsheetApp.getActiveSheet(); // Use data from the active sheet
  var startRow = 2;                            // First row of data to process
  var numRows = sheet.getLastRow() - 1;        // Number of rows to process
  var lastColumn = sheet.getLastColumn();      // Last column
  var dataRange = sheet.getRange(startRow, 1, numRows, lastColumn) // Fetch the data range of the active sheet
  var data = dataRange.getValues();            // Fetch values for each row in the range

  
  // Running through the sheet
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];  
    // Assign each column to a variable in your email message
    var clientName = row[2];                // Col A: Client name
    var clientEmail = row[0];               // Col B: Client email
    var test = row[3];                      // Col C: Placeholder variable
    var country = row[4];                   // Col D: Country
    // add as many variables as you'd like! 

    
    // Drafting the body of the email
      var emailBody =  '<p>Dear ' + title + ' ' + clientName + ',<p>';
          emailBody += '<p>My name is Navo Das and, placeholdertext<p>'
;
    // Semicolon splits paragraphs
    
   emailBody += '<p>placeholder<p>'      

      // Create the email draft
      GmailApp.createDraft(
        clientEmail,            // Recipient
        disease + ' Research',  // Subject
        '',                     // Body (plain text)
        {
        htmlBody: emailBody    // Options: Body (HTML)
        }
      );
     
      SpreadsheetApp.flush(); 
    }
  }

