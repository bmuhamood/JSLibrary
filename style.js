showData();
function saveBook() {
  let title, author;

  title = document.getElementById("bookTitle").value;
  author = document.getElementById("bookAuthor").value;

  localStorage.setItem("bookTitle", title);
  localStorage.setItem("bookAuthor", author);

  let book_records=new Array();
    book_records=JSON.parse(localStorage.getItem("books"))?JSON.parse(localStorage.getItem("books")):[]
    if(book_records.some((v)=>{return v.title==author}))
    {
      alert("duplicate data");
    }
    else
    {
      book_records.push({
      "title":title,
      "author":author
    })
    localStorage.setItem("books",JSON.stringify(book_records));
    }
    showData();
}

function showData() {
let book_records=new Array();
book_records=JSON.parse(localStorage.getItem("books"))?JSON.parse(localStorage.getItem("books")):[]
if(book_records.some((v)=>{return v.title==author}))
{
  alert("duplicate data");
}
else
{
  book_records.push({
  "title":title,
  "author":author,
  
})
localStorage.setItem("books",JSON.stringify(book_records));
}
showData();
}

function showData()
{
  document.getElementById("showBooks").innerHTML="";
  let book_records=new Array();
book_records=JSON.parse(localStorage.getItem("books"))?JSON.parse(localStorage.getItem("books")):[]
  if(book_records)
  {
    for(let i=0;i<book_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='<div class="col-sm-4" style="padding: 10px;">'+book_records[i].title+'</div><div class="col-sm-4" style="padding: 10px;">'+book_records[i].author+'</div><div class="col-sm-4" style="padding: 10px;">'+book_records[i].delete+'</div>';
  document.getElementById("showBooks").appendChild(addDiv);
    }
  }
  }
  