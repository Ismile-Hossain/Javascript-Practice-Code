const books =[
    {name :'book1',price :450,rating :4.2},
    {name :'book2',price :470,rating :5},
    {name :'book3',price :320,rating :3.2},
    {name :'book4',price :600,rating :4.5},
    {name :'book5',price :700,rating :4.5},
];

const filterBook= books.filter((book)=>{
    if(book.price<500 && book.rating >4){
       return book;
    }
});

console.log(filterBook);
const sortBooks=books.sort((b1,b2)=>{
    if(b1.rating<b2.rating){
        return +1;
    }else if(b1.rating===b2.rating){
        return 0;
    }else return -1;
});
console.log(sortBooks);