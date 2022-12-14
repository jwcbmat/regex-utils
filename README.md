# Regular Expressions

Regular expressions, also known as regex, are a sequence of characters that define a search pattern.
This search pattern can be used to match and manipulate strings of text.

## Why are regular expressions useful for developers?

Regular expressions are commonly used by developers to perform tasks such as:

- Validating user input
- Searching and replacing text
- Extracting information from a larger body of text

Having a library of pre-defined regular expressions can be extremely useful for a developer.
These pre-defined regex patterns can be easily accessed and used in their code, saving time and effort.

In short, the purpose of having ready-made regular expressions is to provide developers
with a quick and easy way to perform common string manipulation tasks in their code.

## Here are some examples of how to use regular expressions in JavaScript:

### Validating email addresses
To check if a string is a valid email address, we can use the following regular expression:

```javascript
const emailRegex = /^\S+@\S+\.\S+$/;
const isEmail = emailRegex.test("name@domain.com"); // true
```

### Replacing text
To replace all occurrences of a substring in a string, we can use the replace() method and provide a regular
expression as the first argument:

```javascript
const originalString = "I love cats and dogs";
const newString = originalString.replace(/cats|dogs/g, "animals");
// newString = "I love animals and animals"
```

### Extracting information
To extract information from a string, we can use the match() method and provide a regular expression as the argument.
This method returns an array of matches:

```javascript
const url = "https://www.domain.com/path/to/page";
const matches = url.match(/https?:\/\/(\S+?)\/(\S+)/);
// matches = ["https://www.domain.com/path/to/page", "www.domain.com", "path/to/page"]
```

In the example above, the regular expression matches the URL and captures the domain and path.
These captures are then returned in the matches array.


