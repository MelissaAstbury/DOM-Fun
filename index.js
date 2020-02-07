// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') )

// document.getElementById("MyElement").classList.toggle('MyClass');

// document.getElementById('testing').className.add('example');

// const callMeLater = () => {
//     setTimeout(() => {
//         var element = document.getElementById("testing");
//         element.classList.add("example");
//     }, 300)
// }

// callMeLater();


document.getElementById("testing").className = "example";

const mouseWentOver = () => {
    document.getElementsByTagName('P').className = "example";
} 