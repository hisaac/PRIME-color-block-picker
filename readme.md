# Color Block Picker

An interesting learning moment occurred while doing this assignment.

In my JavaScript switch statement, I meant to return strings (`"red"`, `"yellow"`, `"green"`, `"blue"`), but I absentmindedly forgot the quotation marks. This instead returned the words as variable references. To my surprise, it actually worked in my favor.

I had assigned red, yellow, green, and blue as IDs on the `div` elements in my HTML. When I returned these colors as variable names, it returned the *entire `div` element* associated with that ID.

After a little research I learned that **HTML elements with IDs get assigned as global variables in JavaScript** (as long as there is only one element with that ID). This could be very handy in the future. 👌
