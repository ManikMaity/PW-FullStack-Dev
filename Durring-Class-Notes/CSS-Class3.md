### CSS Unit 
- Pixels
- Percentage % (It respet to parent)
- em (relative of the vlaue of parent) 
    - 0.5em is 50%
    - 1 is 100%
    - 2em is 200%
- rem (it work with respect to body / root)
    - orger are similer to em
- vw and vh
### Uses
px and % used in height/width/padding/margin
rem an dem used in font and line-height

### em
In font to make text responvise use em and rem
if the font size given in px it will not change respective to parents 

### rem 
it works with the html level respective to root or html


## Display
- Block
- Inline
- Inline-block
- Table

### Block
Block cover the entire width of the webpage. It would not allow any element to his side by side.
Ex - div, section, p , h1 etc

### Inline 
Inline allow the element side by side. But it doesnot have dimantion like width, height dont work in inline.
Ex - a, span, strong, img

### Inline-Block
Inline-block works as a inline which arrow elements back to back. But it allow for width anf height.
Ex - button, etc

## CSS Position
- Static 
    - This is the position which brwoser provides
    - can not swift the element using left, top etc
- Relative
    - A realtive position can change the element position relative to the initial position.
    - it doesnot impact any other element sibilings
- Absolute
    - Postion absolute works with respect to relative parent
    - it comes with another layer
- fixed 
    - it fixed to a one postion
- sticky
    - It works as a normal position but when it reaches a certain postion it got fixed

## Z-Index