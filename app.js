
fetch('https://picsum.photos/v2/list')
    .then(function(resp){
        
        return resp.json();
    })
    .then(function(data){
       //console.log(data)
       const node = document.createElement("LI")
       document.getElementById("imgList").appendChild(node); 
        for (item in data)
        {
            //load images 200x200
            let node = document.createElement("LI")
            let url = "https://picsum.photos/id/"+data[item].id+"/200"
            
            let elem = document.createElement("img");
            let id = "img"+item
            elem.setAttribute("src",url);
            elem.setAttribute("id", id);
            document.getElementById("imgList").appendChild(node).appendChild(elem);

            //make images clickable
            let button = document.getElementById(id);
            let elemBig = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            //let p3 = document.createElement("p");
            elemBig.className = "bigIMG";
            let width = data[item].width;
            let height = data[item].height;
            let author = data[item].author;
            p1.innerText = "Author: " + author;
            p2.innerText = "Size: " + width + "x"+height+ " px";
            let urlBig = "https://picsum.photos/id/"+data[item].id+"/"+width+"/"+height;
            elemBig.setAttribute("src", urlBig);
            //onclick - load big image
            button.onclick = function(){
                
                let bigIMG = document.getElementById("bigIMG");
                let dscr = document.getElementById("description");
                bigIMG.innerHTML="";
                dscr.innerHTML="";
                dscr.appendChild(p1);
                dscr.appendChild(p2);
                bigIMG.appendChild(elemBig);
            }
        }
    });

    

    
