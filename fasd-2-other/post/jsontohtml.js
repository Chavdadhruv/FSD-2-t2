const express = require('express');
const app = express();
const jsonData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];
app.get('/', (req, res) => {
    res.set("content-type","text/html")
    res.write('<table border="1"><tr><th>Name</th><th>ID</th></tr>');
    
    for(i of jsonData){
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+JSON.stringify(i.id)+"</td></tr>")
    }
    res.write('</table>');
    res.send()
    });
app.listen(3000)
