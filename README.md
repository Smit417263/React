React Basics

# only need to run npm install the first time you create the project to get all dependencies

# to run the project use: npm run dev

# You can use Components to create more maintainable code
- the component needs to be Uppercase and must have the "export" tag infront inorder to use in a different file

# jsx files allow you to write html in js files that would usually give you an error

# in order to use dynamic variables in your html code of your jsx file: need to use curly braces

# import images at the top and use the alias so it doesn't break during build/production

# Props are custom html attributes set onto Componenets

# named exports need to be imported with curly braces. Default exports can be exported as the function name without curly braces

# moving components into their own files in the components folder is best practice.
# Also want to move relavent css files into seperate files in the components folder. NOTE this doesn't limit the scope of the style to that component. if you create a certain html object that you have css code for it will still be applied to it as well
# need to import the css file into the component that you want to apply it to though

# 2 rules for calling react hooks
# 1 only call hooks in side component functions
# 2 only call hooks at the top level of the component (basically right at the start where there is no if statment, function or inner loop)
