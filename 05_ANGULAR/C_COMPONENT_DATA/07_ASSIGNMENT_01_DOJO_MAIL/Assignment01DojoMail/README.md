# Assignment 01 - Dojo Mail

### Create an app which displays a list of Emails. 

The emails should be created in your AppComponent.ts file within your class. Use interpolation and styling to replicate the below wireframe.

### Hints:

1. *ngFor
2. *ngIf
3. {{ variable }}

#### Method (My thoughts):

1.  Add formatting and styling
2.  Add h1 tag - Dojo Mail
3.  Make mail class, should include:

    a. email is a string
    
    b. importance is a string
    
    c. subject is a string
    
    d. content is a string

4. define 4 new mail objects, as shown in the image
5. define a new array of mail class objects
6. add each mail object to class array
7. create table in html
8. iterate through the mail class objects

#### Actual:

1.  ~~Add formatting and styling~~
2.  ~~Add h1 tag - Dojo Mail~~
3.  ~~Make mail class, should include:~~

    a. ~~email is a string~~
    
    b. ~~importance is a boolean~~
    
    c. ~~subject is a string~~
    
    d. ~~content is a string~~
    
    ----couldn't do this, make a class in a class, need to research

4. ~~define 4 new mail objects, as shown in the image~~
  
    --couldn't do above didn't do this.
    
5. ~~define a new array of mail class objects~~
    
    **--this worked but no class objects, just defined the objects in the array**

6. ~~add each mail object to class array~~

    --didn't make a class no need for this
    
7. ~~create table in html~~
8. ~~iterate through the mail class objects~~

Notes:

1.  Tried different If/Else combos for importance
    
    a.  one with separate if "boolean" statements (*ngIf)
    b.  second with an if/else statement (*ngIf(cond - else template))
