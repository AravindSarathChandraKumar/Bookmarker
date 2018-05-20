
document.getElementById('myform').addEventListener('submit',saveBookmark);
function saveBookmark(e){
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;
    var bookmark={name:siteName,value:siteURL}
    
    
    if(localStorage.getItem('bookmarks')===null){
        var bookmarks=[];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else{
        
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify('bookmark'));
        
    }
    
    e.preventDefault();
    
}