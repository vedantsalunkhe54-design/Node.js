const fs = require('fs');

a = fs.writeFileSync('test.txt', 'Hello world, and vedant');
// Create a new file named "test.txt" and write the string "Hello world, and vedant" into it.
// If the file already exists, it will be overwritten.

b = fs.readFileSync('test.txt', 'utf8');
// Read the contents of the file "test.txt" and store it in variable 'b'.
// The 'utf8' encoding is specified to read the file as a string.

console.log(b);
// Output the contents of the file to the console.

c = fs.appendFileSync('test.txt', ' This is an appended text.');
// Append the string " This is an appended text." to the end of the file "test.txt".
// If the file does not exist, it will be created.

d = fs.copyFileSync('test.txt', 'test_copy.txt');
// Copy the contents of "test.txt" to a new file named "test_copy.txt".
// If "test_copy.txt" already exists, it will be overwritten.

// e = fs.unlinkSync('test.txt');
// Delete the file "test.txt" from the filesystem.
// If the file does not exist, an error will be thrown.


