/*
객체에 포함된 데이터(이름, 값 쌍쌍)를 가리켜 객체의 프로퍼티라고 부른다. 
객체를 생생하는 방법은 다음과 같다.
• Object() 생성자 (X)
• 객체 리터럴     (★)
• 생성자 함수     (X)
• ES6의 클래스    (★)
*/

//----------------------------------------------------------------

//객체 리터럴
let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

//프로퍼티 추가
dic.apple = "사과";
dic.ten = 10;

console.log(dic.apple);
console.log(dic.ten);
//----------------------------------------------------------------

console.log("---------------------");
//프로퍼티 삭제

delete dic.girl;

console.log(dic.boy);
console.log(dic.girl);  //undefined (삭제됨)
console.log(dic.friend);
console.log(dic.apple);
console.log(dic.ten);

console.log("---------------------");
//----------------------------------------------------------------

let book = {
    name:"너의 이름은",
    author: "신카이 마코토",
    publication:"2016"
};

console.log(` 
    책 정보를 출력합니다
    책제목: ${book.name}, 
    저자: ${book.author}, 
    출판년도: ${book.publication}`
);  
console.log("---------------------");

//----------------------------------------------------------------
function creatBook(title, author, publisher, pubdate){
    return{
        title :title,
        author : author,
        publisher : publisher,
        pubdate : pubdate 
    };
} 

const bookData = creatBook("너의 이름은","신카이마코토","미정출판사","2016년");
console.log(`
    책 정보
    책이름 : ${bookData.title} 
    저 자  : ${bookData.author} 
    출판사 : ${bookData.publisher}
    출판년도 : ${bookData.pubdate}
    `);

console.log("---------------------"); 
//----------------------------------------------------------------

//프로퍼티 수정
/*let obj1 = {
     present : "현재",
};

console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);*/

//객체 상수 프로퍼티 수정
/*const obj1 = {
     present : "현재",
};

console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);*/
// 변경됨

//객체 상수 변경(실행결과?)
const obj1 = {
    present : "현재",
};

obj1 = { };
console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);

console.log("----------------");
