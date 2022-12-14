new RegExp('^\\d+$')// To check if a string is an integer
new RegExp('^\\d*\\.\\d+$') // To check if a string is a real number
new RegExp('^\\S+@\\S+\\.\\S+$') // To check if a string is a valid email address
new RegExp('^(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&\\/\\/=]*)$') // To check if a string is a valid URL

// "String.prototype.test or String.prototype.match to check if a string matches the pattern 
// specified by the regular expression" - You can use these methods to check if a string matches the pattern specified by the regular expression.
